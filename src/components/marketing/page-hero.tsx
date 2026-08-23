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
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted">{description}</p>
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
