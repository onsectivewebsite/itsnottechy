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
};

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
      "68% of online experiences begin with a search engine — organic is the highest-intent channel you can own.",
      "Unlike ads, SEO compounds. Each ranking page keeps earning traffic long after the work is done.",
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
      { q: "How long until I see results?", a: "Quick wins in 30–60 days, meaningful compounding traffic between months 4–9. SEO is a 12-month commitment minimum." },
      { q: "Do you guarantee #1 rankings?", a: "No ethical agency does. We guarantee effort, transparency, and measurable progress against pre-agreed KPIs." },
      { q: "Is AI-generated content ok?", a: "Yes, when directed by strategy and edited by humans with subject-matter expertise. Google rewards helpfulness, not authorship." },
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
      { q: "What's the minimum ad budget?", a: "We recommend $5k/mo minimum across a single platform so statistical significance is achievable. Full-funnel typically starts at $15k/mo." },
      { q: "Do you create ad creative?", a: "Yes. Creative is 70% of performance. In-house designers, motion artists, and UGC creators ship weekly." },
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
      "Social is the #1 brand discovery channel for Gen Z and millennials.",
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
      "A 1-second speed improvement can lift conversions up to 27%.",
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
      "Consistent branding increases revenue by up to 23%.",
      "Distinctive brand assets are the #1 driver of ad recall.",
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
    faqs: [{ q: "Do you do rebrands?", a: "Yes — full rebrands and brand refreshes." }],
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
    whyItMatters: ["Content is the fuel for SEO, social, email, and sales enablement.", "Authoritative content is the moat AI can't easily copy."],
    process: [
      { step: "Editorial Strategy", detail: "ICP research, pillar topics, SME sourcing." },
      { step: "Briefs & Outlines", detail: "Every piece has a data-backed brief before a word is written." },
      { step: "Writing & Editing", detail: "SME writers, editorial review, fact-checking." },
      { step: "Distribution", detail: "Organic, email, social, and syndication." },
    ],
    deliverables: ["4–20 articles/month", "Whitepapers & ebooks", "Case studies", "Newsletter copy", "Sales enablement content"],
    tools: ["Ahrefs", "Surfer", "Clearscope", "Notion", "Google Docs"],
    outcomes: ["Compounding organic traffic", "Thought leadership", "Stronger sales enablement"],
    faqs: [{ q: "Do you use AI?", a: "Yes, for briefs, research, and first drafts — always reviewed and elevated by human SMEs." }],
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
    whyItMatters: ["$42 return for every $1 spent.", "Owned channel — no algorithm to fight."],
    process: [
      { step: "Audit & Strategy", detail: "Deliverability, list health, and flow gap analysis." },
      { step: "Design System", detail: "On-brand, modular email templates." },
      { step: "Flow Build-out", detail: "Core flows + segmentation logic." },
      { step: "Campaigns & Testing", detail: "Weekly campaigns and A/B tests." },
    ],
    deliverables: ["Flow maps", "Template library", "Weekly campaigns", "Monthly reporting"],
    tools: ["Klaviyo", "HubSpot", "Customer.io", "Braze", "Mailchimp", "Postmark"],
    outcomes: ["Higher LTV", "Lower churn", "30%+ of ecom revenue"],
    faqs: [{ q: "Do you do SMS?", a: "Yes — SMS, MMS, and WhatsApp flows on Attentive and Klaviyo SMS." }],
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
    whyItMatters: ["Nurtured leads make 47% larger purchases.", "Sales teams work better pipeline."],
    process: [
      { step: "CRM Audit", detail: "Data model, pipeline, properties, and integrations review." },
      { step: "Architecture", detail: "Lead lifecycle, scoring, routing, and SLAs." },
      { step: "Build & Integrate", detail: "Workflows, integrations, and attribution." },
      { step: "Enable Sales", detail: "Dashboards, playbooks, and training." },
    ],
    deliverables: ["CRM setup", "Lead scoring model", "Automated nurture sequences", "Attribution dashboards"],
    tools: ["HubSpot", "Salesforce", "ActiveCampaign", "Zapier", "Make", "n8n", "Segment"],
    outcomes: ["Faster lead response", "Higher MQL→SQL conversion", "Full funnel visibility"],
    faqs: [{ q: "Do you do HubSpot implementations?", a: "Yes — from Starter to Enterprise, including custom objects and integrations." }],
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
    whyItMatters: ["A 1-point CVR lift can be worth more than doubling ad spend.", "CRO learnings compound across every channel."],
    process: [
      { step: "Research", detail: "Heatmaps, session replays, polls, user testing." },
      { step: "Hypothesis", detail: "Prioritized backlog with PIE/ICE scoring." },
      { step: "Experimentation", detail: "A/B & MVT on VWO, Convert, or GrowthBook." },
      { step: "Scale Winners", detail: "Ship site-wide, share learnings." },
    ],
    deliverables: ["Research findings", "Experiment backlog", "Weekly/monthly experiments", "Test reports"],
    tools: ["VWO", "Convert", "GrowthBook", "Hotjar", "FullStory", "Microsoft Clarity"],
    outcomes: ["10–40% CVR lift per quarter on focused programs", "Proven learnings your team owns"],
    faqs: [{ q: "Do we need high traffic for CRO?", a: "Yes — 10k+ sessions/month for reliable stats. Below that we focus on qualitative research and UX fixes." }],
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
    whyItMatters: ["You can't optimize what you can't trust.", "Most accounts lose 20–40% of conversions to broken tracking."],
    process: [
      { step: "Data Audit", detail: "What you track today vs. what you should track." },
      { step: "Measurement Plan", detail: "Events, parameters, KPIs, identity resolution." },
      { step: "Implementation", detail: "GTM, CAPI, Stape, server-side GTM." },
      { step: "Dashboards", detail: "Looker Studio / Metabase / Tableau." },
    ],
    deliverables: ["Measurement plan", "GTM/GA4 setup", "Server-side tracking", "Dashboards", "QA report"],
    tools: ["GA4", "GTM", "Stape", "Segment", "Looker Studio", "BigQuery"],
    outcomes: ["Accurate revenue attribution", "Single source of truth"],
    faqs: [{ q: "Server-side tracking — do I need it?", a: "Yes, if you run paid ads. iOS 17 link tracking and cookie loss can break up to 40% of client-side events." }],
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
    whyItMatters: ["92% of consumers trust creator recommendations over branded content.", "UGC outperforms studio ads 2–4x on average."],
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
    faqs: [{ q: "Do you do gifting?", a: "Yes — gifting, paid partnerships, and long-term ambassador programs." }],
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
    whyItMatters: ["Video campaigns drive 2x higher click-through rates on paid social.", "Short-form video dominates platform algorithms."],
    process: [
      { step: "Concept", detail: "Treatments, scripts, storyboards." },
      { step: "Production", detail: "Studio or location shoots, DP, crew." },
      { step: "Post", detail: "Edit, color, sound, motion graphics." },
      { step: "Distribution", detail: "Platform cuts, captions, and A/B variants." },
    ],
    deliverables: ["Hero films", "Social cut-downs", "Motion graphics", "Animated explainers"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Blender"],
    outcomes: ["Higher engagement", "Stronger ad creative", "Reusable content library"],
    faqs: [{ q: "Do you shoot in-studio?", a: "Yes — we have a network of studios across North America, Europe, and Asia." }],
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
    whyItMatters: ["Strong creative drives 80% of media effectiveness.", "Design consistency builds trust and recognition."],
    process: [
      { step: "Intake", detail: "Ticketing + briefs." },
      { step: "Design", detail: "Kickoff, drafts, reviews." },
      { step: "Delivery", detail: "Hand-off with source files + usage rights." },
    ],
    deliverables: ["Ad creative", "Social templates", "Pitch decks", "Landing page design", "Print & packaging"],
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    outcomes: ["Consistent brand", "Faster campaign velocity"],
    faqs: [{ q: "Do you offer unlimited design?", a: "Yes — subscription model with a dedicated designer." }],
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
    whyItMatters: ["Every $1 in UX returns $100.", "Great UX is the cheapest growth lever you have."],
    process: [
      { step: "Research", detail: "Interviews, analytics, JTBD mapping." },
      { step: "Wireframes", detail: "Low-fi flows and IA." },
      { step: "Hi-Fi Design", detail: "Figma, interactive prototypes." },
      { step: "Design System", detail: "Reusable tokens and components." },
    ],
    deliverables: ["User research report", "Wireframes & prototypes", "UI designs", "Design system"],
    tools: ["Figma", "FigJam", "Maze", "Dovetail"],
    outcomes: ["Higher conversion", "Better activation", "Lower support tickets"],
    faqs: [{ q: "Do you work with engineers?", a: "Yes — we ship in design-to-dev handoff with component specs." }],
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
    whyItMatters: ["DTC margins are thin — sloppy marketing wipes out profit.", "Retention is where profitable brands are built."],
    process: [
      { step: "Economics Audit", detail: "AOV, margin, CAC, LTV, and cohort analysis." },
      { step: "Acquisition", detail: "Meta, Google, TikTok, creator ads." },
      { step: "Site & Checkout", detail: "Theme optimization, CRO, upsell apps." },
      { step: "Retention", detail: "Email, SMS, subscription, loyalty." },
    ],
    deliverables: ["Growth plan", "Ad campaigns", "Site optimizations", "Email/SMS flows", "Weekly reporting"],
    tools: ["Shopify", "Klaviyo", "Triple Whale", "Recharge", "Gorgias", "Yotpo"],
    outcomes: ["Profitable scale", "Higher AOV and LTV", "Lower returns"],
    faqs: [{ q: "Do you do Shopify development?", a: "Yes — custom themes, app integrations, and headless Shopify Hydrogen builds." }],
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
    whyItMatters: ["46% of searches have local intent.", "A top-3 map pack slot can double bookings."],
    process: [
      { step: "GBP Audit", detail: "NAP, categories, attributes, photos, services." },
      { step: "Citations", detail: "Fix and build on top 50+ directories." },
      { step: "Reviews", detail: "Automated review generation and response." },
      { step: "Content", detail: "Service-area and location pages." },
    ],
    deliverables: ["GBP optimization", "Citation cleanup", "Review engine", "Local landing pages"],
    tools: ["BrightLocal", "Whitespark", "Moz Local", "Birdeye", "Podium"],
    outcomes: ["More map pack visibility", "More phone calls and directions", "More reviews"],
    faqs: [{ q: "Multi-location?", a: "Yes — we manage 100s of locations with scaled processes." }],
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
    whyItMatters: ["94% of consumers avoid businesses with bad reviews.", "A half-star rating increase can lift revenue by 5–9%."],
    process: [
      { step: "Audit", detail: "Current sentiment, review velocity, SERP real estate." },
      { step: "Response", detail: "Daily monitoring and on-brand responses." },
      { step: "Generation", detail: "Automated review requests across channels." },
      { step: "Suppression", detail: "Positive content to push negative SERP results down." },
    ],
    deliverables: ["Review playbook", "Response management", "Monthly sentiment report"],
    tools: ["Birdeye", "Reputation.com", "Trustpilot", "Google Alerts", "Brand24"],
    outcomes: ["Higher star ratings", "Cleaner first-page SERPs", "Better close rates"],
    faqs: [{ q: "Can you remove bad reviews?", a: "Only those that violate platform policies. Our focus is drowning them out with great reviews." }],
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
    whyItMatters: ["High-authority links are the #1 off-page SEO factor.", "Press coverage builds brand authority money can't buy."],
    process: [
      { step: "Story Development", detail: "Surveys, data, and newsworthy angles." },
      { step: "Outreach", detail: "Journalist relationships and targeted pitches." },
      { step: "Measurement", detail: "Coverage, referring domains, branded search lift." },
    ],
    deliverables: ["Campaign concepts", "Outreach lists", "Monthly coverage report"],
    tools: ["Muck Rack", "Prowly", "BuzzStream", "Ahrefs"],
    outcomes: ["Tier-1 press", "DR-70+ backlinks", "Branded search lift"],
    faqs: [{ q: "Do you do HARO?", a: "Yes — HARO/Qwoted/SourceBottle as part of a broader strategy." }],
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
    whyItMatters: ["B2B buyers are 70% through the decision before talking to sales.", "CAC payback windows under 18 months define efficient SaaS growth."],
    process: [
      { step: "ICP & Messaging", detail: "Segment, persona, message mapping." },
      { step: "Demand Gen", detail: "Paid + organic channels to fill pipeline." },
      { step: "ABM", detail: "Target account lists and multi-channel plays." },
      { step: "Revenue Ops", detail: "Attribution and sales enablement." },
    ],
    deliverables: ["ICP map", "ABM playbook", "Paid + content programs", "Sales enablement assets"],
    tools: ["HubSpot", "6sense", "Clay", "Apollo", "LinkedIn Sales Navigator"],
    outcomes: ["Predictable pipeline", "Lower CAC payback", "Higher win rates"],
    faqs: [{ q: "Do you do ABM?", a: "Yes — 1:1, 1:few, and 1:many ABM programs with Clay + LinkedIn." }],
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
    whyItMatters: ["AI-augmented teams ship 3–10x faster.", "LLM-SEO is a new channel — being cited in AI answers is the new page-1."],
    process: [
      { step: "AI Audit", detail: "Where AI adds leverage vs. where it adds risk." },
      { step: "Build", detail: "Custom agents, prompts, pipelines, integrations." },
      { step: "Enable", detail: "Team training + governance." },
    ],
    deliverables: ["AI workflows", "Custom GPTs & agents", "LLM-SEO strategy", "Governance framework"],
    tools: ["Claude", "GPT-4", "n8n", "Zapier", "Make", "LangChain"],
    outcomes: ["Faster output", "Lower cost per asset", "AI citations"],
    faqs: [{ q: "Is AI content penalized by Google?", a: "No — only unhelpful content is. We combine AI speed with human quality." }],
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
    whyItMatters: ["Apps drive retention and LTV for engaged audiences.", "A thoughtful app can be a competitive moat."],
    process: [
      { step: "Discovery", detail: "Product scoping and tech selection." },
      { step: "Design", detail: "UX, UI, and design system." },
      { step: "Build", detail: "Engineering, QA, release." },
      { step: "Growth", detail: "ASO, push, in-app experimentation." },
    ],
    deliverables: ["Product strategy", "Design system", "Released app", "ASO plan"],
    tools: ["React Native", "Swift", "Kotlin", "Expo", "Firebase"],
    outcomes: ["Shipped product", "Higher retention", "Growth loops"],
    faqs: [{ q: "Do you do ASO?", a: "Yes — App Store Optimization is part of our growth stack." }],
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
    whyItMatters: ["Most startups don't need a full-time CMO — they need executive thinking applied weekly.", "A great fractional leader compounds across every vendor and hire."],
    process: [
      { step: "Onboarding", detail: "Business deep-dive and audit." },
      { step: "Plan", detail: "90-day plan + 12-month roadmap." },
      { step: "Execute", detail: "Weekly leadership, hiring, vendor mgmt." },
    ],
    deliverables: ["Marketing strategy", "Org design", "Board-ready reporting"],
    tools: ["Notion", "Airtable", "HubSpot"],
    outcomes: ["Clearer strategy", "Faster decisions", "Better ROI on marketing"],
    faqs: [{ q: "Typical engagement length?", a: "6–12 months, reviewed quarterly." }],
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
      "Strategy prevents the #1 killer of social results: inconsistent, on-the-fly posting.",
      "Channel fit matters — the right content on the wrong platform gets ignored.",
      "A documented playbook makes every new hire, creator, or agency partner instantly productive.",
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
      "The average mid-market brand runs 90+ martech tools; only a third are used meaningfully.",
      "Broken tracking wastes 20–40% of paid media spend on the wrong audiences.",
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
