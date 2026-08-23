import { z } from "zod";

import { ctaIntentSchema } from "@/config/cta";

export const leadFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.email("Enter a valid work email"),
  company: z.string().trim().min(1, "Company is required").max(160),
  role: z.string().trim().min(1, "Role is required").max(120),
  intent: ctaIntentSchema,
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: LeadFormErrors;
};

export const idleLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
  errors: {},
};

export function parseLeadForm(input: unknown): {
  success: boolean;
  data?: LeadFormValues;
  errors: LeadFormErrors;
} {
  const result = leadFormSchema.safeParse(input);
  if (!result.success) {
    const errors: LeadFormErrors = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in errors)) {
        errors[key as keyof LeadFormValues] = issue.message;
      }
    }
    return { success: false, errors };
  }
  return { success: true, data: result.data, errors: {} };
}
