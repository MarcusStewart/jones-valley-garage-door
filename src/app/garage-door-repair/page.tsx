import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Garage door repair in Huntsville, AL — springs, openers, cables, panels, and off-track doors diagnosed and fixed by a local team.";

export const metadata: Metadata = {
  title: "Garage Door Repair",
  description,
};

const faqItems = [
  {
    question: "How do I know what's actually wrong with my garage door?",
    answer:
      "You usually don't need to — describe the symptoms (won't open, crooked, noisy, etc.) when you call, and we'll do a full on-site diagnosis rather than asking you to self-diagnose over the phone.",
  },
  {
    question: "Is it safe to keep using my garage door if something seems off?",
    answer:
      "Not always. A door that's crooked, off-track, or straining to open/close can get worse quickly and cause more damage — or become a safety risk — the longer it's used in that condition. When in doubt, stop using it and call.",
  },
  {
    question: "Do you work on all garage door brands?",
    answer: "Yes, we work on most major residential brands and both older and newer systems.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Huntsville and the surrounding area, including Madison, Athens, Decatur, and Meridianville. Not sure if you're in range? Just call and ask.",
  },
  {
    question: "How fast can someone come out?",
    answer:
      "In most cases, same-day. Garage door issues are usually urgent — a door that won't close is a security concern, and one that won't open can block you in — so we prioritize getting to you quickly.",
  },
];

export default function GarageDoorRepairPage() {
  return (
    <>
      <Hero
        h1="Garage Door Repair in Huntsville, AL"
        subhead="Springs, openers, cables, panels, off-track doors — diagnosed and fixed by a local team, same-day in most cases."
      />
      <ServiceSchema name="Garage Door Repair" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">Garage Door Not Working Right?</h2>
        <p className="mt-4">
          A garage door can fail in a lot of different ways, and most homeowners don&rsquo;t know
          which part is actually the problem — just that the door won&rsquo;t open, won&rsquo;t
          close, looks crooked, or is making a noise it shouldn&rsquo;t. That&rsquo;s fine. You
          don&rsquo;t need to diagnose it yourself before calling; describe what you&rsquo;re
          seeing and we&rsquo;ll take it from there.
        </p>
        <p className="mt-4 font-semibold text-slate-900">Common issues we handle:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Door won&rsquo;t open or close, or only moves partway</li>
          <li>A loud bang followed by the door not moving (usually a broken spring)</li>
          <li>Door hanging crooked or off its track</li>
          <li>Opener runs but the door doesn&rsquo;t move, or doesn&rsquo;t respond at all</li>
          <li>Frayed or snapped cables</li>
          <li>Dented, cracked, or rotted panels</li>
          <li>General noise — grinding, squeaking, or banging during operation</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">How We Diagnose the Problem</h2>
        <p className="mt-4">
          Garage door systems have several components that depend on each other — springs,
          cables, tracks, rollers, and the opener all work together, and a problem with one can
          look like a problem with another from the outside. Rather than guessing over the phone
          or assuming the most common cause, we do an on-site inspection covering the whole
          system, then explain exactly what&rsquo;s wrong and what it&rsquo;ll take to fix before
          any work starts.
        </p>
        <p className="mt-4">Depending on what we find, that might mean:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <Link href="/spring-replacement" className="font-medium text-amber-600 hover:underline">
              Spring replacement
            </Link>{" "}
            — the most common cause of a door that suddenly won&rsquo;t open
          </li>
          <li>
            <Link href="/opener-repair" className="font-medium text-amber-600 hover:underline">
              Opener or motor repair
            </Link>{" "}
            — for doors that don&rsquo;t respond, reverse unexpectedly, or run without moving
          </li>
          <li>
            <Link href="/cable-repair" className="font-medium text-amber-600 hover:underline">
              Cable repair
            </Link>{" "}
            — for a crooked or unevenly hanging door
          </li>
          <li>
            <Link href="/off-track-repair" className="font-medium text-amber-600 hover:underline">
              Off-track repair
            </Link>{" "}
            — for a door that&rsquo;s derailed or stuck
          </li>
          <li>
            <Link href="/panel-replacement" className="font-medium text-amber-600 hover:underline">
              Panel replacement
            </Link>{" "}
            — for dented, cracked, or rotted sections
          </li>
          <li>
            <Link
              href="/garage-door-installation"
              className="font-medium text-amber-600 hover:underline"
            >
              New door installation
            </Link>{" "}
            — when repair no longer makes sense compared to replacement
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">We diagnose before we quote</span> — no
            guessing which part is broken, and no charging to replace parts that don&rsquo;t need
            it
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — you know the
            cost before any work starts
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Same-day availability in most cases
            </span>{" "}
            — most garage door problems are urgent, not something to schedule for next week
          </li>
          <li>
            <span className="font-semibold text-slate-900">Local team</span> — based in the
            Huntsville area, not routed through a national call center
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — tell us what
            the door is doing (or not doing); you don&rsquo;t need to know the technical cause
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site diagnosis</span> — a full check
            of springs, cables, tracks, rollers, and the opener to find the actual issue
          </li>
          <li>
            <span className="font-semibold text-slate-900">Straight answer</span> — we explain
            what&rsquo;s wrong, what it costs to fix, and how long it&rsquo;ll take, before
            starting any work
          </li>
          <li>
            <span className="font-semibold text-slate-900">Repair and test</span> — the fix is
            completed and the door is run through a full cycle to confirm it&rsquo;s operating and
            balanced correctly
          </li>
        </ol>
        <p className="mt-4">Most repairs are completed in a single visit.</p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="garage-door-repair" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Garage Door Fixed Today"
        body="Whatever's wrong with your garage door, we'll diagnose it honestly and fix it right."
      />
    </>
  );
}
