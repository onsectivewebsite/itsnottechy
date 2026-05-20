import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { getTransporter, MAIL_FROM, escapeHtml } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: string;
  website?: string;
};

const bucket = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = bucket.get(ip);
  if (!entry || entry.resetAt < now) {
    bucket.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX) return false;
  entry.count += 1;
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anon";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) errors.push("Name is required.");
  if (!body.email || !EMAIL_RE.test(body.email)) errors.push("Valid email is required.");
  if (!body.message || body.message.trim().length < 10) errors.push("Please add a short message.");
  if (!body.consent) errors.push("Consent is required.");

  if (errors.length) {
    return NextResponse.json({ ok: false, message: errors.join(" ") }, { status: 400 });
  }

  const payload = {
    receivedAt: new Date().toISOString(),
    inbox: process.env.CONTACT_INBOX || SITE.email,
    ip,
    ...body,
  };

  console.log("[contact-form]", JSON.stringify(payload));

  const name = body.name!.trim();
  const email = body.email!.trim();
  const fields: Array<[string, string | undefined]> = [
    ["Name", name],
    ["Email", email],
    ["Company", body.company],
    ["Phone", body.phone],
    ["Service", body.service],
    ["Message", body.message?.trim()],
    ["IP", ip],
  ];
  const rowsHtml = fields
    .filter(([, v]) => v && v.length)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${k}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(
          v as string
        )}</td></tr>`
    )
    .join("");

  const transporter = getTransporter();

  // Notification to the team — must succeed.
  try {
    await transporter.sendMail({
      from: `"${SITE.name} Website" <${MAIL_FROM}>`,
      to: payload.inbox,
      replyTo: email,
      subject: `New contact enquiry — ${name}`,
      text: fields
        .filter(([, v]) => v && v.length)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
      html: `<h2 style="margin:0 0 12px">New contact enquiry</h2><table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rowsHtml}</table>`,
    });
  } catch (err) {
    console.error("[contact-form] notification failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't send your message right now. Please email us directly or try again shortly.",
      },
      { status: 502 }
    );
  }

  // Autoreply to the visitor — best effort, never blocks the response.
  try {
    await transporter.sendMail({
      from: `"${SITE.name}" <${MAIL_FROM}>`,
      to: email,
      subject: `Thanks for contacting ${SITE.name}`,
      text: `Hi ${name},\n\nThanks for reaching out to ${SITE.name} — we've received your message and will be in touch within one business day.\n\nFor anything urgent, call us at ${SITE.phone}.\n\n— The ${SITE.name} team\n${SITE.url}`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#11141c">
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out to <strong>${SITE.name}</strong> — we've received your message and will be in touch within one business day.</p>
        <p>For anything urgent, call us at <a href="tel:${SITE.phoneRaw}">${SITE.phone}</a>.</p>
        <p style="margin-top:24px">— The ${SITE.name} team<br><a href="${SITE.url}">${SITE.url}</a></p>
      </div>`,
    });
  } catch (err) {
    console.error("[contact-form] autoreply failed:", err);
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks — we'll be in touch within one business day.",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, name: "contact-api", status: "healthy" });
}
