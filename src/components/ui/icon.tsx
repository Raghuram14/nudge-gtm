import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  title?: string;
};

export function Icon({ icon: Glyph, className, title }: IconProps): React.ReactElement {
  return (
    <Glyph
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("size-4 shrink-0", className)}
    />
  );
}
