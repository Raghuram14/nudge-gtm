import { cn } from "@/lib/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

export function Select({
  className,
  invalid,
  id,
  children,
  ...props
}: SelectProps): React.ReactElement {
  return (
    <select
      id={id}
      className={cn(
        "min-h-10 w-full rounded-md border bg-surface-raised px-3 text-sm text-foreground transition-[border-color] duration-[var(--motion-micro)] focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </select>
  );
}
