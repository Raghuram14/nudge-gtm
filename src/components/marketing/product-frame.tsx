import { cn } from "@/lib/cn";

/**
 * Window chrome for every code-built product mockup.
 *
 * The Example label is rendered by the frame rather than left to each mockup,
 * so a demo panel cannot ship unlabelled by omission. Nothing inside a frame is
 * customer data or a live reading - it is illustrative fixture content.
 */
export function ProductFrame({
  children,
  label,
  caption,
  className,
  bodyClassName,
}: {
  children: React.ReactNode;
  /** What this surface is, e.g. "Investigation - sprint risk". */
  label: string;
  /** Optional line under the frame explaining what the reader is looking at. */
  caption?: string;
  className?: string;
  bodyClassName?: string;
}): React.ReactElement {
  return (
    <figure className={cn("min-w-0", className)}>
      <div className="product-frame">
        <div className="product-frame-bar">
          <span aria-hidden className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-mock-border" />
            <span className="size-2 rounded-full bg-mock-border" />
            <span className="size-2 rounded-full bg-mock-border" />
          </span>
          <span className="mock-label truncate">{label}</span>
          <span className="ml-auto shrink-0 rounded border border-dashed border-mock-border px-1.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-mock-muted">
            Example
          </span>
        </div>
        <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
      </div>
      {caption ? <figcaption className="type-caption mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
