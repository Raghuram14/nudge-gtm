import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps): React.ReactElement {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 28 28" className="size-7 text-accent" aria-hidden="true">
        <rect width="28" height="28" rx="8" className="fill-accent-muted stroke-accent" />
        <path
          d="M7 18 L14 8 L21 18"
          className="fill-none stroke-accent"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2.2" className="fill-accent" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">Antarang</span>
    </span>
  );
}
