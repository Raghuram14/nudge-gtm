/**
 * What is actually running, what is being built, and what is still a plan.
 *
 * This is a marketing asset, not a disclaimer. A company whose product refuses
 * to assert without evidence should hold itself to the same standard about its
 * own roadmap - so the site publishes the build state rather than implying that
 * everything on the vision pages already ships.
 *
 * Single source of truth. Anything on the site that claims a capability should
 * read its status from here.
 */

export type CapabilityState = "live" | "building" | "roadmap";

export const capabilityStateMeta: Record<
  CapabilityState,
  { label: string; description: string; order: number }
> = {
  live: {
    label: "Live",
    description: "Running in the product today.",
    order: 0,
  },
  building: {
    label: "Building",
    description: "Actively in development with design partners.",
    order: 1,
  },
  roadmap: {
    label: "Roadmap",
    description: "Designed and specified. Not yet built.",
    order: 2,
  },
};

export type Capability = {
  id: string;
  name: string;
  detail: string;
  state: CapabilityState;
};

export const capabilities: ReadonlyArray<Capability> = [
  {
    id: "github-ingestion",
    name: "GitHub ingestion",
    detail:
      "Webhook and backfill sync normalising pull requests, reviews, pushes, builds, and deployments into provider-independent canonical events.",
    state: "live",
  },
  {
    id: "workspace",
    name: "Workspace and access control",
    detail:
      "Multi-tenant organisations, teams, projects, roles, and relationship-based authorisation with enforced tenant isolation.",
    state: "live",
  },
  {
    id: "event-pipeline",
    name: "Canonical event pipeline",
    detail:
      "Transactional outbox with at-least-once delivery, so ingestion cannot silently drop a state change.",
    state: "live",
  },
  {
    id: "knowledge-graph",
    name: "Engineering knowledge graph",
    detail:
      "Canonical entities and relationships across people, work items, code, deployments, services, and incidents.",
    state: "building",
  },
  {
    id: "jira",
    name: "Jira ingestion",
    detail: "Work items, sprints, and spec history joined to the same canonical entities.",
    state: "building",
  },
  {
    id: "evidence-chain",
    name: "Evidence chains",
    detail:
      "Every claim decomposed into the specific artifacts that produced it, inspectable and disputable.",
    state: "building",
  },
  {
    id: "competing-hypotheses",
    name: "Competing hypotheses",
    detail:
      "Ranked alternative explanations with separate confidence, rather than a single narrative.",
    state: "roadmap",
  },
  {
    id: "outcome-validation",
    name: "Outcome validation",
    detail: "Tracking whether an accepted diagnosis actually proved correct after the intervention.",
    state: "roadmap",
  },
  {
    id: "mcp",
    name: "IDE context layer",
    detail: "Graph context served to coding assistants at the point a developer opens the file.",
    state: "roadmap",
  },
];

export function capabilitiesByState(state: CapabilityState): ReadonlyArray<Capability> {
  return capabilities.filter((capability) => capability.state === state);
}

export const capabilityStates: ReadonlyArray<CapabilityState> = ["live", "building", "roadmap"];
