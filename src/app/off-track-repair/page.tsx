import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Off-track garage door repair in Huntsville, AL — doors hanging crooked, stuck, or derailed, realigned and tested safely.";

export const metadata: Metadata = {
  title: "Off-Track Garage Door Repair",
  description,
};

const faqItems = [
  {
    question: "Can I push my garage door back onto the track myself?",
    answer:
      "We'd strongly advise against it. An off-track door can be under tension from springs or cables, and attempting to force it back into place can cause the door to fall or cause injury. It's a same-day fix for a technician with the right equipment — not a DIY job.",
  },
  {
    question: "Is an off-track door always caused by a broken cable?",
    answer:
      "No — worn rollers and bent tracks cause it just as often. That's exactly why an accurate diagnosis matters; treating it as a cable problem when it's actually a track problem won't fix it.",
  },
  {
    question: "Can I still use my garage door if it's slightly off track?",
    answer:
      "No. Continuing to operate a door that's off-track, even partially, risks further damage to the door, track, or opener, and is a real safety risk. Leave it in its current position and call rather than testing it further.",
  },
  {
    question: "Will my door need a full track replacement, or can it be repaired?",
    answer:
      "Often the track can be repaired or a damaged section replaced rather than the entire track system. We'll assess the full extent of the damage on-site and give you the real options rather than defaulting to the most expensive fix.",
  },
];

export default function OffTrackRepairPage() {
  return (
    <>
      <Hero
        h1="Off-Track Garage Door Repair in Huntsville, AL"
        subhead="Door hanging crooked, stuck halfway, or completely derailed — realigned and tested safely."
      />
      <ServiceSchema name="Off-Track Garage Door Repair" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">
          Signs Your Garage Door Is Off Its Track
        </h2>
        <p className="mt-4">
          An off-track door usually isn&rsquo;t subtle — but the cause behind it can vary quite a
          bit:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The door is visibly crooked or hanging unevenly</li>
          <li>
            One side of the door has come loose from its track while the other side is still
            moving
          </li>
          <li>The door is stuck partway open or closed and won&rsquo;t budge further</li>
          <li>You can see a roller sitting outside the track instead of inside it</li>
          <li>
            The door made a loud noise (often a snap or bang) right before it stopped working
            correctly
          </li>
        </ul>
        <p className="mt-4">
          An off-track door is not safe to force open or closed, and it&rsquo;s not safe to keep
          pressing the opener button hoping it&rsquo;ll correct itself — doing either can cause the
          door to fall or cause further damage to the track, panels, or opener.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          What Causes a Door to Come Off Track
        </h2>
        <p className="mt-4">
          A few different issues can cause this, and the right fix depends on which one it
          actually is:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Impact damage</span> — a vehicle,
            ladder, or heavy object striking the door or track hard enough to bend the track or
            dislodge rollers
          </li>
          <li>
            <span className="font-semibold text-slate-900">Worn or broken rollers</span> — over
            time, rollers wear down and can slip out of the track, especially on older doors that
            haven&rsquo;t been serviced
          </li>
          <li>
            <span className="font-semibold text-slate-900">A broken cable</span> — if a lift cable
            snaps, one side of the door can drop unevenly and pull rollers out of alignment
          </li>
          <li>
            <span className="font-semibold text-slate-900">A bent track</span> — even without a
            direct impact, tracks can bend from age, loose mounting hardware, or accumulated
            stress
          </li>
        </ul>
        <p className="mt-4">
          Because these causes look similar from the outside (door won&rsquo;t move correctly) but
          require different fixes, an accurate on-site diagnosis matters more here than almost any
          other garage door issue.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Off-Track Repair Involves</h2>
        <p className="mt-4">
          Repair starts with securing the door in its current position before anything else — an
          unbalanced door under tension is genuinely dangerous to work on without doing this
          first. From there, we determine whether the issue is a bent track section (which may
          need to be straightened or replaced), worn rollers (replaced with new ones), a broken
          cable (replaced and the door rebalanced), or some combination.
        </p>
        <p className="mt-4">
          Once the root cause is fixed, the door is guided back onto the track, all hardware is
          re-secured, and we run it through a full open/close cycle to confirm it&rsquo;s tracking
          smoothly and staying balanced.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">We diagnose the actual cause</span> —
            not just push the door back into the track and hope it holds
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — cost confirmed
            once we know whether it&rsquo;s rollers, a cable, or a track issue
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Same-day availability in most cases
            </span>{" "}
            — an off-track door usually means you can&rsquo;t safely use the garage until
            it&rsquo;s fixed
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — tell us what
            you&rsquo;re seeing, and don&rsquo;t attempt to force the door yourself
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site diagnosis</span> — we identify
            whether it&rsquo;s rollers, cables, track damage, or a combination
          </li>
          <li>
            <span className="font-semibold text-slate-900">Repair</span> — damaged components
            replaced or the track realigned, door guided back into position
          </li>
          <li>
            <span className="font-semibold text-slate-900">Test</span> — full cycle test to
            confirm the door is balanced, tracking smoothly, and stopping/reversing correctly
          </li>
        </ol>
        <p className="mt-4">
          Most off-track repairs are completed in a single visit, though a severely bent track may
          occasionally require a return trip if a replacement section needs to be ordered.
        </p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="off-track-repair" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Door Back on Track Today"
        body="An off-track door isn't safe to operate — don't wait on it."
      />
    </>
  );
}
