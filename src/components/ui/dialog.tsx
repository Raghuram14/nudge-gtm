"use client";

import { useEffect, useId, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type DialogProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Dialog({
  title,
  open,
  onClose,
  children,
  className,
}: DialogProps): React.ReactElement {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    if (open && !node.open) {
      node.showModal();
    }
    if (!open && node.open) {
      node.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={cn(
        "w-full max-w-lg rounded-lg border border-border bg-surface p-6 text-foreground backdrop:bg-background/80",
        className,
      )}
      onClose={onClose}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-lg font-semibold">
          {title}
        </h2>
        <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close dialog">
          Close
        </Button>
      </div>
      {children}
    </dialog>
  );
}
