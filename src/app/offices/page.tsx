import type { Metadata } from "next";
import Link from "next/link";
import { offices } from "@/data/offices";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Offices — Toronto, NYC, London, Dubai, Mumbai, Singapore, Sydney, Berlin",
  description:
    "Eight global offices delivering digital marketing in your time zone, language, and culture. Explore our offices in Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin.",
  alternates: { canonical: `${SITE.url}/offices` },
  keywords: [
    "digital marketing offices",
    "global marketing agency",
    ...offices.flatMap((o) => o.keywords),
  ],
};

export default function OfficesPage() {
  return (
    <>
      <section className="section pt-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Our offices
          </span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            Eight offices.{" "}
            <span className="gradient-text">One global team.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Every engagement gets senior practitioners in the right time zone,
            language, and cultural context. Pick the office closest to you — or
            let us staff your account across multiple cities if you're running
            multi-region programs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/offices/${o.slug}`}
                className="card group block h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{o.flag}</div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-brand" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
                  <MapPin className="h-3 w-3" />
                  {o.role}
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  {o.city}, {o.country}
                </h2>
                <p className="mt-2 text-sm text-white/60">{o.heroTagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
