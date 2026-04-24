import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { researchReports } from "@/data/research";
import { Reveal, WordReveal, FloatOrb, DrawLine, Spotlight } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowUpRight, FlaskConical, Radio, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research — Original Marketing Data & Industry Benchmarks",
  description:
    "Our research program publishes original survey data on marketing strategy, AI adoption, multi-region growth, and channel economics. Free reports, transparent methodology, honest findings.",
  alternates: { canonical: `${SITE.url}/research` },
};

const STATUS_LABEL: Record<string, string> = {
  planned: "In development",
  fielding: "Data collection in progress",
  published: "Available now",
};
const STATUS_TONE: Record<string, string> = {
  planned: "border-white/10 bg-white/[0.03] text-white/60",
  fielding: "border-brand/40 bg-brand/10 text-brand",
  published: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
};

export default function ResearchPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research — It's Not Techy",
    url: `${SITE.url}/research`,
    description:
      "Original marketing research — methodology, active surveys, and published reports.",
    mainEntity: researchReports.map((r) => ({
      "@type": "Dataset",
      name: r.title,
      description: r.summary,
      creator: { "@id": `${SITE.url}/#organization` },
      ...(r.publishedAt ? { datePublished: r.publishedAt } : {}),
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Research", path: "/research" }]} />
      <Script id="ld-research-collection" type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </Script>

      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-left-32 top-10" size={480} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Research</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="Original data. Transparent methodology."
            accentWords={["Transparent", "methodology."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Good marketing strategy needs better data than press releases and
            vendor-sponsored reports. Our research program runs original
            surveys of marketing leaders, publishes the methodology up front,
            and makes the findings free. When there&apos;s no data yet, we say
            so — no made-up statistics, no borrowed figures presented as our
            own.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <FlaskConical className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                How the research runs
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Every report publishes its methodology, sample size, and
                field dates before findings are shared. Respondents are
                anonymized; no individual company is identified in
                aggregate data.
              </p>
            </div>
            <div className="card">
              <Radio className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                How to participate
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Marketing leaders at growth-stage companies can participate in
                any active survey. Respondents get early access to full
                datasets. Email{" "}
                <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">
                  {SITE.email}
                </a>{" "}
                to join the panel.
              </p>
            </div>
            <div className="card">
              <FileText className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                How to cite findings
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Each report includes a citation guide with proper attribution
                and sample size. Journalists, analysts, and other agencies
                are welcome to cite — we ask that you link back to the full
                report page.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Current and planned research
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            A small number of deeply-researched reports, refreshed annually.
            Each page below shows the methodology transparently — status moves
            from &quot;planned&quot; to &quot;fielding&quot; to
            &quot;published&quot; as work progresses.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {researchReports.map((r) => (
            <Spotlight key={r.slug} className="h-full rounded-3xl">
              <Link
                href={`/research/${r.slug}`}
                className="card ring-hover group flex h-full flex-col"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ${STATUS_TONE[r.status]}`}
                  >
                    {STATUS_LABEL[r.status]}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white group-hover:text-brand">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-brand">{r.tagline}</p>
                <p className="mt-3 line-clamp-4 text-sm text-white/60">
                  {r.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-white/50">
                  {r.sampleSize ? (
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
                      n = {r.sampleSize.toLocaleString()}
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
                      Audience: {r.audience.split(",")[0]}
                    </span>
                  )}
                </div>
              </Link>
            </Spotlight>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-8 md:p-12">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-brand">
              Research panel
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Join the research panel
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              We invite marketing leaders to participate in active surveys —
              you get early access to full datasets, an honest benchmark
              against your peers, and optional attribution if you want to be
              credited. Totally anonymous if you don&apos;t.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${SITE.email}?subject=Research panel signup`} className="btn-primary">
                Email us to join
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-ghost">
                Or request the current survey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Need research-backed marketing strategy?"
        subtitle="We apply the same rigor to client engagements as we do to our research. Book a discovery call — we'll walk through what a data-driven marketing program looks like for your business."
      />
    </>
  );
}
