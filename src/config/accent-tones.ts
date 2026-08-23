export type AccentTone = "indigo" | "teal" | "amber" | "blue" | "coral" | "violet";

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
  indigo: {
    border: "border-l-accent",
    softBg: "bg-accent-muted/70",
    text: "text-accent",
    chip: "border-accent bg-accent-muted text-accent",
    dot: "bg-accent",
  },
  teal: {
    border: "border-l-observed",
    softBg: "bg-[color-mix(in_oklab,var(--observed)_12%,white)]",
    text: "text-observed",
    chip: "border-observed bg-[color-mix(in_oklab,var(--observed)_12%,white)] text-observed",
    dot: "bg-observed",
  },
  amber: {
    border: "border-l-inferred",
    softBg: "bg-[color-mix(in_oklab,var(--inferred)_14%,white)]",
    text: "text-inferred",
    chip: "border-inferred bg-[color-mix(in_oklab,var(--inferred)_14%,white)] text-inferred",
    dot: "bg-inferred",
  },
  blue: {
    border: "border-l-reasoning",
    softBg: "bg-[color-mix(in_oklab,var(--reasoning)_12%,white)]",
    text: "text-reasoning",
    chip: "border-reasoning bg-[color-mix(in_oklab,var(--reasoning)_12%,white)] text-reasoning",
    dot: "bg-reasoning",
  },
  coral: {
    border: "border-l-risk-high",
    softBg: "bg-[color-mix(in_oklab,var(--risk-high)_12%,white)]",
    text: "text-risk-high",
    chip: "border-risk-high bg-[color-mix(in_oklab,var(--risk-high)_12%,white)] text-risk-high",
    dot: "bg-risk-high",
  },
  violet: {
    border: "border-l-[#8b5cf6]",
    softBg: "bg-[#f3e8ff]",
    text: "text-[#7c3aed]",
    chip: "border-[#8b5cf6] bg-[#f3e8ff] text-[#7c3aed]",
    dot: "bg-[#8b5cf6]",
  },
};

export const useCaseAccents: ReadonlyArray<AccentTone> = [
  "coral",
  "blue",
  "teal",
  "amber",
  "violet",
];

export const solutionAccents: ReadonlyArray<AccentTone> = [
  "indigo",
  "blue",
  "teal",
  "amber",
  "violet",
];

export const categoryAccents: Record<string, AccentTone> = {
  "source-control": "teal",
  "project-management": "amber",
  cicd: "coral",
  meetings: "blue",
  communication: "violet",
  incidents: "coral",
  docs: "indigo",
  telemetry: "blue",
  "ai-tools": "violet",
};

export const platformAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "indigo",
  "coral",
  "amber",
  "violet",
];

export const funnelAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "blue",
  "indigo",
  "amber",
  "coral",
];

export const resourceAccents: ReadonlyArray<AccentTone> = [
  "indigo",
  "teal",
  "amber",
  "violet",
];

export const trustAccents: ReadonlyArray<AccentTone> = [
  "indigo",
  "blue",
  "teal",
  "coral",
];
