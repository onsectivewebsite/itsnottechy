import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { researchReports, getResearchBySlug } from "@/data/research";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowLeft, ArrowUpRight, FlaskConical, Users, Calendar, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  return researchReports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResearchBySlug(slug);
  if (!r) return {};
  return {
    title: `${r.title} — It's Not Techy Research`,
    description: r.summary,
    alternates: { canonical: `${SITE.url}/research/${r.slug}` },
    openGraph: {
      title: r.title,
      description: r.tagline,
      url: `${SITE.url}/research/${r.slug}`,
      type: "article",
    },
  };
}

const STATUS_LABEL: Record<string, string> = {
  planned: "In development",
  fielding: "Data collection in progress",
  published: "Available now",
};

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResearchBySlug(slug);
  if (!r) notFound();

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: r.title,
    description: r.summary,
    creator: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    url: `${SITE.url}/research/${r.slug}`,
    ...(r.publishedAt ? { datePublished: r.publishedAt } : {}),
    ...(r.fieldedAt ? { temporalCoverage: r.fieldedAt } : {}),
    measurementTechnique: r.methodology,
    inLanguage: "en",
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
          { name: r.title, path: `/research/${r.slug}` },
        ]}
      />
      <Script id={`ld-dataset-${r.slug}`} type="application/ld+json">
        {JSON.stringify(datasetSchema)}
      </Script>

      <article className="section max-w-4xl pt-32">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-xs text-brand hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All research
        </Link>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand">
              {STATUS_LABEL[r.status]}
            </span>
            {r.sampleSize && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                n = {r.sampleSize.toLocaleString()}
              </span>
            )}
            {r.publishedAt && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                Published {new Date(r.publishedAt).toLocaleDateString("en", { month: "short", year: "numeric" })}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {r.title}
          </h1>
          <p className="mt-5 text-xl text-brand">{r.tagline}</p>
          <p className="mt-5 text-white/80">{r.summary}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="card">
            <Users className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-base font-semibold text-white">Audience</h3>
            <p className="mt-2 text-sm text-white/70">{r.audience}</p>
          </div>
          <div className="card">
            <FlaskConical className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-base font-semibold text-white">Methodology</h3>
            <p className="mt-2 text-sm text-white/70">{r.methodology}</p>
          </div>
        </div>

        {r.keyFindings.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Key findings</h2>
            <ul className="mt-6 space-y-3">
              {r.keyFindings.map((f, i) => (
                <li key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {r.status === "planned" && (
          <section className="mt-12 rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-brand" />
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Upcoming research</div>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">Help shape this report</h3>
            <p className="mt-3 text-white/70">
              This report is in methodology design. We&apos;re recruiting respondents in the target audience before the survey fields.
              If you fit the description above and want early access to the findings, email{" "}
              <a href={`mailto:${SITE.email}?subject=Research panel: ${r.title}`} className="text-brand hover:underline">
                {SITE.email}
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-white/50">
              We only publish findings with real data. Until this report fields and closes, there are no results to cite.
            </p>
          </section>
        )}

        {r.citationGuide && (
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-brand" />
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Citation guide</div>
            </div>
            <p className="mt-3 text-sm text-white/70">{r.citationGuide}</p>
          </section>
        )}

        {r.derivativeContent && r.derivativeContent.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">Derived content</h2>
            <ul className="mt-4 space-y-2">
              {r.derivativeContent.map((d) => (
                <li key={d.url}>
                  <Link href={d.url} className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline">
                    {d.title} <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <CTA
        title="Research-driven marketing — put to work"
        subtitle="Same methodology, same rigor, applied to your growth. Book a discovery call."
      />
    </>
  );
}
