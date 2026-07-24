"use server";

import { site } from "@/lib/site-data";

export type QuoteFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitQuoteRequest(
  _prev: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const service = (formData.get("service") as string | null)?.trim() ?? "";

  if (!name || !phone) {
    return { status: "error", message: "Please fill in your name and phone number." };
  }

  // Basic phone sanity check (digits, spaces, dashes, parens, +)
  if (!/^[\d\s\-()+]{7,}$/.test(phone)) {
    return { status: "error", message: "Please enter a valid phone number." };
  }

  // TODO: replace this with an email send (Resend / Nodemailer) or CRM webhook
  console.log(`[${site.name}] New quote request`, { name, phone, service });

  return { status: "success" };
}
