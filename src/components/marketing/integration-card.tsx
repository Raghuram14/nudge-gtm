import Link from "next/link";

import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentTones, categoryAccents } from "@/config/accent-tones";
import type { IntegrationRecord } from "@/config/integrations";
import { integrationStatus } from "@/config/integrations";
import { cn } from "@/lib/cn";

export function IntegrationCard({
  integration,
}: {
  integration: IntegrationRecord;
}): React.ReactElement {
  const coming = integration.status === integrationStatus.comingSoon;
  const accent = categoryAccents[integration.category] ?? "indigo";
  const colors = accentTones[accent];

  return (
    <Card
      as="article"
      id={integration.slug}
      className={cn(
        "flex h-full flex-col scroll-mt-24 border-l-4",
        colors.border,
        colors.softBg,
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <IntegrationLogo slug={integration.slug} name={integration.name} />
          <p className={cn("text-base font-semibold leading-snug", colors.text)}>
            {integration.name}
          </p>
        </div>
        <Badge tone={coming ? "coming" : "accent"}>
          {coming ? "Coming soon" : "Available"}
        </Badge>
      </div>
      <p className="flex-1 text-sm text-muted">{integration.summary}</p>
      <p className="mt-4 text-sm">
        <Link href={integration.href} className={cn("font-medium hover:underline", colors.text)}>
          {coming ? `Learn about ${integration.name}` : `${integration.name} integration`} →
        </Link>
      </p>
    </Card>
  );
}
