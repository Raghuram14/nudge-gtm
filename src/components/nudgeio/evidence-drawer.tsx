"use client";

import { useEffect, useId, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

import type { EvidenceArtifact } from "./types";

type EvidenceDrawerProps = {
  open: boolean;
  onClose: () => void;
  artifact: EvidenceArtifact | null;
  className?: string;
};

export function EvidenceDrawer({
  open,
  onClose,
  artifact,
  className,
}: EvidenceDrawerProps): React.ReactElement | null {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !artifact) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"
        aria-label="Close evidence drawer"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          "relative flex h-full w-full max-w-md flex-col border-l border-border bg-surface-elevated shadow-[-24px_0_48px_rgba(0,0,0,0.35)] outline-none animate-fade-up",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <p className="type-label">Evidence</p>
            <h2 id={titleId} className="type-subsection mt-1 text-foreground">
              {artifact.title}
            </h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close">
            Close
          </Button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <p className="text-sm leading-relaxed text-foreground">{artifact.summary}</p>

          <dl className="grid gap-3 border-t border-border-subtle pt-4">
            <div>
              <dt className="type-label">Source</dt>
              <dd className="type-mono mt-1 text-sm text-foreground">{artifact.source}</dd>
            </div>
            <div>
              <dt className="type-label">Timestamp</dt>
              <dd className="type-mono mt-1 text-sm text-foreground">{artifact.timestamp}</dd>
            </div>
            <div>
              <dt className="type-label">Artifact type</dt>
              <dd className="mt-1 text-sm text-foreground">{artifact.artifactType}</dd>
            </div>
            <div>
              <dt className="type-label">Claim relationship</dt>
              <dd className="mt-1 text-sm capitalize text-foreground">{artifact.relationship}</dd>
            </div>
            {artifact.relatedClaim ? (
              <div>
                <dt className="type-label">Related claim</dt>
                <dd className="mt-1 text-sm text-foreground">{artifact.relatedClaim}</dd>
              </div>
            ) : null}
            {artifact.extractionMethod ? (
              <div>
                <dt className="type-label">Extraction method</dt>
                <dd className="mt-1 text-sm text-foreground">{artifact.extractionMethod}</dd>
              </div>
            ) : null}
            {typeof artifact.confidence === "number" ? (
              <div>
                <dt className="type-label">Confidence</dt>
                <dd className="type-mono mt-1 text-sm text-confidence">{artifact.confidence}%</dd>
                <div className="confidence-bar mt-2" aria-hidden>
                  <span style={{ width: `${artifact.confidence}%` }} />
                </div>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="border-t border-border px-5 py-4">
          {artifact.viewSourceHref ? (
            <Button href={artifact.viewSourceHref} variant="secondary" className="w-full">
              View source
            </Button>
          ) : (
            <p className="type-caption text-center">Example artifact - source link omitted</p>
          )}
        </div>
      </div>
    </div>
  );
}
