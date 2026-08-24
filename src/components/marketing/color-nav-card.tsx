import Link from "next/link";

import { type AccentTone, accentTones } from "@/config/accent-tones";
import { cn } from "@/lib/cn";

/**
 * Index card for hub pages.
 *
 * These used to be painted cards - tinted fill, 4px coloured edge, coloured
 * heading - which turned every index into a colour-coded dashboard. The
 * category is now carried by a single dot; the card itself stays neutral.
 */
export function ColorNavCard({
  href,
  title,
  description,
  accent = "teal",
}: {
  href: string;
  title: string;
  description?: string;
  accent?: AccentTone;
}): React.ReactElement {
  const colors = accentTones[accent];

  return (
    <Link
      href={href}
      className="lift group flex h-full min-h-24 flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong"
    >
      <span className="flex items-center gap-2.5">
        <span className={cn("size-1.5 shrink-0 rounded-full", colors.dot)} aria-hidden />
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span
          aria-hidden
          className="ml-auto text-text-tertiary transition-transform group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </span>
      {description ? <span className="type-caption mt-4 block">{description}</span> : null}
    </Link>
  );
}

/** Editorial index entry - a rule, a serif title, mono metadata. */
export function ColorArticleCard({
  href,
  title,
  description,
  meta,
  accent = "teal",
}: {
  href: string;
  title: string;
  description?: string;
  meta?: string;
  accent?: AccentTone;
}): React.ReactElement {
  const colors = accentTones[accent];

  return (
    <li className="group border-t border-border py-6 first:border-t-0 first:pt-0">
      <Link href={href} className="block">
        <span className="flex items-baseline gap-2.5">
          <span
            className={cn("mt-2 size-1.5 shrink-0 self-start rounded-full", colors.dot)}
            aria-hidden
          />
          <span className="type-section-title text-foreground transition-colors group-hover:text-accent">
            {title}
          </span>
        </span>
        {description ? <span className="type-body mt-3 block pl-4">{description}</span> : null}
        {meta ? <span className="type-metadata mt-3 block pl-4">{meta}</span> : null}
      </Link>
    </li>
  );
}
