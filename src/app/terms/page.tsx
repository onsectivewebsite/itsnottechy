import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the It's Not Techy website.",
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <section className="section max-w-3xl pt-32">
      <h1 className="font-display text-5xl font-bold tracking-tight text-white">Terms of Service</h1>
      <p className="mt-4 text-white/60">Last updated: April 2026</p>
      <div className="prose prose-invert mt-8 max-w-none">
        <p>These Terms of Service govern your use of {SITE.url}. By accessing the site you agree to these terms.</p>
        <h2>Content</h2>
        <p>All content on this site is owned by It's Not Techy or our licensors. You may share links to content for non-commercial use with attribution.</p>
        <h2>Service engagements</h2>
        <p>Agency engagements are governed by separate Master Services Agreements and Statements of Work.</p>
        <h2>Disclaimers</h2>
        <p>Content is provided "as is" without warranties. We do not guarantee specific results from marketing activities.</p>
        <h2>Limitation of liability</h2>
        <p>To the maximum extent permitted by law, It's Not Techy is not liable for indirect, incidental, or consequential damages arising from use of this site.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Province of Ontario, Canada.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </div>
    </section>
  );
}
