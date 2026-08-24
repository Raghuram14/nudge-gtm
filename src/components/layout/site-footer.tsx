import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { StatusMarker } from "@/components/marketing/status-marker";
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
      <h2 className="type-label">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Link href={ROUTES.home} aria-label={`${siteConfig.name} home`}>
              <BrandMark />
            </Link>
            <p className="type-caption mt-4 max-w-xs">{siteConfig.tagline}</p>
            <p className="type-caption mt-4 max-w-xs">
              Pre-launch. We publish what is built and what is not.
            </p>
            <Link
              href={`${ROUTES.home}#build-status`}
              className="mt-3 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <StatusMarker state="building" />
              <span className="type-caption">See build status</span>
            </Link>
          </div>

          <FooterColumn title="Product" items={footerNavigation.product} />
          <FooterColumn title="Reading" items={footerNavigation.reading} />
          <FooterColumn title="Trust & company" items={footerNavigation.company} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-metadata">
            &copy; {year} {siteConfig.name}
          </p>
          <p className="type-metadata">
            No customer logos, metrics, or certifications are claimed on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
