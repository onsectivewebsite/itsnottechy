import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  authors,
  getAuthorBySlug,
  authorSlugFromName,
} from "@/data/authors";
import { blogPosts } from "@/data/blogs";
import { getOfficeBySlug } from "@/data/offices";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAuthorBySlug(slug);
  if (!a) return {};
  return {
    title: `${a.name} — ${a.role}`,
    description: a.bio,
    alternates: { canonical: `${SITE.url}/authors/${a.slug}` },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = blogPosts
    .filter((p) => authorSlugFromName(p.author) === author.slug)
    .slice(0, 24);
  const office = getOfficeBySlug(author.office);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    image: `${SITE.url}${author.image}`,
    description: author.bio,
    worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/authors/${author.slug}`,
    knowsAbout: author.expertise,
  };

  return (
    <>
      <Script id={`ld-author-${author.slug}`} type="application/ld+json">
        {JSON.stringify(personSchema)}
      </Script>

      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/authors" className="hover:text-brand">Authors</Link> /{" "}
          <span className="text-white">{author.name}</span>
        </nav>

        <Reveal>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                {author.role}
              </span>
              <h1 className="mt-2 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                {author.name}
              </h1>
              {office && (
                <Link
                  href={`/offices/${office.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand"
                >
                  <MapPin className="h-4 w-4" /> {office.flag} {office.city}
                </Link>
              )}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg text-white/75">{author.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {author.expertise.map((e) => (
              <span
                key={e}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {e}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {posts.length > 0 && (
        <section className="section pt-0">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Recent articles by {author.name.split(" ")[0]}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
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
                  <span className="inline-flex items-center gap-1">
                    {p.readMinutes} min <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
