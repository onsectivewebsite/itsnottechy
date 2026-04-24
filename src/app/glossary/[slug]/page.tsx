import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  glossaryTerms,
  getGlossaryTerm,
  GLOSSARY_CATEGORIES,
  GLOSSARY_UPDATED_AT,
  glossaryTermsByCategory,
} from "@/data/glossary";
import { services, getServiceBySlug } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowLeft, ArrowUpRight, Quote, Lightbulb, BookOpenText } from "lucide-react";

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) return {};
  return {
    title: `${t.term} — Marketing Glossary`,
    description: t.definition,
    alternates: { canonical: `${SITE.url}/glossary/${t.slug}` },
    openGraph: {
      title: `${t.term} — Marketing Glossary`,
      description: t.tagline,
      url: `${SITE.url}/glossary/${t.slug}`,
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) notFound();

  const category = GLOSSARY_CATEGORIES.find((c) => c.slug === t.category)!;
  const relatedTerms = (t.related ?? [])
    .map((s) => getGlossaryTerm(s))
    .filter(Boolean) as typeof glossaryTerms;
  const relatedServices = (t.relatedServices ?? [])
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as typeof services;

  // Suggest other terms in the same category the reader might want next
  const categoryPeers = glossaryTermsByCategory(t.category)
    .filter((x) => x.slug !== t.slug && !(t.related ?? []).includes(x.slug))
    .slice(0, 4);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE.url}/glossary/${t.slug}#term`,
    name: t.term,
    alternateName: t.tagline,
    description: t.definition,
    url: `${SITE.url}/glossary/${t.slug}`,
    inDefinedTermSet: `${SITE.url}/glossary#termset`,
    termCode: t.slug,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/glossary/${t.slug}#article`,
    headline: `${t.term} — Definition, Context, and Nuance`,
    description: t.definition,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    datePublished: GLOSSARY_UPDATED_AT,
    dateModified: GLOSSARY_UPDATED_AT,
    inLanguage: "en",
    mainEntityOfPage: `${SITE.url}/glossary/${t.slug}`,
    about: {
      "@id": `${SITE.url}/glossary/${t.slug}#term`,
    },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: t.term, path: `/glossary/${t.slug}` },
        ]}
      />
      <Script id={`ld-term-${t.slug}`} type="application/ld+json">
        {JSON.stringify(definedTermSchema)}
      </Script>
      <Script id={`ld-article-term-${t.slug}`} type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      <article className="section max-w-3xl pt-32">
        <Link href="/glossary" className="inline-flex items-center gap-2 text-xs text-brand hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> All terms
        </Link>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/glossary#${category.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand hover:bg-brand/20"
            >
              {category.name}
            </Link>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/60">
              Updated{" "}
              {new Date(GLOSSARY_UPDATED_AT).toLocaleDateString("en", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {t.term}
          </h1>
          <p className="mt-5 text-xl text-brand">{t.tagline}</p>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
            <BookOpenText className="h-4 w-4" /> Definition
          </div>
          <p className="mt-3 text-lg text-white/90 leading-relaxed">
            {t.definition}
          </p>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Context
          </h2>
          <div className="mt-4 space-y-4">
            {t.context.map((p, i) => (
              <p key={i} className="text-white/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
              <Quote className="h-4 w-4" /> Example
            </div>
            <p className="mt-3 text-white/85 leading-relaxed">{t.example}</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border border-brand/20 bg-brand/[0.04] p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
              <Lightbulb className="h-4 w-4" /> The nuance most definitions miss
            </div>
            <p className="mt-3 text-white/85 leading-relaxed">{t.nuance}</p>
          </div>
        </section>

        {relatedTerms.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Related terms
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedTerms.map((r) => (
                <Link
                  key={r.slug}
                  href={`/glossary/${r.slug}`}
                  className="card ring-hover group block"
                >
                  <h3 className="font-display text-base font-semibold text-white group-hover:text-brand">
                    {r.term}
                  </h3>
                  <p className="mt-1 text-sm text-white/60 line-clamp-2">
                    {r.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Services that apply this
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-sm text-brand hover:bg-brand/20"
                >
                  {s.shortTitle}
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {categoryPeers.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              More {category.name} terms
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {categoryPeers.map((p) => (
                <Link
                  key={p.slug}
                  href={`/glossary/${p.slug}`}
                  className="card ring-hover group block"
                >
                  <h3 className="font-display text-sm font-semibold text-white group-hover:text-brand">
                    {p.term}
                  </h3>
                  <p className="mt-1 text-xs text-white/60 line-clamp-2">
                    {p.tagline}
                  </p>
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
