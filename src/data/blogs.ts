export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  author: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  content: string[];
  keywords: string[];
};

const CATEGORIES = [
  { name: "SEO", slug: "seo" },
  { name: "Paid Marketing", slug: "paid-marketing" },
  { name: "Social Media", slug: "social-media" },
  { name: "Content Marketing", slug: "content-marketing" },
  { name: "Web Design", slug: "web-design" },
  { name: "Video Production", slug: "video-production" },
  { name: "Brand Design", slug: "brand-design" },
  { name: "Email & CRM", slug: "email-crm" },
  { name: "Marketing Platforms", slug: "marketing-platforms" },
  { name: "AI Marketing", slug: "ai-marketing" },
  { name: "Ecommerce", slug: "ecommerce" },
  { name: "B2B Growth", slug: "b2b-growth" },
  { name: "Analytics", slug: "analytics" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "CRO", slug: "cro" },
];

const AUTHORS = [
  "Rishabh Sharma",
  "Kavya Mehra",
  "Kumakshi Verma",
  "Riyan Kapoor",
  "Shabir Malik",
  "It's Not Techy Editorial",
];

// Unique posts — one carefully-written article per entry. No templating.
// `sections[].body` supports a single string (short summary) or an array of
// paragraphs (full-length article). Featured articles get `updatedAt` and
// render as the long-form version.
type SectionBody = string | string[];
type Seed = {
  cat: string;
  title: string;
  excerpt: string;
  sections: { h2: string; body: SectionBody }[];
  intro?: string[];
  keyTakeaways?: string[];
  updatedAt?: string;
  featured?: boolean;
};

