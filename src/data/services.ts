export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  summary: string;
  heroImage?: string;
  whatItIs: string;
  whyItMatters: string[];
  process: { step: string; detail: string }[];
  deliverables: string[];
  tools: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  related: string[];
  updatedAt?: string;
};

/**
 * Default refresh date for the service pages — bump this when pricing,
 * methodology, or deliverables change so schema + sitemap reflect freshness.
 */
export const SERVICES_UPDATED_AT = "2026-04-24T00:00:00Z";

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    icon: "Search",
    tagline: "Rank higher. Get found. Convert organic traffic into revenue.",
    summary:
      "Full-stack SEO — technical audits, on-page optimization, link building, local SEO, and content strategy engineered to move you to page one and keep you there.",
    whatItIs:
      "Search Engine Optimization is the discipline of making your website deserve, earn, and hold top positions on Google, Bing, and AI search engines. Our SEO is not a checklist — it's a compounding growth system. We combine technical SEO (site speed, Core Web Vitals, crawlability, schema), content SEO (intent-matched pillar pages, clusters, and programmatic SEO), off-page SEO (digital PR, authoritative link building), and local SEO (Google Business Profile, citations, reviews) into one connected engine.",
    whyItMatters: [
      "68% of all online experiences begin with a search engine, and organic search drives 53% of website traffic on average — more than any other channel (BrightEdge, 2024).",
      "The #1 result on Google captures 27.6% of all clicks; positions 1–3 combined earn 54.4% (Backlinko analysis of 4M SERPs, 2024).",
      "Unlike paid ads, SEO compounds. Every ranking page keeps earning traffic long after the work is done.",
      "AI search (Google AI Overviews, ChatGPT, Perplexity) still leans on high-authority, well-structured web content. SEO is the foundation of being cited by AI.",
    ],
    process: [
      { step: "Discovery & Audit", detail: "Full technical audit, competitor gap analysis, keyword universe mapping, and revenue modelling." },
      { step: "Strategy & Roadmap", detail: "90-day quick wins and 12-month roadmap prioritized by search volume, difficulty, and business value." },
      { step: "Technical Fixes", detail: "Crawl issues, indexation, schema markup, Core Web Vitals, internal linking, hreflang, and canonical hygiene." },
      { step: "Content Production", detail: "Pillar pages, supporting clusters, programmatic pages, and AI-assisted briefs reviewed by human experts." },
      { step: "Authority Building", detail: "Digital PR, guest placements, HARO, broken-link building, and unlinked-brand-mention reclamation." },
      { step: "Measurement & Iteration", detail: "Weekly rank tracking, monthly executive reports, and quarterly strategy recalibration." },
    ],
    deliverables: [
      "Technical SEO audit (100+ point check)",
      "Keyword research & topic clusters",
      "On-page optimization of core pages",
      "Schema & structured data implementation",
      "Monthly content deliverables",
      "Backlink acquisition & outreach",
      "Google Search Console & GA4 dashboards",
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "GA4", "Looker Studio", "Surfer SEO", "ChatGPT", "Claude"],
    outcomes: [
      "3–10x organic traffic within 12 months on a well-scoped program",
      "Top-3 rankings for money keywords",
      "Lower customer acquisition cost",
      "Durable brand authority and topical coverage",
    ],
    faqs: [
      { q: "How long until I see SEO results?", a: "Quick wins land within 30–60 days (title-tag CTR improvements, fixing technical indexation, rebuilding internal links to money pages). Meaningful compounding organic traffic shows up between months 4–9 on a well-scoped program. SEO is a 12-month commitment minimum — anyone promising faster is either lying or setting you up for a penalty." },
      { q: "Do you guarantee #1 rankings?", a: "No. No ethical SEO agency does, because ranking depends on variables (competitor behavior, algorithm updates, search intent shifts) that no agency controls. We guarantee effort, transparency, and measurable progress against pre-agreed KPIs like organic pipeline, SQLs, and revenue." },
      { q: "Is AI-generated content ok for SEO?", a: "Yes, when it's directed by strategy, edited by humans with subject-matter expertise, and adds genuine value. Google rewards helpfulness, not authorship — the 2024 Core Updates explicitly targeted unhelpful mass-generated content, not AI content per se. We use AI for research, briefs, and first drafts; humans do the strategic thinking and the final quality pass." },
      { q: "How do you measure SEO success?", a: "We report monthly on organic traffic, top-ranking queries, new SQLs from organic, and revenue attribution from organic. Rankings are an input metric, not the goal. Every engagement ships with a live Looker Studio dashboard pulling from GSC, GA4, and your CRM." },
    ],
    keywords: ["seo agency", "search engine optimization", "google ranking", "on-page seo", "technical seo", "local seo", "keyword research", "link building"],
    related: ["content-marketing", "web-development", "local-seo"],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing & Paid Ads",
    shortTitle: "Performance Ads",
    icon: "Target",
    tagline: "Every dollar accountable. Every click measurable.",
    summary:
      "Full-funnel paid media across Google, Meta, LinkedIn, TikTok, YouTube, and programmatic — engineered for CAC reduction and profitable scaling.",
    whatItIs:
      "Performance marketing is the art and science of spending advertising dollars with surgical accountability. We build full-funnel campaigns that attract, nurture, and convert — and we don't just optimize for clicks. We optimize for pipeline, revenue, and LTV:CAC ratios. Every campaign ships with a tracking plan, attribution model, and weekly optimization cadence.",
    whyItMatters: [
      "Global digital ad spend crossed $740 billion in 2024 and is projected to reach $870 billion by 2027 — a share your competitors are already spending (Statista Digital Advertising Outlook, 2024).",
      "Creative accounts for roughly 70% of paid-media performance variance; audience targeting explains only about 15% (Nielsen Catalina Solutions meta-analysis).",
      "Organic alone can't scale fast enough for most growth goals — paid fills the gap.",
      "Properly-tracked paid media is the fastest way to test messaging, offers, and segments.",
      "Rising CPMs make creative and targeting more important than ever — agencies that only set up Ads Manager are obsolete.",
    ],
    process: [
      { step: "Account & Tracking Audit", detail: "Pixel, CAPI, GTM, GA4, and attribution review to ensure data integrity." },
      { step: "Offer & Creative Strategy", detail: "Positioning, offers, creative concepts informed by customer research." },
      { step: "Campaign Architecture", detail: "Funnel mapping, audience segmentation, and platform-appropriate structure." },
      { step: "Creative Production", detail: "Static, motion, UGC-style, and founder-led video ads shipped weekly." },
      { step: "Launch & Optimization", detail: "Daily pacing checks, weekly creative rotations, bi-weekly tests." },
      { step: "Scale & Expand", detail: "Budget scaling playbooks and channel expansion once unit economics are proven." },
    ],
    deliverables: [
      "Ad account setup & pixel/CAPI implementation",
      "Campaign strategy & funnel map",
      "Creative concepts & production (static + motion)",
      "A/B and MVT testing roadmap",
      "Weekly optimization + monthly performance review",
      "Live dashboards (Looker Studio / Triple Whale / Hyros)",
    ],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads", "YouTube Ads", "Google Tag Manager", "GA4", "Triple Whale", "Hyros", "Northbeam"],
    outcomes: [
      "Reduced CAC with improved ROAS",
      "Predictable pipeline you can plan against",
      "Winning creative library you own",
    ],
    faqs: [
      { q: "What's the minimum ad budget?", a: "$5,000 per month minimum on a single platform (Google or Meta) to reach statistically-meaningful test volume. Full-funnel programs across multiple platforms typically start at $15,000 per month. Media cost is always billed separately from our fee — we never take a percentage of your ad spend." },
      { q: "Do you create ad creative?", a: "Yes. Creative accounts for approximately 70% of paid-media performance variance (Nielsen). We ship 8–12 new ad creatives per week per account — static, motion, UGC, founder-led — produced by an in-house team of designers, motion artists, and creator partners." },
      { q: "Which platforms do you manage?", a: "Google Ads (Search, Performance Max, YouTube, Display), Meta (Facebook + Instagram), LinkedIn, TikTok, X, Reddit, Pinterest, and programmatic via DSPs like The Trade Desk. We pick channels based on your ICP, not our preferences." },
      { q: "How do you measure success?", a: "We report on blended MER (Marketing Efficiency Ratio), new-customer contribution margin, and CAC payback window — not in-platform ROAS. Every client gets a live Looker Studio dashboard updated daily." },
    ],
    keywords: ["google ads", "meta ads", "facebook ads", "tiktok ads", "linkedin ads", "youtube ads", "ppc agency", "performance marketing"],
    related: ["social-media-marketing", "analytics", "conversion-rate-optimization"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing & Management",
    shortTitle: "Social Media",
    icon: "Share2",
    tagline: "Scroll-stopping content. Conversations that convert.",
    summary:
      "Organic social strategy, content production, community management, and influencer partnerships on Instagram, LinkedIn, TikTok, YouTube, X, and Facebook.",
    whatItIs:
      "Social media is where your brand either becomes a destination or becomes wallpaper. We run end-to-end organic social — strategy, storytelling, content production, posting, community replies, and influencer collaborations — built around platform-native formats that the algorithm actually rewards.",
    whyItMatters: [
      "Social media is the #1 brand-discovery channel globally for consumers aged 16–34 — ahead of search (GWI Global Web Index, 2024).",
      "5.17 billion people now use social media, averaging 2 hours 23 minutes per day across platforms (DataReportal Digital 2024 Global Overview).",
      "Consistent social builds the trust that converts paid clicks.",
      "The content you build organically becomes rocket fuel for paid ads later.",
    ],
    process: [
      { step: "Brand Voice & Pillar Map", detail: "Define tone, visual system, and 4–6 content pillars." },
      { step: "Monthly Content Plan", detail: "Calendar, hooks, captions, and hashtag strategy." },
      { step: "Production", detail: "Photo, short-form video, carousels, reels, motion graphics." },
      { step: "Publishing & Community", detail: "Scheduling, first-hour engagement, DM management." },
      { step: "Influencer Partnerships", detail: "Creator sourcing, briefs, contracts, and content rights." },
      { step: "Reporting", detail: "Monthly dashboard with growth, engagement, and funnel impact." },
    ],
    deliverables: [
      "Monthly content calendar",
      "12–30 pieces of content/month",
      "Community management (M–F)",
      "Influencer campaigns",
      "Monthly insights report",
    ],
    tools: ["Later", "Buffer", "Meta Business Suite", "CapCut", "Adobe Premiere", "Figma", "Canva", "Notion"],
    outcomes: ["Consistent follower growth", "Engagement rate above industry average", "Warm audiences for paid ads"],
    faqs: [
      { q: "Do you ghost-produce for founders?", a: "Yes — founder-led content performs best. We script, shoot, edit, and publish on your behalf." },
    ],
    keywords: ["social media agency", "instagram marketing", "linkedin marketing", "tiktok marketing", "content creation", "community management"],
    related: ["content-marketing", "influencer-marketing", "branding"],
  },
  {
    slug: "web-development",
    title: "Custom Website Design & Development",
    shortTitle: "Web Development",
    icon: "Code2",
    tagline: "Websites that load in a blink and sell while you sleep.",
    summary:
      "Blazing-fast, conversion-first websites on Next.js, Webflow, Shopify, and WordPress. Built for speed, SEO, and scale.",
    whatItIs:
      "Your website is the one property you own. We build custom sites that are fast (sub-1s LCP), accessible (WCAG 2.2 AA), beautiful (award-grade design), and conversion-optimized. Whether you need a marketing site, a lead engine, a D2C store, or a web app, we pick the right stack and ship without compromise.",
    whyItMatters: [
      "Sites that load in 1 second convert at 3x the rate of sites that load in 5 seconds (Portent conversion analysis of 26B+ sessions, 2022).",
      "53% of mobile users abandon a page that takes longer than 3 seconds to load (Google / SOASTA Research).",
      "Custom sites eliminate template bloat and give you a competitive design edge.",
      "SEO, ads, and organic social all funnel to your site — it must perform.",
    ],
    process: [
      { step: "Discovery Sprint", detail: "Business goals, user research, competitive teardown, and IA." },
      { step: "Design", detail: "Wireframes → hi-fi in Figma with interactive prototypes." },
      { step: "Development", detail: "Component-based build on Next.js, Webflow, Shopify, or headless CMS." },
      { step: "Content & SEO", detail: "Copywriting, metadata, schema, and analytics ready at launch." },
      { step: "QA & Launch", detail: "Cross-browser, accessibility, performance, and staging reviews." },
      { step: "Post-launch CRO", detail: "Heatmaps, session replays, and monthly experiments." },
    ],
    deliverables: [
      "Figma design system",
      "Fully responsive website",
      "CMS for content editing",
      "SEO foundation",
      "Speed & Core Web Vitals report",
      "Analytics & heatmap setup",
    ],
    tools: ["Next.js", "React", "Webflow", "Shopify", "WordPress", "Sanity", "Figma", "Vercel", "Cloudflare"],
    outcomes: ["Sub-1s LCP", "100/100 Lighthouse on key pages", "Higher organic rankings", "Measurable lift in conversion rate"],
    faqs: [
      { q: "Do you work on existing sites?", a: "Yes — we do redesigns, migrations, and speed optimizations on existing stacks." },
      { q: "How long does a site take?", a: "Marketing sites: 4–8 weeks. Complex ecommerce/web apps: 8–16 weeks." },
    ],
    keywords: ["web development", "custom website", "next.js development", "shopify developer", "webflow agency", "website design"],
    related: ["seo", "branding", "conversion-rate-optimization"],
  },
  {
    slug: "branding",
    title: "Branding & Visual Identity",
    shortTitle: "Branding",
    icon: "Palette",
    tagline: "A brand people recognize in three pixels.",
    summary:
      "Naming, logo, identity systems, brand guidelines, and packaging for brands that want to be unforgettable.",
    whatItIs:
      "Branding is the compounding asset that makes every marketing dollar work harder. We build identity systems that are distinctive, consistent, and flexible — from wordmarks and logotypes to motion, packaging, and brand voice.",
    whyItMatters: [
      "Consistent brand presentation across all platforms increases revenue by up to 23% (Lucidpress / Marq Brand Consistency Report).",
      "Distinctive brand assets drive 55% of long-term ad effectiveness — the single largest contributor after brand size (Ehrenberg-Bass Institute, How Brands Grow).",
      "Strong branding supports a price premium of up to 20% versus generic competitors (McKinsey Brand Equity analysis).",
    ],
    process: [
      { step: "Brand Strategy", detail: "Positioning, purpose, audience, and tone of voice." },
      { step: "Identity Design", detail: "Logo, color, typography, imagery, motion." },
      { step: "Guidelines", detail: "A comprehensive brand book your team can use forever." },
      { step: "Rollout", detail: "Website, deck, social templates, packaging, signage." },
    ],
    deliverables: ["Brand strategy doc", "Logo suite", "Color & type system", "Brand book (PDF + web)", "Templates"],
    tools: ["Figma", "Illustrator", "After Effects", "Photoshop"],
    outcomes: ["Stronger recognition", "Premium pricing power", "Unified brand across channels"],
    faqs: [
      { q: "Do you do full rebrands?", a: "Yes — full rebrands, brand refreshes, and sub-brand systems. A full rebrand typically takes 10–14 weeks and covers strategy, identity design, voice, and rollout. A refresh takes 4–6 weeks." },
      { q: "How is branding different from just design?", a: "Branding is the strategy layer — positioning, voice, distinctive assets, and guidelines. Design is the visual execution. Branding without strategy produces pretty logos that don't drive recognition or premium pricing power." },
      { q: "What's included in a brand system?", a: "Strategy doc (positioning, audience, voice), full logo suite (primary, secondary, favicon, monograms), color system with accessibility-tested palettes, type system, imagery direction, motion principles, and a comprehensive brand book your team can use forever." },
    ],
    keywords: ["branding agency", "logo design", "visual identity", "rebrand", "brand strategy"],
    related: ["web-development", "content-marketing", "graphic-design"],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing & Copywriting",
    shortTitle: "Content",
    icon: "PenLine",
    tagline: "Content that ranks, resonates, and sells.",
    summary:
      "Editorial strategy, blog production, long-form guides, whitepapers, and ghost-written thought leadership that compounds over time.",
    whatItIs:
      "Content is the long game of marketing. We produce editorial that earns rankings, builds authority, and nurtures buyers through every stage of the funnel — written by humans who know your industry and optimized by strategists who know what converts.",
    whyItMatters: [
      "Content marketing generates 3x more leads than outbound marketing at 62% less cost (Demand Metric / Content Marketing Institute).",
      "72% of B2B marketers say content marketing increases engagement and the number of leads they generate (Content Marketing Institute B2B Benchmarks, 2024).",
      "Content is the fuel for SEO, social, email, and sales enablement.",
      "Authoritative content is the moat AI can't easily copy.",
    ],
    process: [
      { step: "Editorial Strategy", detail: "ICP research, pillar topics, SME sourcing." },
      { step: "Briefs & Outlines", detail: "Every piece has a data-backed brief before a word is written." },
      { step: "Writing & Editing", detail: "SME writers, editorial review, fact-checking." },
      { step: "Distribution", detail: "Organic, email, social, and syndication." },
    ],
    deliverables: ["4–20 articles/month", "Whitepapers & ebooks", "Case studies", "Newsletter copy", "Sales enablement content"],
    tools: ["Ahrefs", "Surfer", "Clearscope", "Notion", "Google Docs"],
    outcomes: ["Compounding organic traffic", "Thought leadership", "Stronger sales enablement"],
    faqs: [
      { q: "Do you use AI to write content?", a: "Yes, for briefs, research, and first drafts — always reviewed and elevated by human subject-matter experts. We don't publish pure AI content because it reads flat, doesn't earn citations, and underperforms on rankings. AI compresses the time-to-draft; humans provide the voice, judgment, and original thinking." },
      { q: "How many pieces per month do you produce?", a: "Most engagements produce 4–12 long-form pieces per month (1,500–3,000 words each). High-volume programs ship 20+ pieces, typically paired with programmatic SEO. We'd rather ship 4 exceptional pieces than 20 thin ones." },
      { q: "Do you interview subject-matter experts?", a: "Yes — every piece on a specialty topic starts with a 20–45 minute SME interview recorded on Riverside. The transcript is the raw material. Without it, you're producing paraphrased blog posts anyone could write — which won't rank and won't earn AI citations." },
    ],
    keywords: ["content marketing agency", "blog writing service", "copywriting", "editorial", "whitepaper writing"],
    related: ["seo", "email-marketing", "thought-leadership"],
  },
  {
    slug: "email-marketing",
    title: "Email & SMS Marketing",
    shortTitle: "Email & SMS",
    icon: "Mail",
    tagline: "The highest-ROI channel, unlocked.",
    summary:
      "Lifecycle email, SMS, push, and CRM flows built in Klaviyo, HubSpot, Customer.io, and Braze — often 30%+ of ecommerce revenue.",
    whatItIs:
      "Email is still the highest-ROI channel in digital, when done right. We architect full lifecycle programs — welcome, browse abandonment, post-purchase, winback, VIP — and pair them with segmentation, personalization, and rigorous testing.",
    whyItMatters: [
      "Email marketing delivers an average return of $36–$42 for every $1 spent — the highest ROI of any digital channel (Litmus State of Email ROI, 2024).",
      "SMS open rates exceed 98%, with 90% of messages read within 3 minutes of delivery (SlickText / Mobile Marketing Association data).",
      "Owned channels — no algorithm to fight.",
    ],
    process: [
      { step: "Audit & Strategy", detail: "Deliverability, list health, and flow gap analysis." },
      { step: "Design System", detail: "On-brand, modular email templates." },
      { step: "Flow Build-out", detail: "Core flows + segmentation logic." },
      { step: "Campaigns & Testing", detail: "Weekly campaigns and A/B tests." },
    ],
    deliverables: ["Flow maps", "Template library", "Weekly campaigns", "Monthly reporting"],
    tools: ["Klaviyo", "HubSpot", "Customer.io", "Braze", "Mailchimp", "Postmark"],
    outcomes: ["Higher LTV", "Lower churn", "30%+ of ecom revenue"],
    faqs: [
      { q: "Do you do SMS and WhatsApp, not just email?", a: "Yes — we build lifecycle SMS, MMS, and WhatsApp programs on Attentive, Klaviyo SMS, Postscript, and native WhatsApp Business APIs. SMS drives 98%+ open rates but is easy to over-use; we design cadences that respect the channel." },
      { q: "Which ESP do you recommend?", a: "Klaviyo for ecommerce under $50M revenue. HubSpot or Customer.io for B2B SaaS. Iterable or Braze for enterprise ecommerce over $50M with complex segmentation. We're vendor-neutral and pick based on fit, not partner fees." },
      { q: "Do you run email deliverability audits?", a: "Yes. Every engagement starts with an SPF/DKIM/DMARC configuration check, a blacklist scan, and list hygiene review. Deliverability is the invisible constraint — brilliant campaigns hitting spam folders don't matter." },
    ],
    keywords: ["klaviyo agency", "email marketing", "sms marketing", "lifecycle marketing", "crm marketing"],
    related: ["marketing-automation", "ecommerce-marketing", "content-marketing"],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation & CRM",
    shortTitle: "Automation & CRM",
    icon: "Workflow",
    tagline: "Your growth engine on autopilot.",
    summary:
      "HubSpot, Salesforce, ActiveCampaign, and custom automations — lead scoring, nurturing, sales handoff, and attribution done right.",
    whatItIs:
      "Marketing automation turns one-off campaigns into compounding systems. We architect CRM, workflows, lead scoring, and sales handoff so nothing slips and every lead gets the right message at the right time.",
    whyItMatters: [
      "Nurtured leads make 47% larger purchases than non-nurtured leads (The Annuitas Group).",
      "Companies with mature lead-generation and management practices have 9.3% higher sales-quota achievement rates (CSO Insights Sales Performance Study).",
      "Marketing automation adoption drives an average 14.5% increase in sales productivity and 12.2% reduction in marketing overhead (Nucleus Research).",
    ],
    process: [
      { step: "CRM Audit", detail: "Data model, pipeline, properties, and integrations review." },
      { step: "Architecture", detail: "Lead lifecycle, scoring, routing, and SLAs." },
      { step: "Build & Integrate", detail: "Workflows, integrations, and attribution." },
      { step: "Enable Sales", detail: "Dashboards, playbooks, and training." },
    ],
    deliverables: ["CRM setup", "Lead scoring model", "Automated nurture sequences", "Attribution dashboards"],
    tools: ["HubSpot", "Salesforce", "ActiveCampaign", "Zapier", "Make", "n8n", "Segment"],
    outcomes: ["Faster lead response", "Higher MQL→SQL conversion", "Full funnel visibility"],
    faqs: [
      { q: "Do you do HubSpot implementations?", a: "Yes — from Starter through Enterprise tiers, including custom objects, workflows, HubDB, and bi-directional integrations with Salesforce, Segment, and product databases. We're a certified HubSpot Solutions Partner." },
      { q: "Do you migrate from one CRM to another?", a: "Yes. Migrations from Salesforce to HubSpot, Pardot to HubSpot, HubSpot to Salesforce, and custom CRMs to both. Typical migration timeline is 8–14 weeks including data cleanup, field mapping, workflow rebuild, integration re-platforming, and team enablement." },
      { q: "What does a lead scoring model look like?", a: "A proper lead scoring model uses demographic fit (ICP match, company size, industry) and behavioral signals (pricing page views, demo requests, email engagement). Score thresholds route leads to sales, nurture, or disqualification automatically. We typically tune scores quarterly based on win/loss data." },
    ],
    keywords: ["hubspot agency", "marketing automation", "crm setup", "lead scoring", "salesforce marketing"],
    related: ["email-marketing", "analytics", "b2b-marketing"],
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "CRO",
    icon: "MousePointerClick",
    tagline: "Same traffic. More revenue.",
    summary:
      "Research, experimentation, and UX optimization to turn more of your existing traffic into customers.",
    whatItIs:
      "CRO is the discipline of compounding conversion improvements via research-driven experimentation. We combine heatmaps, session replays, user testing, and surveys to uncover what's broken — then test fixes with rigor.",
    whyItMatters: [
      "The average ecommerce conversion rate sits at 2.5–3%; top-quartile performers hit 5.2%+ (IRP Commerce, 2024).",
      "A 1-point conversion-rate lift is typically worth more than doubling paid-ad spend because the economics apply to all traffic, not just paid.",
      "Only 22% of businesses are satisfied with their conversion rates — a gap that CRO programs exist to close (Econsultancy Conversion Report).",
      "CRO learnings compound across every channel — winning headlines, CTAs, and offers transfer to email, ads, and sales decks.",
    ],
    process: [
      { step: "Research", detail: "Heatmaps, session replays, polls, user testing." },
      { step: "Hypothesis", detail: "Prioritized backlog with PIE/ICE scoring." },
      { step: "Experimentation", detail: "A/B & MVT on VWO, Convert, or GrowthBook." },
      { step: "Scale Winners", detail: "Ship site-wide, share learnings." },
    ],
    deliverables: ["Research findings", "Experiment backlog", "Weekly/monthly experiments", "Test reports"],
    tools: ["VWO", "Convert", "GrowthBook", "Hotjar", "FullStory", "Microsoft Clarity"],
    outcomes: ["10–40% CVR lift per quarter on focused programs", "Proven learnings your team owns"],
    faqs: [
      { q: "Do we need high traffic for CRO to work?", a: "For quantitative A/B testing, yes — about 10,000 sessions per month on the tested page minimum to detect realistic lifts at 95% confidence within 6 weeks. Below that, we focus on qualitative research (user interviews, session recordings, UX audits) and ship directional UX improvements rather than running formal tests." },
      { q: "Which testing tool do you recommend?", a: "GrowthBook for engineering-led teams (open-source, developer-friendly). VWO or Convert for marketing-led teams (no-code, faster setup). For enterprise with high statistical rigor needs, Optimizely. We pick based on your team's technical capacity, not partner fees." },
      { q: "How much lift is realistic?", a: "A healthy CRO program delivers 10–40% conversion rate lift per quarter on the pages being optimized, which compounds over 12 months as winning patterns propagate. The biggest single lifts come from pricing-page tests, hero headline rewrites, and checkout friction reduction." },
    ],
    keywords: ["cro agency", "conversion rate optimization", "a/b testing", "ux optimization", "landing page optimization"],
    related: ["web-development", "analytics", "ux-design"],
  },
  {
    slug: "analytics",
    title: "Analytics, Tracking & Attribution",
    shortTitle: "Analytics",
    icon: "LineChart",
    tagline: "If you can measure it, you can grow it.",
    summary:
      "GA4, GTM, server-side tracking, Looker Studio dashboards, and multi-touch attribution that actually survive iOS 17 and cookie deprecation.",
    whatItIs:
      "Clean data is the foundation of growth. We implement privacy-safe, server-side tracking, unified dashboards, and attribution models that help you invest with confidence.",
    whyItMatters: [
      "Up to 40% of marketing-attributed conversions are lost to iOS privacy changes, cookie deprecation, and broken client-side tracking without server-side implementation (Segment / Twilio State of Customer Engagement, 2024).",
      "Only 1 in 3 marketing leaders can confidently attribute revenue to channels — the rest make decisions on incomplete data (Gartner CMO Spend Survey).",
      "You can't optimize what you can't trust. Clean data is the foundation of every growth decision.",
    ],
    process: [
      { step: "Data Audit", detail: "What you track today vs. what you should track." },
      { step: "Measurement Plan", detail: "Events, parameters, KPIs, identity resolution." },
      { step: "Implementation", detail: "GTM, CAPI, Stape, server-side GTM." },
      { step: "Dashboards", detail: "Looker Studio / Metabase / Tableau." },
    ],
    deliverables: ["Measurement plan", "GTM/GA4 setup", "Server-side tracking", "Dashboards", "QA report"],
    tools: ["GA4", "GTM", "Stape", "Segment", "Looker Studio", "BigQuery"],
    outcomes: ["Accurate revenue attribution", "Single source of truth"],
    faqs: [
      { q: "Do I need server-side tracking?", a: "Yes, if you run more than $5,000 per month in paid ads. iOS 17 link tracking, third-party cookie deprecation, and ad-blockers collectively break up to 40% of client-side conversion events. Server-side tracking via Stape, a self-hosted GCP container, or platform CAPIs recovers most of that signal." },
      { q: "What's the difference between GA4 and a CDP like Segment?", a: "GA4 is an analytics tool — it reports on what happened. A Customer Data Platform (Segment, RudderStack) is a data pipeline — it collects, unifies, and distributes customer data to every tool in your stack. Most mid-market brands need both; only one replaces the other at enterprise scale with a proper data warehouse." },
      { q: "Do you build Looker Studio or Tableau dashboards?", a: "Yes — Looker Studio (free, tight Google integrations) for most clients; Tableau, Metabase, or custom dashboards via BigQuery for enterprise. Every client gets a live executive dashboard updated daily with traffic, leads, revenue, and CAC trends." },
    ],
    keywords: ["ga4 setup", "gtm agency", "server side tracking", "attribution", "marketing analytics"],
    related: ["conversion-rate-optimization", "performance-marketing", "marketing-automation"],
  },
  {
    slug: "influencer-marketing",
    title: "Influencer & Creator Marketing",
    shortTitle: "Influencer",
    icon: "Users",
    tagline: "Real people. Real reach. Real results.",
    summary:
      "Vetted creator partnerships, UGC production, whitelisting, and ambassador programs — from nano to celebrity tiers.",
    whatItIs:
      "Influencer marketing works because trust transfers. We source, brief, contract, and manage creators — plus run whitelisting on Meta/TikTok so their content becomes your best ads.",
    whyItMatters: [
      "61% of consumers trust influencer recommendations, compared with 38% who trust branded content (Matter Communications / Edelman Trust Barometer).",
      "UGC-style ads typically outperform studio-produced ads by 2–4x on CTR and 50% lower cost-per-acquisition (Meta creative analysis; Shopify UGC study, 2024).",
      "The global influencer marketing industry reached $24 billion in 2024, up from $6 billion in 2019 (Influencer Marketing Hub Benchmark Report).",
    ],
    process: [
      { step: "Strategy", detail: "Tiers, budget, formats, KPIs." },
      { step: "Sourcing", detail: "Vetting on performance, not just follower count." },
      { step: "Briefs & Contracts", detail: "Rights, whitelisting, FTC compliance." },
      { step: "Execution", detail: "Shipping, shoots, approvals, posting." },
      { step: "Amplification", detail: "Whitelisting top-performing creator content as ads." },
    ],
    deliverables: ["Creator roster", "Campaign briefs & contracts", "UGC library", "Whitelisted ad performance"],
    tools: ["GRIN", "Aspire", "CreatorIQ", "Meta Partnership Ads"],
    outcomes: ["Scalable UGC", "Lower CAC on paid", "Cultural relevance"],
    faqs: [
      { q: "Do you do creator gifting, paid partnerships, or ambassador programs?", a: "All three. Gifting (product-only, no fee) works for category-leading DTC brands with strong product-market fit. Paid partnerships are the workhorse of most influencer programs. Ambassador programs (long-term, ongoing) build durable creator relationships and are often the most cost-effective per piece of content once established." },
      { q: "What's creator whitelisting?", a: "Whitelisting is running paid ads from the creator's account rather than your brand's. It typically produces 20–40% lower CPM and 2–3x higher CTR versus branded ads because audiences trust the creator's voice. We handle contracts, Meta Partnership Ad setup, and usage rights for 3–12 months of ad life." },
      { q: "How do you vet creators?", a: "Performance data over follower count. We look at engagement rate by audience quality (not just likes), historical conversion data when available, content consistency, and audience-ICP overlap. A 50K-follower creator whose audience matches your ICP converts better than a 500K-follower creator whose audience doesn't." },
    ],
    keywords: ["influencer marketing agency", "ugc creators", "creator partnerships", "tiktok influencers", "instagram influencers"],
    related: ["social-media-marketing", "performance-marketing", "ecommerce-marketing"],
  },
  {
    slug: "video-production",
    title: "Video Production & Motion Design",
    shortTitle: "Video & Motion",
    icon: "Video",
    tagline: "Stories that move and motion that sells.",
    summary:
      "Brand films, explainer videos, product films, social reels, and motion graphics — shot, edited, and distributed for maximum impact.",
    whatItIs:
      "Video is the most engaging medium in marketing. We handle pre-production, shoots, edit, motion graphics, and distribution — from phone-shot UGC to cinematic brand films.",
    whyItMatters: [
      "Video content drives 2x higher click-through rates than static ads on Meta and YouTube and is watched 6x more than photos on LinkedIn (Meta Creative Insights; LinkedIn Marketing Solutions, 2024).",
      "91% of businesses now use video as a marketing tool — up from 63% in 2017 (Wyzowl State of Video Marketing).",
      "Short-form video (under 60 seconds) dominates platform algorithms across TikTok, Instagram Reels, and YouTube Shorts.",
    ],
    process: [
      { step: "Concept", detail: "Treatments, scripts, storyboards." },
      { step: "Production", detail: "Studio or location shoots, DP, crew." },
      { step: "Post", detail: "Edit, color, sound, motion graphics." },
      { step: "Distribution", detail: "Platform cuts, captions, and A/B variants." },
    ],
    deliverables: ["Hero films", "Social cut-downs", "Motion graphics", "Animated explainers"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Blender"],
    outcomes: ["Higher engagement", "Stronger ad creative", "Reusable content library"],
    faqs: [
      { q: "Do you shoot in-studio or on location?", a: "Both. We have partner studios in Toronto, New York, London, Dubai, Mumbai, Sydney, and Berlin for controlled shoots; we handle location shoots across all our office regions. Shoot type depends on the creative brief — product-heavy brands typically shoot in-studio; lifestyle and B2B shoot on location." },
      { q: "What's the typical turnaround for a video project?", a: "Social-first short video: 2–3 weeks from brief to delivery. Brand films: 6–10 weeks including scripting, shoot, and color. Animated explainers: 4–6 weeks. Motion graphics for ad creative: 5–10 days per asset." },
      { q: "Do you make cut-downs for different platforms?", a: "Yes. Every hero video ships with platform-appropriate cut-downs — 15s and 30s for Meta/TikTok, 60s for YouTube pre-roll, vertical 9:16 for Stories and Reels, and square 1:1 for feed. One shoot typically produces 10–30 final deliverables." },
    ],
    keywords: ["video production agency", "motion design", "brand film", "social video", "explainer video"],
    related: ["social-media-marketing", "branding", "content-marketing"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Creative Services",
    shortTitle: "Graphic Design",
    icon: "Brush",
    tagline: "On-brand creative, delivered at speed.",
    summary:
      "Social creative, ad creative, pitch decks, packaging, print, and design systems — shipped with speed and craft.",
    whatItIs:
      "Great marketing needs great design, constantly. Our design team operates as an extension of yours — ticketing, design systems, and fast turnarounds for everything from ad creative to pitch decks.",
    whyItMatters: [
      "Creative quality drives approximately 70% of paid-media performance variance — more than audience targeting, bidding, or placement combined (Nielsen Catalina Solutions).",
      "Brand presentation consistency across channels lifts revenue up to 23% (Lucidpress / Marq Brand Consistency Report).",
      "The highest-performing ad accounts ship 8–12+ fresh creative assets per week; creative fatigue cuts performance within 10–14 days of launch.",
    ],
    process: [
      { step: "Intake", detail: "Ticketing + briefs." },
      { step: "Design", detail: "Kickoff, drafts, reviews." },
      { step: "Delivery", detail: "Hand-off with source files + usage rights." },
    ],
    deliverables: ["Ad creative", "Social templates", "Pitch decks", "Landing page design", "Print & packaging"],
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    outcomes: ["Consistent brand", "Faster campaign velocity"],
    faqs: [
      { q: "Do you offer unlimited design subscriptions?", a: "Yes — subscription model with a dedicated designer, ticket-based intake, and typical turnaround of 24–48 hours for standard requests. Pricing starts around $3,500/month for one designer. Works well for brands shipping weekly ad creative and frequent social assets." },
      { q: "Do you build design systems?", a: "Yes. Most engagements over 3 months include a design system deliverable — tokens, components, usage rules — built in Figma and exported for engineering. Systems pay back immediately because every future design project compounds on them rather than starting fresh." },
      { q: "What's the difference between graphic design and branding?", a: "Branding defines the identity (logo, voice, system). Graphic design applies it (ads, decks, posts, packaging). We do both — usually branding first for new clients, then ongoing graphic design to keep the brand system alive across surfaces." },
    ],
    keywords: ["graphic design agency", "ad creative design", "social media design", "pitch deck design", "packaging design"],
    related: ["branding", "social-media-marketing", "performance-marketing"],
  },
  {
    slug: "ux-design",
    title: "UX/UI Design & Product Design",
    shortTitle: "UX/UI",
    icon: "Layers",
    tagline: "Design that feels obvious. Interfaces that convert.",
    summary:
      "Research-driven UX, beautiful UI, and scalable design systems for websites, web apps, and mobile apps.",
    whatItIs:
      "UX is the invisible driver of conversion, retention, and delight. We design flows, interfaces, and design systems grounded in research and shipped with polished craft.",
    whyItMatters: [
      "Every $1 invested in UX research and design returns an average of $100 in value — an ROI of 9,900% (Forrester Research Total Economic Impact of UX).",
      "A well-designed user interface can raise conversion rates by up to 200%; better UX can push that to 400% (Forrester / Toptal UX analysis).",
      "Great UX is the cheapest compounding growth lever available — every future campaign rides on it.",
    ],
    process: [
      { step: "Research", detail: "Interviews, analytics, JTBD mapping." },
      { step: "Wireframes", detail: "Low-fi flows and IA." },
      { step: "Hi-Fi Design", detail: "Figma, interactive prototypes." },
      { step: "Design System", detail: "Reusable tokens and components." },
    ],
    deliverables: ["User research report", "Wireframes & prototypes", "UI designs", "Design system"],
    tools: ["Figma", "FigJam", "Maze", "Dovetail"],
    outcomes: ["Higher conversion", "Better activation", "Lower support tickets"],
    faqs: [
      { q: "Do you work with engineering teams?", a: "Yes. We design with component-level handoff specs in Figma, tokens exported for Tailwind or CSS-in-JS, interaction prototypes, and accessibility notes. We also embed designers directly into engineering sprints when clients need tight design/build loops." },
      { q: "Do you build design systems or just individual screens?", a: "Both — but we strongly recommend a design system first for any product engagement, even if it's minimal. Systems pay back immediately because every future screen compounds on them. A rushed MVP without a system typically needs a full design re-platform by the time the product hits $1M ARR." },
      { q: "Do you do user research?", a: "Yes — moderated interviews, unmoderated testing via Maze, session replay analysis, and jobs-to-be-done mapping. Most UX engagements start with a research sprint so the design work is grounded in real user data, not assumptions." },
    ],
    keywords: ["ux design agency", "product design", "ui design", "design system", "mobile app design"],
    related: ["web-development", "conversion-rate-optimization", "branding"],
  },
  {
    slug: "ecommerce-marketing",
    title: "Ecommerce Marketing",
    shortTitle: "Ecommerce",
    icon: "ShoppingBag",
    tagline: "DTC growth across every channel, every platform.",
    summary:
      "Shopify, WooCommerce, and BigCommerce growth — paid, email, CRO, and retention stitched into one profitable engine.",
    whatItIs:
      "Ecommerce needs specialists who understand the whole funnel: ads → site → checkout → retention. We run full-funnel DTC growth with a sharp focus on contribution margin and LTV.",
    whyItMatters: [
      "Global ecommerce sales reached $6.3 trillion in 2024 and are projected to hit $8 trillion by 2027 (Statista Digital Market Outlook).",
      "Increasing customer retention by just 5% increases profit by 25–95% for most DTC businesses (Harvard Business Review / Bain & Company).",
      "Top-quartile DTC brands generate 30%+ of revenue from email and SMS; median brands leave most of this on the table (Klaviyo 2024 Ecommerce Benchmarks).",
      "DTC margins are thin — sloppy marketing wipes out profit. Retention is where profitable brands are built.",
    ],
    process: [
      { step: "Economics Audit", detail: "AOV, margin, CAC, LTV, and cohort analysis." },
      { step: "Acquisition", detail: "Meta, Google, TikTok, creator ads." },
      { step: "Site & Checkout", detail: "Theme optimization, CRO, upsell apps." },
      { step: "Retention", detail: "Email, SMS, subscription, loyalty." },
    ],
    deliverables: ["Growth plan", "Ad campaigns", "Site optimizations", "Email/SMS flows", "Weekly reporting"],
    tools: ["Shopify", "Klaviyo", "Triple Whale", "Recharge", "Gorgias", "Yotpo"],
    outcomes: ["Profitable scale", "Higher AOV and LTV", "Lower returns"],
    faqs: [
      { q: "Do you do Shopify development?", a: "Yes — custom theme development (Dawn, Focal, custom), app integrations, headless Shopify Hydrogen builds for enterprise, and Shopify Plus migrations. We're Shopify Plus Partners." },
      { q: "What's the difference between Shopify native and headless Shopify?", a: "Shopify native uses Shopify's front-end rendering — faster to build, easier to maintain, works for 90% of DTC brands under $30M revenue. Headless Shopify (via Hydrogen or Next.js) decouples the front-end, giving full design and performance control at the cost of engineering maintenance. We typically recommend native until revenue or customization needs justify headless." },
      { q: "Which retention stack do you deploy?", a: "Klaviyo for email and SMS, Recharge for subscription, Gorgias for support with AI, Yotpo or Okendo for reviews, Smile.io or LoyaltyLion for loyalty. The stack compounds — a mature retention layer typically drives 30%+ of revenue for top-quartile DTC brands." },
    ],
    keywords: ["shopify marketing agency", "dtc marketing", "ecommerce growth", "klaviyo agency", "dtc agency"],
    related: ["performance-marketing", "email-marketing", "conversion-rate-optimization"],
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business Profile",
    shortTitle: "Local SEO",
    icon: "MapPin",
    tagline: "Own the map. Win your neighborhood.",
    summary:
      "Google Business Profile optimization, local citations, review generation, and geo-targeted content that drives calls and foot traffic.",
    whatItIs:
      "For local businesses, Google Maps is the modern main street. We optimize GBP, fix citation inconsistencies, generate reviews, and build geo-relevant content to dominate local packs.",
    whyItMatters: [
      "46% of all Google searches have local intent; 76% of local searches result in a visit or phone call within 24 hours (Google / SOASTA Mobile Search Studies).",
      "A top-3 Google Maps pack position captures roughly 44% of local-pack clicks; positions 4–5 combined earn only 12% (BrightLocal Local Search Ranking Factors).",
      "88% of consumers trust online reviews as much as personal recommendations — reviews are now a top-3 local ranking factor (BrightLocal Consumer Review Survey).",
    ],
    process: [
      { step: "GBP Audit", detail: "NAP, categories, attributes, photos, services." },
      { step: "Citations", detail: "Fix and build on top 50+ directories." },
      { step: "Reviews", detail: "Automated review generation and response." },
      { step: "Content", detail: "Service-area and location pages." },
    ],
    deliverables: ["GBP optimization", "Citation cleanup", "Review engine", "Local landing pages"],
    tools: ["BrightLocal", "Whitespark", "Moz Local", "Birdeye", "Podium"],
    outcomes: ["More map pack visibility", "More phone calls and directions", "More reviews"],
    faqs: [
      { q: "Do you handle multi-location local SEO?", a: "Yes — we manage hundreds of locations for franchise, healthcare, retail, and restaurant brands. Multi-location requires scaled citation management, location page systems, centralized review response, and GBP Business Profile API automation to stay consistent at volume." },
      { q: "How long does Local SEO take to show results?", a: "GBP optimization and citation cleanup typically lift map-pack visibility within 30–60 days. Service-area and location page rankings take 3–6 months. Review velocity (new reviews per month) is the highest-leverage ongoing lever after setup." },
      { q: "Do you write the location pages?", a: "Yes. Every location page includes genuinely unique content — local services, team bios, service-area details, real photos, and local citations. Thin templated location pages (city-swapped boilerplate) trigger Google's scaled content abuse policy and hurt rather than help." },
    ],
    keywords: ["local seo", "google business profile", "maps ranking", "local citations", "review generation"],
    related: ["seo", "reputation-management", "content-marketing"],
  },
  {
    slug: "reputation-management",
    title: "Online Reputation Management",
    shortTitle: "Reputation",
    icon: "Shield",
    tagline: "Own the conversation about your brand.",
    summary:
      "Review monitoring, response management, negative-result suppression, and proactive reputation building across Google, Yelp, Trustpilot, and more.",
    whatItIs:
      "Your reputation is your business. We monitor mentions 24/7, respond to reviews on your behalf, and build positive search real estate so the first page of Google works for you, not against you.",
    whyItMatters: [
      "94% of consumers say a negative review has convinced them to avoid a business entirely (BrightLocal Local Consumer Review Survey, 2024).",
      "A one-star rating increase on Yelp drives a 5–9% revenue lift; the effect is causal, not correlational (Harvard Business School / Luca, Reviews Meet Revenue).",
      "The typical business responds to only 56% of its reviews — responsiveness is itself a ranking and conversion signal that most competitors ignore.",
    ],
    process: [
      { step: "Audit", detail: "Current sentiment, review velocity, SERP real estate." },
      { step: "Response", detail: "Daily monitoring and on-brand responses." },
      { step: "Generation", detail: "Automated review requests across channels." },
      { step: "Suppression", detail: "Positive content to push negative SERP results down." },
    ],
    deliverables: ["Review playbook", "Response management", "Monthly sentiment report"],
    tools: ["Birdeye", "Reputation.com", "Trustpilot", "Google Alerts", "Brand24"],
    outcomes: ["Higher star ratings", "Cleaner first-page SERPs", "Better close rates"],
    faqs: [
      { q: "Can you remove bad reviews?", a: "Only reviews that violate platform policies (fake, off-topic, defamatory, conflict-of-interest) — and only Google, Yelp, and similar platforms can approve those removal requests. Our primary approach is drowning bad reviews out with a steady stream of great ones, which is more durable and policy-compliant." },
      { q: "How do you generate more reviews?", a: "Automated post-purchase or post-service review requests via SMS (highest response rate), email, and QR codes. We also run first-party sentiment surveys before the review ask — high-sentiment customers get routed to Google, while low-sentiment customers get routed to a private feedback form. This is compliant and dramatically improves average rating." },
      { q: "Do you respond to reviews?", a: "Yes — within 48 hours, always on-brand, always specific to the reviewer's point. Google explicitly weights response rate as a local ranking signal, and consumers weight it as a purchase signal." },
    ],
    keywords: ["online reputation management", "review management", "trustpilot agency", "brand monitoring"],
    related: ["local-seo", "seo", "pr"],
  },
  {
    slug: "pr",
    title: "Digital PR & Link Building",
    shortTitle: "Digital PR",
    icon: "Megaphone",
    tagline: "Earn coverage. Earn links. Earn trust.",
    summary:
      "Data-led digital PR campaigns that earn links from Forbes, TechCrunch, WSJ, and top-tier industry press.",
    whatItIs:
      "Digital PR fuses traditional press relations with link-building strategy. We pitch data stories, expert commentary, and thought leadership to journalists — the links are a side effect of newsworthy content.",
    whyItMatters: [
      "Backlinks remain the single strongest off-page ranking factor — SEO studies consistently show a 0.65+ correlation between referring domains and organic traffic (Ahrefs Content Study; Backlinko Ranking Factors, 2024).",
      "Tier-1 press coverage (Forbes, WSJ, TechCrunch) typically drives a 10–40% lift in branded search within 30 days and builds backlinks that compound for years.",
      "92% of B2B buyers start their research with earned media or independent reviews — press coverage shapes pipeline you never see (Edelman Trust Barometer B2B Edition).",
    ],
    process: [
      { step: "Story Development", detail: "Surveys, data, and newsworthy angles." },
      { step: "Outreach", detail: "Journalist relationships and targeted pitches." },
      { step: "Measurement", detail: "Coverage, referring domains, branded search lift." },
    ],
    deliverables: ["Campaign concepts", "Outreach lists", "Monthly coverage report"],
    tools: ["Muck Rack", "Prowly", "BuzzStream", "Ahrefs"],
    outcomes: ["Tier-1 press", "DR-70+ backlinks", "Branded search lift"],
    faqs: [
      { q: "Do you do HARO / Connectively / Qwoted?", a: "Yes, but as one tactic within a broader digital PR program — not the whole strategy. Reactive platforms like Connectively (formerly HARO), Qwoted, and SourceBottle work when your spokespeople have niche expertise and can respond within hours. For most clients, proactive data-led PR (original surveys, proprietary research, industry reports) produces higher-authority coverage with more durable backlinks." },
      { q: "What's a realistic coverage target?", a: "For a well-scoped digital PR program, 3–8 pieces of tier-1 or tier-2 press coverage per quarter, with 10–25 DR-60+ backlinks. Tier-1 outlets (Forbes, WSJ, TechCrunch) take longer to earn but compound branded search lift over 12 months." },
      { q: "Do you guarantee placements?", a: "No. Any agency guaranteeing coverage is either lying or paying for placements (which violates Google's link scheme guidelines and platform policies). We guarantee outreach volume, pitch quality, and responsiveness — the outcomes come from the quality of the story, not a vendor promise." },
    ],
    keywords: ["digital pr agency", "link building agency", "haro", "press coverage", "seo backlinks"],
    related: ["seo", "content-marketing", "reputation-management"],
  },
  {
    slug: "b2b-marketing",
    title: "B2B & SaaS Marketing",
    shortTitle: "B2B & SaaS",
    icon: "Building2",
    tagline: "Pipeline for founders who care about CAC payback.",
    summary:
      "ABM, demand gen, LinkedIn ads, inbound SEO, and sales enablement built for complex B2B and SaaS sales cycles.",
    whatItIs:
      "B2B and SaaS growth needs a different playbook — longer cycles, multiple stakeholders, and economics that must tie back to pipeline and revenue. We run integrated B2B programs across ABM, demand gen, content, and paid.",
    whyItMatters: [
      "B2B buyers complete 70% of the decision process before ever speaking to sales (Forrester Buyer Research; Gartner Future of Sales).",
      "The median B2B buying group now involves 6–10 stakeholders, each researching independently before alignment (Gartner Buyer Research).",
      "Best-in-class SaaS companies maintain CAC payback windows under 12 months; anything over 24 months signals unit economics that capital markets won't forgive (OpenView SaaS Benchmarks; SaaStr Index).",
      "ABM programs generate 97% higher ROI than other marketing initiatives when properly executed (ITSMA / Demand Metric).",
    ],
    process: [
      { step: "ICP & Messaging", detail: "Segment, persona, message mapping." },
      { step: "Demand Gen", detail: "Paid + organic channels to fill pipeline." },
      { step: "ABM", detail: "Target account lists and multi-channel plays." },
      { step: "Revenue Ops", detail: "Attribution and sales enablement." },
    ],
    deliverables: ["ICP map", "ABM playbook", "Paid + content programs", "Sales enablement assets"],
    tools: ["HubSpot", "6sense", "Clay", "Apollo", "LinkedIn Sales Navigator"],
    outcomes: ["Predictable pipeline", "Lower CAC payback", "Higher win rates"],
    faqs: [
      { q: "Do you do account-based marketing (ABM)?", a: "Yes — 1:1 (fewer than 20 enterprise accounts with bespoke campaigns), 1:few (20–100 accounts with tailored segment plays), and 1:many (500+ accounts with firmographic targeting). We build target-account lists in Clay or Apollo, run LinkedIn matched-audience ads against them, and coordinate SDR outbound on the same account lists." },
      { q: "How do you handle long B2B sales cycles?", a: "Multi-touch attribution, content sequences tied to buying-committee roles, and patience. Median B2B decisions involve 6–10 stakeholders and take 3–9 months for deals over $50K (Gartner). We design campaigns that warm multiple stakeholders simultaneously rather than optimizing for a single MQL conversion." },
      { q: "What's the minimum engagement size?", a: "$15,000/month for a focused B2B program (content + paid + basic ABM). $30,000+/month for full-funnel including ABM at scale, SDR enablement, and attribution. Below $15K, we typically recommend a 6-week B2B strategy sprint to lock the fundamentals before committing to an ongoing program." },
    ],
    keywords: ["b2b marketing agency", "saas marketing agency", "abm agency", "linkedin ads", "demand generation"],
    related: ["performance-marketing", "content-marketing", "marketing-automation"],
  },
  {
    slug: "ai-marketing",
    title: "AI Marketing & Automation",
    shortTitle: "AI Marketing",
    icon: "Sparkles",
    tagline: "Leverage AI across your entire marketing stack.",
    summary:
      "AI content, AI SDRs, custom GPTs, AI agents, LLM-SEO, and workflow automation with Claude, GPT-4, and open-source models.",
    whatItIs:
      "AI is the biggest productivity unlock in marketing since the spreadsheet. We implement AI across content, SDR outreach, CX, SEO, and analytics — while keeping a human in the loop where it matters.",
    whyItMatters: [
      "ChatGPT reached 300+ million weekly active users in 2024, and Google AI Overviews now appear in ~45% of US search queries (OpenAI; BrightEdge AI Overview tracking).",
      "AI-augmented marketing teams ship content and creative 3–10x faster than traditional teams, with the highest productivity gains in briefing, ad variation, and weekly reporting (McKinsey Generative AI Productivity Study; our own agency data).",
      "The Princeton GEO study found that adding cited statistics to content boosts AI citation visibility by 37%, while keyword stuffing actively reduces it by 10% — AI SEO requires different tactics than traditional SEO.",
      "Being cited in AI answers is the new page-1. Brands not invested in AI visibility today will face the same disadvantage as brands that ignored mobile in 2012.",
    ],
    process: [
      { step: "AI Audit", detail: "Where AI adds leverage vs. where it adds risk." },
      { step: "Build", detail: "Custom agents, prompts, pipelines, integrations." },
      { step: "Enable", detail: "Team training + governance." },
    ],
    deliverables: ["AI workflows", "Custom GPTs & agents", "LLM-SEO strategy", "Governance framework"],
    tools: ["Claude", "GPT-4", "n8n", "Zapier", "Make", "LangChain"],
    outcomes: ["Faster output", "Lower cost per asset", "AI citations"],
    faqs: [
      { q: "Is AI-generated content penalized by Google?", a: "No. Google's Helpful Content system penalizes unhelpful content regardless of whether it's AI-generated or human-written. The March 2024 and follow-up Core Updates targeted scaled content abuse — mass-generated pages that don't add unique value — not AI content per se. We combine AI for research, briefs, and first drafts with human SMEs for voice, judgment, and the quality pass that determines whether content is actually useful." },
      { q: "What's LLM-SEO / AI SEO?", a: "LLM-SEO (also called GEO, generative engine optimization, or AEO, answer engine optimization) is the practice of optimizing content to be cited by AI answer engines — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini. The tactics are related to but distinct from traditional SEO: original data, clear answer-first structure, entity density, and strong schema markup are especially citation-boosting. Keyword stuffing actively hurts AI visibility." },
      { q: "Do you build custom GPTs and AI agents?", a: "Yes. Custom GPTs for internal team workflows (briefing, research, ad variation), AI agents for outbound SDR augmentation, LLM-powered content pipelines with human review loops, and integrated agent systems via LangChain, n8n, or Zapier. Every build comes with governance docs — what the agent can and can't do, and the escalation path when it's unsure." },
    ],
    keywords: ["ai marketing agency", "ai automation", "llm seo", "custom gpts", "ai agents"],
    related: ["content-marketing", "marketing-automation", "seo"],
  },
  {
    slug: "app-development",
    title: "Mobile & Web App Development",
    shortTitle: "App Development",
    icon: "Smartphone",
    tagline: "Ship polished apps, faster.",
    summary:
      "iOS, Android, and web apps built on React Native, Swift, Kotlin, and modern stacks.",
    whatItIs:
      "Sometimes a website isn't enough. We design and build native and cross-platform apps — from MVPs to at-scale products — with the same discipline we bring to marketing sites.",
    whyItMatters: [
      "Mobile apps drive 3x higher conversion rates and 4x higher purchase-per-visit values than mobile web for ecommerce and services brands (Criteo Shopper Story; App Annie / data.ai).",
      "App users have 3–4x higher retention at day 90 than web-only users for the same brand — apps compound engagement over time (Adjust Mobile App Trends Report).",
      "Average time spent in apps reached 5 hours per day per user in 2024 — more than every other digital surface combined (data.ai State of Mobile Report).",
    ],
    process: [
      { step: "Discovery", detail: "Product scoping and tech selection." },
      { step: "Design", detail: "UX, UI, and design system." },
      { step: "Build", detail: "Engineering, QA, release." },
      { step: "Growth", detail: "ASO, push, in-app experimentation." },
    ],
    deliverables: ["Product strategy", "Design system", "Released app", "ASO plan"],
    tools: ["React Native", "Swift", "Kotlin", "Expo", "Firebase"],
    outcomes: ["Shipped product", "Higher retention", "Growth loops"],
    faqs: [
      { q: "Do you do ASO (App Store Optimization)?", a: "Yes. ASO is to apps what SEO is to websites — keyword research, listing copy optimization, screenshot and video A/B testing, review velocity management, and category selection. Apple Search Ads and Google UAC integration for paid amplification. Most of our app-development engagements include an ASO layer at launch." },
      { q: "Which platforms do you build for?", a: "iOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose), and cross-platform (React Native, Expo, Flutter). We pick the stack based on performance requirements, team composition, and feature complexity — React Native works for 80% of use cases; native is the right call for graphics-intensive or deeply platform-integrated products." },
      { q: "How do you handle post-launch growth?", a: "Post-launch, we run ASO, push notification strategy, in-app experimentation via Amplitude or Statsig, growth-loop design, and App Store featured-placement pitches. The engineering of the app is 40% of the work; the other 60% is the growth system around it." },
    ],
    keywords: ["mobile app development", "react native agency", "ios development", "android development", "aso"],
    related: ["web-development", "ux-design", "performance-marketing"],
  },
  {
    slug: "consulting",
    title: "Fractional CMO & Marketing Consulting",
    shortTitle: "Fractional CMO",
    icon: "Briefcase",
    tagline: "A seasoned CMO, without the full-time cost.",
    summary:
      "Fractional CMO and senior marketing strategy engagements for founders who need executive leadership, not a full hire.",
    whatItIs:
      "A fractional CMO engagement brings senior marketing leadership into your business for 1–3 days per week — strategy, hiring, vendor management, and board reporting, without full-time cost.",
    whyItMatters: [
      "The median tenure of a CMO is now 4.2 years — the shortest of any C-suite role — reflecting how often early CMO hires are a mis-fit (Spencer Stuart CMO Tenure Study, 2024).",
      "Full-time CMO comp at growth-stage SaaS ranges $280K–$550K base plus equity; fractional engagements typically deliver comparable strategic leverage at 20–35% of that cost.",
      "A great fractional leader compounds across every vendor, agency partner, and internal hire — turning fragmented execution into a coordinated growth system.",
    ],
    process: [
      { step: "Onboarding", detail: "Business deep-dive and audit." },
      { step: "Plan", detail: "90-day plan + 12-month roadmap." },
      { step: "Execute", detail: "Weekly leadership, hiring, vendor mgmt." },
    ],
    deliverables: ["Marketing strategy", "Org design", "Board-ready reporting"],
    tools: ["Notion", "Airtable", "HubSpot"],
    outcomes: ["Clearer strategy", "Faster decisions", "Better ROI on marketing"],
    faqs: [
      { q: "How long does a fractional CMO engagement typically run?", a: "6–12 months, reviewed quarterly. Most engagements extend beyond the initial term because the role compounds — once a fractional CMO has the business context, org relationships, and reporting systems in place, the ROI is highest in months 6–18." },
      { q: "How many days per week do you work with clients?", a: "Typical fractional CMO engagements run 1–3 days per week. 1 day works for early-stage startups needing strategic direction. 2–3 days is standard for Series A/B companies managing multiple agencies, internal hires, and executive reporting." },
      { q: "When should I hire a full-time CMO instead?", a: "When your marketing organization crosses ~8 people, you're past Series B, or marketing is itself becoming a strategic leadership capacity question. Below that threshold, full-time CMO comp ($280K–$550K + equity) typically outpaces the leverage the role provides. A great fractional leader bridges to that full-time hire and often helps recruit them." },
    ],
    keywords: ["fractional cmo", "marketing consultant", "marketing strategy", "cmo services"],
    related: ["b2b-marketing", "ecommerce-marketing", "ai-marketing"],
  },
];

services.push(
  {
    slug: "social-media-strategy",
    title: "Social Media Strategy & Consulting",
    shortTitle: "Social Strategy",
    icon: "Compass",
    tagline: "A battle-tested playbook your team can run every week.",
    summary:
      "Audience research, channel selection, content pillars, editorial calendars, and measurement frameworks — the strategy layer behind every great social brand.",
    whatItIs:
      "Most brands don't need more posts — they need a sharper strategy. We build social strategies grounded in audience research, cultural trends, and platform mechanics: who you're for, what you stand for, where you show up, how you measure it, and the 4–6 content pillars you'll own. The output is a living playbook your in-house team or our production crew can execute every week.",
    whyItMatters: [
      "Brands with documented social-media strategies are 414% more likely to report success than those without one (Content Marketing Institute / Marketing Profs B2C Benchmarks).",
      "Consistent posting cadence tied to a pillar strategy drives 3x engagement versus random-schedule posting (Sprout Social Index, 2024).",
      "Strategy prevents the #1 killer of social results: inconsistent, on-the-fly posting.",
      "Channel fit matters — the right content on the wrong platform gets ignored. A documented playbook makes every new hire, creator, or agency partner instantly productive.",
    ],
    process: [
      { step: "Audience & Category Research", detail: "Listening, competitor teardown, ICP interviews, and white-space mapping." },
      { step: "Positioning & Narrative", detail: "Brand POV, tone of voice, distinctive assets, and narrative arcs." },
      { step: "Channel Plan", detail: "Platform selection with publishing cadence and format-level KPIs." },
      { step: "Content Pillars & Frameworks", detail: "4–6 pillars with repeatable hooks and content frameworks." },
      { step: "Playbook & Measurement", detail: "Editorial calendar template, brand guardrails, and reporting dashboard." },
    ],
    deliverables: [
      "Social strategy deck",
      "Platform-by-platform channel plan",
      "Content pillars with example hooks",
      "90-day editorial calendar",
      "Brand voice & guardrails doc",
      "KPI tree and reporting template",
    ],
    tools: ["Sprout Social", "Brandwatch", "Meltwater", "Notion", "Airtable", "Figma"],
    outcomes: [
      "Clear, repeatable weekly cadence",
      "Content the algorithm actually rewards",
      "Measurable funnel impact — not just vanity metrics",
    ],
    faqs: [
      { q: "Is this different from social media management?", a: "Yes. Strategy defines what, where, why, and how to measure. Management is the weekly execution of that plan. We offer both — together or separately." },
      { q: "How long does a strategy engagement take?", a: "4–6 weeks for a full strategy; 2 weeks for a focused 90-day sprint plan." },
    ],
    keywords: ["social media strategy", "social media consulting", "brand social strategy", "content pillars", "editorial calendar", "social playbook"],
    related: ["social-media-marketing", "branding", "content-marketing"],
  },
  {
    slug: "marketing-platforms",
    title: "Marketing Platforms & MarTech Stack",
    shortTitle: "Marketing Platforms",
    icon: "Boxes",
    tagline: "One connected stack. Every channel on speaking terms.",
    summary:
      "Selection, implementation, integration, and governance of your marketing platforms — CRM, CDP, email, analytics, ads, CMS, attribution, and AI tooling.",
    whatItIs:
      "Your marketing platforms are the plumbing behind every campaign. Done right, data flows cleanly between ads, CRM, site, email, and analytics — and your team moves faster. Done wrong, half your budget is wasted on broken tracking, duplicate tools, and reports no one trusts. We audit, select, implement, and govern the full MarTech stack across CRM (HubSpot, Salesforce), CDP (Segment, RudderStack), email/SMS (Klaviyo, Iterable, Customer.io), analytics (GA4, Amplitude, Mixpanel), ads (Google, Meta, LinkedIn, TikTok), CMS (Sanity, Contentful, WordPress, Webflow), and attribution (Triple Whale, Hyros, Northbeam).",
    whyItMatters: [
      "The average enterprise marketing team now uses 91 different tools; only about a third are used meaningfully and 60% of tool budget is wasted on overlapping or abandoned licenses (Gartner MarTech Utilization Survey, 2024).",
      "Broken attribution and tracking waste 20–40% of paid-media spend on poorly-targeted audiences (Forrester Marketing Measurement Report).",
      "Companies with integrated MarTech stacks report 2.3x higher marketing ROI than those running fragmented tools (Salesforce State of Marketing, 2024).",
      "A well-architected stack is a permanent competitive advantage — it compounds.",
    ],
    process: [
      { step: "Stack Audit", detail: "Inventory of tools, usage, costs, overlaps, and data flow." },
      { step: "Architecture & Selection", detail: "Target-state architecture and tool selection (build vs. buy vs. consolidate)." },
      { step: "Implementation", detail: "Configuration, integration (native + iPaaS), data migration, and QA." },
      { step: "Enablement & Governance", detail: "Playbooks, naming conventions, data contracts, and admin ownership." },
      { step: "Ongoing Optimization", detail: "Quarterly reviews, tool swaps, and roadmap planning." },
    ],
    deliverables: [
      "Current-state stack audit",
      "Target-state architecture diagram",
      "Tool selection recommendation",
      "Implementation plan & RACI",
      "Integrations (native + Zapier/Make/n8n/iPaaS)",
      "Data governance & naming conventions",
      "Team enablement docs and training",
    ],
    tools: ["HubSpot", "Salesforce", "Segment", "RudderStack", "Klaviyo", "Iterable", "Customer.io", "GA4", "Amplitude", "Mixpanel", "Zapier", "Make", "n8n", "Workato"],
    outcomes: [
      "Single source of truth for marketing and revenue data",
      "Lower tool costs via consolidation",
      "Faster campaign velocity",
      "Attribution you can actually trust",
    ],
    faqs: [
      { q: "Do you implement HubSpot and Salesforce?", a: "Yes — from Starter/Sales Cloud through Enterprise, including custom objects, CPQ, and integrations." },
      { q: "Can you take over an existing stack?", a: "Absolutely. Most engagements start with a stack audit before any changes are made." },
      { q: "Are you vendor-neutral?", a: "Yes. We recommend tools based on fit, not partner commissions." },
    ],
    keywords: ["martech stack", "marketing platforms", "hubspot implementation", "salesforce marketing", "segment cdp", "marketing operations", "revops", "marketing technology"],
    related: ["marketing-automation", "analytics", "ai-marketing"],
  },
);

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
