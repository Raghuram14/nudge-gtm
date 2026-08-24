/**
 * Standard marketing page shell: hero band -> body -> optional rail -> CTA band.
 *
 * Most `/platform`, `/trust`, and config-driven pages compose this. It used to
 * render one narrow `py-10` column for every page regardless of content, which
 * is why thirty-odd routes all read as the same rectangle. The `width` prop
 * lets a page pick the shape its content actually wants.
 */
import { type Crumb } from "@/components/marketing/breadcrumbs";
import { CtaBlock } from "@/components/marketing/cta-block";
import { PageHero } from "@/components/marketing/page-hero";
import { RelatedContent } from "@/components/marketing/related-content";
import { SectionShell } from "@/components/marketing/section-shell";
import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

type SimplePageProps = {
  crumbs: ReadonlyArray<Crumb>;
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  related?: ReadonlyArray<{ href: string; label: string }>;
  /**
   * Body shape.
   * - `prose`  narrow measure, for text-led pages (trust, legal, explainers)
   * - `default` standard content width
   * - `wide`   for card grids and tables that need the room
   */
  width?: "prose" | "default" | "wide";
  /** Extra content rendered full-bleed between the body and the CTA. */
  footer?: React.ReactNode;
  /** Sits inside the hero band, under the CTAs. */
  heroAside?: React.ReactNode;
};

export function SimplePage({
  crumbs,
  eyebrow,
  title,
  description,
  children,
  related,
  width = "default",
  footer,
  heroAside,
}: SimplePageProps): React.ReactElement {
  const hasRail = Boolean(related && related.length > 0);

  return (
    <main id="main">
      <PageHero
        crumbs={crumbs}
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={{
          href: `${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`,
          label: ctaConfig.seeInAction.label,
        }}
        aside={heroAside}
      />

      <SectionShell space="md" width={width === "wide" ? "wide" : "default"}>
        {hasRail ? (
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
            <div className={cn("page-body grid w-full gap-6", width === "prose" && "max-w-2xl")}>
              {children}
            </div>
            <RelatedContent items={related ?? []} />
          </div>
        ) : (
          <div className={cn("page-body grid w-full gap-6", width === "prose" && "max-w-2xl")}>
            {children}
          </div>
        )}
      </SectionShell>

      {footer}

      <SectionShell tone="tinted" space="lg">
        <CtaBlock />
      </SectionShell>
    </main>
  );
}
