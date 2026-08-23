/** Client form wired to the contact server action — pattern for future interactive forms. */
"use client";

import { useActionState } from "react";

import { submitLeadForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ctaConfig, type CtaIntent } from "@/config/cta";
import { track } from "@/lib/analytics";
import { idleLeadFormState } from "@/lib/forms/lead";

function FieldError({ id, message }: { id: string; message?: string }): React.ReactElement | null {
  if (!message) {
    return null;
  }
  return (
    <p id={id} className="mt-1 text-sm text-danger">
      {message}
    </p>
  );
}

export function LeadForm({ defaultIntent }: { defaultIntent?: CtaIntent }): React.ReactElement {
  const [state, action, pending] = useActionState(submitLeadForm, idleLeadFormState);
  const intent = defaultIntent ?? ctaConfig.earlyAccess.intent;

  return (
    <form
      action={action}
      className="grid w-full max-w-xl gap-4"
      onSubmit={() => track("contact_submit", { intent })}
      noValidate
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      {state.status === "success" ? (
        <p className="rounded-md border border-accent bg-accent-muted p-4 text-sm" role="status">
          {state.message}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="rounded-md border border-danger p-4 text-sm text-danger" role="alert">
          {state.message}
        </p>
      ) : null}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          invalid={Boolean(state.errors.name)}
          aria-describedby={state.errors.name ? "name-error" : undefined}
        />
        <FieldError id="name-error" message={state.errors.name} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Work email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          invalid={Boolean(state.errors.email)}
          aria-describedby={state.errors.email ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={state.errors.email} />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium">
          Company
        </label>
        <Input
          id="company"
          name="company"
          required
          invalid={Boolean(state.errors.company)}
          aria-describedby={state.errors.company ? "company-error" : undefined}
        />
        <FieldError id="company-error" message={state.errors.company} />
      </div>
      <div>
        <label htmlFor="role" className="mb-1 block text-sm font-medium">
          Role
        </label>
        <Input
          id="role"
          name="role"
          required
          invalid={Boolean(state.errors.role)}
          aria-describedby={state.errors.role ? "role-error" : undefined}
        />
        <FieldError id="role-error" message={state.errors.role} />
      </div>
      <div>
        <label htmlFor="intent" className="mb-1 block text-sm font-medium">
          I want to
        </label>
        <Select id="intent" name="intent" defaultValue={intent} invalid={Boolean(state.errors.intent)}>
          <option value={ctaConfig.earlyAccess.intent}>{ctaConfig.earlyAccess.label}</option>
          <option value={ctaConfig.demo.intent}>{ctaConfig.demo.label}</option>
          <option value={ctaConfig.designPartner.intent}>{ctaConfig.designPartner.label}</option>
        </Select>
        <FieldError id="intent-error" message={state.errors.intent} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Context (optional)
        </label>
        <Textarea id="message" name="message" />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
