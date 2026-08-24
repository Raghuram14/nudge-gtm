/** Server action - the only live external integration today (`CONTACT_WEBHOOK_URL`). */
"use server";

import { getServerEnv } from "@/lib/env";
import { idleLeadFormState, type LeadFormState,parseLeadForm } from "@/lib/forms/lead";
import { logger } from "@/lib/logger";

function formToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      obj[key] = value;
    }
  }
  return obj;
}

export async function submitLeadForm(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const raw = formToObject(formData);
  if (raw.website && raw.website.length > 0) {
    return { ...idleLeadFormState, status: "success", message: "Thanks. We will be in touch." };
  }

  const parsed = parseLeadForm(raw);
  if (!parsed.success || !parsed.data) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: parsed.errors,
    };
  }

  const env = getServerEnv();
  if (env.CONTACT_WEBHOOK_URL) {
    try {
      const response = await fetch(env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: parsed.data.intent,
          role: parsed.data.role,
          companyLength: parsed.data.company.length,
          hasMessage: Boolean(parsed.data.message),
        }),
      });
      if (!response.ok) {
        logger.error("contact_webhook_failed", { status: response.status });
        return {
          status: "error",
          message: "We could not send this right now. Try again or email us later.",
          errors: {},
        };
      }
    } catch {
      logger.error("contact_webhook_error");
      return {
        status: "error",
        message: "We could not send this right now. Try again later.",
        errors: {},
      };
    }
  }

  logger.info("lead_submitted", { intent: parsed.data.intent });
  return {
    status: "success",
    message: "Thanks. We received your request.",
    errors: {},
  };
}
