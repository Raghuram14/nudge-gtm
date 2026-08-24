import Link from "next/link";

import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { type AccentTone,accentTones, categoryAccents } from "@/config/accent-tones";
import { getIntegrationHubGroups } from "@/config/integration-hub";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

const previewAccents: ReadonlyArray<AccentTone> = [
  "teal",
  "coral",
  "amber",
  "teal",
  "blue",
  "slate",
];

export function IntegrationPreview(): React.ReactElement {
  const groups = getIntegrationHubGroups();

  return (
    <ul className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => {
        const primaryCategory = group.categoryIds[0];
        const accent =
          (primaryCategory ? categoryAccents[primaryCategory] : undefined) ??
          previewAccents[index % previewAccents.length] ??
          "teal";
        const colors = accentTones[accent];
        return (
          <li key={group.id}>
            <Link
              href={`${ROUTES.integrations}#${group.id}`}
              className={cn(
                "lift flex h-full min-h-24 flex-col justify-between rounded-xl border border-border border-l-4 px-4 py-4 transition-colors",
                colors.border,
                colors.softBg,
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={cn("font-semibold", colors.text)}>{group.label}</span>
                <span className={cn("text-2xl font-semibold tabular-nums", colors.text)}>
                  {group.items.length}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.slice(0, 4).map((item) => (
                  <IntegrationLogo key={item.slug} slug={item.slug} name={item.name} size="sm" />
                ))}
                {group.items.length > 4 ? (
                  <span className="inline-flex size-8 items-center justify-center rounded-xl bg-surface text-xs font-semibold text-muted">
                    +{group.items.length - 4}
                  </span>
                ) : null}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
