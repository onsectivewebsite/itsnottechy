import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { offices, getOfficeBySlug } from "@/data/offices";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { blogPosts, blogCategories } from "@/data/blogs";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { IndustryIcon } from "@/components/IndustryIcon";
import { ArrowUpRight, MapPin, Globe2, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return offices.map((o) => ({ city: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const o = getOfficeBySlug(city);
  if (!o) return {};
  return {
    title: `${o.city} Digital Marketing Agency — ${o.role}`,
    description: o.summary,
    keywords: o.keywords,
    alternates: { canonical: `${SITE.url}/offices/${o.slug}` },
    openGraph: {
      title: `${o.city} Digital Marketing — It's Not Techy`,
      description: o.summary,
      url: `${SITE.url}/offices/${o.slug}`,
    },
  };
}

export default async function OfficeCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const office = getOfficeBySlug(city);
  if (!office) notFound();

  const mappedServices = office.popularServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const mappedIndustries = office.popularIndustries
    .map((i) => industries.find((x) => x.slug === i))
    .filter(Boolean) as typeof industries;
  const relatedPosts = blogPosts
    .filter((p) => office.blogCategories.includes(p.categorySlug))
    .slice(0, 6);
  const nearby = office.nearbyCities
    .map((c) => offices.find((x) => x.city === c))
    .filter(Boolean) as typeof offices;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Offices", item: `${SITE.url}/offices` },
      {
        "@type": "ListItem",
        position: 3,
        name: office.city,
        item: `${SITE.url}/offices/${office.slug}`,
      },
    ],
  };
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.name} ${office.city}`,
    image: `${SITE.url}/logo.png`,
    url: `${SITE.url}/offices/${office.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: office.city,
      addressCountry: office.country,
    },
    areaServed: office.city,
    priceRange: "$$$",
  };

  return (
    <>
      <Script id={`ld-bc-office-${office.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`ld-place-${office.slug}`} type="application/ld+json">
        {JSON.stringify(placeSchema)}
      </Script>

      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/offices" className="hover:text-brand">Offices</Link> /{" "}
          <span className="text-white">{office.city}</span>
        </nav>

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{office.flag}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-brand">
              {office.role}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            {office.city} Digital Marketing
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-brand">
            {office.heroTagline}
          </p>
          <p className="mt-6 max-w-3xl text-white/70">{office.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to our {office.city} team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-ghost">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card">
            <MapPin className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              Location & time zone
            </h3>
            <p className="mt-2 text-sm text-white/70">
              {office.city}, {office.country}
              <br />
              {office.tz}
            </p>
          </div>
          <div className="card">
            <Globe2 className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              Why brands choose {office.city}
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              {office.whyHere.map((w) => (
                <li key={w}>· {w}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Phone className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              Global HQ address
            </h3>
            <p className="mt-2 text-sm text-white/70">{SITE.address.full}</p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Services we lead from {office.city}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {mappedServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <ServiceIcon name={s.icon} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-brand" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.shortTitle}
              </h3>
              <p className="mt-1 text-sm text-white/60">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Industries we serve from {office.city}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mappedIndustries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="card group block"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <IndustryIcon name={i.icon} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {i.name}
              </h3>
              <p className="mt-1 text-xs text-brand">{i.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Reading for {office.city} marketers
            </h2>
            <p className="mt-2 max-w-2xl text-white/60">
              Relevant playbooks from our blog —{" "}
              {office.blogCategories.map((c, idx) => {
                const cat = blogCategories.find((x) => x.slug === c);
                return cat ? (
                  <span key={c}>
                    <Link
                      href={`/blog/category/${cat.slug}`}
                      className="text-brand hover:underline"
                    >
                      {cat.name}
                    </Link>
                    {idx < office.blogCategories.length - 1 ? ", " : ""}
                  </span>
                ) : null;
              })}
              .
            </p>
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
        </section>
      )}

      {nearby.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Nearby offices
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/offices/${n.slug}`}
                className="card group block"
              >
                <div className="text-3xl">{n.flag}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {n.city}
                </h3>
                <p className="text-sm text-brand">{n.role}</p>
                <p className="mt-1 text-xs text-white/60">{n.heroTagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTA
        title={`Ready to start with our ${office.city} team?`}
        subtitle={`Book a free 30-minute strategy call — we'll draft a plan tailored to your business and staffed from our ${office.city} office.`}
      />
    </>
  );
}
