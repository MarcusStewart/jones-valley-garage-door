"use client";

import { useActionState } from "react";
import { submitQuoteRequest, type QuoteFormState } from "@/app/actions";
import { services } from "@/lib/site-data";

const initialState: QuoteFormState = { status: "idle" };

export default function HeroQuoteForm() {
  const [state, formAction, isPending] = useActionState(submitQuoteRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-8 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="text-lg font-semibold text-white">Got it — we&rsquo;ll be in touch!</p>
        <p className="mt-1 text-sm text-slate-300">
          Expect a call back shortly. For urgent issues, call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-6 text-left"
      noValidate
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">
        Get a Free Quote
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="quote-name" className="sr-only">
            Your name
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="sr-only">
            Phone number
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone number"
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="quote-service" className="sr-only">
            Service needed
          </label>
          <select
            id="quote-service"
            name="service"
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Service needed (optional)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure — need a diagnosis</option>
          </select>
        </div>
      </div>

      {/* Error message */}
      {state.status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 w-full rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow transition hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Request a Callback"}
      </button>
    </form>
  );
}
