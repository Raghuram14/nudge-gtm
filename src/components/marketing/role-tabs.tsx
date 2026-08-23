/** Phase 1 — audience tab switcher; `views` from server-loaded demo bundle. */
"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";
import type { RoleView } from "@/lib/marketing/types";

type RoleTabsProps = {
  views: ReadonlyArray<RoleView>;
};

export function RoleTabs({ views }: RoleTabsProps): React.ReactElement {
  const [activeId, setActiveId] = useState<string>(views[0]?.id ?? "cto");
  const active = views.find((view) => view.id === activeId) ?? views[0];

  if (!active) {
    return <div />;
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-border pb-4"
        role="tablist"
        aria-label="Audience views"
      >
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={view.id === activeId}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              view.id === activeId
                ? "border-accent bg-accent-muted text-accent"
                : "border-border bg-surface text-muted hover:border-accent hover:text-foreground",
            )}
            onClick={() => setActiveId(view.id)}
          >
            {view.role}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border bg-surface p-6" role="tabpanel">
        <p className="text-lg font-semibold">&ldquo;{active.question}&rdquo;</p>
        <p className="mt-3 text-sm text-muted">{active.focus}</p>
      </div>
    </div>
  );
}
