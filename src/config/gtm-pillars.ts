import { ROUTES } from "@/config/routes";

export type PillarStatus = "current-direction" | "in-development" | "directional" | "expansion";

export type GtmPillar = {
  id: string;
  number: number;
  name: string;
  tagline: string;
  summary: string;
  weight: "core" | "strong" | "selective" | "expansion";
  status: PillarStatus;
  href: string;
};

export const gtmPillars: ReadonlyArray<GtmPillar> = [
  {
    id: "evidence-machine",
    number: 1,
    name: "The Evidence Machine",
    tagline: "Every insight comes with a receipt.",
    summary:
      "Causal timelines, competing hypotheses, and provenance for every claim - so diagnosis is inspectable, not a black box.",
    weight: "core",
    status: "current-direction",
    href: ROUTES.evidenceFirstAi,
  },
  {
    id: "ai-governance",
    number: 2,
    name: "AI Engineering Governance",
    tagline: "When AI writes the code, who's accountable?",
    summary:
      "Treat coding agents as governed entities with identity, oversight quality, and audit-ready decision chains.",
    weight: "strong",
    status: "in-development",
    href: ROUTES.platform,
  },
  {
    id: "smart-review",
    number: 3,
    name: "AI PR Decomposer & Smart Review",
    tagline: "AI generates code at 100x speed. Reviews can't be 100x slower.",
    summary:
      "Split oversized PRs by dependency topology, route by knowledge depth, and measure review substance - not rubber stamps.",
    weight: "strong",
    status: "in-development",
    href: ROUTES.engineeringIntelligence,
  },
  {
    id: "knowledge-continuity",
    number: 4,
    name: "Engineering Knowledge Continuity",
    tagline: "Institutional memory that does not walk out the door.",
    summary:
      "Bus-factor risk, departure simulation, and decision archaeology grounded in the knowledge graph.",
    weight: "strong",
    status: "current-direction",
    href: ROUTES.contextGraph,
  },
  {
    id: "business-bridge",
    number: 5,
    name: "Business-Engineering Intelligence",
    tagline: "Stop explaining engineering in engineering terms.",
    summary:
      "Translate delivery, risk, and investment into language executives can use - without inventing ROI theater.",
    weight: "selective",
    status: "in-development",
    href: ROUTES.solutions,
  },
  {
    id: "operating-system",
    number: 6,
    name: "Real-Time Engineering OS",
    tagline: "From passive dashboard to closed-loop action.",
    summary:
      "Diagnose, nudge, and execute remediations across tools - then measure whether the intervention worked.",
    weight: "selective",
    status: "directional",
    href: ROUTES.projectHealth,
  },
  {
    id: "product-canvas",
    number: 7,
    name: "Intelligence-Native Product Canvas",
    tagline: "The PRD as a living contract with engineering truth.",
    summary:
      "Future platform expansion: ground product requirements in graph context, ownership, and incident history while they are written.",
    weight: "expansion",
    status: "expansion",
    href: ROUTES.platform,
  },
] as const;

export const pillarStatusLabel: Record<PillarStatus, string> = {
  "current-direction": "Current direction",
  "in-development": "In development",
  directional: "Directional",
  expansion: "Expansion",
};

export const homepagePillars = gtmPillars.filter((p) => p.weight !== "expansion" || p.number === 7);
