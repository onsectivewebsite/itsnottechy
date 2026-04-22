import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How It's Not Techy collects, uses, and protects your personal information.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="section max-w-3xl pt-32">
      <h1 className="font-display text-5xl font-bold tracking-tight text-white">Privacy Policy</h1>
      <p className="mt-4 text-white/60">Last updated: April 2026</p>

      <div className="prose prose-invert mt-8 max-w-none">
        <h2>Who we are</h2>
        <p>
          It's Not Techy (the "Company", "we", "us") is headquartered at {SITE.address.full}. We can be reached at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
        </p>
        <h2>Information we collect</h2>
        <p>We collect information you provide directly (name, email, phone, company, message details), information collected automatically (device, browser, referrer, pages viewed, UTM parameters), and information from third-party services (advertising platforms, analytics).</p>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to your inquiries and deliver services.</li>
          <li>To send marketing communications you've opted into.</li>
          <li>To measure and improve our website and campaigns.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2>Cookies</h2>
        <p>We use necessary, analytics, and marketing cookies. You can configure your choices via the cookie banner or by revisiting our <a href="/cookies">Cookie Policy</a>.</p>
        <h2>Sharing</h2>
        <p>We share data with service providers (hosting, analytics, CRM, advertising) under contractual obligations. We do not sell personal information.</p>
        <h2>Your rights</h2>
        <p>Depending on your jurisdiction (PIPEDA, GDPR, CCPA/CPRA), you may have the right to access, correct, delete, or object to our processing of your personal data. Contact us at {SITE.email} to exercise these rights.</p>
        <h2>Data retention</h2>
        <p>We retain information only as long as necessary for the purposes described or as required by law.</p>
        <h2>Security</h2>
        <p>We apply industry-standard administrative, technical, and physical safeguards. No system is 100% secure.</p>
        <h2>Changes</h2>
        <p>We may update this policy. Material changes will be posted here with an updated date.</p>
      </div>
    </section>
  );
}
