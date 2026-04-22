"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, Check, AlertCircle } from "lucide-react";
import { services } from "@/data/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !json.ok) throw new Error(json.message ?? "Something went wrong.");
      setStatus("success");
      setMessage("Thanks — we'll be in touch within one business day.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company" name="company" />
        <Field label="Phone (optional)" name="phone" autoComplete="tel" />
      </div>
      <label className="grid gap-2">
        <span className="text-sm text-white/70">What do you need help with?</span>
        <select
          name="service"
          required
          defaultValue=""
          className="rounded-xl border border-white/10 bg-ink-700/60 px-4 py-3 text-white outline-none focus:border-brand"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else / not sure yet</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-white/70">Project details</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A few lines about your business, goals, timeline, and budget."
          className="rounded-xl border border-white/10 bg-ink-700/60 px-4 py-3 text-white outline-none focus:border-brand"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[#00b3a4]"
        />
        <span>
          I agree to be contacted about this inquiry and accept the{" "}
          <a href="/privacy" className="text-brand hover:underline">
            privacy policy
          </a>
          .
        </span>
      </label>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex items-center justify-between gap-3">
        <button
          disabled={status === "loading"}
          type="submit"
          className="btn-primary disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send inquiry <Send className="h-4 w-4" />
            </>
          )}
        </button>
        {status === "success" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-brand">
            <Check className="h-4 w-4" /> {message}
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" /> {message}
          </span>
        )}
      </div>
    </motion.form>
  );
}

function Field({ label, name, type = "text", required, autoComplete }: {
  label: string; name: string; type?: string; required?: boolean; autoComplete?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/70">{label}{required && <span className="text-brand"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-white/10 bg-ink-700/60 px-4 py-3 text-white outline-none focus:border-brand"
      />
    </label>
  );
}
