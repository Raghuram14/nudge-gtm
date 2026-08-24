import { cn } from "@/lib/cn";

/**
 * The Nudgeio mark — a bracketed step.
 *
 * The bracket is a citation: what is inside it can be inspected. The step is
 * the nudge — a small intervention and the change you can point at. Together
 * they are the product's claim in one figure: a change, and the receipt around
 * it.
 *
 * The bracket inherits `currentColor` so the mark takes the surrounding text
 * colour; the step is ember. On a solid ember or ink background pass `mono`,
 * or the ember step disappears into the fill.
 */
export function BrandLogo({
  className,
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M8 3 H4.5 V21 H8" stroke="currentColor" strokeWidth="2" />
      <path d="M16 3 H19.5 V21 H16" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.5 16 H12 V9 H15.5"
        stroke={mono ? "currentColor" : "var(--accent)"}
        strokeWidth="2.4"
      />
    </svg>
  );
}

type BrandMarkProps = {
  className?: string;
  /** Hide the wordmark and render the mark alone. */
  markOnly?: boolean;
};

export function BrandMark({ className, markOnly = false }: BrandMarkProps): React.ReactElement {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandLogo className="size-6 text-foreground" />
      {markOnly ? (
        <span className="sr-only">Nudgeio</span>
      ) : (
        <span
          className="text-[1.3rem] leading-none tracking-[-0.01em] text-foreground"
          style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
        >
          Nudgeio
        </span>
      )}
    </span>
  );
}
