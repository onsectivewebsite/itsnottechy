"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, Check, AlertCircle, Mail } from "lucide-react";

export function Newsletter() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !json.ok) throw new Error(json.message ?? "Error");
      setStatus("success");
      setMsg(json.message ?? "Subscribed.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/10 via-white/[0.02] to-transparent p-8 md:p-14"
      >
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <Mail className="h-3.5 w-3.5" />
              The Weekly Brief
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              One email. <span className="gradient-text">Every Friday.</span>
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Tactical frameworks, platform updates, AI prompts, and
              experiments from our studio — delivered in under 5 minutes of
              reading. Written by the people who ship client work, not a
              marketing intern.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" /> One actionable
                framework per week
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" /> Zero fluff, unsubscribe
                anytime
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" /> 12,000+ readers across
                30 countries
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
          >
            <label className="block text-sm text-white/70" htmlFor="nl-email">
              Work email
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                placeholder="founder@yourcompany.com"
                className="flex-1 rounded-xl border border-white/10 bg-ink-700/60 px-4 py-3 text-white outline-none focus:border-brand"
              />
            </div>
            <label className="mt-4 flex items-start gap-2 text-xs text-white/60">
              <input type="checkbox" name="consent" required className="mt-1 accent-[#00b3a4]" />
              <span>
                I agree to receive marketing emails. Unsubscribe anytime.
              </span>
            </label>
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-5 w-full disabled:cursor-wait disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Subscribing…
                </>
              ) : (
                <>
                  Subscribe <Send className="h-4 w-4" />
                </>
              )}
            </button>
            {status === "success" && (
              <p className="mt-3 flex items-center gap-1.5 text-sm text-brand">
                <Check className="h-4 w-4" /> {msg}
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 flex items-center gap-1.5 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" /> {msg}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
