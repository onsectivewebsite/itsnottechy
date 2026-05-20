import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { getTransporter, MAIL_FROM, escapeHtml } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const bucket = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const e = bucket.get(ip);
  if (!e || e.resetAt < now) {
    bucket.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (e.count >= MAX) return false;
  e.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anon";
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again." },
      { status: 429 }
    );
  }

  let body: { email?: string; website?: string; consent?: string };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  if (body.website) return NextResponse.json({ ok: true });
  if (!body.email || !EMAIL_RE.test(body.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const email = body.email.trim();
  console.log(
    "[newsletter-subscribe]",
    JSON.stringify({ email, ip, ts: new Date().toISOString() })
  );

  const inbox = process.env.CONTACT_INBOX || SITE.email;
  const transporter = getTransporter();

  // Notify the team of the new subscriber — must succeed.
  try {
    await transporter.sendMail({
      from: `"${SITE.name} Website" <${MAIL_FROM}>`,
      to: inbox,
      replyTo: email,
      subject: `New newsletter subscriber — ${email}`,
      text: `Email: ${email}\nIP: ${ip}\nTime: ${new Date().toISOString()}`,
      html: `<h2 style="margin:0 0 12px">New newsletter subscriber</h2>
        <p style="font-family:system-ui,sans-serif;font-size:14px">
          <strong>Email:</strong> ${escapeHtml(email)}<br>
          <strong>IP:</strong> ${escapeHtml(ip)}<br>
          <strong>Time:</strong> ${new Date().toISOString()}
        </p>`,
    });
  } catch (err) {
    console.error("[newsletter-subscribe] notification failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't complete your subscription right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  // Welcome email to the subscriber — best effort.
  try {
    await transporter.sendMail({
      from: `"${SITE.name}" <${MAIL_FROM}>`,
      to: email,
      subject: `You're subscribed to ${SITE.name}`,
      text: `Thanks for subscribing to the ${SITE.name} newsletter — see you in your inbox.\n\n${SITE.url}`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#11141c">
        <p>Thanks for subscribing to the <strong>${SITE.name}</strong> newsletter.</p>
        <p>You'll hear from us with marketing insights — no noise. See you in your inbox.</p>
        <p style="margin-top:24px">— The ${SITE.name} team<br><a href="${SITE.url}">${SITE.url}</a></p>
      </div>`,
    });
  } catch (err) {
    console.error("[newsletter-subscribe] welcome email failed:", err);
  }

  return NextResponse.json({
    ok: true,
    message: "Subscribed — see you in your inbox next week.",
  });
}
