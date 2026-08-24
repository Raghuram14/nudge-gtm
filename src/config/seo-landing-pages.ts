import type { RoutePath } from "@/config/routes";
import { ROUTES } from "@/config/routes";

export type SeoLandingPageContent = {
  slug: string;
  path: RoutePath;
  title: string;
  description: string;
  intro: string;
  sections: ReadonlyArray<{ heading: string; body: string }>;
  relatedLinks: ReadonlyArray<{ href: RoutePath; label: string }>;
};

export const seoLandingPages: ReadonlyArray<SeoLandingPageContent> = [
  {
    slug: "engineering-intelligence",
    path: ROUTES.engineeringIntelligenceSeo,
    title: "Engineering intelligence",
    description:
      "Engineering intelligence connects evidence and context across systems so teams can understand what changed, why it changed, and what to do next.",
    intro:
      "Engineering organizations already have data in source control, issue trackers, CI/CD, docs, and incidents. Engineering intelligence is the layer that connects that evidence into coherent answers.",
    sections: [
      {
        heading: "Why dashboards fall short",
        body: "Metrics describe what moved. They rarely reconstruct the decisions, dependencies, and context that explain why an outcome happened.",
      },
      {
        heading: "What engineering intelligence adds",
        body: "Connected context, relationships, organizational memory, and evidence-backed reasoning - not another wall of charts.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.engineeringIntelligence, label: "Platform: Engineering Intelligence" },
      { href: ROUTES.useCases, label: "Use cases" },
    ],
  },
  {
    slug: "engineering-context",
    path: ROUTES.engineeringContext,
    title: "Engineering context",
    description:
      "Engineering context connects events, artifacts, decisions, and relationships so isolated signals become a coherent story.",
    intro:
      "The problem is not a lack of data. It is a lack of connected context across code, work management, CI/CD, docs, incidents, and communication.",
    sections: [
      {
        heading: "Context over raw telemetry",
        body: "Lead with connected context: what changed, what was planned, what broke, and what people knew - not activity counts alone.",
      },
      {
        heading: "Cross-system understanding",
        body: "Engineering reality is distributed. Context platforms connect the relevant pieces so investigation does not require six tools and five people.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.contextGraph, label: "Context Graph" },
      { href: ROUTES.learnContextDiagnosis, label: "Context and diagnosis explainer" },
    ],
  },
  {
    slug: "engineering-knowledge-graph",
    path: ROUTES.engineeringKnowledgeGraph,
    title: "Engineering knowledge graph",
    description:
      "An engineering knowledge graph represents relationships among systems, services, repositories, issues, decisions, incidents, and changes.",
    intro:
      "A knowledge graph is not a pitch for a graph database. It is the canonical model of engineering context - entities, relationships, and provenance.",
    sections: [
      {
        heading: "Why relationships matter",
        body: "Without relationships, you cannot diagnose why a sprint is at risk, which dependency is blocking work, or which service a change affects.",
      },
      {
        heading: "Available today vs later",
        body: "The current direction is a vertical slice: GitHub and Jira into canonical entities and graph context. Broader ingest is coming soon.",
      },
    ],
    relatedLinks: [{ href: ROUTES.contextGraph, label: "Platform: Context Graph" }],
  },
  {
    slug: "engineering-organizational-memory",
    path: ROUTES.engineeringOrganizationalMemory,
    title: "Engineering organizational memory",
    description:
      "Preserve the why behind systems, decisions, tradeoffs, and changes so knowledge does not disappear when people move teams.",
    intro:
      "Architecture decisions, incident learnings, and project tradeoffs often live in people's heads or scattered tools. Organizational memory connects that history to current behavior.",
    sections: [
      {
        heading: "Why memory erodes",
        body: "Teams change. Docs go stale. Tickets close. The original intent and current implementation drift apart.",
      },
      {
        heading: "What to preserve",
        body: "Decision history, evidence trails, and relationships between changes and outcomes - surfaced when someone asks why something exists.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.contextGraph, label: "Context Graph" },
      { href: ROUTES.architectureKnowledge, label: "Architecture knowledge" },
    ],
  },
  {
    slug: "ai-coding-agent-context",
    path: ROUTES.aiCodingAgentContext,
    title: "AI coding agent context",
    description:
      "AI coding agents need repository, architecture, decision, and historical context before modifying a codebase - not just local files.",
    intro:
      "Generic AI assistants guess from what is in the prompt. Better context produces better investigation, onboarding, planning, and coding assistance.",
    sections: [
      {
        heading: "Why agents make bad changes",
        body: "They act without enough organizational and technical context: why an architecture exists, what constraints shaped it, and what changed recently.",
      },
      {
        heading: "Product direction",
        body: "Nudgeio's MCP and agent access direction describes graph-backed context with provenance. A public MCP server is not claimed on this site.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.mcp, label: "MCP / agents" },
      { href: ROUTES.evidenceFirstAi, label: "Evidence-first AI" },
    ],
  },
  {
    slug: "engineering-onboarding",
    path: ROUTES.engineeringOnboarding,
    title: "Engineering onboarding",
    description:
      "Reduce time-to-context for new engineers with a map of systems, repositories, decisions, and historical work.",
    intro:
      "Every new engineer spends time rediscovering organizational and technical context. Connected context helps them understand how a service fits into the larger system.",
    sections: [
      {
        heading: "The onboarding bottleneck",
        body: "Knowledge is distributed across code, docs, tickets, incidents, and people. Onboarding becomes archaeology.",
      },
      {
        heading: "What context to provide",
        body: "System relationships, recent changes, decision history, and evidence trails - not a folder of stale wiki pages.",
      },
    ],
    relatedLinks: [{ href: ROUTES.useCases, label: "Use cases: onboarding" }],
  },
  {
    slug: "architecture-knowledge",
    path: ROUTES.architectureKnowledge,
    title: "Architecture knowledge",
    description:
      "Recover why an architecture exists, what constraints shaped it, and how it relates to current code and incidents.",
    intro:
      "Technical decisions lose context as teams and people change. Architecture knowledge connects design history to what is running today.",
    sections: [
      {
        heading: "The common question",
        body: "Why does this architecture exist? Answering it requires decisions, incidents, dependencies, and changes - not a single diagram.",
      },
      {
        heading: "Evidence-backed recovery",
        body: "Traverse relationships across repositories, work items, and incidents to reconstruct context with sources.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.contextGraph, label: "Context Graph" },
      { href: ROUTES.engineeringOrganizationalMemory, label: "Organizational memory" },
    ],
  },
  {
    slug: "engineering-investigation",
    path: ROUTES.engineeringInvestigation,
    title: "Engineering investigation",
    description:
      "Investigate unexpected outcomes by connecting what changed across code, work, dependencies, and incidents.",
    intro:
      "When delivery slips or quality drops, leaders need to know what changed, what was related, and where to look first - not another status color.",
    sections: [
      {
        heading: "Investigation vs reporting",
        body: "Reporting summarizes status. Investigation reconstructs context: blocked work, review delay, dependency chains, and coinciding events.",
      },
      {
        heading: "Evidence first",
        body: "Start from observable engineering evidence. Use AI reasoning with clear boundaries between fact and inference.",
      },
    ],
    relatedLinks: [
      { href: ROUTES.projectHealth, label: "Project health" },
      { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
    ],
  },
];

export const seoLandingPagesBySlug = Object.fromEntries(
  seoLandingPages.map((page) => [page.slug, page]),
) as Record<string, SeoLandingPageContent>;
