/**
 * Standard marketing page shell: breadcrumbs → hero → body → optional sidebar → CTA.
 * Most `/platform`, `/trust`, and config-driven pages compose this instead of bespoke layout.
 */
import { Breadcrumbs, type Crumb } from "@/components/marketing/breadcrumbs";
import { CtaBlock } from "@/components/marketing/cta-block";
import { PageHero } from "@/components/marketing/page-hero";
import { RelatedContent } from "@/components/marketing/related-content";
import { Reveal } from "@/components/motion/reveal";
import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";

type SimplePageProps = {
  crumbs: ReadonlyArray<Crumb>;
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  related?: ReadonlyArray<{ href: string; label: string }>;
};

export function SimplePage({
  crumbs,
  eyebrow,
  title,
  description,
  children,
  related,
}: SimplePageProps): React.ReactElement {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10">
      <Reveal>
        <Breadcrumbs items={crumbs} />
        <PageHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          primaryCta={{
            href: `${ROUTES.contact}?intent=${ctaConfig.earlyAccess.intent}`,
            label: ctaConfig.earlyAccess.label,
          }}
        />
      </Reveal>
      <Reveal>
        {related && related.length > 0 ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="grid w-full gap-6 text-muted">{children}</div>
            <RelatedContent items={related} />
          </div>
        ) : (
          <div className="grid w-full gap-6 text-muted">{children}</div>
        )}
      </Reveal>
      <Reveal>
        <div className="mt-16">
          <CtaBlock />
        </div>
      </Reveal>
    </main>
  );
}
