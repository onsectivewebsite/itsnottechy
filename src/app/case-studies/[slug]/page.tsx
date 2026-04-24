import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";

export async function generateStaticParams() {
  return caseStudies.filter((c) => c.status !== "draft").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c || c.status === "draft") return {};
  return {
    title: `${c.clientDisplay} — Case Study`,
    description: c.headline,
    alternates: { canonical: `${SITE.url}/case-studies/${c.slug}` },
    openGraph: {
      title: `${c.clientDisplay} — Case Study`,
      description: c.headline,
      url: `${SITE.url}/case-studies/${c.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c || c.status === "draft") notFound();

  const related = (c.relatedServices ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/case-studies/${c.slug}#article`,
    headline: `${c.clientDisplay} — ${c.headline}`,
    description: c.summary,
    datePublished: c.completedAt,
    dateModified: c.completedAt,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en",
    mainEntityOfPage: `${SITE.url}/case-studies/${c.slug}`,
    about: {
      "@type": "Service",
      name: `${c.industry} marketing`,
      provider: { "@id": `${SITE.url}/#organization` },
    },
  };

  const reviewSchema = c.testimonial
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: { "@id": `${SITE.url}/#organization` },
        reviewBody: c.testimonial.quote,
        author: { "@type": "Person", name: c.testimonial.attributedTo },
        publisher: { "@id": `${SITE.url}/#organization` },
      }
    : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: c.clientDisplay, path: `/case-studies/${c.slug}` },
        ]}
      />
      <Script id={`ld-case-${c.slug}`} type="application/ld+json">
        {JSON.stringify(caseStudySchema)}
      </Script>
      {reviewSchema && (
        <Script id={`ld-review-${c.slug}`} type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </Script>
      )}

      <article className="section max-w-4xl pt-32">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs text-brand hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> All case studies
        </Link>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand">
              {c.industry}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
              {c.duration}
            </span>
            {c.status === "anonymized" && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60">
                Client name withheld by mutual agreement
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {c.clientDisplay}
          </h1>
          <p className="mt-5 text-xl text-brand">{c.headline}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {c.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="font-display text-3xl font-semibold text-white">{m.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-brand">{m.label}</div>
              {m.baseline && <div className="mt-1 text-[10px] text-white/50">vs {m.baseline}</div>}
            </div>
          ))}
        </div>

        <div className="prose prose-invert mt-12 max-w-none prose-p:text-white/80 prose-h2:font-display prose-h2:tracking-tight prose-h2:text-white prose-h2:text-3xl prose-h2:mt-10">
          <h2>Summary</h2>
          <p>{c.summary}</p>
          <h2>The baseline</h2>
          <p>{c.baseline}</p>
          <h2>What we shipped</h2>
          <p>{c.approach}</p>
          <h2>The outcome</h2>
          <p>{c.outcome}</p>
        </div>

        {c.testimonial && (
          <aside className="mt-12 rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-8">
            <Quote className="h-6 w-6 text-brand" />
            <blockquote className="mt-4 text-xl text-white/90 italic">
              &ldquo;{c.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-4">
              <div className="font-display text-base font-semibold text-white">
                {c.testimonial.attributedTo}
              </div>
              <div className="text-sm text-white/60">{c.testimonial.role}</div>
            </div>
          </aside>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">Services used</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-sm text-brand hover:bg-brand/20"
                >
                  {r.shortTitle}
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTA />
    </>
  );
}
