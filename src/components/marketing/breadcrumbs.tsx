import Link from "next/link";

import { ROUTES } from "@/config/routes";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: ReadonlyArray<Crumb> }): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href={ROUTES.home} className="hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex gap-2">
            <span aria-hidden="true">/</span>
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
