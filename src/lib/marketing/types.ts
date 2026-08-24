/** Shared shapes for GTM product mockups - validated in `src/lib/api/schemas.ts`. */

export type EvidenceStrength = "High" | "Medium" | "Low";

export type InvestigationContributor = {
  label: string;
  delta: string;
  pct: string;
};

export type Investigation = {
  question: string;
  metric: string;
  baseline: string;
  current: string;
  contributors: ReadonlyArray<InvestigationContributor>;
  evidenceCount: number;
  corroboratingSources: number;
  evidenceStrength: EvidenceStrength;
  action: string;
  explanation: {
    headline: string;
    summary: string;
    signals: ReadonlyArray<string>;
  };
};

export type GraphNode = {
  id: string;
  label: string;
  type: string;
};

export type EvidenceRefs = {
  pr: string;
  issue: string;
  deploy: string;
  adr: string;
  incident: string;
  service: string;
};

export type FragmentationSource = {
  label: string;
  detail: string;
};

export type RoleView = {
  id: string;
  role: string;
  question: string;
  focus: string;
};

export type DashboardKpi = {
  label: string;
  value: string;
  delta: string;
  stroke: string;
  fillId: string;
  points: string;
  area: string;
};

export type DashboardDriver = {
  label: string;
  pct: number;
  value: string;
  color: string;
};

export type DashboardSideStat = {
  value: string;
  label: string;
  color: string;
};

export type CommandDashboardData = {
  kpis: ReadonlyArray<DashboardKpi>;
  drivers: ReadonlyArray<DashboardDriver>;
  sideStats: ReadonlyArray<DashboardSideStat>;
};

export type ContextGraphNodeTone =
  | "teal"
  | "amber"
  | "blue"
  | "coral"
  | "slate";

/** Spatial layout for the interactive context-graph SVG (Phase 1 prop shape). */
export type ContextGraphLayoutNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone: ContextGraphNodeTone;
};

export type ContextGraphLayout = {
  nodes: ReadonlyArray<ContextGraphLayoutNode>;
  edges: ReadonlyArray<{ from: string; to: string }>;
};

/** Bundle passed from Server Components to homepage demo visuals. */
export type HomeDemoData = {
  company: { name: string; team: string };
  evidence: EvidenceRefs;
  investigation: Investigation;
  evidenceItems: ReadonlyArray<string>;
  graphNodes: ReadonlyArray<GraphNode>;
  fragmentationSources: ReadonlyArray<FragmentationSource>;
  roleViews: ReadonlyArray<RoleView>;
  dashboard: CommandDashboardData;
  contextGraph: ContextGraphLayout;
  /** When true, UI must keep Example badges and honest mock labeling. */
  isExample: boolean;
};
