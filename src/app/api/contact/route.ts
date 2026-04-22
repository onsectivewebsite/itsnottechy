import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

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

  return NextResponse.json({
    ok: true,
    message: "Thanks — we'll be in touch within one business day.",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, name: "contact-api", status: "healthy" });
}
