import { type CapabilityState, capabilityStateMeta } from "@/config/capability-status";
import { cn } from "@/lib/cn";

/**
 * Live / Building / Roadmap marker.
 *
 * Colour is not the only carrier - each state also has a distinct glyph, so the
 * marker survives greyscale and colour-blind viewing, and reads correctly in
 * both themes.
 */

const glyphs: Record<CapabilityState, string> = {
  live: "●",
  building: "◐",
  roadmap: "○",
};

const stateStyles: Record<CapabilityState, string> = {
  live: "text-success",
  building: "text-warning",
  roadmap: "text-text-tertiary",
};

export function StatusMarker({
  state,
  className,
  showLabel = true,
}: {
  state: CapabilityState;
  className?: string;
  showLabel?: boolean;
}): React.ReactElement {
  const meta = capabilityStateMeta[state];

  return (
    <span
      className={cn("type-label inline-flex items-center gap-1.5 whitespace-nowrap", className)}
      title={meta.description}
    >
      <span aria-hidden className={cn("text-[0.7em] leading-none", stateStyles[state])}>
        {glyphs[state]}
      </span>
      {showLabel ? <span>{meta.label}</span> : null}
      <span className="sr-only">{`${meta.label}. ${meta.description}`}</span>
    </span>
  );
}
