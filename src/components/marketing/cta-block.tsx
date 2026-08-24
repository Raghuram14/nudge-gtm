import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

type CtaBlockProps = {
  title?: string;
  description?: string;
  className?: string;
};

/**
 * The page's conversion moment. Deliberately not styled like the content cards
 * above it - a stronger border, more air, and centred - so it reads as the end
 * of the argument rather than one more panel.
 */
export function CtaBlock({
  title = "See it against your own repositories.",
  description = "We work with a small number of design partners while the graph is built. If you want to shape what gets built, this is the moment.",
  className,
}: CtaBlockProps): React.ReactElement {
  return (
    <section
      className={cn(
        "rounded-xl border border-border-strong bg-surface px-6 py-12 text-center sm:px-12",
        className,
      )}
    >
      <p className="type-label text-accent">Design partner program</p>
      <h2 className="type-page-title mx-auto mt-4 max-w-2xl text-balance text-foreground">
        {title}
      </h2>
      <p className="type-lead mx-auto mt-5 text-balance">{description}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button href={`${ROUTES.contact}?intent=${ctaConfig.demo.intent}`} size="lg">
          Book a demo
        </Button>
        <Button
          href={`${ROUTES.contact}?intent=${ctaConfig.designPartner.intent}`}
          variant="secondary"
          size="lg"
        >
          {ctaConfig.designPartner.label}
        </Button>
      </div>
    </section>
  );
}
