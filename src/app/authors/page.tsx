import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { authors } from "@/data/authors";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Authors — Senior Marketers Behind Our Content",
  description:
    "The senior practitioners who write for It's Not Techy — strategy, brand, content, paid, and engineering leads with a decade+ each in their craft.",
  alternates: { canonical: `${SITE.url}/authors` },
};

export default function AuthorsPage() {
  return (
    <>
      <section className="section pt-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Authors
          </span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            The people who{" "}
            <span className="gradient-text">write our words.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Every post on this site is written — or at minimum edited — by a
            senior practitioner who ships client work every week. No anonymous
            freelancers, no ghostwriter farms.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((a) => (
            <Link
              key={a.slug}
              href={`/authors/${a.slug}`}
              className="card group block"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-white">
                    {a.name}
                  </h2>
                  <p className="text-sm text-brand">{a.role}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/30 transition group-hover:text-brand" />
              </div>
              <p className="mt-4 line-clamp-3 text-sm text-white/65">{a.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.expertise.slice(0, 3).map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
