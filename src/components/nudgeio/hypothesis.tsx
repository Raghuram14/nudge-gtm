import { cn } from "@/lib/cn";

import type { HypothesisData } from "./types";

type HypothesisProps = {
  hypothesis: HypothesisData;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const rankLabel = {
  primary: "Primary hypothesis",
  secondary: "Secondary hypothesis",
  weak: "Weak hypothesis",
} as const;

export function Hypothesis({
  hypothesis,
  selected,
  disabled,
  onClick,
  className,
}: HypothesisProps): React.ReactElement {
  const interactive = Boolean(onClick) && !disabled;
  const Tag = interactive ? "button" : "article";

  return (
    <Tag
      type={interactive ? "button" : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={interactive ? selected : undefined}
      className={cn(
        "w-full rounded-lg border border-border border-l-4 border-l-hypothesis bg-surface-raised px-4 py-3 text-left transition-[border-color,background-color,transform] duration-[var(--motion-micro)]",
        interactive &&
          "hover:bg-surface-hover active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        selected && "border-hypothesis bg-[color-mix(in_oklab,var(--hypothesis)_10%,var(--surface))]",
        disabled && "opacity-40",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="type-label text-hypothesis">{rankLabel[hypothesis.rank]}</p>
        <p className="type-mono text-sm text-confidence">{hypothesis.confidence}%</p>
      </div>
      <p className="mt-1.5 text-base font-semibold text-foreground">{hypothesis.title}</p>
      {hypothesis.summary ? (
        <p className="type-body-small mt-1">{hypothesis.summary}</p>
      ) : null}
      <div className="confidence-bar mt-3" aria-hidden>
        <span style={{ width: `${hypothesis.confidence}%` }} />
      </div>
      <p className="type-metadata mt-2">
        {hypothesis.supportingCount} supporting · {hypothesis.contradictingCount} contradicting
      </p>
    </Tag>
  );
}
