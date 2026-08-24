import Link from "next/link";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "rounded-md bg-ink text-ink-fg hover:bg-ink-hover active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  secondary:
    "rounded-md border border-border-strong bg-surface text-foreground hover:border-ink hover:bg-surface-hover active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  accent:
    "rounded-md bg-accent text-accent-fg hover:bg-accent-hover active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  ghost:
    "rounded-md text-foreground hover:bg-surface-hover hover:text-accent active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
} as const;

const sizes = {
  md: "min-h-10 px-4 py-2 text-sm",
  sm: "min-h-9 px-3 py-1.5 text-sm",
  lg: "min-h-11 px-5 py-2.5 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
};

type ButtonAsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  type?: never;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  loading,
  ...rest
}: ButtonAsButton | ButtonAsLink): React.ReactElement {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,border-color,color] duration-[var(--motion-micro)] ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    loading && "pointer-events-none opacity-70",
    className,
  );

  const content = loading ? (
    <>
      <span
        className="size-3.5 animate-pulse rounded-full border-2 border-current border-t-transparent"
        aria-hidden
      />
      <span>{children}</span>
    </>
  ) : (
    children
  );

  if ("href" in rest && rest.href) {
    const { href, disabled, onClick } = rest;
    if (disabled) {
      return (
        <span className={cn(classes, "pointer-events-none opacity-40")} aria-disabled="true">
          {content}
        </span>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button
      className={classes}
      type={buttonRest.type ?? "button"}
      aria-busy={loading || undefined}
      disabled={buttonRest.disabled || loading}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
