import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

/**
 * Sibling navigation for the reading hubs.
 *
 * The same three-card grid was hand-written on /blog, /learn, /research and
 * /compare, each with a slightly different accent and ordering. It is one list
 * now, and a hub omits itself.
 */
const resources = [
  { href: ROUTES.learn, label: "Learn", note: "Explainers" },
  { href: ROUTES.blog, label: "Blog", note: "Dated notes" },
  { href: ROUTES.research, label: "Research", note: "Pillars" },
  { href: ROUTES.compare, label: "Compare", note: "Category gaps" },
] as const;

export function ResourceNav({
  current,
  className,
}: {
  /** Route of the page rendering this, so it can omit itself. */
  current: string;
  className?: string;
}): React.ReactElement {
  const items = resources.filter((resource) => resource.href !== current);

  return (
    <nav aria-label="Other reading" className={cn("border-y border-border", className)}>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-4">
        <li className="type-label">Elsewhere</li>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-baseline gap-2 text-sm text-foreground transition-colors hover:text-accent"
            >
              <span className="font-medium">{item.label}</span>
              <span className="type-caption">{item.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
