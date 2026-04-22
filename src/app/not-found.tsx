import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <div className="font-display text-[120px] font-bold leading-none text-white md:text-[200px]">
        <span className="gradient-text">404</span>
      </div>
      <h1 className="mt-2 font-display text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-white/60">
        That link is broken or the page has moved. Head home — or tell us about it and we'll fix it.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" /> Go home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Report this page <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
