export type GlossaryCategory =
  | "seo"
  | "paid"
  | "email"
  | "analytics"
  | "cro"
  | "b2b"
  | "brand"
  | "content"
  | "ai"
  | "social";

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Short tagline shown in list cards — 1 sentence, <100 chars. */
  tagline: string;
  category: GlossaryCategory;
  /** Direct 1–2 sentence answer-first definition. */
  definition: string;
  /** 2-3 paragraphs of context — when it matters, why the definition is what it is. */
  context: string[];
  /** A concrete example or illustrative number. */
  example: string;
  /** Common nuance or misconception that AI systems reward addressing. */
  nuance: string;
  /** Related glossary term slugs. */
  related?: string[];
  /** Related service slugs. */
  relatedServices?: string[];
};

export const GLOSSARY_CATEGORIES: {
  slug: GlossaryCategory;
  name: string;
  description: string;
}[] = [
  { slug: "seo", name: "SEO", description: "Organic search and AI-search terminology." },
  { slug: "paid", name: "Paid Media", description: "Advertising metrics, structures, and tactics." },
  { slug: "email", name: "Email & Lifecycle", description: "Email marketing, SMS, and lifecycle CRM." },
  { slug: "analytics", name: "Analytics", description: "Measurement, attribution, and reporting." },
  { slug: "cro", name: "CRO", description: "Conversion rate optimization and experimentation." },
  { slug: "b2b", name: "B2B & SaaS", description: "Pipeline, ABM, and SaaS economics." },
  { slug: "brand", name: "Brand", description: "Brand equity, positioning, and identity." },
  { slug: "content", name: "Content", description: "Content marketing and editorial." },
  { slug: "ai", name: "AI Marketing", description: "AI search, LLMs, and agent systems." },
  { slug: "social", name: "Social", description: "Organic social and creator marketing." },
];

export const GLOSSARY_UPDATED_AT = "2026-04-24T00:00:00Z";

