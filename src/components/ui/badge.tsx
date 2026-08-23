import { cn } from "@/lib/cn";

const tones = {
  default: "border-border bg-surface text-muted",
  accent: "border-accent/40 bg-accent-muted text-accent",
  observed: "border-observed/40 bg-[color-mix(in_oklab,var(--observed)_12%,white)] text-observed",
  inferred: "border-inferred/50 bg-[color-mix(in_oklab,var(--inferred)_16%,white)] text-[#9a6b00]",
  example: "border-inferred/50 bg-[color-mix(in_oklab,var(--inferred)_16%,white)] text-[#9a6b00]",
  coming:
    "border-inferred bg-[color-mix(in_oklab,var(--inferred)_22%,white)] text-[#8a5a00]",
  riskLow: "border-risk-low/40 text-risk-low",
  riskMedium: "border-risk-medium/40 text-risk-medium",
  riskHigh: "border-risk-high/40 text-risk-high",
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
