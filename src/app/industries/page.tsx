import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
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
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            Industries we <span className="gradient-text">cater to.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            We speak your industry's language. Here are the categories where we've shipped the most
            impact — though we partner with any ambitious brand.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, idx) => (
            <Reveal key={i.slug} delay={(idx % 6) * 0.04}>
              <Link href={`/industries/${i.slug}`} className="card group block h-full">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <IndustryIcon name={i.icon} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-brand" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-white">{i.name}</h2>
                <p className="mt-1 text-sm text-brand">{i.tagline}</p>
                <p className="mt-3 line-clamp-3 text-sm text-white/60">{i.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
