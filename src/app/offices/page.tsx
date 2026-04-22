import type { Metadata } from "next";
import Link from "next/link";
import { offices } from "@/data/offices";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  FloatOrb,
  DrawLine,
  Spotlight,
  Parallax,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ClientOnly } from "@/components/ClientOnly";
import { Globe } from "@/components/Globe";
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
      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-left-40 top-20" size={520} />
        <Parallax offset={50} direction="up" className="pointer-events-none absolute right-0 top-16 hidden w-[38%] md:block">
          <ClientOnly>
            <Globe />
          </ClientOnly>
        </Parallax>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Our offices
          </span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Eight offices. One global team."
            accentWords={["One", "global", "team."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Every engagement gets senior practitioners in the right time zone,
            language, and cultural context. Pick the office closest to you — or
            let us staff your account across multiple cities if you&apos;re running
            multi-region programs.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-4" stagger={0.08}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-display text-4xl font-bold text-white">
              <AnimatedNumber value={offices.length} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-brand">Offices</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-display text-4xl font-bold text-white">
              <AnimatedNumber value={4} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-brand">Continents</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-display text-4xl font-bold text-white">
              <AnimatedNumber value={24} suffix="/7" />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-brand">Coverage</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-display text-4xl font-bold text-white">
              <AnimatedNumber value={15} suffix="+" />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-brand">Languages</div>
          </div>
        </StaggerGroup>
      </section>

      <div className="-mt-4 border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={offices.map((o) => `${o.flag} ${o.city}`)}
        />
      </div>

      <section className="section relative pt-20">
        <FloatOrb className="right-0 top-1/3" size={360} color="rgba(102, 231, 218, 0.10)" duration={18} />
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {offices.map((o) => (
            <TiltCard key={o.slug} className="h-full" max={8}>
              <Spotlight className="h-full rounded-3xl">
              <Link
                href={`/offices/${o.slug}`}
                className="card ring-hover group relative block h-full overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className="text-5xl transition-transform duration-500 group-hover:scale-110">{o.flag}</div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <div className="relative mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
                  <MapPin className="h-3 w-3" />
                  {o.role}
                </div>
                <h2 className="relative mt-2 font-display text-2xl font-semibold text-white">
                  {o.city}, {o.country}
                </h2>
                <p className="relative mt-2 text-sm text-white/60">{o.heroTagline}</p>
              </Link>
              </Spotlight>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
