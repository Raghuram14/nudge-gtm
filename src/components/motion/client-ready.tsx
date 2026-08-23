"use client";

import { useEffect } from "react";

/** Adds js-ready for reveal animations (replaces removed ambient orb mount). */
export function ClientReady(): null {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  return null;
}
