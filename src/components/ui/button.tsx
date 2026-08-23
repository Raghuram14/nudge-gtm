import Link from "next/link";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "rounded-full bg-accent text-accent-fg hover:bg-focus disabled:opacity-50",
  secondary:
    "rounded-full border border-border bg-surface-raised text-foreground hover:border-accent hover:text-accent disabled:opacity-50",
  ghost: "rounded-full text-foreground hover:bg-surface-raised hover:text-accent disabled:opacity-50",
} as const;

const sizes = {
  md: "min-h-11 px-4 py-2 text-sm",
  sm: "min-h-11 px-3 py-2 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
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
  ...rest
}: ButtonAsButton | ButtonAsLink): React.ReactElement {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-transform transition-colors hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, disabled, onClick } = rest;
    if (disabled) {
      return (
        <span className={cn(classes, "pointer-events-none opacity-50")} aria-disabled="true">
          {children}
        </span>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} type={buttonRest.type ?? "button"} {...buttonRest}>
      {children}
    </button>
  );
}
