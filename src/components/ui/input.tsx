import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, id, ...props }: InputProps): React.ReactElement {
  return (
    <input
      id={id}
      className={cn(
        "min-h-11 w-full rounded-lg border bg-surface-raised px-3 text-sm text-foreground",
        invalid ? "border-danger" : "border-border",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
