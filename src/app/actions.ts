"use server";

import { Resend } from "resend";
import { site } from "@/lib/site-data";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const service = (formData.get("service") as string | null)?.trim() ?? "";

  if (!name || !phone) {
    return { status: "error", message: "Please fill in your name and phone number." };
  }

  if (!/^[\d\s\-()+]{7,}$/.test(phone)) {
    return { status: "error", message: "Please enter a valid phone number." };
  }

  const serviceLabel = service
    ? service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Not specified";

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: process.env.RESEND_TO!,
    replyTo: email || undefined,
    subject: `New Quote Request — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#0f172a">
        <h2 style="background:#0f172a;color:#fff;padding:16px 24px;margin:0;border-radius:8px 8px 0 0">
          New Quote Request — ${site.name}
        </h2>
        <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#64748b;width:120px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Phone</td>
              <td style="padding:8px 0;font-weight:600">
                <a href="tel:${phone.replace(/\D/g, "")}" style="color:#d97706">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Email</td>
              <td style="padding:8px 0">
                ${email ? `<a href="mailto:${email}" style="color:#d97706">${email}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Service</td>
              <td style="padding:8px 0">${serviceLabel}</td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:13px;color:#94a3b8">
            Submitted via the quick-quote form on ${site.url}
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[Jones Valley] Resend error:", JSON.stringify(error, null, 2));
    return { status: "error", message: "Something went wrong — please call us directly." };
  }

  return { status: "success" };
}

