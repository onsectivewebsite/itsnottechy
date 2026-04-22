"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Asterisk } from "lucide-react";

const WORDS = [
  "Web Design",
  "SEO",
  "Social Media",
  "Video Production",
  "Brand Design",
  "Paid Marketing",
  "Marketing Platforms",
  "Content",
  "Email & CRM",
  "AI Marketing",
];

export function BigMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "-10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/5 py-16 md:py-24">
      <motion.div style={{ x: x1 }} className="flex gap-12 whitespace-nowrap">
        {[...WORDS, ...WORDS].map((w, i) => (
          <span
            key={`a-${i}`}
            className="inline-flex items-center gap-5 font-display text-5xl font-bold tracking-tight text-white md:text-8xl"
          >
            {w}
            <Asterisk className="h-10 w-10 text-brand md:h-14 md:w-14" strokeWidth={1.5} />
          </span>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="mt-8 flex gap-12 whitespace-nowrap"
      >
        {[...WORDS, ...WORDS].map((w, i) => (
          <span
            key={`b-${i}`}
            className="inline-flex items-center gap-5 font-display text-5xl font-bold tracking-tight text-brand md:text-8xl"
          >
            {w}
            <Asterisk
              className="h-10 w-10 text-white md:h-14 md:w-14"
              strokeWidth={1.5}
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
