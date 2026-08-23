"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { Icon } from "@/components/ui/icon";
import type { FaqItem } from "@/config/faq";
import { cn } from "@/lib/cn";

export function Faq({ items }: { items: ReadonlyArray<FaqItem> }): React.ReactElement {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      <ul className="grid content-start gap-2">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.question}>
              <button
                type="button"
                className={cn(
                  "flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium",
                  selected
                    ? "border-accent bg-accent-muted text-foreground"
                    : "border-border bg-surface text-muted hover:border-accent hover:text-foreground",
                )}
                aria-expanded={selected}
                onClick={() => setActive(index)}
              >
                <span>{item.question}</span>
                <Icon icon={ChevronRight} className={selected ? "text-accent" : undefined} />
              </button>
              {selected ? (
                <p className="px-1 py-3 text-sm text-muted lg:hidden">{item.answer}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
      {current ? (
        <div
          key={current.question}
          className="hidden h-full min-h-72 animate-fade-up rounded-xl border border-accent bg-surface p-8 lg:block"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-accent">Answer</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{current.question}</h3>
          <p className="mt-4 text-muted">{current.answer}</p>
        </div>
      ) : null}
    </div>
  );
}
