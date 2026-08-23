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
        "min-h-32 w-full rounded-lg border bg-surface-raised px-3 py-3 text-sm text-foreground",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
