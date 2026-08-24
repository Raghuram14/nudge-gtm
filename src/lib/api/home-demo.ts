import { buildMockHomeDemoData } from "@/config/home-demo-data";
import { apiFetch } from "@/lib/api/client";
import { homeDemoDataSchema } from "@/lib/api/schemas";
import { getDemoApiUrl } from "@/lib/env";
import { logger } from "@/lib/logger";
import type { HomeDemoData } from "@/lib/marketing/types";

const HOME_DEMO_PATH = "/demo/home";

/**
 * Server-side demo loader for homepage routes.
 * Uses NUDGEIO_DEMO_API_URL (or legacy ANTARANG_DEMO_API_URL) when set;
 * otherwise returns static mock. Falls back to mock on fetch/validation errors.
 */
export async function getHomeDemoData(): Promise<HomeDemoData> {
  const baseUrl = getDemoApiUrl();

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
