/** Validated server env. Add new secrets here + `.env.example`; never read `process.env` ad hoc. */
import { z } from "zod";

const envSchema = z.object({
  SITE_URL: z.string().optional(),
  CONTACT_WEBHOOK_URL: z.string().optional(),
  /** When set, homepage demo visuals fetch from `{url}/demo/home` instead of static mock. */
  ANTARANG_DEMO_API_URL: z.string().optional(),
});

export type PublicEnv = {
  siteUrl: string | undefined;
  hasContactWebhook: boolean;
};

export function getServerEnv(): z.infer<typeof envSchema> {
  const parsed = envSchema.safeParse({
    SITE_URL: process.env.SITE_URL,
    CONTACT_WEBHOOK_URL: process.env.CONTACT_WEBHOOK_URL,
    ANTARANG_DEMO_API_URL: process.env.ANTARANG_DEMO_API_URL,
  });
  if (!parsed.success) {
    throw new Error("Invalid environment configuration");
  }
  return parsed.data;
}

export function getPublicEnv(): PublicEnv {
  const env = getServerEnv();
  return {
    siteUrl: env.SITE_URL,
    hasContactWebhook: Boolean(env.CONTACT_WEBHOOK_URL),
  };
}
