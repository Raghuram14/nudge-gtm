# ADR 0001 — GTM stack

## Status

Accepted

## Context

This repo is a public marketing site. The product app uses React + Vite + TanStack Router; that stack is not crawl-first.

## Decision

Use Next.js App Router, TypeScript strict, Tailwind with semantic CSS tokens, MDX + Zod, pnpm, Vitest, Playwright. Application code lives under `src/`.

## Consequences

SSR/SSG HTML, metadata, sitemap, and robots are native. Changing framework, CMS, or adding a database requires a new ADR.
