/**
 * Shared marketing section shell (ADR 0004).
 * One job per section: optional eyebrow, title, support copy, then one visual/interaction.
 */
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

type MarketingSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Skip Reveal when the section already handles motion (e.g. hero). */
  reveal?: boolean;
};

export function MarketingSection({
  children,
  className,
  id,
  eyebrow,
  title,
  description,
  reveal = true,
}: MarketingSectionProps): React.ReactElement {
  const body = (
    <>
      {title ? (
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      ) : null}
      {children}
    </>
  );

  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      {reveal ? <Reveal>{body}</Reveal> : body}
    </section>
  );
}
