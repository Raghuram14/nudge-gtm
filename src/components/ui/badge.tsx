import { cn } from "@/lib/cn";

const tones = {
  default: "border-border bg-surface-elevated text-muted",
  accent: "border-accent/35 bg-accent-muted text-accent",
  observed:
    "border-observed/40 bg-[color-mix(in_oklab,var(--observed)_14%,var(--surface))] text-observed",
  inferred:
    "border-inferred/45 border-dashed bg-[color-mix(in_oklab,var(--inferred)_12%,var(--surface))] text-inferred",
  example:
    "border-inferred/45 border-dashed bg-[color-mix(in_oklab,var(--inferred)_12%,var(--surface))] text-inferred",
  coming:
    "border-border bg-surface-elevated text-text-tertiary",
  riskLow: "border-risk-low/40 text-risk-low",
  riskMedium: "border-risk-medium/40 text-risk-medium",
  riskHigh: "border-risk-high/40 text-risk-high",
  nudge: "border-nudge/40 bg-[color-mix(in_oklab,var(--nudge)_12%,var(--surface))] text-nudge",
  hypothesis:
    "border-hypothesis/40 bg-[color-mix(in_oklab,var(--hypothesis)_12%,var(--surface))] text-hypothesis",
} as const;

type BadgeProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

export function Badge({
  children,
  tone = "default",
  className,
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-md border px-2 py-0.5 text-[11px] font-semibold leading-none tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
