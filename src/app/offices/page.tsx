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
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ClientOnly } from "@/components/ClientOnly";
import { LazyGlobe as Globe } from "@/components/Lazy3D";
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
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Offices", path: "/offices" }]} />
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

      <section className="section">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <Reveal>
            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-strong:text-white prose-h2:font-display prose-h2:text-3xl prose-h2:tracking-tight prose-h2:text-white md:prose-h2:text-4xl">
              <h2>Why local offices matter for global marketing</h2>
              <p>
                Running a marketing program across time zones is harder than
                it looks. Paid media benchmarks are different in the UAE than
                in the UK. Influencer rate cards in Sydney don&apos;t match
                New York. GDPR changes what analytics you can collect in
                Berlin; PIPEDA changes the rules in Toronto; India&apos;s DPDP
                Act reshapes lifecycle email for Mumbai audiences. A team
                operating out of one city and pretending to run a global
                program will either get the compliance wrong, the culture
                wrong, or the timing wrong — usually all three. Our eight
                offices exist so every engagement is staffed by people who
                actually live in the market they&apos;re running.
              </p>
              <h2>How we staff multi-region accounts</h2>
              <p>
                For single-market brands, your account sits in the office
                closest to you. For multi-country programs — a Toronto-HQ SaaS
                expanding into EMEA, say, or a London DTC launching in the GCC
                — we staff a lead office for strategy plus regional specialists
                embedded for execution. Same shared dashboard, same account
                owner, but media buying happens on the ground in each market
                with practitioners who know the platforms, the creators, and
                the compliance rules cold.
              </p>
              <h2>Which office to pick if you&apos;re not sure</h2>
              <p>
                If you&apos;re in Canada or the US, start with Toronto or New
                York — both cover Americas accounts and hand off work to
                production teams in Mumbai for 24-hour cycle time when needed.
                UK and European brands: London handles EMEA; Berlin is the
                right call if you need heavier engineering (headless commerce,
                server-side tracking, MarTech architecture). GCC and Middle
                East: Dubai. India and wider APAC: Mumbai for delivery,
                Singapore for regional strategy, Sydney for ANZ-specific work.
                Every office page below goes deep on the industries, services,
                and specialties each team leads.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">
                What each office contributes
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Toronto</strong> — Global HQ,
                    strategy, CAD/PIPEDA compliance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">New York</strong> — Americas
                    paid media, DTC, fintech velocity.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">London</strong> — EMEA
                    programs, GDPR analytics, multi-language SEO.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Dubai</strong> — Arabic /
                    English bilingual creative, GCC compliance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Mumbai</strong> — Senior
                    production capacity, India-market campaigns.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Singapore</strong> — APAC
                    hub, multi-country Southeast Asia campaigns.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Sydney</strong> — ANZ
                    creative and compliance, Oceania-fluent media.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-white">Berlin</strong> —
                    engineering-heavy builds, EU data architecture.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

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
