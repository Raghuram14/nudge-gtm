# ADR 0005 — Honesty UI

## Status

Accepted

## Context

Product invariants require evidence-backed insights, Example labeling on mocks, and no surveillance or people-ranking framing. Unlabeled vanity metrics and “Available” badges on design-partner integrations overclaim.

## Decision

- Every mock insight is labeled **Example** (or equivalent `isExample` badge) and follows the evidence pattern.
- Raw activity metrics require window, scope, and baseline—or do not render.
- CTAs come only from `ctaConfig` defaults: Request Early Access, Book a Demo (or honest demo label), Join the Design Partner Program. No free trial unless sourced.
- Integration status UI must reflect config status (`current-direction` / coming soon ≠ production “Available”).
- Observed vs inferred vs reasoning remain visually distinct via semantic tokens.

## Consequences

Demo data and status badges are honesty surfaces, not decoration. Status copy changes require config + UI alignment; tests may assert Example labeling on home mock sections.