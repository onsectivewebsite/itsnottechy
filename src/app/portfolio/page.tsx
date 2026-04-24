import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  FloatOrb,
  DrawLine,
  Spotlight,
  Magnetic,
} from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { ClientOnly } from "@/components/ClientOnly";
import { LazyCubeField as CubeField } from "@/components/Lazy3D";
import { SITE } from "@/lib/site";
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Case Studies & Client Results",
  description:
    "Selected case studies across SaaS, DTC, healthcare, and local businesses — the playbooks, the experiments, and the numbers behind real client outcomes.",
  alternates: { canonical: `${SITE.url}/portfolio` },
};

const CASES = [
  {
    industry: "SaaS",
    client: "B2B Workflow Platform",
    headline: "From $60 CAC to $22 CAC in 6 months via full-funnel rebuild.",
    services: ["SEO", "Paid Marketing", "Content", "Marketing Platforms"],
    metrics: [
      { icon: TrendingUp, label: "Organic traffic", value: "+412%" },
      { icon: Users, label: "Pipeline", value: "+3.1x" },
      { icon: DollarSign, label: "CAC", value: "−63%" },
    ],
  },
  {
    industry: "DTC",
    client: "Premium Skincare Brand",
    headline: "Scaled from $400k/mo to $1.6M/mo in 8 months profitably.",
    services: ["Performance Marketing", "Creator Marketing", "Email", "CRO"],
    metrics: [
      { icon: TrendingUp, label: "Revenue", value: "+4x" },
      { icon: Users, label: "Email LTV", value: "+87%" },
      { icon: DollarSign, label: "ROAS", value: "3.2x" },
    ],
  },
  {
    industry: "Healthcare",
    client: "Multi-location Dental Group",
    headline: "Doubled patient acquisition across 12 clinics with local SEO.",
    services: ["Local SEO", "Web Design", "Reputation Management"],
    metrics: [
      { icon: TrendingUp, label: "Map impressions", value: "+330%" },
      { icon: Users, label: "Calls", value: "+2.1x" },
      { icon: DollarSign, label: "Cost/lead", value: "−44%" },
    ],
  },
  {
    industry: "Real Estate",
    client: "Boutique Brokerage",
    headline: "Rebranded, relaunched site, and built a social engine from scratch.",
    services: ["Brand Design", "Web Design", "Social Media"],
    metrics: [
      { icon: TrendingUp, label: "Organic leads", value: "+260%" },
      { icon: Users, label: "Social followers", value: "+3.8x" },
      { icon: DollarSign, label: "Listing velocity", value: "+28%" },
    ],
  },
  {
    industry: "B2B / Manufacturing",
    client: "Industrial Automation Mfr.",
    headline: "Built an ABM engine that sourced $8.2M in qualified pipeline.",
    services: ["B2B Marketing", "ABM", "LinkedIn Ads", "Content"],
    metrics: [
      { icon: TrendingUp, label: "Pipeline", value: "$8.2M" },
      { icon: Users, label: "MQL → SQL", value: "+54%" },
      { icon: DollarSign, label: "Payback", value: "< 11 mo" },
    ],
  },
  {
    industry: "Hospitality",
    client: "Boutique Hotel Group",
    headline: "Direct bookings up 3x. Cut OTA dependence by 40%.",
    services: ["Performance Marketing", "Web Design", "Video Production"],
    metrics: [
      { icon: TrendingUp, label: "Direct bookings", value: "+3x" },
      { icon: Users, label: "OTA share", value: "−40%" },
      { icon: DollarSign, label: "Revenue", value: "+52%" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]} />
      <section className="section relative isolate overflow-hidden pt-32">
        <FloatOrb className="-left-32 top-0" size={520} />
        <ClientOnly>
          <CubeField className="inset-y-0 right-[-8%] hidden w-[42%] md:block" />
        </ClientOnly>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Portfolio</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Work that moves numbers."
            accentWords={["moves", "numbers."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            A sample of recent engagements. Full case studies available on request — we respect
            client confidentiality and share detail under NDA.
          </p>
          <div className="mt-8">
            <Magnetic strength={0.3}>
              <Link href="/contact" className="btn-primary pulse-glow">
                Request a case study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <div className="-mt-4 border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={[
            "+412% organic",
            "−63% CAC",
            "4x revenue",
            "$8.2M pipeline",
            "3x direct bookings",
            "+3.8x followers",
            "+330% impressions",
            "< 11mo payback",
          ]}
        />
      </div>

      <section className="section">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <Reveal>
            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-strong:text-white prose-h2:font-display prose-h2:text-3xl prose-h2:tracking-tight prose-h2:text-white md:prose-h2:text-4xl">
              <h2>What real marketing case studies look like</h2>
              <p>
                Most agency portfolios are theater. Cherry-picked vanity
                metrics, no context, no cost, no payback window — just
                &ldquo;3x growth&rdquo; in a big font. We share the numbers
                most agencies hide: what the engagement cost, what the
                attributed revenue actually was, how long payback took, and
                where the program stumbled before it worked. The summaries
                below are written for operators and CFOs — people who need to
                decide whether this kind of work could move their own P&amp;L,
                not be impressed by stock-photo growth charts.
              </p>
              <h2>Why client names aren&apos;t always public</h2>
              <p>
                A lot of our best work happens under NDA. Enterprise SaaS
                won&apos;t let us publish SQL conversion rates. A healthcare
                client can&apos;t share pipeline specifics without clearance.
                Private equity portfolio companies often want metrics
                confidential until exit. We respect that. Every case on this
                page is real; the ones with generic descriptors are confidential
                engagements where we share the full story — named client,
                exact numbers, the contract, reference calls — under mutual
                NDA once a discovery call confirms fit.
              </p>
              <h2>How to read a case study honestly</h2>
              <p>
                Three questions separate a real case study from a marketing
                brochure. What was the baseline before we engaged? How long
                did the lift take to show up and how long did it last? And
                what did the engagement cost as a percentage of the revenue
                lift? We answer all three in every full case study we send —
                because those are the only three numbers that tell you
                whether the program was worth running. Request one below for
                any engagement that looks close to your situation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">
                What a full case study includes
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Business context and pre-engagement baseline metrics.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Scope, staffing, timeline, and the fee structure.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Tactical playbook — what we shipped in each phase.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Attributed outcomes with payback window and CAC impact.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  What didn&apos;t work — the experiments we killed.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Reference call with the client if you want one.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section relative pt-20">
        <FloatOrb className="right-0 top-1/2" size={380} color="rgba(102, 231, 218, 0.10)" duration={16} />
        <StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {CASES.map((c) => (
            <TiltCard key={c.client} className="h-full" max={4}>
              <Spotlight className="h-full rounded-3xl">
              <div className="card ring-hover group relative h-full overflow-hidden">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {c.industry}
                  </span>
                  <span className="text-xs text-white/50">Confidential</span>
                </div>
                <h2 className="relative mt-4 font-display text-2xl font-semibold text-white">{c.client}</h2>
                <p className="relative mt-2 text-white/70">{c.headline}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70 transition group-hover:border-brand/30">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="relative mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition group-hover:border-brand/30 group-hover:bg-brand/5">
                      <Icon className="mx-auto h-4 w-4 text-brand" />
                      <div className="mt-2 font-display text-xl font-semibold text-white">{value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="relative mt-6 inline-flex items-center gap-1 text-xs text-brand underline-slide">
                  Request full case study <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              </Spotlight>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
