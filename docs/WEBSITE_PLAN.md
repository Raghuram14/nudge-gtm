# Nudgeio GTM website plan

Public crawlable marketing site for **Nudgeio**, an Engineering Operating System. Same HTML must work for humans, Google, Bing, and answer engines.

## Assessment

Nudgeio connects fragmented engineering context (people, work items, pull requests, builds, deployments, services, incidents) into an **Engineering Knowledge Graph** (visitor synonym: Context Graph), then Engineering Intelligence that answers **why**, with evidence. Humans act; AI recommends.

Honest MVP direction (as of the product repo): **GitHub + Jira** → canonical entities → knowledge graph → deterministic insights → flagship question **“Why is this sprint at risk?”**. Public AI surface name: **Ask Nudgeio**.

## Honest capability matrix

| Capability | Site treatment |
|------------|----------------|
| GitHub, Jira connectors | Current direction / design-partner scope. No production-customer claims. |
| GitLab, Slack, CI/CD, incidents, docs, telemetry, AI-tool ingest | Coming soon |
| MCP / agent access to the graph | Direction. Do not claim a shipping MCP server. |
| Due diligence, incident learning, AI code quality, compliance, re-org intelligence | In development / coming soon |
| Free trial, pricing, SOC2, ISO, GDPR-certified, HIPAA, logos, user counts, ROI | Forbidden unless real, sourced, and dated |

## Information architecture (Phase 1–3)

- `/` homepage
- `/platform/context-graph`, `/engineering-intelligence`, `/project-health`, `/evidence-first-ai`, `/mcp`
- `/integrations/github`, `/integrations/jira` plus index
- `/trust/security`, `/privacy`, `/data`, `/no-surveillance`
- `/contact` lead capture
- `/blog` + 1–2 posts, `/learn` + one explainer
- `/use-cases`, `/solutions` indexes with honest status
- `/compare` template + noindex stubs
- `/research` index (thin, not a content farm)

## Tokens

See [ADR 0002](adr/0002-visual-system.md): light marketing canvas, dark product mocks, restrained teal accent. No purple AI candy, no fake neon dashboards.

## Content model

MDX + Zod frontmatter in `src/content/`. Structured fields: title, description, slug, canonical, dates, author, category, tags, keywords, ogImage, noindex, status.

## SEO / AEO

Unique title + description, canonical, single H1, JSON-LD only when it matches visible content, robots allow public marketing including `OAI-SearchBot`, sitemap of indexable URLs only. Meaning exists as HTML, not canvas-only.

## Phases

0. Scaffold (this repo)
1. Design system + chrome
2. Homepage
3. Platform pages
4. Trust + contact
5. Integration template (GitHub, Jira)
6. Blog/learn + articles
7. SEO infrastructure
8. Analytics abstraction
9. Comparison stubs
10. Performance, a11y, headers

## Deploy

Prefer Vercel. Set `SITE_URL` to the production origin. Optional `CONTACT_WEBHOOK_URL` for lead forwarding.
