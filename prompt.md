# CURSOR MASTER PROMPT — CREATE THE ANTARANG GTM WEBSITE REPO

Paste this entire document as the first message in a **new, empty repository** (not inside the Antarang product monorepo). The agent must bootstrap the repo, then implement the site in phases.

You are acting as a Principal Frontend Engineer + Product Engineer + Technical SEO/AEO Engineer + B2B SaaS Product Designer with deep experience in developer tools, enterprise SaaS, and AI platforms.

Your task: **create and build the public Go-To-Market website for Antarang** as a long-lived codebase that other humans and AI agents can maintain for years.

This is **not** a generic AI SaaS landing page, not a one-shot marketing dump, and **not** a clone of the Antarang product workspace (`apps/web`).

---

## 0. Repo charter (read first)

### What this repo is

A **public marketing / GTM site** for Antarang: crawlable, semantically clear, evidence-honest, and technically excellent. Same pages must work for humans, Google Search, Google AI Overviews, Bing/Copilot, ChatGPT search, Perplexity, Claude retrieval, LinkedIn, Reddit, Hacker News, and later AI agents.

### What this repo is not

- Not the Engineering Operating System product (`ant-backend` / `ant-frontend`).
- Not `apps/web` or `apps/admin`.
- Not a place to import `@antarang/*` backend packages, Drizzle schemas, Fastify routes, or workspace UI modules.
- Not a place to copy the product modular-monolith architecture.

**Boundary:** the GTM site **talks about** the product. It **must not** couple to product internals. Shared ideas are copy, terminology, and visual tone — not code imports.

### Official name and spelling

- Product: **Antarang**
- Category: **Engineering Operating System** / **Engineering Intelligence platform**
- Canonical graph concept (product + architecture): **Engineering Knowledge Graph**
- Visitor-friendly synonym allowed on the site: **Context Graph** (always map it to the Knowledge Graph; never market “we have a graph database” or name Memgraph/PostgreSQL as the product)

### Audiences

Primary: CTO, VP Engineering, Director of Engineering, Engineering Manager, Platform Engineering leaders, Tech Leads, Engineering Operations.

Secondary: Product Managers (delivery visibility), security/procurement reviewers (trust pages).

Do **not** optimize the homepage for individual IC developer “productivity scores.”

---

## 1. How to work with AI in this repo (operating system)

These rules are adapted from how the Antarang product repo is governed. They exist so the GTM codebase does not rot after the first agent session.

### 1.1 Before writing code — six questions

If any answer is ambiguous, **stop and ask**. Do not invent ownership or architecture.

1. What business capability is this? (e.g. homepage narrative, trust page, lead capture, comparison template)
2. Who owns the content? (marketing vs legal vs product — do not invent certifications or pricing)
3. Who configures it? (site config, MDX frontmatter, env vars — never scatter magic strings)
4. Who consumes it? (browser, crawler, AI retrieval, form backend)
5. Which surface owns the UI? **This repo only** (public site). Never add a logged-in product workspace here.
6. What is the source of truth? (MDX/content files vs hardcoded JSX)

### 1.2 Agent pipeline

| Intent | Do this first | Do not |
|--------|----------------|--------|
| New non-trivial capability (IA, CMS, analytics vendor, auth for CMS) | Write a short plan in `docs/WEBSITE_PLAN.md` (or ADR if stack fork) | Jump to a 2,000-line homepage |
| Implement an approved plan | Smallest coherent change | Redesign the stack |
| Bug / SEO regression | Reproduce with evidence (rendered HTML, Lighthouse, crawler) | Patch symptoms |
| Architectural fork (new CMS, new framework, new DB) | ADR under `docs/adr/` | Silent dependency |

### 1.3 Context efficiency

- Search existing components, tokens, SEO helpers, and content schemas **before creating anything**.
- Read targeted files, not the whole repo every turn.
- Do not generate docs nobody will maintain. Code, typed config, and `--help` scripts beat parallel prose.
- Do not add `TODO` without an owner or tracked issue.

### 1.4 Scope discipline

- Smallest coherent change that fully solves the request.
- No drive-by refactors, no “while we’re here” features, no speculative abstractions.
- If you discover unrelated debt, **report it** — do not silently expand the PR.

