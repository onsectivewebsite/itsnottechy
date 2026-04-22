import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTA({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="section">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/20 via-white/5 to-transparent p-8 md:p-14">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              {title ?? "Let's build something that ranks, converts, and lasts."}
            </h3>
            <p className="mt-3 text-white/70 md:text-lg">
              {subtitle ??
                "Book a free 30-minute strategy call — no pitch, just a real conversation about what moves the needle for your business."}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link href="/contact" className="btn-primary">
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-white/70 hover:text-brand">
              <Phone className="mr-1 inline h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="text-sm text-white/70 hover:text-brand">
              <Mail className="mr-1 inline h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
