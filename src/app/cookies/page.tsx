import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How It's Not Techy uses cookies and similar technologies.",
  alternates: { canonical: `${SITE.url}/cookies` },
};

export default function CookiesPage() {
  return (
    <section className="section max-w-3xl pt-32">
      <h1 className="font-display text-5xl font-bold tracking-tight text-white">Cookie Policy</h1>
      <p className="mt-4 text-white/60">Last updated: April 2026</p>
      <div className="prose prose-invert mt-8 max-w-none">
        <h2>What are cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help sites remember preferences, understand usage, and enable advertising.</p>
        <h2>Categories we use</h2>
        <h3>Strictly necessary</h3>
        <p>Required for basic functionality (e.g., session, consent preferences). Cannot be disabled.</p>
        <h3>Analytics</h3>
        <p>Helps us understand how the site is used — typically Google Analytics 4, Microsoft Clarity.</p>
        <h3>Marketing</h3>
        <p>Enables personalization and ad measurement — Meta, Google, LinkedIn, TikTok pixels and conversion APIs.</p>
        <h2>How to manage</h2>
        <p>Use the cookie banner on your first visit. You can change preferences at any time by clearing localStorage or emailing {SITE.email}.</p>
        <h2>Third parties</h2>
        <p>We use Google, Meta, LinkedIn, TikTok, Microsoft Clarity, HubSpot, Klaviyo, and other reputable partners. Each has its own privacy policy.</p>
      </div>
    </section>
  );
}
