import type { Metadata } from "next";
import PhoneCta from "@/components/PhoneCta";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — same-day, upfront-pricing garage door repair serving the Huntsville, AL area.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-600">
      <h1 className="text-3xl font-extrabold text-slate-900">About {site.name}</h1>
      <p className="mt-6">
        We started {site.name} around a simple idea: garage door repair shouldn&rsquo;t come with
        a runaround. No pressure to buy a full replacement when a repair will do, no vague pricing
        that turns into a surprise bill, and no waiting a week for someone to show up when your
        door&rsquo;s been stuck since this morning.
      </p>
      <p className="mt-4">
        We serve homeowners and businesses across Huntsville, Madison, Athens, Decatur, and
        Meridianville, handling everything from a snapped spring to a full door replacement. Every
        job starts the same way: we look at what&rsquo;s actually wrong, explain it in plain
        terms, and give you a real price before any work begins.
      </p>
      <h2 className="mt-10 text-xl font-bold text-slate-900">What matters to us</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold text-slate-900">Straight answers.</span> If a repair
          makes more sense than a replacement, we&rsquo;ll say so — even if it&rsquo;s the smaller
          job.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Upfront pricing.</span> You&rsquo;ll know
          the cost before we start, not after.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Showing up when we say we will.</span> A
          stuck garage door is usually urgent, and we treat it that way.
        </li>
      </ul>
      <p className="mt-8">Have a garage door that needs attention? Call us — we&rsquo;re ready to help.</p>
      <div className="mt-4">
        <PhoneCta />
      </div>
    </article>
  );
}
