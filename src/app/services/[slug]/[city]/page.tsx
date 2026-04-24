import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { services, getServiceBySlug, SERVICES_UPDATED_AT } from "@/data/services";
import { offices, getOfficeBySlug } from "@/data/offices";
import { industries } from "@/data/industries";
import { Reveal, WordReveal, StaggerGroup } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Breadcrumbs";
import { ServiceIcon } from "@/components/ServiceIcon";
import { IndustryIcon } from "@/components/IndustryIcon";
import { ArrowUpRight, Check, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Service × City pages — programmatic SEO targeting "[service] in [city]"
 * queries. Each page combines unique service data + unique office data so
 * no two pages share more than ~40% content. Avoid thin-content risk by
 * leaning on office-specific industries, compliance framing, and team.
 */

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of services) {
    for (const office of offices) {
      params.push({ slug: service.slug, city: office.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const office = getOfficeBySlug(city);
  if (!service || !office) return {};
  const title = `${service.shortTitle} Agency in ${office.city} — ${office.country}`;
  const description = `${service.shortTitle} services for ${office.city} brands — local ${office.city} team, regional compliance, and senior practitioners. Part of It's Not Techy's global agency network.`;
  return {
    title,
    description,
    keywords: [
      `${service.shortTitle.toLowerCase()} agency ${office.city.toLowerCase()}`,
      `${service.shortTitle.toLowerCase()} services ${office.city.toLowerCase()}`,
      `${office.city.toLowerCase()} ${service.shortTitle.toLowerCase()}`,
      `${service.shortTitle.toLowerCase()} company ${office.country}`,
      ...service.keywords.slice(0, 5),
      ...office.keywords.slice(0, 5),
    ],
    alternates: {
      canonical: `${SITE.url}/services/${service.slug}/${office.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/services/${service.slug}/${office.slug}`,
      locale: office.locale.replace("-", "_"),
    },
  };
}

function regionalComplianceNotes(office: ReturnType<typeof getOfficeBySlug>): string[] {
  if (!office) return [];
  const byCountry: Record<string, string[]> = {
    CA: [
      "PIPEDA-compliant data collection and consent flows.",
      "CASL-compliant email and SMS outreach.",
      "French-language support for Quebec Bill 96 requirements.",
    ],
    US: [
      "CCPA / CPRA compliance for California audiences.",
      "CAN-SPAM compliant email infrastructure.",
      "State-by-state privacy rule coverage.",
    ],
    GB: [
      "UK GDPR + Data Protection Act 2018 aligned.",
      "ICO-compliant consent banners and data rights workflows.",
      "PECR compliance for electronic marketing.",
    ],
    AE: [
      "UAE PDPL-aligned data handling.",
      "Bilingual Arabic / English creative production.",
      "Region-appropriate creative that respects local guidelines.",
    ],
    IN: [
      "DPDP Act 2023 compliance for Indian audiences.",
      "Multilingual content across Hindi, English, and regional languages.",
      "Local DPO coordination where required.",
    ],
    SG: [
      "PDPA Singapore compliant consent and marketing.",
      "Multi-market APAC localization pipelines.",
      "Cross-border transfer documentation for ASEAN campaigns.",
    ],
    AU: [
      "Australian Privacy Principles (APPs) aligned.",
      "Spam Act 2003 compliant direct marketing.",
      "Consumer Data Right readiness where relevant.",
    ],
    DE: [
      "GDPR + BDSG compliance as a design-time default.",
      "Server-side tracking for third-party-cookie-free environments.",
      "EU AI Act alignment for AI-assisted marketing workflows.",
    ],
  };
  return byCountry[office.countryCode] ?? [];
}

function formatPriceBand(service: ReturnType<typeof getServiceBySlug>): {
  label: string;
  value: string;
}[] {
  if (!service) return [];
  const bands: Record<string, { label: string; value: string }[]> = {
    seo: [
      { label: "SEO sprint (audit)", value: "$8K – $15K fixed" },
      { label: "SEO program retainer", value: "$12K+ / month" },
    ],
    "performance-marketing": [
      { label: "Paid program minimum", value: "$15K / month + ad spend" },
      { label: "Full-funnel program", value: "$25K+ / month + ad spend" },
    ],
    "web-development": [
      { label: "Marketing site build", value: "$15K – $75K project" },
      { label: "Complex / ecommerce build", value: "$40K – $150K project" },
    ],
    branding: [
      { label: "Brand refresh", value: "$25K – $60K project" },
      { label: "Full rebrand", value: "$60K – $120K project" },
    ],
  };
  if (bands[service.slug]) return bands[service.slug];
  return [
    { label: `${service.shortTitle} sprint`, value: "$5K – $25K fixed" },
    { label: `${service.shortTitle} program`, value: "$8K+ / month" },
  ];
}

export default async function ServiceInCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const office = getOfficeBySlug(city);
  if (!service || !office) notFound();

  // Intersection: industries the office leads AND this service serves
  const localIndustries = industries.filter(
    (i) =>
      office.popularIndustries.includes(i.slug) &&
      i.services.includes(service.slug),
  );
  const compliance = regionalComplianceNotes(office);
  const priceBand = formatPriceBand(service);
  const updatedAt = service.updatedAt ?? SERVICES_UPDATED_AT;

  const nearbyOffices = office.nearbyCities
    .map((c) => offices.find((o) => o.city === c))
    .filter(Boolean) as typeof offices;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}/${office.slug}#service`,
    serviceType: `${service.title} — ${office.city}`,
    name: `${service.shortTitle} Agency in ${office.city}`,
    description: `${service.shortTitle} services delivered from our ${office.city} ${office.role.toLowerCase()} office. ${service.summary}`,
    provider: {
      "@type": office.verified ? "LocalBusiness" : "ProfessionalService",
      "@id": `${SITE.url}/offices/${office.slug}#${office.verified ? "localbusiness" : "service"}`,
      name: `${SITE.name} ${office.city}`,
      url: `${SITE.url}/offices/${office.slug}`,
    },
    areaServed: [
      {
        "@type": "City",
        name: office.city,
      },
      {
        "@type": "Country",
        name: office.country,
      },
    ],
    url: `${SITE.url}/services/${service.slug}/${office.slug}`,
    dateModified: updatedAt,
    inLanguage: office.locale,
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
          { name: office.city, path: `/services/${service.slug}/${office.slug}` },
        ]}
      />
      <Script
        id={`ld-svc-city-${service.slug}-${office.slug}`}
        type="application/ld+json"
      >
        {JSON.stringify(serviceSchema)}
      </Script>

      <section className="section pt-32">
        <nav className="mb-6 text-xs text-white/50">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/services" className="hover:text-brand">
            Services
          </Link>{" "}
          /{" "}
          <Link
            href={`/services/${service.slug}`}
            className="hover:text-brand"
          >
            {service.shortTitle}
          </Link>{" "}
          / <span className="text-white">{office.city}</span>
        </nav>

        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand">
              {service.shortTitle} · {office.city}
            </span>
            <span className="inline-flex items-center gap-1 text-2xl">
              {office.flag}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            <WordReveal
              text={`${service.shortTitle} Agency in ${office.city}`}
              accentWords={[office.city]}
            />
          </h1>
          <p className="mt-5 max-w-3xl text-xl text-brand">
            {service.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-white/80">
            Our {office.city} team delivers {service.shortTitle.toLowerCase()}{" "}
            for brands across {office.country} and the wider{" "}
            {office.role.toLowerCase()} region. We bring senior practitioners
            who live in the market, understand {office.city}&apos;s buyer
            behavior and regulatory environment, and plug into a global network
            of specialists across seven other offices when programs need reach
            beyond a single country.
          </p>
          <p className="mt-4 max-w-3xl text-white/70">{service.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to our {office.city} {service.shortTitle} team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/services/${service.slug}`}
              className="btn-ghost text-sm"
            >
              See the full {service.shortTitle} service
            </Link>
            {office.phone && (
              <a
                href={`tel:${office.phoneRaw ?? SITE.phoneRaw}`}
                className="btn-ghost"
              >
                <Phone className="h-4 w-4" /> {office.phone}
              </a>
            )}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card">
            <MapPin className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              {office.city} team
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Led from our {office.city} {office.role.toLowerCase()} office.{" "}
              {office.verified && office.streetAddress
                ? `${office.streetAddress}, ${office.city}`
                : `Meetings by appointment in ${office.city}`}
              . Time zone: {office.tz}.
            </p>
          </div>
          <div className="card">
            <Sparkles className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              Why {office.city} brands choose us for {service.shortTitle}
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              {office.whyHere.map((w) => (
                <li key={w}>· {w}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Check className="h-5 w-5 text-brand" />
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              Engagement shape
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {priceBand.map((p) => (
                <li key={p.label} className="flex items-start justify-between gap-3">
                  <span>{p.label}</span>
                  <span className="text-white">{p.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-white/50">
              Media cost billed separately. No percentage of ad spend.
            </p>
          </div>
        </div>
      </section>

      {compliance.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {office.country} compliance, built in
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Every {service.shortTitle.toLowerCase()} program we run in{" "}
              {office.country} ships with the regional data and marketing
              compliance baked in — not bolted on afterward.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {compliance.map((c) => (
              <li
                key={c}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      {localIndustries.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Industries we deliver {service.shortTitle} for from {office.city}
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              These are the industries where our {office.city} team has the
              deepest {service.shortTitle.toLowerCase()} experience —{" "}
              {localIndustries.length} categories with tailored playbooks.
            </p>
          </Reveal>
          <StaggerGroup
            className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            stagger={0.05}
          >
            {localIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="card group block h-full"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition group-hover:bg-brand/20 group-hover:text-brand">
                  <IndustryIcon name={i.icon} />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-white">
                  {i.name}
                </h3>
                <p className="mt-1 text-xs text-brand">{i.tagline}</p>
              </Link>
            ))}
          </StaggerGroup>
        </section>
      )}

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            What you get from our {office.city} {service.shortTitle} engagements
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80"
            >
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" /> {d}
            </li>
          ))}
        </ul>
      </section>

      <section className="section pt-0">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Outcomes our {office.city} clients typically see
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {service.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-white/80">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-brand" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/50">
            Actual outcomes depend on starting conditions, category, and
            engagement scope. We calibrate forecasts during discovery, not
            in marketing copy.
          </p>
        </div>
      </section>

      {nearbyOffices.length > 0 && (
        <section className="section pt-0">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {service.shortTitle} in nearby markets
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Running a multi-region program? These offices are regularly
              staffed alongside {office.city} for cross-border campaigns.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nearbyOffices.map((n) => (
              <Link
                key={n.slug}
                href={`/services/${service.slug}/${n.slug}`}
                className="card group block"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{n.flag}</span>
                  <div>
                    <div className="font-display text-base font-semibold text-white">
                      {service.shortTitle} in {n.city}
                    </div>
                    <div className="text-xs text-brand">{n.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/60 line-clamp-2">
                  {n.heroTagline}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-brand underline-slide">
                  View page <ArrowUpRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href={`/services/${service.slug}`}
            className="card group block md:col-span-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                Canonical service page
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-brand" />
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-white/70">{service.tagline}</p>
            <p className="mt-3 text-sm text-white/60">
              Full process, deliverables, FAQs, pricing and related services.
            </p>
          </Link>
          <Link href={`/offices/${office.slug}`} className="card group block">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                Office page
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-brand" />
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-white">
              {office.city}
            </h3>
            <p className="mt-1 text-xs text-brand">{office.role}</p>
            <p className="mt-3 text-sm text-white/60 line-clamp-3">
              {office.heroTagline}
            </p>
          </Link>
        </div>
      </section>

      <CTA
        title={`Ready to start ${service.shortTitle} with our ${office.city} team?`}
        subtitle={`Book a 30-minute discovery call. We'll draft a ${service.shortTitle.toLowerCase()} plan tailored to your business, staffed from ${office.city}, with ${office.country} compliance and language coverage built in.`}
      />
    </>
  );
}
