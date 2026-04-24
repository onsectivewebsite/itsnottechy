import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { services, getServiceBySlug } from "@/data/services";
import { industries } from "@/data/industries";
import { blogPosts, blogCategories } from "@/data/blogs";
import { offices } from "@/data/offices";
import { Reveal, WordReveal, StaggerGroup } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { IndustryIcon } from "@/components/IndustryIcon";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

function bestBlogCategory(serviceSlug: string): string | null {
  const map: Record<string, string> = {
    seo: "seo",
    "performance-marketing": "paid-marketing",
    "social-media-marketing": "social-media",
    "social-media-strategy": "social-media",
    "content-marketing": "content-marketing",
    "web-development": "web-design",
    branding: "brand-design",
    "email-marketing": "email-crm",
    "marketing-automation": "email-crm",
    "marketing-platforms": "marketing-platforms",
    "ai-marketing": "ai-marketing",
    "ecommerce-marketing": "ecommerce",
    "b2b-marketing": "b2b-growth",
    analytics: "analytics",
    "local-seo": "local-seo",
    "conversion-rate-optimization": "cro",
    "video-production": "video-production",
    "graphic-design": "brand-design",
    "ux-design": "web-design",
    "influencer-marketing": "social-media",
    pr: "content-marketing",
    "reputation-management": "local-seo",
    "app-development": "web-design",
    consulting: "b2b-growth",
  };
  return map[serviceSlug] ?? null;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — ${service.shortTitle} Agency`,
    description: service.summary,
    keywords: [...service.keywords, ...SITE.keywords.slice(0, 10)],
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `${SITE.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter(Boolean) as typeof services;

  // Industries that consume this service
  const servingIndustries = industries.filter((i) =>
    i.services.includes(service.slug)
  );

  // Blog category & recent posts for this service
  const matchedCat = bestBlogCategory(service.slug);
  const catObj = matchedCat
    ? blogCategories.find((c) => c.slug === matchedCat)
    : null;
  const recentPosts = matchedCat
    ? blogPosts.filter((p) => p.categorySlug === matchedCat).slice(0, 3)
    : [];

  // Offices that lead this service
  const leadingOffices = offices.filter((o) =>
    o.popularServices.includes(service.slug)
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "Worldwide",
    description: service.summary,
    url: `${SITE.url}/services/${service.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <Script id={`ld-faq-${service.slug}`} type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id={`ld-service-${service.slug}`} type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id={`ld-bc-${service.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumb)}
      </Script>

      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/services" className="hover:text-brand">Services</Link> /{" "}
          <span className="text-white">{service.shortTitle}</span>
        </nav>

        <Reveal>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand">{service.shortTitle}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            <WordReveal text={service.title} />
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-white/80">{service.tagline}</p>
          <p className="mt-6 max-w-3xl text-white/70">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Book a discovery call
            </Link>
            <a href="#process" className="btn-ghost text-sm">
              See our process
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="card md:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-white">What it is</h2>
            <p className="mt-3 text-white/70">{service.whatItIs}</p>
            <h3 className="mt-8 font-display text-xl font-semibold text-white">Why it matters</h3>
            <ul className="mt-3 space-y-2">
              {service.whyItMatters.map((p) => (
                <li key={p} className="flex items-start gap-2 text-white/70">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="font-display text-2xl font-semibold text-white">Outcomes</h2>
            <ul className="mt-3 space-y-2">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /> {o}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-xl font-semibold text-white">Tools we love</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white">
              Who this is for
            </h3>
            <p className="mt-3 text-white/70">
              Growth-stage teams that want {service.shortTitle.toLowerCase()}{" "}
              treated as a discipline — not a side project. You have a real
              business to grow, budget to deploy thoughtfully, and an exec team
              that wants answers in numbers.
            </p>
          </div>
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white">
              When you'd hire us
            </h3>
            <ul className="mt-3 space-y-2 text-white/70">
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand" />
                Launching a new brand, product, or market.
              </li>
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand" />
                Current results are plateauing and you need a reset.
              </li>
              <li className="flex gap-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand" />
                You need senior thinking without hiring a full-time team.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white">
              Engagement shape
            </h3>
            <p className="mt-3 text-white/70">
              Standalone sprint, multi-month program, or embedded team — you
              pick what fits. Fixed-fee sprints start small; programs scale with
              scope; embedded engagements run on a monthly retainer.
            </p>
            <Link
              href="/services#engagement-tiers"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
            >
              Compare tiers →
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">Our process</h2>
          <p className="mt-3 max-w-2xl text-white/60">
            A transparent, six-step cadence we run for every engagement — adapted to your business.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.05}>
          {service.process.map((p, i) => (
            <TiltCard key={p.step} className="card group" max={4}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-ink-900 text-sm font-semibold transition-transform duration-500 group-hover:scale-110">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{p.step}</h3>
              </div>
              <p className="mt-2 text-white/70">{p.detail}</p>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">What you get</h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" /> {d}
            </li>
          ))}
        </ul>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            How we're different
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            {service.shortTitle} is a noisy space. A few things we believe —
            and push back on — that shape how we run every engagement.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-red-300/80">
              What most agencies do
            </div>
            <ul className="mt-3 space-y-3 text-sm text-white/65">
              <li>Sell you a fixed template and adapt your business to it.</li>
              <li>Hand the work to juniors after the pitch.</li>
              <li>Report on vanity metrics that don't tie to revenue.</li>
              <li>Lock you into proprietary tools you can't take with you.</li>
              <li>Chase shiny tactics without a durable strategy.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">
              What we do instead
            </div>
            <ul className="mt-3 space-y-3 text-sm text-white/80">
              <li>Build a {service.shortTitle.toLowerCase()} system tuned to your P&L.</li>
              <li>Senior practitioners on every call, every week.</li>
              <li>Report on pipeline, revenue, CAC, LTV — not impressions.</li>
              <li>All files, data, and docs live in your accounts. No lock-in.</li>
              <li>Strategy first. Tactics second. Always in that order.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">FAQs</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {service.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-brand/30 open:bg-brand/5">
              <summary className="flex cursor-pointer items-center justify-between text-white">
                <span className="font-medium">{f.q}</span>
                <span className="text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {servingIndustries.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Industries we deliver {service.shortTitle} for
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Every industry has its own buyer, compliance, and economics.
              Click through for the playbook we use in your category.
            </p>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {servingIndustries.map((i) => (
              <TiltCard key={i.slug} className="h-full" max={6}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="card group block h-full transition hover:-translate-y-1 hover:border-brand/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/20 group-hover:text-brand">
                    <IndustryIcon name={i.icon} />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {i.name}
                  </h3>
                  <p className="mt-1 text-xs text-brand">{i.tagline}</p>
                </Link>
              </TiltCard>
            ))}
          </StaggerGroup>
        </section>
      )}

      {recentPosts.length > 0 && catObj && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Recent writing on {service.shortTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Fresh thinking from our team —{" "}
              <Link
                href={`/blog/category/${catObj.slug}`}
                className="text-brand hover:underline"
              >
                browse all {catObj.name} articles
              </Link>
              .
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {recentPosts.map((p) => (
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
        </section>
      )}

      {leadingOffices.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Offices leading {service.shortTitle} work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {leadingOffices.map((o) => (
              <Link
                key={o.slug}
                href={`/offices/${o.slug}`}
                className="card group block"
              >
                <div className="text-2xl">{o.flag}</div>
                <h3 className="mt-3 font-display text-base font-semibold text-white">
                  {o.city}
                </h3>
                <p className="text-xs text-brand">{o.role}</p>
                <p className="mt-1 text-xs text-white/60 line-clamp-2">
                  {o.heroTagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">Related services</h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.06}>
            {related.map((r) => (
              <TiltCard key={r.slug} className="h-full" max={5}>
                <Link href={`/services/${r.slug}`} className="card group block h-full transition hover:-translate-y-1 hover:border-brand/30">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/25">
                      <ServiceIcon name={r.icon} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{r.shortTitle}</h3>
                  <p className="mt-1 text-sm text-white/60">{r.tagline}</p>
                </Link>
              </TiltCard>
            ))}
          </StaggerGroup>
        </section>
      )}

      <CTA title={`Ready to start ${service.shortTitle}?`} subtitle={`Book a free strategy call — we'll draft a ${service.shortTitle.toLowerCase()} plan tailored to your business.`} />
    </>
  );
}
