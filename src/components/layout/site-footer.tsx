import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { footerNavigation } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ href: string; label: string }>;
}): React.ReactElement {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="text-sm text-muted hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Link href={ROUTES.home} aria-label="Antarang home">
            <BrandMark />
          </Link>
          <p className="mt-4 text-sm text-muted">{siteConfig.category}</p>
        </div>
        <FooterColumn title="Product" items={footerNavigation.product} />
        <FooterColumn title="Use cases" items={footerNavigation.useCases} />
        <FooterColumn title="Resources" items={footerNavigation.resources} />
        <div className="flex flex-col gap-8">
          <FooterColumn title="Company" items={footerNavigation.company} />
          <FooterColumn title="Trust" items={footerNavigation.trust} />
        </div>
      </div>
    </footer>
  );
}