### 1.5 Dead-code discipline

A task is not done if the diff adds unused exports, unwired CTAs, unused routes, empty barrels, or placeholder-only symbols.

For every new symbol: production caller exists, **or** it is a documented spec stub, **or** delete it in the same change.

### 1.6 Definition of done (every phase)

- Acceptance criteria for that phase met
- Product invariants respected (see §3)
- Types: `tsc --noEmit` clean
- Lint clean — **no `eslint-disable`** unless a written waiver in `docs/adr/waivers/`
- Targeted tests added for behaviour (metadata, canonical, robots, sitemap, form validation, CTA config)
- No secrets in the repo; `.env.example` only
- No fabricated customers, logos, metrics, certifications
- Completion report: Implemented / Routes / Components / SEO / TODOs / Assumptions

### 1.7 Search before you build (UI)

Before any component or page:

1. Search `components/`, `packages/ui` (or equivalent), and content templates.
2. Reuse primitives. Do not recreate Button, Input, Card, Badge, Dialog.
3. Do not invent a second design system.

---

## 2. Product source of truth

Use this as the **only** product story. Do not invent a broader platform than this.

### 2.1 Thesis

Antarang is an **Engineering Operating System** — not another analytics dashboard.

Pipeline:

```text
Raw engineering data
        ↓
Normalized / canonical events & entities
        ↓
Engineering Knowledge Graph (relationships + provenance)
        ↓
Engineering Intelligence (answers why, with evidence)
        ↓
Evidence-backed decisions (human acts; AI recommends)
```

**Three strategic moats** (must appear in platform narrative, not as three random slogans):

1. **Engineering Knowledge Graph** — people, code, work, deployments, incidents, outcomes, connected with provenance
2. **Engineering Intelligence Engine** — reasoning that answers *why*, not just *what*
3. **Engineering Memory** — persistent organizational memory: decisions, discussions, architecture context (future-facing; label honestly)

### 2.2 Problem

Engineering context is fragmented across GitHub, Jira, Slack, CI/CD, observability, docs, incidents, and AI coding tools. Leaders can see **what** happened in each tool and still cannot explain **why** delivery, quality, or risk moved.

### 2.3 Honest capability matrix (do not lie)

**MVP / in-progress product (as of the product repo):** one vertical slice — **GitHub + Jira** → canonical entities → knowledge graph → deterministic insights → one flagship AI question: **“Why is this sprint at risk?”**

Public AI surface name in the product: **Ask Antarang** (not “an AI chatbot for engineering”).

| Capability | Public site treatment |
|------------|------------------------|
| GitHub, Jira connectors | May describe as current direction / design-partner scope. Do not claim production customers. |
| GitLab, Slack, CI/CD, incidents, docs, telemetry, AI-tool ingest | **Coming soon** / roadmap unless product repo proves otherwise |
| MCP / agent access to the graph | Product **direction**. Dedicated page OK. Do **not** claim a shipping MCP server unless the product repo proves it. |
| Engineering due diligence, incident learning, AI code quality, compliance, re-org intelligence | Emerging / future workflows. Label **In development** / **Coming soon**. |
| Free trial, pricing, SOC2, ISO, GDPR-as-certified, HIPAA, customer logos, user counts, ROI | **Forbidden unless real, sourced, and dated** |

### 2.4 Canonical language (never leak provider jargon as the product)

Use domain language on the site:

| Use this | Not this |
|----------|----------|
| Work item | Jira ticket / GitHub issue as the *product* noun |
| Pull request | “GitHub PR” as the only mental model |
| Person (resolved identity) | “GitHub user” as the entity |
| Canonical event (e.g. `pull_request.merged`) | Raw webhook dump as the story |
| Connector | “the product is GitHub analytics” |
| Knowledge Graph / Context Graph | “graph database”, Neo4j, Memgraph as the pitch |

Entity chain to visualize (canonical):

Organization → Team → Person → Project → Sprint → Work item → Pull request → Review → Build → Deployment → Service → Incident → customer/product impact

Example relationships (directional):

