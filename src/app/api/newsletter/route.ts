import { NextResponse } from "next/server";

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

  console.log(
    "[newsletter-subscribe]",
    JSON.stringify({ email: body.email, ip, ts: new Date().toISOString() })
  );

  return NextResponse.json({
    ok: true,
    message: "Subscribed — see you in your inbox next week.",
  });
}
