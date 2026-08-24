import Link from "next/link";

import { type AccentTone,accentTones } from "@/config/accent-tones";
import { cn } from "@/lib/cn";

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
      className={cn(
        "lift flex min-h-24 flex-col justify-center rounded-xl border border-border border-l-4 px-4 py-4 transition-colors",
        colors.border,
        colors.softBg,
      )}
    >
      <span className="flex items-center gap-2">
        <span className={cn("size-2.5 rounded-full", colors.dot)} aria-hidden />
        <span className={cn("font-semibold", colors.text)}>{title}</span>
      </span>
      {description ? (
        <span className="mt-1.5 text-sm font-normal text-muted">{description}</span>
      ) : null}
    </Link>
  );
}

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
    <li
      className={cn(
        "rounded-xl border border-border border-l-4 px-4 py-4",
        colors.border,
        colors.softBg,
      )}
    >
      <Link href={href} className={cn("text-base font-semibold hover:underline", colors.text)}>
        {title}
      </Link>
      {description ? <p className="mt-1 text-sm text-muted">{description}</p> : null}
      {meta ? <p className={cn("mt-2 text-xs font-medium", colors.text)}>{meta}</p> : null}
    </li>
  );
}
