import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { SITE } from "@/lib/site";
import { Handshake, Globe2, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Global Digital Marketing Agency",
  description:
    "It's Not Techy is a global digital marketing agency headquartered in Toronto, with offices across New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin.",
  alternates: { canonical: `${SITE.url}/about` },
};

const TEAM = [
  { name: "Rishabh Sharma", role: "Founder & Strategy Lead", image: "/images/team/rishabh.jpg" },
  { name: "Kavya Mehra", role: "Brand & Creative Director", image: "/images/team/kavya.jpg" },
  { name: "Kumakshi Verma", role: "Head of Content & Social", image: "/images/team/kumakshi.jpg" },
  { name: "Riyan Kapoor", role: "Growth & Paid Media Lead", image: "/images/team/riyan.jpg" },
  { name: "Shabir Malik", role: "Engineering & Web Lead", image: "/images/team/team-shabir.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">About us</span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            A global digital marketing team <span className="gradient-text">that speaks human.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Founded in {SITE.founded}, It's Not Techy is headquartered at{" "}
            {SITE.address.full}. Our global team runs eight offices across the
            Americas, EMEA, APAC, and Oceania — so every engagement lands in
            the right time zone, culture, and language.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { icon: Globe2, title: "8 Global Offices", body: "Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, Berlin." },
            { icon: Handshake, title: "Senior-led delivery", body: "Every account is led by senior practitioners — not juniors behind a layer cake." },
            { icon: Zap, title: "AI-Augmented", body: "We blend AI speed with human craft across every service we ship." },
            { icon: ShieldCheck, title: "No lock-in", body: "All files, data, and accounts live in your systems. You own the work." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <Icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Enterprise engineering, when you need it.
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            For clients whose growth depends on custom platforms, cloud
            architecture, or AI engineering beyond the marketing stack, we
            partner with <span className="text-brand">{SITE.partner.name}</span>
            {" "}to deliver joint projects under one SOW.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Our global offices
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SITE.offices.map((o) => (
            <div key={o.city} className="card">
              <div className="text-3xl">{o.flag}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{o.city}</h3>
              <p className="text-sm text-brand">{o.role}</p>
              <p className="mt-1 text-xs text-white/50">{o.country}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Meet the team
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m) => (
            <div key={m.name} className="card text-center">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{m.name}</h3>
              <p className="text-xs text-brand">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Values we hire for
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Speak human", d: "We explain the complicated without jargon — it's literally our name." },
            { t: "Ship weekly", d: "Strategy is cheap; execution is the game. We ship small, ship often, ship on time." },
            { t: "Outcomes over outputs", d: "Posts, pages, and pixels don't pay the bills. Pipeline and revenue do." },
            { t: "Senior in the room", d: "No bait-and-switch staffing — the people who pitch are the people who work on your account." },
            { t: "Craft + speed", d: "AI for speed, humans for craft. The combo is our edge." },
            { t: "Transparency by default", d: "Live dashboards, open Slack, weekly readouts. No surprises." },
          ].map(({ t, d }) => (
            <div key={t} className="card">
              <h3 className="font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
