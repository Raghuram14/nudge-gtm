/**
 * Phase 1 - low-level mock constants. Aggregated in `home-demo-data.ts`; not imported by UI.
 * Components receive data via props from `getHomeDemoData()` (Phase 3).
 */
/** Fictional company used consistently across product mockups (GTM creative brief). */
export const mockCompany = {
  name: "Northstar Labs",
  team: "Payments Platform",
} as const;

export const mockServices = [
  "payments-api",
  "ledger-service",
  "checkout-web",
  "identity-service",
] as const;

export const mockEvidence = {
  pr: "PR #4821",
  issue: "ENG-1932",
  deploy: "deploy 8f31",
  adr: "ADR-032",
  incident: "INC-184",
  service: "payments-api",
} as const;

export const mockInvestigation = {
  question: "Why did Payments cycle time increase last month?",
  metric: "Cycle time +31%",
  baseline: "18h",
  current: "24.7h",
  contributors: [
    { label: "Review wait", delta: "+4.2h", pct: "+21%" },
    { label: "Dependency work", delta: "+2.1h", pct: "+12%" },
    { label: "Rework", delta: "+1.4h", pct: "+7%" },
    { label: "Parallelization", delta: "-1.0h", pct: "-5%" },
  ],
  evidenceCount: 18,
  corroboratingSources: 5,
  evidenceStrength: "High" as const,
  action:
    "Investigate the Payments-Ledger dependency. 4 of the affected PRs changed the same integration boundary.",
  explanation: {
    headline: "Why did cycle time increase 31% this month?",
    summary: "The increase is concentrated in Checkout and Payments.",
    signals: [
      "Review wait time increased 2.1×",
      "42% of affected PRs touched the payments-api service",
      "A dependency migration created 7 additional review rounds",
    ],
  },
} as const;

export const mockEvidenceItems = [
  mockEvidence.pr,
  mockEvidence.issue,
  mockEvidence.deploy,
  mockEvidence.adr,
  mockEvidence.incident,
  "3 related review events",
] as const;

export const mockGraphNodes = [
  { id: "pr", label: mockEvidence.pr, type: "PR" },
  { id: "issue", label: mockEvidence.issue, type: "Issue" },
  { id: "service", label: mockEvidence.service, type: "Service" },
  { id: "deploy", label: mockEvidence.deploy, type: "Deploy" },
  { id: "incident", label: mockEvidence.incident, type: "Incident" },
  { id: "adr", label: mockEvidence.adr, type: "Decision" },
] as const;

export const fragmentationSources = [
  { label: "GitHub", detail: mockEvidence.pr },
  { label: "Jira", detail: mockEvidence.issue },
  { label: "CI/CD", detail: mockEvidence.deploy },
  { label: "Docs", detail: mockEvidence.adr },
  { label: "Incidents", detail: mockEvidence.incident },
  { label: "Architecture", detail: mockEvidence.service },
] as const;

export const roleViews = [
  {
    id: "cto",
    role: "CTO",
    question: "Where is engineering complexity accumulating?",
    focus: "Architecture risk, dependency concentration, incident patterns, and engineering investment.",
  },
  {
    id: "vp",
    role: "VP Engineering",
    question: "Why are teams slowing down?",
    focus: "Cycle-time drivers, cross-team dependencies, and initiative delivery bottlenecks.",
  },
  {
    id: "em",
    role: "Engineering Manager",
    question: "What is blocking my team?",
    focus: "Review bottlenecks, stuck work, ownership gaps, and dependency blockers.",
  },
  {
    id: "tech-lead",
    role: "Tech Lead",
    question: "Why does this codebase work this way?",
    focus: "Architectural context, decisions, related changes, and historical reasoning.",
  },
] as const;
