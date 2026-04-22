"use client";

const LOGOS = [
  "Next.js",
  "Shopify",
  "Vercel",
  "HubSpot",
  "Klaviyo",
  "Google",
  "Meta",
  "LinkedIn",
  "TikTok",
  "Figma",
  "Webflow",
  "Sanity",
  "Segment",
  "Triple Whale",
  "Amplitude",
];

export function LogoTicker() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />
      <div className="flex w-max animate-marquee items-center gap-16 px-8">
        {row.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-white/45 transition hover:text-brand md:text-3xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
