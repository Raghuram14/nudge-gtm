import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, id, ...props }: InputProps): React.ReactElement {
  return (
    <input
      id={id}
      className={cn(
        "min-h-10 w-full rounded-md border bg-surface-raised px-3 text-sm text-foreground transition-[border-color,background-color] duration-[var(--motion-micro)] placeholder:text-text-tertiary hover:border-border focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
