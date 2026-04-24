import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import {
  Reveal,
  CharReveal,
  Spotlight,
  FloatOrb,
  DrawLine,
  Parallax,
  Magnetic,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { IndustryIcon } from "@/components/IndustryIcon";
import { LogoTicker } from "@/components/LogoTicker";
import { BigMarquee } from "@/components/BigMarquee";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { StickyProcess } from "@/components/StickyProcess";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { PhaseTeaser } from "@/components/PhaseTeaser";
import { Counters } from "@/components/Counters";
import { Comparison } from "@/components/Comparison";
import { PressLogos } from "@/components/PressLogos";
import { Newsletter } from "@/components/Newsletter";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RecentProjects } from "@/components/RecentProjects";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogs";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import { LazyGlobe as Globe } from "@/components/Lazy3D";

export const metadata: Metadata = {
  title: "Digital Marketing Agency — Toronto, NYC, London, Dubai, Mumbai | It's Not Techy",
  description:
    "Full-service digital marketing agency with 8 global offices. Web design, SEO, social media, video production, brand design, paid marketing, and marketing platforms — senior-led delivery from Toronto to Sydney.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Digital Marketing Agency — Toronto, NYC, London, Dubai, Mumbai | It's Not Techy",
    description:
      "Full-service digital marketing agency with 8 global offices. Web design, SEO, social media, video production, brand design, paid marketing, and marketing platforms.",
    url: SITE.url,
    type: "website",
  },
};

export default function HomePage() {
  const featuredServices = SITE.coreServices
    .map((c) => services.find((s) => s.slug === c.key))
    .filter(Boolean) as typeof services;
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section">
        <LogoTicker />
      </section>

      <section className="section relative">
        <FloatOrb className="-left-32 top-10" size={420} />
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                Services
              </span>
            </Reveal>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              <CharReveal
                text="Every digital marketing lever, under one roof."
                accentWords={["under", "one", "roof."]}
              />
            </h2>
            <DrawLine className="mt-4 w-24" delay={0.6} />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-white/70">
              From a new brand system to a full growth engine, we build and
              operate the capabilities modern marketing teams need — without the
              overhead of hiring each one in-house.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.slice(0, 8).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Spotlight className="h-full rounded-3xl">
                <Link
                  href={`/services/${s.slug}`}
                  className="card ring-hover group block h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <ServiceIcon name={s.icon} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {s.shortTitle}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand underline-slide">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Magnetic>
            <Link href="/services" className="btn-ghost">
              See all {services.length} services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </div>
      </section>

      <BigMarquee />

      <Counters />

      <PhaseTeaser />

      <HorizontalScroll />

      <RecentProjects />

      <StickyProcess />

      <WhyUs />

      <Comparison />

      <PressLogos />

      <section className="section relative">
        <FloatOrb className="right-0 top-1/3" size={380} color="rgba(102, 231, 218, 0.15)" duration={14} />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                Global footprint
              </span>
            </Reveal>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              <CharReveal
                text="Eight offices. One playbook."
                accentWords={["One", "playbook."]}
              />
            </h2>
            <DrawLine className="mt-4 w-24" delay={0.6} />
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-lg text-white/70">
              We operate across the Americas, EMEA, APAC, and Oceania —
              bringing the right time zone, culture, and expertise to every
              engagement. Senior practitioners on every call, no matter where
              your team sits.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm md:grid-cols-2">
              {SITE.offices.map((o) => {
                const slug = o.city
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");
                return (
                  <li key={o.city}>
                    <Link
                      href={`/offices/${slug}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-brand/40 hover:bg-brand/5"
                    >
                      <span className="text-xl">{o.flag}</span>
                      <div>
                        <div className="font-semibold text-white">
                          {o.city}
                        </div>
                        <div className="text-xs text-white/50">{o.role}</div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/offices"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Explore all offices <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          </div>
          <Parallax offset={40} direction="up" className="flex items-center justify-center">
            <Reveal delay={0.15} className="flex w-full items-center justify-center">
              <ClientOnly
                fallback={
                  <div className="aspect-square w-full max-w-lg animate-pulse rounded-full bg-white/5" />
                }
              >
                <Globe />
              </ClientOnly>
            </Reveal>
          </Parallax>
        </div>
      </section>

      <Testimonials />

      <FAQAccordion />

      <Newsletter />

      <section className="section relative">
        <FloatOrb className="-left-20 bottom-10" size={360} color="rgba(0, 179, 164, 0.14)" duration={16} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Industries
          </span>
        </Reveal>
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <CharReveal
            text="Industry-fluent. Outcome-obsessed."
            accentWords={["Outcome-obsessed."]}
          />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.6} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((i, idx) => (
            <Reveal key={i.slug} delay={idx * 0.04}>
              <Spotlight className="h-full rounded-3xl" color="rgba(102, 231, 218, 0.14)">
                <Link
                  href={`/industries/${i.slug}`}
                  className="card ring-hover group block h-full"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-110 group-hover:-rotate-3">
                    <IndustryIcon name={i.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {i.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{i.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand underline-slide">
                    Explore playbook{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Magnetic>
            <Link href="/industries" className="btn-ghost">
              See all industries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </div>
      </section>

      <section className="section">
        <div className="flex items-end justify-between">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                From the blog
              </span>
            </Reveal>
            <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              <CharReveal
                text="Fresh thinking, shipped weekly."
                accentWords={["shipped", "weekly."]}
              />
            </h2>
            <DrawLine className="mt-4 w-24" delay={0.6} />
          </div>
          <Link
            href="/blog"
            className="hidden text-sm text-brand underline-slide md:inline"
          >
            All {blogPosts.length} articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {latestPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Spotlight className="h-full rounded-3xl">
                <Link
                  href={`/blog/${p.slug}`}
                  className="card ring-hover group flex h-full flex-col"
                >
                  <span className="inline-flex w-fit items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-4 line-clamp-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-brand">
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
                    <span>{p.readMinutes} min read</span>
                  </div>
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