- Team **owns** Project
- Project **contains** Sprint
- Sprint **contains** Work item
- Work item **implemented_by** Pull request
- Pull request **reviewed_by** Person
- Pull request **triggers** Build
- Build **produces** Deployment
- Deployment **affects** Service
- Service **depends_on** Service
- Incident **affects** Service
- Team **depends_on** Team

The site must communicate: Antarang connects **context and relationships**, not event counts.

### 2.5 Product surfaces (whiteboard → site)

Explain these as **product directions**. Separate **available / in development / coming soon** in copy and badges.

| Layer | Core question | Notes |
|-------|----------------|-------|
| L1 Project / delivery health | “Is this project/sprint healthy, and why?” | Closest to MVP (“sprint at risk”) |
| L2 Engineering analytics | Quantitative foundation, **not** the product | Delivery, flow, bottlenecks, DORA-as-input — never “another DORA tool” |
| L3 Product ↔ engineering context | Initiative on track? Dependencies? What changed? | Conceptual |
| L4 MCP / agents | Claude, Cursor, ChatGPT, internal agents → Antarang graph → evidence | Direction |
| L5 Engineering due diligence | Acquisition / architecture / process / risk | Emerging |
| L6 Higher-order | Re-org / dependencies, incident learning, AI code quality, compliance | Roadmap cards |

Analytics are the **foundation**, not the destination.

---

## 3. Product invariants (absolute laws)

These override clever marketing. Violations are release blockers.

Copied from the Antarang product constitution:

- Do **NOT** measure or market developer performance from raw activity (commits, LOC, PR count, hours online).
- Insights **MUST** show evidence. Mock insights on the site must use the evidence pattern and be labeled **Example**.
- Correlation **MUST NOT** be written as causation. Prefer “associated with”, “coincides with”, “likely contributing”.
- AI inference **MUST** be visually distinct from deterministic facts (badge, dashed treatment, “Ask Antarang” / inferred vs observed).
- Raw activity metrics **MUST** have context (window, scope, baseline) — or do not show them.
- Sensitive individual-level data requires authorization — **never** imply the public product ranks people.
- Team health is **NOT** the sum of individual activity.
- The product explains **WHY**, not merely **WHAT**.
- Historical context matters (timelines, not only a snapshot).
- Integrations are **data sources**, not the product. Do not ship “GitHub tab / Jira tab” as the hero experience.

### 3.1 Positioning — forbidden frames

Do **not** position Antarang as:

- AI-powered engineering analytics dashboard
- Another DORA platform
- An AI chatbot for engineering
- Developer productivity monitoring / surveillance

Do **not** use: top/worst developers, developer score, ranking, hours online, LOC as productivity, commit leaderboards.

Philosophy: **engineering systems > individual activity.**

Emphasize: team/process health, delivery intelligence, context, explainability, evidence, dependencies, quality, risk, outcomes.

### 3.2 Primary message (30 seconds)

```text
Engineering data is fragmented
        → Metrics alone do not explain what is happening
        → Antarang connects engineering context
        → Knowledge Graph (Context Graph)
        → Engineering Intelligence
        → Evidence-backed decisions
```

Visitor-plain sentence (must appear as real HTML, not only in a canvas):

> Antarang connects the people, projects, work items, code, reviews, builds, deployments, services, incidents, and AI activity behind engineering work so leaders can understand the **system** as a whole.

Hero job: What (Engineering Intelligence / Engineering Operating System) · How (unified context + Knowledge Graph) · Why (what is happening, why, where attention is needed).

**Forbidden hero copy:** “The future of engineering starts here.” “AI-powered engineering excellence.” Empty SaaS jargon.

Visual: system diagram (sources → normalization → graph → intelligence), not a fake neon dashboard. Interactive is fine; **meaning must exist as HTML text**.

Default CTAs (config-driven, do not invent a free trial):

- Request Early Access
- Book a Demo
- Join the Design Partner Program

---

## 4. Greenfield stack (this repo only)

The **product** app is React 19 + Vite + TanStack Router (Next.js is forbidden there without ADR). **This GTM repo is a different problem:** crawlable marketing, SSR/SSG, metadata, sitemaps.

**Frozen GTM stack** (do not swap without an ADR):

