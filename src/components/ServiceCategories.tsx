"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";

type Category = {
  id: string;
  label: string;
  tagline: string;
  description: string;
  outcomes: string[];
  services: { slug: string; title: string; icon: string; body: string }[];
};

export const CATEGORIES: Category[] = [
  {
    id: "attract",
    label: "Attract",
    tagline: "Get found by the right people.",
    description:
      "Everything that brings strangers to your brand — search, social, press, and paid. We build durable, compounding channels instead of rented audiences.",
    outcomes: [
      "Top-3 rankings for money keywords",
      "Lower CAC on paid media",
      "Press coverage that earns high-authority links",
      "A social audience that actually converts",
    ],
    services: [
      {
        slug: "seo",
        title: "Search Engine Optimization",
        icon: "Search",
        body: "Technical fixes, pillar content, link building, and local SEO engineered to move you to page one — and keep you there.",
      },
      {
        slug: "performance-marketing",
        title: "Paid Marketing",
        icon: "Target",
        body: "Full-funnel media across Google, Meta, LinkedIn, TikTok, YouTube, and programmatic — built for CAC payback, not vanity ROAS.",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Management",
        icon: "Share2",
        body: "Daily posting, community management, and creator partnerships on Instagram, TikTok, LinkedIn, YouTube, and Facebook.",
      },
      {
        slug: "social-media-strategy",
        title: "Social Media Strategy",
        icon: "Compass",
        body: "Channel plans, content pillars, and editorial frameworks your in-house team can run every week without guessing.",
      },
      {
        slug: "influencer-marketing",
        title: "Influencer & Creator Marketing",
        icon: "Users",
        body: "Vetted creator partnerships, UGC production, whitelisting, and ambassador programs from nano to celebrity tiers.",
      },
      {
        slug: "pr",
        title: "Digital PR & Link Building",
        icon: "Megaphone",
        body: "Data-led PR campaigns that earn links from top-tier press and raise branded search — without spammy outreach.",
      },
    ],
  },
  {
    id: "convert",
    label: "Convert",
    tagline: "Turn attention into revenue.",
    description:
      "The layer between clicks and customers. Your website, brand, and creative need to do the heavy lifting — we design and build for the conversion you actually want.",
    outcomes: [
      "Sub-1s LCP sites that score 100 on Lighthouse",
      "Conversion rate lifts of 10–40% per quarter",
      "Design systems your team can run without us",
      "On-brand creative shipped at velocity",
    ],
    services: [
      {
        slug: "web-development",
        title: "Custom Website Design & Development",
        icon: "Code2",
        body: "Blazing-fast sites on Next.js, Webflow, Shopify, or WordPress — built for speed, SEO, accessibility, and scale.",
      },
      {
        slug: "branding",
        title: "Brand Design & Identity",
        icon: "Palette",
        body: "Naming, logo, typography, color, motion, packaging — identity systems that are distinctive, flexible, and instantly recognisable.",
      },
      {
        slug: "ux-design",
        title: "UX/UI & Product Design",
        icon: "Layers",
        body: "Research-led flows and interfaces for marketing sites, web apps, and mobile apps — grounded in usability, polished in craft.",
      },
      {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        icon: "MousePointerClick",
        body: "Heatmaps, session replay, experimentation, and UX fixes that compound conversion gains across every channel you drive.",
      },
      {
        slug: "graphic-design",
        title: "Graphic Design & Creative",
        icon: "Brush",
        body: "Ad creative, pitch decks, landing pages, packaging — shipped fast with consistent craft across every surface.",
      },
    ],
  },
  {
    id: "engage",
    label: "Engage",
    tagline: "Stay top-of-mind, turn buyers into fans.",
    description:
      "Content, email, video, and community that keep customers coming back — and turn them into the people who sell for you.",
    outcomes: [
      "30%+ of ecommerce revenue from owned channels",
      "Content that compounds instead of expires",
      "Creator-grade video for every platform",
      "Higher LTV and lower churn",
    ],
    services: [
      {
        slug: "content-marketing",
        title: "Content Marketing & Editorial",
        icon: "PenLine",
        body: "Pillar pages, long-form guides, case studies, and ghost-written thought leadership that earn rankings and build authority.",
      },
      {
        slug: "email-marketing",
        title: "Email, SMS & Lifecycle",
        icon: "Mail",
        body: "Klaviyo, HubSpot, Customer.io, Braze — welcome, abandonment, post-purchase, winback, VIP. Often 30%+ of ecom revenue.",
      },
      {
        slug: "video-production",
        title: "Video Production & Motion",
        icon: "Video",
        body: "Brand films, explainer video, social reels, motion graphics — shot, edited, and cut for maximum platform impact.",
      },
      {
        slug: "reputation-management",
        title: "Online Reputation Management",
        icon: "Shield",
        body: "24/7 review monitoring, response management, and proactive reputation building across Google, Yelp, and Trustpilot.",
      },
    ],
  },
  {
    id: "operate",
    label: "Operate",
    tagline: "Build the engine behind the marketing.",
    description:
      "The unglamorous but decisive layer: clean data, tight stack, smart automations, and strategy that ties it all to the P&L.",
    outcomes: [
      "Single source of truth for revenue data",
      "Attribution you actually trust post-iOS 17",
      "Faster campaign velocity at lower cost",
      "Executive clarity on what to do next",
    ],
    services: [
      {
        slug: "marketing-platforms",
        title: "Marketing Platforms & MarTech Stack",
        icon: "Boxes",
        body: "Selection, implementation, integration, and governance of CRM, CDP, email, analytics, ads, CMS, and attribution tooling.",
      },
      {
        slug: "marketing-automation",
        title: "Marketing Automation & CRM",
        icon: "Workflow",
        body: "HubSpot, Salesforce, and custom workflows — lead scoring, nurture, sales handoff, and attribution wired end to end.",
      },
      {
        slug: "analytics",
        title: "Analytics, Tracking & Attribution",
        icon: "LineChart",
        body: "GA4, GTM, server-side tracking, Looker Studio dashboards, and multi-touch attribution that survives cookie loss.",
      },
      {
        slug: "ai-marketing",
        title: "AI Marketing & Automation",
        icon: "Sparkles",
        body: "Custom GPTs, AI agents, LLM-SEO, and workflow automation with Claude, GPT-4, and open-source models.",
      },
      {
        slug: "consulting",
        title: "Fractional CMO & Consulting",
        icon: "Briefcase",
        body: "Executive marketing leadership for founders who need senior thinking weekly — without the cost of a full-time hire.",
      },
      {
        slug: "b2b-marketing",
        title: "B2B & SaaS Growth Programs",
        icon: "Building2",
        body: "ABM, demand gen, LinkedIn ads, inbound SEO, and sales enablement built for complex B2B sales cycles.",
      },
      {
        slug: "ecommerce-marketing",
        title: "Ecommerce Growth Programs",
        icon: "ShoppingBag",
        body: "Full-funnel DTC on Shopify, WooCommerce, and BigCommerce — paid, email, retention, and CRO as one system.",
      },
      {
        slug: "local-seo",
        title: "Local SEO & GBP",
        icon: "MapPin",
        body: "Map pack domination, citations, reviews, and service-area pages that drive calls and foot traffic for local brands.",
      },
      {
        slug: "app-development",
        title: "Mobile & Web App Development",
        icon: "Smartphone",
        body: "iOS, Android, and web apps on React Native, Swift, Kotlin, and modern stacks — shipped with the same craft we bring to marketing.",
      },
    ],
  },
];

export function ServiceCategories() {
  return (
    <section className="section">
      <div className="max-w-4xl">
        <span className="text-xs uppercase tracking-[0.2em] text-brand">
          How we help
        </span>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Four phases. One accountable team.
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Most agencies sell you a tactic. We operate the whole funnel —
          attracting the right people, converting them into customers, engaging
          them so they come back, and operating the engine that ties it all
          together. Every service below is a standalone engagement or a piece
          of a larger program.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div className="md:sticky md:top-28 md:self-start">
                <div className="font-mono text-xs uppercase tracking-[0.35em] text-brand">
                  0{idx + 1} · {cat.label}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                  {cat.tagline}
                </h3>
                <p className="mt-4 text-white/70">{cat.description}</p>
                <ul className="mt-6 space-y-2">
                  {cat.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {cat.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                        <ServiceIcon name={s.icon} />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-semibold leading-tight text-white">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/65">{s.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
                      Learn more
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
