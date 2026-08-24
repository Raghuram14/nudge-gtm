import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "section" | "li";
  id?: string;
  interactive?: boolean;
};

export function Card({
  className,
  children,
  as: Tag = "div",
  id,
  interactive,
}: CardProps): React.ReactElement {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-lg border border-border bg-surface p-6",
        interactive &&
          "lift cursor-pointer hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
