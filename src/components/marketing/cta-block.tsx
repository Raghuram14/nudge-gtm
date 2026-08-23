import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";

type CtaBlockProps = {
  title?: string;
  description?: string;
};

export function CtaBlock({
  title = "Understand why engineering changes.",
  description = "See Antarang in action or explore how the platform connects evidence and context.",
}: CtaBlockProps): React.ReactElement {
  return (
    <section className="gtm-glow gtm-panel rounded-lg border border-accent bg-surface p-8 md:p-12">
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-muted">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`} size="lg">
          {ctaConfig.seeInAction.label}
        </Button>
        <Button href={ctaConfig.exploreHowItWorks.href} variant="secondary">
          {ctaConfig.exploreHowItWorks.label}
        </Button>
        <Button
          href={`${ROUTES.contact}?intent=${ctaConfig.designPartner.intent}`}
          variant="ghost"
        >
          {ctaConfig.designPartner.label}
        </Button>
      </div>
    </section>
  );
}
