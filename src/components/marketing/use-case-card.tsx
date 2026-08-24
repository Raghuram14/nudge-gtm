import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type AccentTone, accentTones } from "@/config/accent-tones";
import { cn } from "@/lib/cn";

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
  const tone =
    status === "available" ? "accent" : status === "in-development" ? "inferred" : "coming";
  const label =
    status === "available" ? "Available" : status === "in-development" ? "Building" : "Coming soon";
  const colors = accentTones[accent];

  return (
    <Card
      as="article"
      className={cn("flex h-full flex-col border-l-4", colors.border, colors.softBg)}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className={cn("min-w-0 text-base font-semibold leading-snug", colors.text)}>{title}</h3>
        <Badge tone={tone}>{label}</Badge>
      </div>
      <p className="mt-3 text-sm text-muted">{problem}</p>
      {question ? (
        <p
          className={cn(
            "mt-4 rounded-lg border border-dashed bg-surface/80 px-3 py-2 text-sm font-medium",
            colors.border.replace("border-l-", "border-"),
            colors.text,
          )}
        >
          &ldquo;{question}&rdquo;
        </p>
      ) : null}
    </Card>
  );
}
