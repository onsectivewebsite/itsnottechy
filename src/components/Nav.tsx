"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "/services", mega: "services" as const },
  { label: "Industries", href: "/industries", mega: "industries" as const },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<"services" | "industries" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled ? "backdrop-blur-xl bg-ink-900/70 border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:px-10">
        <Logo height={40} variant="light" className="shrink-0 sm:[&_img]:!h-11" />

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega && setMega(item.mega)}
              onMouseLeave={() => setMega(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-2.5 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white xl:px-3"
              >
                {item.label}
                {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </Link>

              {item.mega === "services" && mega === "services" && <ServicesMega />}
              {item.mega === "industries" && mega === "industries" && <IndustriesMega />}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-primary whitespace-nowrap text-sm xl:inline-flex">
            <span className="hidden xl:inline">Book a free strategy call</span>
            <span className="xl:hidden">Let&apos;s talk</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="rounded-full border border-white/10 bg-white/5 p-2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-ink-900/95 backdrop-blur-xl">
          <div className="mx-auto flex h-16 w-full max-w-7xl shrink-0 items-center justify-between px-4 sm:h-20 sm:px-6 md:px-10">
            <Logo height={40} variant="light" className="sm:[&_img]:!h-11" />
            <button
              aria-label="Close menu"
              className="rounded-full border border-white/10 bg-white/5 p-2"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mx-auto w-full max-w-7xl space-y-2 px-4 pb-10 sm:px-6 md:px-10">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base sm:text-lg"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full justify-center">
              Book a free strategy call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function ServicesMega() {
  return (
    <div className="absolute left-1/2 top-full w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="grid grid-cols-2 gap-2 rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-3">
        {services.slice(0, 21).map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border border-transparent p-3 hover:border-brand/30 hover:bg-brand/5"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-semibold text-white">{s.shortTitle}</div>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100 text-brand" />
            </div>
            <div className="mt-1 line-clamp-2 text-xs text-white/60">{s.tagline}</div>
          </Link>
        ))}
        <Link
          href="/services"
          className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand/10 py-3 text-sm font-medium text-brand hover:bg-brand/20 md:col-span-3"
        >
          View all {services.length} services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function IndustriesMega() {
  return (
    <div className="absolute left-1/2 top-full w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="grid grid-cols-1 gap-2 rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-2">
        {industries.map((i) => (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            className="group rounded-xl border border-transparent p-3 hover:border-brand/30 hover:bg-brand/5"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-semibold text-white">{i.name}</div>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100 text-brand" />
            </div>
            <div className="mt-1 line-clamp-2 text-xs text-white/60">{i.tagline}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
