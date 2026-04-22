"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Star } from "lucide-react";

const PRESS = [
  { name: "Forbes", body: "Featured agency, 2025" },
  { name: "TechCrunch", body: "Quoted on AI marketing" },
  { name: "Clutch", body: "Top B2B agency, Canada" },
  { name: "G2", body: "High Performer, 2025" },
  { name: "Awwwards", body: "Site of the Day nominee" },
  { name: "Webby", body: "Honoree — Digital Marketing" },
];

export function PressLogos() {
  return (
    <section className="section">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Recognition
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Featured in the places that matter.
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
          <Star className="h-3.5 w-3.5 fill-brand text-brand" />
          4.9 / 5 · 60+ verified reviews
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {PRESS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -3 }}
            className="group flex flex-col items-start justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-brand/40 hover:bg-brand/[0.03]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-ink-900">
              {i % 3 === 0 ? (
                <Award className="h-4 w-4" />
              ) : i % 3 === 1 ? (
                <Sparkles className="h-4 w-4" />
              ) : (
                <Star className="h-4 w-4" />
              )}
            </div>
            <div className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
              {p.name}
            </div>
            <div className="mt-1 text-xs text-white/55">{p.body}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
