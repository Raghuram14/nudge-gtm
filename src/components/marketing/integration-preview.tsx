import Link from "next/link";

import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { type AccentTone, accentTones, categoryAccents } from "@/config/accent-tones";
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
    <ul className="grid items-stretch gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => {
        const primaryCategory = group.categoryIds[0];
        const accent =
          (primaryCategory ? categoryAccents[primaryCategory] : undefined) ??
          previewAccents[index % previewAccents.length] ??
          "teal";
        const colors = accentTones[accent];

        return (
          <li key={group.id} className="bg-surface">
            <Link
              href={`${ROUTES.integrations}#${group.id}`}
              className="flex h-full min-h-28 flex-col justify-between p-5 transition-colors hover:bg-surface-hover"
            >
              <div className="flex items-center gap-2.5">
                <span aria-hidden className={cn("size-1.5 shrink-0 rounded-full", colors.dot)} />
                <span className="text-sm font-medium text-foreground">{group.label}</span>
                <span className="type-metadata ml-auto">{group.items.length}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.slice(0, 4).map((item) => (
                  <IntegrationLogo key={item.slug} slug={item.slug} name={item.name} size="sm" />
                ))}
                {group.items.length > 4 ? (
                  <span className="inline-flex size-8 items-center justify-center rounded-xl border border-border text-xs font-medium text-text-tertiary">
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