| Area | Choice |
|------|--------|
| Runtime | Node.js **24.18.x** (pin in `.nvmrc`) |
| Package manager | **pnpm** (workspaces if you split `apps/web` + `packages/*`) |
| Framework | **Next.js App Router** |
| Language | TypeScript `strict: true` |
| Styling | Tailwind + **semantic design tokens** (CSS variables). No raw hex in components. No arbitrary bracket spacing (`p-[13px]`). Spacing on 4px scale. |
| Content | MDX + typed frontmatter (Zod). Blog, research, learn, integrations, compare. |
| Validation | Zod at every boundary (frontmatter, env, contact form, site config) |
| Rendering | SSG/SSR for all important marketing HTML. No `useEffect` + `fetch` to render primary copy. |
| Testing | Vitest + Testing Library; Playwright for crawl/metadata smoke |
| Lint/format | ESLint (incl. import sort) + Prettier; **Lefthook** pre-commit / pre-push |
| Deploy | Prefer Vercel or equivalent static/SSR host; document in README |
| Analytics | Vendor behind an abstraction. No PII, no individual surveillance. |
| Icons | Lucide (or similar) via a **single Icon wrapper**. No emoji as UI icons. No Unicode `✕` `≫` as controls. |

**Explicit non-goals for v1:** GraphQL, Redis, Kafka, a custom CMS admin unless forms cannot wait, auth product-app clone, backend modular monolith.

Adding a **new** CMS, DB, or framework requires `docs/adr/`.

### 4.1 TypeScript and code quality (MUST)

- `strict: true`
- No unchecked `any` (justify in a comment if unavoidable)
- Explicit return types on public modules (SEO helpers, content loaders, form actions)
- No non-null assertions without justification
- Named domain constants — no scattered magic strings for routes, CTA labels, integration slugs
- Config objects: `config/site.ts`, `config/navigation.ts`, `config/cta.ts`, `config/integrations.ts`
- Domain language in code: `createOrganization` not `insertOrgRow`; `workItem` not `jiraTicket` in canonical types
- No `console.log` in production paths — use a tiny structured logger or Next-safe logging
- No silent `catch {}`
- No boolean parameter traps — use options objects
- Keep functions small; split page sections into components
- Import order: node builtins → packages → aliases → relative (enforce with eslint)
- Filenames: `kebab-case.tsx`

### 4.2 Design system (marketing-adapted)

Visual philosophy from the product design system, applied to a **marketing** density (more air than `apps/web`, still serious):

- Precision, calm, evidence over decoration
- Dark/neutral technical foundation, strong typography, restrained accent
- Crisp surfaces, subtle borders or elevation tokens — not floating blobs, purple AI candy, stock illustrations, fake neon dashboards
- Status/risk: semantic tokens + **icon + label** (never color alone)
- AI vs fact: distinct treatment (inferred vs observed)
- Confidence in mock AI: qualitative `high | medium | low` **or** clearly fake **Example** percentages — do not manufacture scientific precision
- Motion: minimal; `prefers-reduced-motion`
- Performance > animation

**UI rules:**

- Primitives in `packages/ui` (or `src/components/ui`): Button, Input, Select, Card, Badge, Dialog, etc.
- Feature pages must not import Radix/shadcn internals directly if you wrap them
- No raw `<button>` / `<input>` / `<select>` in features — use primitives
- No hardcoded hex; no `style={{ color: '#...' }}` for brand color
- Forms: associated labels, errors linked to fields, 44×44px touch targets on mobile
- Every interactive/data UI: loading, empty, error states (forms, waitlist, MDX missing)

WCAG **2.2 AA**: landmarks, keyboard, focus-visible rings, 4.5:1 text contrast, reduced motion, accessible names.

### 4.3 Folder sketch (adapt, don’t cargo-cult the product `modules/` layout)

```text
apps/web/                 # Next.js App Router
  app/                    # routes
  content/                # MDX
packages/ui/              # primitives
packages/design-tokens/   # CSS variables + Tailwind preset
packages/seo/             # metadata, JSON-LD, canonical, sitemap helpers
config/                   # site, nav, CTA, integrations
docs/
  WEBSITE_PLAN.md
  adr/
AGENTS.md                 # short agent rules (this prompt distilled)
.nvmrc
lefthook.yml
```

