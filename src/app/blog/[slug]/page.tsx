import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { blogPosts, blogCategories, getBlogBySlug } from "@/data/blogs";
import { services } from "@/data/services";
import { authors, authorSlugFromName } from "@/data/authors";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ArrowLeft, Clock, User, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const CATEGORY_TO_SERVICE: Record<string, string> = {
  seo: "seo",
  "paid-marketing": "performance-marketing",
  "social-media": "social-media-marketing",
  "content-marketing": "content-marketing",
  "web-design": "web-development",
  "video-production": "video-production",
  "brand-design": "branding",
  "email-crm": "email-marketing",
  "marketing-platforms": "marketing-platforms",
  "ai-marketing": "ai-marketing",
  ecommerce: "ecommerce-marketing",
  "b2b-growth": "b2b-marketing",
  analytics: "analytics",
  "local-seo": "local-seo",
  cro: "conversion-rate-optimization",
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .slice(0, 3);
  const categoryObj = blogCategories.find((c) => c.slug === post.categorySlug);
  const contextualServiceSlug = CATEGORY_TO_SERVICE[post.categorySlug];
  const contextualService = contextualServiceSlug
    ? services.find((s) => s.slug === contextualServiceSlug)
    : null;
  const authorSlug = authorSlugFromName(post.author);
  const authorObj = authors.find((a) => a.slug === authorSlug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `${SITE.url}/logo.png`,
    url: `${SITE.url}/blog/${post.slug}`,
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <Script id={`ld-article-${post.slug}`} type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      <article className="section max-w-3xl pt-32">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-brand hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> All articles
        </Link>
        <Reveal>
          <Link
            href={categoryObj ? `/blog/category/${categoryObj.slug}` : "/blog"}
            className="mt-6 inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand hover:bg-brand/20"
          >
            {post.category}
          </Link>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <Link
              href={authorObj ? `/authors/${authorObj.slug}` : "/authors"}
              className="inline-flex items-center gap-1.5 hover:text-brand"
            >
              <User className="h-4 w-4" /> {post.author}
            </Link>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readMinutes} min read</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        </Reveal>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-10 prose-p:text-white/80 prose-strong:text-white prose-a:text-brand">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i}>{block.replace("## ", "")}</h2>;
            }
            return <p key={i}>{block}</p>;
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Link
              key={t}
              href={`/blog?q=${encodeURIComponent(t)}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-brand/40 hover:text-brand"
            >
              #{t}
            </Link>
          ))}
        </div>

        {contextualService && (
          <aside className="mt-12 overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">
              Ready to apply this?
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
              {contextualService.title}
            </h3>
            <p className="mt-2 text-white/70">{contextualService.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/services/${contextualService.slug}`}
                className="btn-primary text-sm"
              >
                Explore this service <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost text-sm">
                Book a discovery call
              </Link>
            </div>
          </aside>
        )}

        {authorObj && (
          <aside className="mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/10">
              <img
                src={authorObj.image}
                alt={authorObj.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">
                Written by
              </div>
              <div className="font-display text-lg font-semibold text-white">
                {authorObj.name}
              </div>
              <p className="text-xs text-white/60">{authorObj.role}</p>
            </div>
            <Link
              href={`/authors/${authorObj.slug}`}
              className="text-sm font-medium text-brand hover:underline"
            >
              More from {authorObj.name.split(" ")[0]} →
            </Link>
          </aside>
        )}
      </article>

      {related.length > 0 && (
        <section className="section pt-0">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
            Keep reading — {post.category}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card group block">
                <span className="text-[10px] uppercase tracking-wider text-brand">{r.category}</span>
                <h3 className="mt-2 line-clamp-2 font-display text-base font-semibold text-white group-hover:text-brand">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-white/60">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTA title="Need this applied to your business?" subtitle={`Our team ships ${post.category.toLowerCase()} programs every week. Book a free consult — we'll tell you what would move the needle for your brand.`} />
    </>
  );
}
