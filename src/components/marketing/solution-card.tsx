import { Card } from "@/components/ui/card";
import { type AccentTone,accentTones } from "@/config/accent-tones";
import { cn } from "@/lib/cn";

export function SolutionCard({
  title,
  problem,
  belief,
  cta,
  accent = "indigo",
}: {
  title: string;
  problem: string;
  belief: string;
  cta: string;
  accent?: AccentTone;
}): React.ReactElement {
  const colors = accentTones[accent];

  return (
    <Card
      as="article"
      className={cn("flex h-full flex-col border-l-4", colors.border, colors.softBg)}
    >
      <div className="flex items-center gap-2">
        <span className={cn("size-2.5 rounded-full", colors.dot)} aria-hidden />
        <h3 className={cn("text-lg font-semibold", colors.text)}>{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted">{problem}</p>
      <p className="mt-3 rounded-lg bg-surface/80 px-3 py-2 text-sm text-foreground">{belief}</p>
      <p className={cn("mt-auto pt-4 text-xs font-semibold uppercase tracking-wide", colors.text)}>
        {cta} →
      </p>
    </Card>
  );
}
