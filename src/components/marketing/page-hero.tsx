import { Breadcrumbs, type Crumb } from "@/components/marketing/breadcrumbs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  /** Rendered above the title. Kept inside the hero so the band reads as one unit. */
  crumbs?: ReadonlyArray<Crumb>;
  /** Status markers, meta, or a small artifact sitting under the CTAs. */
  aside?: React.ReactNode;
  className?: string;
};

/**
 * Page opening. Full-bleed atmospheric band so an inner page has the same
 * editorial entry as the homepage rather than starting mid-column.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  crumbs,
  aside,
  className,
}: PageHeroProps): React.ReactElement {
  return (
    <header className={cn("hero-atmosphere border-b border-border", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {crumbs && crumbs.length > 0 ? (
          <div className="mb-8">
            <Breadcrumbs items={crumbs} />
          </div>
        ) : null}

        {eyebrow ? <p className="type-label mb-4 text-accent">{eyebrow}</p> : null}
        <h1 className="type-page-title max-w-3xl text-balance text-foreground">{title}</h1>
        <p className="type-lead mt-5">{description}</p>

        {primaryCta || secondaryCta ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}

        {aside ? <div className="mt-9">{aside}</div> : null}
      </div>
    </header>
  );
}
