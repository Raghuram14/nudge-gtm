import { AlertTriangle, GitPullRequest } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export function ProjectHealthCard(): React.ReactElement {
  return (
    <Card as="article">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge tone="example">Example</Badge>
        <h3 className="text-lg font-semibold">Project Alpha</h3>
        <Badge tone="riskMedium">
          <Icon icon={AlertTriangle} className="mr-1" />
          Risk: Medium
        </Badge>
      </div>
      <p className="text-sm text-muted">
        Illustrative investigation only. These numbers are not customer data.
      </p>
      <ul className="mt-4 grid gap-3 text-sm">
        <li>
          <strong>Primary:</strong> dependency delay associated with 3 blocked work items
          and 2 downstream services.
        </li>
        <li>
          <strong>Secondary:</strong> review latency coinciding with concentrated reviewer
          load.
        </li>
        <li className="flex items-center gap-2 text-muted">
          <Icon icon={GitPullRequest} /> Window: current sprint · Scope: one project
        </li>
      </ul>
    </Card>
  );
}
