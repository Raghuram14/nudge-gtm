import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function EvidencePanel(): React.ReactElement {
  return (
    <Card as="section">
      <div className="mb-3 flex gap-2">
        <Badge tone="example">Example</Badge>
        <Badge tone="observed">Observed</Badge>
      </div>
      <h3 className="font-semibold">WHAT / WHY / EVIDENCE / CONTEXT</h3>
      <ul className="mt-4 grid gap-2 text-sm text-muted">
        <li>
          <strong className="text-foreground">What:</strong> cycle time is up in this
          sprint window.
        </li>
        <li>
          <strong className="text-foreground">Why (associated):</strong> review queue is
          up; pull requests are waiting.
        </li>
        <li>
          <strong className="text-foreground">Evidence:</strong> PRs waiting on a small
          set of reviewers.
        </li>
        <li>
          <strong className="text-foreground">Context:</strong> concentrated reviewer load
          - not an individual ranking.
        </li>
      </ul>
    </Card>
  );
}
