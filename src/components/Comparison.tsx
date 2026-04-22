"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ROWS = [
  {
    category: "Team",
    them: "Senior on the pitch, juniors on the delivery.",
    us: "Seniors pitch, build, and operate every account.",
  },
  {
    category: "Scope",
    them: "Retainers designed to maximize billable hours.",
    us: "Scopes sized to your business goals, not ours.",
  },
  {
    category: "Creative",
    them: "Templated work, slow turnarounds.",
    us: "Custom creative shipped weekly at velocity.",
  },
  {
    category: "Reporting",
    them: "Vanity metrics — impressions, CTR, reach.",
    us: "Pipeline, revenue, CAC, LTV — board-ready.",
  },
  {
    category: "Tools & data",
    them: "Proprietary dashboards you can't take with you.",
    us: "All accounts, files, and data live in your systems.",
  },
  {
    category: "Strategy",
    them: "Tactics first — 'post more, spend more'.",
    us: "Strategy first, then tactics that ladder to outcomes.",
  },
  {
    category: "Tech stack",
    them: "Marketing sits apart from engineering.",
    us: "Marketing + engineering under one accountable team.",
  },
  {
    category: "Global delivery",
    them: "One office serving every time zone badly.",
    us: "8 offices — right time zone, language, culture.",
  },
  {
    category: "AI",
    them: "AI as a buzzword on the pitch deck.",
    us: "AI as production leverage across every workstream.",
  },
  {
    category: "Exit",
    them: "Opaque churn penalties and long notice windows.",
    us: "Clean 30-day exit, all assets handed over.",
  },
];

export function Comparison() {
  return (
    <section className="section">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.2em] text-brand">
          How we compare
        </span>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          The agency you'd build yourself — if you had to build one.
        </h2>
        <p className="mt-4 text-white/70">
          A candid comparison of how most agencies operate vs. how we do.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] border-b border-white/10 bg-white/[0.02]">
          <div className="p-5 text-xs uppercase tracking-[0.2em] text-white/50">
            Category
          </div>
          <div className="border-l border-white/10 p-5 text-xs uppercase tracking-[0.2em] text-white/50">
            Most agencies
          </div>
          <div className="border-l border-white/10 bg-brand/5 p-5 text-xs uppercase tracking-[0.2em] text-brand">
            It&apos;s Not Techy
          </div>
        </div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] border-b border-white/5 last:border-b-0 hover:bg-white/[0.02]"
          >
            <div className="p-5 font-medium text-white">{r.category}</div>
            <div className="flex items-start gap-3 border-l border-white/10 p-5 text-sm text-white/70">
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-300/80" />
              {r.them}
            </div>
            <div className="flex items-start gap-3 border-l border-white/10 bg-brand/5 p-5 text-sm text-white">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
              {r.us}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
