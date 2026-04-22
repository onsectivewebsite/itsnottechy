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
type Seed = {
  cat: string;
  title: string;
  excerpt: string;
  sections: { h2: string; body: string }[];
};

const SEEDS: Seed[] = [
  // SEO — 6
  {
    cat: "seo",
    title: "The SEO Audit Framework We Run Before Touching a Single Page",
    excerpt:
      "A 14-step audit that reliably surfaces the 3–5 fixes responsible for most of a site's organic ceiling.",
    sections: [
      { h2: "Why audits fail", body: "Most audits produce 80-page PDFs nobody reads. Ours ends in a prioritized punch list with estimated traffic lift, implementation difficulty, and owning team. If it doesn't fit on a single page, it isn't a plan." },
      { h2: "The 14 checks we run", body: "Index coverage, rendering, Core Web Vitals, mobile parity, internal linking, orphan detection, crawl budget, structured data, canonical hygiene, duplicate meta, log file review, keyword cannibalization, title-tag CTR, and content depth vs intent. That's the order of operations." },
      { h2: "Where we find the most lift", body: "9 times out of 10 the biggest unlock isn't technical — it's an information-architecture problem. Pages that should be one are three; pages that should be three are one. Fixing that regularly beats any other change." },
      { h2: "How to run this yourself", body: "Start with Search Console's coverage report, cross-check with a Screaming Frog crawl, then pull top-performing URLs by query and group them by intent. 80% of the audit value comes from those three views." },
    ],
  },
  {
    cat: "seo",
    title: "Topical Authority: How We Map Clusters That Actually Rank",
    excerpt:
      "A practical approach to pillar-and-cluster content that doesn't collapse into keyword stuffing.",
    sections: [
      { h2: "The problem with traditional clusters", body: "Most topic clusters are just keyword lists dressed up with a pillar page. They rank briefly and collapse because nothing connects the pieces in the way a reader — or an LLM — would traverse the space." },
      { h2: "A better mental model", body: "Think of each cluster as a syllabus. The pillar is the course description; supporting pieces are the lectures. Every page should answer a specific question a reader would ask at a specific moment in their journey." },
      { h2: "The 5-question sanity check", body: "Before publishing any cluster: can a reader answer these five questions without leaving the cluster? What is X, why does it matter, who needs it, how does it work, and what do I do next. If not, your cluster has holes." },
      { h2: "Measuring topical authority", body: "Share of voice on head terms, branded queries referencing the cluster, and the number of queries where you rank on multiple pages. Those three signals, tracked quarterly, tell you if the cluster is compounding." },
    ],
  },
  {
    cat: "seo",
    title: "Why Programmatic SEO Fails (and the Version That Works)",
    excerpt:
      "Why most programmatic pages are treated as spam by Google — and the discipline that separates scalable wins from penalized templates.",
    sections: [
      { h2: "The spam signal Google looks for", body: "Near-duplicate pages, thin content, and mass-generated templates. If your programmatic pages are 90% the same with only a city name swapped, you've built the textbook case for what Google demotes." },
      { h2: "The data depth bar", body: "Every programmatic page needs unique, useful data. A 'Dentists in Austin' page should have Austin-specific reviews, photos, pricing ranges, insurance coverage, and hours — not a canned paragraph with the city swapped in." },
      { h2: "Staging rollouts safely", body: "Launch in batches of 50–200, monitor Search Console coverage for two weeks, then proceed. If impressions plateau, something's wrong. Do not publish 20,000 pages in one shot and pray." },
      { h2: "When programmatic is the wrong answer", body: "If your category has no unique data moat — no reviews, pricing, supply, or geography — skip programmatic. You'll just build a thin content liability that drags down every other page." },
    ],
  },
  {
    cat: "seo",
    title: "How AI Overviews Changed On-Page SEO (and What We Optimize For Now)",
    excerpt:
      "Concrete formatting, structure, and citation patterns that earn citations in Google's AI Overviews and Perplexity.",
    sections: [
      { h2: "What LLM search rewards", body: "Explicit answers, structured summaries, named entities, and sources. Articles that bury the answer in paragraph six get skipped by crawlers synthesizing snippets." },
      { h2: "The answer-first pattern", body: "Open with a one-sentence direct answer. Follow with context. Close with caveats. That order — answer, context, caveat — matches how LLMs chunk and extract." },
      { h2: "Entity-rich writing", body: "Name brands, people, places, and tools explicitly. Don't write 'the platform' — write 'HubSpot Marketing Hub Enterprise'. LLMs grade relevance on entity density." },
      { h2: "Citation bait that isn't spam", body: "Original data, original definitions, and unusual but defensible claims get cited. Me-too summaries don't. If your piece could be deleted without the web losing anything, it won't be cited." },
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
    sections: [
      { h2: "Why most ad tests are useless", body: "They test button colors, font sizes, or minor copy tweaks. Even a 'winner' produces nothing the team can generalize to the next campaign. That's activity, not learning." },
      { h2: "The four-variable framework", body: "Every test isolates ONE of: audience, offer, angle, or format. Never two at once. Document the hypothesis before launch in a single sentence: 'If we [change], we expect [metric] to [direction] because [theory of mind].'" },
      { h2: "Sample size honesty", body: "Most ad accounts don't have the volume for statistically-significant tests. Accept that. Use directional learning, call it what it is, and invest in audiences big enough to give you real signal." },
      { h2: "Writing up the learning", body: "After a test, write one paragraph answering: what did we test, what did we learn, what's the next test. Keep a shared doc. In 12 months this becomes your team's most valuable asset." },
    ],
  },
  {
    cat: "paid-marketing",
    title: "Meta's Advantage+ Changed the Game. Here's How We Structure Campaigns in 2026.",
    excerpt:
      "Our current Meta campaign structure for DTC and lead gen — consolidation, creative, and what we've stopped doing.",
    sections: [
      { h2: "Why we consolidated", body: "Old-school structures with 30 ad sets per campaign are dead. Modern Meta optimizes best with consolidated budgets, broad audiences, and a steady stream of fresh creative. We ship one campaign per offer, three ad sets per campaign, lots of creative." },
      { h2: "Creative volume over targeting precision", body: "We produce 8–12 new ads per week per account. Creative diversity beats audience segmentation. Meta's ML finds the right person for each ad better than we ever could." },
      { h2: "What we stopped doing", body: "CBO vs ABO debates, lookalike-only targeting, hyper-segmented ad sets, and manual bid caps. All of these underperform consolidated broad campaigns now." },
      { h2: "Reading the signal", body: "Look at post-purchase surveys, MER (Marketing Efficiency Ratio), and contribution margin. Meta's in-platform ROAS is a scorecard, not a truth." },
    ],
  },
  {
    cat: "paid-marketing",
    title: "Stop Optimizing for ROAS. Optimize for CAC Payback.",
    excerpt:
      "Why ROAS is a vanity metric for any business with repeat purchase and a real lifetime value, and how to move your reporting to contribution margin.",
    sections: [
      { h2: "What ROAS hides", body: "ROAS treats all revenue the same. $100 from a first-time customer is not equal to $100 from a repeat customer. $100 before COGS is not $100 in the bank." },
      { h2: "The metric we actually watch", body: "New-customer contribution margin. Revenue from first-time buyers minus COGS minus ad cost. If it's positive on day zero, you have a profitable acquisition engine. If not, you need LTV to cover the gap." },
      { h2: "Payback windows that work", body: "Under 3 months for DTC with recurring purchase. Under 12 months for SaaS. Under 18 months for complex B2B. Anything beyond that is betting the company on a model you can't validate fast enough." },
      { h2: "The reporting change we made", body: "We stopped showing ROAS on monthly decks. We show new-customer payback curves. Clients make better budget decisions within a month." },
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
    sections: [
      { h2: "The CPL trap", body: "Cheap LinkedIn leads are almost always low-intent. Optimize for cost per SQL, not cost per lead. Your sales team will tell you within 30 days if the quality is right." },
      { h2: "What we run", body: "Single image ads for gated assets, document ads for proof points, conversation ads for high-intent outbound. We avoid video ads — they're more expensive without proportionately better signal." },
      { h2: "Matched audiences are the secret", body: "Upload target-account lists from Clay or Apollo and run tight campaigns against them. LinkedIn's audience is the product — use it surgically." },
      { h2: "Pairing with SDR outbound", body: "LinkedIn ads warm accounts for SDR outreach. When the outbound email lands on an account that's seen the ad three times, reply rates double. Track this explicitly." },
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
    sections: [
      { h2: "Why random posting fails", body: "Without pillars, every post is a one-off. You build no narrative, no audience expectation, and no compounding equity." },
      { h2: "Picking your four pillars", body: "Education, proof, personality, and point-of-view. Every brand we work with fits this shape — the content in each bucket varies, but the bucket structure is universal." },
      { h2: "The six formats", body: "Tutorial, listicle, before-and-after, myth-busting, founder story, behind-the-scenes. Mixing format and pillar gives you 24 content slots — more than enough for any month." },
      { h2: "Enforcement", body: "Every post has to name its pillar and format before it goes in the calendar. If it can't, it gets cut. Discipline here is worth 10x the fanciest strategy deck." },
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
    sections: [
      { h2: "The brief is the work", body: "A great brief makes the first draft 80% right. A bad brief makes writers guess, editors rewrite, and clients ask for revisions. Time spent on briefs saves 3x on the other side." },
      { h2: "What a real brief contains", body: "The target reader in one sentence. The one question we're answering. The three proof points required. The format structure. Internal and external link targets. SME name and interview questions." },
      { h2: "The interview you must do", body: "Before any piece on a specialty topic, we interview an SME for 20 minutes. That interview is the raw material. Without it, you're producing paraphrased blog posts anyone could write." },
      { h2: "Time budgets that matter", body: "We budget 2 hours to brief, 4 to draft, 1 to edit. The front-loading feels wasteful until you realize the draft doesn't need three rounds of revisions." },
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
    sections: [
      { h2: "What Next.js unlocks", body: "Sub-1s LCP on every page, flexibility for custom interactions, edge rendering, and a component model that scales across marketing, app, and commerce surfaces." },
      { h2: "When we choose Webflow instead", body: "Marketing teams with no engineering budget and a strong visual-first design language. Webflow is a great ceiling for teams that just need 'fast, pretty, and editable'." },
      { h2: "When we choose Shopify", body: "DTC brands. The ecosystem, checkout, and merchandising features are worth the template constraints unless you're at $30M+ revenue with headless-worthy customization needs." },
      { h2: "What to avoid", body: "WordPress for anything net-new. The plugin ecosystem is a maintenance tax and the performance ceiling is low. We migrate clients off it constantly." },
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
    sections: [
      { h2: "Brief generation", body: "A Claude-powered briefing agent that takes a URL + target keyword and produces a full content brief. Saves 2 hours per brief; we produce 20 briefs a week." },
      { h2: "Ad creative first drafts", body: "GPT-4 with a few-shot library of winning ad copy generates 20 variations per request. Human editor picks and polishes. 10x output per designer." },
      { h2: "Weekly report summaries", body: "A script that pulls GA4 + Search Console + ad platform data into a one-paragraph executive summary. Saves 4 hours per account per week." },
      { h2: "The workflow that didn't work", body: "AI-generated full-length articles. Even with editing, they read flat. Content is the one place AI accelerates research but not writing." },
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
    sections: [
      { h2: "Speed first", body: "LCP under 2s on mobile. That alone recovers 5–15% conversion on most themes. Everything else is secondary." },
      { h2: "PDP essentials", body: "Product images with zoom, size guide, reviews above the fold, clear shipping info, and a prominent CTA. Most themes fail one or more." },
      { h2: "Checkout friction", body: "Enable Shop Pay, remove surprise fees late in checkout, and expose shipping cost on PDP. Every added step costs 2–5% of conversion." },
      { h2: "Cart drawer", body: "Upsells in the cart drawer (bundle-style, not pushy cross-sell) lift AOV 8–15%. Worth the work on every theme." },
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
    sections: [
      { h2: "The core eight", body: "page_view, click_cta, form_submit, scroll_depth_75, video_play, file_download, signup, purchase. That's the foundation. Ship these before anything custom." },
      { h2: "The parameters to include", body: "Every event: page_type, section, item_name. These three cover most downstream reporting. Skip them and you'll regret it at month three." },
      { h2: "Event naming conventions", body: "snake_case, verb_noun, past tense where sensible. form_submitted, not 'Form Submit'. Consistency saves hours in reporting." },
      { h2: "What not to track", body: "Every mouse movement, every click on every link, every form field focus. You'll drown in data. Track what maps to decisions." },
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
    sections: [
      { h2: "The five", body: "Hero headline clarity test, CTA button copy test, pricing page simplification, checkout form reduction, and mobile sticky CTA. These are the reliable 'winners'." },
      { h2: "Headline clarity wins most", body: "Specific, outcome-focused headlines beat clever headlines 80% of the time. 'Book a call' loses to 'See pricing in 30 seconds' almost always." },
      { h2: "Pricing page reduction", body: "Most pricing pages have too many tiers and too much detail. Cutting to 3 tiers with one-sentence descriptions consistently lifts pricing-page conversion." },
      { h2: "Mobile sticky CTA", body: "Almost always a winner on mobile because users scroll past the initial CTA. 10–25% mobile conversion lift is routine." },
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
    const words = seed.sections.reduce(
      (sum, s) => sum + s.body.split(/\s+/).length,
      0
    );
    const readMinutes = Math.max(4, Math.round(words / 220) + 4);

    const content: string[] = [];
    for (const s of seed.sections) {
      content.push(`## ${s.h2}`);
      content.push(s.body);
    }

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
