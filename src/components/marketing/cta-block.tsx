import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

type CtaBlockProps = {
  title?: string;
  description?: string;
};

export function CtaBlock({
  title = siteConfig.tagline,
  description = "See Nudgeio in action or explore how evidence becomes understanding.",
}: CtaBlockProps): React.ReactElement {
  return (
    <section className="rounded-lg border border-border bg-surface-raised p-8 md:p-10">
      <h2 className="type-section-title text-foreground">{title}</h2>
      <p className="type-body mt-3">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`} size="lg">
          {ctaConfig.seeInAction.label}
        </Button>
        <Button href={ctaConfig.exploreHowItWorks.href} variant="secondary">
          {ctaConfig.exploreHowItWorks.label}
        </Button>
      </div>
    </section>
  );
}
