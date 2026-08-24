import { cn } from "@/lib/cn";

import type { ClaimRelationship, EvidenceArtifact } from "./types";

type EvidenceProps = {
  artifact: Pick<
    EvidenceArtifact,
    "title" | "summary" | "source" | "timestamp" | "relationship" | "artifactType"
  >;
  selected?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const relationshipLabel: Record<ClaimRelationship, string> = {
  supports: "Supports",
  contradicts: "Contradicts",
  contextual: "Context",
};

export function Evidence({
  artifact,
  selected,
  highlighted,
  disabled,
  onClick,
  className,
}: EvidenceProps): React.ReactElement {
  const interactive = Boolean(onClick) && !disabled;
  const Tag = interactive ? "button" : "article";

  return (
    <Tag
      type={interactive ? "button" : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={interactive ? selected : undefined}
      className={cn(
        "w-full rounded-lg border border-border bg-surface-raised px-3 py-3 text-left transition-[border-color,background-color,box-shadow] duration-[var(--motion-micro)]",
        interactive && "hover:border-accent/40 hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        selected && "border-accent bg-accent-muted/30",
        highlighted && "ring-1 ring-accent/50",
        disabled && "opacity-40",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="type-mono text-xs text-accent">{artifact.title}</span>
        <span
          className={cn(
            "type-label",
            artifact.relationship === "supports" && "text-success",
            artifact.relationship === "contradicts" && "text-critical",
            artifact.relationship === "contextual" && "text-text-tertiary",
          )}
        >
          {relationshipLabel[artifact.relationship]}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-foreground">{artifact.summary}</p>
      <p className="type-metadata mt-2">
        {artifact.source} · {artifact.timestamp} · {artifact.artifactType}
      </p>
    </Tag>
  );
}
