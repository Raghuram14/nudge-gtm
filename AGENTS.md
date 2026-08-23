<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent rules — Antarang GTM site

This repo is the **public marketing site** for Antarang. It talks about the product. It must not import product internals, Fastify routes, Drizzle schemas, or `@antarang/*` workspace packages.

## Before writing code

1. What business capability is this?
2. Who owns the content? Do not invent certifications, pricing, customers, or SOC2/ISO.
3. Who configures it? Use `src/config/*`, MDX frontmatter, or env — not magic strings.
4. Who consumes it? Browser, crawler, AI retrieval, form backend.
5. UI surface is this public site only. No logged-in product workspace.
6. Source of truth: MDX/content files vs hardcoded JSX. Prefer config + MDX for repeating content.

If any answer is ambiguous, stop and ask.

## Product invariants

- Do not market developer performance from raw activity (commits, LOC, PR count, hours online).
- Insights must show evidence. Mock insights use the evidence pattern and are labeled **Example**.
- Correlation is not causation. Prefer “associated with”, “coincides with”, “likely contributing”.
- AI inference is visually distinct from deterministic facts.
- Raw activity metrics need window, scope, and baseline — or do not show them.
- Never imply the product ranks people.
- Team health is not the sum of individual activity.
- The product explains **why**, not merely **what**.
- Integrations are data sources, not the product.

Forbidden positioning: AI analytics dashboard, another DORA platform, AI chatbot for engineering, developer productivity monitoring.

## Stack (frozen)

Next.js App Router, TypeScript `strict`, Tailwind + semantic tokens, MDX + Zod, pnpm, Vitest, Playwright. Code lives under `src/`. Do not swap framework/CMS/DB without `docs/adr/`.

- No raw hex in components. Spacing on the 4px scale. No arbitrary `p-[13px]`.
- No `eslint-disable` without `docs/adr/waivers/`.
- No `console.log` in production paths. Use `src/lib/logger.ts`.
- No secrets in git. `.env.example` only.
- Reuse `src/components/ui` primitives. No raw `<button>` / `<input>` in features.

Default CTAs (config-driven): Request Early Access, Book a Demo, Join the Design Partner Program. No free trial unless sourced.

## Definition of done

Acceptance criteria met, invariants respected, `pnpm typecheck`, lint, targeted tests, no fabricated logos/metrics/certifications.