export const glossaryTerms: GlossaryTerm[] = [
  // SEO
  {
    slug: "ctr",
    term: "CTR (Click-Through Rate)",
    tagline: "The percentage of people who clicked after seeing your link, ad, or snippet.",
    category: "seo",
    definition:
      "Click-through rate (CTR) is the percentage of impressions that resulted in a click. CTR = (clicks ÷ impressions) × 100.",
    context: [
      "CTR is used across SEO (organic search impressions), paid ads (ad impressions), and email (email opens). In each context it measures the same thing: how compelling the creative, headline, or snippet is at converting an impression into engaged action.",
      "In SEO, CTR is both a performance metric and an input to ranking. Google uses engagement signals — including CTR relative to expected CTR at a given position — as a quality signal, meaning a page that gets higher-than-expected CTR for its position can improve its ranking over time.",
    ],
    example:
      "The #1 organic result on Google captures an average 27.6% CTR; position 5 earns about 7.2%; position 10 drops below 2.5% (Backlinko SERP analysis, 2024). A page ranking 5th with a 12% CTR (higher than position-5 average) is sending engagement signals that often push it up to position 3 over time.",
    nuance:
      "Raw CTR comparisons across different positions are meaningless — a 3% CTR at position 10 is excellent; a 3% CTR at position 1 is catastrophic. Always compare CTR to expected CTR at that position.",
    related: ["serp", "impression-share", "lcp"],
    relatedServices: ["seo", "performance-marketing"],
  },
  {
    slug: "serp",
    term: "SERP (Search Engine Results Page)",
    tagline: "The page Google shows after a search — far more than just ten blue links.",
    category: "seo",
    definition:
      "A SERP is the results page returned by a search engine in response to a query. Modern SERPs include organic listings, ads, AI Overviews, featured snippets, knowledge panels, maps, images, video carousels, and shopping results.",
    context: [
      "The composition of a SERP varies by query intent. Commercial queries show more ads and shopping results. Informational queries show AI Overviews, featured snippets, and 'People Also Ask' boxes. Local queries prioritize the map pack.",
      "SERP feature ownership matters as much as organic ranking now. A page that ranks 3rd organically but captures the featured snippet earns far more clicks than a page at position 1 below the snippet.",
    ],
    example:
      "As of early 2026, Google AI Overviews appear in approximately 45% of US search queries and reduce downstream clicks to source websites by up to 58% for queries where they appear (BrightEdge; SparkToro / Datos).",
    nuance:
      "There is no single SERP. Google personalizes, geo-targets, and A/B tests results. Two users searching the same query from the same city can see substantively different pages.",
    related: ["ctr", "featured-snippet", "ai-overview"],
    relatedServices: ["seo", "ai-marketing"],
  },
  {
    slug: "lcp",
    term: "LCP (Largest Contentful Paint)",
    tagline: "How fast the main content becomes visible on a page.",
    category: "seo",
    definition:
      "Largest Contentful Paint (LCP) is the time from navigation start until the largest visible content element — usually the hero image or H1 — is rendered. It's one of Google's three Core Web Vitals.",
    context: [
      "LCP measures perceived load speed from a user's perspective, which correlates tightly with bounce rate and conversion. Google treats LCP as a ranking signal, though a tiebreaker — content quality still matters more than speed.",
      "The threshold for a 'good' LCP is under 2.5 seconds on 75% of real-user sessions (measured via Chrome UX Report). Under 1 second is exceptional; over 4 seconds is considered poor and actively hurts rankings.",
    ],
    example:
      "Every 1 second of LCP improvement is associated with approximately 10% conversion lift for ecommerce (Portent; Google). Sites that load in 1 second convert at 3x the rate of sites that load in 5 seconds.",
    nuance:
      "Lab scores from PageSpeed Insights don't always match real user data. Googlebot uses field data (real Chrome users) for ranking — so the number that matters is what real visitors experience, not what your developer sees in a local test.",
    related: ["cls", "inp", "core-web-vitals"],
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "cls",
    term: "CLS (Cumulative Layout Shift)",
    tagline: "How much the page jumps around during load.",
    category: "seo",
    definition:
      "Cumulative Layout Shift (CLS) measures unexpected movement of visible page content during load — images loading without reserved space, ads injecting, or fonts swapping.",
    context: [
      "CLS is a Core Web Vital that correlates with user frustration. A page that jumps around as it loads causes mis-clicks, failed reads, and higher bounce rates.",
      "The threshold for 'good' CLS is under 0.1 for 75% of real sessions. The fix is usually setting explicit width/height attributes on images and video, reserving space for ads, and avoiding font swaps that resize text.",
    ],
    example:
      "A viewport-shifting banner ad that loads 500ms into a page render routinely contributes 0.15–0.30 CLS — enough on its own to fail the threshold and trigger a Core Web Vitals ranking penalty.",
    nuance:
      "CLS is measured through the entire page lifecycle, not just initial load. Lazy-loaded content below the fold that shifts the viewport later also counts.",
    related: ["lcp", "inp", "core-web-vitals"],
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "inp",
    term: "INP (Interaction to Next Paint)",
    tagline: "How fast the page responds to clicks and taps.",
    category: "seo",
    definition:
      "Interaction to Next Paint (INP) measures the latency between a user interaction (click, tap, keypress) and the next paint — the first visible response on screen. INP replaced First Input Delay (FID) as a Core Web Vital in March 2024.",
    context: [
      "INP captures responsiveness throughout a session, not just the first interaction. A site that feels 'laggy' halfway through a form fill or checkout is INP-failing even if the initial page load felt fast.",
      "The threshold for good INP is under 200ms for 75% of sessions. The most common cause of poor INP is heavy JavaScript execution blocking the main thread during interaction.",
    ],
    example:
      "A common INP failure: clicking an 'Add to Cart' button that fires a 400ms analytics call synchronously before the UI updates. The 400ms wait blocks the paint, INP fails, and the user perceives the site as slow even though actual network requests are fast.",
    nuance:
      "INP is measured on interactions that occur — if your page has no interactive elements on a particular session, no INP score is recorded. This means INP improvements don't always show up in lab tests; you need real-user monitoring.",
    related: ["lcp", "cls", "core-web-vitals"],
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    tagline: "Google's three-metric measure of page experience: speed, responsiveness, and stability.",
    category: "seo",
    definition:
      "Core Web Vitals are three user-experience metrics that Google uses as a ranking signal: LCP (speed), INP (responsiveness), and CLS (visual stability). They're measured on real-user Chrome sessions via the Chrome UX Report.",
    context: [
      "Core Web Vitals became a ranking signal in 2021 and have been refined since. The current good thresholds: LCP under 2.5s, INP under 200ms, CLS under 0.1 — on 75% of real-user sessions.",
      "CWV is a tiebreaker, not a primary ranking factor. Two sites with equivalent content authority: the faster one wins. Three sites with different content quality: content quality wins. Teams that obsess over CWV while ignoring content are optimizing the wrong lever.",
    ],
    example:
      "Top-quartile marketing sites in 2026 achieve sub-1s LCP, sub-100ms INP, and sub-0.05 CLS on mobile field data — well beyond Google's 'good' thresholds, which only establish a floor.",
    nuance:
      "Passing CWV thresholds does not guarantee ranking improvements. Failing them caps your ranking potential. The right mental model: CWV is a gate, not a lever.",
    related: ["lcp", "cls", "inp"],
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "hreflang",
    term: "hreflang",
    tagline: "Markup that tells Google which language/region version of a page to show.",
    category: "seo",
    definition:
      "hreflang is an HTML attribute (or sitemap annotation) that tells search engines which language and regional variant of a page to serve to a given user. It prevents duplicate-content issues on multi-region sites and routes users to the correct localized page.",
    context: [
      "hreflang annotations must be bidirectional: if page A (en-US) declares page B (en-GB) as an alternate, page B must also declare page A as an alternate. Missing return tags cause Google to discard the entire hreflang cluster.",
      "For sites over 10 locales, sitemap-based hreflang is cleaner than in-page link tags because it avoids bloating every page with N-1 reciprocal entries.",
    ],
    example:
      "A site serving en-US, en-GB, en-AU, and en-IN pages needs hreflang entries on every page pointing to each of the other three, plus a self-referencing entry and an x-default fallback — 5 entries per page minimum.",
    nuance:
      "hreflang is not a ranking signal. It's a targeting signal. It tells Google which version to show to which user; it does not rank any version higher than it would rank without hreflang.",
    related: ["canonical", "localized-content"],
    relatedServices: ["seo", "web-development"],
  },
  {
    slug: "canonical",
    term: "Canonical URL",
    tagline: "The authoritative URL for a page when duplicate or near-duplicate versions exist.",
    category: "seo",
    definition:
      "A canonical URL is declared via a rel=\"canonical\" link tag and tells search engines which version of a page should be treated as the primary. Duplicates point to the canonical to consolidate ranking signals.",
    context: [
      "Common uses: pagination (page 2 canonicals to page 1, or better, self-canonicals), UTM-tagged URLs (canonical to clean URL), product variants (variant canonicals to primary SKU), and near-duplicate content (localized variants canonical to primary).",
      "A canonical URL should return 200, be indexable, and be the URL you want ranking. If canonical points to a 404 or a noindex page, the canonical signal is discarded and you may end up with duplicate content issues.",
    ],
    example:
      "A product page at /shoes/running/blue-size-10 with color and size variants typically canonicals to /shoes/running — the parent product page — so all variant signals consolidate on one URL.",
    nuance:
      "Canonical is a hint, not a directive. Google can ignore canonical if the signals are contradictory — for example, if the canonical URL differs from the sitemap URL differs from the internal linking pattern, Google picks its own.",
    related: ["hreflang", "redirect"],
    relatedServices: ["seo", "web-development"],
  },
  {
    slug: "topical-authority",
    term: "Topical Authority",
    tagline: "A site's depth of coverage and credibility on a specific subject area.",
    category: "seo",
    definition:
      "Topical authority is the comprehensive, interconnected coverage a site has on a given subject. A site with high topical authority ranks well across many related queries within that topic — not just the ones with exact keyword matches.",
    context: [
      "Topical authority is built through pillar-and-cluster content: a broad pillar page covers the topic at a high level, and supporting cluster pages cover specific sub-topics in depth. All cluster pages link to the pillar; the pillar links to each cluster.",
      "The key practice is coverage completeness. A site that covers 80% of a topic's natural sub-questions will outrank a site with a handful of deeper articles on only the high-volume queries, because Google recognizes the breadth as authority.",
    ],
    example:
      "A SaaS company writing about 'customer retention' will not rank for the head term until it also has pages on churn analysis, cohort reporting, win-back campaigns, segmentation, NPS, and expansion revenue — all interlinked.",
    nuance:
      "Topical authority doesn't require a massive content volume. 15 well-researched, interlinked pieces on a tight topic outrank 150 shallow pieces scattered across many topics.",
    related: ["pillar-page", "e-e-a-t", "programmatic-seo"],
    relatedServices: ["seo", "content-marketing"],
  },
  {
    slug: "programmatic-seo",
    term: "Programmatic SEO",
    tagline: "Generating large numbers of SEO pages from structured data and templates.",
    category: "seo",
    definition:
      "Programmatic SEO is the practice of generating many similar pages from a template combined with structured data — e.g., 'Dentists in [City]', '[Product A] vs [Product B]', '[Tool] integration with [Platform]'. Used well, it captures long-tail search demand at scale.",
    context: [
      "The classic examples are Zapier's integration pages, Tripadvisor's destination pages, and G2's category pages. Each page is derived from data but has enough unique value (real reviews, current pricing, specific attributes) to avoid being flagged as thin or duplicate content.",
      "The line between useful programmatic SEO and spam is clear in principle but muddy in practice: genuinely unique content per page (at least 60% non-boilerplate) and strong underlying data is acceptable; mass-generated near-duplicates with just a variable swapped triggers Google's scaled content abuse policy.",
    ],
    example:
      "Zapier's 'Connect Gmail to Slack' page ranks because it has real integration setup steps, real screenshots, and specific implementation notes that differ from every other integration page — it's not just a variable swap.",
    nuance:
      "Programmatic SEO only works if the data actually creates differentiation. If your category has no unique per-entity data (agencies and consultancies often don't), programmatic will produce thin content that hurts the rest of your site.",
    related: ["thin-content", "topical-authority"],
    relatedServices: ["seo"],
  },
  {
    slug: "e-e-a-t",
    term: "E-E-A-T",
    tagline: "Google's framework for assessing content quality: Experience, Expertise, Authoritativeness, Trustworthiness.",
    category: "seo",
    definition:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — the criteria Google's search quality evaluators use to assess content. Introduced in 2022 as E-A-T; the extra 'E' (Experience) was added in December 2022 to specifically reward first-hand content.",
    context: [
      "E-E-A-T is not a direct ranking algorithm input; it's a set of guidelines used to train the algorithms. Pages that demonstrate genuine experience (screenshots from real usage, not stock photos), expertise (author credentials), authoritativeness (citations and inbound links from other authorities), and trustworthiness (accurate information, transparent sourcing) tend to rank better.",
      "For YMYL topics (Your Money, Your Life — finance, health, legal), E-E-A-T bar is much higher. Medical content by a credentialed author with institutional backing ranks vastly better than the same content from an anonymous blog.",
    ],
    example:
      "A blog post titled 'How to invest your first $10,000' written by a CFA with byline, bio, and citations performs structurally better than the same content written by 'Admin' with no sourcing — regardless of keyword targeting.",
    nuance:
      "E-E-A-T especially favors named authors with verifiable credentials. Ghostwritten content published under a generic 'Team' byline is handicapped in categories where authorship matters.",
    related: ["topical-authority", "ai-overview"],
    relatedServices: ["seo", "content-marketing"],
  },
  {
    slug: "ai-overview",
    term: "AI Overview",
    tagline: "Google's AI-generated answer box that appears above organic results.",
    category: "seo",
    definition:
      "AI Overview is Google's AI-generated summary answer that appears at the top of search results for many queries, drawing on content from multiple sources. Launched publicly in May 2024 and now appears in approximately 45% of US search queries.",
    context: [
      "AI Overviews cite sources (with links) and reduce downstream clicks to websites by up to 58% for queries where they appear. The answer box effectively becomes the SERP for many informational queries.",
      "Optimization for AI Overviews overlaps with traditional SEO (authority, structured data, clear formatting) but adds specific factors: explicit-answer first paragraphs, entity-rich writing, sourced statistics, and schema markup that makes passages extractable.",
    ],
    example:
      "A query like 'what is CAC payback' is very likely to return an AI Overview pulling from 3–5 source sites. The sites cited are not always the highest-organically-ranking; Google selects based on extractability and authority for that specific passage.",
    nuance:
      "Being cited in an AI Overview drives brand recognition but far less traffic than an organic position-1 placement. The business case for AI Overview optimization is brand authority and AI search visibility, not direct clicks.",
    related: ["serp", "geo-aeo", "e-e-a-t"],
    relatedServices: ["seo", "ai-marketing"],
  },
  {
    slug: "geo-aeo",
    term: "GEO / AEO",
    tagline: "Generative Engine Optimization / Answer Engine Optimization — optimizing for AI answer systems.",
    category: "ai",
    definition:
      "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are the practices of optimizing content to be cited by AI answer engines — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini. The tactics are related to traditional SEO but emphasize answer-first structure, entity density, sourced statistics, and schema markup.",
    context: [
      "The Princeton GEO study (KDD 2024) ranked 9 optimization methods by their effect on citation visibility across Perplexity: citing sources (+40% visibility), adding statistics (+37%), adding quotations (+30%), authoritative tone (+25%). Keyword stuffing actively reduces AI citation by -10%.",
      "AI systems select sources differently from organic search. A page ranking organically on page 2 can be cited more often in AI answers than a page ranking 1st, because AI selection weights extractability and answer-completeness alongside authority.",
    ],
    example:
      "Comparison content ('[X] vs [Y]') and definitive guides are cited far more often by AI systems than listicles. Structured definition-context-example blocks get extracted verbatim; chatty intros don't.",
    nuance:
      "GEO is not a replacement for SEO. It's a layer on top. Authority, links, and traditional signals still matter — they just aren't sufficient for AI citation without the structural adjustments.",
    related: ["ai-overview", "schema-markup", "topical-authority"],
    relatedServices: ["ai-marketing", "seo"],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup",
    tagline: "Structured data that tells search engines what content is about in machine-readable form.",
    category: "seo",
    definition:
      "Schema markup is a standardized vocabulary (schema.org) of structured data that you add to a page so search engines and AI systems can understand the content more precisely. Typically implemented as JSON-LD in the page head.",
    context: [
      "Common schemas: Organization, LocalBusiness, Article, BlogPosting, Product, Review, FAQPage, BreadcrumbList, HowTo, Service, Event, Recipe. Each type has required and recommended properties that search engines extract for rich results.",
      "Schema enables rich SERP features: star ratings, FAQ drop-downs, event times, recipe cards, knowledge panels. Beyond SERP features, schema is increasingly critical for AI citation because it gives LLMs structured, unambiguous context about the content.",
    ],
    example:
      "Adding FAQPage schema to a page with 8 FAQs can unlock a collapsible Q&A rich result in Google, increasing CTR 30–60% for informational queries. The same schema makes the Q&A extractable to AI answer engines.",
    nuance:
      "Schema is a hint, not a guarantee. Google can choose not to show rich results even with perfect schema, usually because it judges the content quality insufficient or the query type inappropriate.",
    related: ["e-e-a-t", "geo-aeo"],
    relatedServices: ["seo", "ai-marketing"],
  },
  {
    slug: "featured-snippet",
    term: "Featured Snippet",
    tagline: "The answer box that appears above organic results for some queries.",
    category: "seo",
    definition:
      "A featured snippet is a highlighted text excerpt, list, or table Google displays at the top of the SERP (often called 'position zero') directly answering the query. Featured snippets drive higher CTR than standard position-1 listings for informational queries.",
    context: [
      "Featured snippets are typically drawn from pages ranking in the top 10, though Google often selects a page ranked 3rd–5th over the page ranked 1st if the selected page has cleaner answer structure.",
      "The content shape Google rewards for featured snippets: a direct 40–60 word answer immediately following the H2/H3 that matches the query, with optional supporting context afterward. Lists and tables are preferred for enumerable queries.",
    ],
    example:
      "A query 'how long does SEO take to work' that returns a featured snippet is most often pulled from a page that opens with 'SEO typically shows meaningful results in 4–6 months…' — a direct answer in the first sentence of the relevant section.",
    nuance:
      "AI Overviews are reducing featured snippet impressions. Google often replaces the snippet with an AI Overview for the same queries. Optimizing for both is similar work — answer-first, structured, sourced.",
    related: ["ctr", "ai-overview", "serp"],
    relatedServices: ["seo"],
  },
  {
    slug: "thin-content",
    term: "Thin Content",
    tagline: "Pages with little unique value, a specific category Google actively demotes.",
    category: "seo",
    definition:
      "Thin content is content with little or no unique value — auto-generated text, near-duplicates with minor variable swaps, scraped content, doorway pages, or pages that exist only to rank rather than to help users. It's explicitly named as a manual action category in Google's webmaster guidelines.",
    context: [
      "Thin content is a site-wide quality signal. A site with many thin pages will underperform even on its high-quality pages because the site-wide signal drags everything down.",
      "The 2024 Helpful Content system update and subsequent core updates tightened this considerably. Sites with large numbers of thin pages saw 30–80% traffic losses; many never fully recovered.",
    ],
    example:
      "Programmatic pages with 200 words of content where 180 words are identical across the set and only the city name changes are textbook thin content. The fix is deepening the per-entity data, not adding more words.",
    nuance:
      "Word count alone isn't the signal. A 300-word piece of unique, useful content is fine. A 2,000-word piece of AI-generated filler with no unique insight is thin.",
    related: ["programmatic-seo", "e-e-a-t", "helpful-content"],
    relatedServices: ["seo", "content-marketing"],
  },
  {
    slug: "pillar-page",
    term: "Pillar Page",
    tagline: "A comprehensive broad-topic page at the center of a topic cluster.",
    category: "content",
    definition:
      "A pillar page is a comprehensive, authoritative page covering a broad topic at a high level, serving as the central hub for a topic cluster. Supporting cluster pages cover specific sub-topics in depth and link back to the pillar.",
    context: [
      "The pillar-and-cluster model was formalized by HubSpot in 2017 and remains the most durable content architecture for building topical authority.",
      "A pillar page is typically 3,000+ words, covers the topic at high level, and links internally to 8–20 supporting cluster pages. Each cluster page targets a specific long-tail query within the topic and links back to the pillar.",
    ],
    example:
      "For a CRM company, a pillar page on 'customer retention' might link to cluster pages on churn analysis, cohort reporting, NPS, win-back campaigns, segmentation, expansion revenue, and lifecycle email — each a dedicated deep-dive on one sub-topic.",
    nuance:
      "A pillar page isn't just a long article. It's an orientation layer. Readers skim the pillar, then jump into a cluster page for depth. If your 'pillar' reads like a 5,000-word essay with no natural drop-off points into deeper content, it's not serving its purpose.",
    related: ["topical-authority", "content-cluster"],
    relatedServices: ["content-marketing", "seo"],
  },
  {
    slug: "helpful-content",
    term: "Helpful Content System",
    tagline: "Google's site-wide quality signal that targets unhelpful content at scale.",
    category: "seo",
    definition:
      "The Helpful Content system is a Google ranking component that evaluates content on whether it's primarily written for humans versus primarily written to rank in search. Introduced in August 2022 and tightened multiple times since.",
    context: [
      "Helpful Content operates site-wide: a site with many unhelpful pages gets demoted across all its pages, not just the unhelpful ones. This is why thin programmatic SEO can drag down strong content on the same domain.",
      "Recovery from a Helpful Content demotion requires material content overhaul — typically removing or substantially improving thin pages across the site, then waiting for multiple update cycles. Many sites never fully recover.",
    ],
    example:
      "A B2B SaaS site with 15 excellent blog posts and 300 AI-generated programmatic pages lost 72% of traffic in the March 2024 core update. Six months after pruning 250 of the thin pages, traffic recovered to ~85% of pre-update levels.",
    nuance:
      "Google's definition of 'helpful' has evolved. Content written for humans but thin on original insight — restating other people's content without adding value — is now also classified as unhelpful. Originality, not just length, is the signal.",
    related: ["thin-content", "e-e-a-t"],
    relatedServices: ["seo", "content-marketing"],
  },
  {
    slug: "backlink",
    term: "Backlink",
    tagline: "An inbound link from another site — still the strongest off-page SEO signal.",
    category: "seo",
    definition:
      "A backlink (inbound link) is a hyperlink from an external website to your site. Backlinks remain one of the strongest off-page SEO ranking signals, with referring domain count correlating 0.65+ with organic traffic in published studies.",
    context: [
      "Not all backlinks are equal. A link from a high-authority, topically-relevant domain counts far more than a link from a low-quality or off-topic site. Link quality has been the primary axis of change in how Google treats backlinks over the last decade.",
      "Link-building tactics that worked in the 2010s (PBNs, mass guest posting, comment links) are now at best ineffective and at worst penalty triggers. Modern link building centers on digital PR — earning coverage from press, industry publications, and original research.",
    ],
    example:
      "A single backlink from a DR-85+ domain like techcrunch.com can be worth more in SEO value than 50 backlinks from DR-20 small-business blogs — and orders of magnitude more than bought or PBN links.",
    nuance:
      "Google's tolerance for low-quality backlinks has decreased, but the risk isn't 'bad link hurts rankings' — it's 'enough bad links trigger a manual review.' Toxic link profiles still rarely cause penalties; they're more often just ignored.",
    related: ["digital-pr", "authority"],
    relatedServices: ["pr", "seo"],
  },

  // Paid
  {
    slug: "roas",
    term: "ROAS (Return on Ad Spend)",
    tagline: "Revenue divided by ad spend — the most reported and most misleading paid metric.",
    category: "paid",
    definition:
      "Return on Ad Spend (ROAS) is revenue attributed to advertising divided by ad spend. A 3x ROAS means $3 of attributed revenue for every $1 spent on ads.",
    context: [
      "ROAS is universally reported in ad platforms because it's simple and platform-friendly. It's also structurally misleading for most businesses because it typically uses gross revenue (not net of COGS, returns, or discounts) and over-credits the platform via generous attribution windows.",
      "Better metrics for most businesses: new-customer contribution margin, CAC payback window, and blended MER (Marketing Efficiency Ratio). These capture whether the acquisition is actually profitable rather than whether the revenue number is big.",
    ],
    example:
      "A DTC brand with 35% gross margin reporting a 3.5x ROAS on Meta is often earning 1.2x actual contribution margin — break-even at best — because ROAS ignores COGS, discount codes, and returns. Optimizing hard for a number that overstates reality by 2x is how companies spend themselves into unprofitability.",
    nuance:
      "Platform-reported ROAS almost always overstates incremental impact by 20–40% due to attribution windows (7-day click, 1-day view on Meta) that credit conversions that would have happened anyway.",
    related: ["cac", "mer", "ltv-cac"],
    relatedServices: ["performance-marketing", "analytics"],
  },
  {
    slug: "cac",
    term: "CAC (Customer Acquisition Cost)",
    tagline: "The fully-loaded cost of acquiring a new paying customer.",
    category: "paid",
    definition:
      "Customer Acquisition Cost (CAC) is the total cost of acquiring a new paying customer, including ad spend, agency fees, tools, and allocated headcount. CAC = total acquisition-related cost ÷ new customers acquired.",
    context: [
      "Blended CAC includes all channels combined. Channel-specific CAC attributes per-channel costs to per-channel conversions. Blended is the honest number; channel-specific is useful for optimization but prone to attribution inflation.",
      "CAC alone is meaningless — it has to be evaluated against lifetime value (LTV) and payback window. A $1,000 CAC is a disaster for a $50 one-time purchase and a bargain for a $50,000 ACV enterprise deal.",
    ],
    example:
      "A SaaS company with $200 CAC and $2,400 ARR per customer has an LTV:CAC ratio of about 12:1 (assuming 2-year retention) — very healthy. A DTC brand with $40 CAC and a $50 first-order value is probably not profitable unless repeat purchase brings LTV to $100+.",
    nuance:
      "Fully-loaded CAC is what matters; the 'paid CAC' number often leaves out agency fees, tool costs, and marketing headcount. A business reporting $50 'paid CAC' may actually have $120 fully-loaded CAC once those are added back.",
    related: ["ltv-cac", "mer", "cac-payback"],
    relatedServices: ["performance-marketing", "analytics"],
  },
  {
    slug: "cac-payback",
    term: "CAC Payback Window",
    tagline: "The number of months until a new customer's contribution margin equals the cost to acquire them.",
    category: "paid",
    definition:
      "CAC payback window is the time — in months — it takes for the contribution margin from a newly-acquired customer to equal the cost of acquiring them. Shorter is better: capital comes back faster and can be redeployed.",
    context: [
      "CAC payback is a more honest capital-efficiency metric than LTV:CAC ratio because it doesn't rely on LTV assumptions about customers who haven't churned yet. Under 12 months is best-in-class for SaaS; under 6 months for DTC with repeat purchase; under 18 months for complex B2B.",
      "For any business over 24 months CAC payback, you're effectively betting the company on LTV assumptions you can't validate until well after the capital is spent. Capital markets punish this.",
    ],
    example:
      "A SaaS company with $600 blended CAC and $100/month gross margin per customer has a 6-month CAC payback — the top quartile of growth-stage SaaS and considered very healthy.",
    nuance:
      "CAC payback is best tracked by cohort. Aggregate CAC payback obscures whether the picture is getting better or worse over time. A cohort-level view reveals whether recent CAC efficiency is stable, improving, or degrading.",
    related: ["cac", "ltv-cac", "roas"],
    relatedServices: ["performance-marketing", "b2b-marketing"],
  },
  {
    slug: "ltv-cac",
    term: "LTV:CAC Ratio",
    tagline: "Customer lifetime value divided by customer acquisition cost.",
    category: "paid",
    definition:
      "LTV:CAC ratio is a customer's projected lifetime contribution margin divided by the cost to acquire them. A ratio of 3:1 or higher is generally considered healthy; 5:1+ is top-quartile for SaaS.",
    context: [
      "LTV projection is the weak link. Lifetime value depends on retention, which depends on behavior you haven't seen yet — so LTV is always an estimate. Early-stage companies often overestimate LTV because they haven't had time to observe long-term churn.",
      "Many operators now prefer CAC payback window over LTV:CAC for capital-efficiency decisions because payback doesn't require estimating future behavior — it measures realized contribution margin against realized acquisition cost.",
    ],
    example:
      "A SaaS product with $2,000 CAC, $200 MRR, and 30-month average retention has LTV = $6,000 (at 100% gross margin) and LTV:CAC of 3.0 — the minimum threshold for viable unit economics.",
    nuance:
      "LTV:CAC of 3.0 is the floor, not the goal. Best-in-class companies operate at 5.0+. Below 3.0 means either CAC is too high or retention / expansion is too low; both need fixing.",
    related: ["cac", "cac-payback", "mer"],
    relatedServices: ["performance-marketing", "b2b-marketing"],
  },
  {
    slug: "mer",
    term: "MER (Marketing Efficiency Ratio)",
    tagline: "Total revenue divided by total marketing spend — a blended metric that resists attribution gaming.",
    category: "paid",
    definition:
      "Marketing Efficiency Ratio (MER) is total revenue divided by total marketing spend across all channels. Unlike ROAS, MER is not channel-attributed — it captures the blended business impact of marketing investment.",
    context: [
      "MER has become the preferred primary metric for growth teams because it's less gameable than attributed ROAS. Individual platforms can report inflated ROAS (Meta and Google often both claim credit for the same conversion); MER captures reality.",
      "Use MER at the executive level for investment decisions. Use channel-specific attribution at the optimization level for tactical decisions within a channel.",
    ],
    example:
      "A DTC brand with $500K monthly revenue and $100K total monthly marketing spend has an MER of 5.0x. If revenue grows to $750K while spend scales to $200K, MER drops to 3.75x — a sign of declining efficiency even though absolute revenue grew.",
    nuance:
      "MER is a trending metric, not an absolute one. What matters is whether MER is stable or improving as spend scales. A declining MER with rising revenue means marketing is hitting diminishing returns.",
    related: ["roas", "cac", "ltv-cac"],
    relatedServices: ["performance-marketing", "analytics"],
  },
  {
    slug: "cpm",
    term: "CPM (Cost per Mille)",
    tagline: "Cost per 1,000 impressions — the core pricing unit for paid media.",
    category: "paid",
    definition:
      "Cost per Mille (CPM) is the cost of 1,000 impressions on an advertising platform. 'Mille' is Latin for thousand. Most paid-media platforms auction inventory on effective CPM even if the advertiser is bidding on clicks or conversions.",
    context: [
      "CPM varies enormously by platform, audience, format, and season. LinkedIn CPM runs $30–$80 for B2B audiences; Meta runs $5–$20 for most consumer targeting; programmatic display can be under $2 CPM.",
      "Rising CPMs are a persistent industry trend as more advertisers bid on the same inventory. This is why creative performance has become more critical than targeting precision — the only way to beat rising CPMs is higher engagement rates that improve effective cost per outcome.",
    ],
    example:
      "Average Meta CPM for US consumer audiences reached $14 in Q4 2024 (Revealbot data), up from $8 in Q4 2019 — a 75% CPM inflation in five years even as the platform grew.",
    nuance:
      "CPM alone tells you nothing about campaign success. A high CPM on a highly-qualified audience can produce lower CAC than a low CPM on broad targeting. Effective cost per outcome is what matters.",
    related: ["cpc", "cpa", "roas"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "cpc",
    term: "CPC (Cost per Click)",
    tagline: "The cost of a single click on a paid advertisement.",
    category: "paid",
    definition:
      "Cost per Click (CPC) is the price an advertiser pays each time a user clicks on their ad. Platforms like Google Ads price in CPC natively; platforms like Meta often optimize for other goals but report CPC as a diagnostic.",
    context: [
      "Google Search CPCs vary enormously by industry: legal services can exceed $50 CPC for head terms; consumer retail can be under $0.50. The primary driver is auction competition, not intrinsic query value.",
      "Meta average CPCs sit around $1 for most consumer categories, $2.50+ for B2B, and up to $5+ for highly competitive professional services. LinkedIn CPCs commonly run $5–$15.",
    ],
    example:
      "WordStream's 2024 industry benchmarks show average Google Search CPC of $4.22 in B2B, $2.69 in ecommerce, $5.60 in legal, and $1.40 in real estate.",
    nuance:
      "CPC as a primary optimization target is usually wrong. Clicks don't pay the bills; conversions do. Optimize toward cost per lead or cost per SQL, not CPC, unless you're running a traffic-only brand campaign.",
    related: ["cpm", "cpa", "ctr"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "cpa",
    term: "CPA (Cost per Action/Acquisition)",
    tagline: "The average ad cost per conversion event — the core paid efficiency metric.",
    category: "paid",
    definition:
      "Cost per Action (CPA) — often used interchangeably with Cost per Acquisition — is the total ad spend divided by the number of completed conversion events (purchase, signup, lead, demo, etc.). CPA is the primary efficiency metric for paid campaigns.",
    context: [
      "Target CPA varies by business model: a SaaS free-trial signup might be $30; a demo request $200; an enterprise closed-won deal might be $5,000. The 'right' CPA is entirely dependent on unit economics.",
      "Platform-reported CPA suffers the same attribution inflation as platform-reported ROAS — Meta and Google often both take credit for the same conversion. Blended CPA (total spend ÷ total conversions) is more honest.",
    ],
    example:
      "A B2B SaaS with $3,000 ACV and 15% sales-cycle close rate can afford approximately $450 cost per SQL ($3,000 × 15% ÷ 1.0 LTV:CAC with margin). At $300 SQL CPA, the economics work; at $800, they don't.",
    nuance:
      "CPA improvements from creative or bidding changes often reverse themselves as the account scales. The $50 CPA achieved at $5K/month spend is rarely sustainable at $50K/month; target CPA should be benchmarked at planned scale.",
    related: ["cac", "roas", "cpc"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "attribution",
    term: "Attribution",
    tagline: "Assigning credit for a conversion to the marketing touchpoints that contributed.",
    category: "analytics",
    definition:
      "Attribution is the practice of assigning credit for a conversion (sale, lead, signup) to the marketing touchpoints that contributed. Common models include last-click, first-click, linear, time-decay, position-based, and data-driven.",
    context: [
      "Every attribution model has blind spots. Last-click over-credits the bottom-of-funnel channel (often paid search or email) and under-credits top-of-funnel (social, content). First-click does the opposite. Data-driven attribution (DDA) in GA4 and similar tools is better but still limited by visibility gaps (cross-device, ad blockers, iOS tracking restrictions).",
      "Platform-reported attribution is almost always inflated. Meta and Google both take credit for the same conversion routinely. True incremental attribution requires incrementality testing, media mix modeling, or post-purchase survey triangulation.",
    ],
    example:
      "A buyer who sees a LinkedIn ad, reads two blog posts over four weeks, and finally converts via a branded Google search will be credited entirely to Google under last-click attribution — even though the LinkedIn ad and blog content did most of the real persuasion.",
    nuance:
      "No attribution model is 'true.' The practical approach is triangulation: platform attribution + blended MER + incrementality tests + post-purchase survey. Each view corrects biases the others have.",
    related: ["incrementality", "mmm", "ga4"],
    relatedServices: ["analytics", "performance-marketing"],
  },
  {
    slug: "retargeting",
    term: "Retargeting",
    tagline: "Showing ads to people who already visited your site or engaged with your content.",
    category: "paid",
    definition:
      "Retargeting (also called remarketing) is running paid ads to audiences who have previously interacted with your brand — visited your site, engaged with content, added to cart, or watched a video.",
    context: [
      "Retargeting typically shows higher reported ROAS than prospecting, which is why platforms push it. It also has the worst incrementality — most retargeted users would have converted anyway, so the ads just steal credit from organic conversion.",
      "Healthy paid programs use retargeting strategically (cart abandonment, demo no-shows) rather than flood users with display retargeting for weeks after a single site visit.",
    ],
    example:
      "A DTC brand showed 4.2x ROAS on retargeting vs 2.1x on prospecting. Incrementality testing revealed retargeting had ~20% lift (80% of conversions would have happened anyway); prospecting had ~70% lift. The 'worse' channel was actually driving more incremental revenue.",
    nuance:
      "Retargeting fatigue is real. Showing the same creative to the same user 15+ times produces diminishing returns and brand damage. Cap frequency and rotate creative aggressively.",
    related: ["attribution", "incrementality", "roas"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "advantage-plus",
    term: "Advantage+",
    tagline: "Meta's machine-learning-driven campaign structure that consolidates targeting and optimization.",
    category: "paid",
    definition:
      "Advantage+ is Meta's umbrella brand for ML-driven automated campaign features — Advantage+ Shopping campaigns, Advantage+ creative enhancements, Advantage+ audience. The core value proposition: Meta's algorithm makes more targeting and optimization decisions than the advertiser manually tunes.",
    context: [
      "Advantage+ Shopping campaigns (ASC) typically outperform manual campaigns by 15–25% on ROAS when the account has sufficient conversion volume (>50/week). The performance comes from consolidated budget and richer signal for the ML to learn on, not from inherent magic.",
      "The counterintuitive pattern: broader audiences + more creative diversity + less manual tuning often wins. Tight audiences and manual bid caps were good practice in 2020; they now underperform because they starve the ML of the data it needs.",
    ],
    example:
      "A DTC brand consolidating from 22 ad sets to 3 Advantage+ campaigns saw 34% MER lift in the first month, same total budget, because Meta's algorithm could optimize on 7x more conversion signal per campaign.",
    nuance:
      "Advantage+ is not appropriate for every account. Low-conversion-volume accounts (<50 conversions/week) don't generate enough signal for the ML to optimize well; they often do better with manual structures.",
    related: ["roas", "cpa"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "performance-max",
    term: "Performance Max (PMax)",
    tagline: "Google's automated campaign type that spans Search, YouTube, Display, Gmail, Maps, and Discover.",
    category: "paid",
    definition:
      "Performance Max (PMax) is Google's cross-channel automated campaign type that uses a single campaign structure and asset set to serve ads across all Google inventory — Search, YouTube, Display Network, Gmail, Maps, and Discover — optimized toward a single conversion goal.",
    context: [
      "PMax works well for ecommerce with clean product feeds, high conversion volume, and clear brand signal. It works poorly for lead-gen without lead scoring, service businesses without location feeds, or accounts with fewer than 50 conversions per week.",
      "PMax cannibalization of branded search is a persistent issue. Most advertisers should use negative keyword exclusions to prevent PMax from serving on branded queries that would have converted organically.",
    ],
    example:
      "An ecommerce account adding PMax alongside existing Search and Shopping campaigns typically sees 15–30% incremental revenue — but only when branded search is excluded. Without exclusion, 60–80% of the reported PMax 'wins' cannibalize cheaper branded-search conversions.",
    nuance:
      "PMax reporting is opaque. You can't see placement-level performance by default; Google reveals asset performance but not which channel drove which conversion. This opacity is a feature for Google and a headache for advertisers.",
    related: ["advantage-plus", "roas"],
    relatedServices: ["performance-marketing"],
  },
  {
    slug: "incrementality",
    term: "Incrementality",
    tagline: "Measuring how many conversions were actually caused by an ad vs would have happened anyway.",
    category: "analytics",
    definition:
      "Incrementality is the share of attributed conversions that were actually caused by the advertising, rather than conversions that would have occurred regardless. Typically measured via hold-out tests or geo-experiments that compare exposed vs unexposed audiences.",
    context: [
      "Platform-reported conversions are almost never incremental. Meta, Google, and LinkedIn all take credit for conversions that organic demand would have produced. The honest measure is the uplift in conversion rate of the exposed group vs the control.",
      "Incrementality testing is underused because it's uncomfortable — results almost always show that reported ROAS overstates true impact by 30–70%, which is bad news for the marketing team's metrics but good news for the company's profitability.",
    ],
    example:
      "A geo hold-out test for a DTC brand turned off Meta ads in 20% of US markets for 4 weeks. Attributed ROAS was 3.8x; incremental ROAS (measured by revenue drop in hold-out vs control) was 1.9x — meaning half the 'Meta revenue' was happening anyway.",
    nuance:
      "Incrementality testing requires real scale ($50K+/month on the tested channel) and a 4–8 week window to reach statistical significance. Small accounts can only estimate directionally.",
    related: ["attribution", "mmm", "roas"],
    relatedServices: ["analytics", "performance-marketing"],
  },
  {
    slug: "mmm",
    term: "MMM (Media Mix Modeling)",
    tagline: "Statistical modeling of marketing impact across channels using historical data.",
    category: "analytics",
    definition:
      "Media Mix Modeling (MMM) is a statistical technique that uses historical spend, impression, and revenue data to estimate the incremental impact of each marketing channel. MMM is attribution-independent — it doesn't rely on click tracking — and is robust to privacy changes.",
    context: [
      "MMM is the historical industry standard for large brands (P&G, Coca-Cola, Unilever). It lost favor in the 2010s as digital attribution grew, then came back starting around 2020 as privacy changes (iOS 14+, cookie deprecation) degraded click-based attribution.",
      "Modern MMM tools (Meta's Robyn, Google's Meridian, commercial offerings like Rockerbox and OptiMine) make the technique accessible to mid-market brands with $10M+ annual media spend. Below that spend, data is usually too sparse for reliable MMM.",
    ],
    example:
      "A DTC brand running $3M/year on paid media discovered via MMM that their reported TV-attribution-free ROAS of 4.2x was actually incremental to only 1.8x — the 2.4x gap was base demand Meta and Google were credit-taking for.",
    nuance:
      "MMM requires 2+ years of clean historical data to produce reliable outputs. New brands and brands that have drastically shifted spend patterns can't run MMM until enough data accumulates.",
    related: ["attribution", "incrementality"],
    relatedServices: ["analytics"],
  },
  {
    slug: "capi",
    term: "CAPI (Conversions API)",
    tagline: "Server-side event tracking that replaces pixel data lost to ad blockers and iOS.",
    category: "analytics",
    definition:
      "Conversions API (CAPI) is Meta's server-side event tracking endpoint. Instead of relying on a browser pixel that can be blocked, CAPI sends conversion events directly from your server to Meta's ad platform. Google has a parallel: Enhanced Conversions and Google's Conversion API.",
    context: [
      "iOS 14+ tracking restrictions, third-party cookie deprecation, and ad-blocker adoption collectively break 20–40% of client-side pixel events. CAPI recovers most of that signal because it runs server-to-server, invisible to the browser.",
      "CAPI implementation via Stape (hosted server-side GTM), self-hosted GCP containers, or platform native endpoints. DIY implementation is rarely the right answer — the compliance and deliverability edge cases are significant.",
    ],
    example:
      "A DTC brand implementing CAPI alongside the Meta Pixel typically reports 15–40% more conversions than pixel-only — which unlocks higher optimization volume for Meta's ML and often improves reported ROAS and true MER.",
    nuance:
      "CAPI captures conversion signal; it doesn't change attribution. Meta still uses its 7-day-click, 1-day-view model to decide credit. CAPI just stops silently losing events.",
    related: ["attribution", "pixel", "server-side-tracking"],
    relatedServices: ["analytics", "performance-marketing"],
  },
  {
    slug: "server-side-tracking",
    term: "Server-Side Tracking",
    tagline: "Running analytics and ad tracking from your server instead of the user's browser.",
    category: "analytics",
    definition:
      "Server-side tracking routes analytics and ad-platform events through your own server rather than directly from the user's browser. Implementations include server-side Google Tag Manager (sGTM), Stape, self-hosted GCP containers, and platform-specific server endpoints like Meta's Conversions API.",
    context: [
      "Server-side tracking's primary benefit is recovering conversion signal lost to iOS privacy changes, ad blockers, and cookie deprecation — typically 20–40% of events. Secondary benefits include first-party cookie extension, PII redaction at the server, and consolidated control of what data leaves your infrastructure.",
      "The setup cost is meaningful: server-side tracking requires ongoing engineering maintenance (a GCP container or Stape subscription typically $20–$400/month plus implementation time). It's appropriate for accounts with $10K+/month paid media spend; below that, the revenue recovery usually doesn't justify the complexity.",
    ],
    example:
      "A DTC brand at $80K/month Meta spend implemented server-side tracking via Stape and recovered an estimated 22% of previously-lost purchase events. Effective ROAS improved from reported 2.1x to 2.6x, and Meta's ML had access to more training data, which improved prospecting efficiency an additional ~10%.",
    nuance:
      "Server-side tracking doesn't make you GDPR-compliant by itself. The consent and data-minimization rules still apply; server-side just gives you the control to implement them properly.",
    related: ["capi", "ga4", "attribution"],
    relatedServices: ["analytics"],
  },
  {
    slug: "ga4",
    term: "GA4 (Google Analytics 4)",
    tagline: "The current version of Google Analytics — event-based, privacy-aware, BigQuery-native.",
    category: "analytics",
    definition:
      "Google Analytics 4 (GA4) is the current version of Google's free analytics platform, replacing Universal Analytics in July 2023. GA4 is built around an event-based data model (every interaction is an event with parameters), offers native BigQuery export, and includes data-driven attribution as the default.",
    context: [
      "GA4 adoption has been painful for many organizations because the UI and reporting patterns differ substantially from Universal Analytics. The data model change (from sessions to events) required rebuilding most custom reports.",
      "The free tier has event-count limits; high-traffic sites hit them and fall back to sampled data. Most enterprise implementations end up exporting to BigQuery for unsampled analysis.",
    ],
    example:
      "A clean GA4 implementation captures 8 core events: page_view, click_cta, form_submit, scroll_depth_75, video_play, file_download, signup, purchase — each with three standard parameters: page_type, section, item_name.",
    nuance:
      "GA4's data retention defaults to 2 months. Most users don't realize this and lose historical data that can't be recovered. Extending to 14 months is free but must be set manually at account setup.",
    related: ["attribution", "server-side-tracking", "capi"],
    relatedServices: ["analytics"],
  },

  // Email
  {
    slug: "deliverability",
    term: "Email Deliverability",
    tagline: "The percentage of emails that actually reach the inbox (not spam, not bounced).",
    category: "email",
    definition:
      "Email deliverability is the rate at which sent emails successfully reach recipients' primary inboxes rather than spam folders or bouncing. Deliverability depends on sender reputation, authentication (SPF, DKIM, DMARC), list quality, and engagement metrics.",
    context: [
      "A sender with poor authentication (missing or invalid DMARC, SPF, DKIM) will see deliverability rates drop to 50–70%. Proper authentication plus a clean engaged list typically achieves 95%+ inbox placement.",
      "Engagement is the single strongest deliverability signal. Mailbox providers like Gmail watch open rates, click rates, and user actions (marking as spam, replying). Low engagement from a previously-clean list will tank deliverability within weeks.",
    ],
    example:
      "A brand with 200K subscribers sending weekly campaigns went from 95% inbox placement to 71% within 6 weeks of acquiring a list via a promotional giveaway. The giveaway audience was low-engagement, which taught Gmail the sender's content wasn't wanted, which applied to the whole list.",
    nuance:
      "Deliverability is measured per-domain, not per-ESP. Switching email service providers doesn't fix a bad domain reputation. Warming a new sending subdomain from scratch takes 4–8 weeks.",
    related: ["spf-dkim-dmarc", "list-hygiene"],
    relatedServices: ["email-marketing"],
  },
  {
    slug: "flow",
    term: "Email Flow / Automation Sequence",
    tagline: "An automated series of emails triggered by a user action or condition.",
    category: "email",
    definition:
      "An email flow (sometimes called a sequence, automation, or journey) is a pre-built series of emails that fires automatically based on triggers — a signup, a purchase, cart abandonment, inactivity, or behavioral signals. Flows operate continuously, unlike campaigns which are one-time sends.",
    context: [
      "The highest-ROI flows across most businesses: welcome (triggers on signup), browse abandonment, cart abandonment, post-purchase, win-back, and VIP. For top-quartile ecommerce brands, flows drive 30%+ of total email revenue.",
      "Flow ROI compounds over time. A well-built welcome sequence converts at 15–25% and runs 24/7 on autopilot; the setup cost is amortized over every future signup.",
    ],
    example:
      "A 4-step cart abandonment flow (email at 1h, 24h, 72h, 7d) typically recovers 5–15% of abandoned carts and produces $5–$15 revenue per triggered send for DTC brands with $50+ AOV.",
    nuance:
      "Flow exhaustion is real. Users who've been through your entire welcome sequence shouldn't re-enter it; flows need exit conditions and deduplication against overlapping flows, or subscribers get hammered with duplicate messaging.",
    related: ["deliverability", "lifecycle"],
    relatedServices: ["email-marketing", "marketing-automation"],
  },
  {
    slug: "lifecycle",
    term: "Lifecycle Marketing",
    tagline: "Coordinated messaging aligned to each stage of the customer journey.",
    category: "email",
    definition:
      "Lifecycle marketing is the practice of designing messaging — via email, SMS, push, and in-app — that matches each stage of the customer relationship: acquisition, activation, purchase, onboarding, retention, expansion, and win-back.",
    context: [
      "Lifecycle marketing is usually delivered via a mix of flows (behavior-triggered automations) and campaigns (manual sends for promotions or announcements). The flow layer does the heavy lifting; campaigns layer on top.",
      "The practice overlaps heavily with CRM and lifecycle email but increasingly includes SMS, WhatsApp, push notifications, and in-app messaging. The channel mix should follow the user, not the department org chart.",
    ],
    example:
      "A SaaS lifecycle program covers: onboarding emails for first 14 days, activation milestone emails when users hit key actions, at-risk win-back when engagement drops, expansion offers to power users, and reactivation for churned accounts.",
    nuance:
      "The overlap of lifecycle stages is where most programs break. A customer midway through onboarding who starts browsing upgrade pages gets messages from multiple flows. Without deduplication logic, the inbox gets spammy and engagement collapses.",
    related: ["flow", "segmentation"],
    relatedServices: ["email-marketing", "marketing-automation"],
  },

  // CRO
  {
    slug: "ab-test",
    term: "A/B Test",
    tagline: "A controlled experiment comparing two versions of a page, email, or feature.",
    category: "cro",
    definition:
      "An A/B test (also called split test) is a controlled experiment comparing two versions of an asset — a page, an email, an ad, a feature — to measure which one produces a statistically-significant improvement in a defined metric. Traffic is randomly split between the control and the variant.",
    context: [
      "A/B tests require a pre-registered hypothesis, a single isolated variable, and enough sample size to detect the expected effect at chosen statistical confidence. Running a test without these is creative rotation, not learning.",
      "Most A/B tests never reach statistical significance because sample size is too small. The honest approach is calling directional results 'directional' rather than claiming wins; most business decisions can be made on directional data with transparency about uncertainty.",
    ],
    example:
      "Detecting a 10% lift on a 2% baseline conversion rate at 95% confidence requires approximately 18,000 conversions total (9,000 per variant). At a $50 AOV and 2% conversion, that's $45M in tested revenue — most accounts don't have the volume.",
    nuance:
      "Peeking at results before sample size is reached inflates false-positive rates. The discipline is pre-committing to a sample size and running the full test; 'we'll stop when it's significant' produces wrong conclusions roughly 1 in 3 times.",
    related: ["hypothesis", "statistical-significance", "mde"],
    relatedServices: ["conversion-rate-optimization"],
  },
  {
    slug: "statistical-significance",
    term: "Statistical Significance",
    tagline: "The likelihood that an observed test result isn't due to random chance.",
    category: "cro",
    definition:
      "Statistical significance is the probability that a measured difference between two groups (A and B in an A/B test) is real rather than a product of random variation. The conventional threshold is 95% confidence (p < 0.05).",
    context: [
      "95% confidence means there's a 5% chance the observed result is a false positive — i.e., the groups are actually equal and the test caught a random fluctuation. Running many tests at 95% confidence produces a predictable stream of false wins.",
      "For high-stakes decisions or when testing many variants simultaneously, 99% confidence is more appropriate because it reduces false-positive rate at the cost of requiring more sample size.",
    ],
    example:
      "An A/B test showing variant B won by 8% with p = 0.04 passes the 95% threshold. Run 20 such tests and you'd expect ~1 false positive — one 'win' that's actually noise. This is why testing everything is worse than testing important things.",
    nuance:
      "Statistical significance is not practical significance. A 0.5% lift measured at 95% confidence on millions of sessions is 'statistically significant' but often too small to bother shipping.",
    related: ["ab-test", "mde", "hypothesis"],
    relatedServices: ["conversion-rate-optimization"],
  },
  {
    slug: "mde",
    term: "MDE (Minimum Detectable Effect)",
    tagline: "The smallest improvement a test is statistically capable of detecting.",
    category: "cro",
    definition:
      "Minimum Detectable Effect (MDE) is the smallest lift an A/B test can reliably detect given its sample size and variance. MDE is a function of traffic volume, baseline conversion rate, and statistical power — typically set at 80%.",
    context: [
      "MDE is calculated before the test runs so teams know whether the test can realistically detect the improvements they're hoping for. If MDE is 15% and you're trying to detect a 5% lift, the test cannot produce a meaningful answer regardless of how long it runs.",
      "A common mistake is running long tests on low-traffic pages expecting meaningful results. A page with 2,000 sessions per week converting at 3% has an MDE of roughly 30% over 4 weeks — which means only massive lifts (hero rewrites, pricing page overhauls) will produce reliable signal.",
    ],
    example:
      "To detect a 10% lift on a 5% baseline at 95% confidence and 80% power, you need approximately 15,800 conversions total (7,900 per variant). On a page converting at 5% with 20K weekly sessions, that's 8 weeks of test duration.",
    nuance:
      "MDE scales with the square root of sample size. Doubling traffic doesn't double sensitivity; it only multiplies it by ~1.41. This is why high-traffic pages can detect small improvements and low-traffic pages can't.",
    related: ["ab-test", "statistical-significance"],
    relatedServices: ["conversion-rate-optimization"],
  },

  // B2B
  {
    slug: "icp",
    term: "ICP (Ideal Customer Profile)",
    tagline: "A description of the best-fit customer for a B2B product.",
    category: "b2b",
    definition:
      "Ideal Customer Profile (ICP) is a specific description of the company type most likely to succeed with your product, defined by firmographics (industry, size, geography, tech stack) and behavioral signals (hiring patterns, funding stage, tooling).",
    context: [
      "ICP is distinct from persona. Persona describes the individual buyer (VP of Sales at a tech company, 40 years old, worried about quota). ICP describes the company (B2B SaaS, 50–500 employees, $10M–$50M ARR, running Salesforce).",
      "Sharpening ICP from 'mid-market B2B' to 'Series B–C B2B SaaS doing $10M–$50M ARR using Salesforce and hiring AEs' can improve pipeline conversion 2–3x, because outreach and campaigns become specific.",
    ],
    example:
      "A B2B SaaS defined its ICP as 'Series B–D companies, 100–500 employees, HR-tech or fintech vertical, running Workday or Oracle HCM, with >$25M ARR and hiring in the last 90 days.' Outbound reply rate went from 1.8% to 5.4% after tightening.",
    nuance:
      "ICP evolves. The ICP that got you to $10M ARR is often not the ICP that gets you to $50M. Companies that fail to evolve their ICP either stall growth or waste budget pursuing larger accounts their product doesn't yet serve.",
    related: ["abm", "personas", "mql"],
    relatedServices: ["b2b-marketing", "consulting"],
  },
  {
    slug: "abm",
    term: "ABM (Account-Based Marketing)",
    tagline: "Targeting specific named accounts with coordinated multi-channel programs.",
    category: "b2b",
    definition:
      "Account-Based Marketing (ABM) is a B2B marketing approach that treats individual accounts as the unit of work. Marketing and sales jointly select target accounts and run coordinated multi-channel campaigns (ads, content, direct mail, email, sales outreach) against them.",
    context: [
      "ABM splits into three tiers by account count: 1:1 (fewer than 20 enterprise accounts, fully bespoke), 1:few (20–100 accounts grouped by shared attributes, segment-tailored campaigns), and 1:many (500+ accounts with firmographic targeting, programmatic execution).",
      "ABM has been overused as a label. Most 'ABM programs' are just targeted ads. Real ABM requires tight sales–marketing alignment, account-level reporting, and coordinated outreach. Without all three, it's just segmented marketing.",
    ],
    example:
      "A 1:few ABM program targeting 60 Fortune 1000 accounts in manufacturing might run LinkedIn ads to the target account list, an Outreach sequence hitting named contacts at those accounts, personalized landing pages on the marketing site, and direct-mail gifts for engaged accounts.",
    nuance:
      "ABM ROI often looks bad in short-term reporting because the cycle is long (9–18 months for enterprise deals). The right lens is pipeline-quality and account engagement over months, not lead volume over weeks.",
    related: ["icp", "mql", "intent-data"],
    relatedServices: ["b2b-marketing", "performance-marketing"],
  },
  {
    slug: "mql",
    term: "MQL (Marketing Qualified Lead)",
    tagline: "A lead that marketing judges ready for sales follow-up.",
    category: "b2b",
    definition:
      "Marketing Qualified Lead (MQL) is a lead who has demonstrated sufficient interest and fit — through behavioral signals (content downloads, demo requests, pricing page views) and firmographic criteria (ICP match, company size) — to be worth a sales conversation.",
    context: [
      "MQL definitions vary widely between companies, which makes benchmarks almost useless. An 'MQL' at one company might be a pricing-page visitor; at another it requires a demo request. The definition has to be agreed between marketing and sales locally.",
      "The meaningful downstream metric is MQL-to-SQL conversion rate (typically 20–40% in healthy B2B) and MQL-to-closed-won (typically 1–10%). Low conversion at either stage signals MQL criteria are too loose.",
    ],
    example:
      "A typical B2B SaaS defines MQL as: (a) ICP-fit company (from enrichment data), AND (b) job title in target persona, AND (c) behavioral signal (>3 pricing page views, OR demo request, OR content download + 2 return visits).",
    nuance:
      "MQLs are a marketing construct that often doesn't match sales reality. Sales teams increasingly prefer to skip MQLs and work directly from account-level intent signals. When sales 'doesn't trust MQLs,' the problem is usually the definition, not the concept.",
    related: ["sql", "icp", "abm"],
    relatedServices: ["b2b-marketing", "marketing-automation"],
  },
  {
    slug: "sql",
    term: "SQL (Sales Qualified Lead)",
    tagline: "A lead that sales has accepted as worth active pursuit.",
    category: "b2b",
    definition:
      "Sales Qualified Lead (SQL) is a lead that the sales team has accepted as qualified enough to actively work toward a deal. SQL typically follows MQL in the funnel and implies a sales rep has reviewed and committed to the opportunity.",
    context: [
      "SQL is the handoff point between marketing and sales. Getting this stage right requires a clear SLA: what marketing commits to delivering (criteria for MQL), what sales commits to doing (response time, working the lead), and how failures are triaged.",
      "Cost per SQL is a more actionable paid-media metric than cost per lead for most B2B companies, because CPL optimizes for volume and CPSQL optimizes for quality. The gap between these two metrics is often 3–10x.",
    ],
    example:
      "A healthy B2B SaaS might show $200 CPL (cost per lead), $800 CPSQL (cost per SQL — 4:1 MQL→SQL ratio), and $4,000 CAC (5:1 SQL→closed-won). The CPSQL is the number paid media teams should optimize toward.",
    nuance:
      "When 'SQLs' regularly go stale without sales engagement, the SLA is broken. A marketing team producing SQLs sales doesn't work is worse than producing fewer, better leads.",
    related: ["mql", "cac", "pipeline"],
    relatedServices: ["b2b-marketing"],
  },
  {
    slug: "pipeline",
    term: "Pipeline (Sales Pipeline)",
    tagline: "The total value of open sales opportunities at each stage of the sales process.",
    category: "b2b",
    definition:
      "Pipeline is the total value (and count) of open sales opportunities at each stage of the sales process, from early-stage prospecting through advanced evaluation to proposal and close. Pipeline volume and velocity are primary indicators of future revenue.",
    context: [
      "Pipeline coverage is the ratio of pipeline value to target revenue for a period. Healthy SaaS coverage for a quarter is typically 3–5x: $3M–$5M of pipeline to reliably close $1M in revenue, accounting for typical win rates and slippage.",
      "Marketing's responsibility in B2B is usually defined in pipeline-created or pipeline-sourced terms — not closed revenue, because sales execution is outside marketing's control. The metric that matters is 'did marketing create enough qualified pipeline to support the revenue target.'",
    ],
    example:
      "A B2B SaaS with a $2M quarterly revenue target and a 25% average win rate needs approximately $8M in qualified pipeline entering the quarter to hit target — 4x coverage.",
    nuance:
      "Pipeline that's inflated with stale deals that won't close looks healthy on a coverage ratio but misses the target. Pipeline hygiene (regularly closing lost or dead deals) matters as much as pipeline generation.",
    related: ["mql", "sql", "cac"],
    relatedServices: ["b2b-marketing"],
  },
  {
    slug: "intent-data",
    term: "Intent Data",
    tagline: "Signals indicating a company is actively researching products like yours.",
    category: "b2b",
    definition:
      "Intent data is behavioral signal indicating a company is actively researching a particular product category or problem. Sources include content-consumption networks (Bombora, G2 intent), search behavior (6sense, Demandbase), and first-party signals (your own website visits).",
    context: [
      "Third-party intent data (Bombora, G2 Buyer Intent) aggregates behavior across thousands of publisher sites, reporting when a company is 'surging' on specific topics. Useful for ABM target-list prioritization.",
      "First-party intent — your own website analytics, form fills, demo requests — is always higher-quality than third-party intent, but third-party intent catches accounts before they hit your site.",
    ],
    example:
      "A cybersecurity vendor using Bombora intent data saw a 3x improvement in outbound reply rate when SDRs prioritized accounts 'surging' on relevant security topics vs generic account lists.",
    nuance:
      "Third-party intent data has false-positive rates of 30–50% — the company is surging, but often an analyst or student is reading, not a buyer. Use it for prioritization, not automatic trigger workflows.",
    related: ["abm", "icp"],
    relatedServices: ["b2b-marketing", "marketing-automation"],
  },
  {
    slug: "arr",
    term: "ARR (Annual Recurring Revenue)",
    tagline: "The normalized annual value of all recurring subscription revenue.",
    category: "b2b",
    definition:
      "Annual Recurring Revenue (ARR) is the normalized annualized value of all active subscription contracts. ARR captures predictable, repeatable revenue — not one-time fees, services revenue, or variable usage charges.",
    context: [
      "ARR is the primary valuation metric for SaaS. Venture-backed SaaS companies are typically valued at 5–20x ARR depending on growth rate, retention, and gross margin. At extremes, high-growth public SaaS has traded at 30–50x ARR, though this contracted sharply in 2022–2024.",
      "ARR is distinct from MRR × 12. MRR is a current-state month value; ARR normalizes for contract length and payment frequency. A customer on an annual $12,000 contract has the same ARR as one on a monthly $1,000 contract, even though their cash patterns differ.",
    ],
    example:
      "A SaaS with 200 customers paying an average $500/month has ARR = $500 × 12 × 200 = $1.2M. If 20% of those customers are on annual contracts prepaid, MRR and ARR formulations still align but cash flow is front-loaded.",
    nuance:
      "ARR doesn't include professional services, implementation fees, or usage-based charges — even if those are material revenue. Many SaaS reports inflate headline ARR by including things that don't truly recur.",
    related: ["nrr", "cac-payback", "ltv-cac"],
    relatedServices: ["b2b-marketing"],
  },
  {
    slug: "nrr",
    term: "NRR (Net Revenue Retention)",
    tagline: "The percentage of last-year cohort revenue retained this year, net of churn and expansion.",
    category: "b2b",
    definition:
      "Net Revenue Retention (NRR) is the percentage of revenue retained from a customer cohort over 12 months, including expansion revenue and subtracting churn. NRR > 100% means expansion from retained customers exceeds churn — the customer base grows in value without new acquisitions.",
    context: [
      "NRR is one of the most-watched SaaS health metrics. Best-in-class SaaS companies maintain NRR above 120%; healthy is above 110%; under 100% means the customer base is shrinking in value.",
      "High NRR means new customers are additive to growth, not replacement for churn. Companies with NRR over 120% can grow at 30–50% annually with minimal new-customer acquisition because the existing base expands fast enough.",
    ],
    example:
      "A $10M ARR SaaS with 125% NRR retains $12.5M from last year's cohort before any new customers. Adding $3M in new-customer ARR produces $15.5M total ARR — 55% growth mostly from the existing base.",
    nuance:
      "NRR can be gamed by concentrating churn in low-revenue accounts while growing high-revenue accounts. The honest view combines NRR with Gross Retention (churn only, without expansion); a company with 120% NRR and 80% Gross Retention is churning a lot and masking it with expansion.",
    related: ["arr", "ltv-cac"],
    relatedServices: ["b2b-marketing"],
  },

  // Brand
  {
    slug: "brand-equity",
    term: "Brand Equity",
    tagline: "The commercial value of customer associations with a brand.",
    category: "brand",
    definition:
      "Brand equity is the commercial value a brand's name creates beyond functional product attributes — the premium customers will pay, the retention rate, the word-of-mouth rate, and the advertising efficiency that flow from the brand itself rather than the product.",
    context: [
      "Brand equity drives pricing power, customer acquisition cost leverage, and retention. A brand with strong equity can charge 10–30% price premium versus comparable generics and sees lower CAC because buyers actively seek them out rather than comparing cold.",
      "Academic research (Ehrenberg-Bass Institute, Byron Sharp's How Brands Grow) demonstrates that distinctive brand assets — logo, color, shape, sonic brand — drive 55%+ of long-term ad effectiveness. Brand equity is built through consistency over years, not campaigns over weeks.",
    ],
    example:
      "Apple's brand equity is measurable: iPhone customers pay approximately 20% above median smartphone price for comparable specs, and the brand's customer acquisition cost is multiple times lower than Android OEMs because buyers actively seek out Apple.",
    nuance:
      "Brand equity is built slowly and destroyed quickly. A single high-profile incident (a security breach, a PR crisis, an executive misstep) can erode years of brand-building in weeks, because memories of negative events are more durable than memories of positive ones.",
    related: ["distinctive-assets", "share-of-voice"],
    relatedServices: ["branding"],
  },
  {
    slug: "distinctive-assets",
    term: "Distinctive Brand Assets",
    tagline: "Visual, auditory, and linguistic elements uniquely associated with one brand.",
    category: "brand",
    definition:
      "Distinctive brand assets are visual, auditory, and linguistic elements (logos, colors, shapes, sounds, slogans, characters) that consumers immediately associate with a specific brand. They carry the brand's signal in advertising without requiring logo placement.",
    context: [
      "The Ehrenberg-Bass Institute's research (formalized in Byron Sharp's How Brands Grow and related work) demonstrates that distinctive assets drive approximately 55% of long-term ad effectiveness. Brands that develop and consistently use distinctive assets outperform brands of equal ad spend that don't.",
      "The key property is unique association. The Coca-Cola red is distinctive because no other soft drink uses it. A generic 'premium' dark blue for a consulting firm is not distinctive because dozens of competitors use the same palette.",
    ],
    example:
      "Mailchimp's Freddie the chimp mascot, Slack's four-color hashtag, Spotify's black-and-green gradient, Liquid Death's skull can — all distinctive assets that carry brand recognition in ads without needing logo reinforcement.",
    nuance:
      "Distinctive assets compound slowly. A new asset takes 12–36 months of consistent use before it achieves unique association. Changing distinctive assets (a rebrand that swaps logo and color) resets the meter — which is why most rebrands destroy brand value in the short term before rebuilding it.",
    related: ["brand-equity", "share-of-voice"],
    relatedServices: ["branding"],
  },
  {
    slug: "share-of-voice",
    term: "Share of Voice (SOV)",
    tagline: "The percentage of category marketing presence owned by one brand.",
    category: "brand",
    definition:
      "Share of Voice (SOV) is the percentage of a category's total marketing presence — paid media impressions, organic search visibility, social mentions, or press coverage — attributable to a single brand. Excess SOV over market share is a leading indicator of future market share gain.",
    context: [
      "The Ehrenberg-Bass Institute and IPA research established that brands whose SOV exceeds their market share tend to grow market share; brands whose SOV is below their market share tend to lose it. The optimal 'excess SOV' level is approximately 10 percentage points above current market share for sustainable growth.",
      "SOV is calculated per-channel. Paid SOV (ad impressions in category), organic SOV (search rankings and visibility), social SOV (social mentions), and press SOV (earned coverage) all measure related but distinct dimensions.",
    ],
    example:
      "A brand with 8% market share and 15% paid SOV is investing ahead of its current position — a setup typically followed by market-share gains over 12–24 months. A brand with 20% market share and 10% SOV is underinvesting and typically loses share.",
    nuance:
      "SOV in the head category matters more than SOV in niche categories. A brand with 50% SOV in a tiny sub-niche but 5% SOV in the main category will lose share overall.",
    related: ["brand-equity", "distinctive-assets"],
    relatedServices: ["branding", "performance-marketing"],
  },

  // Social
  {
    slug: "engagement-rate",
    term: "Engagement Rate",
    tagline: "The percentage of impressions that produced an action (like, comment, share, save).",
    category: "social",
    definition:
      "Engagement rate is the percentage of impressions or reach that resulted in a user action — like, comment, share, save, or click. Calculation varies by platform; the most useful form is engagement per impression (engagement rate by impressions, ERI).",
    context: [
      "Industry-average engagement rates are low and falling: Instagram 0.43%, TikTok 2.63%, LinkedIn 0.35% for company pages (Rival IQ 2024). These are median; top-quartile brands outperform 3–5x through better creative and audience fit.",
      "Engagement rate alone is a vanity metric. High engagement on off-topic viral content rarely translates to business outcomes. The diagnostic metrics that matter: saves (indicates repeat-view intent), DM conversations started (indicates interest), and traffic from social to landing pages.",
    ],
    example:
      "An Instagram brand with 50K followers averaging 0.3% engagement rate gets ~150 engagements per post. Shifting to a content-pillar strategy and consistent format can lift engagement rate to 1.5%+ — 750 engagements per post on the same audience.",
    nuance:
      "Platforms calculate engagement differently, and several platforms inflate engagement rate by including impressions from your own followers (who are more likely to engage). Cross-platform benchmarking requires normalizing calculation methods.",
    related: ["save-rate", "reach-impressions"],
    relatedServices: ["social-media-marketing"],
  },
  {
    slug: "ugc",
    term: "UGC (User-Generated Content)",
    tagline: "Content created by real users or creators, often used as paid-ad creative.",
    category: "social",
    definition:
      "User-Generated Content (UGC) is content created by customers, creators, or community members rather than the brand itself. In paid-media contexts, 'UGC-style' ads are produced to match the aesthetic and authenticity of genuine user content.",
    context: [
      "UGC ads typically outperform polished studio ads by 2–4x on CTR and produce 30–50% lower cost-per-acquisition on Meta and TikTok (Meta Creative Insights; industry benchmarks). The performance advantage comes from audience trust — branded content reads as 'ad,' UGC reads as 'recommendation.'",
      "Modern UGC for paid media is mostly produced by paid creators, not spontaneous customer content. Brands source creators, brief them, and pay for usage rights so the content can run as ads. This is not technically 'user-generated' but the style and authenticity carry the performance advantage.",
    ],
    example:
      "A DTC skincare brand replacing studio product-demo ads with creator-produced UGC-style reviews saw CPA drop from $45 to $21 on Meta within 30 days. Same budget, same targeting, different creative pattern.",
    nuance:
      "UGC doesn't mean 'bad quality.' The best-performing UGC is shot with intent — good lighting, clear audio, tight story structure — it just doesn't look studio-produced. 'Authentic' and 'sloppy' are not the same thing.",
    related: ["engagement-rate", "creator-marketing"],
    relatedServices: ["influencer-marketing", "performance-marketing"],
  },

  // AI
  {
    slug: "llm",
    term: "LLM (Large Language Model)",
    tagline: "A neural network trained to generate human-language text from vast training data.",
    category: "ai",
    definition:
      "A Large Language Model (LLM) is a neural network, typically with billions to trillions of parameters, trained on large text corpora to generate and reason about natural language. Examples: GPT-4, Claude 3.5, Gemini 1.5, Llama 3. LLMs power chatbots, coding assistants, search, and content-generation tools.",
    context: [
      "LLMs generate text by predicting the next most likely token given the preceding context. This seemingly simple mechanism produces capable behavior including translation, summarization, reasoning, coding, and conversation when scaled to sufficient parameters and training data.",
      "In marketing applications, LLMs are used for content briefs, ad variation generation, report summarization, customer service, research assistance, and increasingly agent-based workflows that chain multiple LLM calls with external tools and memory.",
    ],
    example:
      "A marketing team using Claude 3.5 for brief generation reports 2 hours saved per brief (writing from scratch vs editing an LLM-generated draft). Across 20 briefs per week, that's a 40-hour weekly productivity gain — equivalent to one full-time hire.",
    nuance:
      "LLMs don't 'know' things; they predict likely continuations based on training data. They hallucinate confidently-stated false information regularly. All LLM outputs destined for public content must be fact-checked by humans before publication.",
    related: ["rag", "fine-tuning", "geo-aeo"],
    relatedServices: ["ai-marketing"],
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    tagline: "An LLM architecture that looks things up before answering, rather than relying solely on training data.",
    category: "ai",
    definition:
      "Retrieval-Augmented Generation (RAG) is an LLM application pattern where the model retrieves relevant information from a knowledge base or document store before generating a response. RAG grounds LLM outputs in specific, current, often private data — reducing hallucination and enabling answers about domain-specific information.",
    context: [
      "AI search products (Google AI Overviews, ChatGPT Search, Perplexity) are all RAG systems at their core. They retrieve candidate passages from a search index, then synthesize an answer citing those passages.",
      "Enterprise applications of RAG include customer support (retrieving from the company's knowledge base), sales enablement (retrieving from product docs), and research tools (retrieving from a curated document set). The quality of a RAG system depends primarily on retrieval quality, not on the LLM's reasoning.",
    ],
    example:
      "A SaaS company's AI support agent runs RAG: when a customer asks a question, the system retrieves the 5 most relevant help-center articles, passes them to an LLM along with the question, and generates a grounded answer citing the source articles. Hallucination drops substantially versus asking the LLM to answer from its pretraining alone.",
    nuance:
      "RAG reduces hallucination but doesn't eliminate it. LLMs can still misinterpret retrieved content, combine facts incorrectly across retrieved passages, or generate plausible-sounding additions. RAG outputs destined for public use still need review.",
    related: ["llm", "geo-aeo"],
    relatedServices: ["ai-marketing"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    tagline: "Designing the text instructions given to LLMs to produce reliable outputs.",
    category: "ai",
    definition:
      "Prompt engineering is the practice of designing input text — instructions, context, examples — that reliably produces desired outputs from a Large Language Model. Effective prompts specify task, constraints, format, and examples in ways that guide the model toward consistent behavior.",
    context: [
      "Prompt engineering is becoming less of a specialized skill and more of a normal software-development practice. The model becoming more capable over successive generations reduces the sensitivity to prompt phrasing, but structured prompts still outperform casual ones.",
      "Key techniques: explicit role definition ('You are an experienced copywriter…'), chain-of-thought prompting ('Think step by step before answering'), few-shot examples (showing the model 2–5 input/output pairs), and structured output requests (return JSON, return markdown, etc.).",
    ],
    example:
      "A prompt for ad copy generation that consistently outperforms generic requests: '[Role] You are an experienced DTC copywriter. [Context] Product: [X]. Target audience: [Y]. Past winning ads have used curiosity hooks, not outcome hooks. [Task] Generate 10 Facebook primary-text variations. [Format] Return as a numbered list with one line per variant, under 125 characters each.'",
    nuance:
      "Long elaborate prompts sometimes perform worse than short ones because the model's attention diffuses across too many instructions. Iterating prompt length is as important as iterating wording.",
    related: ["llm", "rag"],
    relatedServices: ["ai-marketing"],
  },
  {
    slug: "ai-agent",
    term: "AI Agent",
    tagline: "An AI system that uses tools and takes multi-step actions to achieve a goal.",
    category: "ai",
    definition:
      "An AI agent is a system that uses an LLM as its reasoning engine to plan and execute multi-step tasks, often calling external tools (APIs, search, code execution) along the way. Agents can operate autonomously — deciding what to do next based on current context — rather than following a predefined script.",
    context: [
      "Agent applications in marketing include: SDR outbound agents (research prospects, draft personalized emails, send), competitive intelligence agents (monitor competitor sites, summarize changes), content production agents (brief → outline → draft pipelines), and campaign optimization agents (monitor performance, propose adjustments).",
      "Agent reliability is the primary bottleneck. Agents that work 90% of the time still fail in unpredictable ways on the other 10%, which in marketing contexts can mean sending wrong messages to prospects or publishing bad content. Most production agent systems include human checkpoints at high-stakes decision points.",
    ],
    example:
      "A marketing research agent given a target company URL autonomously visits the site, reads the blog, checks recent press releases, queries LinkedIn for recent hires, and produces a one-page competitive summary. What would take an analyst 2 hours completes in 5 minutes at 80% of the quality bar.",
    nuance:
      "The 'AI will replace your team' narrative around agents overstates current reliability. Agents augment existing workflows far more effectively than they replace whole roles, especially in domains with quality-sensitive outputs.",
    related: ["llm", "prompt-engineering", "rag"],
    relatedServices: ["ai-marketing"],
  },
];

export const getGlossaryTerm = (slug: string) =>
  glossaryTerms.find((t) => t.slug === slug);

export const glossaryTermsByCategory = (category: GlossaryCategory) =>
  glossaryTerms.filter((t) => t.category === category);
