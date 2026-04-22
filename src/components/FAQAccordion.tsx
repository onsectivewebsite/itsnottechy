"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "What makes It's Not Techy different from other agencies?",
    a: "Three things: senior practitioners on every call (no bait-and-switch), outcomes reported in pipeline and revenue (not impressions), and one accountable team across brand, site, content, ads, email, and data — so every campaign compounds instead of competing.",
  },
  {
    q: "How quickly can we start?",
    a: "Discovery calls happen within 48 hours. Most engagements kick off within 1–2 weeks of signed SOW — faster for sprints, slightly longer for embedded programs that need exec alignment.",
  },
  {
    q: "Do you offer fixed-fee work or only monthly retainers?",
    a: "Both. Sprints (2–4 weeks) are fixed-fee, great for focused workstreams — a rebrand, an SEO audit, a paid account audit, a landing page build. Programs are monthly retainers sized to scope. Embedded engagements are fractional day-rates or monthly retainers.",
  },
  {
    q: "What size companies do you work with?",
    a: "From early-stage startups to global enterprise. Sprints start at a few thousand dollars and work beautifully for local businesses. Embedded programs are built for venture-backed scale-ups and mid-market leaders.",
  },
  {
    q: "How do you handle multi-region / global delivery?",
    a: "Eight offices across Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin. We staff your account in the time zone, language, and culture that matters for your market — and integrate across regions when you run multi-country programs.",
  },
  {
    q: "Do you charge a percentage of ad spend?",
    a: "Never. Agency fees are always broken out from media cost so you can see exactly what you're paying us. We believe percentage-of-spend incentives reward waste.",
  },
  {
    q: "Who owns the work — us or you?",
    a: "You do, completely. All files, source code, ad accounts, tracking, and creative live in your systems. If our engagement ends, you keep everything and the engine keeps running.",
  },
  {
    q: "Can I book just one service, or do I need the full program?",
    a: "You can book any single service as a standalone engagement. Most clients start with one focused workstream and expand once they trust us.",
  },
  {
    q: "Do you do pro-bono or nonprofit work?",
    a: "Selectively, yes. We work on 1–2 social-impact or nonprofit engagements per year on a reduced-fee or in-kind basis. Reach out through the contact page if you'd like to apply.",
  },
  {
    q: "What's the typical length of an engagement?",
    a: "Sprints run 2–4 weeks. Programs run 6–18 months with quarterly reviews. Embedded relationships can run multiple years — but you can exit cleanly on 30 days' notice at any point.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            Frequently asked
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Things buyers always ask.
          </h2>
          <p className="mt-4 text-white/70">
            The questions we hear on every first call. If yours isn't here,
            email us — we'll answer within a business day.
          </p>
        </div>
        <div className="space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-brand/30"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white md:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
