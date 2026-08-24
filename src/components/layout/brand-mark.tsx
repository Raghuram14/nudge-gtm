import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps): React.ReactElement {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 28 28" className="size-7 text-accent" aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="6"
          className="fill-[color-mix(in_oklab,var(--accent)_14%,var(--surface))] stroke-accent"
          strokeWidth="1.25"
        />
        <circle cx="8" cy="14" r="2" className="fill-accent" />
        <circle cx="14" cy="9" r="1.6" className="fill-accent opacity-80" />
        <circle cx="20" cy="15" r="2" className="fill-accent" />
        <path
          d="M8 14 L14 9 M14 9 L20 15"
          className="fill-none stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 14 L20 15"
          className="fill-none stroke-accent opacity-40"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-foreground">Nudgeio</span>
    </span>
  );
}
