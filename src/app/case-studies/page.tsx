import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { publishedCaseStudies } from "@/data/caseStudies";
import { Reveal, WordReveal, FloatOrb, DrawLine } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowUpRight, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Named Client Results",
  description:
    "Full-length case studies of named clients — the baseline, the engagement, and the measured outcomes. Full studies are published with client permission.",
  alternates: { canonical: `${SITE.url}/case-studies` },
};

export default function CaseStudiesPage() {
  const studies = publishedCaseStudies();

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies" }]} />

      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-left-32 top-10" size={480} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Case studies</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal text="The full story — named, cited, reproducible." accentWords={["named,", "cited,", "reproducible."]} />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            These are the engagements our clients have given us permission to
            share with names, context, and numbers. Each one includes the
            baseline, the approach, the specific outcomes, and what
            didn&apos;t work. For confidential engagements, see the{" "}
            <Link href="/portfolio" className="text-brand hover:underline">portfolio</Link>
            {" "}— we share those under NDA on a discovery call.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        {studies.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-brand" />
              <div className="text-xs uppercase tracking-[0.2em] text-brand">
                Publication pending
              </div>
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">
              Named case studies coming soon
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              We&apos;re gathering publication permissions from a handful of
              marquee clients. Until those sign, every case study we share is
              either anonymized on the{" "}
              <Link href="/portfolio" className="text-brand hover:underline">
                portfolio page
              </Link>{" "}
              or available under NDA after a discovery call. We&apos;d rather
              publish nothing than publish made-up testimonials.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Request a named case study under NDA
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {studies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="card ring-hover group flex h-full flex-col"
              >
                <span className="inline-flex w-fit items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand">
                  {c.industry}
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white group-hover:text-brand">
                  {c.clientDisplay}
                </h2>
                <p className="mt-2 text-white/70">{c.headline}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                      <div className="font-display text-xl font-semibold text-white">{m.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/50">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6 text-xs text-brand underline-slide">
                  Read the full case study <ArrowUpRight className="inline h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}
