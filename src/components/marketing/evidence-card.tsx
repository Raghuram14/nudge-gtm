import { AlertTriangle, CircleHelp, Link2, ListChecks } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export type EvidenceItem = {
  insight: string;
  why: string;
  evidence: string;
  source: string;
  confidence: "high" | "medium" | "low";
};

export function EvidenceCard({ item }: { item: EvidenceItem }): React.ReactElement {
  return (
    <Card as="article">
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge tone="example">Example</Badge>
        <Badge tone="inferred">Inferred</Badge>
      </div>
      <dl className="grid gap-4">
        <div>
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
            <Icon icon={CircleHelp} /> Insight
          </dt>
          <dd className="mt-1 font-medium">{item.insight}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
            <Icon icon={AlertTriangle} /> Why
          </dt>
          <dd className="mt-1 text-sm text-muted">{item.why}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
            <Icon icon={ListChecks} /> Evidence
          </dt>
          <dd className="mt-1 text-sm text-muted">{item.evidence}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
            <Icon icon={Link2} /> Source
          </dt>
          <dd className="mt-1 text-sm text-muted">{item.source}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">Confidence (example)</dt>
          <dd className="mt-1 text-sm capitalize">{item.confidence}</dd>
        </div>
      </dl>
    </Card>
  );
}
