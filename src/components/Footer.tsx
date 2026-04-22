import Link from "next/link";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { offices } from "@/data/offices";
import { blogCategories } from "@/data/blogs";
import { Logo } from "./Logo";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="absolute inset-0 -z-10 bg-radial-fade opacity-50" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-6 md:px-10">
        <div className="md:col-span-2">
          <Logo height={56} variant="light" />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            {SITE.description}
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-brand">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand" />
              <span>{SITE.address.full}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Social href={SITE.socials.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </Social>
            <Social href={SITE.socials.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </Social>
            <Social href={SITE.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Social>
            <Social href={SITE.socials.google} label="Google Business Profile">
              <ArrowUpRight className="h-4 w-4" />
            </Social>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Core Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {SITE.coreServices.map((s) => (
              <li key={s.key}>
                <Link href={`/services/${s.key}`} className="hover:text-brand">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-brand hover:underline">
                All {services.length} services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Industries</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {industries.slice(0, 8).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-brand">
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="text-brand hover:underline">
                All industries →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Offices</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {offices.map((o) => (
              <li key={o.slug}>
                <Link href={`/offices/${o.slug}`} className="hover:text-brand">
                  {o.flag} {o.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-brand">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-brand">Portfolio</Link></li>
            <li><Link href="/authors" className="hover:text-brand">Authors</Link></li>
            <li><Link href="/blog" className="hover:text-brand">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-brand">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-brand">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10">
          <h4 className="text-sm font-semibold text-white">Blog by category</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65 hover:border-brand/40 hover:text-brand"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 md:px-10">
          <a
            href={SITE.partner.website}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-xs text-white/80 transition hover:border-brand hover:bg-brand/10 hover:text-white"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            Official partner of{" "}
            <span className="font-semibold text-brand">{SITE.partner.name}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-brand opacity-70 transition group-hover:opacity-100" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            © {new Date().getFullYear()} It&apos;s Not Techy. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {SITE.offices.map((o) => (
              <span key={o.city} title={`${o.city} — ${o.role}`}>
                {o.flag} {o.city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}
