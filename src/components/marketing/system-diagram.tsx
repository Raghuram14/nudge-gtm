import { productFunnelStages } from "@/config/product-funnel";
import { cn } from "@/lib/cn";

export function SystemDiagram(): React.ReactElement {
  return (
    <ol className="grid gap-0 border-t border-border md:grid-cols-3 lg:grid-cols-6">
      {productFunnelStages.map((stage, index) => (
        <li
          key={stage.title}
          className={cn(
            "border-b border-border px-3 py-5 md:border-b-0 md:border-r md:last:border-r-0",
          )}
        >
          <p className="type-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-foreground">
            {stage.title}
          </p>
          <p className="type-caption mt-2">{stage.text}</p>
        </li>
      ))}
    </ol>
  );
}
