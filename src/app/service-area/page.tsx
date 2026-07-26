import type { Metadata } from "next";
import Link from "next/link";
import PhoneCta from "@/components/PhoneCta";
import { site, locations } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Area",
  description: `Cities served by ${site.name}: ${locations.map((l) => l.city).join(", ")}, AL.`,
};

export default function ServiceAreaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-600">
      <h1 className="text-3xl font-extrabold text-slate-900">Garage Door Repair Service Area</h1>
      <p className="mt-6">
        {site.name} serves homeowners and businesses across the Huntsville metro area. If
        you&rsquo;re in one of the cities below, we can typically get to you the same day.
      </p>
      <ul className="mt-6 space-y-2">
        {locations.map((l) => (
          <li key={l.slug}>
            <Link
              href={`/${l.slug}`}
              className="block rounded-md border border-slate-200 px-4 py-3 font-medium text-slate-800 transition hover:border-red-400 hover:bg-red-50/60"
            >
              {l.city}, AL{l.slug === "huntsville-al" ? " — home base, fastest response" : ""}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        Not seeing your specific town listed? We may still serve your area — call and we&rsquo;ll
        let you know.
      </p>
      <div className="mt-4">
        <PhoneCta />
      </div>
      {/* TODO: embed a real Google Maps coverage-area map once a Google Business Profile / API key exists */}
    </article>
  );
}
