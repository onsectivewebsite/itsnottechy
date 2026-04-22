"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TiltCard } from "./TiltCard";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Nova Labs",
    sector: "B2B SaaS",
    result: "+412% organic traffic",
    services: ["SEO", "Content", "Web"],
    gradient: "from-brand/40 to-brand/0",
  },
  {
    name: "Kindred Skin",
    sector: "DTC Beauty",
    result: "3.2x blended ROAS",
    services: ["Paid", "Creative", "Email"],
    gradient: "from-white/30 to-brand/10",
  },
  {
    name: "Atrium Health",
    sector: "Healthcare",
    result: "+330% map impressions",
    services: ["Local SEO", "Reviews", "Web"],
    gradient: "from-brand/30 to-white/10",
  },
  {
    name: "Keystone Realty",
    sector: "Proptech",
    result: "+260% organic leads",
    services: ["Brand", "Web", "Social"],
    gradient: "from-white/20 to-brand/20",
  },
  {
    name: "Voltra Industrial",
    sector: "Manufacturing",
    result: "$8.2M pipeline",
    services: ["ABM", "LinkedIn", "Content"],
    gradient: "from-brand/25 to-brand/0",
  },
  {
    name: "Seaside Hotels",
    sector: "Hospitality",
    result: "+3x direct bookings",
    services: ["Video", "Paid", "Web"],
    gradient: "from-white/15 to-brand/15",
  },
];

export function RecentProjects() {
  return (
    <section className="section">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Selected work
          </span>
          <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Recent projects we're proud of.
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-brand hover:underline"
        >
          View full portfolio →
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
          >
            <TiltCard>
              <Link
                href="/portfolio"
                className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40 md:p-8"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.gradient} opacity-60 transition group-hover:opacity-100`}
                />
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/20 opacity-40 blur-3xl transition group-hover:opacity-80" />
                <div className="relative flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand">
                    {p.sector}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="relative mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                  {p.name}
                </h3>
                <div className="relative mt-6 text-5xl font-bold tracking-tight text-brand md:text-6xl">
                  {p.result}
                </div>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
