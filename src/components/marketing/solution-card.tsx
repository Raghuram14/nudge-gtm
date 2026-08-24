import { Card } from "@/components/ui/card";
import { type AccentTone, accentTones } from "@/config/accent-tones";
import { cn } from "@/lib/cn";

export function SolutionCard({
  title,
  problem,
  belief,
  cta,
  accent = "teal",
}: {
  title: string;
  problem: string;
  belief: string;
  cta: string;
  accent?: AccentTone;
}): React.ReactElement {
  const colors = accentTones[accent];

  return (
    <Card as="article" className="flex h-full flex-col">
      <h3 className="flex items-baseline gap-2.5 text-base font-medium text-foreground">
        <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", colors.dot)} aria-hidden />
        <span className="min-w-0">{title}</span>
      </h3>
      <p className="type-caption mt-3">{problem}</p>
      <p className="mt-4 border-t border-border pt-4 text-sm text-foreground">{belief}</p>
      <p className="type-label mt-auto pt-5 text-accent">{cta} &rarr;</p>
    </Card>
  );
}
