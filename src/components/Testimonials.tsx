"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Onboarded in two weeks, hit pipeline goals in three months. The only agency we've worked with that actually ships weekly.",
    name: "Maya Raghavan",
    role: "VP Marketing, B2B SaaS",
  },
  {
    quote:
      "Their creative is the best we've seen in DTC — our Meta ROAS doubled inside 45 days and held.",
    name: "Carlos Ibarra",
    role: "Founder, DTC Apparel",
  },
  {
    quote:
      "We brought in It's Not Techy as marketing and Onsective as engineering. One SOW, one team, one roadmap. Game changer.",
    name: "Priya Nair",
    role: "COO, Fintech",
  },
  {
    quote:
      "They rebuilt our site on Next.js and it's the fastest one in our category. Organic grew 3x in six months.",
    name: "Daniel O'Connor",
    role: "Head of Growth, Proptech",
  },
  {
    quote:
      "Finally an agency that understands attribution in 2026. Server-side tracking, clean dashboards, honest reporting.",
    name: "Aisha Farouk",
    role: "CMO, Healthtech",
  },
  {
    quote:
      "Eight offices and it still feels like a boutique. Senior people on every call — no bait-and-switch.",
    name: "Nathan Lee",
    role: "Founder, D2C Wellness",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Clients</span>
          <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            What founders say about working with us.
          </h2>
        </div>
      </div>

      <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="mb-5 break-inside-avoid rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-brand/30 md:p-8"
          >
            <Quote className="h-6 w-6 text-brand/70" />
            <blockquote className="mt-4 text-white/85 md:text-lg">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <div className="font-medium text-white">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
