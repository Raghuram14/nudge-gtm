import { StatusMarker } from "@/components/marketing/status-marker";
import {
  capabilitiesByState,
  capabilityStateMeta,
  capabilityStates,
} from "@/config/capability-status";

/**
 * What is running, what is being built, and what is still a plan.
 *
 * Published deliberately. A product that refuses to assert without evidence
 * should be willing to say the same about its own roadmap.
 */
export function CapabilityLedger(): React.ReactElement {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
      {capabilityStates.map((state) => {
        const meta = capabilityStateMeta[state];
        const items = capabilitiesByState(state);

        return (
          <div key={state} className="flex flex-col bg-surface p-5">
            <div className="flex items-baseline justify-between gap-3">
              <StatusMarker state={state} />
              <span className="type-metadata">{items.length}</span>
            </div>
            <p className="type-caption mt-2">{meta.description}</p>

            <ul className="mt-5 space-y-4 border-t border-border-subtle pt-5">
              {items.map((capability) => (
                <li key={capability.id}>
                  <p className="text-sm font-medium text-foreground">{capability.name}</p>
                  <p className="type-caption mt-1">{capability.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
