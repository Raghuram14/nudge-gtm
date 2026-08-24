import Link from "next/link";

import { ROUTES } from "@/config/routes";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: ReadonlyArray<Crumb> }): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="type-label flex flex-wrap items-center gap-2">
        <li>
          <Link href={ROUTES.home} className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden className="text-border-strong">
                /
              </span>
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