Do **not** create 100 empty route folders. Ship foundations + a small set of excellent pages first.

---

## 5. Information architecture

Implement **foundations** and **Phase 1–3 pages** first. Remaining routes are templates + a few flagship articles — not a content farm.

```text
/
├── /platform/
│   ├── /context-graph/          # alias copy: Knowledge Graph
│   ├── /engineering-intelligence/
│   ├── /project-health/
│   ├── /evidence-first-ai/      # Ask Antarang
│   └── /mcp/
├── /use-cases/                  # many labeled coming soon
├── /integrations/               # GitHub, Jira first; others coming soon
├── /solutions/                  # persona pages
├── /compare/                    # infrastructure + honest stubs (see §9)
├── /learn/                      # people-first explainers
├── /research/
├── /blog/
└── /trust/
    ├── /security/
    ├── /privacy/
    ├── /data/
    └── /no-surveillance/
```

**Phase 1 routes (must ship high quality):**

- `/`
- `/platform/context-graph`
- `/platform/engineering-intelligence`
- `/platform/project-health`
- `/platform/evidence-first-ai`
- `/platform/mcp`
- `/integrations/github`
- `/integrations/jira`
- `/trust/security`, `/trust/privacy`, `/trust/data`, `/trust/no-surveillance`
- `/contact` (or equivalent) for the primary CTA
- `/blog` index (even if 1–2 posts)
- One `/learn/` explainer (engineering context / diagnosis)

Nav (desktop): Platform · Use Cases · Solutions · Integrations · Resources · Company · CTA right.

Keep menus short. Footer: Product, Use cases, Resources, Company, Trust.

---

## 6. Homepage sequence

1. Hero — headline, subhead, primary + secondary CTA, system diagram  
2. Fragmented reality — sources as context, not as the product  
3. Knowledge / Context Graph — major visual; HTML explanation always present  
4. From metrics to understanding — WHAT / WHY / EVIDENCE / CONTEXT; label **Example**  
5. Project / sprint health investigation example — **Example**  
6. Product ↔ engineering context (conceptual)  
7. MCP / agent access (developer-friendly; honest status)  
8. Higher-order workflow cards — coming soon where needed  
9. Who it’s for — distinct problem per persona  
10. Integrations — real vs coming soon; **do not fabricate logos**  
11. Trust — links to trust pages; team/process-first measurement  
12. Final CTA — “Build a clearer engineering system.” / Request Early Access  

Evidence pattern for every mock insight:

```text
INSIGHT → WHY → EVIDENCE → SOURCE → CONFIDENCE (example)
```

Distinguish **Example** vs product claims. Never present mock numbers as customers.

Suggested investigation mock (illustrative only):

- Project Alpha · Risk: Medium  
- Primary: dependency delay · Evidence: 3 blocked work items · 2 downstream services  
- Secondary: review latency  

WHAT/WHY example (illustrative): cycle time up · review queue up · PRs waiting · concentrated reviewer load — all labeled Example.

---

## 7. SEO / AEO / technical discovery

Do not treat SEO and AI search as a separate product. Build one crawlable site.

**Per indexable page:** unique title + description, canonical, single H1, H2 hierarchy, crawlable text, internal links, descriptive URLs, Open Graph + Twitter, JSON-LD only when it matches **visible** content.

Google AI features use normal Search eligibility. No `/for-chatgpt` junk routes.

**AEO:** answer near the top; define terms; text not canvas-only; precise claims; dates on articles; author/org; facts vs examples.

**JSON-LD (only if true):** Organization, WebSite, SoftwareApplication, Article, BreadcrumbList, FAQPage (only real FAQs), TechArticle where genuine.

**Technical:**

