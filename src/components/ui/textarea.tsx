import { cn } from "@/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({
  className,
  invalid,
  id,
  ...props
}: TextareaProps): React.ReactElement {
  return (
    <textarea
      id={id}
      className={cn(
        "min-h-32 w-full rounded-md border bg-surface-raised px-3 py-3 text-sm text-foreground transition-[border-color] duration-[var(--motion-micro)] placeholder:text-text-tertiary hover:border-border focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
