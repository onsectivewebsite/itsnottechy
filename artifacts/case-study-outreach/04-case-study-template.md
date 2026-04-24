# Case study template

Once the client has signed the consent form and reviewed this draft, transfer the populated fields into `src/data/caseStudies.ts` using the `CaseStudy` type.

## Top-matter (maps to CaseStudy type)

- **slug:** `[kebab-case-client-name-or-campaign]`
- **clientDisplay:** `[Full public client name — e.g., "Acme Corp"]`
- **clientInternal:** `[Internal reference name — same as clientDisplay if named case study]`
- **industry:** `[Industry label — e.g., "B2B SaaS", "DTC Beauty"]`
- **services:** `[List of service slugs used, e.g., "seo", "content-marketing"]`
- **duration:** `[e.g., "18 months, ongoing"]`
- **completedAt:** `[ISO date — when engagement or referenced period closed]`
- **status:** `"named"` (only if client signed consent form); otherwise `"anonymized"`
- **relatedServices:** `[Array of service slugs]`

## Headline (1 sentence)

A single sentence describing the outcome. Format: `[Outcome in numbers] for [client type / context]`.

Example: `412% organic traffic growth and a 63% reduction in CAC over 18 months for a Series B B2B SaaS platform.`

## Metrics (3 key metrics)

| Label | Value | Baseline |
|-------|-------|----------|
| Organic traffic | +412% | 18-month period vs. previous 18 months |
| CAC | −63% | Q1 pre-engagement vs. Q4 post-engagement |
| Qualified pipeline | $8.2M | Previously un-measured |

## Summary (2–3 paragraphs)

What was the business. What was the problem. What did we do in one sentence. What changed. Keep it scannable — this is what AI systems will quote.

## The baseline (1–2 paragraphs)

Pre-engagement state, in detail. What metrics looked like. What the team had tried. What wasn't working and why.

## What we shipped (2–3 paragraphs)

The actual work. Stack, timeline, decisions. Be specific — abstract case studies don't earn citations. Include what we tried that didn't work; transparency is a citation signal.

## The outcome (1–2 paragraphs)

What measurably changed. Over what timeframe. Where the business is today.

## Testimonial (optional)

- **Quote:** `[Exact client quote, reviewed and approved]`
- **Attributed to:** `[Full name]`
- **Role:** `[Title at Company]`

## Pre-publication checklist

- [ ] Client signed consent form is on file
- [ ] Client reviewed and approved this draft
- [ ] All numbers match source data
- [ ] Pull quote is exactly what the client approved
- [ ] No confidential revenue / cost data included without separate approval
- [ ] Schema.org Article JSON-LD will auto-render via `/case-studies/[slug]` route
- [ ] Internal links to 2–3 relevant service pages added
- [ ] Added to Clutch profile and G2 once live