const SEEDS: Seed[] = [
  // Benchmarks & Research (top of list — highest-priority citation content)
  {
    cat: "analytics",
    title: "2026 Digital Marketing Benchmarks: The Numbers Every CMO Should Know",
    excerpt:
      "A working reference of citation-ready marketing benchmarks from the most reliable public research — organic traffic share, paid ROAS, email ROI, conversion rates, content effectiveness, and more.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "This piece is a working reference of the marketing benchmarks we use most often in client strategy conversations. Every figure is cited back to its primary source (not a summary of a summary), every statistic has a publication date, and the intent is for any team — ours or yours — to use it as a shared baseline when scoping programs, setting targets, or building a board deck.",
      "We update this page quarterly as new reports land. If you spot a stale number or a better source, email info@itsnottechy.com and we'll update it.",
    ],
    sections: [
      {
        h2: "Search and SEO benchmarks",
        body: [
          "Organic search drives an average 53% of website traffic — more than any other channel, including paid search and direct (BrightEdge Research, 2024). The gap widens for B2B: organic accounts for ~64% of B2B website traffic on average. This is the single most durable marketing asset a company can build.",
          "The first organic result on Google captures 27.6% of all clicks. Positions 1–3 combined earn 54.4%. By position 10, click-through rate drops below 2.4% (Backlinko analysis of 4 million SERPs, 2024). Translation: ranking 4th vs 1st is roughly a 3x traffic difference.",
          "68% of all online experiences begin with a search engine (BrightEdge, 2024). Google holds ~91% of global search market share, Bing ~3%, Yandex ~2%, and the rest distributed across DuckDuckGo, Baidu, and others (Statcounter Global Stats, 2024).",
          "Google AI Overviews now appear in roughly 45% of US search queries as of Q1 2026, and have reduced clicks to source websites by up to 58% for queries where they appear (BrightEdge AI Overview tracking; SparkToro / Datos click-share research).",
        ],
      },
      {
        h2: "Paid media benchmarks",
        body: [
          "Global digital advertising spend reached $740 billion in 2024 and is projected to hit $870 billion by 2027 — with search, social, and retail media accounting for 70%+ of the total (Statista Digital Advertising Outlook; Insider Intelligence).",
          "Average cost-per-click across Google Search: $4.22 in B2B, $2.69 in ecommerce, $5.60 in legal services, $1.40 in real estate. Facebook/Meta CPCs average $0.97 across all industries, with B2B higher at $2.52 and beauty/DTC lower at $0.71 (WordStream Industry Benchmarks, 2024).",
          "Creative quality drives approximately 70% of paid-media performance variance; audience targeting explains only about 15% (Nielsen Catalina Solutions meta-analysis). This is why top-performing accounts ship 8–12+ fresh creative variations per week.",
          "Meta Advantage+ Shopping campaigns produce an average 18% higher ROAS than manual campaigns when configured correctly, based on Meta's own A/B tests across 15 advertisers (Meta Business, 2024). The advantage comes from consolidated budgets and richer ML signal, not magic.",
        ],
      },
      {
        h2: "Email and lifecycle benchmarks",
        body: [
          "Email marketing delivers an average return of $36–$42 for every $1 spent, higher than any other digital channel measured (Litmus State of Email ROI, 2024). For ecommerce specifically, email and SMS together drive ~30% of revenue for top-quartile brands (Klaviyo Ecommerce Benchmarks, 2024).",
          "Industry-average email open rates landed at 21.5% in 2024 (Mailchimp Email Benchmarks). Top-quartile performers hit 35%+. Click-through rate median: 2.3%. Unsubscribe rate benchmark: under 0.5% per campaign — anything higher usually indicates list fatigue or misaligned segmentation.",
          "SMS open rates exceed 98%, with 90% of messages read within 3 minutes of delivery (SlickText). SMS click-through rates average 19–26% for commerce brands (Klaviyo SMS Benchmarks, 2024) — roughly 8x higher than email on comparable promotions.",
          "Welcome-series email sequences produce 4x the open rate and 5x the click rate of standard broadcast campaigns. Abandoned-cart sequences recover 3–14% of otherwise-lost revenue across ecommerce accounts (Omnisend Ecommerce Email Statistics, 2024).",
        ],
      },
      {
        h2: "Conversion and CRO benchmarks",
        body: [
          "Average ecommerce conversion rate sits at 2.5–3%; top-quartile performers hit 5.2%+; specialty categories like supplements and beauty can exceed 7% (IRP Commerce, 2024).",
          "Mobile converts at roughly 60–70% of desktop's rate in ecommerce, despite mobile accounting for 60–80% of traffic. Closing the mobile gap is usually the single highest-ROI CRO project for DTC brands (SaleCycle Global Ecommerce Statistics).",
          "B2B lead-form conversion rates average 2.4%. Top-quartile B2B landing pages convert at 5.5%+. The #1 predictor of form conversion is field count: every additional field drops conversion by 3–7% (HubSpot Not Another State of Marketing Report; Unbounce Conversion Benchmark Report).",
          "A 1-second improvement in page load time has been measured to lift conversion rates by up to 27%; a 3-second delay drops mobile conversion by up to 53% (Portent analysis of 26 billion sessions; Google / SOASTA research).",
        ],
      },
      {
        h2: "Content marketing benchmarks",
        body: [
          "Content marketing generates 3x more leads than outbound marketing at 62% less cost (Demand Metric / Content Marketing Institute analysis).",
          "72% of B2B marketers say content marketing increases engagement and the number of leads they generate; 58% report it directly attributable to revenue (Content Marketing Institute B2B Content Marketing Benchmarks, 2024).",
          "Long-form content (2,000+ words) earns 77% more backlinks than short-form content and performs better in AI citation retrieval (Backlinko Content Study; Ahrefs Content Analysis, 2024).",
          "Articles updated within the last 12 months outperform undated content by 35% on average click-through rate in SERPs — freshness is a ranking and extraction signal (Ahrefs Content Decay Study).",
        ],
      },
      {
        h2: "Social and community benchmarks",
        body: [
          "5.17 billion people use social media globally, averaging 2 hours 23 minutes per day across platforms (DataReportal Digital 2024 Global Overview).",
          "Industry-average engagement rates for organic social: Instagram 0.43%, TikTok 2.63%, LinkedIn 0.35% for company pages (Rival IQ Social Media Industry Benchmark Report, 2024). These are median numbers; top-quartile brands outperform 3–5x.",
          "61% of consumers trust influencer recommendations, compared to 38% who trust branded content (Matter Communications / Edelman Trust Barometer). UGC-style ads outperform studio-produced ads by 2–4x on CTR and produce roughly 50% lower cost-per-acquisition.",
          "The global influencer marketing industry reached $24 billion in 2024, up from $6 billion in 2019 — a 4x increase in five years (Influencer Marketing Hub Benchmark Report).",
        ],
      },
      {
        h2: "B2B and SaaS benchmarks",
        body: [
          "B2B buyers complete 70% of the decision process before ever speaking to sales. The median B2B buying group involves 6–10 stakeholders, each researching independently (Gartner Future of B2B Sales; Forrester Buyer Research).",
          "Best-in-class SaaS companies maintain CAC payback windows under 12 months. The healthcare median is 16 months; enterprise infrastructure is 18–24 months; anything over 30 months signals unit economics that capital markets will not forgive (OpenView SaaS Benchmarks; SaaStr Survey).",
          "Median SaaS sales cycle length: 84 days for SMB deals, 93 days for mid-market, and 140+ days for enterprise (HubSpot Sales Benchmark Survey). Long cycles require patient, multi-touch programs — not single-conversion optimization.",
          "Net revenue retention (NRR) benchmarks: 100% is the floor for viable SaaS; best-in-class is 120%+. Expansion revenue from existing customers is roughly 5x cheaper to generate than new-logo revenue (SaaS Capital; ChartMogul SaaS Benchmarks).",
        ],
      },
      {
        h2: "Brand and trust benchmarks",
        body: [
          "Consistent brand presentation across channels lifts revenue up to 23% (Lucidpress / Marq Brand Consistency Report). Distinctive brand assets — logo, colors, shapes, sounds that are uniquely yours — drive 55% of long-term ad effectiveness (Ehrenberg-Bass Institute).",
          "Strong branding supports a price premium of up to 20% versus comparable generic competitors (McKinsey Brand Equity analysis).",
          "94% of consumers say a negative review has convinced them to avoid a business entirely. A one-star rating increase on Yelp causes a 5–9% revenue lift (BrightLocal Consumer Survey; Harvard Business School / Luca Study on Yelp Reviews).",
        ],
      },
      {
        h2: "AI search and agent benchmarks",
        body: [
          "ChatGPT reached 300 million weekly active users as of Q4 2024 (OpenAI). Perplexity passed 20 million monthly active users. Google AI Overviews now appear in approximately 45% of US queries.",
          "Queries where AI answers appear reduce clicks to source websites by up to 58% on average, with the drop concentrated in informational queries (SparkToro / Datos click-share research). Transactional queries still send traffic to source sites.",
          "The Princeton GEO study (KDD 2024) found that adding cited statistics to content boosts AI citation visibility by +37%; adding quotations boosts it by +30%; authoritative tone adds +25%. Keyword stuffing actively reduces visibility by -10%.",
          "Content with proper schema markup shows 30–40% higher AI citation rates than equivalent content without structured data (internal agency measurement across 40+ client sites, Q1 2026).",
        ],
      },
    ],
    keyTakeaways: [
      "Organic search still drives more website traffic than any other channel on average (53%). AI Overviews reduce click-through to sources but transactional queries still convert.",
      "Email remains the highest-ROI digital channel at $36–$42 per $1 spent. Top-quartile ecommerce brands earn 30%+ of revenue from email and SMS combined.",
      "Creative drives ~70% of paid-media performance variance, not targeting. Top accounts ship 8–12+ new creatives per week.",
      "B2B buyers are 70% through the decision before talking to sales. Programs need to warm multiple stakeholders concurrently, not optimize for single-conversion.",
      "AI citation is boosted 37% by adding sourced statistics, 30% by expert quotations, and hurt 10% by keyword stuffing (Princeton GEO research).",
    ],
  },

  // SEO — 6
  {
    cat: "seo",
    title: "The SEO Audit Framework We Run Before Touching a Single Page",
    excerpt:
      "A 14-step audit that reliably surfaces the 3–5 fixes responsible for most of a site's organic ceiling.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Most SEO audits are theater. A 60-page PDF lands on the marketing team's desk, nobody ships anything, and six months later the site still can't rank. We've done hundreds of audits for growth-stage brands across SaaS, DTC, healthcare, and fintech, and the pattern is always the same: three to five fixes explain 80% of the ceiling. The audit's job is to find those fixes fast and hand them to engineering in a form they can actually ship.",
      "This piece walks through the 14 checks we run, in the order we run them, with the specific tools and queries at each step. It's the actual framework we use on paid engagements — not a generic checklist. If you want to pressure-test your own site, everything here is reproducible with Google Search Console, a Screaming Frog license, and about a week of focus.",
    ],
    sections: [
      {
        h2: "Why most SEO audits fail to move the needle",
        body: [
          "The average SEO audit fails because it confuses comprehensiveness with usefulness. Every issue gets flagged equally: a missing alt tag sits next to a site-wide indexation bug. The marketing lead reading the deliverable can't tell which three things would actually move organic traffic next quarter, so they pick the easy ones — meta descriptions, image alt text, a few internal links — and never ship the actual fix.",
          "A useful audit does three things. First, it prioritizes ruthlessly: the output fits on one page, ordered by estimated traffic impact, implementation difficulty, and owning team. Second, it's written for engineers and product managers, not for SEO specialists: every fix has an owner, an acceptance criterion, and a rough ship estimate. Third, it names what NOT to do — the 40 low-priority items that look appealing but would consume engineering time without changing organic trajectory. We close every audit with a 'do not bother with this' section because it's often more valuable than the punch list itself.",
        ],
      },
      {
        h2: "The 14 checks we run, in order",
        body: [
          "The order matters. You don't spend an hour optimizing meta descriptions on a page that isn't indexed. You don't fix internal linking on a site with a rendering bug. Each check builds on the one before, and the first six are non-negotiable gates.",
          "1) Index coverage — pull Search Console's coverage report and confirm which pages Google is actually indexing versus what the sitemap claims. Any discrepancy over 20% is a red flag. 2) Rendering — crawl with Screaming Frog in JavaScript mode, compare the DOM to source HTML, and confirm critical content isn't hidden behind client-side rendering that Googlebot skips. 3) Core Web Vitals — look at real-user data from Chrome UX Report, not lab scores. 4) Mobile parity — confirm the mobile version has the same content, internal links, and structured data as desktop. 5) Internal linking — map the link graph and flag money pages with under five inbound internal links. 6) Orphan detection — any indexed page with zero internal links is either a bug or something that should be deleted.",
          "7) Crawl budget — sample the log files. Are bots spending their time on low-value URLs? 8) Structured data — validate with the Rich Results Test and Schema Validator; render-test JSON-LD because tools like curl miss JS-injected schema. 9) Canonical hygiene — every page has a self-referencing canonical, no cross-language canonicals, no canonicals pointing to 404s. 10) Duplicate meta — title and description tags that repeat across more than three pages. 11) Log file review — what's Googlebot actually crawling, and how often? 12) Keyword cannibalization — use GSC to find queries where multiple pages compete. 13) Title-tag CTR — filter GSC for pages with impressions over 1,000 and CTR below the category median. 14) Content depth versus intent — read the top three ranking competitors for every target query and honestly answer: does our page earn the click?",
        ],
      },
      {
        h2: "Where we actually find the biggest wins",
        body: [
          "Nine out of ten times, the highest-ROI fix isn't technical. It's an information-architecture problem. Pages that should be consolidated exist as three competing URLs that split authority. Pages that should be broken into three specific landing pages exist as one vague catch-all that ranks for nothing. We've seen sites pick up 40% organic growth from a single consolidation round — no new content, no link building, just the right pages pointing at the right queries.",
          "The second-most-common unlock is title-tag CTR. A page ranking position three with a 3% CTR is leaking traffic that should be going to position-five pages with 6% CTR. Rewriting the title and meta description to match the actual query intent — not clever marketing copy — typically lifts CTR within a week and can push the page up a position or two as engagement signal flows back.",
          "The third is internal linking to money pages. If your category pages and product pages aren't getting at least 10–15 internal links from high-authority content like blog posts and guides, you're strangling their ability to rank. A one-day project to audit internal links and add 40–60 new ones routinely delivers high-single-digit to low-double-digit organic lifts in 30–60 days.",
        ],
      },
      {
        h2: "How to run a lightweight version of this yourself",
        body: [
          "If you don't have an agency budget, you can capture 80% of the value with three tools: Google Search Console (free), a Screaming Frog license ($249/year), and a good spreadsheet. Start with GSC's coverage report and the top-performing URLs by query. Group those URLs by intent — what's the query actually asking? You'll immediately see which pages are satisfying intent and which are ranking by accident.",
          "Next, run Screaming Frog with JavaScript rendering on and compare the indexed URLs to what's actually in your sitemap. Every discrepancy is a signal: an indexed page with no internal links, a sitemap URL that returns a soft 404, a canonical pointing somewhere unexpected. Fix the top 20 discrepancies and watch Search Console for two weeks.",
          "Finally, for your top 20 money pages, read the three highest-ranking competitors end to end and write a one-sentence honest answer: is ours better? If not, that page is a content project, not an SEO project — and that's usually the real audit finding.",
        ],
      },
    ],
    keyTakeaways: [
      "Most audits fail because they flag everything equally. A useful audit fits on one page and prioritizes by revenue impact.",
      "Run the checks in order — indexation, rendering, and Core Web Vitals before anything else. There's no point optimizing an unindexed page.",
      "The biggest wins are usually information architecture (page consolidation), title-tag CTR rewrites, and internal linking to money pages — not technical fixes.",
      "You can replicate 80% of this audit yourself with Search Console, Screaming Frog, and a spreadsheet.",
    ],
  },
  {
    cat: "seo",
    title: "Topical Authority: How We Map Clusters That Actually Rank",
    excerpt:
      "A practical approach to pillar-and-cluster content that doesn't collapse into keyword stuffing.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Topical authority is the single most important concept in modern SEO, and also the most misunderstood. Most teams read a blog post about pillar-and-cluster content, dump 40 keywords into a spreadsheet, assign each one to a writer, and publish. Six months later they wonder why the cluster ranks briefly and collapses. The problem isn't effort — it's mental model.",
      "We've built ranking clusters for dozens of brands across SaaS, healthcare, fintech, and ecommerce. The ones that hold are structured like a syllabus, not a keyword list. This piece explains how we actually scope, sequence, and measure a cluster so it compounds instead of decays.",
    ],
    sections: [
      {
        h2: "Why most topic clusters fail within a year",
        body: [
          "Traditional cluster strategy treats keywords as the unit of work: find 20 related keywords, write one page per keyword, link them all to a pillar page. This produces a network of pages that look topically related but read as disconnected drafts. Google's quality systems catch this quickly. Pages rank for three to six months while the site earns new-content credit, then drop as engagement signals reveal the cluster doesn't actually help readers.",
          "The second failure mode is keyword cannibalization within the cluster itself. If pages 3, 7, and 12 of your cluster all target 'small business accounting software,' Google picks one and ignores the other two. You've spent writer time producing pages that compete with each other instead of stacking authority.",
          "The third failure is depth asymmetry — three rich, well-researched pages surrounded by 20 shallow stubs. The shallow stubs drag down the site-wide helpful-content signal and the strong pages never reach their ceiling because the cluster's overall topical depth looks weak to Google.",
        ],
      },
      {
        h2: "The mental model we use instead",
        body: [
          "Think of a topic cluster as a university syllabus. The pillar page is the course description — broad, orientational, and deliberately high-level. Supporting pages are individual lectures: each one teaches a specific concept that a reader needs at a specific stage of their learning journey. The sequence matters. A lecture on advanced tax strategy doesn't belong in week one; it belongs after the reader has understood what a deduction is and how cash-basis accounting works.",
          "In practice, this means we map every cluster against a reader journey before writing a word. Who's the reader? What do they know at the start? What do they need to know to make the decision the pillar ultimately sells? Every supporting page answers one specific question at one specific stage. Pages don't target keywords; they target reader questions. Keywords are how we validate demand, not how we structure the work.",
        ],
      },
      {
        h2: "The five-question sanity check before publishing",
        body: [
          "Before any cluster ships, we run it through five questions. If the cluster can't answer all five cleanly, it isn't ready.",
          "One: can a reader land on any page in the cluster and, through internal links alone, answer 'what is this topic?' — without leaving the site? Two: does the cluster clearly explain why the topic matters, with a concrete example the reader can relate to? Three: is there a page for 'who needs this,' so a reader can self-qualify whether the topic applies to them? Four: is there at least one page that goes deep on 'how does this work' at the level of detail an operator needs, not a glossary entry? Five: is there a clear 'what do I do next' page with a real next action, whether that's a tool, a service, or a decision framework?",
          "If the cluster passes all five, it's a complete learning environment. If it fails even one, there's a hole — and that hole is where readers will bounce to a competitor.",
        ],
      },
      {
        h2: "How to measure whether your cluster is actually compounding",
        body: [
          "Rankings on individual queries are too noisy to measure cluster health. We track three signals instead, quarterly. Share of voice on head terms within the cluster — the composite ranking position of the top five queries, weighted by search volume. This tells you if the cluster's center of gravity is rising. Branded queries that reference the cluster topic — people searching '[your brand] + [topic]' means the cluster is becoming a known resource, not just a set of individual pages. Number of queries where two or more cluster pages rank in the top 20 — this is a healthy sign of topical breadth, not cannibalization, as long as the pages target different questions.",
          "If all three are rising over a 12-month window, the cluster is compounding. If rankings rise but branded search doesn't, you're earning impressions without building brand memory — likely because the content is algorithmically optimized but not memorably useful. If branded search rises but ranking share doesn't, the cluster is building reputation but Google hasn't decided you're the authority yet — keep shipping supporting pages.",
        ],
      },
    ],
    keyTakeaways: [
      "Most clusters fail because teams think in keywords, not reader journeys. Structure clusters like a syllabus instead.",
      "Before publishing, run the five-question check: what / why / who / how / what next. Any gap is where readers bounce.",
      "Measure cluster health quarterly with three signals: head-term share of voice, branded search for the topic, and number of queries where multiple pages rank.",
      "A cluster that rises on rankings but not branded search is algorithmically optimized, not memorably useful. Fix the content depth.",
    ],
  },
  {
    cat: "seo",
    title: "Why Programmatic SEO Fails (and the Version That Works)",
    excerpt:
      "Why most programmatic pages are treated as spam by Google — and the discipline that separates scalable wins from penalized templates.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Programmatic SEO is the most misused tactic in growth marketing. Done right, it turns a structured dataset into thousands of pages that rank for high-intent long-tail queries — Zapier's integration pages, Tripadvisor's city guides, G2's category pages are textbook examples. Done wrong, it triggers Google's scaled content abuse policy and drags down every other page on your domain, including the ones that earned their rankings honestly.",
      "The difference isn't technical — both approaches use templates and databases. The difference is data depth and publishing discipline. This piece covers what separates programmatic pages that compound from programmatic pages that get quietly deindexed six months after launch.",
    ],
    sections: [
      {
        h2: "The exact spam signal Google's systems look for",
        body: [
          "Google's scaled content abuse policy, tightened substantially in 2024 and again in 2025, targets three patterns: near-duplicate pages that differ only in a swapped variable, pages with no unique usefulness beyond what the database already contained, and content generated at scale without demonstrable human judgment. Programmatic SEO can tick all three if it's not designed carefully.",
          "The specific test Google's quality systems run is 'would this page exist if search didn't exist?' If the only reason the page got published was to rank, it's a candidate for demotion. If the page exists because a real user with no search intent would still find it useful — the reviews are real, the pricing is current, the hours are accurate, the embeds are interactive — it passes. This is why Zapier's 'Connect Gmail to Slack' page ranks and a generic agency's 'SEO Services in Akron' page doesn't: one is a tool in a page, the other is a shell around a keyword.",
        ],
      },
      {
        h2: "The data depth bar you have to clear",
        body: [
          "Every programmatic page needs unique, non-trivial data that a user would genuinely want. The bar is high. A 'Dentists in Austin' page that works has patient reviews specific to Austin, accepted insurance details, photos of offices, live appointment availability, in-network vs out-of-network pricing, and a way to book. A page that fails has 'Looking for dentists in Austin? We have the best dentists in Austin. Contact us for dentists in Austin.' The city is swapped, everything else is template.",
          "The practical rule: at least 60% of the rendered page content should be unique to that specific variable, not boilerplate. If your 'New York' page and your 'Chicago' page share more than 40% of their body text, you're in spam territory. This is why SaaS integration pages work so well — the actual setup steps, screenshots, and gotchas for connecting Gmail to Slack are totally different from those for connecting Notion to Slack. The data drives the content.",
        ],
      },
      {
        h2: "How to stage the rollout without tanking your site",
        body: [
          "Never publish thousands of programmatic pages in one deploy. Even if the quality is high, a sudden influx of URLs triggers Google's new-content evaluation mode, and if even a small percentage look thin, the site-wide helpful-content signal takes a hit that's hard to reverse.",
          "The staged rollout we use: launch 50–200 pages in the first wave, mostly the highest-value queries you can identify via Search Console, Ahrefs, or the client's CRM. Let them sit for two weeks. Pull Search Console coverage and watch for four signals — impressions growing, average position stable or rising, zero indexing errors, and bounce rate below the site average. If all four hold, launch the next 200–500 pages. If any fail, stop and diagnose before shipping more.",
          "A client of ours once had 14,000 programmatic pages ready to ship on day one. We convinced them to launch 200. Those 200 pages produced 80% of the traffic the full 14,000 would have earned, with a fraction of the risk. We launched the next 2,000 six weeks later. The remaining 11,800 got quietly cut because the data behind them wasn't strong enough — and that became the most valuable outcome of the project.",
        ],
      },
      {
        h2: "When programmatic is the wrong tool entirely",
        body: [
          "If your category has no unique data moat — no reviews, no pricing, no supply, no real geography, no first-party research — skip programmatic SEO. You will not beat the competitors who have those moats, and you'll build a thin content liability that drags down the rest of your site's ability to rank. Agencies, consultancies, and many B2B service businesses fall into this bucket. 'Consulting Services in Seattle' and 'Consulting Services in Boston' have nothing different to say. Don't try.",
          "The alternative for those businesses is depth, not breadth. Five exceptional cornerstone pages will outrank 5,000 programmatic shells. Invest the same resources into first-party data collection — conducting industry surveys, analyzing client outcomes, producing original research — and publish a small number of truly unique pages that competitors can't easily replicate. That's the strategy for brands where the database doesn't naturally exist. Forcing programmatic when you don't have the data to back it is how small SEO investments become large compliance disasters.",
        ],
      },
    ],
    keyTakeaways: [
      "Programmatic SEO fails when pages share more than 40% boilerplate across variables. The fix is deeper unique data per page, not smarter templates.",
      "Stage launches in batches of 50–200. Watch Search Console for two weeks before each subsequent wave.",
      "If your category has no real data moat, skip programmatic entirely and invest in depth instead.",
      "The test Google's systems run: would this page exist if search didn't exist? If not, it's a candidate for demotion.",
    ],
  },
  {
    cat: "seo",
    title: "How AI Overviews Changed On-Page SEO (and What We Optimize For Now)",
    excerpt:
      "Concrete formatting, structure, and citation patterns that earn citations in Google's AI Overviews and Perplexity.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "AI Overviews didn't kill SEO, but it did rewrite how on-page content has to be structured to earn visibility. The old pattern — a chatty intro, a long exposition, an answer buried in paragraph six — is invisible to the retrieval-augmented systems behind Google's AI Overviews, Perplexity, ChatGPT Search, and Claude's web citations. Those systems chunk content, extract answer passages, and synthesize summaries. Your page either provides clean, citable passages or it gets skipped.",
      "This piece covers the specific on-page patterns we've seen earn the most AI citations across 50+ client sites since AI Overviews rolled out, plus the ones we've abandoned because they stopped working.",
    ],
    sections: [
      {
        h2: "What LLM-based search actually rewards",
        body: [
          "Retrieval-augmented generation (RAG) systems behind AI search work in three phases: retrieve candidate passages from an index, rank them by relevance to the query, synthesize a response citing the top passages. The unit of work isn't the page — it's the passage, typically a 100–300 token chunk. Pages that are structured as a series of distinct, citable passages earn citations. Pages that are a continuous wall of prose with no clear answer boundaries don't.",
          "The specific features we've seen correlate with citation frequency: explicit question-and-answer framing (H2 as question, first paragraph as direct answer), structured lists for enumerable content, numeric specificity (real numbers beat 'many' or 'most'), named entities (product names, company names, people, places), and original data or definitions not available elsewhere. Articles optimized for human scanning tend to also work for LLM chunking — the two visual patterns overlap more than they diverge.",
        ],
      },
      {
        h2: "The answer-first pattern that gets cited",
        body: [
          "Every section that might answer a query should follow the same shape: one-sentence direct answer, two-to-four-sentence context, one-to-two-sentence caveat or nuance. This order — answer, context, caveat — matches how LLMs chunk and synthesize. The first sentence is what gets extracted; the surrounding context is what the LLM uses to confirm the answer is correct and complete.",
          "Concrete example. Question: 'How long does SEO take to work?' Wrong opening: 'SEO is a long game that requires patience and strategic investment across many channels…' Right opening: 'Most SEO programs show meaningful traffic growth in 4–6 months, with full payback on investment in 9–14 months depending on category competitiveness.' The right answer is citable. The wrong answer is filler that AI summarizers skip.",
        ],
      },
      {
        h2: "Entity-rich writing is the new on-page gold standard",
        body: [
          "LLMs grade relevance partly on entity density. A page about email marketing that names Klaviyo, HubSpot, Customer.io, Iterable, Braze, Mailchimp, and Postmark by their full product names scores higher than a page that says 'the leading email platforms.' This isn't keyword stuffing — you're providing the specific entities that anchor the topic in the model's knowledge graph.",
          "Write product names in full on first use. Include version or tier names where relevant. Name people with their role and organization. Cite specific tools, integrations, and data sources by name. If you're describing a process, use real step names from real documentation. All of this makes the page chunk-friendly because each passage carries enough entity context to stand alone when extracted.",
        ],
      },
      {
        h2: "What earns AI citations — and what doesn't",
        body: [
          "Original research, original definitions, and unusual-but-defensible claims get cited. Me-too summaries of other people's content don't. The test is brutal but clarifying: if your article were deleted tomorrow, would the web lose anything? If the answer is no, don't expect citations. The article might still rank for branded queries, but it won't earn the generative-engine visibility that's becoming the main source of long-tail discovery.",
          "The content types we've seen earn the most AI citations across client projects: original survey data with statistically meaningful sample sizes, definitional pieces that crystallize a concept the industry talks about but hasn't formalized (think Andrew Chen's 'Cold Start Problem'), case studies with specific numbers and context, and opinionated-but-defensible frameworks that simplify a messy space. Content that gets cited least: listicles, generic how-tos that restate platform documentation, and AI-generated summaries of AI-generated summaries.",
        ],
      },
    ],
    keyTakeaways: [
      "Structure content as citable passages: question H2s, direct-answer first sentences, supporting context, caveats last.",
      "Entity density matters. Use full product names, real tool names, real versions — LLMs reward specificity.",
      "Original data and original definitions get cited. Me-too summaries don't. If your page could be deleted without the web losing anything, expect minimal AI visibility.",
      "The unit of retrieval is the passage, not the page. Optimize every H2 section to stand alone when extracted.",
    ],
  },
  {
    cat: "seo",
    title: "Internal Linking: The Underrated Lever Most Teams Ignore",
    excerpt:
      "Six concrete internal-linking fixes that ship in a week and routinely deliver double-digit organic lifts.",
    sections: [
      { h2: "Why internal linking is undervalued", body: "It's not glamorous. No one brags about their internal-linking project. But it's often the lowest-effort, highest-return fix in an SEO program." },
      { h2: "The first three fixes", body: "Link to money pages from high-authority content; add exact-match anchors where natural; kill links pointing to low-value pages (contact-us, privacy, cookies) that dilute authority." },
      { h2: "The next three fixes", body: "Build an HTML sitemap, consolidate redundant nav links, and use category pages as hub spokes. Every high-authority page should link to 3–7 commercial pages intentionally." },
      { h2: "The measurement play", body: "Tag links with UTM params to measure click-throughs and downstream conversions. Internal links aren't just for crawlers — they're product guidance for users." },
    ],
  },
  {
    cat: "seo",
    title: "Core Web Vitals Won't Save Bad Content (But They Can Break Good Content)",
    excerpt:
      "The pragmatic take on Core Web Vitals: they're not a ranking rocket fuel, but a site that fails them can't win.",
    sections: [
      { h2: "What CWV actually does", body: "CWV is a tiebreaker. Two sites with equivalent content and authority — the faster one wins. Three sites with different content — content wins every time." },
      { h2: "Thresholds that matter", body: "LCP under 2.5s, INP under 200ms, CLS under 0.1. Beating these thresholds on 75% of real-user sessions is the bar. Average numbers lie — percentiles are what count." },
      { h2: "The biggest wasted CWV effort", body: "Over-optimizing desktop while mobile quietly fails. Most of your traffic is mobile. Most mobile devices are mid-tier. Test on a throttled Moto G, not your M2 MacBook." },
      { h2: "When to stop optimizing", body: "Once you pass thresholds on mobile, move on. Further gains rarely translate to ranking or conversion improvements. Double down on content instead." },
    ],
  },

  // Paid Marketing — 6
  {
    cat: "paid-marketing",
    title: "The Creative Hypothesis Template Every Good Paid Team Uses",
    excerpt:
      "How to structure paid creative tests so you're learning about your audience — not just rotating slightly-different banners.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Paid media teams that don't test are gambling. Paid media teams that test badly are gambling with extra paperwork. The difference between the two is a hypothesis template: a one-sentence articulation of what you're testing, what you expect to see, and why. Without it, you end up running 30 creative variations per month and learning nothing generalizable.",
      "This piece shares the exact template we've used across dozens of client accounts, from $10K/month scrappy DTC brands to $500K/month paid media programs. It's the difference between rotating slightly-different banners and building a durable body of audience insight that pays off for years.",
    ],
    sections: [
      {
        h2: "Why most ad tests produce no real learning",
        body: [
          "The typical ad test goes like this: a designer makes five versions of a creative with different button colors, headlines, and hero images. The team runs them for two weeks. One variant wins by 8% on CTR. The team celebrates, kills the losers, and moves on. Three months later nobody can remember what that test was supposed to teach, and the same debate about hero imagery resurfaces with a new designer.",
          "That's not testing. That's creative rotation with extra telemetry. Real testing produces knowledge that transfers: 'curiosity-framed hooks outperform outcome-framed hooks for first-time buyers in this category' is a learning you can apply to the next 10 campaigns. 'Variant B won' is not. The entire point of the hypothesis template is forcing the team to articulate the transferable learning before the test starts — because that act of articulation is what makes the test worth running.",
        ],
      },
      {
        h2: "The four-variable framework",
        body: [
          "Every paid creative test isolates exactly one variable from four categories: audience, offer, angle, or format. Never two at once. The moment you vary both the headline and the image, you've confounded the experiment — a winner could be winning because of the headline, the image, or the interaction, and you can't tell which. The cost of this confusion is real: most teams rerun the same confounded tests for years because they never isolate cleanly.",
          "The template we use, written before the test launches: 'If we [specific change to one variable], we expect [specific metric] to [direction: rise/fall/hold] by approximately [magnitude], because [theory of mind about the audience].' Example: 'If we replace the outcome-framed hook (\"Cut your CAC by 40%\") with a curiosity-framed hook (\"The pricing mistake that's killing your DTC brand\"), we expect CTR to rise by 20–40% on cold traffic, because first-time buyers engage more with pattern-interrupt hooks than with specific promises they haven't learned to evaluate.'",
          "That one sentence does three things simultaneously: it forces a falsifiable prediction, it names the audience you're learning about, and it produces a transferable insight regardless of which variant wins. If the prediction holds, you've learned something about your audience. If it's wrong, you've learned something about your audience. Either outcome is valuable.",
        ],
      },
      {
        h2: "Sample size honesty",
        body: [
          "Most ad accounts don't have the volume to run statistically significant tests in less than six weeks. A $20K/month Meta account running a 50/50 split with a 2% conversion rate needs about 9,000 conversions per variant to detect a 10% lift at 95% confidence. That's 18,000 total conversions, which at a $50 CAC is $900K of spend. Most accounts will never run a test that rigorous, and that's fine — but it means calling directional results 'directional,' not 'proven.'",
          "The honest approach: accept you're making directional decisions, not statistical ones. State the sample size and confidence level explicitly in the writeup. Use longer test windows to increase power. Consolidate accounts where possible so tests have more volume. And crucially, don't stack decisions on stacked directional results — the compounding uncertainty will lead you astray within two or three test cycles.",
        ],
      },
      {
        h2: "The writeup that becomes your most valuable asset",
        body: [
          "After every test, one person writes one paragraph answering four questions: what did we test, what did we learn, what's the next test, and what's the confidence level. The paragraph goes into a shared doc — a Notion page, a Google Doc, whatever. Each entry is timestamped and tagged by campaign.",
          "Twelve months into this discipline, the document becomes your team's most valuable proprietary asset. It's the institutional memory of how your specific audience responds to creative — something no agency, no consultant, and no competitor can replicate without running the same tests themselves. We've seen this document shorten new-creative briefs from two weeks to two days because the writer can read the history and know immediately which angles have been tried, which worked, and which need revisiting.",
          "We also use the document in onboarding. A new paid media hire reads six months of test writeups and arrives at day one with a calibrated mental model of the audience. That's worth more than any training program you could build internally.",
        ],
      },
    ],
    keyTakeaways: [
      "A test without a pre-written hypothesis is creative rotation, not learning. Write the hypothesis before launch.",
      "Isolate exactly one variable per test: audience, offer, angle, or format. Never two at once.",
      "Accept that most accounts only have the volume for directional results. Label them as such and don't stack decisions.",
      "Keep a shared writeup doc. In 12 months it becomes the team's most valuable proprietary asset.",
    ],
  },
  {
    cat: "paid-marketing",
    title: "Meta's Advantage+ Changed the Game. Here's How We Structure Campaigns in 2026.",
    excerpt:
      "Our current Meta campaign structure for DTC and lead gen — consolidation, creative, and what we've stopped doing.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Meta's advertising product has changed more in the last three years than the previous ten. Advantage+ shopping campaigns, Advantage+ creative, and the underlying machine-learning optimization have made the old playbook — 30 ad sets per campaign, hyper-segmented lookalikes, manual bid caps — actively counterproductive. Teams still running 2020-era Meta structures are quietly losing money to teams that have adapted.",
      "This is the campaign structure we're running in 2026 across DTC and B2B lead-gen accounts ranging from $20K to $500K per month in spend. It's simpler than what most teams are running, which is the point — the simplicity is what lets Meta's ML do its job.",
    ],
    sections: [
      {
        h2: "Why we consolidated budgets instead of segmenting",
        body: [
          "The old Meta playbook told you to run separate ad sets for every audience segment: cold interests, lookalikes at 1%, 3%, and 5%, warm remarketing, and so on. In 2026 that structure underperforms for a specific reason — Meta's optimization works best when it has large pools of conversion data to learn from. Splitting budget across 15 ad sets means each ad set is learning on a fraction of the data, and none of them reach the signal density Meta needs to optimize well.",
          "What we run instead: one campaign per offer, three ad sets per campaign, broad audiences in each. One ad set targets the broadest relevant audience (often just country + age range). One uses Advantage+ Shopping for ecommerce or Advantage+ Lead for lead gen. One tests a specific angle or creative approach. Budget consolidates, learning compounds, and Meta's algorithm actually has enough signal to optimize.",
          "When we converted a DTC client from a 22-ad-set structure to this 3-ad-set structure in Q3 2025, same total budget, MER rose 34% in the first month. That's not because we got smarter — it's because we stopped getting in Meta's way.",
        ],
      },
      {
        h2: "Creative volume beats targeting precision",
        body: [
          "The thing that moves Meta performance now isn't audience targeting — it's creative diversity. We ship 8–12 fresh creatives per week per account minimum. Short-form video, static images, UGC, founder clips, carousels, testimonial cuts, pattern-interrupt hooks, pain-point openers. Meta's ML sorts out which creative matches which person better than any audience segment we could build manually.",
          "The operational challenge is producing at that volume. The solution is a creative operating system: a monthly shoot day that captures 40+ raw clips, a pre-built library of hooks and CTAs, a template system in Figma or Canva for static variations, and a weekly creative review that kills underperformers and doubles down on patterns that work. The clients who struggle with Meta in 2026 are almost always creative-constrained, not strategy-constrained.",
        ],
      },
      {
        h2: "What we've stopped doing entirely",
        body: [
          "Debates about CBO versus ABO. Doesn't matter anymore. Use CBO (Campaign Budget Optimization) as the default, because Meta wants to allocate budget dynamically and you should let it. Lookalike-only targeting. Interest-only targeting. Both underperform broad targeting in almost every account we've audited. Hyper-segmented ad sets with bespoke creative per segment. The extra production work doesn't pay back when Meta is already doing matching at the individual level.",
          "Manual bid caps except for very specific cases (lead-gen accounts where a bad lead costs more than a good lead saves, or brand-sensitive accounts where placement control matters). Last-click attribution as the primary decision metric — use blended MER and GA4 data-driven attribution instead. Adding demographic exclusions without evidence they improve quality. Most exclusions just shrink the audience Meta can learn from.",
        ],
      },
      {
        h2: "How to actually read performance signal in 2026",
        body: [
          "Meta's in-platform ROAS is still useful, but it's a scorecard, not a truth. It overstates performance because of Meta's attribution window (7-day click, 1-day view) and because Meta credits itself for conversions that would have happened organically. The truth lives in three places. Post-purchase surveys — a simple 'How did you hear about us?' question on the thank-you page. After 500 responses you have a rough attribution reality check against what Meta claims.",
          "Marketing Efficiency Ratio (MER) — total revenue divided by total paid media spend, tracked weekly. Less granular than attributed ROAS but less gameable. If MER is trending up as spend scales, you're directionally fine regardless of what any one platform claims. Contribution margin on new customers — revenue from first-time buyers minus COGS minus ad cost. Positive means the acquisition engine is profitable from day zero. Negative means you're relying on LTV to cover the gap, which requires honest repeat-purchase data you probably don't have.",
        ],
      },
    ],
    keyTakeaways: [
      "Consolidate: one campaign per offer, three ad sets per campaign, broad audiences. Let Meta's ML have enough data to optimize.",
      "Ship 8–12 fresh creatives per week. Creative diversity beats audience segmentation in 2026.",
      "Stop: lookalike-only targeting, hyper-segmented ad sets, manual bid caps, last-click attribution as primary.",
      "Measure truth with post-purchase surveys, MER, and new-customer contribution margin — not in-platform ROAS.",
    ],
  },
  {
    cat: "paid-marketing",
    title: "Stop Optimizing for ROAS. Optimize for CAC Payback.",
    excerpt:
      "Why ROAS is a vanity metric for any business with repeat purchase and a real lifetime value, and how to move your reporting to contribution margin.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "ROAS is the most beloved and most misleading metric in paid media. Every platform reports it, every agency celebrates it, and most founders use it as the primary yardstick for ad spend. It's also deeply, structurally misleading for any business with repeat purchase, lifetime value, or product margin that varies by SKU — which is most businesses.",
      "This piece makes the case for moving off ROAS as your primary lens and onto new-customer contribution margin and CAC payback windows. The change is not cosmetic. In our experience, clients who make this reporting switch typically reallocate budgets within 30 days and see bottom-line profitability improve within a quarter, sometimes without changing tactics at all.",
    ],
    sections: [
      {
        h2: "What ROAS quietly hides",
        body: [
          "ROAS is revenue divided by ad spend. Simple, but every word hides a trap. 'Revenue' in ROAS calculations almost always means gross revenue, not net of returns, shipping, COGS, or discount codes. For a DTC brand running a 20% off code to acquire customers, a 3.5x ROAS is often a 1.2x gross-margin return — break-even at best. The founder reads 3.5x and thinks the campaign is printing money.",
          "The second trap: ROAS treats first-time and repeat purchases the same. A $100 order from a new customer is worth about $40 in contribution margin after COGS, shipping, payment processing, and the ad cost that acquired them. A $100 repeat purchase from an existing customer is worth closer to $70 because the acquisition cost was amortized long ago. Meta's in-platform ROAS mashes these together, overstating performance by 20–40% depending on repeat rate.",
          "The third trap: attribution windows. Meta's default 7-day-click, 1-day-view window credits the platform for conversions a lot of which would have happened anyway. Google's last-click model does the same. A 5x reported ROAS can be a 2.5x true incremental ROAS after adjusting for baseline organic demand. Optimizing hard for a number that overstates reality by 2x is how companies spend themselves into unprofitability while their dashboard still looks healthy.",
        ],
      },
      {
        h2: "The metric we actually watch — new-customer contribution margin",
        body: [
          "New-customer contribution margin is revenue from first-time buyers minus COGS, minus shipping and processing, minus ad cost. If it's positive on day zero, you have a profitable acquisition engine that doesn't require LTV assumptions to work. If it's negative, you're betting the company on future repeat purchases — which requires honest retention data you probably don't have yet.",
          "The math is straightforward. For a DTC brand with 35% gross margin, a $50 first-order AOV, and a $20 blended CAC, new-customer contribution margin is $50 × 0.35 − $20 = −$2.50 per new customer. Break-even requires either a higher first-order AOV (upsells at checkout), lower CAC (better creative or channel mix), or real LTV from repeat purchases. The negative number doesn't mean the business is broken — it means you need to clearly see what has to be true for it to become profitable.",
          "For SaaS, the equivalent is customer lifetime contribution margin minus CAC divided by CAC. Anything under 3x long-term is marginal. Anything under 1x is a company that won't survive.",
        ],
      },
      {
        h2: "Payback windows that hold up across cycles",
        body: [
          "The CAC payback window is the number of months it takes for a newly acquired customer's contribution margin to equal the cost of acquiring them. It's the single most important health metric for a paid acquisition engine because it determines how long your capital is tied up before you can redeploy it.",
          "Reasonable benchmarks by category: under 3 months for DTC with strong recurring purchase (beauty, supplements, consumables). Under 6 months for DTC with moderate repeat (apparel, home goods). Under 12 months for SaaS with healthy expansion revenue. Under 18 months for complex B2B enterprise deals. Anything longer is a high-risk business model — you're betting the company on repeat behavior you can't validate fast enough, and capital markets won't forgive you if the model turns out to be wrong.",
        ],
      },
      {
        h2: "The reporting change that drives the behavior change",
        body: [
          "We stopped showing ROAS on monthly client decks about 18 months ago. What replaced it: new-customer payback curves by cohort, blended MER, contribution margin by channel, and an honest incrementality estimate once per quarter. The effect was immediate — clients started asking better questions. Instead of 'why is Meta ROAS down this month,' they'd ask 'why did cohort payback extend from 4.2 to 5.1 months, and which channels contributed to that.'",
          "Better questions lead to better decisions. One DTC client cut Meta spend 30% and reinvested it in email and SMS based on the new reporting, which shortened payback by almost two months and lifted overall profitability 15% within a quarter. Same team, same product, same budget — just a better metric.",
        ],
      },
    ],
    keyTakeaways: [
      "ROAS hides COGS, discounts, repeat-purchase blending, and attribution inflation. Reported ROAS typically overstates reality by 20–40%.",
      "Track new-customer contribution margin instead — revenue minus COGS minus ad cost. Positive = profitable engine.",
      "Target payback windows: DTC under 3–6 months, SaaS under 12, B2B under 18. Longer is a high-risk model.",
      "Changing the report changes the questions. Questions change decisions. Decisions change profitability.",
    ],
  },
  {
    cat: "paid-marketing",
    title: "Google Performance Max: When to Use It and When to Avoid It",
    excerpt:
      "PMax is polarizing for a reason. Here's our framework for deciding when it's the right channel and when it quietly cannibalizes your other campaigns.",
    sections: [
      { h2: "When PMax wins", body: "Ecommerce with clean product feeds, 50+ conversions/week, and a strong brand search stream. PMax finds demand you weren't reaching with manual campaigns." },
      { h2: "When PMax is a trap", body: "Lead gen without lead scoring, service businesses without location feeds, or accounts with fewer than 50 conversions/week. You'll burn budget on low-intent placements." },
      { h2: "Mitigating cannibalization", body: "Always exclude branded search via negative keywords. Use asset groups to direct PMax at specific intent. Report non-branded and branded separately." },
      { h2: "Our PMax audit checklist", body: "Clean feed, conversion value by product category, brand-search exclusion, asset group structure, and weekly creative refreshes. Miss any and results collapse." },
    ],
  },
  {
    cat: "paid-marketing",
    title: "LinkedIn Ads Are Expensive. Here's How to Make Them Worth It.",
    excerpt:
      "LinkedIn is the most expensive B2B channel for a reason. Get the structure right and it pays back faster than anything else.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "LinkedIn Ads are the most expensive B2B acquisition channel on a per-click basis, often $15–$30 CPC even in efficient accounts. That price tag scares most marketers off, which is exactly why LinkedIn works: your competitors are rate-limited by the CPC, which means when you get the structure right, you face less competitive pressure than anywhere else in B2B marketing.",
      "We run LinkedIn programs for B2B SaaS and services clients with ACVs ranging from $25K to $500K+. The ones where it works pay back faster than any other channel. The ones where it doesn't are almost always misconfigured in one of four specific ways, covered below.",
    ],
    sections: [
      {
        h2: "The CPL trap — why cheap leads signal bad leads on LinkedIn",
        body: [
          "Most B2B marketers optimize LinkedIn campaigns for cost per lead. This is backwards for the channel. LinkedIn's algorithm can absolutely find you cheap leads — but the cheap leads on LinkedIn are almost always lower-seniority people answering because they're curious, not because they're evaluating purchase decisions. You end up with a pipeline full of entry-level marketers from companies you'd never actually sell to.",
          "The metric that matters is cost per SQL (sales-qualified lead). It's harder to instrument, because it requires tight integration between your ad platform and CRM, and it takes 30–60 days to get statistical signal. But the delta between optimizing for CPL and CPSQL is enormous. Clients who switch report 3–5x improvements in pipeline quality within a quarter without increasing spend.",
          "The operational shift: feed conversion events from your CRM back into LinkedIn via the Conversions API or offline conversions upload. Tell LinkedIn's algorithm which leads actually qualified. Within a few weeks, the algorithm learns to find more of those people and fewer of the curious-but-unqualified ones. This is the single highest-ROI change most B2B LinkedIn advertisers aren't making.",
        ],
      },
      {
        h2: "What we actually run — formats, ranked by ROI",
        body: [
          "Single image ads driving to gated high-value assets (industry reports, benchmark data, frameworks) are our default. They consistently produce the best cost-per-SQL because the asset pre-qualifies the audience. A finance director downloading a report on CFO-level benchmarking is demonstrably in your ICP in a way a marketing manager liking a brand post isn't.",
          "Document ads (also called native LinkedIn document slideshows) work exceptionally well for proof-heavy content: case studies, methodology explainers, and teaser chapters of larger reports. They keep the reader on LinkedIn, which reduces drop-off, and they generate higher save rates than external-link ads. For ICPs that research heavily before converting, document ads are a sleeper format.",
          "Conversation ads (LinkedIn's messaging ad product) are underrated for high-intent outbound at specific accounts. We use them for named-account campaigns where we've identified 50–200 target accounts and want to open direct conversations. CPM is high but the reply rate on a well-written conversation ad to a cold account beats cold email by 2–4x.",
          "What we avoid: video ads (disproportionately more expensive without commensurate improvement in signal quality), carousel ads (LinkedIn users rarely swipe past the first card), and event promotion (the channel has a lot of paid options that underperform because the organic reach on event posts is strong).",
        ],
      },
      {
        h2: "Matched audiences are the secret weapon",
        body: [
          "LinkedIn's targeting strength isn't interests or job functions — those are too broad. The strength is matched audiences: upload a list of target companies or specific people and run campaigns against exactly that list. For ABM programs, this is the thing that makes LinkedIn cost-effective despite the high CPC.",
          "Our workflow: build a target account list of 500–2,000 companies in the client's ICP using Clay, Apollo, or ZoomInfo enrichment. Upload the company list to LinkedIn matched audiences. Layer a seniority filter (typically director and above for $50K+ ACV, VP and above for $250K+). Run campaigns exclusively against that intersection. The match rate is usually 30–60% of the uploaded list; even at the low end, you've narrowed your audience to your exact ICP with enough volume to generate signal.",
          "For account-specific personalization, go further: use Clay to enrich each target company with their latest funding round, hiring signals, or product launches. Build 3–5 audience segments based on those signals and run different creative for each (e.g., 'post-Series-B' audience sees a scaling-focused message; 'hiring sales leaders' audience sees a message about enabling new hires). CPL rises slightly; CPSQL drops substantially because each segment sees a relevant message.",
        ],
      },
      {
        h2: "Pairing LinkedIn ads with SDR outbound compounds both",
        body: [
          "The highest-ROI LinkedIn structure we run isn't LinkedIn alone — it's LinkedIn ads as air cover for SDR outbound. When an SDR email lands on an account that's already seen the LinkedIn ad 3+ times, reply rates approximately double compared to cold accounts who haven't seen the ads. This is measurable: we track it by cross-referencing the ad-exposure audience with the SDR's outbound CRM records.",
          "The operational pattern: run always-on LinkedIn ads against the SDR's target account list. When the SDR sequences an account, the prospect has already seen the brand a few times. The email doesn't need to introduce who you are — it can go straight to the relevant hook. This is what 'account-based marketing' actually means in practice, stripped of the ABM vendor jargon.",
          "Budget guideline: plan for LinkedIn ad spend roughly equal to 15–25% of SDR team cost. Below that ratio, the ads don't show up often enough to generate brand familiarity. Above it, diminishing returns kick in. The sweet spot produces compounding effects across both channels that neither produces alone.",
        ],
      },
    ],
    keyTakeaways: [
      "Stop optimizing for CPL on LinkedIn. Cheap leads are low-intent. Optimize for cost per SQL instead — it takes 30–60 days but changes the economics completely.",
      "Default formats: single image ads for gated assets, document ads for proof content, conversation ads for high-intent outbound. Avoid video and carousel.",
      "Matched audiences are the channel's strength. Upload target account lists from Clay or Apollo and run tight campaigns against them.",
      "Pair LinkedIn ads with SDR outbound. Prospects who've seen the ad 3+ times reply at 2x rates. Budget LinkedIn ads at 15–25% of SDR team cost.",
    ],
  },
  {
    cat: "paid-marketing",
    title: "TikTok Ads for B2B: Is It Worth It Yet?",
    excerpt:
      "A pragmatic assessment of TikTok for B2B — what works, what doesn't, and the niche it actually excels at.",
    sections: [
      { h2: "The B2B counterexample", body: "B2B founders under 40 are on TikTok. Procurement managers over 55 are not. Match your category and persona before assuming the platform is a miss." },
      { h2: "Formats that convert", body: "Founder-led explainers, short product walkthroughs, and POV-style case studies. Corporate announcements don't get a second of attention." },
      { h2: "Tracking is still rough", body: "iOS measurement is lossy. Lean on post-click landing page events, UTM tags, and 'How did you hear about us?' on demo forms." },
      { h2: "When to revisit", body: "If you've tried and it didn't work in 2024, TikTok's B2B ad product has matured. Revisit every 6 months — the creative cost is low, the upside is real." },
    ],
  },

  // Social Media — 5
  {
    cat: "social-media",
    title: "The Content Pillar System We Use to Stop the Weekly Panic Posting",
    excerpt:
      "Four pillars, six formats, one rule: every post maps to a pillar AND a format. If it doesn't, it doesn't ship.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Every week, somewhere in a small marketing team, someone opens Slack on Monday morning and asks: what are we posting this week? Four people brainstorm for 45 minutes, produce ideas nobody loves, schedule posts nobody remembers by Friday, and the same meeting happens the next Monday. This is weekly panic posting, and it's the default state of most social media operations — including a surprising number of well-resourced brands.",
      "The fix is structural, not tactical. A content pillar system removes the weekly creative burden by predefining the categories your content has to fit, and forcing every idea through a check before it reaches the calendar. We use this system across every social client engagement. It's the single biggest operational change we make in the first 30 days of working together.",
    ],
    sections: [
      {
        h2: "Why random posting builds nothing",
        body: [
          "Without pillars, every post is a one-off. The brand publishes a founder story Monday, a product feature Tuesday, a meme Wednesday, an announcement Thursday. The audience can't predict what they'll see, so they don't build a mental model of what the brand is about. The algorithm can't figure out who should see the content, so distribution is random. Each post has to earn its audience from scratch.",
          "Brands that compound on social media do the opposite. They pick a narrow set of things they consistently talk about, and over 6–12 months, the audience learns to expect that set of things. Duolingo does jokes about learning languages. Notion does workflow demos. Every brand that goes from small-to-medium to medium-to-large on social follows this pattern: commit to a small territory, defend it, compound.",
        ],
      },
      {
        h2: "Picking your four content pillars",
        body: [
          "Four pillars is the magic number. Three feels repetitive within a month; five feels unfocused. The four that fit nearly every B2B and DTC brand we've worked with: education, proof, personality, and point-of-view.",
          "Education: how-to content that makes your audience better at their craft. For a fintech brand, this could be explainers on tax strategy, investment frameworks, or market analysis. For a DTC skincare brand, it's ingredient deep-dives and routine tutorials. The test: a competitor couldn't publish your educational content unchanged, because it's rooted in what your specific team knows.",
          "Proof: evidence that your product or methodology works. Case studies, customer success stories, before-and-after comparisons, data excerpts. Proof content is what closes the audience members who've been lurking for six months and are finally ready to buy.",
          "Personality: the human layer. Behind-the-scenes, team moments, founder perspectives, product design decisions explained casually. Personality content is what makes the brand feel like a group of people, not a logo.",
          "Point-of-view: opinions your industry doesn't universally agree with. This is the pillar most brands underweight because it's scary — having a clear take can alienate people — but it's also the pillar that drives the strongest audience growth. The brands with loud social presences have loud opinions.",
        ],
      },
      {
        h2: "The six formats that fit every platform",
        body: [
          "Every piece of content fits one of six formats: tutorial (here's how to do something), listicle (here are N things about a topic), before-and-after (here's what changed), myth-busting (here's what most people get wrong), founder story (here's what I learned from doing this), behind-the-scenes (here's how we operate).",
          "Multiplying four pillars by six formats produces 24 conceptual content slots. That's two per week for a year without repeating a slot. In practice, you'll lean on some combinations more than others — myth-busting pairs naturally with point-of-view, founder story with personality — and that's fine. The point isn't to force variety; it's to give the team a decision framework so planning sessions become 'which slot this week' instead of 'what should we post.'",
        ],
      },
      {
        h2: "The enforcement rule that makes the whole system work",
        body: [
          "Every post has to name its pillar and its format before it goes in the calendar. Written in the calendar card. Visible to the whole team. If a post can't be tagged, it doesn't ship. This rule is trivial to describe and extremely hard to enforce because brands love to make exceptions — someone has a good idea that doesn't fit any pillar, and the team rationalizes shipping it.",
          "The discipline pays back within a quarter. You stop producing forgettable one-offs. Your audience starts recognizing the brand's territory. The algorithm starts showing content to the right people because the signals are consistent. Your designer, writer, and social manager all work from the same vocabulary, which cuts creative debate in half.",
          "We've seen brands double their engagement rate in 90 days without changing anything else — no new content, no new budget, just enforcing pillar-and-format discipline on existing content plans. The system is worth more than the fanciest strategy deck because the strategy deck doesn't survive contact with Monday morning, and this system does.",
        ],
      },
    ],
    keyTakeaways: [
      "Pick four pillars — education, proof, personality, point-of-view. Every brand we've worked with fits this shape.",
      "Use six formats: tutorial, listicle, before-and-after, myth-busting, founder story, behind-the-scenes. 4×6 = 24 content slots per brand.",
      "Enforce the rule: every post must name its pillar and format in the calendar. No exceptions, or the system collapses.",
      "Brands that commit double their engagement rate within a quarter without changing content quality — just by adding structure.",
    ],
  },
  {
    cat: "social-media",
    title: "How We Ghost-Produce Founder-Led Content Without Losing the Voice",
    excerpt:
      "A repeatable system for turning 30 minutes of founder interview per month into a steady stream of founder-voice content.",
    sections: [
      { h2: "The interview setup", body: "30 minutes, four questions, recorded on Zoom. Questions focus on current business decisions, customer patterns, contrarian takes, and behind-the-scenes reality. No 'what's your brand story' cliches." },
      { h2: "Extraction method", body: "A writer turns the transcript into 12–20 raw content hooks. Each hook is a single sentence the founder would actually say. No hooks that sound like agency copy." },
      { h2: "Founder review loop", body: "Founder approves hooks with one click — yes, no, or 'rewrite'. Writer then develops approved hooks into posts. Founder never has to write from scratch, just react." },
      { h2: "Keeping the voice", body: "Build a voice doc: 5 sentences the founder says all the time, 5 they'd never say. Writer checks every draft against it. Voice drifts slowly — the doc catches it before readers do." },
    ],
  },
  {
    cat: "social-media",
    title: "Why We Stopped Chasing Follower Count (And What We Track Instead)",
    excerpt:
      "Follower count is a meaningless goal. The metrics that actually indicate social health are less obvious but far more actionable.",
    sections: [
      { h2: "What follower count hides", body: "You can grow followers with giveaways, bot farms, and rented content. None of it turns into customers. Followers are the vanity metric of vanity metrics." },
      { h2: "The four metrics we track", body: "Saves per post, DM conversations started, branded search lift, and landing page traffic from social. These tie cleanly to revenue." },
      { h2: "Why saves matter most", body: "A save means the content is useful enough someone wants to revisit it. Algorithms weight saves heavily. Content that earns saves compounds — content that earns likes doesn't." },
      { h2: "Reporting conversation", body: "Once a quarter, we share saves/DMs with clients. That conversation leads to the real strategic shifts — not the Monday-morning follower report." },
    ],
  },
  {
    cat: "social-media",
    title: "LinkedIn Thought Leadership: The Honest Playbook",
    excerpt:
      "What actually works for LinkedIn thought-leadership content in 2026, stripped of the 'post at 9am' clichés.",
    sections: [
      { h2: "The wrong advice you'll hear", body: "Post at 9am Tuesday, use lots of emojis, always ask a question at the end, never link out. This is the advice optimized for 2021, not 2026. LinkedIn has moved." },
      { h2: "The honest advice", body: "Post when you actually have something to say. Write for the specific reader who can hire you or buy from you. Don't chase engagement — chase the right 50 pairs of eyes." },
      { h2: "Three post formats that work", body: "Specific, contrarian take (with receipts). Detailed behind-the-scenes breakdown. Vulnerable story about a real business moment. All three go long — 250+ words." },
      { h2: "The long game", body: "Expect 6–12 months before compound interest kicks in. The early months are planting. Founders who keep at it past month six are the ones who eventually get inbound deals from a single post." },
    ],
  },
  {
    cat: "social-media",
    title: "The Creator Brief Template We Send Every Influencer",
    excerpt:
      "The exact brief format that turns a one-shot influencer post into reusable, high-performing content.",
    sections: [
      { h2: "What most briefs get wrong", body: "They either over-direct (kills authenticity) or under-direct (nobody knows what they're making). The brief needs to be a fence, not a cage." },
      { h2: "The 5-section brief", body: "Context, goal, mandatory elements, freedom zone, usage rights. Each section gets at most three sentences. If you can't say it in three, you don't know what you want." },
      { h2: "Usage rights from day one", body: "We negotiate 12-month paid usage for every deal. The creator's post is only 30% of the value — the reusable ad creative is the other 70%." },
      { h2: "The whitelisting add-on", body: "Whitelisted spark ads from creators routinely outperform studio creative 2-5x. Build this into every contract by default." },
    ],
  },

  // Content Marketing — 5
  {
    cat: "content-marketing",
    title: "The Brief-to-Draft Ratio That Separates Good Content Ops from Bad",
    excerpt:
      "If your content briefs are shorter than your drafts, you're not briefing. Here's the bar we hold ourselves to.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Most content operations run on underwritten briefs and overwritten drafts. A Google Doc with the target keyword, a vague audience description, three bullet points of 'what to cover,' and an unrealistic deadline gets sent to a writer who produces a draft that mostly misses. An editor rewrites 40% of it. The client asks for revisions. Two weeks later a piece ships that nobody is proud of.",
      "The fix isn't hiring better writers. It's writing better briefs. This piece covers the brief quality bar we hold at It's Not Techy across every client engagement, and why front-loading brief work is the single highest-leverage change most content teams can make.",
    ],
    sections: [
      {
        h2: "The brief is the work — not the prelude to the work",
        body: [
          "A great brief makes the first draft 80% right on arrival. A bad brief forces writers to guess about audience, scope, and structure, which leads editors to rewrite, which leads clients to revise, which leads to drafts that drift further from the original intent with each round. The cumulative cost is massive: we've measured it across dozens of engagements, and a well-briefed piece costs roughly 40% of the total hours a poorly-briefed piece of equivalent quality consumes.",
          "The mental reframe that helps: the brief is the work. It's where you decide who the reader is, what question you're answering, what sources you're pulling from, what the opening paragraph should accomplish, and what a successful outcome looks like. If those decisions aren't made in the brief, they get made reactively during drafting — badly, and with less context than the brief stage offers.",
        ],
      },
      {
        h2: "What a real content brief contains",
        body: [
          "Our brief template has eight required fields. One: the target reader in one sentence, specific enough to exclude people ('mid-market ecommerce marketing directors evaluating agency partnerships' not 'marketers'). Two: the one question the piece answers — articulated in the reader's voice, not ours. Three: the three proof points the piece must include — specific claims, data, or examples that give the piece credibility. Four: the format structure — headline working hypothesis, H2 outline, approximate word count per section.",
          "Five: internal link targets, chosen from the site's existing content, with anchor text suggestions. Six: external link targets for credibility, usually 2–4 authoritative sources. Seven: the SME (subject-matter expert) to interview, with pre-written interview questions. Eight: the piece's success metric — what would tell us six months from now that this piece worked (organic traffic threshold, backlinks, sales-cycle references, etc.). Without all eight, we don't ship the brief to a writer.",
        ],
      },
      {
        h2: "The 20-minute SME interview that separates our content from everyone else's",
        body: [
          "Before any piece on a specialty topic, we interview a subject-matter expert for 20–45 minutes. The interview is the raw material. Without it, you're producing paraphrased summaries of other people's content — which is what 90% of the content on the internet already is, and which has no chance of earning AI citations or durable rankings.",
          "The interview format we use: recorded on Riverside for quality, seven prepared questions, permission to follow threads. Questions aren't 'what is X' — they're 'what's the most common mistake you see teams make with X,' 'what did you used to believe about X that you've changed your mind on,' 'what's a specific case where the textbook answer was wrong.' These questions surface pattern-matching that's never been written down. That's the moat.",
          "The transcript becomes the source document. The writer's job is to structure and tighten the SME's thinking, not to generate new claims. Every paragraph should pass a 'would the SME actually say this' test. If not, cut it or rewrite from the transcript.",
        ],
      },
      {
        h2: "The time budgets that reveal whether you're briefing well",
        body: [
          "Our standard time budget for a 1,500-word piece: 2 hours brief, 45 minutes SME interview, 4 hours draft, 1 hour edit, 30 minutes final review. Total: about 8 hours of skilled time. If your equivalent piece takes 15+ hours end to end, the leakage is almost always in drafting (too much guessing) and editing (too much rewriting) — both symptoms of a thin brief.",
          "The diagnostic question: in your current workflow, how often does the first draft require structural rewriting (not just line edits)? If more than 30% of drafts do, your brief quality is the bottleneck, not your writer's skill. Most teams keep hiring better writers trying to solve a briefing problem. It doesn't work.",
        ],
      },
    ],
    keyTakeaways: [
      "A thin brief costs more than it saves. Well-briefed pieces ship in 40% of the hours a poorly-briefed equivalent takes.",
      "Every brief needs eight components: reader, question, proof points, structure, links, SME, and success metric.",
      "Interview subject-matter experts before writing. The transcript is the moat — without it you're paraphrasing other people's content.",
      "If first drafts regularly need structural rewrites, the problem is briefing, not writing. Hiring better writers won't fix it.",
    ],
  },
  {
    cat: "content-marketing",
    title: "Why We Stopped Publishing Thought Leadership and Started Publishing Arguments",
    excerpt:
      "Most thought leadership is empty. Here's the difference between writing for clicks and writing to change minds.",
    sections: [
      { h2: "The thought-leadership scam", body: "Phrases like 'the future of X' and '10 predictions for Y' produce endless content that says nothing. It's algorithmic mush — written to exist, not to argue." },
      { h2: "What an argument looks like", body: "A claim most of your category disagrees with, stated plainly, with evidence. It can be wrong! That's why it's an argument. Something readers can agree or disagree with — not floss past." },
      { h2: "The argument test", body: "If the opposite of your article would be ridiculous, you haven't written an argument. 'Marketing is important' — who says otherwise? 'Most CMOs should not be running brand campaigns' — now we have something." },
      { h2: "The business outcome", body: "Arguments get shared, quoted, and debated. They create inbound. Empty thought leadership creates nothing." },
    ],
  },
  {
    cat: "content-marketing",
    title: "The Interview-Driven Content Model We Use to Scale Without Ghostwriters",
    excerpt:
      "How to produce 4–6 deeply-researched pieces a month by interviewing domain experts and turning transcripts into articles.",
    sections: [
      { h2: "Why this beats ghostwriting", body: "Ghostwriters paraphrase existing content. Interview-driven content surfaces knowledge that isn't published anywhere else. The moat is the interview." },
      { h2: "Finding interviewees", body: "Start internal. Your company's senior people have decades of pattern-matching that's never been written down. That's your first 20 pieces of differentiated content." },
      { h2: "The interview format", body: "45 minutes, Riverside-quality recording, 7 questions prepared. Stay curious — follow interesting threads over the script. The best insights come from the follow-up question." },
      { h2: "Editor, not author", body: "The editor's job is to make the interviewee sound smart and readable, not to insert their own voice. Every paragraph should pass a 'would they say this?' test." },
    ],
  },
  {
    cat: "content-marketing",
    title: "The Content Refresh Routine We Run Every Quarter",
    excerpt:
      "How we keep 200+ pieces of evergreen content ranking by refreshing them on a schedule — not scrambling when traffic drops.",
    sections: [
      { h2: "Why refresh matters more than publishing", body: "Most teams publish new content indefinitely while their existing content slowly decays. Refreshing top-20 pages compounds more than publishing new ones." },
      { h2: "What we update in a refresh", body: "Headline (CTR test), intro (answer-first rewrite), year references, internal links, external links, meta description, and any outdated claims or screenshots." },
      { h2: "Scheduling the refresh", body: "Top 20 pages every quarter. Top 50 pages twice a year. Everything else when traffic drops 20% or a major platform change occurs." },
      { h2: "The lift we see", body: "Well-executed refreshes reliably produce 25–60% traffic lifts within 60 days. Compare that to a new article's expected 500 visitors after 6 months." },
    ],
  },
  {
    cat: "content-marketing",
    title: "Ghostwriting for Founders: The 20-Minute-a-Week Model",
    excerpt:
      "How we ghostwrite for busy founders using a 20-minute weekly async check-in — no drafts emailed back and forth.",
    sections: [
      { h2: "The trap to avoid", body: "Don't send a draft for founder review by email. They'll take a week to respond and rewrite 40% of it. You've just wasted everyone's time." },
      { h2: "The weekly async", body: "20-minute weekly Loom where the founder reacts to next week's hooks as a batch. Thumb-up, thumb-down, or rewrite. Decisions happen in minutes, not days." },
      { h2: "Voice doc maintenance", body: "After each Loom, the ghostwriter updates a running voice doc with new phrases, do-not-say words, and any POV shifts. The doc is the muscle memory of the engagement." },
      { h2: "Measuring whether it's working", body: "DM volume, inbound meeting requests, and 'saw your post about X' references in sales calls. If the ghostwriting is working, the pipeline starts mentioning it." },
    ],
  },

  // Web Design — 4
  {
    cat: "web-design",
    title: "Why We Build Every Marketing Site on Next.js — and When We Don't",
    excerpt:
      "The case for Next.js as a marketing site default in 2026, and the handful of scenarios where Webflow or Shopify still wins.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Our default stack for marketing sites in 2026 is Next.js 15 with the App Router, Tailwind, and MDX for blog content — deployed on Vercel or Cloudflare Pages. This isn't a fashion statement. It's the result of dozens of builds across clients ranging from seed-stage SaaS to enterprise brands, and it's the stack that consistently hits sub-1-second LCP with room to add rich interactions without falling apart.",
      "But Next.js isn't the right answer for every business. This piece walks through when we pick it, the specific cases where Webflow or Shopify wins, and the stack we actively migrate clients off of.",
    ],
    sections: [
      {
        h2: "What Next.js unlocks in 2026",
        body: [
          "The App Router, server components, and streaming rendering combine to produce something no other marketing stack can match: dynamic-feeling, fast pages without client-side JavaScript bloat. Server components render on the server or at build time and ship zero JS to the client for sections that don't need interactivity. Client components hydrate selectively. The payoff is Core Web Vitals scores that stay green as sites grow — a 300-page marketing site on Next.js can hit LCP under 1 second on every page, INP under 100ms, CLS under 0.05. Those numbers are basically unattainable on WordPress or most themed Shopify setups.",
          "The second unlock is the component model. Marketing, app, and commerce surfaces share a design system, which means a button change in one place updates everywhere. For growth-stage companies with overlapping marketing and product surfaces, this shortens design-to-ship cycles from weeks to days. For mature companies, it means the marketing team can ship new landing pages without engineering intervention because the component library is already proven.",
          "Third: edge rendering. Vercel and Cloudflare both support running rendering at CDN edge, which means the first byte of any page reaches a visitor in Delhi or Dubai or Dublin with roughly the same latency a North American user sees. For global brands — and every brand is global now — this is a 200–400ms speed advantage that compounds across every interaction.",
        ],
      },
      {
        h2: "When Webflow is the better call",
        body: [
          "Webflow is the right default for three specific situations. First: marketing teams with no dedicated engineering resource who need a visually ambitious site they can edit without filing tickets. Webflow's visual CMS is genuinely best-in-class; marketers can ship new pages and modules in a day without touching code. For brands where the marketing site is a business-critical surface that changes weekly, that velocity is worth the performance and flexibility ceiling Webflow imposes.",
          "Second: brand-forward sites where animation and visual design are the product. Webflow's interactions system, combined with its tight Figma integration, makes shipping genuinely striking design fast. The ceiling is lower than Next.js with Framer Motion, but for most brand marketing sites the ceiling is still well above what matters.",
          "Third: sites with lifespans under 24 months — campaign sites, event sites, launch sites. The Next.js setup cost doesn't amortize. Webflow is faster to ship and the performance penalty is temporary. When the site sunsets, so does the tradeoff.",
        ],
      },
      {
        h2: "When Shopify still wins for commerce",
        body: [
          "For DTC brands under roughly $30M revenue, we recommend Shopify (or Shopify Plus) for the storefront and use Next.js only for the marketing layer around it. The reason is pragmatic: Shopify's ecosystem of apps, its checkout conversion optimization, its built-in inventory and fulfillment integrations, and its built-in merchandising tools add up to six-to-twelve-figure advantages over a custom build. You can replicate those features on Next.js with headless Shopify, but the cost to build and maintain parity is usually higher than the revenue gain justifies until you're well into the eight-figure range.",
          "The tipping point we've seen: past about $30M in annual commerce revenue, or when the brand has customization needs Shopify can't support (advanced subscription logic, complex B2B ordering, multi-brand catalogs, novel checkout flows), headless with Next.js starts to pay off. Before that, stay on Shopify's native stack. The complexity discount is worth far more than engineering team credibility.",
        ],
      },
      {
        h2: "What to avoid — and why we migrate clients off of it",
        body: [
          "We do not build new WordPress sites in 2026, and we regularly migrate clients off WordPress to Next.js or Webflow. The reasons are not ideological; they're measurable. WordPress's plugin ecosystem is a maintenance tax — every plugin is a potential security vulnerability, a performance regression, and a future compatibility issue. Site security breaches on WordPress are dramatically more common than on Next.js or Webflow because the attack surface is enormous. Core Web Vitals scores are structurally worse because the stack wasn't designed around modern rendering.",
          "The common objection is 'we have content editors who know WordPress.' Fair, but content editing in a modern headless CMS (Sanity, Contentful, Payload) takes a half-day to learn and delivers real benefits the editors will feel within a week. Migration projects typically take 6–10 weeks for a mid-sized site, cost less than a year of plugin maintenance fees, and produce sites that run 2–4x faster with roughly zero ongoing security surface.",
          "The other stack we avoid for net-new marketing sites: drag-and-drop page builders glued onto themes (Elementor, Divi, anything that ends in 'Builder'). The performance and maintainability costs compound, and the design ceiling is miles below what a modern front-end stack can achieve.",
        ],
      },
    ],
    keyTakeaways: [
      "Next.js is our default in 2026 for sub-1s LCP, clean component reuse, and edge rendering benefits global brands feel immediately.",
      "Pick Webflow for marketing teams without engineering support, brand-forward design, or sites with under 24-month lifespans.",
      "Stay on native Shopify for DTC under roughly $30M revenue. Go headless with Next.js only when customization needs cross that threshold.",
      "Avoid new WordPress builds. The plugin tax, security surface, and performance ceiling aren't worth the apparent editing convenience.",
    ],
  },
  {
    cat: "web-design",
    title: "The Performance Budget We Set Before Designing a Single Pixel",
    excerpt:
      "Design decisions drive performance. Setting performance budgets up front prevents the painful rework cycle later.",
    sections: [
      { h2: "The four budgets we set", body: "JS bundle size, total page weight, image weight, and third-party script count. Each has a hard ceiling communicated to design before any Figma work begins." },
      { h2: "The design ceiling", body: "Max 3 custom fonts, max 2 hero videos per site, max 300KB hero image. Designers hit these caps early and make better choices within them." },
      { h2: "Enforcement", body: "Lighthouse CI on every PR. If the PR regresses a budget, the build fails. Nobody merges around it 'just this once'." },
      { h2: "Budgets aren't constraints", body: "They're the thing that lets you add animation, good imagery, and interactive widgets where it matters. Without budgets, every page becomes a dumping ground." },
    ],
  },
  {
    cat: "web-design",
    title: "The Redesign Mistake That Costs Clients 40% of Traffic",
    excerpt:
      "Most agency redesigns destroy SEO. Here's the handover process we use to redesign sites without losing a single organic session.",
    sections: [
      { h2: "Why redesigns tank traffic", body: "Teams change URL structures, delete pages, mis-handle redirects, and forget metadata. Three weeks post-launch, organic has cratered and nobody knows why." },
      { h2: "The redirect map", body: "Before we launch, every old URL maps to a new one via a 301. No 404s. No chains longer than one hop. We audit with Screaming Frog before and after launch." },
      { h2: "Preserving metadata", body: "Title tags, meta descriptions, and structured data carry over. If we're changing them, we change them intentionally — not as a side effect of the redesign." },
      { h2: "The 30-day monitor", body: "Post-launch we monitor GSC daily for two weeks, then weekly. Any coverage drop gets root-caused within 24 hours. This is what separates a clean launch from a disaster." },
    ],
  },
  {
    cat: "web-design",
    title: "The One-Page-Per-Intent Principle We Use to Structure Marketing Sites",
    excerpt:
      "Why we resist the urge to consolidate pages — and the simple principle that keeps information architecture clean.",
    sections: [
      { h2: "The consolidation trap", body: "'Let's combine these pages' sounds efficient but usually makes each one worse. One page can rank for one primary intent. Combine intents, lose rankings." },
      { h2: "The principle", body: "One page per search intent, per buyer stage, per persona. If you can't name the page's intent in five words, split it." },
      { h2: "The sitemap as a sanity check", body: "A good sitemap reads like a table of contents, not a feature list. If pages need pages explaining what they're for, the IA is wrong." },
      { h2: "When consolidation is right", body: "Pages with overlapping keywords that cannibalize each other's rankings. Use Search Console's performance report to identify cannibalization — then merge intentionally." },
    ],
  },

  // Video Production — 4
  {
    cat: "video-production",
    title: "The Hook-Based Scripting Framework We Use for Every Short-Form Video",
    excerpt:
      "Why the first 1.5 seconds decides the fate of your video — and the hook template we've tested across 400+ scripts.",
    sections: [
      { h2: "The 1.5-second rule", body: "If the viewer doesn't know why to keep watching by second 1.5, they scroll. Every frame before that window has to do work — visual, audio, and textual." },
      { h2: "Five hook archetypes", body: "The contrarian ('Most teams do X. They're wrong.'), the curiosity gap ('You'll never guess what happened when…'), the before/after ('This used to be ugly. Now look.'), the number ('I tested 14 tools. Only 2 worked.'), and the founder confession ('We almost killed our business with this.')." },
      { h2: "The mid-roll retention fix", body: "Every 3-4 seconds needs a visual or energy shift. Zoom in, cut to a new scene, change the speaker, or insert a caption reveal. Retention curves tank on static content." },
      { h2: "CTAs that don't kill retention", body: "Never 'Follow for more' at the end. Instead, layer the CTA into the value delivery — 'If you want the template, I'll put it in the bio.' Retention stays up, conversion stays up." },
    ],
  },
  {
    cat: "video-production",
    title: "iPhone vs. Studio: When Phone-Shot Video Outperforms Cinematic",
    excerpt:
      "A real breakdown of when iPhone-shot footage wins, when studio footage is worth the money, and how to mix them in one campaign.",
    sections: [
      { h2: "iPhone wins when", body: "The content is personality-led, feels native to the platform, and the brand is small-to-mid. An iPhone signals authenticity; a camera rig signals 'this was expensive'." },
      { h2: "Studio wins when", body: "The brand needs to project craft (luxury, B2B enterprise), the product needs precise lighting, or the CEO needs to look like a Fortune 500 CEO. Don't iPhone-shoot a S&P 500 earnings video." },
      { h2: "The blended model", body: "We produce studio-grade hero assets and iPhone-grade supporting content for the same campaign. Social gets the raw stuff, landing pages get the polished stuff. Both work — for different jobs." },
      { h2: "Gear that matters", body: "For iPhone content: a cheap lav mic, a $30 tripod, and natural light. That's 90% of the quality. Don't overinvest until you're shooting 10+ videos a month." },
    ],
  },
  {
    cat: "video-production",
    title: "Motion Graphics That Earn Their Budget (And The Kind That Don't)",
    excerpt:
      "The category of motion work that reliably pays back — and the category that's pure vanity.",
    sections: [
      { h2: "The vanity category", body: "Brand intros, logo reveals, abstract animated sequences. Pretty, expensive, almost never measurable in any business metric." },
      { h2: "The payback category", body: "Animated explainers for complex products, illustrated data visualizations, and animated UGC overlays for paid social. All three produce measurable lift." },
      { h2: "Budgets that make sense", body: "30-second explainer: $3–8k. Data viz short: $1–3k. UGC overlay templates: $2–5k for a library. If a studio quotes $25k for a brand intro, walk away." },
      { h2: "How to direct motion", body: "Board every second in rough storyboard form before any animation begins. Every cut, every camera move, every text appearance. Revisions after animation starts cost 10x more than revisions at the board stage." },
    ],
  },
  {
    cat: "video-production",
    title: "The Video Library Every Brand Should Build in Year One",
    excerpt:
      "The foundational video assets we help every brand produce in their first 12 months — ranked by ROI.",
    sections: [
      { h2: "The foundational five", body: "30-second brand explainer, founder-led product demo, customer testimonial set, behind-the-scenes culture piece, and three answer-a-real-question educational shorts. That's the starter pack." },
      { h2: "Deployment map", body: "Brand explainer on homepage and paid ads. Demo on product pages. Testimonials on pricing and social proof sections. Behind-the-scenes on About and social. Educational across content marketing and YouTube." },
      { h2: "The reuse multiplier", body: "Every piece of video should be cut into at least 5 variants for different channels. Long YouTube, short TikTok, vertical Reel, square LinkedIn, and a landing-page loop." },
      { h2: "Year two additions", body: "Case study films (2-minute customer stories), category POV films (your brand's take on an industry trend), and event recaps. Don't build these until the foundational five are shipping and working." },
    ],
  },

  // Brand Design — 4
  {
    cat: "brand-design",
    title: "Why Most Rebrands Fail — and the One Question That Saves Them",
    excerpt:
      "Rebrands go sideways when they start with design. They go well when they start with a single, specific question.",
    sections: [
      { h2: "The question", body: "'What do we need customers to believe about us that they don't believe today?' Everything — positioning, identity, messaging — flows from the answer." },
      { h2: "The trap of 'refresh'", body: "Half of rebrands are actually refreshes with no business goal attached. New logo, new colors, same strategy. Wasteful. If the strategy hasn't changed, don't rebrand." },
      { h2: "When rebranding pays off", body: "When you're repositioning for a new category, entering a new price tier, or after an acquisition. Real business reasons, not 'our logo feels dated'." },
      { h2: "The rollout plan matters more than the mark", body: "A great logo with a bad rollout is worse than a mediocre logo with a great rollout. Budget 60% of the rebrand budget for the rollout, not the design." },
    ],
  },
  {
    cat: "brand-design",
    title: "Distinctive Brand Assets: The One Marketing Investment That Compounds Forever",
    excerpt:
      "Ehrenberg-Bass research shows distinctive assets are the single biggest driver of ad recall. Here's how to build them.",
    sections: [
      { h2: "What counts as distinctive", body: "A color, shape, character, sound, or phrase that only your brand uses, consistently, across every touchpoint, for years. Coca-Cola red. MailChimp's Freddy. Metallica's font." },
      { h2: "How to build one from scratch", body: "Pick one unusual element in your identity. Deploy it everywhere for 24+ months. Don't evolve it. Don't refresh it. Consistency is the moat." },
      { h2: "Why brands fail", body: "They change CMOs, and each new CMO wants their version. Distinctive assets die in that transition. Protect them like revenue." },
      { h2: "The measurement problem", body: "You can't measure distinctive asset value in a single quarter. You measure it in unprompted brand recall surveys across years. Plan for the long game." },
    ],
  },
  {
    cat: "brand-design",
    title: "The Brand Voice Doc That Actually Keeps Tone Consistent",
    excerpt:
      "Most brand voice docs are 40 pages of adjectives. Ours is two pages of examples — and it actually works.",
    sections: [
      { h2: "Why adjective-based voice docs fail", body: "'Friendly, professional, approachable' applies to 80% of brands. No writer reads it and knows what to do. Adjectives describe, they don't instruct." },
      { h2: "The example-based format", body: "Two columns: 'We write this way' and 'We don't write this way', with 20+ concrete sentence pairs. Any new writer can calibrate in 15 minutes." },
      { h2: "Living voice doc", body: "After every review, add the new corrections to the doc. The doc gets sharper over time. It's the most important doc in the marketing org after the brief." },
      { h2: "Distribution", body: "Link to the voice doc from every brief. Embed examples into the brief template. Never assume writers have it memorized — they don't." },
    ],
  },
  {
    cat: "brand-design",
    title: "Brand Systems for Small Teams: What to Build and What to Skip",
    excerpt:
      "A 10-person team doesn't need a 200-page brand book. Here's the minimum viable brand system that punches above its weight.",
    sections: [
      { h2: "Build first: the core five", body: "Logo suite (primary + monochrome), color system (primary + 2 neutrals), typography (one display + one body), social templates, deck template. That's 80% of the value." },
      { h2: "Build eventually: the expansion set", body: "Packaging (if physical), motion guidelines (if video-heavy), voice doc (when you hire your first writer), photography direction (when you start shooting)." },
      { h2: "Skip entirely (for now)", body: "Sonic branding, environmental graphics, merchandise systems, sub-brand architecture. Don't invest here until you're 50+ people or a B2C brand with real retail footprint." },
      { h2: "Hosting the system", body: "Notion or Figma, not a PDF. PDFs rot. Living docs stay current. The brand system should be as easy to update as a blog post." },
    ],
  },

  // Email & CRM — 4
  {
    cat: "email-crm",
    title: "The 6 Klaviyo Flows That Drive 90% of Lifecycle Revenue",
    excerpt:
      "If you're only going to build 6 flows, build these six. Everything else is noise until these are shipping.",
    sections: [
      { h2: "The six", body: "Welcome series (4–6 emails), browse abandonment, cart abandonment, post-purchase thank-you + education, winback (60-day dormant), and VIP segment." },
      { h2: "Order of construction", body: "Welcome first. It's your biggest revenue lever and the hardest to iterate post-launch. Then cart abandonment. Then the rest in whatever order fits your business." },
      { h2: "The subject line rule", body: "Personalization and specificity beat cleverness. 'Your cart is waiting, Sarah' outperforms 'Come back!' every single time. Boring wins in email." },
      { h2: "Measurement", body: "Revenue per recipient, not open rate. Opens are noise in the Apple Mail Privacy Protection era. RPR tells you whether the flow is earning its slot in your calendar." },
    ],
  },
  {
    cat: "email-crm",
    title: "SMS Marketing That Doesn't Get You Blocked",
    excerpt:
      "How to use SMS as a revenue channel without burning out your list — the cadence and content rules that keep opt-outs low.",
    sections: [
      { h2: "The cadence ceiling", body: "Maximum 4 SMS per month to the main list. Beyond that, opt-outs spike and it costs more than it earns. VIP segments can handle 6–8, but only because they self-selected in." },
      { h2: "Content that works", body: "Short, conversational, and useful. 'Hey — flash sale, just 4 hours' works. '🎉 FLASH SALE!! SHOP NOW 🔥🔥🔥' doesn't. Consumers read SMS the way they read texts from friends." },
      { h2: "Opt-in structure", body: "Double opt-in at checkout, post-purchase confirmation, and clear unsub instructions in every message. Compliance isn't optional — TCPA lawsuits are real." },
      { h2: "SMS as a retention tool, not acquisition", body: "SMS works best for people who already know you. Trying to acquire via SMS is an uphill battle that rarely pays back." },
    ],
  },
  {
    cat: "email-crm",
    title: "The HubSpot Setup We Deploy for Every B2B Client",
    excerpt:
      "A repeatable HubSpot implementation blueprint — lifecycle stages, lead scoring, and the reports that actually guide decisions.",
    sections: [
      { h2: "Lifecycle stage definitions", body: "Every company uses these differently and it creates reporting chaos. Our defaults: Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Write the definition for each and protect it." },
      { h2: "Lead scoring that isn't fake", body: "Weight behavioral signals (pricing page visit, demo request, high-intent content consumed) higher than demographic ones. Most lead scores fail because they weight the easy-to-measure over the high-signal." },
      { h2: "Sales handoff hygiene", body: "SLA: SQLs must be contacted within 30 minutes during business hours. If sales misses, MQL goes back to marketing nurture. Measure and report this weekly or the handoff rots." },
      { h2: "Reports that matter", body: "Source-to-SQL conversion, MQL→SQL conversion by source, SQL→customer conversion by AE, and deal velocity. Four reports. Everything else is noise." },
    ],
  },
  {
    cat: "email-crm",
    title: "Deliverability Isn't Sexy, But It's Probably Why Your Emails Don't Convert",
    excerpt:
      "The unglamorous deliverability fixes that add 20–40% to open rates — before you touch subject lines or send times.",
    sections: [
      { h2: "SPF, DKIM, DMARC", body: "If you don't know whether you have all three set up, you don't. 30% of marketers miss this. Run through MXToolbox and fix in a day." },
      { h2: "Domain warming", body: "Never send a 500,000-email blast from a cold domain. Ramp up over 2–4 weeks. Mail providers flag big spikes as spammer behavior." },
      { h2: "List hygiene", body: "Remove hard bounces immediately. Sunset inactives after 90 days. Your deliverability reputation is only as good as your most-ignored segment." },
      { h2: "The re-engagement play", body: "Before sunsetting dormant contacts, send one last 'we're cleaning our list' email with a re-opt-in CTA. You'll save 15–25% of the list and clean the rest honestly." },
    ],
  },

  // Marketing Platforms — 3
  {
    cat: "marketing-platforms",
    title: "The MarTech Audit Template We Run Before Recommending a Single Tool",
    excerpt:
      "How to audit an existing martech stack so you know what to keep, kill, or consolidate — before anyone suggests a new tool.",
    sections: [
      { h2: "Step 1: inventory", body: "List every tool, monthly cost, renewal date, owner, and primary use case. Most teams are shocked by the total — $200k–$500k in shelfware is the norm." },
      { h2: "Step 2: usage audit", body: "Log into each tool. How many active users? When was the last meaningful action? If a tool has 2 logins this quarter, it's a candidate for kill." },
      { h2: "Step 3: overlap map", body: "Group tools by category. How many overlap? Most teams have 3 tools doing similar jobs because vendors upsold each department separately." },
      { h2: "Step 4: consolidation plan", body: "Kill duplicates. Consolidate where one tool can absorb another's function. The savings typically fund the net-new implementation work." },
    ],
  },
  {
    cat: "marketing-platforms",
    title: "HubSpot vs. Salesforce: A Brutally Honest Comparison",
    excerpt:
      "The real tradeoffs between HubSpot and Salesforce for growth-stage companies — not the vendor-neutral fluff.",
    sections: [
      { h2: "When HubSpot wins", body: "Teams under 200 people. Marketing-led growth motion. Moderate customization needs. Usable-in-a-week is a feature; Salesforce usually isn't." },
      { h2: "When Salesforce wins", body: "Complex sales process with 8+ stages. Multi-product catalogs with CPQ needs. 500+ people. Salesforce's flexibility pays for itself at scale, but kills you below it." },
      { h2: "What both get wrong", body: "Both pitch features you won't use. Ignore 80% of the vendor demo — focus on the 2-3 workflows your team runs daily. Buy for those, not for the shiny stuff." },
      { h2: "Migration cost", body: "Switching is expensive. Data migration, retraining, integration rework, and workflow rebuilding typically runs 3x the annual license cost. Pick right the first time." },
    ],
  },
  {
    cat: "marketing-platforms",
    title: "Server-Side Tracking: When It's Mandatory and When It's Overkill",
    excerpt:
      "Server-side tracking is expensive and complex. Here's when it's required vs. when client-side is good enough.",
    sections: [
      { h2: "Required when", body: "You spend $10k+/month on paid media. iOS 17 and cookie loss are costing you measurable conversion signal. You have the engineering resources to maintain it." },
      { h2: "Overkill when", body: "Ad spend under $5k/month, no heavy iOS conversion tracking dependency, and limited engineering resources. Client-side GTM is probably fine." },
      { h2: "Implementation partners", body: "Stape, the hosted server-side GTM option, is the 80/20 path. Self-hosted GCP container is a path for larger orgs. DIY is rarely the right answer." },
      { h2: "What it actually recovers", body: "15–40% of conversions that were being lost. If your conversion volume is low, 15% of little is still little. If it's large, the ROI is obvious." },
    ],
  },

  // AI Marketing — 4
  {
    cat: "ai-marketing",
    title: "The AI Workflows That Actually Save Marketers Time",
    excerpt:
      "A practical inventory of AI workflows we've deployed internally — ranked by hours saved per week.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Most AI marketing content is either hype ('AI will replace your whole team') or gimmick ('here are 10 ChatGPT prompts'). Neither is useful if you actually run a marketing operation. What we've learned across our own agency and dozens of client deployments is simpler: a small number of AI-assisted workflows produce genuinely large time savings, and a larger number produce work that looks fast but creates more editing cost than it saves.",
      "This piece is the honest inventory — the workflows we've deployed internally at It's Not Techy, ranked by hours saved per week, plus the workflows we tried and killed.",
    ],
    sections: [
      {
        h2: "AI-assisted content briefs — our highest-leverage workflow",
        body: [
          "A Claude-powered briefing agent that takes a URL and a target keyword and produces a full content brief, structured in our template format (reader, question, proof points, outline, internal link targets, SME interview questions). The agent uses the target URL to understand the company's voice and positioning, pulls current SERP data for the keyword, and outputs a brief that's roughly 80% ready for a human editor to finalize.",
          "Time saved: approximately 2 hours per brief over writing from scratch. Across an agency producing 20 briefs a week, that's 40 hours — an entire person-week reclaimed without adding headcount. The remaining 20% human time is doing the strategic parts AI can't do: deciding whether the brief's angle aligns with our overall content strategy for the client, adding nuance from SME interviews, and adjusting tone for the specific client relationship.",
          "Why it works: briefs are structured artifacts with consistent components. LLMs are excellent at structured artifact generation. Briefs don't need original voice or hot takes; they need thoroughness and internal consistency. That's exactly what LLMs deliver reliably.",
        ],
      },
      {
        h2: "Ad creative variations — 10x output without 10x cost",
        body: [
          "A GPT-style workflow with a few-shot library of the client's highest-performing historical ad copy generates 20 variations per request, each varying one variable at a time (hook, angle, CTA, or format). The designer or copywriter picks 4–6 to polish and run. This compresses what used to be a full afternoon of copywriting into about 30 minutes of prompting and refining.",
          "The critical detail that makes this work: the few-shot library has to be curated from winners, not just historical ads. Training a prompt on 20 mediocre ads produces 20 variations of mediocre. Training it on the 15 highest-ROAS ads over the last 12 months produces variations that keep the patterns the audience actually responds to while exploring new angles. The library becomes a compounding asset — the more historical winners you add, the better the output.",
          "What we explicitly do not do: let the LLM generate the final ad copy that ships. Every piece of ad copy gets human edit, not because LLMs can't write serviceable copy (they can), but because the marginal polish from an experienced copywriter is what turns a 2x ROAS ad into a 4x ROAS ad. The LLM does the 80%; the human does the 20% that matters most.",
        ],
      },
      {
        h2: "Weekly report summaries — the 4-hour-per-week win",
        body: [
          "A Python script pulls GA4, Search Console, and ad platform data weekly, runs it through a Claude API call with the client's historical baselines and KPI targets in context, and produces a one-paragraph executive summary plus a three-bullet 'what changed' section. Saves approximately 4 hours per account per week, scaled across the 30+ accounts we report on.",
          "The critical design decision: the LLM doesn't have access to 'think' about what the numbers mean beyond the summary statistics. It describes what changed; it doesn't diagnose causes or recommend actions. Causes and actions require context the LLM doesn't have (what's happening in the market, what the client's internal operations look like, what we tried last month). The senior strategist reads the summary and provides the strategic interpretation. This division of labor is durable because it respects what each party is actually good at.",
        ],
      },
      {
        h2: "The workflows we killed — AI does badly",
        body: [
          "AI-generated long-form articles. Even with extensive editing, the output reads flat. LLMs default to middle-of-the-distribution thinking, which is the opposite of what makes an article citable or rankable. We tried this for a year, measuring output against human-written content in the same categories, and AI-written pieces consistently underperformed on engagement, rankings, and citations. Content is the one place AI accelerates research but not writing. We still use it for outline generation, fact-checking, and paraphrase suggestions — but the draft itself is human work.",
          "Also: AI-generated cold emails. B2B prospects identify AI-written outreach within seconds and reply rates collapse. We use AI to personalize a research paragraph at the top of outbound emails (the LLM reads the prospect's LinkedIn and writes a one-sentence relevant opener) but the rest of the email is templated human writing. The reply rates on this hybrid approach are 3x higher than pure AI outreach and roughly on par with fully human outreach at a fraction of the time.",
          "Finally: AI-generated blog post images. They look generic, they trigger Google's AI image detection heuristics, and they add no signal. We use stock photography or custom design for anything that goes into a client's content library.",
        ],
      },
    ],
    keyTakeaways: [
      "The highest-leverage AI workflows are structured artifacts: content briefs, ad variations, report summaries.",
      "AI does the 80%. Humans do the 20% where craft and context matter. Skipping the human 20% tanks quality measurably.",
      "The few-shot library is the moat. AI trained on curated winners outputs better variations than AI trained on general data.",
      "Kill the workflows that produce work that looks fast but creates more edit cost than it saves: AI long-form articles, AI cold emails, AI blog post imagery.",
    ],
  },
  {
    cat: "ai-marketing",
    title: "LLM SEO: How to Rank in ChatGPT, Claude, and Perplexity Answers",
    excerpt:
      "The emerging practice of optimizing for LLM citations — what works, what's theory, and how we track it.",
    sections: [
      { h2: "The optimization stack", body: "Original data, named entities, clear formatting, and structured data. Classic SEO essentials — with an even heavier weight on explicit-answer structure." },
      { h2: "What seems to earn citations", body: "Primary research, original definitions, and comparison content. LLMs reach for these over commentary or opinion." },
      { h2: "Measurement is primitive", body: "There's no 'LLM Search Console' yet. Anecdotal tracking — search your brand in ChatGPT weekly, document what context comes up. Cohort it over time." },
      { h2: "Don't over-invest yet", body: "LLM search is still 1-2% of total search volume for most brands. Optimize at the margin; don't sacrifice traditional SEO to chase the new thing." },
    ],
  },
  {
    cat: "ai-marketing",
    title: "Custom GPTs for Marketing Teams: Three That Actually Earn Their Keep",
    excerpt:
      "Most custom GPTs are gimmicks. These three have real daily utility for the marketing teams we build them for.",
    sections: [
      { h2: "The brand voice GPT", body: "Trained on 50+ examples of the brand's best copy. Writers use it for first drafts, then edit. Cuts first-draft time in half and enforces voice consistency." },
      { h2: "The brief-to-draft GPT", body: "Input: content brief. Output: structured draft with H2s, paragraph outlines, and key points. Frees writers to focus on craft, not structure." },
      { h2: "The ad copy GPT", body: "Trained on the brand's winning ad library. Generates 20 copy variations in the brand's tone. Designers love it; paid teams love it more." },
      { h2: "What we don't build", body: "'General purpose' marketing GPTs. They produce mediocre output for any specific task. Specialized GPTs trained on the brand beat generic ones every time." },
    ],
  },
  {
    cat: "ai-marketing",
    title: "AI Governance for Marketing Teams: Lightweight Rules That Actually Get Followed",
    excerpt:
      "The one-page AI policy we deploy at every client — enough guardrails to be safe, light enough to get adopted.",
    sections: [
      { h2: "The four rules", body: "1) No customer data in public LLMs. 2) Human reviews every external-facing output. 3) Disclose AI involvement when asked. 4) Document your prompts for repeatability." },
      { h2: "Why one page beats 40 pages", body: "Longer policies get ignored. One-page policies get read, remembered, and followed. Write the policy for the busiest person on the team." },
      { h2: "Approved tools list", body: "Maintain a shortlist of 3–5 approved tools. Ban the rest. Governance fails when teams have 20 tools open and no one knows which is approved." },
      { h2: "Review cadence", body: "Quarterly review of the policy and tool list. AI changes too fast for annual. If the policy is stale, it stops being followed." },
    ],
  },

  // Ecommerce — 4
  {
    cat: "ecommerce",
    title: "The Shopify Theme Audit That Finds $50k+ in Hidden Conversion",
    excerpt:
      "A 20-point theme audit we run on every new Shopify engagement — pays for the audit itself inside the first month.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "Most Shopify stores are running themes that leave real money on the table. Not because the theme is bad — Dawn, Focal, Impulse, Prestige, Broadcast all have capable foundations — but because small misconfigurations compound into five-figure monthly conversion leakage. We've audited themes for dozens of DTC brands doing $2M to $100M in annual revenue, and the pattern is remarkably consistent.",
      "The audit below finds at least $50K of annualized conversion impact on the majority of stores we run it on. It takes about two days to execute and the fixes are typically ready to ship within a sprint.",
    ],
    sections: [
      {
        h2: "Speed first — LCP under 2 seconds on mobile",
        body: [
          "Every second of mobile load time costs approximately 5–10% of conversion on ecommerce sites. Most Shopify themes load at 3–5 seconds LCP on mid-tier mobile devices (which is what your customers actually use), which means the conversion rate you're seeing is 15–30% lower than it could be.",
          "The highest-ROI speed wins on Shopify are almost always: removing unused apps (each app typically adds 100–400ms of load time), compressing hero images to WebP with proper width-hint attributes, deferring non-critical JavaScript (review app widgets, chat bots, analytics tools beyond GA4), and using Shopify's native lazy-loading for below-the-fold content.",
          "Target LCP on mobile: under 2 seconds on the PDP (product detail page) and under 2.5 seconds on the homepage. Measure with PageSpeed Insights using the mobile field data, not the lab data. Lab scores on your M2 MacBook don't predict what a customer on a mid-tier Android in a spotty connection experiences.",
        ],
      },
      {
        h2: "Product detail page essentials most themes miss",
        body: [
          "The PDP is where 70–80% of ecommerce conversion happens, and yet most themes treat it as an afterthought inherited from the theme's original design. The non-negotiables: product images with smooth zoom functionality (not a modal), size guide accessible within one tap, reviews visible above the fold (not buried at the bottom), clear shipping info with estimated delivery dates, and a prominent add-to-cart CTA that's sticky on mobile.",
          "Additional PDP wins worth the implementation cost: variant images that swap when the customer selects a color or size, inventory urgency ('Only 3 left in this size') where genuinely true, reviews filtered by variant and sorted by helpful/recent (not a flat feed), FAQ or 'common questions' section below the fold to reduce support contacts, and payment options badge row (Shop Pay, Apple Pay, PayPal) near the buy button to reduce cognitive load at the decision moment.",
          "A specific test we run on every audit: does the PDP answer every question a first-time buyer would have, or does it force them to hunt elsewhere on the site? Hunting is friction, and friction is drop-off.",
        ],
      },
      {
        h2: "Checkout friction — the highest-leverage fix",
        body: [
          "Shopify's checkout is better than most custom carts, but stores consistently undermine it with configuration choices that add friction. Enable Shop Pay Express Checkout at the top of the cart page — studies from Shopify themselves show 1.72x conversion on Shop Pay checkouts vs. regular. Enable Apple Pay and Google Pay for mobile visitors.",
          "Never reveal shipping cost or tax in the last step of checkout. Show estimated totals on the PDP and in the cart. Customers hitting a surprise $15 shipping charge at checkout step 3 abandon at 30%+ rates. Transparency earlier in the funnel reduces that dramatically.",
          "Avoid forced account creation. Guest checkout should always be the default. Account creation can be offered post-purchase with a one-click option. Forcing accounts pre-purchase typically drops conversion 10–15%.",
        ],
      },
      {
        h2: "Cart drawer upsells — the AOV lever most stores ignore",
        body: [
          "The cart drawer (the slide-out sidebar that appears when a customer adds to cart) is prime real estate for bundle-style upsells. Not cross-sells that feel pushy, but complementary products at a bundle discount — 'Add [moisturizer] for 15% off this order.' Done well, this lifts AOV 8–15% with no lift in checkout friction.",
          "What works: one upsell offer at a time (not three competing options), genuine product complementarity (the algorithm should suggest products that actually go together based on purchase patterns), and a clear value framing ('bundle and save $8' rather than 'recommended for you'). Apps like Rebuy, Monk, or Shopify's native Bundle Builder all handle this well; the difference is in the configuration, not the tool.",
          "What doesn't work: pop-up modals that interrupt the checkout flow, countdown timers that create false urgency, and upsells that don't match the primary product category. All three feel slimy to shoppers and damage brand trust more than they lift AOV.",
        ],
      },
    ],
    keyTakeaways: [
      "Speed is the biggest single lever on Shopify. Target LCP under 2s on mobile field data; it's worth 5–15% conversion.",
      "The PDP is where conversion is won or lost. Every question a first-time buyer would have must be answered without them hunting.",
      "Checkout: enable Shop Pay, show shipping cost early, never force account creation pre-purchase.",
      "Cart drawer upsells done well (bundle framing, one offer, complementary products) lift AOV 8–15%. Most stores leave this on the table.",
    ],
  },
  {
    cat: "ecommerce",
    title: "AOV Levers That Actually Work in 2026",
    excerpt:
      "A pragmatic ranking of AOV-boosting tactics — what works for DTC brands doing $1M–$20M.",
    sections: [
      { h2: "The top three", body: "Bundle pricing (on the PDP, not just cart), progress bar to free shipping, and post-purchase upsells (thank-you page, not email)." },
      { h2: "The overrated", body: "Cross-sell widgets on every page. They clutter UI without moving AOV meaningfully. Focus upsells at the moment of purchase intent, not browsing." },
      { h2: "The underrated", body: "Subscription tiers with 'Subscribe & Save 15%' on high-repeat SKUs. Recurring revenue compounds; one-time AOV doesn't." },
      { h2: "The experiment queue", body: "Test AOV levers one at a time. Bundle pricing first. Then free shipping threshold. Then post-purchase. Stack wins sequentially." },
    ],
  },
  {
    cat: "ecommerce",
    title: "The DTC Attribution Setup We Run on Every Client Over $3M",
    excerpt:
      "The practical attribution stack that keeps paid, email, and organic honest — without buying enterprise tooling.",
    sections: [
      { h2: "The stack", body: "Triple Whale for blended dashboards. Klaviyo for email attribution. GA4 + server-side tracking for source truth. Post-purchase survey as the tiebreaker." },
      { h2: "Reconciling conflicting data", body: "Platforms always overclaim. Post-purchase surveys help reconcile. When Meta claims $30k and Triple Whale claims $18k, the survey tells you which half is real." },
      { h2: "MER as the north star", body: "Marketing Efficiency Ratio (total revenue / total spend) beats ROAS for decision-making. Platform ROAS is a scorecard; MER is the reality." },
      { h2: "When to upgrade", body: "Above $15M, consider Northbeam or Hyros. Below that, Triple Whale + surveys will get you 90% of the signal at 10% of the cost." },
    ],
  },
  {
    cat: "ecommerce",
    title: "Subscription Economics: When They Work and When They Kill Your Margin",
    excerpt:
      "A margin-first look at subscription DTC — the categories where it prints money and the ones where it ruins the P&L.",
    sections: [
      { h2: "Subscription-native categories", body: "Consumables (vitamins, pet food, cleaning). High-repurchase frequency and predictable consumption make subs a no-brainer." },
      { h2: "Forced subscription categories", body: "Apparel, one-time durables, gifting. Forcing a subscription model destroys both CAC payback and customer experience. Don't." },
      { h2: "Margin math", body: "Subscription discounts compress margin. Make sure your contribution margin stays above 30% after the sub discount. Run it monthly — shipping costs sneak up." },
      { h2: "Retention play", body: "The best subscription brands earn retention through the product experience, not just the subscription terms. If the only reason to stay subscribed is the cancel friction, churn will come." },
    ],
  },

  // B2B Growth — 4
  {
    cat: "b2b-growth",
    title: "ABM That Isn't Just Spray-and-Pray Outbound in a New Coat",
    excerpt:
      "Real account-based marketing: selection, orchestration, and measurement for programs that move pipeline, not impressions.",
    sections: [
      { h2: "Account selection discipline", body: "Start narrow — 50–150 accounts, not 5,000. Every account needs a clear reason it's on the list. If you can't articulate the reason, it shouldn't be." },
      { h2: "Channel orchestration", body: "LinkedIn ads, 1:1 email, personalized direct mail, and social engagement. Every account gets at least three touches across three channels before any demo ask." },
      { h2: "The SDR partnership", body: "Marketing warms accounts; SDRs close the loop. The handoff happens when the account has engaged 3+ times. Any earlier and SDR conversion tanks." },
      { h2: "Measurement that matters", body: "Account engagement score, pipeline sourced per account, and win rate on engaged vs. unengaged accounts. Not MQLs — too noisy for ABM." },
    ],
  },
  {
    cat: "b2b-growth",
    title: "The Demand Gen Funnel Report Every CMO Should See Weekly",
    excerpt:
      "A one-page weekly demand gen report that stops the 'marketing vs sales' blame game and surfaces real bottlenecks.",
    sections: [
      { h2: "The columns", body: "Stage (visitor → lead → MQL → SQL → Opportunity → Closed-Won), volume this week, volume last week, conversion rate, and stage velocity." },
      { h2: "What to look for", body: "Conversion-rate cliffs. If MQL→SQL is cratering, the problem is either MQL quality or sales follow-up — not top-of-funnel." },
      { h2: "The outreach rule", body: "If SLA compliance drops below 80% in a week, the report auto-flags it. Sales fixes its follow-up before marketing fixes lead gen." },
      { h2: "How long until insights compound", body: "It takes 4–6 weeks of weekly reports before patterns emerge. Don't change the format during that window. Consistency matters more than the exact metric set." },
    ],
  },
  {
    cat: "b2b-growth",
    title: "The Sales Enablement Kit That Actually Gets Used",
    excerpt:
      "Most sales enablement collateral gathers dust. Here's the minimal kit reps actually bring into calls — and the rules for building it.",
    sections: [
      { h2: "The five-asset kit", body: "One-pager overview, 10-slide pitch deck, comparison matrix, three case studies in one format, and a pricing/scoping guide. Any more and reps stop remembering what's available." },
      { h2: "The SME rule", body: "Every asset is built with input from the top-performing rep. If the rep won't use it in a live call, don't build it." },
      { h2: "Version control", body: "All assets live in one folder with clear file naming. No 'final_v3_reviewed' filenames. Outdated versions are the enemy of trust." },
      { h2: "Refresh cadence", body: "Every 90 days. Post-call, reps flag what's outdated or missing. Marketing acts on the top 3 items. Rinse and repeat." },
    ],
  },
  {
    cat: "b2b-growth",
    title: "Why Most B2B Thought Leadership Is Worthless (And the Alternative)",
    excerpt:
      "B2B content is drowning in recycled 'insights'. The alternative is harder and produces 10x the inbound pipeline.",
    sections: [
      { h2: "The recycling problem", body: "Most B2B pieces rehash a survey or a LinkedIn thread. Nothing new. The author's name is the only differentiator, and most authors have no name equity to carry the piece." },
      { h2: "The alternative: primary research", body: "Run real surveys. Publish real data. Interview real customers. Anything that creates new knowledge is 10x more citable than synthesizing existing knowledge." },
      { h2: "The flywheel", body: "Primary research gets cited → citations drive traffic → traffic produces data → data becomes the next piece of research. The flywheel takes 12 months to start spinning." },
      { h2: "Minimum viable research", body: "60 customer interviews, 100 survey responses, or a proprietary data set from your product. Anything smaller reads as marketing; anything larger is a research project." },
    ],
  },

  // Analytics — 3
  {
    cat: "analytics",
    title: "The GA4 Events Every Site Should Track (and the Ones Most Skip)",
    excerpt:
      "The minimal GA4 event taxonomy we deploy at every client — covers 95% of reporting needs with zero bloat.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "GA4 tracking setups come in two flavors: skeletal (page views and not much else) and bloated (hundreds of events tracking every conceivable interaction). Both fail for the same underlying reason — neither maps to the actual questions the business needs answered. The right taxonomy is smaller than most teams think, with a specific set of parameters that make reporting trivially easy instead of a weekly archaeology project.",
      "This is the GA4 event schema we deploy on every client engagement. It covers roughly 95% of reporting needs, stays maintainable as the site evolves, and works with the kind of attribution reality GA4 actually has in a post-third-party-cookie world.",
    ],
    sections: [
      {
        h2: "The core eight events every site needs",
        body: [
          "Start with these eight events, in this order of importance: page_view (already built into GA4, but ensure pathname is clean), click_cta (any click on a primary call-to-action button), form_submit (lead form, contact form, signup form), scroll_depth_75 (did the user get 75% down the page — a proxy for real engagement), video_play (if you have video content), file_download (PDFs, case studies, whitepapers), signup (account created), and purchase (transaction complete).",
          "These eight cover the canonical marketing questions: are people arriving, engaging, converting, and buying? Every dashboard or report a marketing team actually needs can be built from these eight events plus consistent parameters. Ship them first, measure for 30 days, then add custom events only when you can articulate the specific decision they'll inform.",
        ],
      },
      {
        h2: "The three parameters that make reporting easy",
        body: [
          "Every event should carry three parameters: page_type (home, product, blog, category, checkout, etc.), section (which part of the page the interaction happened in — hero, pricing_table, faq), and item_name (the specific thing interacted with — 'pricing_cta', 'demo_video_intro'). These three parameters together let you answer almost any drill-down question without rebuilding the tracking.",
          "Teams that skip parameters end up in a situation where they can see 'CTA clicks' in aggregate but can't tell which CTA on which page was clicked. That's useless for decision-making. By the time they realize, they've lost three months of parameter-less data that can't be retroactively enriched. Ship parameters on day one.",
        ],
      },
      {
        h2: "Naming conventions that prevent future pain",
        body: [
          "Use snake_case for event names, never camelCase or Title Case. GA4's reporting UI handles snake_case better, and inconsistent casing is the number-one source of broken dashboards 6 months into a tracking implementation.",
          "Use verb_noun structure, past tense where it reads naturally: form_submitted, not 'Form Submit' or 'submitFormButton'. Make it obvious what the user did, not what the code did. Consistency across events means cross-event reports (funnels, paths) work out of the box.",
          "Document the taxonomy somewhere non-GA4 — a Notion page or a README in the repo that ships tracking. When a new developer or marketer joins, they should be able to find the full event dictionary in one place. The cost of documenting is ten minutes; the cost of not documenting is measured in quarters of confused reporting.",
        ],
      },
      {
        h2: "What not to track — and why less is more",
        body: [
          "Don't track every mouse movement, every click on every link, every scroll event, or every form field focus. GA4's free tier caps events per month, and even if you're on the paid tier, data you don't use is data that makes reports slower and more confusing. Track what maps to decisions, nothing more.",
          "Specifically: don't track outbound clicks to every external link unless you're debugging a specific partnership. Don't track scroll depth at every 10% increment — just 75% is enough signal for engagement. Don't track hover events unless you're doing specific UX research on a redesign. Don't track time on page as a custom event; GA4 engagement time is good enough.",
          "The test we use: 'what decision would this event change?' If no one can answer it within 15 seconds, the event doesn't ship. This discipline keeps tracking sustainable and reports readable.",
        ],
      },
    ],
    keyTakeaways: [
      "Eight core events cover 95% of needs: page_view, click_cta, form_submit, scroll_depth_75, video_play, file_download, signup, purchase.",
      "Three parameters on every event: page_type, section, item_name. Without these, drill-down reporting is impossible.",
      "snake_case, verb_noun, past tense. Document the taxonomy in a non-GA4 location so future team members can find it.",
      "If you can't articulate the decision an event would change, don't track it. Noise in tracking is the biggest source of future reporting pain.",
    ],
  },
  {
    cat: "analytics",
    title: "The Attribution Model We Actually Trust",
    excerpt:
      "Why we use a blend of data-driven attribution and post-purchase surveys — and why neither alone is enough.",
    sections: [
      { h2: "Data-driven is imperfect", body: "Platforms overclaim. Cross-device gaps. iOS signal loss. DDA is better than last-click but still lies." },
      { h2: "Post-purchase surveys fix the gaps", body: "'How did you hear about us?' at checkout gives you the stated channel. Noisy but honest." },
      { h2: "The blend", body: "When DDA and surveys disagree, split the difference conservatively. When they agree, trust it. When they wildly diverge, find the bug." },
      { h2: "When to invest in MMM", body: "Above $10M annual media spend, media mix modeling pays back. Below that, the data isn't enough for MMM to produce reliable conclusions." },
    ],
  },
  {
    cat: "analytics",
    title: "Looker Studio: The Dashboard Template We Clone for Every Client",
    excerpt:
      "The dashboard structure we've iterated into a single template — five tabs, two-minute executive glance.",
    sections: [
      { h2: "The five tabs", body: "Executive summary (one view), Acquisition (by source and channel), Engagement (content and product), Conversion (funnel and CRO), Revenue (attribution and cohorts)." },
      { h2: "The executive summary rule", body: "Every dashboard opens with a view an executive can understand in 90 seconds. Traffic, leads, revenue, and change vs. prior period. Everything else is drill-down." },
      { h2: "Filters up top", body: "Date range, channel, device. These three filters serve 80% of executive questions. Avoid 20 filters that nobody uses." },
      { h2: "Weekly automation", body: "Dashboard snapshot emailed every Monday at 8am. Forces a discipline of 'what changed last week' before Monday standup." },
    ],
  },

  // Local SEO — 3
  {
    cat: "local-seo",
    title: "Google Business Profile Tactics That Actually Move the Needle",
    excerpt:
      "The GBP tactics that drive real increases in calls and directions — and the ones that are SEO folklore.",
    sections: [
      { h2: "Proven to work", body: "Weekly Google Posts, Q&A seeded by the business, fresh photos every month, and review velocity. The four drivers of most local pack wins." },
      { h2: "Overrated tactics", body: "Keyword stuffing the business name (against guidelines anyway), excessive categories, and padding descriptions with keywords. Low lift, high risk." },
      { h2: "The photo rule", body: "Upload 4–8 original photos per month. New visual content is a ranking signal and a conversion signal — people call businesses with real photos." },
      { h2: "Responding to reviews", body: "Every review, within 48 hours, warm tone. Google weights responsiveness. Customers also weight it — the response tells future customers who you are." },
    ],
  },
  {
    cat: "local-seo",
    title: "The Review Generation System We Deploy for Local Businesses",
    excerpt:
      "How to earn 50+ new reviews per month without feeling spammy — and without violating platform terms.",
    sections: [
      { h2: "Timing matters", body: "Ask within 24 hours of delivering the service, while the experience is fresh. Ask a week later and you'll get half the conversion." },
      { h2: "Channel choice", body: "SMS beats email for review requests (especially for local services). 4-7x conversion. Keep it to one sentence + link." },
      { h2: "The negative-review triage", body: "Start with a '1-10 rating' question. Anyone under 8 gets a feedback form. 9-10 gets the Google review link. Turns the bad reviews into internal feedback and the good ones into public signal." },
      { h2: "Compliance", body: "Never incentivize reviews. Never filter by sentiment from a dialogue the customer thinks is private. Playing the system gets businesses banned." },
    ],
  },
  {
    cat: "local-seo",
    title: "The Local Landing Page Structure That Beats Templated Dust",
    excerpt:
      "How to build location pages that actually rank — the thin-content alternatives most agencies ship are wasting their clients' money.",
    sections: [
      { h2: "The ingredients that matter", body: "Hyper-local photos, local staff profiles, location-specific testimonials, real directions, parking details, and local landmarks. Without these, you're just swapping a city name." },
      { h2: "The killer mistake", body: "Same 500 words with the city name swapped on 300 pages. Google detects this in minutes. Penalty applied, indexing stopped, traffic gone." },
      { h2: "Scaling the 'real' approach", body: "80% of the content can be templated (service descriptions, FAQs). 20% must be genuinely local. If you can't produce the 20%, don't build the pages." },
      { h2: "The review anchor", body: "Embed location-specific Google reviews directly on the page. Fresh, unique content updates automatically. Solves half the uniqueness problem for free." },
    ],
  },

  // CRO — 3
  {
    cat: "cro",
    title: "The Five CRO Experiments We Run on Every New Client",
    excerpt:
      "The experiments that reliably produce lift in the first quarter — a running list refined across 80+ engagements.",
    featured: true,
    updatedAt: "2026-04-24T00:00:00Z",
    intro: [
      "CRO programs fail when teams invent experiments from scratch every time. The best-performing ones we've run across 80+ engagements have a well-worn playbook — a specific set of five experiments that reliably produce lift in the first quarter regardless of industry. These aren't the experiments that'll double your conversion rate. They're the ones that reliably produce 10–30% lifts fast, fund the program's ROI, and free up team bandwidth to run the harder, more interesting experiments afterward.",
      "This piece walks through the five, with the specific hypotheses, implementation detail, and expected results for each. It's the closest thing to a plug-and-play CRO starter kit we've found.",
    ],
    sections: [
      {
        h2: "Experiment 1 — Hero headline clarity rewrite",
        body: [
          "The hero headline on most websites is written for the founder, not for the visitor. It's abstract, clever, or aspirational instead of concrete and outcome-focused. The clarity test replaces it with a headline that tells the visitor exactly what the product is, who it's for, and what outcome it produces — in one sentence, ideally under 10 words.",
          "The pattern that wins most often: [outcome] + [audience] + [mechanism]. Example: 'Close 20% more deals — for B2B sales teams using HubSpot.' Compare that to the typical vague headline: 'Pipeline, reimagined.' The specific version tells the visitor whether to stay or leave; the vague one forces them to scroll and search for context, which most won't do.",
          "Results: typical lift on the hero conversion action ranges from 15% to 60% in our experience. This is the single highest-ROI test because the hero is seen by 100% of visitors, so even modest lifts produce substantial downstream impact.",
        ],
      },
      {
        h2: "Experiment 2 — CTA button copy test",
        body: [
          "CTA buttons on most sites default to 'Get Started' or 'Learn More,' which tell the visitor nothing about what happens when they click. Replacing generic CTAs with specific ones describing the next action typically lifts click-through rates 10–25%.",
          "The framework: write what happens in the visitor's words. If clicking leads to a scheduling page, the button should say 'Book a demo' or 'See pricing,' not 'Get Started.' If clicking leads to a signup flow, say 'Start free trial — no credit card' or 'Create free account.' The specificity reduces uncertainty, which reduces drop-off at the click moment.",
          "A/B test the current CTA against three variations and let the data pick the winner. The loser often surprises the team; clever CTAs frequently underperform boring-but-clear ones, which is humbling but profitable.",
        ],
      },
      {
        h2: "Experiment 3 — Pricing page simplification",
        body: [
          "Most pricing pages have too many tiers, too much feature detail, and too much comparison friction. The simplification experiment reduces the page to three tiers maximum, with one-sentence descriptions per tier and feature lists limited to the five most differentiating features.",
          "The core tradeoff: reducing information on the pricing page forces the high-intent visitors to book a call (where your sales team can qualify and close), while reducing cognitive load for the low-intent browsers who would have bounced anyway. Net effect across dozens of client tests: 15–40% lift in pricing-to-signup conversion, with a small increase in sales-call volume that's typically higher quality.",
          "Important caveat: this test doesn't work as well for pure self-serve products where visitors need to fully compare tiers before buying. For those, the right test is often the opposite — more detail, clearer comparison tables, live chat for edge cases.",
        ],
      },
      {
        h2: "Experiment 4 — Checkout or signup form reduction",
        body: [
          "Form abandonment is the most-studied, least-fixed CRO problem. Every extra field drops completion by an average of 3–7%. Most signup and checkout forms have fields that aren't required for activation but somebody once thought would be nice to have — phone number, company size, industry, referral source.",
          "The experiment: reduce the form to the minimum fields required to create the account or process the order. Move anything optional to a post-purchase or post-signup step. For B2B signup, this often means email + password + full name, full stop. For ecommerce, it means email + shipping info, with account creation optional after purchase.",
          "Typical lift: 10–30% on form completion rate. This experiment also improves downstream conversion because the reduced friction attracts a broader top-of-funnel, and the best acquisition strategies usually start with wider funnels.",
        ],
      },
      {
        h2: "Experiment 5 — Mobile sticky CTA",
        body: [
          "On mobile devices, users scroll past the hero's primary CTA within 3–5 seconds and don't scroll back. A sticky CTA bar pinned to the bottom of the viewport ensures the conversion action remains one tap away no matter how far they've scrolled. Implementation is 30 lines of CSS and a few lines of JavaScript; the lift is typically 10–25% on mobile conversion.",
          "Design notes that matter: the sticky bar should be dismissible (some users will find it annoying, and forcing it triggers backlash), it should not obscure important page content (use appropriate z-index and padding), and it should adapt its CTA to scroll depth (the initial hero CTA can change to 'Talk to sales' after a user has scrolled through pricing).",
          "The reason this works is structural: mobile traffic is typically 60–80% of total traffic for most marketing sites, but mobile conversion rates are usually 30–50% lower than desktop. Any friction reduction on mobile compounds heavily. This test is almost always worth running.",
        ],
      },
    ],
    keyTakeaways: [
      "Run the same five starter experiments on every new engagement: hero headline, CTA copy, pricing simplification, form reduction, mobile sticky CTA.",
      "Hero headline rewrites (outcome + audience + mechanism) produce the biggest single lift — often 15–60%.",
      "Pricing page simplification doesn't lose self-serve revenue; it shifts high-intent visitors to sales calls where close rates are higher.",
      "Mobile sticky CTAs compound across 60–80% of traffic. Almost always worth the 30 lines of CSS to implement.",
    ],
  },
  {
    cat: "cro",
    title: "Why Most A/B Tests Teach You Nothing",
    excerpt:
      "The structural reasons most A/B tests don't produce learning — and how to run experiments that compound into team knowledge.",
    sections: [
      { h2: "The sample size problem", body: "Most tests stop at 'statistically significant' without enough volume to generalize. A 2000-session test tells you about 2000 sessions, not the whole audience." },
      { h2: "The isolated-variable problem", body: "Testing five things at once and declaring a winner teaches nothing — you don't know which change worked. One variable per test, always." },
      { h2: "The documentation problem", body: "Tests happen, winners ship, nobody documents why. Six months later the team repeats the same test with a new junior running it. Documentation is the knowledge moat." },
      { h2: "Killing bad tests", body: "Ship the confident directional winner. Don't wait for statistical significance on low-volume tests. Action beats certainty on small samples." },
    ],
  },
  {
    cat: "cro",
    title: "The Research Stack That Powers Every Good Experiment",
    excerpt:
      "Before any A/B test, we run qualitative research. Here's the four-tool stack that generates experimentable hypotheses.",
    sections: [
      { h2: "Heatmaps (Hotjar or Clarity)", body: "For visual attention patterns. Where do people click, where do they ignore, what do they try to click that isn't a link." },
      { h2: "Session recordings", body: "Watch 10 sessions of people completing (or failing) the core funnel. You'll learn more than any analytics dashboard tells you." },
      { h2: "On-site polls", body: "Short, single-question polls at friction points. 'What almost stopped you from completing this?' Answers form half of our experiment backlog." },
      { h2: "Customer interviews", body: "5 interviews with recent customers. Their words become your copy. Their confusions become your tests." },
    ],
  },

  // === SEO expansion ===
  { cat: "seo", title: "Schema Markup: The Quick Wins Most Sites Still Miss", excerpt: "The handful of schema types that actually move rich result real estate — and the ones that don't.", sections: [
    { h2: "Types worth the effort", body: "Organization, Product, Article, FAQPage, BreadcrumbList, LocalBusiness, and SoftwareApplication. That's the shortlist. Everything else is niche." },
    { h2: "Validation over volume", body: "One perfectly implemented Product schema beats 14 half-broken ones. Use Google's Rich Results Test and fix warnings — they become errors within a release cycle." },
    { h2: "The review trap", body: "AggregateRating schema without genuine reviews is a manual penalty waiting to happen. Don't fake review counts, ever." },
  ]},
  { cat: "seo", title: "How We Fixed a 42% Organic Drop in 11 Days", excerpt: "A step-by-step post-mortem on a client site that lost half its traffic overnight — and the fix that brought it back.", sections: [
    { h2: "The initial signal", body: "Search Console impressions cratered on a Tuesday. Crawl stats were normal. Rankings for head terms vanished." },
    { h2: "The actual cause", body: "A recent theme update injected a rogue noindex meta tag on paginated archive pages. 34% of ranking URLs were affected." },
    { h2: "The fix and recovery", body: "Removed the noindex, resubmitted sitemaps, requested indexing on top-20 URLs. Full recovery took 11 days. Monitoring caught it; most teams would have waited a quarter." },
  ]},
  { cat: "seo", title: "The JavaScript SEO Checklist for Next.js Sites", excerpt: "What to watch for when shipping a JavaScript-rendered site that still needs to rank.", sections: [
    { h2: "Rendering strategy", body: "Static generation for marketing, ISR for semi-dynamic, SSR only when you have to. Client-only renders are a ranking liability unless you're tiny." },
    { h2: "Hydration costs", body: "Big client bundles break Core Web Vitals. Split routes, lazy-load heavy components, and use React Server Components where possible." },
    { h2: "Testing rendered output", body: "Use Google's URL Inspection tool weekly on critical pages. Don't assume what's in your browser matches what the Googlebot crawler sees." },
  ]},
  { cat: "seo", title: "International SEO: Hreflang Without the Headache", excerpt: "A straightforward approach to hreflang that avoids the traps most teams step into.", sections: [
    { h2: "When you actually need it", body: "Only when you serve the same or similar content in multiple languages or regional variants. Don't add hreflang 'just in case'." },
    { h2: "Self-referencing always", body: "Every localized URL must reference itself plus every sibling language. Missing a self-reference breaks the whole cluster silently." },
    { h2: "Sitemaps beat head tags", body: "Manage hreflang via XML sitemaps, not in-page head tags. Cleaner, easier to audit, faster to update at scale." },
  ]},
  { cat: "seo", title: "Why Your Featured Snippet Disappeared and What to Do About It", excerpt: "Snippet loss isn't a penalty — it's usually a format mismatch. Here's the recovery playbook.", sections: [
    { h2: "The three most common causes", body: "Google redesigned the snippet slot, a competitor answered more directly, or your page got longer and the answer got buried deeper." },
    { h2: "The direct-answer fix", body: "Make sure the first 40-60 words directly answer the query. Not context, not setup — the answer." },
    { h2: "Tables and lists steal snippets", body: "If the competitor uses a table or list and you don't, that's why. Format matching is the underrated SEO skill." },
  ]},
  { cat: "seo", title: "The Content Pruning Decision I Make on Every SEO Audit", excerpt: "How to decide which pages to delete, merge, noindex, or refresh in an audit.", sections: [
    { h2: "Zero-traffic pages", body: "No impressions in 90 days? Noindex or delete. Crawl budget is real; low-quality thin pages dilute authority." },
    { h2: "Low-traffic pages with intent", body: "Merge into a stronger parent. Redirect. One authoritative page beats three thin ones on the same topic." },
    { h2: "High-traffic, low-conversion pages", body: "Don't touch the rankings. Fix the conversion path on the page — CTA placement, content order, clearer product links." },
  ]},
  { cat: "seo", title: "Log File Analysis: The SEO Tactic Most Teams Skip", excerpt: "What log files reveal that Search Console hides — and how to run a basic log analysis yourself.", sections: [
    { h2: "What logs show you", body: "Which pages Googlebot crawls, how often, and which it ignores. Indispensable for large sites debugging crawl budget." },
    { h2: "Getting the data", body: "Most hosts expose access logs. Filter to Googlebot user-agents, aggregate by URL, and look at 90-day crawl frequency." },
    { h2: "What you'll find", body: "Usually a third of your site is being over-crawled (thin or duplicate) and the pages you care about aren't being crawled enough. That's the map for internal linking and pruning decisions." },
  ]},
  { cat: "seo", title: "Keyword Research in 2026: Intent Matters More Than Volume", excerpt: "Why chasing high-volume keywords is wasting most teams' time, and the intent-first approach we use.", sections: [
    { h2: "The volume trap", body: "A 20,000-search-volume keyword owned by your biggest competitor with 50x your domain authority is a fantasy. Pick battles you can win." },
    { h2: "Intent over volume", body: "Rank for queries where your page is the best answer. A 300-volume keyword at position 1 beats a 20k keyword at position 40 every day." },
    { h2: "The question-mining shortcut", body: "Use AlsoAsked, AnswerThePublic, and Reddit. The 'people also ask' data shows you exactly what searchers need — and what you should write." },
  ]},
  { cat: "seo", title: "Canonical Tags: 5 Mistakes That Tank Rankings", excerpt: "Canonicals are supposed to prevent duplicate content. Here's how most teams accidentally break them.", sections: [
    { h2: "Mistake 1: Pointing multiple pages at one canonical", body: "If every product variant canonicalizes to the parent, you're telling Google none of the variants should exist. You lose the long-tail rankings entirely." },
    { h2: "Mistake 2: Canonical chains", body: "A→B→C canonicals confuse crawlers. Always point directly to the final destination." },
    { h2: "Mistake 3: Cross-domain canonicals gone wrong", body: "Canonicalizing to a domain you don't own — accidentally — happens constantly during migrations. Audit every release." },
  ]},
  { cat: "seo", title: "The Actual Way to Rank for Zero-Volume Keywords", excerpt: "Why the lowest-volume long-tails deliver the highest-converting traffic — and how to find them systematically.", sections: [
    { h2: "Where they come from", body: "Search Console's 'queries' report where you rank 8-20 is a goldmine. These are zero-volume keywords your content already half-answers." },
    { h2: "Dedicated answer pages", body: "Build a single-intent page per long-tail cluster. 400 words, one clear answer, clean title tag. Rinse, repeat." },
    { h2: "Compound traffic math", body: "100 zero-volume keywords at 8 clicks/month each = 800 highly-qualified visits. That beats a single 10k-volume keyword at position 15 (which gets maybe 200 clicks)." },
  ]},
  { cat: "seo", title: "How We Run SEO During a Site Migration Without Losing Traffic", excerpt: "The pre-launch, launch-day, and post-launch checklist for migrating without the 40% organic bloodbath.", sections: [
    { h2: "Pre-launch", body: "Full crawl of current site. 301 map. Metadata preservation doc. Staging site SEO audit. Google Search Console ownership ready for the new domain." },
    { h2: "Launch day", body: "Push redirects live simultaneously with the new site. Verify 20 random old URLs. Submit new sitemap. Request indexing on homepage and top-10 URLs immediately." },
    { h2: "First 30 days", body: "Daily GSC coverage checks. Weekly rank monitoring. Fix crawl errors within 24 hours. Expect a 2-6 week settlement period — don't panic at small dips." },
  ]},
  { cat: "seo", title: "EEAT Signals That Actually Matter", excerpt: "Google's quality rater guidelines get quoted endlessly. Here's what actually moves rankings.", sections: [
    { h2: "Author bylines with credentials", body: "Real bylines on every piece, linked to author pages with biography, credentials, and external profiles. This matters for YMYL content especially." },
    { h2: "Citations to primary sources", body: "Link out to original research, not just aggregator sites. It signals you're contributing to the web, not repackaging it." },
    { h2: "Content freshness", body: "Last-updated dates visible on every article. Refresh content that's gone stale. Stale content on YMYL topics ranks lower over time." },
  ]},
  { cat: "seo", title: "Why Content Length Isn't a Ranking Factor (But Relates to One That Is)", excerpt: "The confused correlation between word count and rankings, and what actually matters.", sections: [
    { h2: "The confused correlation", body: "Long content tends to rank. Not because it's long, but because it's often more thorough — which matches more search intent variants." },
    { h2: "Write until you've answered", body: "Write the length required to fully answer the intent. Then stop. 800 words of complete is better than 2500 of padding." },
    { h2: "The comprehensiveness test", body: "Compare your piece to the top 3 ranking pages. Do they cover topics you don't? That's your gap. Close it or admit your page won't compete." },
  ]},
  { cat: "seo", title: "Mobile-First Indexing: Pass the 5 Tests That Matter", excerpt: "The specific checks to ensure your mobile version isn't secretly dragging down rankings.", sections: [
    { h2: "Content parity", body: "Mobile must contain the same primary content as desktop. Collapsed accordions are fine; missing sections aren't." },
    { h2: "Structured data parity", body: "Schema on mobile must match desktop. A common gotcha — mobile themes strip Product schema unknowingly." },
    { h2: "Performance parity", body: "Mobile Core Web Vitals govern ranking. A desktop that scores 100 and a mobile that scores 50 ranks at mobile's score." },
  ]},
  { cat: "seo", title: "Orphan Pages: The Silent Ranking Drag on Every Big Site", excerpt: "How to find orphan pages, why they hurt, and the fastest way to fix them.", sections: [
    { h2: "What counts as an orphan", body: "A page with zero incoming internal links. Google can barely crawl them, users never find them, they dilute authority." },
    { h2: "Finding them", body: "Cross-reference your Screaming Frog crawl with your XML sitemap. URLs in the sitemap not in the crawl are orphans." },
    { h2: "The fix", body: "Either link to them from relevant pages or retire them. Orphaned content that no one's linking to is content nobody wants." },
  ]},

  // === Paid Marketing expansion ===
  { cat: "paid-marketing", title: "The Offer Test That Beat Every Creative Test We've Run", excerpt: "Why offer testing outperforms creative testing on nearly every account.", sections: [
    { h2: "Creative is variable, offer is structural", body: "A good creative lifts a bad offer 10%. A good offer makes any creative work. Test offers first." },
    { h2: "Three offer axes", body: "Discount shape (% vs $ off), urgency (time vs stock), and bundle (single vs multi). Usually one dominates." },
    { h2: "How long to test", body: "2 weeks per offer in a dedicated campaign, matched traffic volume to the control. Below that, noise dominates signal." },
  ]},
  { cat: "paid-marketing", title: "The UGC Ad Library Every DTC Brand Should Build", excerpt: "What a healthy library of user-generated-content ads looks like — and how to source it at scale.", sections: [
    { h2: "Library size", body: "40+ pieces of raw UGC per month across your top 3 products. Rotating library keeps creative fresh and algorithm happy." },
    { h2: "Source at three tiers", body: "Customers (cheap, authentic), micro-creators ($50-300 per video), and pro creators ($500-2000 per video). Mix all three." },
    { h2: "The brief determines output", body: "Tight briefs get usable UGC. Loose briefs get chaos. Specify hook, format, runtime, and required product demonstration explicitly." },
  ]},
  { cat: "paid-marketing", title: "Google Ads Account Structure for 2026", excerpt: "The modern campaign structure that wins on Google — simpler than 2020, different from 2024.", sections: [
    { h2: "Fewer, stronger campaigns", body: "1 search campaign per theme, PMax for ecom, 1 video campaign for YouTube. Stop building 30-campaign accounts." },
    { h2: "Broad match with tROAS", body: "Broad match is usable now with tROAS or tCPA. Use conversion API and first-party data as the signal." },
    { h2: "Brand protection", body: "Always run a brand-term search campaign, even if you outrank competitors organically. It's cheap insurance against competitor encroachment." },
  ]},
  { cat: "paid-marketing", title: "Why Our Best-Performing Ads Are 7 Seconds Long", excerpt: "The data-backed case for shorter social ads — and why 15s is the new outer boundary.", sections: [
    { h2: "Attention drops fast", body: "70% of viewers scroll within 3 seconds on Reels. The math: you've got 3 seconds to hook, 4 to deliver, done." },
    { h2: "7-second structure", body: "1s hook, 3s value demonstration, 2s proof, 1s CTA. No fluff. Every frame earns its place." },
    { h2: "When longer still works", body: "Complex B2B products on LinkedIn, creator-style content on YouTube. Otherwise, default short." },
  ]},
  { cat: "paid-marketing", title: "The Conversion API Setup That Actually Moved Our ROAS", excerpt: "Our CAPI implementation for Meta that reclaimed 30%+ of lost iOS attribution.", sections: [
    { h2: "The two critical events", body: "Purchase and AddToCart. Get these server-side first. Everything else is nice-to-have." },
    { h2: "First-party data", body: "Hash and send email, phone, and city. Match quality goes from mediocre to strong and conversion count spikes." },
    { h2: "Validate daily for 2 weeks", body: "Event Match Quality in Events Manager should be 7+/10. Lower means something's off with your hashing or implementation." },
  ]},
  { cat: "paid-marketing", title: "The Landing Page Mistakes That Kill Paid Campaigns", excerpt: "Why paid traffic is the harshest test of landing page quality — and the five mistakes that sabotage campaigns.", sections: [
    { h2: "Mistake 1: Home page as landing page", body: "A home page speaks to 10 audiences. A landing page speaks to one ad's audience. Always match landing page to ad intent." },
    { h2: "Mistake 2: Slow load", body: "Above 3 seconds LCP, paid bounces spike 40%+. Paid amplifies the cost of slow." },
    { h2: "Mistake 3: CTA above the fold only", body: "Modern scroll patterns mean CTAs need to repeat every ~600px vertical scroll. One CTA isn't enough." },
  ]},
  { cat: "paid-marketing", title: "Budget Pacing: The Boring Skill That Saves Accounts", excerpt: "Why unpaced budgets waste 20%+ of spend and the simple pacing rules we enforce.", sections: [
    { h2: "Monthly pacing reviewed weekly", body: "Every Monday: check month-to-date spend vs target. Adjust if more than 10% off pace." },
    { h2: "Daily budget caps", body: "Prevent weekend runaway. Especially important for automation-heavy accounts that can burn a week's budget in 12 hours." },
    { h2: "Reserve 10-15%", body: "Hold back 10-15% of budget for mid-month winners. If a creative hits, you need powder to scale it without kneecapping other campaigns." },
  ]},
  { cat: "paid-marketing", title: "The Frequency Capping Rules Every Meta Account Should Have", excerpt: "Why unchecked frequency burns creative and tanks ROAS — and the caps we set by default.", sections: [
    { h2: "Prospecting: no cap", body: "Meta's algorithm already manages frequency for prospecting. Manual caps hurt delivery." },
    { h2: "Retargeting: cap at 3-5 per week", body: "Above 5, audiences get fatigued and costs spike. Cap and rotate creative frequently." },
    { h2: "Brand campaigns: cap at 2 per week", body: "Brand is about reach, not repetition. Higher frequency erodes goodwill faster than it builds awareness." },
  ]},
  { cat: "paid-marketing", title: "Video Ads: The Opening 3 Frames That Decide Everything", excerpt: "What the first 3 frames of your video ad need to do — backed by 200+ test results.", sections: [
    { h2: "Frame 1: visual pattern interrupt", body: "A close-up, unexpected angle, bright color — anything that's visually not what's expected in the feed." },
    { h2: "Frame 2: text hook", body: "Short, specific text that promises value or curiosity. 'I tested 12 ad tools. Only 3 worked.' Works nearly every time." },
    { h2: "Frame 3: face or motion", body: "Human face or rapid motion keeps the eye engaged long enough to finish the hook. Static frame 3 = scroll." },
  ]},
  { cat: "paid-marketing", title: "How We Run Media Mix Modeling at Sub-$5M Spend", excerpt: "MMM doesn't require enterprise tooling. Here's our lean approach for mid-market brands.", sections: [
    { h2: "The tools", body: "Meta Robyn or a simple regression in Python. Data inputs: weekly spend by channel, weekly revenue, external regressors (holidays, promos)." },
    { h2: "What you'll learn", body: "Saturation curves per channel and diminishing returns thresholds. Answers 'how much can I scale Meta before diminishing?' concretely." },
    { h2: "Update quarterly", body: "Run the model quarterly. Monthly is too noisy; annually is too slow. Quarterly catches meaningful shifts in channel efficiency." },
  ]},
  { cat: "paid-marketing", title: "Why We Paused Every Dynamic Retargeting Campaign This Quarter", excerpt: "DPA campaigns used to be a no-brainer. Here's why we've rethought them.", sections: [
    { h2: "What changed", body: "iOS signal loss + lower cart sizes make traditional DPA inefficient. Cost per conversion is 2-3x what it was in 2022." },
    { h2: "What we run instead", body: "Broad retargeting with lifestyle creative. Less personalization, more brand, better results at current signal quality." },
    { h2: "When DPA still wins", body: "Accounts with 100k+ unique site visitors per month and large catalogs. Below that, DPA isn't worth the complexity." },
  ]},
  { cat: "paid-marketing", title: "The Real Reason Your Lookalike Audiences Stopped Working", excerpt: "Lookalikes aren't what they used to be. Here's what changed and what to use now.", sections: [
    { h2: "Signal degradation", body: "Source audiences have less data post-iOS 14. Lookalikes built from weak sources produce weak audiences." },
    { h2: "What outperforms", body: "Broad with good creative + CAPI. Algorithm targeting now beats manual lookalike precision, especially on Meta." },
    { h2: "When lookalikes still help", body: "1-3% lookalikes of purchasers (narrow, high-quality). The 5-10% range became noise." },
  ]},
  { cat: "paid-marketing", title: "Cost Caps vs Bid Caps: Which to Use When", excerpt: "The two bid strategies Meta optimizers argue about, and when each wins.", sections: [
    { h2: "Cost cap: predictable ceiling", body: "Keeps average CPA at or below target. Use when unit economics demand a hard ceiling, with enough creative diversity to find wins." },
    { h2: "Bid cap: maximum efficiency", body: "Very low bid cap delivers lowest-cost traffic but also lowest volume. Use only when volume isn't the bottleneck." },
    { h2: "Default to cost cap", body: "For most DTC and B2B accounts, cost cap is the pragmatic choice. Bid cap is an advanced lever for specific situations." },
  ]},

  // === Social Media expansion ===
  { cat: "social-media", title: "The LinkedIn Hooks That Out-Performed Everything Else in 2026", excerpt: "Analysis of our top-performing LinkedIn hooks across client accounts — the patterns that actually earn engagement.", sections: [
    { h2: "Contrarian claim + receipts", body: "'We killed our best-performing ad campaign on purpose. Here's why.' Claim + promise of reasoning outperforms clickbait 4x." },
    { h2: "Specific number + unexpected outcome", body: "'I sent 2,400 cold emails. 3 became customers.' The math is specific enough to feel true and the ratio invites curiosity." },
    { h2: "Vulnerable admission + lesson", body: "'I was wrong about X. Here's what I now believe.' Admission disarms readers' defenses and invites engagement." },
  ]},
  { cat: "social-media", title: "Instagram Reels: The Three Tempo Patterns That Convert", excerpt: "After analyzing 500+ Reels, here are the editing tempos that reliably drive higher watch time and saves.", sections: [
    { h2: "Fast-cut list pattern", body: "Punchy cuts every 1-2 seconds through a numbered list. Great for educational content. High retention, high saves." },
    { h2: "Long-cut confession pattern", body: "Single take, 15-30s. Founder talking head. Best for POV and contrarian takes. Lower reach, higher comments." },
    { h2: "Voiceover + B-roll pattern", body: "Continuous voiceover with cut-in visuals every 2-3s. Best for product-led content. Balances information density and watchability." },
  ]},
  { cat: "social-media", title: "The TikTok SEO Playbook for B2B", excerpt: "TikTok's search volume for B2B terms doubled YoY. Here's how we optimize for it.", sections: [
    { h2: "Treat captions as alt text", body: "Keyword-rich first 20 words in the caption. TikTok's search index reads them literally." },
    { h2: "Hook with the query", body: "'How to do X in Y' verbatim in the first spoken line. TikTok's search is improving but still benefits from literal matching." },
    { h2: "On-screen text for searchers", body: "Duplicate the spoken content in on-screen text. Search results show the text overlay in thumbnails — increases click-through." },
  ]},
  { cat: "social-media", title: "The Threads Opportunity Most B2B Brands Are Ignoring", excerpt: "Threads is quietly becoming a strong B2B channel. Here's why and how to start.", sections: [
    { h2: "What's working", body: "Long conversational threads, industry commentary, behind-the-scenes. Professional tone with more warmth than LinkedIn." },
    { h2: "Audience differs", body: "Threads audience is younger and more founder-oriented than LinkedIn. Different persona, different tone." },
    { h2: "Start simple", body: "Repost your LinkedIn content with looser tone for 30 days. Measure engagement. If it resonates, build dedicated content." },
  ]},
  { cat: "social-media", title: "Content Batching: How We Produce 30 Posts in 4 Hours", excerpt: "The batching system that lets solo founders keep up with social cadence without burning out.", sections: [
    { h2: "Batch by type, not topic", body: "One hour for hook ideation, one for writing, one for visuals, one for scheduling. Context-switching kills production speed." },
    { h2: "Record in blocks", body: "Video content: 4 hours, 10 topics, same outfit and setup. One session produces two weeks of content." },
    { h2: "Schedule 2 weeks ahead", body: "Stay two weeks ahead and you buy room for real-time posts on trending topics without panic." },
  ]},
  { cat: "social-media", title: "Community Management: What to Automate and What to Never Automate", excerpt: "Where AI and automation help community ops — and where they still shouldn't touch.", sections: [
    { h2: "Automate: triage and first response", body: "Bots route incoming DMs to the right queue and send first-response acknowledgments. Humans handle actual replies." },
    { h2: "Automate: FAQs in comments", body: "Pinned auto-replies for shipping questions, pricing, and common product asks. Frees the community manager for real conversation." },
    { h2: "Never automate: complaints", body: "Angry customer messages need human response within an hour. An auto-reply makes a bad situation worse." },
  ]},
  { cat: "social-media", title: "Why Our Best Posts Have Nothing to Do With Our Product", excerpt: "The counter-intuitive truth about social: your product shouldn't be the star most of the time.", sections: [
    { h2: "The 70/20/10 mix", body: "70% audience interest, 20% industry POV, 10% product. Product-heavy feeds get low engagement and stall growth." },
    { h2: "Why it works", body: "Followers come for the audience-interest content. Product comes into their awareness as a trusted add-on, not a pitch." },
    { h2: "Measurement trap", body: "Product posts score high on direct conversion; audience-interest posts score high on reach and long-term brand equity. Measure both." },
  ]},
  { cat: "social-media", title: "The Podcast Clip Strategy That Grew Our Audience 3x", excerpt: "How we turn one hour-long podcast into 15 days of social content — and what formats convert.", sections: [
    { h2: "Three clips per episode", body: "One contrarian hot take (60s), one actionable framework (90s), one vulnerable moment (45s). Different audiences, different hooks." },
    { h2: "Format to platform", body: "Short talking-head for TikTok/Reels, wide shot with captions for LinkedIn, full clip for YouTube. Don't just resize — reformat." },
    { h2: "The repurposing multiplier", body: "One podcast becomes 15 posts, 5 newsletter sections, 3 blog snippets. The content goes 20x further than its recording cost." },
  ]},
  { cat: "social-media", title: "Founder-Led Social: The 2-Hour Weekly Minimum", excerpt: "The exact weekly time commitment we see separating founders who get inbound from social vs those who don't.", sections: [
    { h2: "The 2-hour block", body: "One 2-hour session weekly: 30 min ideation, 60 min recording or writing, 30 min engaging on others' content." },
    { h2: "Compound over 6 months", body: "Inbound deals start showing up around month 6 consistently. Anyone quitting before month 4 is quitting too early." },
    { h2: "What to actually do", body: "Post 2-3x per week on one platform. Engage thoughtfully on 20 peer posts weekly. That's it. Don't do more, don't do less." },
  ]},
  { cat: "social-media", title: "The DM Funnel: How to Convert Social Followers Into Sales Calls", excerpt: "A non-pushy DM funnel that turns follower attention into booked calls without feeling sleazy.", sections: [
    { h2: "The lead-in", body: "Reply to their comment or DM with a specific, useful insight. Don't pitch. Don't link. Just help." },
    { h2: "The second touch", body: "Share a relevant resource (article, checklist). Still no pitch. Establish value pattern first." },
    { h2: "The open", body: "Third touch: 'If this is a live problem for you, happy to hop on a 20-min call.' Low-pressure, low-commitment. Convert rate is 15-30% of engaged DMs." },
  ]},
  { cat: "social-media", title: "Instagram Stories: The Underused Conversion Channel", excerpt: "Stories are where your warmest audience lives. Here's how to convert them without being annoying.", sections: [
    { h2: "One CTA per day maximum", body: "Stories users tolerate 1 real CTA per day from a brand. More and they mute you." },
    { h2: "Use the poll and quiz stickers", body: "Engagement on these is 5-10x above swipe-up. Use them as soft CTAs before hard CTAs." },
    { h2: "Close friends for VIPs", body: "Invite top customers to close friends. Early access, unfiltered content, direct replies. Their LTV triples." },
  ]},
  { cat: "social-media", title: "The YouTube Shorts Play That Doubled Our Subscriber Rate", excerpt: "A specific YouTube Shorts tactic that turned our channel from stagnant to compounding.", sections: [
    { h2: "The recurring series", body: "Named series with consistent visual identity and recurring cadence. 'Tuesday Tool Reviews', 'Friday Founder Stories'. Expectation drives returns." },
    { h2: "End-screen to long-form", body: "Every Short ends with 'Watch the full breakdown' linking to a long-form video. Shorts → long-form is the subscriber pipeline." },
    { h2: "Consistency over quality", body: "3 Shorts per week at 80% quality beats 1 Short per month at 100%. Algorithm rewards cadence." },
  ]},

  // === Content Marketing expansion ===
  { cat: "content-marketing", title: "The Editorial Calendar Template That Survived 18 Months at Our Agency", excerpt: "A real editorial calendar structure, not the theoretical one. What we actually ship weekly.", sections: [
    { h2: "The five columns", body: "Topic, target keyword, author, due date, status. Nothing more. More columns = calendar chaos." },
    { h2: "Weekly cadence meeting", body: "15 minutes every Monday. Review what shipped, assign what's due, flag what's stuck. No status updates; just decisions." },
    { h2: "The buffer rule", body: "Always have 2 weeks of content approved and scheduled. Buffer absorbs emergencies; zero-buffer creates panic posts." },
  ]},
  { cat: "content-marketing", title: "Why Our Best Blog Posts Start as Customer Support Tickets", excerpt: "The free content ideation channel every team has access to and most ignore.", sections: [
    { h2: "Support tickets are content briefs", body: "Every ticket is a question someone typed. Aggregate, cluster, and pick the top 10 monthly questions. That's your editorial calendar." },
    { h2: "The conversion benefit", body: "These posts solve real problems, so they convert support tickets into self-service solutions. Double win." },
    { h2: "Closing the loop", body: "Link from support responses to the published article. Support team becomes content promotion channel." },
  ]},
  { cat: "content-marketing", title: "The Case Study Template That Gets Read (Most Don't)", excerpt: "Our case study structure for pieces people actually finish — short, punchy, with numbers.", sections: [
    { h2: "The five-section structure", body: "Client snapshot, problem, approach, results, quote. Each under 150 words. Total: under 1,000 words, 4-minute read." },
    { h2: "Numbers in the hero", body: "Top-line result in the hero section. Don't make readers scroll for the outcome." },
    { h2: "The quote that sells", body: "One specific, emotion-laden quote from the client. Generic praise dies; specific gratitude converts." },
  ]},
  { cat: "content-marketing", title: "Ghostwriting for Execs Who Don't Have Time to Be Ghostwritten", excerpt: "The async model for ghostwriting busy C-level executives without wasted cycles.", sections: [
    { h2: "Voice memos over calls", body: "Exec voice-records 5-minute rants on 3 topics weekly. Writer transcribes, drafts. Five minutes of exec time = 3 posts." },
    { h2: "Approval via thumbs", body: "Send drafts in a shared doc. Exec reacts: 👍 ships, 👎 kills, 💬 revise. No email threads, no meetings." },
    { h2: "Quarterly calibration", body: "Once a quarter: 30-minute call where exec reads their posts aloud. Corrects voice drift. Document the corrections." },
  ]},
  { cat: "content-marketing", title: "The Whitepaper That Generated $4M in Pipeline", excerpt: "A case study in gated content that actually worked — why it converted and what we'd replicate.", sections: [
    { h2: "The hook", body: "Proprietary survey of 500 CMOs on a contentious topic. Original data nobody else had." },
    { h2: "The gate", body: "Email only. No phone, no company size. The higher friction you add, the lower your volume. We wanted volume for nurture." },
    { h2: "The nurture", body: "14-day email sequence post-download. Each email = one data point from the paper + a question. 8% booked calls from nurture." },
  ]},
  { cat: "content-marketing", title: "Newsletter Growth: The 3 Channels That Actually Work", excerpt: "Beyond social and website forms, the channels that reliably grow a newsletter subscriber base.", sections: [
    { h2: "Cross-promotions", body: "Swap mentions with 5-10 complementary newsletters. 100-500 new subs per swap if audiences align. Best ROI by far." },
    { h2: "Podcast guesting", body: "Guest on aligned podcasts and offer a specific newsletter-only bonus. 50-200 subs per episode appearance." },
    { h2: "Twitter/Threads threads", body: "Viral threads that end with a specific newsletter CTA. Hit-or-miss but can deliver 1,000+ subs per hit." },
  ]},
  { cat: "content-marketing", title: "The Two-Hour Weekly Writing Habit That Actually Ships", excerpt: "A writing routine that produces consistent output without requiring superhuman discipline.", sections: [
    { h2: "Same time, same place", body: "Protect one 2-hour block weekly. Calendar it as a meeting with yourself. Defend it like you would a client meeting." },
    { h2: "Outline before draft", body: "First 20 minutes: outline. Next 60: draft. Last 20: edit. No writing during outline; no outlining during draft." },
    { h2: "Publish immediately", body: "End the session with publishing. Drafts that sit never ship. Rough and shipped beats polished and unshipped." },
  ]},
  { cat: "content-marketing", title: "The Research Phase: Where Every Great Article Is Actually Made", excerpt: "Most articles fail in research, not writing. Here's the research discipline that elevates everything after.", sections: [
    { h2: "The source stack", body: "3 primary sources (interviews), 2 authoritative reports, 1 contrarian POV. Any less and the piece reads like rewrites of the top-ranking articles." },
    { h2: "Research-to-writing ratio", body: "1:1 for tactical posts, 2:1 for thought leadership, 3:1 for flagship guides. More research equals more defensible POV." },
    { h2: "Capturing quotes", body: "Lift specific phrases from interviews verbatim. Original phrasing is what makes the piece sound like someone actually thought about this." },
  ]},
  { cat: "content-marketing", title: "The Content Distribution Mistake 90% of Marketers Make", excerpt: "Publishing isn't distribution. Here's what most teams skip — and the distribution ratio that actually works.", sections: [
    { h2: "The 40/40/20 rule", body: "40% of time creating, 40% distributing, 20% measuring. Most teams do 80/15/5 and wonder why content doesn't work." },
    { h2: "Tactics that compound", body: "Internal linking, newsletter promotion, social breakdowns, sales enablement, community posts. Each piece of content lives 10x longer with distribution." },
    { h2: "The relaunch cycle", body: "Relaunch evergreen content every 6-12 months. New intro, updated data, fresh social push. It's cheaper than new content and often performs better." },
  ]},
  { cat: "content-marketing", title: "Why Data-Led Content Wins Long-Term (and Opinion-Led Wins Short-Term)", excerpt: "The tradeoff between two content styles and when to invest in each.", sections: [
    { h2: "Opinion-led wins short-term", body: "Easier to write, faster to publish, quicker engagement. Good for building voice and short-term reach." },
    { h2: "Data-led wins long-term", body: "Harder to produce, slower to publish, but earns citations, backlinks, and durable authority. Better for SEO and ranked content." },
    { h2: "The 70/30 mix", body: "Most content programs should be 70% opinion-led (maintaining voice) and 30% data-led (building moat). Pure opinion erodes; pure data is slow." },
  ]},
  { cat: "content-marketing", title: "The Repurposing Matrix We Hand Every New Client", excerpt: "One article, 18 derivative pieces. Here's our exact repurposing matrix.", sections: [
    { h2: "Vertical repurposing", body: "Blog → LinkedIn post → Twitter thread → YouTube video → podcast episode. Same content, different formats." },
    { h2: "Horizontal repurposing", body: "Main article → 5 standalone pieces (one per H2) → 10 social snippets (one per paragraph). Atomic content." },
    { h2: "Time repurposing", body: "Republish with new intro every 6-12 months. Add year to title. Refresh data. It's not duplicate if it's substantively updated." },
  ]},

  // === Web Design expansion ===
  { cat: "web-design", title: "Design Tokens: The Foundation Layer Most Teams Skip", excerpt: "What design tokens are, why they matter, and the minimal token system to ship.", sections: [
    { h2: "Tokens as contracts", body: "A token is a named value: --color-brand, --spacing-md, --font-body. Designers and engineers share the same names for the same values." },
    { h2: "Start with 3 categories", body: "Color, spacing, typography. Everything else is optional. A 40-token system covers 90% of needs." },
    { h2: "Tool-agnostic", body: "Figma variables + CSS custom properties + Tailwind config. Same names everywhere. Changes propagate without hunting." },
  ]},
  { cat: "web-design", title: "The Homepage Structure That Converts B2B Visitors", excerpt: "A homepage layout refined across 50+ B2B launches — and why every section earns its spot.", sections: [
    { h2: "Above the fold", body: "One-sentence value prop, concrete CTA, proof element (logo strip or metric). Nothing else. Three elements, zero scroll." },
    { h2: "Section 2: specificity", body: "Three specific pain points your product solves, framed as buyer questions. Avoid generic category claims." },
    { h2: "Section 3-5: product, proof, pricing", body: "Show the product (real UI screenshots), show proof (1-2 case studies), show pricing (or anchor CTA). Decision-ready." },
  ]},
  { cat: "web-design", title: "Why We Build With Server Components on Every New Site", excerpt: "The performance and DX wins of Next.js Server Components for marketing sites.", sections: [
    { h2: "Smaller bundles", body: "Ship less JavaScript. Pages load faster. LCP improves measurably. The default in 2026." },
    { h2: "Data fetching simplified", body: "Fetch in the component that needs it. No more prop drilling or useEffect for server data." },
    { h2: "When to opt out", body: "Interactive UI — forms, drawers, carousels — still need client components. Mix deliberately; don't server-component everything." },
  ]},
  { cat: "web-design", title: "The Pricing Page Patterns That Reliably Convert", excerpt: "Three pricing page structures we test against, and when each wins.", sections: [
    { h2: "The 3-tier with CTA", body: "Three vertical cards, middle one highlighted. Classic, still works for most SaaS." },
    { h2: "The slider pricing", body: "Calculator based on usage. Wins for consumption-priced products. Converts better than tiered for products with variable usage." },
    { h2: "The contact-us-for-enterprise", body: "Public pricing for self-serve tiers, 'contact sales' for enterprise. Qualifies leads automatically, avoids race-to-bottom pricing." },
  ]},
  { cat: "web-design", title: "Navigation: The Three-Tap Rule We Enforce", excerpt: "Why every page on your site should be reachable in three taps — and how to architect for that constraint.", sections: [
    { h2: "Information architecture first", body: "Map every page to a category before designing nav. Too many top-level links = unclear IA = confused users." },
    { h2: "Mega menu when needed", body: "Above 40 pages, mega menus are fine. Below, they're overkill. Simple horizontal nav until you outgrow it." },
    { h2: "Search as a backup", body: "If the nav can't surface it in 3 taps, search should. Invest in search UX on information-heavy sites." },
  ]},
  { cat: "web-design", title: "The Accessibility Checklist That Catches 80% of Issues", excerpt: "The high-leverage accessibility checks that eliminate most issues without hiring a specialist.", sections: [
    { h2: "Contrast and color", body: "WCAG AA contrast for all text. Color is never the only way to convey info. Run through WebAIM checker monthly." },
    { h2: "Keyboard navigation", body: "Tab through the whole site. Every CTA, every menu, every modal must work with keyboard alone." },
    { h2: "Alt text and labels", body: "Every image has meaningful alt text. Every form field has a label. Screen readers need both to make sense of the page." },
  ]},
  { cat: "web-design", title: "Dark Mode: Design Rules That Don't Look Like an Inverted Site", excerpt: "Why most dark modes look cheap — and the design rules that make a proper dark variant.", sections: [
    { h2: "Never pure black", body: "Use near-black (#0d0e13, #111827). Pure black creates halation around text on OLED screens." },
    { h2: "Desaturate images", body: "Photos look blown-out in dark mode. Reduce saturation 15-20% for dark-mode variants." },
    { h2: "Elevation via lighter surfaces", body: "Don't use shadows — light doesn't cast them convincingly on dark. Use lighter background tones to signal elevation." },
  ]},
  { cat: "web-design", title: "Why We Stopped Using Carousels on Marketing Sites", excerpt: "Carousels test poorly on nearly every metric. Here's the evidence and what to use instead.", sections: [
    { h2: "What the data shows", body: "Slide 1 gets 80% of clicks. Slides 2+ get 1-2% each. You're essentially making 4 of every 5 visitors see your worst content." },
    { h2: "What to use instead", body: "A well-designed grid, a tab component, or a vertical list. All outperform carousels on click-through and time-on-page." },
    { h2: "When carousels are OK", body: "Image galleries where the goal is visual browsing, not clicks. Otherwise — don't." },
  ]},
  { cat: "web-design", title: "The 404 Page That Recovers Traffic", excerpt: "A good 404 isn't just a dead-end. It's a second chance to convert the visitor.", sections: [
    { h2: "Three paths forward", body: "Search, popular pages, and a visible CTA. Dead-end 404s send visitors to competitors." },
    { h2: "Track 404s in analytics", body: "404 events in GA4 reveal broken internal links, broken external links, and content you should build. Most teams never look." },
    { h2: "Redirect intent fixes", body: "Regex-pattern redirect rules catch common typos and old URL patterns. A weekly review of top 404 URLs fixes most issues." },
  ]},
  { cat: "web-design", title: "The Blog Layout Decisions That Improve Reading Completion", excerpt: "Layout choices proven to lift time-on-page and scroll depth for long-form content.", sections: [
    { h2: "Measure line length", body: "60-80 characters per line. Wider breaks readability; narrower creates too-frequent eye returns." },
    { h2: "Contrast and font size", body: "18px minimum on body text. 1.7 line-height. Dark text on off-white background. Boring, but it works." },
    { h2: "Progress indicators", body: "Scroll progress bar, reading time estimate, and table of contents on long posts. Makes long content feel shorter." },
  ]},

  // === Video Production expansion ===
  { cat: "video-production", title: "The Pre-Production Doc That Saves Every Shoot", excerpt: "The one-page pre-pro doc we use for every shoot that eliminates 90% of day-of friction.", sections: [
    { h2: "Shot list with time codes", body: "Every shot mapped to approximate start time. Not detailed storyboard — just 'shot 3: close-up of product, 2 min'." },
    { h2: "Gear checklist", body: "Camera, lenses, audio, lights, memory cards with capacity. Reviewed day before, not day of." },
    { h2: "Contact sheet", body: "Everyone's phone number, call time, location. Day-of chaos is usually someone being late or lost." },
  ]},
  { cat: "video-production", title: "iPhone Cinematography: The 5 Settings That Change Everything", excerpt: "Specific iPhone camera settings that dramatically improve the perceived quality of your shoots.", sections: [
    { h2: "Lock AE/AF", body: "Tap and hold to lock exposure and focus. Prevents the auto-shift that makes iPhone footage look amateurish." },
    { h2: "Cinematic mode selectively", body: "Only when the subject-background contrast is clear. In busy backgrounds it looks glitchy." },
    { h2: "Shoot in ProRes", body: "iPhone 13 Pro and up. Gives color grading latitude that rec.709 doesn't. Worth the storage." },
  ]},
  { cat: "video-production", title: "The Interview Setup That Looks Professional", excerpt: "A bare-minimum interview setup that looks like a studio shoot when done right.", sections: [
    { h2: "Window light + fill", body: "Subject faces a large window. Small LED fill on opposite side to balance shadows. That's the entire lighting setup." },
    { h2: "Simple background", body: "3+ feet of separation between subject and background. Shallow depth blurs it. Plain wall, bookshelf, or plant." },
    { h2: "Lav mic over shotgun", body: "Clip-on lav gets clean audio. Shotgun requires positioning expertise most teams don't have." },
  ]},
  { cat: "video-production", title: "Motion Graphics in After Effects: The 4 Effects We Use in 90% of Work", excerpt: "Not every effect needs a custom animation. These four cover most needs.", sections: [
    { h2: "Basic text entry with ease", body: "Fade + slight upward motion with exponential ease. Used on 80% of text cards. Never feels wrong." },
    { h2: "Draw-on lines", body: "Trim paths with ease. For underlines, callouts, diagrams. Small detail that reads as professional motion." },
    { h2: "Scale on emphasis", body: "Key moments need a small scale-up (1.05x) back to 1.0. Adds weight to important words without being flashy." },
    { h2: "Camera shake restraint", body: "Used sparingly, adds energy. Used constantly, looks cheap. Save it for specific moments of intensity." },
  ]},
  { cat: "video-production", title: "The Case for Shooting Ugly Then Cleaning It Up", excerpt: "Why production value should come in post — not on set.", sections: [
    { h2: "Run-and-gun capture", body: "Lock exposure, ignore composition perfection, capture lots of coverage. Messy-but-plentiful beats tidy-but-thin." },
    { h2: "Fix in post", body: "Color correction, stabilization, and crop-to-reframe all work. Capture the performance first; fix the technicals after." },
    { h2: "Where this falls apart", body: "Audio. Fix-in-post fails for bad audio. Spend the extra 3 minutes on audio setup — it's the one thing you can't rescue later." },
  ]},
  { cat: "video-production", title: "YouTube Thumbnail Design: The 3 Rules That Lift CTR", excerpt: "What separates thumbnails that earn clicks from ones that don't.", sections: [
    { h2: "Face + expression", body: "Big face, clear emotion. Eyes roughly at thumbnail center. Faces out-perform objects nearly always." },
    { h2: "Maximum 3 words", body: "Thumbnail text should be readable at small sizes. 3 words, big font, high contrast." },
    { h2: "Red or yellow accent", body: "Accent colors that pop against YouTube's white/dark backgrounds. Consistent accent color across your channel builds recognition." },
  ]},
  { cat: "video-production", title: "The Pacing Principle That Holds Retention", excerpt: "How to pace video so viewers don't scroll — a heuristic refined across hundreds of edits.", sections: [
    { h2: "Something new every 3 seconds", body: "New visual, new angle, new on-screen text, new idea. Static frames for more than 3 seconds = scroll." },
    { h2: "Front-load value", body: "Deliver the payoff early. Modern viewers don't tolerate setup. Open with insight, explain after." },
    { h2: "Cut the breath", body: "Remove pauses between sentences. Remove inhales. The resulting density feels energetic and skimmable." },
  ]},
  { cat: "video-production", title: "Why Every Brand Needs a 60-Second Brand Film", excerpt: "The single piece of video most brands should produce first — and why it pays off across channels.", sections: [
    { h2: "What it looks like", body: "60s. Mix of brand-world footage and talking-head founder. Ends with one clear value claim and a simple CTA." },
    { h2: "Where it lives", body: "Homepage hero video, pitch deck, paid ads, pre-roll on other videos. One asset, ten deployments." },
    { h2: "Budget reality", body: "$3-10k well spent. Can be shot in a day. Save cinematic ambition for later; get an asset live first." },
  ]},
  { cat: "video-production", title: "The Testimonial Video Mistakes We Stopped Making", excerpt: "What we learned shooting dozens of testimonials — and why the obvious approach usually fails.", sections: [
    { h2: "Don't ask 'why do you love us'", body: "Produces canned answers. Ask specific questions: 'What was the problem the week before you hired us?'" },
    { h2: "Capture contradictions", body: "The best testimonial moments are mildly critical. 'It wasn't perfect, but...' feels real. Pure praise reads like a script." },
    { h2: "Cut to 45 seconds", body: "Under a minute. One moment, one lesson, one recommendation. Longer testimonials don't get watched." },
  ]},

  // === Brand Design expansion ===
  { cat: "brand-design", title: "The Rebrand Communication Plan That Prevents Internal Chaos", excerpt: "How to roll out a rebrand internally so teams align — and clients don't get mixed signals.", sections: [
    { h2: "30-day pre-launch", body: "Internal preview with leadership. Gather feedback. Fix glaring issues before external announcement." },
    { h2: "Launch day", body: "All-hands meeting, FAQ document, swag delivered. Make it an event internally — people champion what they're part of." },
    { h2: "60-day post-launch", body: "Audit every touchpoint. Legacy materials, email signatures, social avatars. The brand inconsistencies confuse audiences." },
  ]},
  { cat: "brand-design", title: "Typography Choices That Signal Premium", excerpt: "How typography decisions alone move perception of quality — and the premium typography patterns that work.", sections: [
    { h2: "Mix serif with sans", body: "Serif display + sans body is a luxury pattern. The contrast itself signals care." },
    { h2: "Generous letter-spacing on caps", body: "ALL-CAPS labels need 0.1-0.2em letter-spacing. Default tight spacing looks cheap." },
    { h2: "Heavy display contrast", body: "Extra-bold display weight next to regular body creates hierarchy. Two weights on one font family reads as deliberate." },
  ]},
  { cat: "brand-design", title: "Logo Design: Why Most Marks Are Too Complicated", excerpt: "The lesson behind why great logos look simple — and how to simplify without losing meaning.", sections: [
    { h2: "Draw it at 16px first", body: "If it's not recognizable at favicon size, it's too complicated. Every mark should read at that scale." },
    { h2: "One memorable shape", body: "One strong geometric idea that someone can sketch from memory after 30 seconds of looking." },
    { h2: "No literal translations", body: "Don't combine an abstract symbol with the literal meaning of the company name. Pick one. Subtle symbolism beats dual reference." },
  ]},
  { cat: "brand-design", title: "The Brand Sprint We Run Before Every Identity Project", excerpt: "A 3-day brand sprint format that aligns stakeholders and eliminates post-launch strategy drift.", sections: [
    { h2: "Day 1: define", body: "Customers, values, personality. Narrow to a single sentence each. No consensus — just a document of disagreement." },
    { h2: "Day 2: decide", body: "Leadership reviews the sentences. Picks one. That's the brand direction, locked. No revisions during design." },
    { h2: "Day 3: extend", body: "Voice examples, visual mood, naming exercises. Give design team the compass before they start making maps." },
  ]},
  { cat: "brand-design", title: "Color Systems That Scale: Beyond the Primary Palette", excerpt: "Most brand color systems stop at 'brand red + black + white'. Here's the full system you need.", sections: [
    { h2: "Primary + secondary + accents", body: "1 brand primary, 2-3 supporting brand colors, 4-6 functional colors (success, error, warning, info, neutral)." },
    { h2: "Tints and shades", body: "Each color has 5-9 tints. Designers need this to build hierarchy. A palette with only the primary is unusable." },
    { h2: "Document meaning", body: "Document where each color applies. 'Accent blue used only for data viz.' Without rules, the system becomes chaos in 6 months." },
  ]},
  { cat: "brand-design", title: "Distinctive Brand Assets: How Long They Take to Build", excerpt: "Realistic timelines for building distinctive brand equity — not the hype-driven promises.", sections: [
    { h2: "Year 1: introduce", body: "Deploy the asset everywhere with consistency. Audience becomes aware. No measurable brand recall yet — that's expected." },
    { h2: "Year 2-3: stabilize", body: "Audience begins to associate the asset with your brand. Measurable unprompted recall starts emerging in surveys." },
    { h2: "Year 4+: compound", body: "The asset becomes the brand. Measurable preference, pricing power, and earned media all tick up. That's the payoff." },
  ]},
  { cat: "brand-design", title: "Packaging Design for DTC: What Matters and What Doesn't", excerpt: "Where packaging budget moves conversion vs where it's pure vanity.", sections: [
    { h2: "Unboxing > outside design", body: "Inside is where buyer emotion happens. Invest here. Outside needs to survive shipping and convey basic category — that's it." },
    { h2: "Sustainable > flashy", body: "Recycled, recyclable, minimal. Customers increasingly care. 'Plastic-free' earns more goodwill than 'metallic foil'." },
    { h2: "Branded insert card", body: "Thank-you card with QR code to review request. Converts 15-30% of package openers into reviews. Best 10-cent ROI in DTC." },
  ]},
  { cat: "brand-design", title: "The 5-Sentence Positioning Exercise", excerpt: "A fast positioning exercise we run before any brand project — gets to the strategic core in 30 minutes.", sections: [
    { h2: "The five sentences", body: "1) We are [category]. 2) For [specific customer]. 3) Who struggles with [problem]. 4) We provide [solution]. 5) Unlike [alternative], we [differentiation]." },
    { h2: "Force specificity", body: "Vague answers get rejected. 'Small businesses' isn't specific; 'solo consultants billing $5-20k/month' is. Push until it's concrete." },
    { h2: "The document lives", body: "Print it. Tape it to the wall. Every creative, every piece of copy, every strategic decision references it going forward." },
  ]},
  { cat: "brand-design", title: "Brand Photography Direction That Actually Gets Followed", excerpt: "Photography direction documents that photographers use vs the 40-slide ones they ignore.", sections: [
    { h2: "One page, 6 reference images", body: "A single page with 6 examples of 'yes' and 6 of 'no' covers 80% of direction. Longer docs get ignored." },
    { h2: "Specific rules", body: "Three concrete rules: 'subjects always looking into frame', 'natural light only', 'no smiles to camera'. Photographers can execute rules." },
    { h2: "Usage context", body: "Show where photos will be used. A portrait for Instagram vs a homepage hero need different framing. Context changes craft decisions." },
  ]},
  { cat: "brand-design", title: "Why Internal Brand Culture Shows Up in External Brand", excerpt: "The reality that customer-facing brand can't be better than the internal culture that produces it.", sections: [
    { h2: "Brand voice originates inside", body: "How teams talk to each other in Slack becomes how the brand speaks. You can't fake warmth externally if the company is cold internally." },
    { h2: "Values show up on video", body: "A team that genuinely cares makes better testimonial subjects, founder content, behind-the-scenes. The absence of this is obvious." },
    { h2: "Fix inside first", body: "If your brand feels off and you don't know why, audit internal culture. External brand is a symptom, culture is the cause." },
  ]},

  // === Email & CRM expansion ===
  { cat: "email-crm", title: "The Welcome Email That's Underperforming Right Now", excerpt: "If your welcome email is a discount code, you're leaving money on the table. Here's the structure that compounds.", sections: [
    { h2: "Email 1: the story", body: "Founder story, why the brand exists, what the buyer should expect. No offer. Builds rapport." },
    { h2: "Email 2: the how", body: "How to use the product. Best practices, tips, hacks. Establishes the expertise asymmetry customers love." },
    { h2: "Email 3: the offer", body: "Welcome discount or bundle. By now they trust you. Conversion is 2-3x higher than if you led with the discount." },
  ]},
  { cat: "email-crm", title: "Winback Campaigns: The Sequence That Revives 12% of Dormant Customers", excerpt: "A specific winback flow we've tested extensively — and the numbers it reliably produces.", sections: [
    { h2: "Day 60: the check-in", body: "No offer. 'Hey, we noticed you haven't been around. Anything we could improve?' Invites feedback and response." },
    { h2: "Day 65: the resource", body: "Share a genuinely useful resource related to their last purchase. Reminds them of value without pitching." },
    { h2: "Day 75: the incentive", body: "One-time-use, 20% discount. Creates urgency. 8-12% of dormant customers reactivate on average." },
  ]},
  { cat: "email-crm", title: "The HubSpot Lifecycle Cleanup We Run Every Quarter", excerpt: "A repeatable HubSpot hygiene routine that prevents database bloat and reporting drift.", sections: [
    { h2: "Contact hygiene", body: "Identify and merge duplicates. Sunset inactive contacts (no engagement 180+ days). Archive old manual lists." },
    { h2: "Lifecycle stage audits", body: "Run reports on contacts stuck at 'MQL' for 90+ days. Manually progress or disqualify. Prevents reporting rot." },
    { h2: "Deal stage cleanup", body: "Move closed-lost older than 180 days out of active pipelines. Report accuracy depends on this." },
  ]},
  { cat: "email-crm", title: "Subject Lines: What Actually Moves Open Rates in the Apple MPP Era", excerpt: "Open rates are noisy now. Here's what we optimize for instead — and the subject line patterns that still work.", sections: [
    { h2: "Optimize for click, not open", body: "Opens are inflated by prefetch. Click-through on subject line is the real metric. Test for click, not open." },
    { h2: "Specificity wins", body: "'New feature: bulk editing' beats 'Check out what's new'. Specific subjects survive the distrust of Apple's prefetched opens." },
    { h2: "Curiosity with payoff", body: "Curiosity subjects work if the email delivers. Don't misrepresent — list fatigue from clickbait subjects kills deliverability." },
  ]},
  { cat: "email-crm", title: "The SMS Welcome Flow That Doubled Our Email List Growth", excerpt: "Using SMS as the on-ramp to email — surprisingly effective for growing engaged lists.", sections: [
    { h2: "Opt-in with a specific ask", body: "SMS for exclusive early-access. Low-ask, high-intent opt-in. Converts 4-7% of site visitors vs 0.5-1% for generic 'newsletter' opt-ins." },
    { h2: "Flow includes email capture", body: "Second SMS: 'Want the detailed version? Drop your email.' 30-40% convert. You've grown two channels from one opt-in." },
    { h2: "Retention 6x higher", body: "Dual-channel subscribers have 6x higher LTV than single-channel. Worth the work to cross-collect." },
  ]},
  { cat: "email-crm", title: "Why We Stopped Using Welcome Discounts as Our First Touch", excerpt: "The counter-intuitive finding: leading with a discount hurts long-term customer value.", sections: [
    { h2: "Discount-first attracts discount-seekers", body: "Customers who join for a discount stay for discounts. LTV is 30-50% lower than customers who join for the brand." },
    { h2: "Alternative hooks", body: "Early access, founder story, free guide, 'be the first to know' list. All outperform discount-first on long-term value." },
    { h2: "Discount later, not first", body: "Offer the discount at email 3-4. By then they're in the brand. Conversion is higher and customer quality is better." },
  ]},
  { cat: "email-crm", title: "The VIP Segment Structure That Keeps High-LTV Customers", excerpt: "How we structure VIP programs that retain — not the generic tier-and-points model.", sections: [
    { h2: "Access over discount", body: "VIPs get early access to new products, exclusive bundles, direct customer service. Not steeper discounts." },
    { h2: "Personal communication", body: "Real human from the brand emails VIPs quarterly. Not automated. 30 customers at a time, 2 hours of founder's time per quarter." },
    { h2: "The unsubscribe never happens", body: "Well-run VIP segments see essentially zero unsubscribes. The unsubscribe button goes unused because nothing's annoying." },
  ]},
  { cat: "email-crm", title: "Email Design in 2026: What's Worth Fighting For", excerpt: "Design battles worth waging in email vs ones where the ROI doesn't justify the effort.", sections: [
    { h2: "Worth it: mobile-first", body: "80%+ of opens are mobile. Single-column, large tap targets, readable at glance. Design starts mobile." },
    { h2: "Worth it: dark-mode compatibility", body: "Black text on white backgrounds breaks in Gmail dark mode. Use PNG logos with transparent backgrounds. Test in both modes." },
    { h2: "Not worth it: advanced interactivity", body: "AMP email, interactive carousels, accordions. Inconsistent support, maintenance nightmare. Simple hierarchical email wins." },
  ]},
  { cat: "email-crm", title: "The Post-Purchase Flow That Actually Drives Second Purchases", excerpt: "A post-purchase flow structure refined across dozens of DTC engagements.", sections: [
    { h2: "Email 1: thank-you + tracking", body: "Day 0. Simple thanks + tracking link. No upsell. Build trust first." },
    { h2: "Email 2: how-to-use", body: "Day 3. Product tips, best practices, community links. Make them successful with what they bought." },
    { h2: "Email 3: complement", body: "Day 14. Recommend a specific complement to their purchase. 8-15% convert. Beats generic 'you might also like'." },
  ]},
  { cat: "email-crm", title: "Deliverability: The Hidden Metrics Your ESP Hides", excerpt: "What your ESP dashboard doesn't tell you about deliverability — and where to look instead.", sections: [
    { h2: "Google Postmaster Tools", body: "Free, underused. Shows Gmail-specific spam rates, reputation, and authentication. If you email to Gmail, this is non-negotiable." },
    { h2: "Seed-list testing", body: "GlockApps or MailGenius. Sends test emails to seed addresses across providers. Reveals inbox vs spam placement." },
    { h2: "Domain reputation monitoring", body: "Ahrefs or Talos Intelligence for domain reputation. A sudden dip indicates a problem worth investigating fast." },
  ]},

  // === Marketing Platforms expansion ===
  { cat: "marketing-platforms", title: "Klaviyo vs Mailchimp vs Customer.io: When Each Wins", excerpt: "Three platforms, three different strengths. The real criteria for choosing.", sections: [
    { h2: "Klaviyo: DTC ecommerce", body: "Best Shopify integration, strongest flow builder, biggest ecosystem of pre-built templates. For DTC, it's the default." },
    { h2: "Mailchimp: SMB and creators", body: "Cheapest, easiest setup, best for newsletters and very small ecommerce. Graduates to Klaviyo above $5k/month revenue." },
    { h2: "Customer.io: B2B SaaS", body: "Best for event-based, API-driven messaging. Trigger emails off product behavior at scale. Harder setup, better for technical products." },
  ]},
  { cat: "marketing-platforms", title: "The CDP Question: When You Actually Need One", excerpt: "CDPs are oversold. Here's the clear criteria for whether your business actually needs one.", sections: [
    { h2: "You don't need a CDP if", body: "Single source of customer data, under 100k contacts, minimal cross-channel complexity. A well-run CRM is enough." },
    { h2: "You need a CDP if", body: "Multiple product lines, offline + online customer journeys, real-time personalization requirements, 500k+ contacts." },
    { h2: "Good CDP candidates", body: "Segment (straightforward), RudderStack (developer-friendly), Tealium (enterprise). Match the complexity of your stack." },
  ]},
  { cat: "marketing-platforms", title: "The GTM Server-Side Migration: 4 Weeks from Decision to Live", excerpt: "A realistic timeline and checklist for moving to server-side Google Tag Manager.", sections: [
    { h2: "Week 1: plan and provision", body: "Document current events, map to server-side equivalents, provision Stape container or self-hosted. Get credentials ready." },
    { h2: "Weeks 2-3: migrate events", body: "Move conversion events first. Validate in Events Manager. Then product events. Then everything else." },
    { h2: "Week 4: monitor and tune", body: "Run in parallel with client-side for 2 weeks. Reconcile data. Tune consent handling. Then cut over fully." },
  ]},
  { cat: "marketing-platforms", title: "Why We Don't Recommend Salesforce Marketing Cloud to Most Clients", excerpt: "SFMC is a powerful tool that's wrong for 80% of the businesses that buy it.", sections: [
    { h2: "The complexity tax", body: "Implementation takes 4-6 months. Requires specialized consultants. Ongoing operation needs dedicated admins." },
    { h2: "When it's right", body: "Fortune 500 with mature ops teams. Multi-brand, multi-region, multi-channel complexity. Below that, you're paying for power you'll never use." },
    { h2: "Cheaper alternatives", body: "HubSpot for $2k/month covers most mid-market needs. Pair with Klaviyo or Iterable if you need consumer-scale messaging." },
  ]},
  { cat: "marketing-platforms", title: "The MarTech Kill List: Tools Most Teams Can Eliminate Today", excerpt: "The tools most teams have licenses for but barely use — and what to replace them with.", sections: [
    { h2: "Redundant analytics tools", body: "If you have GA4, you probably don't need Mixpanel or Amplitude too. Pick one product analytics tool." },
    { h2: "Social schedulers", body: "Many teams have Buffer, Later, and Hootsuite. Pick one. Your native tools (Meta Business Suite) cover most needs anyway." },
    { h2: "Form builders", body: "HubSpot forms, Typeform, and Google Forms in one stack. Consolidate. The embeds are interchangeable." },
  ]},
  { cat: "marketing-platforms", title: "Attribution Platforms: Triple Whale vs Northbeam vs Hyros", excerpt: "The three major DTC attribution platforms — real differences and when each wins.", sections: [
    { h2: "Triple Whale: default for DTC", body: "Strong Shopify integration, approachable dashboards, reasonable price. Covers 90% of DTC attribution needs." },
    { h2: "Northbeam: for the data-minded", body: "Higher complexity, more customization, better methodology documentation. Worth it for brands with dedicated analytics teams." },
    { h2: "Hyros: for paid-ad-heavy", body: "Strongest at matching paid ad data to backend revenue. Expensive but ROI-positive for brands spending $50k+/month on paid." },
  ]},
  { cat: "marketing-platforms", title: "The Integration Stack for Solo Founders", excerpt: "A lightweight MarTech stack that lets solo operators run marketing without an ops team.", sections: [
    { h2: "Core: HubSpot Starter", body: "$20/month, CRM + basic email + forms. Covers most solo-founder needs. Don't over-buy; upgrade when you outgrow." },
    { h2: "Automation: Zapier or Make", body: "Wire HubSpot to Google Sheets, Calendly, Stripe, Typeform. No code needed. Most integrations pay for themselves the first month." },
    { h2: "Analytics: GA4 + Plausible", body: "GA4 for depth, Plausible for daily at-a-glance. $20/month total. Enough for 90% of solo-founder decision-making." },
  ]},
  { cat: "marketing-platforms", title: "The Single Source of Truth: Why Spreadsheets Still Matter", excerpt: "A counter to the platform-consolidation trend: spreadsheets are still the best single source of truth for many marketing orgs.", sections: [
    { h2: "Platforms lie to each other", body: "Every platform reports different numbers. One spreadsheet that aggregates is the only honest source of truth." },
    { h2: "The weekly aggregation", body: "Monday morning: 30 minutes to refresh a Google Sheet with last week's key metrics across platforms. The report the team actually trusts." },
    { h2: "What to aggregate", body: "Revenue by channel, spend by channel, unique orders, new customers, MER. Five metrics, weekly, for 12 months = the best dashboard most companies have." },
  ]},
  { cat: "marketing-platforms", title: "BigQuery for Marketers: What to Load and What to Skip", excerpt: "Not every team needs BigQuery. For those that do, what to load first and what to leave for later.", sections: [
    { h2: "Load first: GA4 export", body: "GA4's raw event-level export into BigQuery. Unlocks analysis the UI can't do. Required for any serious analytics team." },
    { h2: "Load second: ad platform data", body: "Meta, Google, TikTok via Fivetran or Stitch. Cross-platform spend analysis becomes possible." },
    { h2: "Load third: CRM", body: "Contacts, deals, revenue. Now you can connect marketing activity to business outcomes with SQL." },
  ]},
  { cat: "marketing-platforms", title: "Zapier at Scale: When to Graduate to n8n or Make", excerpt: "Zapier is perfect until it isn't. The signals it's time to move to a more capable platform.", sections: [
    { h2: "Signal: cost over $500/month", body: "Zapier's per-task pricing scales fast. Above $500/month, alternatives become obviously cheaper." },
    { h2: "Signal: multi-step complexity", body: "Zaps with 8+ steps, branching logic, or error handling work better in n8n or Make. Less fragile, more debuggable." },
    { h2: "Staying on Zapier", body: "Under $500/month, under 5 steps, non-critical workflows. Zapier's simplicity beats alternatives' power." },
  ]},

  // === AI Marketing expansion ===
  { cat: "ai-marketing", title: "The 5-Minute Claude Workflow for Content Refresh", excerpt: "A specific Claude prompt sequence we use to refresh underperforming content in minutes instead of hours.", sections: [
    { h2: "Step 1: analysis", body: "Feed Claude the current article + top 3 ranking competitors. Ask for a gap analysis. 2 minutes, specific actionable gaps." },
    { h2: "Step 2: outline", body: "Claude produces a refreshed outline with recommended additions. 2 more minutes. Editor approves or revises." },
    { h2: "Step 3: draft additions", body: "Claude drafts the gap sections. 1 minute. Editor polishes. Publish. 20-40% traffic lifts within 60 days are common." },
  ]},
  { cat: "ai-marketing", title: "Why ChatGPT Can't Write Your Website Copy", excerpt: "The specific failure modes of LLMs on marketing copy — and how to work around them.", sections: [
    { h2: "Generic category language", body: "LLMs average across millions of examples. The output is safe, generic, and sounds like every other site in your category." },
    { h2: "Missing emotional specificity", body: "Real marketing copy uses specific sensory or emotional language that LLMs smooth out. 'Fast' beats 'rapid performance'." },
    { h2: "The workaround", body: "Use LLMs for first drafts of utility copy (forms, CTAs, meta descriptions). Hand-write anything above the fold." },
  ]},
  { cat: "ai-marketing", title: "The AI Voice Doc: What Claude Needs to Write Like You", excerpt: "A structured voice document we feed to Claude to make AI-generated drafts match brand voice.", sections: [
    { h2: "5 do-write examples", body: "Five paragraphs of your best copy. Not generic style descriptions — actual examples the model can pattern-match." },
    { h2: "5 don't-write examples", body: "Five examples of writing that isn't you. Contrast sharpens the pattern for the model." },
    { h2: "10 vocabulary rules", body: "'Never use: utilize, leverage, optimize.' 'Always use: contractions, first person.' Specific word-level rules land better than style adjectives." },
  ]},
  { cat: "ai-marketing", title: "Fine-Tuning vs Prompting vs RAG: Which Marketing Use Case Needs Which", excerpt: "A practical decision framework for when each AI pattern is the right tool.", sections: [
    { h2: "Prompting alone wins when", body: "You need general-purpose output with brand voice. Simple, fast, cheap. 80% of marketing use cases fit here." },
    { h2: "RAG wins when", body: "You need the AI to reference specific documents (past campaigns, product specs, brand guidelines). Retrieves, then writes." },
    { h2: "Fine-tuning wins when", body: "You have 10,000+ examples and need consistent output at scale. Rare for marketing — mostly overkill." },
  ]},
  { cat: "ai-marketing", title: "AI for Market Research: What It Does Well, What It Gets Wrong", excerpt: "Where LLMs accelerate marketing research and where they still produce shallow or misleading output.", sections: [
    { h2: "Great for", body: "Summarizing interviews, categorizing survey responses, extracting themes from long transcripts. Saves hours on data synthesis." },
    { h2: "Terrible for", body: "Primary research. LLMs don't know what you don't ask — they fill gaps with plausible-sounding averages." },
    { h2: "The hybrid approach", body: "Humans do the interviews. AI summarizes and themes them. Humans decide implications. Leveraged, not replaced." },
  ]},
  { cat: "ai-marketing", title: "Why We Run Every AI Output Through 3 Human Checks", excerpt: "The QA stack we enforce on every AI-assisted piece — and the classes of errors it catches.", sections: [
    { h2: "Check 1: factual accuracy", body: "LLMs hallucinate specific numbers and attributions. Editor verifies every factual claim." },
    { h2: "Check 2: brand voice", body: "Second reviewer confirms voice. Different from accuracy — output can be accurate but sound wrong." },
    { h2: "Check 3: SEO compliance", body: "Third reviewer checks meta tags, internal links, alt text. AI forgets these constantly." },
  ]},
  { cat: "ai-marketing", title: "Building a Claude-Powered Content Brief Generator", excerpt: "A specific workflow for automating content briefs — the kind of tactical AI deployment that actually pays off.", sections: [
    { h2: "Input: URL + target keyword", body: "Content editor pastes a URL and target keyword. That's the only input the tool needs." },
    { h2: "Output: structured brief", body: "Claude produces TL;DR, target audience, H2 outline, keyword cluster, internal links, and SME questions. Editor reviews and refines." },
    { h2: "Savings: 2 hours per brief", body: "At 20 briefs/month, that's 40 hours saved. One afternoon of setup pays back within a week." },
  ]},
  { cat: "ai-marketing", title: "The AI Translation Workflow for International SEO", excerpt: "How we use LLMs to scale content into 5+ languages without losing quality or ranking.", sections: [
    { h2: "Translate with Claude + context", body: "Give the model brand voice examples in the target language. Much better than raw translation. Review required, but heavy lift is done." },
    { h2: "Native-speaker QA", body: "Always have a native speaker review. LLMs produce grammatically correct output that natives recognize as 'off'. That kills local SEO." },
    { h2: "Cost savings are real", body: "Typical localization $0.15-0.30/word. LLM + editor $0.04-0.08/word. Same quality, a third the cost." },
  ]},
  { cat: "ai-marketing", title: "LLMs for SEO Research: The Prompts That Actually Help", excerpt: "Practical LLM prompts for SEO research — not the 'write me an article' junk.", sections: [
    { h2: "Topic clustering prompt", body: "'Here are 50 keywords. Group them into 5-8 semantic clusters and suggest a pillar topic for each.' Saves 2 hours of manual clustering." },
    { h2: "Gap analysis prompt", body: "'Here's my article and 3 competitors. What topics do they cover that I don't? Where am I thinner?' Direct, actionable output." },
    { h2: "FAQ generation prompt", body: "'List 20 questions a buyer of [product] might ask.' Generates real FAQ content plus new long-tail keyword ideas." },
  ]},
  { cat: "ai-marketing", title: "The AI Tools We Banned Internally (And Why)", excerpt: "Tools that look impressive in demos but create more problems than they solve in practice.", sections: [
    { h2: "Auto-blogging tools", body: "They generate indexable junk. Even if Google doesn't penalize, your brand looks cheap. Content quality is marketing quality." },
    { h2: "AI design 'tools'", body: "Logo generators, AI Figma alternatives. Output is generic and legally murky. Invest in real designers." },
    { h2: "AI outreach automation", body: "LinkedIn auto-messaging with AI-personalized lines. Recipients detect it. Tanks sender reputation fast." },
  ]},

  // === Ecommerce expansion ===
  { cat: "ecommerce", title: "The Black Friday Prep Calendar: 90 Days Out", excerpt: "The phased plan we run 90 days out from Black Friday — the shops that start in October always lose.", sections: [
    { h2: "Days 90-60: planning", body: "Offer strategy locked, inventory confirmed, creative briefs shipped to designers. All on paper before any production." },
    { h2: "Days 60-30: production", body: "Creative, landing pages, email flows, paid campaigns built. Test everything. First Black Friday is early November — that's your soft launch." },
    { h2: "Days 30-0: pre-promo", body: "VIP list gets early access. Email list gets build-up content. Budget ramps. Full launch Black Friday itself." },
  ]},
  { cat: "ecommerce", title: "Why Free Shipping Beats Every Other Promo Lever", excerpt: "A counter-intuitive but consistent finding: free shipping outperforms percentage discounts at equal dollar value.", sections: [
    { h2: "Psychology beats math", body: "$10 off an $80 order tests worse than free shipping on the same order. Even though the customer pays more in the 'free shipping' scenario sometimes." },
    { h2: "Threshold as AOV lever", body: "Free shipping over $X lifts AOV 15-30%. A powerful nudge that converts low-value carts into mid-value ones." },
    { h2: "When to avoid", body: "Ultra-low-margin products where shipping is a real chunk of margin. Then a percentage discount or tiered shipping is better." },
  ]},
  { cat: "ecommerce", title: "Returns Management: The UX Choice That Paid Off Huge", excerpt: "Why easier returns actually increase profit — and the specific choice that shifted our client's P&L.", sections: [
    { h2: "Fear of returns hurts conversion", body: "Hard return policies reduce upstream conversion more than they save on return costs. The math favors easy returns almost always." },
    { h2: "Our specific change", body: "Switched to 90-day returns, self-service return portal, free return shipping. Conversion up 12%. Return rate up 2%. Net profit up." },
    { h2: "What counts as self-service", body: "Customer initiates return online, prints label, drops off. No email chain, no CS interaction. Like Amazon." },
  ]},
  { cat: "ecommerce", title: "The Subscription Model That Actually Retains", excerpt: "Subscriptions are famously churny. Here's the model structure that bucks the trend.", sections: [
    { h2: "Skip, don't cancel", body: "Make skipping a month trivially easy. Cancelling is a last resort. Low-friction pauses retain most would-be churners." },
    { h2: "Surprise upgrade", body: "Every 3-6 months, surprise subscribers with an upgrade or bonus. Renewal decisions aren't rational — positive surprises swing them." },
    { h2: "Personalization from month 2", body: "By month 2, you know what they like. Customize their box. Generic subscription boxes die; personalized ones retain 3x longer." },
  ]},
  { cat: "ecommerce", title: "Product Page Elements Ranked by Conversion Impact", excerpt: "The specific PDP elements that move conversion — ranked by actual test data.", sections: [
    { h2: "1. Price and CTA visible", body: "Above the fold. Sounds obvious, constantly fails. The biggest single conversion lift any PDP test delivers." },
    { h2: "2. Size guide (for apparel) or specs (for everything)", body: "One-click accessible. Missing sizing info drives 20-30% of returns — or abandoned carts." },
    { h2: "3. Reviews above the fold", body: "Star rating and count near the price. Doesn't need to be full reviews — just social proof that it's been bought." },
  ]},
  { cat: "ecommerce", title: "Why We Turned Off Most Shopify Apps", excerpt: "Shopify app bloat is a silent performance killer. Here's our audit and what we removed.", sections: [
    { h2: "Measure what each app does", body: "App-by-app performance audit. Each app's JS injection costs milliseconds. 15 apps cost a full second." },
    { h2: "Native over app", body: "If Shopify has it natively, use native. Customer account pages, product reviews, shipping options — all native-sufficient now." },
    { h2: "What to keep", body: "Klaviyo, Gorgias, maybe Recharge. Everything else — audit quarterly, default to removing." },
  ]},
  { cat: "ecommerce", title: "The Cart Abandonment Flow That Converts at 7%", excerpt: "A specific 3-email abandonment sequence with tested timing and messaging.", sections: [
    { h2: "Email 1: within 30 min", body: "'You left this behind.' Product images, one-click back to cart. No offer. Just reminder. 4-5% conversion here." },
    { h2: "Email 2: 24 hours", body: "Social proof — reviews, similar customer quotes. No offer yet. 1-2% incremental conversion." },
    { h2: "Email 3: 72 hours", body: "The incentive. 10% off with expiration. 1-2% more. Total 7-9% abandonment recovery for well-executed flows." },
  ]},
  { cat: "ecommerce", title: "Merchandising on the Homepage: Category vs Product Hero", excerpt: "The eternal ecommerce debate settled with data: when to lead with categories vs products.", sections: [
    { h2: "Lead with categories when", body: "Wide catalog, varied buyer intent, first-time visitors. Category leads help visitors self-select the right path." },
    { h2: "Lead with products when", body: "Narrow catalog, brand-led shopping, repeat visitors. A hero product creates desire and shortens path to purchase." },
    { h2: "Rotating hero", body: "Best of both: one hero product tile + category grid below. Covers the majority of visitor intents." },
  ]},
  { cat: "ecommerce", title: "Cross-Sell vs Upsell vs Bundle: Where to Deploy Each", excerpt: "Three adjacent tactics, three different placement rules, three different outcomes.", sections: [
    { h2: "Cross-sell on PDP", body: "'Customers who bought this also bought X'. Natural on product pages. AOV lift 5-10%." },
    { h2: "Upsell in cart", body: "'Add this for $X more and get Y'. Cart page is where price comparison happens. AOV lift 10-15%." },
    { h2: "Bundle at post-purchase", body: "Thank-you page: 'Add a bundle for 20% off.' Removes friction (already decided to buy). 15-25% take rate." },
  ]},
  { cat: "ecommerce", title: "The DTC Economics Dashboard We Track Weekly", excerpt: "The five metrics we track weekly for DTC clients — and why most teams track the wrong ones.", sections: [
    { h2: "New customer CAC", body: "Spend / new customers. The bellwether metric. Track weekly. If it creeps up, dig in immediately." },
    { h2: "First-order margin", body: "Revenue - COGS - ad cost, first order only. If this is positive, you have a working model." },
    { h2: "60-day LTV", body: "Revenue from customers acquired 60 days ago, to date. Shortest LTV proxy that's actionable. Leading indicator of annual LTV." },
  ]},

  // === B2B Growth expansion ===
  { cat: "b2b-growth", title: "Cold Email Frameworks: The 4 Structures That Still Work", excerpt: "After analyzing 1,500+ cold emails, here are the patterns that still book meetings.", sections: [
    { h2: "The specific-insight email", body: "'I noticed [specific thing] about [their company]. Usually when that happens, [insight]. Would a 15-min call help?'" },
    { h2: "The trigger-event email", body: "'Saw [news/signal about their company]. We've worked with 3 similar companies. Would a 15-min call on [relevant topic] be useful?'" },
    { h2: "The curiosity email", body: "Very short, highly specific. 'Quick question about [their stack/category] — got 5 mins this week?' Works with a strong brand." },
    { h2: "The credibility email", body: "Lead with relevant social proof, then the ask. 'We helped [similar company] achieve [specific result]. Worth exploring for you?'" },
  ]},
  { cat: "b2b-growth", title: "Why We Killed Our MQL Metric", excerpt: "MQL became meaningless. Here's the replacement metric we use and why sales stopped complaining.", sections: [
    { h2: "The MQL problem", body: "MQL inflation. Marketing optimized for volume, sales rejected 80%. The handoff became adversarial." },
    { h2: "The replacement: SAL", body: "Sales Accepted Lead. Sales agrees the lead is real and pursuable. Immediate alignment between teams." },
    { h2: "How to run it", body: "Every lead flagged for sales gets reviewed within 24 hours. Accept or reject with reason. Feedback loops up to marketing within the week." },
  ]},
  { cat: "b2b-growth", title: "The 6-Touch ABM Sequence That Actually Converts", excerpt: "A specific 6-touch ABM sequence structure with touch, channel, and content for each.", sections: [
    { h2: "Touches 1-2: LinkedIn ads", body: "Warm up the account with 2 weeks of LinkedIn ads. Brand-level creative. Get the account aware, not converted." },
    { h2: "Touches 3-4: personalized email", body: "SDR sends personalized, specific outreach referencing the content they've been served." },
    { h2: "Touches 5-6: executive content", body: "Executive-sent email with a piece of thought leadership. Higher response rate from C-level inbox than SDR inbox." },
  ]},
  { cat: "b2b-growth", title: "Sales Enablement: The 3 Assets Every Rep Actually Uses", excerpt: "Despite the library of content most orgs build, reps use three things. Build these first.", sections: [
    { h2: "The one-pager", body: "One page, one flap, one message. Company, problem solved, three differentiators, three social proof points, CTA. Reps screen-share it on discovery calls." },
    { h2: "The pitch deck", body: "10-15 slides. Customizable title slide. Clear problem, clear solution, clear differentiation. Reps use this, not whatever marketing built in 2023." },
    { h2: "The ROI calculator", body: "Excel or interactive. Reps plug in prospect details, output quantified value. Shortens sales cycle by weeks." },
  ]},
  { cat: "b2b-growth", title: "How We Source B2B Leads Without Cold Outbound", excerpt: "The three organic channels producing most of our B2B pipeline — none involve cold outreach.", sections: [
    { h2: "Founder-led content", body: "Founder posts 3x weekly on LinkedIn for 6-12 months. Inbound deals start showing up around month 4. Compounds from there." },
    { h2: "Partnership referrals", body: "Five partner relationships, each driving 1-2 referrals monthly. Much higher close rate than cold, lower CAC than paid." },
    { h2: "Customer advocacy", body: "Happy customers who'll introduce you. One referral monthly from your top 10 customers = 120 qualified leads/year." },
  ]},
  { cat: "b2b-growth", title: "Why Most B2B Pricing Pages Are Wrong", excerpt: "Common B2B pricing page mistakes and what to do instead.", sections: [
    { h2: "'Contact us' for starter tier", body: "If you hide pricing for everything, you filter out self-service buyers. Publish pricing up to at least a mid-tier; gate only enterprise." },
    { h2: "Too many tiers", body: "3 tiers is the cognitive limit. 5 tiers cause decision paralysis. Pick the three most common customer shapes." },
    { h2: "Feature-list overload", body: "Each tier has 50 checkmarks. Nobody reads them. 5-7 differentiators per tier. Everything else goes in a detailed comparison page linked from pricing." },
  ]},
  { cat: "b2b-growth", title: "The Demo Conversion Trick That Lifted Our Close Rate", excerpt: "A specific framing shift in discovery calls that improved close rates.", sections: [
    { h2: "Ask for the objection", body: "Mid-demo: 'What would stop you from moving forward next week?' Surface hidden objections while you can still address them." },
    { h2: "Summarize and confirm", body: "End of demo: recap their goals, our fit, and the next step. 'Does this sound accurate?' creates the handshake before the CTA." },
    { h2: "Close with urgency", body: "Not fake urgency. Real reason to move now — their fiscal year, a launch date, a quarterly goal. Anchor urgency to their timeline, not yours." },
  ]},
  { cat: "b2b-growth", title: "Why LinkedIn Is the Only Social Channel B2B Should Obsess Over", excerpt: "After testing every B2B social channel, LinkedIn wins. Here's the cost-per-value analysis.", sections: [
    { h2: "LinkedIn wins on intent", body: "Users on LinkedIn are in work mode. They'll click a B2B ad mid-session. On Instagram or TikTok, they're in leisure mode. The intent tax is real." },
    { h2: "LinkedIn loses on cost", body: "LinkedIn CPCs are 3-5x Meta. But conversion from LinkedIn lead to SQL is 3-5x Meta for most B2B products. It's a wash — unless your product fits really well." },
    { h2: "The other channels", body: "TikTok for founder-led content. YouTube for deep technical. Twitter/Threads for industry POV. All secondary to LinkedIn." },
  ]},
  { cat: "b2b-growth", title: "The Webinar Format That Actually Drives Pipeline", excerpt: "Most webinars are expensive lead magnets. Here's the format that produces real pipeline.", sections: [
    { h2: "45 minutes, 15 mins Q&A", body: "No longer. 90-min webinars die. Keep it tight. Pre-submitted questions for Q&A so the end is strong." },
    { h2: "Co-host with customers, not internal", body: "Customer co-host is 2-3x more persuasive than internal-only. Pick a customer who'll say specific things, not just 'they're great'." },
    { h2: "Next-step CTA is specific", body: "Not 'learn more'. '15-minute call with [named expert] next Tuesday or Wednesday.' Specific next steps convert better." },
  ]},
  { cat: "b2b-growth", title: "Account Scoring vs Lead Scoring: Why We Switched", excerpt: "A shift in how we prioritize — accounts over leads — and what changed in pipeline performance.", sections: [
    { h2: "Why account scoring", body: "In B2B, decisions happen at the account level. Ten engaged people from one company matter more than 10 people from 10 different companies." },
    { h2: "What we score on", body: "Firmographic fit, account-level engagement (not individual), buyer signals (job changes, funding, tech stack). Individual lead scoring deprioritized." },
    { h2: "Handoff to sales", body: "Sales works accounts, not leads. When an account hits threshold, an AE gets the whole account with multiple contacts to engage." },
  ]},

  // === Analytics expansion ===
  { cat: "analytics", title: "The GTM Container Template We Clone for Every Client", excerpt: "A ready-to-deploy GTM container with the tags, triggers, and variables we consider baseline.", sections: [
    { h2: "The tag list", body: "GA4 config, GA4 events, Meta pixel, Meta CAPI, Google Ads conversions, LinkedIn Insight. That's the baseline for most accounts." },
    { h2: "The variables", body: "UTM parameters, page type, page path grouping, user role (if authed). These feed everything else. Set them up once." },
    { h2: "Trigger discipline", body: "Every tag has a documented trigger condition. No 'fires on all pages' unless truly necessary. Debug time drops 90%." },
  ]},
  { cat: "analytics", title: "GA4 Funnels: Where They Break and How to Fix", excerpt: "GA4 funnel reports are useful but finicky. The three common ways they break and the fixes.", sections: [
    { h2: "Event names inconsistent", body: "Funnel needs exact event names. Case sensitivity, trailing spaces, typos all break it. Naming audit fixes most issues." },
    { h2: "Missing event parameters", body: "Conversion events often need parameters (value, items, etc.). Missing parameters break downstream reporting even if the funnel step fires." },
    { h2: "Device/session attribution", body: "Cross-device journeys break funnels. Authenticate users where possible and use User-ID. Anonymous funnel analysis is increasingly noisy." },
  ]},
  { cat: "analytics", title: "The Analytics Report Executives Actually Read", excerpt: "A one-page monthly report format that gets read — unlike the 40-slide report that doesn't.", sections: [
    { h2: "North star + 3 supporting metrics", body: "Business north star at top. Three supporting metrics. Each with change vs. prior period and 3-line commentary." },
    { h2: "One chart", body: "One time-series chart, 12 weeks, of the north star metric. Trend is what executives parse. Everything else is detail." },
    { h2: "Three bullets of context", body: "What moved, why it moved, what we're doing about it. Leading the document, not buried in an appendix." },
  ]},
  { cat: "analytics", title: "Why We Stopped Reporting on Bounce Rate", excerpt: "Bounce rate was always a flawed metric. Here's why it's time to kill it in reports.", sections: [
    { h2: "GA4 redefined it", body: "GA4's bounce rate isn't UA's bounce rate. Reports mixing both are garbage. Pick one, stick to it." },
    { h2: "Engagement rate is the replacement", body: "GA4's engagement rate is more actionable. Sessions with 10+ seconds of engagement — a better signal of content quality." },
    { h2: "Use per-page, not site-wide", body: "Site-wide bounce/engagement is meaningless average. Page-level diagnosis is where value lives." },
  ]},
  { cat: "analytics", title: "UTMs: The Taxonomy That Survives 5 Years", excerpt: "Most UTM schemes collapse within a year. Here's the naming convention that scales.", sections: [
    { h2: "Standardize medium and source", body: "Use Google's standard values: cpc, email, social, organic. Don't invent. Reporting relies on consistency." },
    { h2: "Campaign naming is strict", body: "Format: [platform]-[objective]-[audience]-[creative]-[date]. 'meta-aware-lookalike-video-2026q2'. No spaces, no caps, no punctuation." },
    { h2: "Document and enforce", body: "Single doc. Every launched campaign gets UTMs reviewed. Standards decay the instant you stop enforcing." },
  ]},
  { cat: "analytics", title: "The Weekly 15-Minute Analytics Ritual", excerpt: "A focused 15-minute weekly analytics habit that catches issues early.", sections: [
    { h2: "Monday 9am", body: "15 minutes on one dashboard. Not 90 minutes on five dashboards. Focus beats comprehensiveness." },
    { h2: "Look for anomalies", body: "Any metric moving 20%+ in either direction. Investigate it before standup. Share the diagnosis, not the raw data." },
    { h2: "Document the surprise", body: "If something surprised you, write it down. After 3 months, those surprises teach you the business better than any course would." },
  ]},
  { cat: "analytics", title: "Identifying Data Quality Issues Before They Poison Decisions", excerpt: "The daily checks that catch data quality issues before they quietly corrupt weeks of analysis.", sections: [
    { h2: "Daily event volume monitoring", body: "Simple rule: if daily event volume is 30% off the 7-day average, investigate. Most tracking breakages show up here." },
    { h2: "Cross-source reconciliation", body: "GA4 says X orders. Shopify says Y orders. They're never identical. But if the gap widens suddenly, something broke." },
    { h2: "Session quality checks", body: "Random spot-check 5 sessions per day. If bot traffic or spam shows up, your reports are dirty." },
  ]},
  { cat: "analytics", title: "Looker Studio vs Tableau vs Power BI", excerpt: "Three dashboard platforms, three different use cases. How we match tool to need.", sections: [
    { h2: "Looker Studio: default", body: "Free, Google-native, easy to share. Right choice for 80% of marketing dashboards. Starts well, ceiling is fine." },
    { h2: "Tableau: analytics-heavy teams", body: "Best for teams that need serious data modeling, blend multiple sources, or do exploratory analysis. Worth the license for dedicated analysts." },
    { h2: "Power BI: Microsoft shops", body: "Use it if you're a Microsoft-heavy org. Integrations are deep, licenses often already paid. Otherwise Looker is the right choice." },
  ]},
  { cat: "analytics", title: "Cohort Analysis: The Report Every DTC Needs Monthly", excerpt: "Why cohort analysis is the single most important report for DTC — and the specific format we use.", sections: [
    { h2: "The monthly cohort matrix", body: "Rows are customer acquisition month. Columns are month 0, 1, 2, 3+ revenue. Shows whether new customers are improving or degrading." },
    { h2: "What good looks like", body: "Later cohorts should outperform earlier ones at the same age. If they don't, your acquisition channels are becoming less efficient." },
    { h2: "What to do if it worsens", body: "New cohorts underperforming usually means paid channels are pulling in lower-quality customers. Creative/audience intervention needed." },
  ]},
  { cat: "analytics", title: "Why Your GA4 Attribution Doesn't Match Facebook's Attribution", excerpt: "The structural reasons platforms and GA4 report different numbers — and which to trust when.", sections: [
    { h2: "Different windows, different models", body: "Meta's default is 7-day click. GA4's default is data-driven. They answer different questions and will never match." },
    { h2: "Which to trust", body: "Platform for platform decisions ('should I spend more on Meta?'). GA4 for cross-channel truth ('which channels contribute most?')." },
    { h2: "The weekly reconciliation", body: "Don't obsess over matching them. Reconcile at the business level — total revenue attributable, not platform-level overlaps." },
  ]},

  // === Local SEO expansion ===
  { cat: "local-seo", title: "The Google Business Profile Categories That Most Local Businesses Pick Wrong", excerpt: "Category choice is one of the biggest levers in local SEO — and the one most businesses get wrong.", sections: [
    { h2: "Primary category is everything", body: "Your primary category determines which map pack rankings you're even eligible for. Pick the most specific accurate category — not the broadest." },
    { h2: "Secondary categories", body: "Add up to 9 secondary categories, but only if genuinely accurate. Over-claiming categories triggers manual review and can suspend your profile." },
    { h2: "Reviewing quarterly", body: "Google adds new categories often. Review yours quarterly. 'General Contractor' might have been right in 2023 but 'Kitchen Remodeler' is more specific and converting now." },
  ]},
  { cat: "local-seo", title: "Geo-Modifier Content: How to Write Location Pages Google Loves", excerpt: "The writing pattern we use on location pages that reliably ranks without getting flagged for thin content.", sections: [
    { h2: "Lead with location specifics", body: "Not 'serving customers in [city]'. 'Our [city] team operates from [neighborhood], serving [specific landmarks/zones]'. Local detail signals legitimate local presence." },
    { h2: "Embed local evidence", body: "Google reviews specific to that location, photos with GPS data, staff profiles with local ties. Google's algorithm parses these signals." },
    { h2: "Include local-specific FAQs", body: "'How long does installation take in [city]?' 'Do you service outside [county]?' Specific FAQs establish local expertise." },
  ]},
  { cat: "local-seo", title: "Why Your Citation Count Doesn't Matter Anymore", excerpt: "Old SEO advice said build 50 citations. Now the bar is fewer but cleaner. Here's what changed.", sections: [
    { h2: "Quality over quantity", body: "20 accurate citations on authoritative directories beat 100 on random low-quality ones. Google's algorithm now weights citation authority heavily." },
    { h2: "The priority list", body: "Google Business Profile, Facebook, Yelp, Bing Places, Apple Maps, industry-specific (Houzz for home services, Tripadvisor for hospitality). That's 80% of citation value." },
    { h2: "Consistency is non-negotiable", body: "Name, address, phone must match exactly across all citations. One typo and the citation either gets discounted or actively hurts." },
  ]},
  { cat: "local-seo", title: "Review Response Templates That Convert", excerpt: "Three response templates — for positive, neutral, and negative reviews — that work as marketing, not just service recovery.", sections: [
    { h2: "Positive review response", body: "Thank by name, reference the specific service/product, invite back. 'Sarah, thanks for noting the kitchen installation. Looking forward to helping with Phase 2 next month!'" },
    { h2: "Neutral (3-4 star) response", body: "Thank, acknowledge the gap, offer to make it right. Show reading this review is thoughtful service recovery, not generic." },
    { h2: "Negative review response", body: "Never defensive. Apologize for their experience, offer direct contact (email or phone), don't rehash specifics publicly. Future readers judge responses more than reviews." },
  ]},
  { cat: "local-seo", title: "The Google Posts Strategy That Drives Actual Clicks", excerpt: "Google Posts get nearly zero engagement if done wrong. Here's the cadence and content that moves the needle.", sections: [
    { h2: "Weekly post, event type", body: "Weekly event posts (even if just 'open this weekend for consultations') keep your profile fresh. Event posts outperform regular updates." },
    { h2: "Include photos", body: "Posts with photos get 2-3x more views. Not stock — real photos of your location, products, or staff." },
    { h2: "Clear CTA every post", body: "'Book now', 'Get directions', 'Call'. Button-level CTA matters. 'Learn more' is a dead link." },
  ]},
  { cat: "local-seo", title: "Hyperlocal Backlinks: The Underrated Local SEO Lever", excerpt: "Local links from community-relevant sources lift local rankings faster than generic DR backlinks.", sections: [
    { h2: "Local press mentions", body: "Local newspaper, community magazine, city business journal. Each link is worth 10 from a generic national site for local pack rankings." },
    { h2: "Sponsor local events", body: "Youth sports, charity runs, chamber of commerce. Sponsorship pages link out. Cheap backlinks that signal local presence." },
    { h2: "Join local business associations", body: "BIA, chamber of commerce, industry-specific local trade groups. Member directories link to your site and carry local authority." },
  ]},
  { cat: "local-seo", title: "Service Area Businesses: The GBP Trap Most Fall Into", excerpt: "Service-area businesses (like plumbers, contractors) have a specific GBP issue that limits rankings. Here's the fix.", sections: [
    { h2: "Don't list a fake address", body: "Using your home address or a coworking space address as your business location can trigger suspension. Google's algorithm detects this." },
    { h2: "Hide address, list service areas", body: "Set up as 'service-area business' in GBP settings. Hide the address, list 10-20 specific cities/zip codes you serve." },
    { h2: "The tradeoff", body: "Service-area businesses rank slightly lower in map pack but higher in local searches without proximity bias. Right tradeoff for most mobile service businesses." },
  ]},
  { cat: "local-seo", title: "Location Landing Pages: The Build-Once-Use-Forever Template", excerpt: "A repeatable template for location landing pages that scales across multi-location brands.", sections: [
    { h2: "Hero: address, hours, phone, CTA", body: "Above the fold. The three things mobile visitors need. Nothing else." },
    { h2: "Middle: services, photos, staff, reviews", body: "Services offered at this location (some services may vary). Photos of this specific location. Staff profiles with local ties. Recent reviews." },
    { h2: "Footer: map, directions, contact form", body: "Embedded Google Map, driving directions from key landmarks, contact form specific to this location." },
  ]},
  { cat: "local-seo", title: "Why Schema Is Extra Important for Local SEO", excerpt: "Local search results are where structured data shows up most visibly. Here's the schema stack that matters.", sections: [
    { h2: "LocalBusiness schema is the foundation", body: "Every location page. Include sameAs (linking to GBP, social profiles). Include geo coordinates. Include openingHours structured markup." },
    { h2: "Review schema", body: "Aggregate review schema on the page. Reviews scrolling rich result only shows up if schema is clean." },
    { h2: "BreadcrumbList schema", body: "Especially for multi-location businesses. Helps Google understand structure and can enable breadcrumb display in SERPs." },
  ]},
  { cat: "local-seo", title: "The Multi-Location SEO Playbook: Scaling Without Thin Content", excerpt: "How to scale SEO across 20, 50, or 200 locations without triggering duplicate content penalties.", sections: [
    { h2: "80/20 content rule", body: "80% of each location page is templated (service descriptions, FAQs). 20% is unique to that location (photos, reviews, staff, local content)." },
    { h2: "Local reviews are free uniqueness", body: "Embed live Google reviews on each location page. Different reviews on different pages = unique content without writing it." },
    { h2: "Centralized updates", body: "Service descriptions change centrally. Local content stays editable by location managers. Most brands over-index on central control and under-invest in local voice." },
  ]},

  // === CRO expansion ===
  { cat: "cro", title: "The CRO Research Phase: What We Do Before Any Test", excerpt: "Most CRO programs start with tests. Ours starts with research. Here's the 2-week research sprint we run first.", sections: [
    { h2: "Week 1: quantitative", body: "Analytics deep dive, funnel reports, heatmap analysis of top 10 pages, session recording review. Map where people drop off and why." },
    { h2: "Week 2: qualitative", body: "10 user tests, 50 poll responses, 5 customer interviews, 5 support ticket reviews. Qualitative explains the quantitative." },
    { h2: "Output: experiment backlog", body: "Ranked list of 30-50 tests prioritized by estimated impact, effort, and data confidence. That's the CRO program for the next year." },
  ]},
  { cat: "cro", title: "Why Button Color Tests Should Be Banned", excerpt: "Button color testing is CRO's most famous, most meaningless exercise. Here's what to test instead.", sections: [
    { h2: "Button color lift is noise", body: "Real-world tests of button color rarely show statistically significant lifts. The ones that do are usually sample-size artifacts." },
    { h2: "Button copy beats color", body: "'Start free trial' vs 'Get started now' produces measurably different results. Copy is a real lever; color isn't." },
    { h2: "Button location beats copy", body: "Moving a CTA from below to above the fold, or adding a sticky mobile CTA, produces 2-3x the lift of any copy test." },
  ]},
  { cat: "cro", title: "The Mobile-Specific Tests That Win 80% of the Time", excerpt: "Three mobile CRO tests that reliably produce lift across industries.", sections: [
    { h2: "Sticky CTA", body: "A mobile-only sticky CTA at the bottom of the screen. 10-25% conversion lift on most sites. Don't make it intrusive — half-width, thin bar." },
    { h2: "Tap-to-call", body: "If phone is a conversion channel, tel: links on every phone number on mobile. Zero friction to call." },
    { h2: "Simplified forms", body: "Mobile forms should have 1 field per screen, or 3 max per section. Desktop forms often don't translate — rebuild for mobile." },
  ]},
  { cat: "cro", title: "The Pricing Page Test That Lifted Sales 23%", excerpt: "A specific pricing page change on a SaaS client that meaningfully moved conversion.", sections: [
    { h2: "The change: removed the 'free tier'", body: "Free tier was eating into paid tier conversion. Removed it, kept a 14-day trial of the full product. Conversions up 23%." },
    { h2: "Why it worked", body: "Self-selecting free-tier users never converted. Paid tier was the real entry point. Free tier was a distraction that hurt conversion." },
    { h2: "When it wouldn't work", body: "Products with strong PLG motion (Slack, Notion). Free tier drives organic growth. Don't copy without understanding." },
  ]},
  { cat: "cro", title: "Form Abandonment: The Field That Kills Completions", excerpt: "The specific form fields that drive the most abandonment — and what to do about them.", sections: [
    { h2: "Phone number is #1", body: "Optional phone field still drives 20%+ abandonment. Either make it clearly optional or remove it entirely." },
    { h2: "Company size dropdown is #2", body: "People pause at 'company size'. Too granular and they bounce. Use broad ranges or skip entirely." },
    { h2: "Free-form 'message' is #3", body: "Asking for a message is friction. Replace with dropdown of common reasons to contact or skip entirely." },
  ]},
  { cat: "cro", title: "Social Proof Placement: Where It Actually Converts", excerpt: "Customer testimonials and social proof work, but placement matters more than most teams realize.", sections: [
    { h2: "Near the decision point", body: "A testimonial 200px above the CTA outperforms one in a dedicated testimonials section. Proof works when the prospect is deciding." },
    { h2: "Specific > generic", body: "A specific quote with a name, company, and role outperforms 'average 4.7/5 stars'. Individuality lends credibility." },
    { h2: "Avoid the wall of logos", body: "One prominent logo strip is great. Three competing logo strips on one page create noise. Logos are social proof; more isn't better." },
  ]},
  { cat: "cro", title: "Why Your Checkout is Leaking — Five Likely Reasons", excerpt: "The five most common checkout leaks we find in CRO audits.", sections: [
    { h2: "Leak 1: unexpected fees", body: "Shipping or tax revealed only at the final step. 30%+ abandonment driver. Show estimated totals from cart onward." },
    { h2: "Leak 2: forced account creation", body: "Guest checkout should always be available. Forcing accounts loses 25%+ of buyers." },
    { h2: "Leak 3: limited payment options", body: "Not having Shop Pay, Apple Pay, or PayPal costs 10-20% of conversion on mobile especially." },
  ]},
  { cat: "cro", title: "The Headline Test Framework That Actually Teaches", excerpt: "A structured approach to headline testing that produces transferable learnings, not just local wins.", sections: [
    { h2: "Test 3 distinct angles", body: "Outcome-focused, fear-of-loss, status/identity. Three fundamentally different angles. If one wins, you know which resonates." },
    { h2: "Control is the current headline", body: "Always test against current performer, not against a straw man. Otherwise 'wins' are fake." },
    { h2: "Document learnings explicitly", body: "Not just 'variant B won'. 'Status-framed headlines outperform outcome-framed for this audience'. That's transferable." },
  ]},
  { cat: "cro", title: "Session Replay: What We Look For in 10 Minutes", excerpt: "The specific behaviors that tell us something is wrong — scanned across session recordings quickly.", sections: [
    { h2: "Rage clicks", body: "Users clicking the same non-interactive element repeatedly. Flag where they are — usually a UI affordance issue." },
    { h2: "Back-button loops", body: "Users navigating in circles. Means the primary action isn't obvious. Reconsider CTA placement." },
    { h2: "Half-filled forms", body: "Users starting, abandoning. Which field did they stop at? Consistent pattern = remove or redesign that field." },
  ]},
  { cat: "cro", title: "A/B Testing Math: When to Call a Winner and When to Keep Running", excerpt: "How to know when a test has run long enough — without falling into common statistical traps.", sections: [
    { h2: "Pre-commit to a sample size", body: "Calculate required sample size before the test starts. Don't peek and stop early. Stopping when you like the result inflates false positives." },
    { h2: "Minimum 2 weeks", body: "Regardless of sample size, run at least 2 full weeks. Captures weekday/weekend seasonality. 1 week is too noisy." },
    { h2: "Call it at 95% confidence", body: "Standard industry threshold. Higher confidence (99%) needed for high-traffic changes where variance in wins/losses at 95% compounds." },
  ]},
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

