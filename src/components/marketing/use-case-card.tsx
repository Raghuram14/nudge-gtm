import { StatusMarker } from "@/components/marketing/status-marker";
import { Card } from "@/components/ui/card";
import { type AccentTone, accentTones } from "@/config/accent-tones";
import type { CapabilityState } from "@/config/capability-status";
import { cn } from "@/lib/cn";

const stateFor: Record<string, CapabilityState> = {
  available: "live",
  "in-development": "building",
  "coming-soon": "roadmap",
};

export function UseCaseCard({
  title,
  problem,
  question,
  status,
  accent = "teal",
}: {
  title: string;
  problem: string;
  question?: string;
  status: "available" | "in-development" | "coming-soon";
  accent?: AccentTone;
}): React.ReactElement {
  const colors = accentTones[accent];
  const state = stateFor[status] ?? "roadmap";

  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="flex min-w-0 items-baseline gap-2.5 text-base font-medium leading-snug text-foreground">
          <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", colors.dot)} aria-hidden />
          <span className="min-w-0">{title}</span>
        </h3>
        <StatusMarker state={state} className="shrink-0" />
      </div>
      <p className="type-caption mt-3">{problem}</p>
      {question ? (
        <p className="mt-4 border-l-2 border-border pl-4 text-sm italic text-text-secondary">
          &ldquo;{question}&rdquo;
        </p>
      ) : null}
    </Card>
  );
}
