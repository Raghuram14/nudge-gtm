import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

const principles = [
  {
    number: "01",
    title: "Every insight comes with a receipt",
    text: "Open any claim into source artifacts, timestamps, and extraction method.",
  },
  {
    number: "02",
    title: "Facts and inference stay separate",
    text: "Observed events never wear the same certainty as inferred explanations.",
  },
  {
    number: "03",
    title: "Developers are never ranked",
    text: "Zero surveillance by architecture - not an admin toggle.",
  },
  {
    number: "04",
    title: "Diagnosis is confirmed by outcome",
    text: "After a nudge, Nudgeio checks whether the prediction proved correct.",
  },
] as const;

type PrinciplesModulesProps = {
  className?: string;
};

export function PrinciplesModules({ className }: PrinciplesModulesProps): React.ReactElement {
  return (
    <div className={cn("space-y-6", className)}>
      <ol className="grid gap-0 border-t border-border md:grid-cols-2">
        {principles.map((item) => (
          <li
            key={item.number}
            className="border-b border-border px-1 py-6 md:border-r md:odd:pr-8 md:even:border-r-0 md:even:pl-8"
          >
            <p className="type-mono text-xs text-accent">{item.number}</p>
            <h3 className="type-subsection mt-3 text-foreground">{item.title}</h3>
            <p className="type-body-small mt-2">{item.text}</p>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap items-center gap-3">
        <Badge tone="observed">Observed</Badge>
        <Badge tone="inferred">Inferred</Badge>
        <Link href={ROUTES.trustNoSurveillance} className="text-sm text-accent hover:underline">
          Read the trust model
        </Link>
      </div>
    </div>
  );
}
