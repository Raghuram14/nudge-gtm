import { cn } from "@/lib/cn";

export type TimelineStep = {
  id: string;
  label: string;
  detail?: string;
  kind?: "observed" | "inferred" | "nudge" | "action" | "outcome";
};

type TimelineProps = {
  steps: ReadonlyArray<TimelineStep>;
  activeId?: string;
  onStepClick?: (id: string) => void;
  className?: string;
};

const kindColor = {
  observed: "border-observed bg-observed",
  inferred: "border-inferred bg-inferred",
  nudge: "border-nudge bg-nudge",
  action: "border-action bg-action",
  outcome: "border-outcome bg-outcome",
} as const;

export function Timeline({
  steps,
  activeId,
  onStepClick,
  className,
}: TimelineProps): React.ReactElement {
  return (
    <ol className={cn("space-y-0", className)}>
      {steps.map((step, index) => {
        const kind = step.kind ?? "observed";
        const active = activeId === step.id;
        const interactive = Boolean(onStepClick);
        const Tag = interactive ? "button" : "div";
        return (
          <li key={step.id} className="relative pl-7 pb-5 last:pb-0">
            {index < steps.length - 1 ? (
              <span className="absolute left-[9px] top-5 h-[calc(100%-0.75rem)] w-px bg-border" aria-hidden />
            ) : null}
            <span
              className={cn(
                "absolute left-0 top-1.5 size-5 rounded-full border-2 bg-surface",
                kindColor[kind].split(" ")[0],
                active && kindColor[kind],
              )}
              aria-hidden
            />
            <Tag
              type={interactive ? "button" : undefined}
              onClick={interactive ? () => onStepClick?.(step.id) : undefined}
              className={cn(
                "w-full rounded-md px-2 py-1 text-left transition-colors duration-[var(--motion-micro)]",
                interactive && "hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                active && "bg-surface-elevated",
              )}
            >
              <p className="text-sm font-medium text-foreground">{step.label}</p>
              {step.detail ? <p className="type-caption mt-0.5">{step.detail}</p> : null}
            </Tag>
          </li>
        );
      })}
    </ol>
  );
}