- `robots.txt` — allow public marketing; allow `OAI-SearchBot` if policy is to be cited in ChatGPT search; never block CSS/JS/images; never allow private/admin if you add them later
- XML sitemap of canonical indexable URLs only
- Canonical on every indexable route; no duplicate `/index`, query-param indexables, UTM canonicals
- URLs: `/platform/context-graph`, `/use-cases/project-health`, `/integrations/github`, `/compare/antarang-vs-hatica`
- Bing: sitemap + internal links + IndexNow abstraction on publish when practical
- Core Web Vitals; image optimization; no autoplay video; simplify graphs on mobile
- Inspect **rendered HTML**, not only React source

Centralize: `lib/seo` or `packages/seo` — `metadata.ts`, `jsonld.ts`, `canonical.ts`, sitemap.

**Keywords:** use naturally; do not stuff. Pillars: engineering intelligence, engineering operating system, knowledge/context graph, project/sprint health, delivery diagnosis, evidence-first AI, engineering due diligence (future). Run real keyword research before mass content.

**Internal links:** every important page reachable from another crawlable page. Example spine: Engineering Intelligence → Context Graph → Project Health → Diagnosis → GitHub → Jira.

---

## 8. Content model

MDX frontmatter (Zod). Do not render frontmatter to users.

```yaml
title:
description:
slug:
canonical:
publishedAt:
updatedAt:
author:
category:
tags:
primaryKeyword:
secondaryKeywords:
ogImage:
noindex:
status: available | in-development | coming-soon | example
```

Structured objects for later retrieval: Definition, Problem, Solution, Evidence, Examples, FAQ, Related, Source, Author, Updated.

Avoid generic AI SEO articles. People-first, original, or clearly labeled opinion.

Research pillars (when you write them): Knowledge Graph, diagnosis, project health, AI code quality, due diligence, incident learning, product↔engineering, compliance.

---

## 9. Comparisons and competitors

Build the **template** early. Fill only with **sourced, dated, non-defamatory** facts. Prefer “how we differ on measurement philosophy” over “we are better.”

If you lack evidence, ship a short honest page or `noindex` stub — **not** a fake feature matrix.

Competitor set the product team already tracks (do not invent wins): LinearB, Faros AI, Waydev, Sleuth, DevDynamics, Hatica, Jellyfish, Pluralsight Flow, Haystack, Span, DX, Swarmia, minware, Oobeya, Pensero.

Surveillance-sensitive competitors in that research: Waydev, Pluralsight Flow, Pensero, DevDynamics — use this to sharpen **our** no-surveillance story, not to smear.

---

## 10. Integrations template

Reusable page:

- What connects  
- What data we intend to use (honest; MVP = GitHub + Jira)  
- How it becomes graph context / canonical events  
- Example questions  
- Example evidence  
- Security / data handling  
- Related integrations  
- CTA  

No fake logos.

---

## 11. Trust

`/trust/no-surveillance` must state: team/process health, system bottlenecks, delivery outcomes, explainable evidence — **not** employee surveillance, productivity rankings, hours-online, raw activity scorecards.

Only claim controls the **product** actually intends to enforce.

Do not claim SOC2/ISO/etc. without artifacts.

---

## 12. Components to build (reuse, don’t duplicate)

- SEOHead / Next `generateMetadata` helpers, JsonLd, Breadcrumbs  
- PageHero, SectionHeading, CTA (config-driven)  
- IntegrationCard, UseCaseCard, EvidenceCard, RelatedContent, FAQ  
- `ContextGraphVisualizer` — nodes, directed edges, hover/focus, responsive, reduced motion, **never the only explanation**  
- Product mocks: `ProjectHealthCard`, `EvidencePanel`, `AskAntarangPanel` — always **Example** when using fictional data  
- Site header/footer from `config/navigation.ts`

Analytics: abstract `track(event, props)`. Events: page view, CTA, contact submit, integration click, compare click, article view, scroll depth (privacy-safe). No invasive individual tracking.

Lead capture: one form component; success/error/loading; server action + Zod; spam honeypot; no storing extra PII.

---

## 13. Phased execution

Do **not** build everything at once.

0. Scaffold repo: pnpm, Next.js, tokens, ESLint, Vitest, Lefthook, `AGENTS.md`, `.nvmrc`, `docs/WEBSITE_PLAN.md`  
1. Design system + layout chrome  
2. Homepage  
3. Platform pages (graph, intelligence, health, evidence-first AI, MCP)  
4. Trust + contact  
5. Integration template (GitHub, Jira)  
6. Content/blog/learn framework + 1–2 real articles  
7. SEO infrastructure (robots, sitemap, JSON-LD, OG)  
8. Analytics abstraction  
9. Comparison template (stubs OK)  
10. Performance, a11y, security headers, link check  

