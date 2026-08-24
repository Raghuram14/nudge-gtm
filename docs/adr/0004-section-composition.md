# ADR 0004 — Section composition

## Status

Accepted

## Context

The homepage grew as a stack of large one-off demos without a shared section contract. Dead components (`RoleTabs`, `ExampleLegend`, `EvidencePanel`) sat unused while the first viewport over-packed chips, stats, and neon mocks.

## Decision

- Marketing pages compose ordered section modules via a shared shell (`MarketingSection` / evolved `HomeSection`).
- Each section has one job: optional eyebrow, one title, one short supporting sentence, and usually one visual or interaction.
- Homepage sequence: Hero (system diagram) → Fragmentation → Context graph → Evidence investigation → How it works → Personas → Integrations → Trust strip → FAQ → Final CTA.
- Interactive mocks use the evidence contract (insight → why → evidence → source → confidence/example).
- Hero budget: brand, one H1, one visitor sentence, one CTA group, one dominant visual (system diagram—not a neon dashboard). No chip clusters, live pills, or vanity stats in the first viewport.

## Consequences

New homepage sections add config copy + a presentational module; they do not invent a second layout system. Reusable demos stay props-driven under `src/components/marketing/`.