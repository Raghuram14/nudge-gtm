import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "section" | "li";
  id?: string;
};

export function Card({ className, children, as: Tag = "div", id }: CardProps): React.ReactElement {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-xl border border-border bg-surface p-6 lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
