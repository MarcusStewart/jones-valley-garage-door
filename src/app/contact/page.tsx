import type { Metadata } from "next";
import PhoneCta from "@/components/PhoneCta";
import { site, locations } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} — call ${site.phone} for a fast, honest garage door repair quote in the Huntsville, AL area.`,
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-600">
      <h1 className="text-3xl font-extrabold text-slate-900">Contact {site.name}</h1>

      <dl className="mt-8 space-y-4 rounded-md border border-slate-200 p-6">
        <div>
          <dt className="text-sm font-semibold text-slate-500">Phone</dt>
          <dd>
            <a href={site.phoneHref} className="text-lg font-semibold text-red-700 hover:underline">
              {site.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-slate-500">Service Area</dt>
          <dd>
            {locations.map((l) => l.city).join(", ")}, AL — service-area business, we come to
            you, no storefront to visit.
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-slate-500">Hours</dt>
          {/* Placeholder until real staffing/scheduling exists — do not invent specific hours */}
          <dd>Call anytime and we&rsquo;ll let you know our current availability.</dd>
        </div>
      </dl>

      <p className="mt-8">
        Got a garage door problem? The fastest way to reach us is by phone — call and describe
        what&rsquo;s going on. We&rsquo;ll give you a straight answer on timing and next steps.
      </p>
      <div className="mt-4">
        <PhoneCta />
      </div>
    </article>
  );
}
