/**
 * Phase 1 - static homepage demo bundle. Aggregates `mock-data` + dashboard + graph layout.
 * Loaders (`getHomeDemoData`) return this shape; components receive it via props, not imports.
 */
import {
  fragmentationSources,
  mockCompany,
  mockEvidence,
  mockEvidenceItems,
  mockGraphNodes,
  mockInvestigation,
  roleViews,
} from "@/config/mock-data";
import type {
  CommandDashboardData,
  ContextGraphLayout,
  HomeDemoData,
} from "@/lib/marketing/types";

/** GTM context-graph SVG layout - coordinates are viewBox-specific, keep with mock bundle. */
export const mockContextGraphLayout: ContextGraphLayout = {
  nodes: [
    { id: "org", label: "Organization", x: 24, y: 112, tone: "slate" },
    { id: "team", label: "Team", x: 152, y: 48, tone: "teal" },
    { id: "person", label: "Person", x: 152, y: 176, tone: "teal" },
    { id: "project", label: "Project", x: 280, y: 48, tone: "blue" },
    { id: "sprint", label: "Sprint", x: 408, y: 48, tone: "blue" },
    { id: "work", label: "Work item", x: 536, y: 48, tone: "amber" },
    { id: "pr", label: "Pull request", x: 536, y: 152, tone: "teal" },
    { id: "review", label: "Review", x: 408, y: 208, tone: "teal" },
    { id: "build", label: "Build", x: 664, y: 152, tone: "slate" },
    { id: "deploy", label: "Deployment", x: 792, y: 152, tone: "coral" },
    { id: "service", label: "Service", x: 792, y: 48, tone: "coral" },
    { id: "incident", label: "Incident", x: 792, y: 208, tone: "coral" },
  ],
  edges: [
    { from: "org", to: "team" },
    { from: "team", to: "person" },
    { from: "team", to: "project" },
    { from: "project", to: "sprint" },
    { from: "sprint", to: "work" },
    { from: "work", to: "pr" },
    { from: "pr", to: "review" },
    { from: "person", to: "review" },
    { from: "pr", to: "build" },
    { from: "build", to: "deploy" },
    { from: "deploy", to: "service" },
    { from: "deploy", to: "incident" },
  ],
};

export const mockCommandDashboard: CommandDashboardData = {
  kpis: [
    {
      label: "Cycle time",
      value: "6.4d",
      delta: "+31%",
      stroke: "var(--mock-amber)",
      fillId: "kpi-fill-amber",
      points: "0,34 40,30 80,28 120,20 160,22 200,10",
      area: "0,34 40,30 80,28 120,20 160,22 200,10 200,40 0,40",
    },
    {
      label: "Review wait",
      value: "18h",
      delta: "+2.1×",
      stroke: "var(--mock-indigo)",
      fillId: "kpi-fill-indigo",
      points: "0,30 40,28 80,22 120,20 160,14 200,12",
      area: "0,30 40,28 80,22 120,20 160,14 200,12 200,40 0,40",
    },
    {
      label: "Deploy freq",
      value: "14/wk",
      delta: "+22%",
      stroke: "var(--mock-teal)",
      fillId: "kpi-fill-teal",
      points: "0,36 40,32 80,28 120,24 160,18 200,14",
      area: "0,36 40,32 80,28 120,24 160,18 200,14 200,40 0,40",
    },
    {
      label: "Blocked work",
      value: "7",
      delta: "+3",
      stroke: "#f07a6a",
      fillId: "kpi-fill-coral",
      points: "0,32 40,32 80,30 120,26 160,20 200,16",
      area: "0,32 40,32 80,30 120,26 160,20 200,16 200,40 0,40",
    },
  ],
  drivers: [
    { label: "Review wait", pct: 86, value: "+4.2h", color: "var(--mock-amber)" },
    { label: "Dependency work", pct: 62, value: "+2.1h", color: "var(--mock-indigo)" },
    { label: "Rework", pct: 44, value: "+1.4h", color: "#4fa3ff" },
    { label: "Build failures", pct: 28, value: "+0.9h", color: "#f07a6a" },
  ],
  sideStats: [
    { value: "847", label: "Linked events", color: "text-mock-teal" },
    { value: "2.4k", label: "Graph nodes", color: "text-mock-indigo" },
    { value: "12", label: "Teams", color: "text-mock-amber" },
  ],
};

/** GTM example bundle - `isExample: true` keeps honest labeling in UI. */
export function buildMockHomeDemoData(): HomeDemoData {
  return {
    company: { name: mockCompany.name, team: mockCompany.team },
    evidence: { ...mockEvidence },
    investigation: {
      ...mockInvestigation,
      contributors: mockInvestigation.contributors.map((row) => ({ ...row })),
      explanation: {
        ...mockInvestigation.explanation,
        signals: [...mockInvestigation.explanation.signals],
      },
    },
    evidenceItems: [...mockEvidenceItems],
    graphNodes: mockGraphNodes.map((node) => ({ ...node })),
    fragmentationSources: fragmentationSources.map((source) => ({ ...source })),
    roleViews: roleViews.map((view) => ({ ...view })),
    dashboard: mockCommandDashboard,
    contextGraph: mockContextGraphLayout,
    isExample: true,
  };
}

export const mockHomeDemoData = buildMockHomeDemoData();
