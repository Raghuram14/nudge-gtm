import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

/**
 * Section rhythm primitives.
 *
 * The homepage used to stack eight identical `py-20` blocks, so every
 * scroll-stop read as the same rectangle. These variants exist so a page can
 * alternate between assertion (typographic, open) and proof (framed,
 * inspectable) without each section reinventing its own shell.
 */

type Tone = "paper" | "mist" | "tinted" | "inverted";
type Space = "sm" | "md" | "lg";

const tones: Record<Tone, string> = {
  paper: "band-paper",
  mist: "",
  tinted: "band-tinted",
  inverted: "band-inverted",
};

const spacing: Record<Space, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28",
};

type SectionShellProps = {
  children: React.ReactNode;
  /** Background treatment. Full-bleed; inner content stays constrained. */
  tone?: Tone;
  space?: Space;
  /** Inner max width. `full` lets the child control its own width. */
  width?: "prose" | "default" | "wide" | "full";
  id?: string;
  className?: string;
  innerClassName?: string;
  /** Opt out of the scroll reveal (e.g. above-the-fold content). */
  reveal?: boolean;
};

const widths = {
  prose: "mx-auto w-full max-w-3xl px-4 sm:px-6",
  default: "mx-auto w-full max-w-6xl px-4 sm:px-6",
  wide: "mx-auto w-full max-w-7xl px-4 sm:px-6",
  full: "w-full",
} as const;

export function SectionShell({
  children,
  tone = "mist",
  space = "md",
  width = "default",
  id,
  className,
  innerClassName,
  reveal = true,
}: SectionShellProps): React.ReactElement {
  const inner = <div className={cn(widths[width], innerClassName)}>{children}</div>;

  return (
    <section id={id} className={cn(tones[tone], spacing[space], className)}>
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}

/**
 * Asymmetric two-column pairing — argument on one side, artifact on the other.
 * Deliberately not 50/50: an even split reads as a spec sheet, not an editorial
 * page.
 */
export function SplitSection({
  children,
  media,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  media: React.ReactNode;
  /** Put the media first on desktop. Alternate this down a page. */
  reverse?: boolean;
  className?: string;
}): React.ReactElement {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16",
        className,
      )}
    >
      <div className={cn(reverse && "lg:order-2")}>{children}</div>
      <div className={cn("min-w-0", reverse && "lg:order-1")}>{media}</div>
    </div>
  );
}

/** A single sentence, large. Used to break a long page with an editorial beat. */
export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}): React.ReactElement {
  return (
    <figure className={cn("mx-auto max-w-4xl text-balance text-center", className)}>
      <blockquote className="type-quote">{children}</blockquote>
      {attribution ? (
        <figcaption className="type-label mt-6">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
