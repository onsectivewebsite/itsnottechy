import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  glossaryTerms,
  GLOSSARY_CATEGORIES,
  glossaryTermsByCategory,
  GLOSSARY_UPDATED_AT,
} from "@/data/glossary";
import {
  Reveal,
  WordReveal,
  FloatOrb,
  DrawLine,
  Spotlight,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowUpRight, BookOpenText } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Glossary — Definitions, Context, and Nuance",
  description: `A working glossary of ${glossaryTerms.length}+ marketing terms — SEO, paid media, email, analytics, CRO, B2B, brand, content, AI, and social — written for operators. Every entry is answer-first with a definition, context, example, and nuance.`,
  alternates: { canonical: `${SITE.url}/glossary` },
};

export default function GlossaryIndexPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE.url}/glossary#termset`,
    name: "It's Not Techy Marketing Glossary",
    url: `${SITE.url}/glossary`,
    description: `A glossary of ${glossaryTerms.length}+ marketing terms covering SEO, paid, email, analytics, CRO, B2B, brand, content, AI, and social.`,
    dateModified: GLOSSARY_UPDATED_AT,
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE.url}/glossary/${t.slug}#term`,
      name: t.term,
      description: t.definition,
      url: `${SITE.url}/glossary/${t.slug}`,
      inDefinedTermSet: `${SITE.url}/glossary#termset`,
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }]} />
      <Script id="ld-glossary-index" type="application/ld+json">
        {JSON.stringify(definedTermSet)}
      </Script>

      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-left-32 top-10" size={480} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Glossary</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text={`${glossaryTerms.length}+ marketing terms, explained for operators.`}
            accentWords={["explained", "for", "operators."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Every entry starts with a direct answer, then adds the context,
            examples, and nuance that generic definitions leave out. Written
            for marketing operators who need more than a one-sentence
            dictionary lookup — and structured so AI systems and search
            engines can cite the passages that actually matter.
          </p>
          <div className="mt-6 text-xs text-white/50">
            Updated{" "}
            {new Date(GLOSSARY_UPDATED_AT).toLocaleDateString("en", {
              month: "long",
              year: "numeric",
            })}
            . Spot an out-of-date entry or a missing term? Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">
              {SITE.email}
            </a>
            .
          </div>
        </Reveal>
      </section>

      <section className="section pt-0">
        {GLOSSARY_CATEGORIES.map((cat) => {
          const terms = glossaryTermsByCategory(cat.slug);
          if (terms.length === 0) return null;
          return (
            <div key={cat.slug} id={cat.slug} className="mt-12 first:mt-0 scroll-mt-28">
              <Reveal>
                <div className="flex items-center gap-3">
                  <BookOpenText className="h-5 w-5 text-brand" />
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {cat.name}
                  </h2>
                  <span className="text-xs text-white/40">
                    ({terms.length} term{terms.length === 1 ? "" : "s"})
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-white/60">
                  {cat.description}
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {terms.map((t) => (
                  <Spotlight key={t.slug} className="h-full rounded-2xl">
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="card ring-hover group flex h-full flex-col"
                    >
                      <h3 className="font-display text-base font-semibold text-white group-hover:text-brand">
                        {t.term}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 line-clamp-3">
                        {t.tagline}
                      </p>
                      <div className="mt-auto pt-4 text-xs text-brand underline-slide inline-flex items-center gap-1">
                        Read definition{" "}
                        <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </Spotlight>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CTA
        title="Need a team that knows what these mean?"
        subtitle="We don't just define the terms — we ship the work. Book a 30-minute discovery call."
      />
    </>
  );
}
