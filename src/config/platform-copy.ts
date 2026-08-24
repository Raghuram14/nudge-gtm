/**
 * Shared platform / SEO messaging (ADR 0003) — avoid drift between landings and product pages.
 */
export const contextGraphCopy = {
  entityChain:
    "Organization → Team → Person → Project → Sprint → Work item → Pull request → Review → Build → Deployment → Service → Incident, including customer or product impact when that data exists.",
  whyRelationships:
    "Without relationships, you cannot diagnose why a sprint is at risk, which dependency is blocking work, or which service a change affects.",
  verticalSlice:
    "The current product direction is a vertical slice: GitHub + Jira into canonical entities and graph context. Broader ingest is coming soon.",
  notGraphDb:
    "Not a pitch for a graph database. The product is connected engineering context with provenance.",
} as const;
