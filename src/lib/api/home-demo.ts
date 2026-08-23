import { buildMockHomeDemoData } from "@/config/home-demo-data";
import { apiFetch } from "@/lib/api/client";
import { homeDemoDataSchema } from "@/lib/api/schemas";
import { getServerEnv } from "@/lib/env";
import { logger } from "@/lib/logger";
import type { HomeDemoData } from "@/lib/marketing/types";

const HOME_DEMO_PATH = "/demo/home";

/**
 * Phase 3 — server-side demo loader for homepage routes.
 * Uses `ANTARANG_DEMO_API_URL` when set; otherwise returns Phase 1 mock bundle.
 * Always falls back to mock on fetch/validation errors so the GTM site stays up.
 */
export async function getHomeDemoData(): Promise<HomeDemoData> {
  const env = getServerEnv();
  const baseUrl = env.ANTARANG_DEMO_API_URL?.trim();

  if (!baseUrl) {
    return buildMockHomeDemoData();
  }

  try {
    const data = await apiFetch({
      baseUrl,
      path: HOME_DEMO_PATH,
      schema: homeDemoDataSchema,
    });
    return data;
  } catch (error) {
    logger.error("home_demo_api_fallback", { error: String(error) });
    return buildMockHomeDemoData();
  }
}
