import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

type InsightProps = {
  title: string;
  context: string;
  children?: React.ReactNode;
  isExample?: boolean;
  onInspect?: () => void;
  className?: string;
};

export function Insight({
  title,
  context,
  children,
  isExample,
  onInspect,
  className,
}: InsightProps): React.ReactElement {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface-raised p-5",
        onInspect && "cursor-pointer hover:border-accent/40",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="type-label">Insight</p>
        {isExample ? <Badge tone="example">Example</Badge> : null}
      </div>
      <h3 className="type-subsection mt-2 text-foreground">{title}</h3>
      <p className="type-body-small mt-2">{context}</p>
      {children ? <div className="mt-4">{children}</div> : null}
      {onInspect ? (
        <button
          type="button"
          onClick={onInspect}
          className="mt-3 text-sm font-medium text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Inspect evidence
        </button>
      ) : null}
    </article>
  );
}
