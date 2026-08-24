export type AccentTone = "teal" | "amber" | "blue" | "coral" | "slate";

export const accentTones: Record<
  AccentTone,
  {
    border: string;
    softBg: string;
    text: string;
    chip: string;
    dot: string;
  }
> = {
  teal: {
    border: "border-l-accent",
    softBg: "bg-accent-muted/80",
    text: "text-accent",
    chip: "border-accent/40 bg-accent-muted text-accent",
    dot: "bg-accent",
  },
  amber: {
    border: "border-l-inferred",
    softBg: "bg-[color-mix(in_oklab,var(--inferred)_12%,var(--surface))]",
    text: "text-inferred",
    chip: "border-inferred/40 bg-[color-mix(in_oklab,var(--inferred)_12%,var(--surface))] text-inferred",
    dot: "bg-inferred",
  },
  blue: {
    border: "border-l-reasoning",
    softBg: "bg-[color-mix(in_oklab,var(--reasoning)_12%,var(--surface))]",
    text: "text-reasoning",
    chip: "border-reasoning/40 bg-[color-mix(in_oklab,var(--reasoning)_12%,var(--surface))] text-reasoning",
    dot: "bg-reasoning",
  },
  coral: {
    border: "border-l-risk-high",
    softBg: "bg-[color-mix(in_oklab,var(--risk-high)_12%,var(--surface))]",
    text: "text-risk-high",
    chip: "border-risk-high/40 bg-[color-mix(in_oklab,var(--risk-high)_12%,var(--surface))] text-risk-high",
    dot: "bg-risk-high",
  },
  slate: {
    border: "border-l-knowledge",
    softBg: "bg-[color-mix(in_oklab,var(--knowledge)_14%,var(--surface))]",
    text: "text-knowledge",
    chip: "border-knowledge/40 bg-[color-mix(in_oklab,var(--knowledge)_14%,var(--surface))] text-knowledge",
    dot: "bg-knowledge",
  },
};

export const useCaseAccents: ReadonlyArray<AccentTone> = [
  "coral",
  "blue",
  "teal",
  "amber",
  "slate",
];

export const solutionAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "blue",
  "slate",
  "amber",
  "coral",
];

export const categoryAccents: Record<string, AccentTone> = {
  "source-control": "teal",
  "project-management": "amber",
  cicd: "coral",
  meetings: "blue",
  communication: "slate",
  incidents: "coral",
  docs: "teal",
  telemetry: "blue",
  "ai-tools": "slate",
};

export const platformAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "blue",
  "coral",
  "amber",
  "slate",
];

export const funnelAccents: ReadonlyArray<AccentTone> = [
  "coral",
  "slate",
  "blue",
  "teal",
  "blue",
  "teal",
];

export const resourceAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "blue",
  "amber",
  "slate",
];

export const trustAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "blue",
  "slate",
  "coral",
];
