# ADR 0002 — Visual system

## Status

Accepted

## Context

The marketing site used a purple accent (`#635bff`), indigo mock glow, and decorative motion (float, shimmer, breathe-border) that read as generic AI-SaaS. `docs/WEBSITE_PLAN.md` specifies a restrained teal accent, calm technical foundation, and no purple AI candy. Full-site dark mode marketing would fight readability and cluster with AI-generated dark themes.

## Decision

- Default light marketing canvas + dark product-mock surfaces (`--mock-*` tokens). Optional user theme toggle may exist; brand accent stays restrained teal in both schemes.
- Restrained teal brand accent; remove purple as brand color; do not use purple candy glow as brand.
- Geist Sans for UI copy; Geist Mono for code/labels (`--font-mono` must map to a mono face).
- Spacing on the 4px Tailwind scale; no arbitrary pixel padding.
- No raw hex in `src/components/**` (integration logo brand colors live in an allowlisted config map).
- Marketing density: more air than a product app; crisp borders over glow stacks.
- Motion budget: 2–3 intentional reveals per page; respect `prefers-reduced-motion`. Decorative infinite animations are not default chrome.

## Consequences

Token changes in `globals.css` and `accent-tones.ts` are the source of truth. Visual drift requires updating this ADR. Hex enforcement tests guard components.