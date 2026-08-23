import { accentTones, funnelAccents } from "@/config/accent-tones";
import { productFunnelStages } from "@/config/product-funnel";
import { cn } from "@/lib/cn";

export function SystemDiagram(): React.ReactElement {
  return (
    <ol className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {productFunnelStages.map((stage, index) => {
        const accent = funnelAccents[index % funnelAccents.length] ?? "indigo";
        const colors = accentTones[accent];
        return (
          <li
            key={stage.title}
            className={cn(
              "lift flex h-full flex-col rounded-xl border border-border border-l-4 p-5",
              colors.border,
              colors.softBg,
            )}
          >
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className={cn("size-2 rounded-full", colors.dot)} aria-hidden />
              <span className={colors.text}>{stage.title}</span>
            </p>
            <p className="mt-3 text-sm text-muted">{stage.text}</p>
            {index < productFunnelStages.length - 1 ? (
              <span className="sr-only">then</span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
