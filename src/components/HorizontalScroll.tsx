"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ServiceIcon } from "./ServiceIcon";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function HorizontalScroll() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  const featured = services.slice(0, 10);

  return (
    <section ref={targetRef} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-0 right-0 mx-auto w-full max-w-7xl px-6 md:px-10">
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Capabilities
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Scroll through what we do.
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 pt-40 pl-[8vw] pr-[8vw]">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex h-[60vh] w-[85vw] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur transition hover:border-brand/40 md:w-[40vw] md:p-10"
            >
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <div className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  {String(services.indexOf(s) + 1).padStart(2, "0")} ·{" "}
                  {s.shortTitle}
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-white/70">{s.tagline}</p>
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {s.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
