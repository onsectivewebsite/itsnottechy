import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { authors } from "@/data/authors";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  FloatOrb,
  DrawLine,
  Spotlight,
} from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { TiltCard } from "@/components/TiltCard";
import { ClientOnly } from "@/components/ClientOnly";
import { LazyOrbitAccent as OrbitAccent } from "@/components/Lazy3D";
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
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Authors", path: "/authors" }]} />
      <section className="section relative isolate overflow-hidden pt-32">
        <FloatOrb className="-right-32 top-10" size={460} color="rgba(102, 231, 218, 0.12)" />
        <ClientOnly>
          <OrbitAccent className="inset-y-0 right-[-10%] hidden w-[38%] md:block" />
        </ClientOnly>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Authors
          </span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="The people who write our words."
            accentWords={["write", "our", "words."]}
          />
        </h1>
        <DrawLine className="mt-6 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Every post on this site is written — or at minimum edited — by a
            senior practitioner who ships client work every week. No anonymous
            freelancers, no ghostwriter farms.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {authors.map((a) => (
            <TiltCard key={a.slug} className="h-full" max={6}>
              <Spotlight className="h-full rounded-3xl">
              <Link
                href={`/authors/${a.slug}`}
                className="card ring-hover group relative block h-full overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:ring-brand/40">
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
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <p className="relative mt-4 line-clamp-3 text-sm text-white/65">{a.bio}</p>
                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {a.expertise.slice(0, 3).map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60 transition group-hover:border-brand/30 group-hover:text-brand"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </Link>
              </Spotlight>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
