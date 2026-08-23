import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

type HomeSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function HomeSection({ children, className, id }: HomeSectionProps): React.ReactElement {
  return (
    <section id={id} className={cn("py-20", className)}>
      <Reveal>{children}</Reveal>
    </section>
  );
}
