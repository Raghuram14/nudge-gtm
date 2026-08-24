/**
 * Phase 4 - client-side demo refresh without adding TanStack Query yet.
 * Upgrade: `useQuery({ queryKey: apiQueryKeys.homeDemo, queryFn: fetchHomeDemoClient })`.
 */
"use client";

import { useCallback, useState } from "react";

import { fetchHomeDemoClient } from "@/lib/api/fetch-home-demo-client";
import type { HomeDemoData } from "@/lib/marketing/types";

export function useHomeDemoRefresh(initial: HomeDemoData): {
  demo: HomeDemoData;
  refresh: () => Promise<void>;
  pending: boolean;
} {
  const [demo, setDemo] = useState(initial);
  const [pending, setPending] = useState(false);

  const refresh = useCallback(async () => {
    setPending(true);
    try {
      setDemo(await fetchHomeDemoClient());
    } finally {
      setPending(false);
    }
  }, []);

  return { demo, refresh, pending };
}
