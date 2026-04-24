import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { industries, getIndustryBySlug, INDUSTRIES_UPDATED_AT } from "@/data/industries";
import { services } from "@/data/services";
import { blogPosts, blogCategories } from "@/data/blogs";
import { ServiceIcon } from "@/components/ServiceIcon";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Reveal, WordReveal, StaggerGroup } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Marketing`,
    description: industry.summary,
    keywords: [...industry.keywords, ...SITE.keywords.slice(0, 10)],
    alternates: { canonical: `${SITE.url}/industries/${industry.slug}` },
  };
}

const INDUSTRY_FAQS: Record<string, { q: string; a: string }[]> = {
  default: [
    {
      q: "How do you tailor the work to our industry?",
      a: "Every engagement starts with a discovery sprint where we interview your team, analyze your category, study your competitors, and review your customer data. The strategy that comes out is specific to your industry's buyer behavior, compliance rules, and economics — not a generic template.",
    },
    {
      q: "Do you share industry benchmarks?",
      a: "Yes. We publish category benchmarks internally and share them with clients during planning — CPMs, CACs, conversion rates, and content performance norms for your category.",
    },
    {
      q: "What's a typical engagement length?",
      a: "Most engagements run 6–12 months to let strategy compound. Sprints are available for focused workstreams (a rebrand, an audit, a landing page build).",
    },
  ],
};

function faqsFor(slug: string) {
  const extra: { q: string; a: string }[] = [];
  if (slug.includes("saas") || slug.includes("b2b")) {
    extra.push(
      {
        q: "What CAC payback targets do you build toward?",
        a: "Under 18 months for efficient SaaS, 6–12 months for PLG. We size programs to the LTV:CAC ratio your board cares about.",
      },
      {
        q: "Can you work with our RevOps team?",
        a: "Yes — we embed with RevOps for attribution, pipeline reporting, and sales/marketing handoff hygiene.",
      }
    );
  }
  if (slug.includes("ecommerce") || slug.includes("dtc")) {
    extra.push(
      {
        q: "What margin profile do you design for?",
        a: "We build to a contribution margin target (typically 30%+ after variable costs) and refuse to scale accounts that can't reach it.",
      },
      {
        q: "Do you handle Shopify development?",
        a: "Yes — theme optimization, headless Hydrogen builds, app integrations, and post-purchase upsell work.",
      }
    );
  }
  if (slug.includes("healthcare") || slug.includes("finance")) {
    extra.push({
      q: "How do you handle compliance review?",
      a: "Every asset passes compliance review before publishing. We work with your legal team and build creative within platform policy constraints.",
    });
  }
  return [...INDUSTRY_FAQS.default, ...extra];
}

function sampleDeliverablesFor(industry: ReturnType<typeof getIndustryBySlug>) {
  if (!industry) return [];
  return [
    `${industry.name} GTM strategy & 90-day plan`,
    "Category positioning & messaging framework",
    "Competitive teardown (top 5 competitors)",
    "Channel roadmap with media mix",
    "Creative concepts & production",
    "Weekly performance dashboards",
    "Monthly executive business review",
    "Quarterly strategic roadmap recalibration",
  ];
}

function kpisFor(industry: ReturnType<typeof getIndustryBySlug>) {
  if (!industry) return [];
  const slug = industry.slug;
  if (slug.includes("saas") || slug.includes("b2b"))
    return ["SQL pipeline", "MQL → SQL %", "CAC payback", "Win rate", "Deal velocity"];
  if (slug.includes("ecommerce") || slug.includes("dtc"))
    return ["Blended ROAS", "New customer CAC", "AOV", "LTV", "30-day retention"];
  if (slug.includes("healthcare"))
    return ["Patient acquisition cost", "Appointments booked", "Cost per call", "Review rating"];
  if (slug.includes("real-estate"))
    return ["Leads generated", "Cost per lead", "Listing appointments", "Closed volume"];
  if (slug.includes("hospitality"))
    return ["Direct bookings", "OTA share reduction", "Revenue per available room", "Review rating"];
  if (slug.includes("local"))
    return ["Map pack impressions", "Calls tracked", "Cost per call", "Review velocity"];
  return ["Pipeline generated", "CAC", "ROAS", "Conversion rate", "LTV"];
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  const mapped = industry.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  // find blog posts whose category matches any related service category keyword
  const relatedPosts = blogPosts
    .filter((p) =>
      industry.keywords.some((k) =>
        p.title.toLowerCase().includes(k.split(" ")[0])
      )
    )
    .slice(0, 6);

  const faqs = faqsFor(industry.slug);
  const updatedAt = industry.updatedAt ?? INDUSTRIES_UPDATED_AT;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` },
      { "@type": "ListItem", position: 3, name: industry.name, item: `${SITE.url}/industries/${industry.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${industry.name} Marketing Playbook`,
    description: industry.summary,
    url: `${SITE.url}/industries/${industry.slug}`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en",
    dateModified: updatedAt,
    datePublished: updatedAt,
  };

  return (
    <>
      <Script id={`ld-bc-ind-${industry.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`ld-faq-ind-${industry.slug}`} type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id={`ld-article-ind-${industry.slug}`} type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/industries" className="hover:text-brand">Industries</Link> /{" "}
          <span className="text-white">{industry.name}</span>
        </nav>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <IndustryIcon name={industry.icon} className="h-6 w-6" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand">Industry</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/60">
              Updated {new Date(updatedAt).toLocaleDateString("en", { month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            <WordReveal text={`${industry.name} Marketing`} accentWords={["Marketing"]} />
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-brand">{industry.tagline}</p>
          <p className="mt-6 max-w-3xl text-white/70">{industry.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Book a free strategy call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-ghost text-sm">
              See related case studies
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="font-display text-2xl font-semibold text-white">Challenges we solve</h2>
            <ul className="mt-3 space-y-2">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-white/70">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="font-display text-2xl font-semibold text-white">Our approach</h2>
            <ul className="mt-3 space-y-2">
              {industry.ourApproach.map((a) => (
                <li key={a} className="flex items-start gap-2 text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Services built for {industry.name}
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Every service below has a dedicated page with process, deliverables,
            tools, and FAQs.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.05}>
          {mapped.map((s) => (
            <TiltCard key={s.slug} className="h-full" max={5}>
              <Link href={`/services/${s.slug}`} className="card group block h-full transition hover:-translate-y-1 hover:border-brand/30">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/25">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.shortTitle}</h3>
                <p className="mt-1 text-sm text-white/60">{s.tagline}</p>
              </Link>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white">
              Sample deliverables
            </h3>
            <ul className="mt-4 space-y-2">
              {sampleDeliverablesFor(industry).map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white">
              KPIs we report on
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {kpisFor(industry).map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm text-brand"
                >
                  {k}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/60">
              Weekly dashboards, monthly executive reviews, and quarterly
              roadmaps keep the engine honest and accountable.
            </p>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Reading for {industry.name} marketers
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group flex h-full flex-col"
              >
                <span className="inline-flex w-fit items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">
                  {p.category}
                </span>
                <h3 className="mt-4 line-clamp-2 font-display text-base font-semibold text-white group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-white/60">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-brand hover:underline"
            >
              Browse all {blogPosts.length} articles →
            </Link>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            FAQs for {industry.name} brands
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-brand/30 open:bg-brand/5"
            >
              <summary className="flex cursor-pointer items-center justify-between text-white">
                <span className="font-medium">{f.q}</span>
                <span className="text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Other industries we serve
          </h2>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {otherIndustries.map((o) => (
            <TiltCard key={o.slug} className="h-full" max={6}>
              <Link
                href={`/industries/${o.slug}`}
                className="card group block h-full transition hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/20 group-hover:text-brand">
                  <IndustryIcon name={o.icon} />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-white">
                  {o.name}
                </h3>
                <p className="text-xs text-brand">{o.tagline}</p>
              </Link>
            </TiltCard>
          ))}
        </StaggerGroup>
        <div className="mt-6">
          <Link
            href="/industries"
            className="text-sm font-medium text-brand hover:underline"
          >
            See all {industries.length} industries →
          </Link>
        </div>
      </section>

      <CTA
        title={`Growing a ${industry.name.toLowerCase()} brand?`}
        subtitle="Tell us where you are today — we'll draft a 90-day plan tailored to your industry, at no cost."
      />
    </>
  );
}
