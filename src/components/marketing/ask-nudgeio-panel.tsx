import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function AskNudgeioPanel(): React.ReactElement {
  return (
    <Card as="section" className="flex h-full flex-col border-dashed border-inferred">
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge tone="example">Example</Badge>
        <Badge tone="inferred">Suggested</Badge>
      </div>
      <h3 className="font-semibold">{siteConfig.askSurfaceName}</h3>
      <p className="mt-1 text-sm font-medium text-foreground">Why is this sprint at risk?</p>
      <p className="mt-3 text-sm text-muted">
        Blocked work and slow reviews are showing up together. Treat this as a starting point,
        not a verdict - and not a ranking of people.
      </p>
    </Card>
  );
}
