export type CaseStudyStatus = "draft" | "anonymized" | "named";

export type CaseStudyMetric = {
  label: string;
  value: string;
  /** Optional — what baseline the improvement is against. */
  baseline?: string;
};

export type CaseStudy = {
  slug: string;
  /** Named client name if status is "named"; otherwise a category label. */
  clientDisplay: string;
  /** Internal use only — the real client name. Never rendered if status !== "named". */
  clientInternal?: string;
  industry: string;
  services: string[];
  /** 1-sentence outcome headline. */
  headline: string;
  /** 2-3 paragraph summary. */
  summary: string;
  /** Pre-engagement state. */
  baseline: string;
  /** What we shipped. */
  approach: string;
  /** What changed. */
  outcome: string;
  metrics: CaseStudyMetric[];
  /** Engagement duration. */
  duration: string;
  /** When engagement wrapped (for schema dateModified). */
  completedAt: string;
  /** True when client has signed public-reference permission. */
  status: CaseStudyStatus;
  /** Pull quote from the client, if available. */
  testimonial?: {
    quote: string;
    attributedTo: string;
    role: string;
  };
  /** Related services (slugs). */
  relatedServices?: string[];
};

/**
 * Case studies require real outcomes from real engagements. Any entry with
 * status "draft" is scaffolding only and should NOT be indexed or linked
 * publicly until the data is verified.
 *
 * Status progression: draft → anonymized (client hasn't given public-name
 * permission, but numbers are real) → named (client signed a reference
 * permission). The rendering layer hides client names unless status is "named".
 */
export const caseStudies: CaseStudy[] = [
  // Populate this array with real engagements as you gather permissions.
  // Until then the Portfolio page keeps showing anonymized cards from its
  // existing CASES array; once real case studies are added here, the
  // /case-studies route will surface them.
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const publishedCaseStudies = () =>
  caseStudies.filter((c) => c.status !== "draft");
