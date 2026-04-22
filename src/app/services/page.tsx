import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  CharReveal,
  Spotlight,
  FloatOrb,
  DrawLine,
  Magnetic,
  Parallax,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ServiceCategories } from "@/components/ServiceCategories";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { ClientOnly } from "@/components/ClientOnly";
import { OrbitAccent } from "@/components/ThreeAccents";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — SEO, Web Design, Social, Video, Paid Marketing & More",
  description:
    "Full-service digital marketing: web design, SEO, social media, video production, brand design, paid marketing, marketing platforms, and more.",
  keywords: [...SITE.keywords, "digital marketing services", "marketing agency services"],
  alternates: { canonical: `${SITE.url}/services` },
};

const ENGAGEMENT_TIERS = [
  {
    name: "Sprint",
    duration: "2–4 weeks",
    body: "A focused single-workstream sprint — a rebrand, an SEO audit, a landing page build, a paid account audit. Fixed scope, fixed fee, fast turnaround.",
    includes: [
      "Dedicated senior lead",
      "One clearly-scoped deliverable",
      "Handoff with source files and docs",
      "30-day support window",
    ],
  },
  {
    name: "Program",
    duration: "3–12 months",
    body: "A multi-workstream program for growing brands — e.g. paid + creative + CRO, or SEO + content + PR. Weekly cadence, monthly business reviews.",
    includes: [
      "Account lead + specialist pod",
      "Weekly rituals and reporting",
      "Live dashboards and Slack",
      "Quarterly roadmap reviews",
    ],
    featured: true,
  },
  {
    name: "Embedded",
    duration: "Ongoing",
    body: "We operate as your in-house marketing team. Fractional CMO at the top, senior specialists across every channel, shared roadmap with your execs.",
    includes: [
      "Fractional CMO leadership",
      "Full-funnel execution",
      "Board-ready reporting",
      "Hiring and vendor management",
    ],
  },
];

const FAQS = [
  {
    q: "Do you offer single services or only packages?",
    a: "Both. Every service below can be booked standalone as a sprint, or bundled into a multi-channel program with a single account lead across all workstreams.",
  },
  {
    q: "How quickly can you start?",
    a: "Discovery calls happen within 48 hours. Most engagements kick off within 1–2 weeks of signed SOW — faster for sprints, slightly longer for complex embedded programs that require team alignment.",
  },
  {
    q: "Do you work with small businesses or only enterprise?",
    a: "Both. Our sprints start at a few thousand dollars and work beautifully for local businesses and early-stage startups. Our embedded programs are built for venture-backed scale-ups and enterprise.",
  },
  {
    q: "How is pricing structured?",
    a: "Sprints are fixed-fee. Programs are monthly retainers sized to the work. Embedded is a fractional day-rate or monthly retainer. Paid media always breaks out media cost from agency fee — you never pay us a percentage of your ad spend.",
  },
  {
    q: "Do you white-label for other agencies?",
    a: "Selectively, yes. We partner with other agencies and consultancies who need senior delivery capacity in SEO, web development, creative, or paid media under NDA.",
  },
  {
    q: "Where do your teams sit?",
    a: "Across eight offices: Toronto (HQ), New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin. We staff your account to your time zone and client sensitivity.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-left-40 top-10" size={520} />
        <ClientOnly>
          <OrbitAccent className="inset-y-0 right-[-10%] hidden w-[40%] md:block" />
        </ClientOnly>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Services
          </span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Every marketing capability your brand needs."
            accentWords={["your", "brand", "needs."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            {services.length} specialized services across four phases —
            attract, convert, engage, and operate. Each service is owned by
            senior practitioners and orchestrated through a single account lead
            so every campaign compounds instead of competing. Click any service
            for a full explanation, process, deliverables, pricing signals, and
            FAQs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic strength={0.3}>
              <a href="#categories" className="btn-primary pulse-glow">
                Browse by phase
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#all" className="btn-ghost">
                See the full list
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <div className="border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={[
            "SEO",
            "Paid Marketing",
            "Social Media",
            "Video Production",
            "Brand Design",
            "Web Development",
            "Email Marketing",
            "Content",
            "Influencer",
            "Marketing Platforms",
            "CRO",
            "Analytics",
          ]}
        />
      </div>

      <div id="categories">
        <ServiceCategories />
      </div>

      <section id="all" className="section relative">
        <FloatOrb className="right-0 top-20" size={400} color="rgba(102, 231, 218, 0.12)" duration={14} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            All {services.length} services
          </span>
        </Reveal>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <CharReveal text="The full capability stack." accentWords={["capability", "stack."]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-white/70">
            Every service gets a dedicated page with what it is, why it
            matters, our process, deliverables, tools, outcomes, and FAQs.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {services.map((s) => (
            <TiltCard key={s.slug} className="h-full" max={5}>
              <Spotlight className="h-full rounded-3xl">
              <Link
                href={`/services/${s.slug}`}
                className="card ring-hover group relative block h-full overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/25">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm text-white/60">{s.tagline}</p>
                <p className="relative mt-3 line-clamp-3 text-sm text-white/50">
                  {s.summary}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {s.keywords.slice(0, 3).map((k) => (
                    <span
                      key={k}
                      className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/60 transition group-hover:border-brand/30 group-hover:text-brand"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </Link>
              </Spotlight>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <section className="section relative">
        <Parallax offset={40} direction="down" className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Engagement tiers
          </span>
        </Reveal>
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <CharReveal text="Three ways to work with us." accentWords={["work", "with", "us."]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-white/70">
            Every engagement starts with a discovery call and a scope that&apos;s
            right-sized to your business — not a pre-packaged tier someone else
            designed.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {ENGAGEMENT_TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition hover:-translate-y-1 ${
                t.featured
                  ? "border-brand/50 bg-brand/5 shadow-glow"
                  : "border-white/10 bg-white/[0.03] hover:border-brand/30"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-900">
                  Most engagements
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-white">
                {t.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-brand">
                {t.duration}
              </p>
              <p className="mt-4 text-white/70">{t.body}</p>
              <ul className="mt-6 space-y-2">
                {t.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    {inc}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-auto pt-6 text-sm font-medium text-brand hover:underline"
              >
                Request a scope →
              </Link>
            </div>
          ))}
        </StaggerGroup>
      </section>

      <section className="section">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            FAQs
          </span>
        </Reveal>
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <CharReveal text="Questions buyers always ask." accentWords={["buyers", "always", "ask."]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-brand/30 open:bg-brand/5"
            >
              <summary className="flex cursor-pointer items-center justify-between text-white">
                <span className="font-medium md:text-lg">{f.q}</span>
                <span className="text-brand transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
