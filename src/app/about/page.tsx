import type { Metadata } from "next";
import Image from "next/image";
import {
  Reveal,
  WordReveal,
  StaggerGroup,
  ScrollFloat,
  FloatOrb,
  DrawLine,
  Spotlight,
  CharReveal,
  Parallax,
} from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Marquee } from "@/components/Marquee";
import { ClientOnly } from "@/components/ClientOnly";
import {
  LazyCrystalCluster as CrystalCluster,
  LazyOrbitAccent as OrbitAccent,
  LazyPrismAccent as PrismAccent,
  LazyParticleField as ParticleField,
  LazyCubeField as CubeField,
} from "@/components/Lazy3D";
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

const STATS = [
  { value: 8, suffix: "", label: "Global offices" },
  { value: 200, suffix: "+", label: "Brands launched" },
  { value: 24, suffix: "/7", label: "Follow-the-sun delivery" },
  { value: 100, suffix: "%", label: "Senior-led accounts" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section relative isolate overflow-hidden pt-32">
        <ScrollFloat className="pointer-events-none absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-3xl" distance={120}>
          <span className="sr-only" />
        </ScrollFloat>
        <ClientOnly>
          <CrystalCluster className="inset-y-0 right-[-6%] hidden w-[34%] md:block" />
        </ClientOnly>
        <DrawLine className="w-24" delay={0.5} />
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">About us</span>
        </Reveal>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          <WordReveal
            text="A global marketing team that speaks human."
            accentWords={["that", "speaks", "human."]}
          />
        </h1>
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Founded in {SITE.founded}, It&apos;s Not Techy is headquartered at{" "}
            {SITE.address.full}. Our global team runs eight offices across the
            Americas, EMEA, APAC, and Oceania — so every engagement lands in
            the right time zone, culture, and language.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-4" stagger={0.08}>
          {STATS.map((s) => (
            <div key={s.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-display text-4xl font-bold text-white md:text-5xl">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-brand">
                {s.label}
              </div>
            </div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-4" stagger={0.07}>
          {[
            { icon: Globe2, title: "8 Global Offices", body: "Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, Berlin." },
            { icon: Handshake, title: "Senior-led delivery", body: "Every account is led by senior practitioners — not juniors behind a layer cake." },
            { icon: Zap, title: "AI-Augmented", body: "We blend AI speed with human craft across every service we ship." },
            { icon: ShieldCheck, title: "No lock-in", body: "All files, data, and accounts live in your systems. You own the work." },
          ].map(({ icon: Icon, title, body }) => (
            <Spotlight key={title} className="h-full rounded-3xl">
              <div className="card ring-hover h-full">
                <Icon className="h-6 w-6 text-brand" />
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/60">{body}</p>
              </div>
            </Spotlight>
          ))}
        </StaggerGroup>
      </section>

      <div className="-mt-4 border-y border-white/5 bg-white/[0.02]">
        <Marquee
          items={[
            "Toronto HQ",
            "Senior-led",
            "AI-augmented",
            "No lock-in",
            "Weekly ship cadence",
            "Follow-the-sun delivery",
            "Outcome-driven",
            "Transparent dashboards",
          ]}
        />
      </div>

      <section className="section relative isolate overflow-hidden pt-20">
        <FloatOrb className="-left-20 top-10" size={360} color="rgba(0, 179, 164, 0.10)" duration={14} />
        <ClientOnly>
          <PrismAccent className="inset-y-0 right-[-8%] hidden w-[32%] md:block" />
        </ClientOnly>
        <h2 className="max-w-4xl font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          <CharReveal text="Enterprise engineering, when you need it." accentWords={["when", "you", "need", "it."]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-white/70">
            For clients whose growth depends on custom platforms, cloud
            architecture, or AI engineering beyond the marketing stack, we
            partner with <span className="text-brand">{SITE.partner.name}</span>
            {" "}to deliver joint projects under one SOW.
          </p>
        </Reveal>
      </section>

      <section className="section relative isolate overflow-hidden pt-0">
        <ClientOnly>
          <OrbitAccent className="-left-[10%] top-10 hidden w-[36%] md:block" />
        </ClientOnly>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          <CharReveal text="Our global offices" />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {SITE.offices.map((o) => (
            <Spotlight key={o.city} className="h-full rounded-3xl">
              <div className="card ring-hover h-full">
                <div className="text-3xl">{o.flag}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{o.city}</h3>
                <p className="text-sm text-brand">{o.role}</p>
                <p className="mt-1 text-xs text-white/50">{o.country}</p>
              </div>
            </Spotlight>
          ))}
        </StaggerGroup>
      </section>

      <section className="section relative isolate overflow-hidden pt-0">
        <Parallax offset={60} direction="down" className="pointer-events-none absolute right-0 top-10 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <ClientOnly>
          <ParticleField className="inset-y-0 right-[-8%] hidden w-[38%] md:block" />
        </ClientOnly>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          <CharReveal text="Meet the humans behind it." accentWords={["humans"]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
          {TEAM.map((m) => (
            <div key={m.name} className="card ring-hover text-center">
              <div className="group relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{m.name}</h3>
              <p className="text-xs text-brand">{m.role}</p>
            </div>
          ))}
        </StaggerGroup>
      </section>

      <section className="section relative isolate overflow-hidden pt-0">
        <ClientOnly>
          <CubeField className="inset-y-0 -left-[10%] hidden w-[36%] md:block" />
        </ClientOnly>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          <CharReveal text="Values we hire for." accentWords={["hire", "for."]} />
        </h2>
        <DrawLine className="mt-4 w-24" delay={0.5} />
        <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-3" stagger={0.06}>
          {[
            { t: "Speak human", d: "We explain the complicated without jargon — it's literally our name." },
            { t: "Ship weekly", d: "Strategy is cheap; execution is the game. We ship small, ship often, ship on time." },
            { t: "Outcomes over outputs", d: "Posts, pages, and pixels don't pay the bills. Pipeline and revenue do." },
            { t: "Senior in the room", d: "No bait-and-switch staffing — the people who pitch are the people who work on your account." },
            { t: "Craft + speed", d: "AI for speed, humans for craft. The combo is our edge." },
            { t: "Transparency by default", d: "Live dashboards, open Slack, weekly readouts. No surprises." },
          ].map(({ t, d }) => (
            <Spotlight key={t} className="h-full rounded-3xl">
              <div className="card ring-hover h-full">
                <h3 className="font-display text-lg font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-white/60">{d}</p>
              </div>
            </Spotlight>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
