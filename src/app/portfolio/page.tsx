import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
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
      <section className="section pt-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Portfolio</span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            Work that <span className="gradient-text">moves numbers.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            A sample of recent engagements. Full case studies available on request — we respect
            client confidentiality and share detail under NDA.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={(i % 4) * 0.05}>
              <div className="card h-full">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand">{c.industry}</span>
                  <span className="text-xs text-white/50">Confidential</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">{c.client}</h2>
                <p className="mt-2 text-white/70">{c.headline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                      <Icon className="mx-auto h-4 w-4 text-brand" />
                      <div className="mt-2 font-display text-xl font-semibold text-white">{value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-1 text-xs text-brand hover:underline">
                  Request full case study <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
