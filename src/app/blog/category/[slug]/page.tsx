import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogCategories } from "@/data/blogs";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const CATEGORY_DETAILS: Record<
  string,
  { intro: string; services: string[] }
> = {
  seo: {
    intro:
      "Technical SEO, on-page optimization, keyword strategy, link building, and local SEO — the compounding growth channel every serious brand invests in.",
    services: ["seo", "local-seo", "content-marketing"],
  },
  "paid-marketing": {
    intro:
      "Google, Meta, LinkedIn, TikTok, YouTube, and programmatic — full-funnel paid media engineered for CAC payback, not vanity ROAS.",
    services: ["performance-marketing", "analytics", "conversion-rate-optimization"],
  },
  "social-media": {
    intro:
      "Organic social strategy, creator marketing, content pillars, community management, and the platform mechanics behind what the algorithm actually rewards.",
    services: ["social-media-marketing", "social-media-strategy", "influencer-marketing"],
  },
  "content-marketing": {
    intro:
      "Editorial strategy, pillar pages, SME writing, long-form content, and distribution — the long game that compounds over time.",
    services: ["content-marketing", "seo", "email-marketing"],
  },
  "web-design": {
    intro:
      "Custom websites, design systems, Core Web Vitals, and conversion-first UX on Next.js, Shopify, Webflow, and headless CMS stacks.",
    services: ["web-development", "ux-design", "conversion-rate-optimization"],
  },
  "video-production": {
    intro:
      "Brand films, motion design, short-form reels, and cinematic product film — distribution-ready creative for every platform.",
    services: ["video-production", "branding", "social-media-marketing"],
  },
  "brand-design": {
    intro:
      "Identity systems, naming, typography, color, motion, packaging — the brand design that makes every marketing dollar work harder.",
    services: ["branding", "graphic-design", "web-development"],
  },
  "email-crm": {
    intro:
      "Klaviyo, HubSpot, Customer.io, and Iterable — lifecycle email, SMS, and CRM flows that typically drive 30%+ of ecommerce revenue.",
    services: ["email-marketing", "marketing-automation", "ecommerce-marketing"],
  },
  "marketing-platforms": {
    intro:
      "MarTech audits, CRM/CDP selection, server-side tracking, integrations, and governance — the unglamorous engine behind durable growth.",
    services: ["marketing-platforms", "marketing-automation", "analytics"],
  },
  "ai-marketing": {
    intro:
      "Custom GPTs, AI agents, prompt engineering, LLM-SEO, and workflow automation with Claude and GPT — shipping 3–10× faster without losing craft.",
    services: ["ai-marketing", "content-marketing", "marketing-automation"],
  },
  ecommerce: {
    intro:
      "Shopify, WooCommerce, and BigCommerce growth — paid, retention, CRO, and subscription stitched into one profit-first engine.",
    services: ["ecommerce-marketing", "performance-marketing", "email-marketing"],
  },
  "b2b-growth": {
    intro:
      "ABM, demand gen, LinkedIn ads, and sales enablement built for long B2B sales cycles with tight CAC payback requirements.",
    services: ["b2b-marketing", "marketing-automation", "content-marketing"],
  },
  analytics: {
    intro:
      "GA4, GTM, server-side tracking, Looker Studio, and attribution that survives iOS 17 and cookie deprecation.",
    services: ["analytics", "marketing-platforms", "conversion-rate-optimization"],
  },
  "local-seo": {
    intro:
      "Google Business Profile, map pack ranking, citations, reviews, and local content for brands whose customers walk through the door.",
    services: ["local-seo", "seo", "reputation-management"],
  },
  cro: {
    intro:
      "A/B testing, user research, heatmaps, and checkout optimization — same traffic, more revenue, every quarter.",
    services: ["conversion-rate-optimization", "web-development", "analytics"],
  },
};

export async function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = blogCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  const detail = CATEGORY_DETAILS[slug];
  return {
    title: `${cat.name} — Articles, Playbooks & Guides`,
    description: detail?.intro,
    keywords: [
      `${cat.name.toLowerCase()} blog`,
      `${cat.name.toLowerCase()} guide`,
      `${cat.name.toLowerCase()} agency`,
      ...SITE.keywords.slice(0, 10),
    ],
    alternates: { canonical: `${SITE.url}/blog/category/${cat.slug}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = blogCategories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const detail = CATEGORY_DETAILS[slug] ?? {
    intro: `${cat.name} articles and playbooks from the It's Not Techy team.`,
    services: [],
  };
  const posts = blogPosts.filter((p) => p.categorySlug === slug);
  const relatedServices = detail.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <>
      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-brand">Blog</Link> /{" "}
          <span className="text-white">{cat.name}</span>
        </nav>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Blog category
          </span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            {cat.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/70">{detail.intro}</p>
          <p className="mt-3 text-sm text-white/50">
            {posts.length} article{posts.length === 1 ? "" : "s"}
          </p>
        </Reveal>

        {relatedServices.length > 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand">
              Related services
            </h2>
            <p className="mt-2 text-white/70">
              Want help applying this to your business? Here's where we'd
              start.
            </p>
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
          </div>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 48).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card group flex h-full flex-col"
            >
              <span className="inline-flex w-fit items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">
                {p.category}
              </span>
              <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold text-white group-hover:text-brand">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-white/60">
                {p.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-6 text-xs text-white/50">
                <span>
                  {new Date(p.publishedAt).toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>{p.readMinutes} min</span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length > 48 && (
          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-ghost inline-flex">
              Browse all blog articles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}
