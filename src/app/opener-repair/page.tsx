import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Garage door opener and motor repair in Huntsville, AL — remotes, keypads, sensors, and motors diagnosed and fixed, or replaced.";

export const metadata: Metadata = {
  title: "Garage Door Opener & Motor Repair",
  description,
};

const faqItems = [
  {
    question: "Why does my garage door reverse right before it closes?",
    answer:
      "This is almost always the safety sensors — either misaligned, dirty, or something (even a spiderweb) breaking the beam between them. It's a safety feature working as designed, not a malfunction, and it's usually a quick fix.",
  },
  {
    question: "How long do garage door openers last?",
    answer:
      "Most openers last 10-15 years with normal use. Motor units, remotes, and drive components can all fail independently, so an opener acting up doesn't always mean the whole unit needs replacing.",
  },
  {
    question: "Can I install a smart/Wi-Fi opener?",
    answer:
      "Yes — most current chain and belt drive openers offer smart/app-connected options, and we can install one as a repair-replacement or as an upgrade to an existing setup.",
  },
  {
    question: "Is a belt drive worth the extra cost over chain drive?",
    answer:
      "If your garage is attached to living space (a bedroom or office above or beside it), a belt drive is noticeably quieter and often worth it. For a detached garage, chain drive is a reliable, more affordable option.",
  },
  {
    question: "Why does my opener run but the door doesn't move?",
    answer:
      "Usually a drive system problem — a stripped gear, broken chain/belt, or disconnected trolley. This needs an on-site look rather than a phone diagnosis, since several different parts can cause the same symptom.",
  },
];

export default function OpenerRepairPage() {
  return (
    <>
      <Hero
        h1="Garage Door Opener Repair & Installation in Huntsville, AL"
        subhead="Remotes, keypads, sensors, and motors — diagnosed and fixed, or replaced with a system that actually works."
      />
      <ServiceSchema name="Garage Door Opener & Motor Repair" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">
          Signs Your Garage Door Opener Needs Attention
        </h2>
        <p className="mt-4">
          The opener is the part of your garage door system that fails most often, simply because
          it&rsquo;s the part with the most moving and electronic components. Common symptoms we
          see:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The remote or wall button doesn&rsquo;t respond at all</li>
          <li>The door starts to close, then reverses immediately before touching the ground</li>
          <li>The opener motor runs (you can hear it) but the door doesn&rsquo;t move</li>
          <li>Grinding, clicking, or straining noises from the motor unit</li>
          <li>The door opens partway, then stops or reverses</li>
          <li>A blinking light on the opener unit signaling an error code</li>
          <li>The opener works sometimes but not consistently</li>
        </ul>
        <p className="mt-4">
          Some of these are quick fixes. Others mean the motor itself is failing and replacement
          makes more sense than repair. We&rsquo;ll tell you which one you&rsquo;re dealing with
          honestly, not push a repair that won&rsquo;t hold or a replacement you don&rsquo;t need.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Opener Repair Involves</h2>
        <p className="mt-4">
          Diagnosis starts with figuring out which part of the system is actually the problem,
          since &ldquo;the opener isn&rsquo;t working&rdquo; can mean several different things:
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Safety sensors</span> — the small sensors
          mounted near the floor on either side of the door are the single most common cause of a
          door that reverses before closing. If they&rsquo;re misaligned, dirty, or have something
          blocking the beam between them, the system assumes something&rsquo;s in the way and
          won&rsquo;t let the door close. This is often a five-minute fix, not a motor problem at
          all.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Remotes and keypads</span> — dead
          batteries, a remote that&rsquo;s lost its programming, or a keypad with worn contacts.
          Usually a fast fix or a simple reprogram.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Drive system</span> — openers use a
          chain, belt, or screw to physically move the door along the track. Worn gears, a
          stripped drive gear (a common failure point on older openers), or a damaged belt/chain
          will cause the motor to run without moving the door.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">The motor unit itself</span> — if the
          motor has burned out or the circuit board has failed, repair usually isn&rsquo;t
          cost-effective compared to replacing the unit, especially on openers more than 10-15
          years old.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">New Opener Installation</h2>
        <p className="mt-4">
          If your existing opener isn&rsquo;t worth repairing, we install new openers matched to
          your door&rsquo;s weight and usage. Modern options include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Chain drive</span> — most affordable,
            most durable, but the loudest option
          </li>
          <li>
            <span className="font-semibold text-slate-900">Belt drive</span> — quieter, a common
            choice for garages attached to living space
          </li>
          <li>
            <span className="font-semibold text-slate-900">Wi-Fi/smart openers</span> — app-based
            control and phone alerts, available on most current chain and belt drive models
          </li>
        </ul>
        <p className="mt-4">
          We&rsquo;ll walk you through what fits your setup rather than defaulting to whatever&rsquo;s
          easiest to sell.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Accurate diagnosis first</span> — we
            won&rsquo;t replace a motor when the real issue is a $20 sensor
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — repair or
            replacement cost confirmed before work starts
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Same-day availability in most cases
            </span>
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — describe
            what the opener is doing (or not doing)
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site diagnosis</span> — sensors,
            remote, drive system, and motor checked in that order, since that&rsquo;s roughly the
            order from &ldquo;quick fix&rdquo; to &ldquo;bigger job&rdquo;
          </li>
          <li>
            <span className="font-semibold text-slate-900">Repair or replace</span> — if
            it&rsquo;s fixable, we fix it; if the motor&rsquo;s genuinely failed, we&rsquo;ll quote
            a replacement
          </li>
          <li>
            <span className="font-semibold text-slate-900">Test</span> — full cycle test with the
            door connected, confirming safety reversal works correctly before we leave
          </li>
        </ol>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="opener-repair" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Opener Fixed Today"
        body="A garage door opener that's acting up rarely fixes itself."
      />
    </>
  );
}
