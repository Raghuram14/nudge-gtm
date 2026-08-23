import { IntegrationCard } from "@/components/marketing/integration-card";
import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { accentTones, categoryAccents } from "@/config/accent-tones";
import { getIntegrationsByCategory } from "@/config/integrations";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

export function IntegrationCategoryList({
  showCategoryNav = false,
  categoryHeading: CategoryHeading = "h2",
}: {
  showCategoryNav?: boolean;
  categoryHeading?: "h2" | "h3";
}): React.ReactElement {
  const groups = getIntegrationsByCategory();

  return (
    <div className="grid gap-10">
      {showCategoryNav ? (
        <nav aria-label="Integration categories">
          <ul className="flex flex-wrap gap-2">
            {groups.map(({ category }) => {
              const accent = categoryAccents[category.id] ?? "indigo";
              const colors = accentTones[accent];
              return (
                <li key={category.id}>
                  <a
                    href={`${ROUTES.integrations}#${category.id}`}
                    className={cn(
                      "inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-colors hover:opacity-90",
                      colors.chip,
                    )}
                  >
                    <span className={cn("size-2 rounded-full", colors.dot)} aria-hidden />
                    {category.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
      {groups.map(({ category, items }) => {
        const accent = categoryAccents[category.id] ?? "indigo";
        const colors = accentTones[accent];
        return (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("size-3 rounded-full", colors.dot)} aria-hidden />
              <CategoryHeading className={cn("text-lg font-semibold", colors.text)}>
                {category.label}
              </CategoryHeading>
              <div className="ml-auto flex gap-1">
                {items.slice(0, 3).map((item) => (
                  <IntegrationLogo key={item.slug} slug={item.slug} name={item.name} size="sm" />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-muted">{category.description}</p>
            <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((integration) => (
                <IntegrationCard key={integration.slug} integration={integration} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
