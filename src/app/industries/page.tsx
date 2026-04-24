import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { IndustryIcon } from "@/components/IndustryIcon";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  FloatOrb,
  DrawLine,
  Spotlight,
} from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { ClientOnly } from "@/components/ClientOnly";
import { LazyCrystalCluster as CrystalCluster } from "@/components/Lazy3D";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SaaS & B2B, Ecommerce, Healthcare, Finance, Real Estate, Education, Hospitality, Local, Automotive, Gaming, and more — every industry gets a tailored playbook.",
  keywords: ["digital marketing by industry", "industry marketing agency", ...SITE.keywords.slice(0, 10)],
  alternates: { canonical: `${SITE.url}/industries` },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]} />
      <section className="section relative isolate overflow-hidden pt-32">
        <FloatOrb className="-right-32 top-10" size={480} color="rgba(102, 231, 218, 0.14)" />
        <ClientOnly>
          <CrystalCluster className="inset-y-10 right-0 hidden w-[38%] md:block" />
        </ClientOnly>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Industries</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Industries we cater to."
            accentWords={["cater", "to."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            We speak your industry&apos;s language. Here are the categories where we&apos;ve shipped the most
            impact — though we partner with any ambitious brand.
          </p>
        </Reveal>
      </section>

      <div className="-mt-4 border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={industries.map((i) => i.name)}
        />
      </div>

      <section className="section">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <Reveal>
            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-strong:text-white prose-h2:font-display prose-h2:text-3xl prose-h2:tracking-tight prose-h2:text-white md:prose-h2:text-4xl">
              <h2>Why an industry-specific marketing playbook matters</h2>
              <p>
                Generic marketing advice treats every business the same.
                Every industry has its own buyer journey, sales cycle, unit
                economics, compliance rules, and content expectations. A
                playbook that works for a $99/mo SaaS tool will bankrupt a
                healthcare clinic. What wins in DTC beauty is illegal in
                fintech. The difference between a healthy marketing program
                and an expensive one is usually whether the team knows the
                industry rules before they write the plan. That&apos;s what
                every page under /industries is for — specific, tactical,
                industry-fluent playbooks.
              </p>
              <h2>How we build every industry playbook</h2>
              <p>
                For each industry we serve, the team that runs those accounts
                has written a playbook covering the five things that actually
                differ: who the customer is and how they research, which
                channels pay back and which are vanity, what regulatory
                guardrails shape creative and data, what the benchmark CAC /
                LTV / payback window looks like, and which competitor patterns
                are worth copying versus avoiding. Click any industry below
                for the full document — it&apos;s the exact starting point
                we&apos;d walk you through on a discovery call.
              </p>
              <h2>Who this is for</h2>
              <p>
                If you&apos;re a founder, marketing lead, or operator whose
                category shows up on the list below, the playbook will read
                like a cheat sheet for your next quarter. If your industry
                isn&apos;t listed, it likely means we haven&apos;t shipped
                enough engagements there to publish an honest playbook yet —
                we&apos;ll still take the call, but we won&apos;t pretend to
                be specialists we&apos;re not.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">
                What each industry page includes
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Buyer personas, research behavior, and decision triggers.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Which channels pay back — ranked, with median CAC.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Compliance and data guardrails that shape creative.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Seasonality, pricing cycles, and renewal dynamics.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  Competitor teardowns and patterns worth copying.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section relative pt-20">
        <FloatOrb className="-left-20 bottom-20" size={400} color="rgba(0, 179, 164, 0.10)" duration={15} />
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {industries.map((i) => (
            <TiltCard key={i.slug} className="h-full" max={6}>
              <Spotlight className="h-full rounded-3xl">
              <Link href={`/industries/${i.slug}`} className="card ring-hover group relative block h-full overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/20 group-hover:text-brand">
                    <IndustryIcon name={i.icon} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h2 className="relative mt-5 font-display text-xl font-semibold text-white">{i.name}</h2>
                <p className="relative mt-1 text-sm text-brand">{i.tagline}</p>
                <p className="relative mt-3 line-clamp-3 text-sm text-white/60">{i.summary}</p>
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
