"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const rotatingWords = ["signal", "evidence", "diagnosis", "nudge", "outcome"] as const;

type KineticHeadlineProps = {
  className?: string;
};

export function KineticHeadline({ className }: KineticHeadlineProps): React.ReactElement {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % rotatingWords.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const word = rotatingWords[reduce ? rotatingWords.length - 1 : index] ?? "outcome";

  return (
    <h1 className={cn("type-display text-balance text-foreground", className)}>
      Engineering{" "}
      <span className="relative inline-block min-w-[7.5ch] pb-1 leading-[1.1] text-accent">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className="absolute inset-x-0 top-0 italic"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
        <span className="invisible italic" aria-hidden>
          diagnosis
        </span>
      </span>
      <br />
      you can inspect.
    </h1>
  );
}