Then stop. More use-case/persona pages only when copy is real.

---

## 14. Testing (behaviour, not snapshot spam)

Happy-path-only is incomplete. Name tests after intent.

| Kind | Examples |
|------|----------|
| Negative | Invalid contact payload, missing required frontmatter fails Zod |
| Edge | Empty blog index, `noindex` excluded from sitemap |
| Corner | Visualizer with `prefers-reduced-motion`; JS disabled still shows hero copy (Playwright) |
| SEO contract | Homepage title/description/canonical in **HTML**; robots allow `/`; sitemap URLs canonical |
| Invariant | Copy fixtures or lint: no “developer score”, no fake SOC2 string |

Assert observable contracts (DOM metadata, sitemap XML), not merely `status === 200`.

---

## 15. Security and hygiene

- No secrets in git; form backend keys in env  
- CSP, referrer policy, sensible security headers  
- Do not log emails or form bodies in plaintext in client consoles  
- Dependabot or equivalent later; pin major versions  
- `pnpm` lockfile committed  

---

## 16. Machine-understandable page contract

Each major page should make explicit in HTML:

What is Antarang? Who is it for? What problem? How it works? What data it connects? What it outputs? What is available today vs future? How it differs? Where to learn more?

---

## 17. Acceptance criteria (do not declare done early)

**Product:** Graph concept clear in 30s; problem clear; GitHub+Jira vs coming-soon honest; Project/sprint health clear; MCP clearly directional; no surveillance framing.

**SEO:** unique metadata; canonical; robots; sitemap of indexable URLs only; JSON-LD matches visible content; OG; important copy in HTML.

**AI discovery:** public crawlers allowed per policy; pages answer real questions (see prompts below).

**Eng:** `pnpm build`, typecheck, lint, tests; no dead routes; a11y keyboard + reduced motion; mobile usable at 375px and desktop at 1440px.

**Trust:** no fake logos, metrics, quotes, certifications.

**10 questions the site should be able to support with real pages (not doorway pages):**

1. What is an engineering context / knowledge graph?  
2. How should engineering delivery risk be measured?  
3. What connects GitHub and Jira engineering context?  
4. How can teams understand why delivery is slowing?  
5. How does engineering due diligence work? (honest: emerging)  
6. How can AI-generated code quality be thought about? (emerging)  
7. What is an engineering operating system?  
8. How should leaders understand project/sprint health?  
9. What is evidence-first engineering intelligence?  
10. What should leaders measure besides DORA?

---

## 18. First actions in the empty repo

1. Scaffold the stack above.  
2. Write `docs/WEBSITE_PLAN.md`: assessment, IA, tokens, routes for Phase 1–3, content model, SEO, phases, **honest capability matrix**.  
3. Write a short `AGENTS.md` distilling §§1, 3, 4 (so future agents do not need this full prompt).  
4. Implement Phase 0–2 (scaffold + design system + homepage) before a forest of empty routes.  
5. End with a factual completion report. Do not claim features that do not work.

If this prompt conflicts with a better pattern **already in the new repo**, follow the repo — then update `WEBSITE_PLAN.md`.

---

## Mental model (keep on the homepage and platform pages)

```text
                 ANTARANG
                     │
                     ↓
           Engineering data
                     │
                     ↓
        Canonical / normalized context
                     │
                     ↓
         ENGINEERING KNOWLEDGE GRAPH
              (Context Graph)
                     │
         ┌───────────┼───────────┐
         ↓           ↓           ↓
   Delivery /     Ask Antarang    Operations
   project        + MCP (dir.)    intelligence
   health
         │
         ↓
Evidence-based Engineering Intelligence
```

The site is the **front door to an engineering intelligence platform**, not an SEO wrapper around a generic dashboard.

Start now: scaffold, `docs/WEBSITE_PLAN.md`, design tokens, then the homepage.
