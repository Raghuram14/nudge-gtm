# Nudgeio GTM website

Public Go-To-Market site for **Nudgeio**, an Engineering Operating System. This repo talks about the product. It does not import product internals.

## Stack

- Node.js `24.18.x` (see `.nvmrc`)
- pnpm
- Next.js App Router (`src/app`)
- TypeScript strict
- Tailwind with semantic tokens
- MDX + Zod for articles
- Vitest + Playwright

## Local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Optional end-to-end: `pnpm exec playwright install chromium` then `pnpm test:e2e`.

Pre-commit hooks: `pnpm exec lefthook install`.

## Deploy

Prefer Vercel (SSR/SSG). Set `SITE_URL` to the production origin (used for canonical URLs, Open Graph, sitemap, JSON-LD). Optional `CONTACT_WEBHOOK_URL` receives validated lead metadata (intent/role/company length) — not extra PII.

## Content

Marketing pages live in `src/app`. Blog and learn articles are MDX in `src/content` with Zod frontmatter. Site strings and CTAs live in `src/config`.

## Honesty rules

No fabricated customers, logos, metrics, or certifications. Mock insights are labeled **Example**. GitHub and Jira are current direction; MCP is directional.
