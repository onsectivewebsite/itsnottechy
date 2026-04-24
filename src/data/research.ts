export type ResearchReport = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  status: "planned" | "fielding" | "published";
  /** ISO date — when the report was or will be published. */
  publishedAt?: string;
  /** ISO date — when the data was collected. */
  fieldedAt?: string;
  /** Primary audience / respondent profile. */
  audience: string;
  /** Number of completed responses. Leave undefined until real. */
  sampleSize?: number;
  /** Methodology summary. */
  methodology: string;
  /** Hero-level findings, once available. Leave empty for planned reports. */
  keyFindings: string[];
  /** Downstream content derived from the report. */
  derivativeContent?: { title: string; url: string }[];
  /** Who should cite this. */
  citationGuide?: string;
  /** Public summary page URL. */
  summaryUrl?: string;
  /** Gated full-report URL. */
  fullReportUrl?: string;
};

/**
 * Research programs are populated here ONLY with real data. Planned reports
 * announce the intent and methodology; status moves to "fielding" when the
 * survey launches and "published" when results are released.
 *
 * Do NOT add synthesized or estimated findings to any report.
 */
export const researchReports: ResearchReport[] = [
  {
    slug: "state-of-multi-region-marketing-2026",
    title: "The 2026 State of Multi-Region Marketing",
    tagline:
      "How leading brands scale marketing programs across 2+ countries without losing campaign efficiency.",
    summary:
      "A planned survey of marketing leaders at companies operating in 2+ countries covering channel mix, attribution, compliance, content localization, and team structure. Responses will be anonymized; aggregate findings will be published as a free report.",
    status: "planned",
    audience:
      "CMOs, VPs of Marketing, and Heads of Growth at companies with marketing programs in 2+ countries and at least $5M in annual revenue.",
    methodology:
      "Online survey distributed via LinkedIn outreach, CMO Slack communities, and industry-partner networks. Target sample size: 400+ completed responses, minimum 75 responses per key region (North America, EMEA, APAC). Survey duration: ~12 minutes. Anonymization: responses are aggregated; no individual company is identified in the published findings. Publication: free report + executive summary, with gated full dataset available to participating respondents.",
    keyFindings: [],
    citationGuide:
      "Once published, cite as: 'It's Not Techy, The 2026 State of Multi-Region Marketing (n=[sample size]).'",
  },
  {
    slug: "ai-marketing-adoption-benchmark-2026",
    title: "The 2026 AI Marketing Adoption Benchmark",
    tagline:
      "How marketing teams actually use AI — what's shipped, what's still theoretical, and what's driving real productivity gains.",
    summary:
      "A planned survey of marketing operators covering which AI tools are actually used in weekly workflows, which workflows produce measurable time savings, and which AI adoption strategies correlate with team productivity.",
    status: "planned",
    audience:
      "Marketing managers, directors, and VPs at companies of all sizes currently using or evaluating AI tools in their stack.",
    methodology:
      "Online survey with branching logic by team size and AI maturity. Target sample size: 300+ completed responses. Data collected: tools used, workflows with AI integration, measured time savings, team composition, governance practices. Publication: free benchmark report + interactive comparison tool.",
    keyFindings: [],
    citationGuide:
      "Once published, cite as: 'It's Not Techy, The 2026 AI Marketing Adoption Benchmark (n=[sample size]).'",
  },
];

export const getResearchBySlug = (slug: string) =>
  researchReports.find((r) => r.slug === slug);
