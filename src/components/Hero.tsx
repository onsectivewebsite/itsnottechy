"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Play, Star } from "lucide-react";
import { ThreeScene } from "./ThreeScene";
import { ClientOnly } from "./ClientOnly";
import { Magnetic, FloatOrb } from "./Reveal";
import { useRef } from "react";

const HEADLINE = ["Digital", "marketing", "that", "speaks", "human."];
const HIGHLIGHT_INDEX = 4;

const STATS = [
  { value: "8", label: "Global offices" },
  { value: "23", label: "Services" },
  { value: "16", label: "Industries served" },
  { value: "60+", label: "In-depth articles" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-30 bg-ink-900" />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-30 opacity-90"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(0,179,164,0.25), transparent 60%), radial-gradient(40% 60% at 100% 100%, rgba(0,179,164,0.18), transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(102,231,218,0.12), transparent 60%)",
          }}
        />
      </motion.div>
      <AnimatedMesh />
      <FloatOrb className="-z-20 left-[8%] top-[12%]" size={280} color="rgba(0, 179, 164, 0.18)" duration={11} />
      <FloatOrb className="-z-20 right-[6%] bottom-[14%]" size={340} color="rgba(102, 231, 218, 0.12)" duration={15} />
      <div className="absolute inset-0 -z-20 grid-bg animated opacity-40" />
      <div aria-hidden className="absolute inset-0 -z-10 noise" />

      <motion.div
        style={{ y: sceneY }}
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <ClientOnly fallback={<div className="absolute inset-0 bg-radial-fade" />}>
          <ThreeScene />
        </ClientOnly>
      </motion.div>

      {/* Contrast vignette behind text */}
      <div aria-hidden className="hero-vignette pointer-events-none absolute inset-0 z-[2]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-32 pb-28 text-center md:px-10">
        <div className="hero-rise hero-delay-1 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/85 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Toronto &middot; New York &middot; London &middot; Dubai &middot; Mumbai &middot; Singapore &middot; Sydney &middot; Berlin
          <span className="mx-2 hidden h-3 w-px bg-white/20 md:inline-block" />
          <span className="hidden items-center gap-1 md:inline-flex">
            <Star className="h-3 w-3 fill-brand text-brand" />
            <Star className="h-3 w-3 fill-brand text-brand" />
            <Star className="h-3 w-3 fill-brand text-brand" />
            <Star className="h-3 w-3 fill-brand text-brand" />
            <Star className="h-3 w-3 fill-brand text-brand" />
            <span className="ml-1 text-white/60">4.9 client rating</span>
          </span>
        </div>

        <h1 className="hero-headline mt-8 max-w-5xl font-display text-6xl font-bold leading-[0.95] tracking-tight text-white md:text-[7.5rem] md:leading-[0.9]">
          {HEADLINE.map((word, i) => (
            <span key={i}>
              <span
                className={`hero-rise hero-delay-${i + 2} inline-block ${
                  i === HIGHLIGHT_INDEX ? "gradient-text italic" : ""
                }`}
              >
                {word}
              </span>
              {i < HEADLINE.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <p className="hero-rise hero-delay-7 mt-8 max-w-2xl text-lg text-white/75 md:text-xl">
          Custom websites, SEO, social media, video production, and paid
          marketing — delivered by a global team across{" "}
          <span className="text-white">8 offices</span> and{" "}
          <span className="text-white">4 continents</span>.
        </p>

        <div className="hero-rise hero-delay-8 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Magnetic strength={0.35}>
            <Link href="/contact" className="btn-primary pulse-glow">
              Book a free strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Link href="/services" className="btn-ghost">
              <Play className="h-4 w-4" />
              Explore services
            </Link>
          </Magnetic>
        </div>

        <div className="hero-rise hero-delay-9 mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="ring-hover group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/[0.05]"
            >
              <div className="font-display text-3xl font-semibold text-brand transition-transform group-hover:scale-105 md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-rise hero-delay-9 pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs text-white/50">
        <div className="flex flex-col items-center gap-2">
          <span className="uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-full bg-brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedMesh() {
  return (
    <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-40 left-1/4 h-[60vh] w-[60vh] rounded-full bg-brand/25 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: 0.5, scale: 1.1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        className="absolute -bottom-40 right-0 h-[50vh] w-[50vh] rounded-full bg-brand/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0.25, x: -20 }}
        animate={{ opacity: 0.4, x: 20 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-0 top-1/2 h-[40vh] w-[40vh] rounded-full bg-white/10 blur-[100px]"
      />
    </div>
  );
}
