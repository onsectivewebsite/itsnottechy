"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Workflow,
  LineChart,
  Users2,
  Sparkles,
} from "lucide-react";

const REASONS = [
  {
    icon: Zap,
    title: "Senior practitioners only",
    body: "The people who pitch you are the people who run your account. No bait-and-switch, no juniors hidden behind a slide deck.",
  },
  {
    icon: Workflow,
    title: "One connected engine",
    body: "Brand, site, content, ads, email, and data stitched into a single system — so every campaign compounds instead of competing.",
  },
  {
    icon: LineChart,
    title: "Outcomes over outputs",
    body: "We report on pipeline, revenue, CAC, LTV — not impressions. Weekly dashboards, monthly business reviews, quarterly roadmaps.",
  },
  {
    icon: Sparkles,
    title: "AI-augmented craft",
    body: "AI for speed, humans for craft. We blend both so briefs, creative, and analysis ship 3–10× faster without losing quality.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by default",
    body: "Live dashboards, open Slack, source files on your drive. No magic, no dependency, no lock-in.",
  },
  {
    icon: Users2,
    title: "Global delivery, boutique feel",
    body: "8 offices across the Americas, EMEA, APAC, and Oceania. Senior on every call — the intimacy of a studio, the reach of a network.",
  },
];

export function WhyUs() {
  return (
    <section className="section">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Why us
          </span>
          <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            The agency most teams wish they had hired first.
          </h2>
        </div>
        <p className="max-w-md text-white/70">
          Six principles that show up in every engagement — not a deck promise,
          a working style.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40 md:p-8"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand/15 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                {r.title}
              </h3>
              <p className="relative mt-2 text-sm text-white/70">{r.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
