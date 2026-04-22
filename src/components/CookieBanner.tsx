"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

const KEY = "int-cookie-consent-v1";

type Consent = { necessary: true; analytics: boolean; marketing: boolean; ts: number };

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [prefs, setPrefs] = useState<Consent>({ necessary: true, analytics: true, marketing: true, ts: 0 });
  const [tab, setTab] = useState<"overview" | "customize">("overview");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (!saved) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const save = (c: Consent) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {}
    setShow(false);
    if (typeof window !== "undefined") {
      (window as unknown as { dataLayer?: unknown[] }).dataLayer =
        (window as unknown as { dataLayer?: unknown[] }).dataLayer || [];
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: "cookie_consent_update",
        consent: c,
      });
    }
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true, ts: Date.now() });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false, ts: Date.now() });
  const saveSelected = () => save({ ...prefs, ts: Date.now() });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">
                    Cookies, but make them useful
                  </h3>
                  <button
                    onClick={rejectAll}
                    aria-label="Close"
                    className="rounded-full p-1 text-white/40 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 text-sm text-white/70">
                  We use cookies for core functionality, analytics, and marketing. You can accept all, reject
                  non-essential, or customize. Read our{" "}
                  <Link href="/cookies" className="text-brand hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </p>

                {tab === "customize" && (
                  <div className="mt-4 space-y-2">
                    <Toggle label="Strictly necessary" sub="Required for the site to work." checked locked />
                    <Toggle
                      label="Analytics"
                      sub="Helps us improve the site with aggregated usage data (GA4)."
                      checked={prefs.analytics}
                      onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                    />
                    <Toggle
                      label="Marketing"
                      sub="Enables personalization and ad measurement (Meta, Google, LinkedIn)."
                      checked={prefs.marketing}
                      onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                    />
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <button onClick={acceptAll} className="btn-primary text-sm">
                    Accept all
                  </button>
                  <button onClick={rejectAll} className="btn-ghost text-sm">
                    Reject non-essential
                  </button>
                  {tab === "overview" ? (
                    <button
                      onClick={() => setTab("customize")}
                      className="text-sm font-medium text-white/80 hover:text-brand"
                    >
                      Customize →
                    </button>
                  ) : (
                    <button onClick={saveSelected} className="text-sm font-medium text-brand hover:underline">
                      Save preferences
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Toggle({
  label,
  sub,
  checked,
  locked,
  onChange,
}: {
  label: string;
  sub: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
      <div>
        <div className="text-sm font-medium text-white">{label}</div>
        <div className="text-xs text-white/60">{sub}</div>
      </div>
      <button
        onClick={() => !locked && onChange?.(!checked)}
        disabled={locked}
        aria-pressed={checked}
        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
          checked ? "bg-brand" : "bg-white/15"
        } ${locked ? "opacity-60" : ""}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
            checked ? "left-5" : "left-0.5"
          }`}
        />
      </button>
    </label>
  );
}
