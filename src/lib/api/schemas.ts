/**
 * Phase 2 — Zod schemas for demo/product API responses.
 * Must stay in sync with `HomeDemoData` in `src/lib/marketing/types.ts`.
 */
import { z } from "zod";

export const investigationContributorSchema = z.object({
  label: z.string(),
  delta: z.string(),
  pct: z.string(),
});

export const investigationSchema = z.object({
  question: z.string(),
  metric: z.string(),
  baseline: z.string(),
  current: z.string(),
  contributors: z.array(investigationContributorSchema),
  evidenceCount: z.number().int().nonnegative(),
  corroboratingSources: z.number().int().nonnegative(),
  evidenceStrength: z.enum(["High", "Medium", "Low"]),
  action: z.string(),
  explanation: z.object({
    headline: z.string(),
    summary: z.string(),
    signals: z.array(z.string()),
  }),
});

export const graphNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  type: z.string(),
});

export const evidenceRefsSchema = z.object({
  pr: z.string(),
  issue: z.string(),
  deploy: z.string(),
  adr: z.string(),
  incident: z.string(),
  service: z.string(),
});

export const fragmentationSourceSchema = z.object({
  label: z.string(),
  detail: z.string(),
});

export const roleViewSchema = z.object({
  id: z.string(),
  role: z.string(),
  question: z.string(),
  focus: z.string(),
});

export const dashboardKpiSchema = z.object({
  label: z.string(),
  value: z.string(),
  delta: z.string(),
  stroke: z.string(),
  fillId: z.string(),
  points: z.string(),
  area: z.string(),
});

export const dashboardDriverSchema = z.object({
  label: z.string(),
  pct: z.number(),
  value: z.string(),
  color: z.string(),
});

export const dashboardSideStatSchema = z.object({
  value: z.string(),
  label: z.string(),
  color: z.string(),
});

export const commandDashboardSchema = z.object({
  kpis: z.array(dashboardKpiSchema),
  drivers: z.array(dashboardDriverSchema),
  sideStats: z.array(dashboardSideStatSchema),
});

export const contextGraphNodeToneSchema = z.enum([
  "indigo",
  "teal",
  "amber",
  "blue",
  "coral",
  "violet",
]);

export const contextGraphLayoutNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  x: z.number(),
  y: z.number(),
  tone: contextGraphNodeToneSchema,
});

export const contextGraphLayoutSchema = z.object({
  nodes: z.array(contextGraphLayoutNodeSchema),
  edges: z.array(z.object({ from: z.string(), to: z.string() })),
});

export const homeDemoDataSchema = z.object({
  company: z.object({
    name: z.string(),
    team: z.string(),
  }),
  evidence: evidenceRefsSchema,
  investigation: investigationSchema,
  evidenceItems: z.array(z.string()),
  graphNodes: z.array(graphNodeSchema),
  fragmentationSources: z.array(fragmentationSourceSchema),
  roleViews: z.array(roleViewSchema),
  dashboard: commandDashboardSchema,
  contextGraph: contextGraphLayoutSchema,
  isExample: z.boolean(),
});

export type HomeDemoDataDto = z.infer<typeof homeDemoDataSchema>;
