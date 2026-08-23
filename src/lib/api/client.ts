/** Phase 2 — shared HTTP client: fetch, parse, and surface API errors for demo loaders. */
import type { z } from "zod";

import { logger } from "@/lib/logger";

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type ApiFetchOptions<T> = {
  baseUrl: string;
  path: string;
  schema: z.ZodType<T>;
  init?: RequestInit;
};

/** Shared fetch + Zod parse for Antarang demo/product API responses. */
export async function apiFetch<T>({
  baseUrl,
  path,
  schema,
  init,
}: ApiFetchOptions<T>): Promise<T> {
  const url = `${baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        ...init?.headers,
      },
      next: { revalidate: 60 },
    });
  } catch (error) {
    logger.error("api_fetch_network_error", { path, error: String(error) });
    throw new ApiError("Network error while fetching data", 503);
  }

  if (!response.ok) {
    logger.error("api_fetch_http_error", { path, status: response.status });
    throw new ApiError(`API returned ${response.status}`, response.status);
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    logger.error("api_fetch_invalid_json", { path });
    throw new ApiError("API returned invalid JSON", 502);
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    logger.error("api_fetch_schema_mismatch", { path, issues: parsed.error.issues.length });
    throw new ApiError("API response did not match expected schema", 502);
  }

  return parsed.data;
}
