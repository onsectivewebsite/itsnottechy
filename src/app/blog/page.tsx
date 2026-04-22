import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blogs";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  FloatOrb,
  DrawLine,
  Spotlight,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ClientOnly } from "@/components/ClientOnly";
import { ParticleField } from "@/components/ThreeAccents";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; page?: string; q?: string }>;
}): Promise<Metadata> {
  const { cat, q, page } = await searchParams;
  // Any filtered / paginated view canonicalizes to the clean /blog URL
  // and is marked noindex to prevent duplicate content in Google.
  const filtered = !!(cat || q || (page && page !== "1"));
  const categoryCanonical =
    cat && !q && (!page || page === "1")
      ? `${SITE.url}/blog/category/${cat}`
      : null;
  return {
    title: "Blog — Digital Marketing Playbooks & Insights",
    description: `In-depth, original articles on SEO, paid marketing, social media, web design, video, brand, email, AI marketing, and more from the It's Not Techy team.`,
    keywords: [
      "digital marketing blog",
      "seo blog",
      "paid marketing blog",
      "content marketing blog",
      ...SITE.keywords.slice(0, 10),
    ],
    alternates: { canonical: categoryCanonical ?? `${SITE.url}/blog` },
    robots: filtered
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

const PAGE_SIZE = 24;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; page?: string; q?: string }>;
}) {
  const { cat, page = "1", q } = await searchParams;
  const pageNum = Math.max(1, parseInt(page));
  let list = blogPosts;
  if (cat) list = list.filter((p) => p.categorySlug === cat);
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        p.tags.some((t) => t.toLowerCase().includes(needle))
    );
  }
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const start = (pageNum - 1) * PAGE_SIZE;
  const paged = list.slice(start, start + PAGE_SIZE);

  return (
    <>
      <section className="section relative overflow-hidden pt-32">
        <FloatOrb className="-right-32 top-10" size={480} color="rgba(102, 231, 218, 0.14)" />
        <ClientOnly>
          <ParticleField className="inset-y-0 right-[-6%] hidden w-[36%] md:block" />
        </ClientOnly>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Blog</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text={`${blogPosts.length}+ playbooks. Zero fluff.`}
            accentWords={["Zero", "fluff."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Fresh thinking on SEO, paid, social, video, brand, AI, and everything in between —
            written by the practitioners who ship client work every week.
          </p>
        </Reveal>

        <form className="mt-8 flex w-full max-w-xl items-center gap-2" action="/blog">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search articles…"
            className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white outline-none focus:border-brand"
          />
          {cat && <input type="hidden" name="cat" value={cat} />}
          <button className="btn-primary text-sm">Search</button>
        </form>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`rounded-full border px-4 py-1.5 text-xs ${
              !cat ? "border-brand bg-brand/10 text-brand" : "border-white/10 text-white/70 hover:border-white/30"
            }`}
          >
            All
          </Link>
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/category/${c.slug}`}
              className={`rounded-full border px-4 py-1.5 text-xs ${
                cat === c.slug ? "border-brand bg-brand/10 text-brand" : "border-white/10 text-white/70 hover:border-white/30"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.03}>
          {paged.map((p) => (
            <Spotlight key={p.slug} className="h-full rounded-3xl">
            <Link
              href={`/blog/${p.slug}`}
              className="card ring-hover group relative flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative inline-flex w-fit items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">
                {p.category}
              </span>
              <h2 className="relative mt-4 line-clamp-2 font-display text-lg font-semibold text-white transition group-hover:text-brand">
                {p.title}
              </h2>
              <p className="relative mt-2 line-clamp-3 text-sm text-white/60">{p.excerpt}</p>
              <div className="relative mt-auto flex items-center justify-between pt-6 text-xs text-white/50">
                <span>{new Date(p.publishedAt).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1">
                  {p.readMinutes} min <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            </Spotlight>
          ))}
        </StaggerGroup>

        {paged.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-white/60">
            No articles matched. Try a different keyword or category.
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const qs = new URLSearchParams();
              if (cat) qs.set("cat", cat);
              if (q) qs.set("q", q);
              if (n > 1) qs.set("page", String(n));
              return (
                <Link
                  key={n}
                  href={`/blog${qs.toString() ? `?${qs.toString()}` : ""}`}
                  className={`rounded-full border px-3 py-1.5 text-xs ${
                    n === pageNum ? "border-brand bg-brand/10 text-brand" : "border-white/10 text-white/70 hover:border-white/30"
                  }`}
                >
                  {n}
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}
