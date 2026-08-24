import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps): React.ReactElement {
  return (
    <header className="w-full max-w-3xl py-10">
      {eyebrow ? <p className="type-label mb-3 text-accent">{eyebrow}</p> : null}
      <h1 className="type-page-title text-foreground">{title}</h1>
      <p className="type-body mt-4 text-lg">{description}</p>
      {primaryCta || secondaryCta ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
