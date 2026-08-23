import { IntegrationPill } from "@/components/marketing/integration-pill";
import {
  getIntegrationHubGroups,
  type IntegrationHubGroupWithItems,
  type IntegrationHubPosition,
} from "@/config/integration-hub";
import { cn } from "@/lib/cn";

const positionClasses: Record<IntegrationHubPosition, string> = {
  top: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  "top-left": "lg:left-0 lg:top-[14%]",
  "top-right": "lg:right-0 lg:top-[14%]",
  "bottom-left": "lg:bottom-[6%] lg:left-0",
  bottom: "lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2",
  "bottom-right": "lg:bottom-[6%] lg:right-0",
};

const connectorLines: Record<
  IntegrationHubPosition,
  { x2: number; y2: number }
> = {
  top: { x2: 50, y2: 12 },
  "top-left": { x2: 18, y2: 24 },
  "top-right": { x2: 82, y2: 24 },
  "bottom-left": { x2: 18, y2: 76 },
  bottom: { x2: 50, y2: 88 },
  "bottom-right": { x2: 82, y2: 76 },
};

function HubConnectors({
  groups,
}: {
  groups: ReadonlyArray<IntegrationHubGroupWithItems>;
}): React.ReactElement {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {groups.map((group) => {
        const end = connectorLines[group.position];
        return (
          <line
            key={group.id}
            x1="50"
            y1="50"
            x2={end.x2}
            y2={end.y2}
            stroke="var(--mock-muted)"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="5 4"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

function HubCategoryCard({
  group,
  className,
}: {
  group: IntegrationHubGroupWithItems;
  className?: string;
}): React.ReactElement {
  return (
    <article
      id={group.id}
      className={cn(
        "mock-panel scroll-mt-24 p-4 shadow-lg shadow-black/20",
        "w-full max-w-[19rem]",
        className,
      )}
    >
      <h2 className="mock-label mb-3">{group.label}</h2>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((integration) => (
          <li key={integration.slug}>
            <IntegrationPill integration={integration} dark />
          </li>
        ))}
      </ul>
    </article>
  );
}

function HubCenter(): React.ReactElement {
  return (
    <div
      className="mock-panel z-10 flex size-[4.5rem] items-center justify-center rounded-2xl border-mock-border bg-mock-panel-elevated shadow-xl shadow-black/30"
      aria-hidden
    >
      <svg viewBox="0 0 28 28" className="size-10 text-mock-indigo" aria-hidden="true">
        <rect width="28" height="28" rx="8" className="fill-[color-mix(in_oklab,var(--mock-indigo)_18%,transparent)] stroke-mock-indigo" />
        <path
          d="M7 18 L14 8 L21 18"
          className="fill-none stroke-mock-indigo"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2.2" className="fill-mock-indigo" />
      </svg>
    </div>
  );
}

export function IntegrationHub(): React.ReactElement {
  const groups = getIntegrationHubGroups();

  return (
    <section aria-label="Integration ecosystem" className="grid gap-8">
      <div className="mock-ui grid gap-4 rounded-2xl p-4 sm:grid-cols-2 lg:hidden">
        {groups.map((group) => (
          <HubCategoryCard key={group.id} group={group} />
        ))}
      </div>

      <div
        className={cn(
          "mock-ui relative hidden overflow-hidden rounded-2xl lg:block",
          "integration-hub-grid min-h-[42rem] px-6 py-10",
        )}
      >
        <div className="relative mx-auto min-h-[38rem] max-w-5xl">
          <HubConnectors groups={groups} />

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <HubCenter />
          </div>

          {groups.map((group) => (
            <div
              key={group.id}
              className={cn(
                "absolute z-10 w-[min(100%,19rem)]",
                positionClasses[group.position],
              )}
            >
              <HubCategoryCard group={group} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted">
        GitHub and Jira are the current design-partner direction. Everything else is on the roadmap.
      </p>
    </section>
  );
}
