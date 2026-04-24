# Research program — operational guide

Original research is the highest-ROI AI citation generator for a services business. This folder contains what you need to actually run the research program represented by `/research` on the site.

## Two reports are pre-announced on-site

Both are in `src/data/research.ts` with `status: "planned"`:

1. **The 2026 State of Multi-Region Marketing** (`state-of-multi-region-marketing-2026`)
2. **The 2026 AI Marketing Adoption Benchmark** (`ai-marketing-adoption-benchmark-2026`)

Each has a public methodology page on the site. Nothing publishes as a finding until real data is collected.

## The operational steps for each report

### Step 1 — Finalize survey instrument

- Design survey in Typeform, SurveyMonkey, or Pollfish (Pollfish lets you buy audience if organic recruitment is slow).
- Target: 25–35 questions, most 2–4 minutes to complete, max 12 minutes total.
- Pilot with 10–15 respondents from your network before launching.

### Step 2 — Recruit respondents

Channels in order of cost-efficiency:

1. **Direct LinkedIn outreach** to target audience (free, slow, 1–3% reply rate)
2. **CMO / marketing-operator Slack communities** (free, fast, needs introductions). Some good ones: Revenue Collective (Pavilion), MeasuredU, Modern Sales Pros, Growth Hackers Slack.
3. **Industry partner amplification** — ask partners (SaaS vendors, agencies, investors) to forward to their lists.
4. **Paid panel providers** (Pollfish, Dynata, Prolific) if organic recruitment is slow. Budget: $15–$40 per completed response depending on audience specificity.

For 400+ responses on a tight target audience (e.g., CMOs at $10M+ companies with multi-region operations), plan a mixed strategy and 6–10 weeks of field time.

### Step 3 — Incentivize completion

Usual options:
- Early access to the full report for all participants
- $25 Amazon / Uber gift card per completed response (if using paid panels, this is baked in)
- Aggregate benchmark dashboard only participants can access

Don't offer cash incentives on cold LinkedIn outreach — it biases the sample toward low-quality respondents chasing the gift card.

### Step 4 — Analyze and write

- Export raw data to CSV. Anonymize immediately.
- Run descriptive statistics; segment by company size, region, and role.
- Draft findings as `keyFindings` in `src/data/research.ts`. Move status to `"published"` and set `publishedAt`.
- Publish derived blog content — one pillar piece summarizing findings, three follow-up posts going deep on individual findings.

### Step 5 — Distribute

- Press release to trade publications (AdAge, Marketing Week, The Drum, Campaign, Martech.org)
- LinkedIn carousel format — one per key finding
- Email to all research-panel participants and client list
- Pitch key findings to relevant podcasters and newsletters
- Submit findings as HARO / Qwoted reactive data when journalists ask

### Step 6 — Derivative content

A good report should produce 6+ months of derivative content:
- One hero landing page (lives at `/research/[slug]`)
- Executive summary PDF (gated)
- Full dataset (gated, optionally commercial)
- 5–10 follow-up blog posts analyzing individual findings
- Conference speaking proposals based on the data
- Custom benchmarking tools (e.g., "Is your CAC payback faster than the median?")
- Chart library for other sites to cite with attribution

## Budget and timeline

For a single well-executed report:

- **Instrument design + piloting:** 3–4 weeks, 1 person at ~25% capacity
- **Field time:** 6–10 weeks
- **Analysis + writing:** 4–6 weeks, 1 person full-time
- **Publication + distribution:** 4 weeks, part-time

Total elapsed: 4–6 months from decision to published report.

Cash budget for one report:
- Panel / incentives: $8,000–$20,000 depending on audience specificity
- Design and dev for interactive findings / dashboard: $3,000–$10,000
- PR distribution (optional): $3,000–$7,000 for a wire release or specialist PR push

Call it $15,000–$35,000 all-in per report. ROI is typically realized over 12–24 months as the report compounds through citations.
