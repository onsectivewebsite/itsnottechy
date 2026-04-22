"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers, Sparkles, Workflow } from "lucide-react";

const PHASES = [
  {
    id: "attract",
    icon: Compass,
    label: "Attract",
    short: "Search, social, press, paid — build durable demand.",
  },
  {
    id: "convert",
    icon: Layers,
    label: "Convert",
    short: "Sites, brand, CRO — turn attention into revenue.",
  },
  {
    id: "engage",
    icon: Sparkles,
    label: "Engage",
    short: "Content, email, video — keep customers coming back.",
  },
  {
    id: "operate",
    icon: Workflow,
    label: "Operate",
    short: "Data, stack, strategy — the engine behind the engine.",
  },
];

export function PhaseTeaser() {
  return (
    <section className="section">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Four phases
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Every service fits a phase of growth.
          </h2>
        </div>
        <p className="max-w-md text-white/70">
          Not sure where to start? Browse services by the phase of growth
          they solve for — from earning attention to operating the engine.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/services#categories`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{p.short}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-brand">
                  Browse services <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
