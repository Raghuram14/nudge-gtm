import { getHomeDemoData } from "@/lib/api/home-demo";

/** Phase 4 — JSON endpoint for client refresh (`fetchHomeDemoClient` / TanStack Query). */
export async function GET(): Promise<Response> {
  const data = await getHomeDemoData();
  return Response.json(data);
}
