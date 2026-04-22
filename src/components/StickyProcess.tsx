"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Layers, Workflow, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    description:
      "We dig into your business, audience, category, and competitors. No cookie-cutter decks — just a strategy tailored to your pipeline and economics.",
    tag: "Week 1–2",
  },
  {
    icon: Layers,
    title: "Design & Systems",
    description:
      "Brand, site, content, creative, and tech stack — designed as one coherent system so every campaign compounds.",
    tag: "Week 2–4",
  },
  {
    icon: Workflow,
    title: "Build & Integrate",
    description:
      "Engineering, tracking, automations, and integrations shipped with clean data contracts and enterprise hygiene.",
    tag: "Week 3–8",
  },
  {
    icon: Rocket,
    title: "Launch & Activate",
    description:
      "Paid, organic, email, PR, and influencer launch plans executed in a single synchronized push — no channel left behind.",
    tag: "Week 6–10",
  },
  {
    icon: TrendingUp,
    title: "Measure & Scale",
    description:
      "Weekly optimization, monthly business reviews, and quarterly roadmaps keep the engine compounding long after launch.",
    tag: "Ongoing",
  },
];

export function StickyProcess() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative">
      <div className="section pb-8">
        <span className="text-xs uppercase tracking-[0.2em] text-brand">Our process</span>
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          A clear, repeatable engine — not a mystery box.
        </h2>
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="relative grid gap-24 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="sticky top-28 h-fit hidden md:block">
            <div className="relative h-[420px] w-[2px] bg-white/5">
              <motion.div
                style={{ height: progressHeight }}
                className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-brand to-brand/30"
              />
            </div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s, i) => (
              <Step key={s.title} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.97, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand">
              Step {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              {step.title}
            </h3>
          </div>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 md:inline-block">
          {step.tag}
        </span>
      </div>
      <p className="mt-6 max-w-2xl text-white/70 md:text-lg">{step.description}</p>
    </motion.div>
  );
}
