import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Reveal, WordReveal, StaggerGroup } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
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
      <section className="section pt-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Industries</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Industries we cater to."
            accentWords={["cater", "to."]}
          />
        </h1>
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

      <section className="section pt-20">
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {industries.map((i) => (
            <TiltCard key={i.slug} className="h-full" max={6}>
              <Link href={`/industries/${i.slug}`} className="card group relative block h-full overflow-hidden">
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
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
