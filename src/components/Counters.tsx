"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";
import { TrendingUp, Users, DollarSign, Globe2 } from "lucide-react";

const STATS = [
  {
    icon: TrendingUp,
    value: 3.4,
    suffix: "x",
    decimals: 1,
    label: "Avg. pipeline lift in 12 months",
    sub: "Across 80+ engagements",
  },
  {
    icon: DollarSign,
    value: 42,
    suffix: "%",
    label: "Avg. CAC reduction",
    sub: "In the first 6 months of a paid program",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Senior practitioners",
    sub: "Across 8 offices and 4 continents",
  },
  {
    icon: Globe2,
    value: 30,
    suffix: "+",
    label: "Countries served",
    sub: "With native-language delivery",
  },
];

export function Counters() {
  return (
    <section className="section">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/10 via-white/[0.02] to-transparent p-8 md:p-14">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            By the numbers
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Results our clients can model their forecast against.
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Averages across engagements over the last 18 months — honest,
            median performance, not cherry-picked case study highlights.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand/40"
              >
                <Icon className="h-6 w-6 text-brand" />
                <div className="mt-4 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                  <AnimatedNumber
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-white">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-white/50">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
