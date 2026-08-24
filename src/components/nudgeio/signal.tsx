import { cn } from "@/lib/cn";

type SignalProps = {
  label: string;
  value: string;
  delta?: string;
  tone?: "signal" | "warning" | "success" | "default";
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const toneClass = {
  signal: "border-signal/40 text-signal",
  warning: "border-warning/40 text-warning",
  success: "border-success/40 text-success",
  default: "border-border text-foreground",
} as const;

export function Signal({
  label,
  value,
  delta,
  tone = "signal",
  selected,
  disabled,
  onClick,
  className,
}: SignalProps): React.ReactElement {
  const interactive = Boolean(onClick) && !disabled;

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-pressed={selected}
        className={cn(
          "rounded-lg border bg-surface-raised px-4 py-3 text-left transition-[border-color,background-color,transform] duration-[var(--motion-micro)]",
          toneClass[tone],
          "hover:bg-surface-hover active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          selected && "border-accent bg-accent-muted/40",
          disabled && "cursor-not-allowed opacity-40",
          className,
        )}
      >
        <p className="type-label">{label}</p>
        <p className="type-metric mt-1 text-2xl">{value}</p>
        {delta ? <p className="type-metadata mt-1">{delta}</p> : null}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg border bg-surface-raised px-4 py-3 text-left",
        toneClass[tone],
        className,
      )}
    >
      <p className="type-label">{label}</p>
      <p className="type-metric mt-1 text-2xl">{value}</p>
      {delta ? <p className="type-metadata mt-1">{delta}</p> : null}
    </div>
  );
}
