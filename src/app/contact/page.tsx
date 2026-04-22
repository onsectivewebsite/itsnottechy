import type { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, WordReveal, StaggerGroup } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Book a Free Strategy Call",
  description:
    "Get in touch with It's Not Techy. Offices in Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin. Book a free 30-minute strategy call.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: `${SITE.url}/contact`,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <Script id="ld-contact" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>

      <section className="section pt-32">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">Contact</span>
            </Reveal>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
              <WordReveal text="Let's talk." accentWords={["talk."]} />
            </h1>
            <Reveal delay={0.25}>
              <p className="mt-6 text-white/70">
                Share a few details and we&apos;ll reply within one business day. Prefer a call?
                Pick up the phone — a real person always answers.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-brand/40">
                <Phone className="h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs text-white/50">Phone</div>
                  <div className="font-medium text-white">{SITE.phone}</div>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-brand/40">
                <Mail className="h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs text-white/50">Email</div>
                  <div className="font-medium text-white">{SITE.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs text-white/50">Global HQ</div>
                  <div className="font-medium text-white">{SITE.address.full}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <a href={SITE.socials.instagram} className="btn-ghost text-sm" target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={SITE.socials.linkedin} className="btn-ghost text-sm" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={SITE.socials.facebook} className="btn-ghost text-sm" target="_blank" rel="noreferrer">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={[
            "24-hour response",
            "Free 30-min strategy call",
            "No pitch decks",
            "Senior-led discovery",
            "NDA on request",
            "Global delivery",
          ]}
        />
      </div>

      <section className="section pt-16">
        <StaggerGroup className="grid gap-4 md:grid-cols-4" stagger={0.05}>
          {SITE.offices.map((o) => (
            <TiltCard key={o.city} className="card h-full" max={8}>
              <div className="text-2xl transition-transform group-hover:scale-110">{o.flag}</div>
              <div className="mt-3 font-display text-lg font-semibold text-white">{o.city}</div>
              <div className="text-sm text-brand">{o.role}</div>
              <div className="mt-1 text-xs text-white/50">{o.country}</div>
            </TiltCard>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
