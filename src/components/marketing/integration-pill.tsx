import Link from "next/link";

import { IntegrationLogo } from "@/components/marketing/integration-logo";
import type { IntegrationRecord } from "@/config/integrations";
import { integrationStatus } from "@/config/integrations";
import { cn } from "@/lib/cn";

export function IntegrationPill({
  integration,
  dark = false,
}: {
  integration: IntegrationRecord;
  dark?: boolean;
}): React.ReactElement {
  const coming = integration.status === integrationStatus.comingSoon;

  const content = (
    <>
      <IntegrationLogo slug={integration.slug} name={integration.name} size="xs" />
      <span className="truncate">{integration.name}</span>
      {coming ? (
        <span
          className={cn(
            "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
            dark
              ? "bg-[color-mix(in_oklab,var(--mock-amber)_22%,transparent)] text-mock-amber"
              : "bg-[color-mix(in_oklab,var(--inferred)_22%,white)] text-[#8a5a00]",
          )}
        >
          Soon
        </span>
      ) : null}
    </>
  );

  const className = cn(
    "inline-flex max-w-full min-h-9 items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm font-medium transition-colors",
    dark
      ? "border-mock-border bg-mock-panel-elevated text-mock-text hover:border-mock-muted hover:bg-[color-mix(in_oklab,var(--mock-panel-elevated)_80%,white_4%)]"
      : "border-border bg-surface text-foreground hover:border-accent/30 hover:bg-accent-muted/40",
  );

  if (coming) {
    return (
      <span className={className} id={integration.slug}>
        {content}
      </span>
    );
  }

  return (
    <Link href={integration.href} className={className} id={integration.slug}>
      {content}
    </Link>
  );
}
