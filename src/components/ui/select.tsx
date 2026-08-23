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
        "min-h-11 w-full rounded-lg border bg-surface-raised px-3 text-sm text-foreground",
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
