import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AskAntarangPanel(): React.ReactElement {
  return (
    <Card as="section" className="flex h-full flex-col border-dashed border-inferred">
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge tone="example">Example</Badge>
        <Badge tone="inferred">Suggested</Badge>
      </div>
      <h3 className="font-semibold">Why is this sprint at risk?</h3>
      <p className="mt-3 text-sm text-muted">
        Blocked work and slow reviews are showing up together. Treat this as a starting point,
        not a verdict — and not a ranking of people.
      </p>
    </Card>
  );
}
