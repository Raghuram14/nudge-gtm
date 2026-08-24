# ADR 0003 — Content ownership

## Status

Accepted

## Context

Homepage and several marketing pages mixed config-driven catalogs with hardcoded JSX strings. Duplicated messaging between SEO landings and platform pages drifts easily. Invented metrics, certifications, and customer claims are forbidden.

## Decision

- Repeating and homepage page copy lives in `src/config/*`.
- Long-form articles live in `src/content/**/*.mdx` with Zod frontmatter.
- Thin routes in `src/app/**` compose; they do not own marketing prose.
- Trust/platform one-off prose may remain in page JSX until extracted; new repeating copy must start in config or MDX.
- Never invent certifications, pricing, customers, SOC2/ISO, free trials, or unsourced ROI.

## Consequences

Editors change `src/config` or MDX, not component internals. Copy-invariant tests continue to walk app/components/content/config for forbidden claims.