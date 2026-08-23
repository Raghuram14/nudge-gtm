/**
 * Client-side refresh helper for homepage demo data (Phase 4).
 * Wire with TanStack Query: `useQuery({ queryKey: apiQueryKeys.homeDemo, queryFn: fetchHomeDemoClient })`
 */
import { homeDemoDataSchema } from "@/lib/api/schemas";
import type { HomeDemoData } from "@/lib/marketing/types";

export async function fetchHomeDemoClient(): Promise<HomeDemoData> {
  const response = await fetch("/api/demo/home");
  if (!response.ok) {
    throw new Error(`Demo fetch failed: ${response.status}`);
  }
  const json: unknown = await response.json();
  return homeDemoDataSchema.parse(json);
}