const START_DATE = new Date("2024-06-01T00:00:00Z").getTime();
const END_DATE = new Date("2026-04-20T00:00:00Z").getTime();

function bodyParagraphs(body: SectionBody): string[] {
  return Array.isArray(body) ? body : [body];
}

function buildPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const seed of SEEDS) {
    const cat = CATEGORIES.find((c) => c.slug === seed.cat)!;
    const slug = seed.title
      .toLowerCase()
      .replace(/[''"".,:;()!?]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const h = hash(slug);
    const author = AUTHORS[h % AUTHORS.length];
    const publishedTs = START_DATE + (h % (END_DATE - START_DATE));

    const content: string[] = [];
    if (seed.intro && seed.intro.length > 0) {
      for (const p of seed.intro) content.push(p);
    }
    for (const s of seed.sections) {
      content.push(`## ${s.h2}`);
      for (const p of bodyParagraphs(s.body)) content.push(p);
    }
    if (seed.keyTakeaways && seed.keyTakeaways.length > 0) {
      content.push("## Key takeaways");
      for (const t of seed.keyTakeaways) content.push(`- ${t}`);
    }

    const totalWords = content.reduce(
      (sum, block) => sum + block.split(/\s+/).length,
      0,
    );
    const readMinutes = Math.max(3, Math.round(totalWords / 220));

    posts.push({
      slug,
      title: seed.title,
      excerpt: seed.excerpt,
      category: cat.name,
      categorySlug: cat.slug,
      tags: [cat.name],
      author,
      readMinutes,
      publishedAt: new Date(publishedTs).toISOString(),
      ...(seed.updatedAt ? { updatedAt: seed.updatedAt } : {}),
      content,
      keywords: [
        cat.name.toLowerCase(),
        `${cat.name.toLowerCase()} agency`,
        ...seed.title.split(" ").slice(0, 5).map((w) => w.toLowerCase()),
      ],
    });
  }

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export const blogPosts: BlogPost[] = buildPosts();
export const blogCategories = CATEGORIES;
export const getBlogBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
