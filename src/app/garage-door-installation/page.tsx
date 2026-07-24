import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "New garage door installation in Huntsville, AL — replacing an old, damaged, or outdated door with one built for your home and budget.";

export const metadata: Metadata = {
  title: "New Garage Door Installation",
  description,
};

const faqItems = [
  {
    question: "How long does a new garage door installation take?",
    answer:
      "The installation itself usually takes a few hours in a single visit. The bigger factor is lead time on ordering the door, which varies by style and manufacturer — we'll give you a real estimate before you commit.",
  },
  {
    question: "Do I need a new opener with a new door?",
    answer:
      "Not always. If your current opener is relatively recent and rated for the new door's weight, it can often be reused. We check this during the consultation so there are no surprises at installation.",
  },
  {
    question: "What's the real difference between insulated and non-insulated doors?",
    answer:
      "Insulated doors help regulate temperature in the garage and, if it's attached to your home, can noticeably affect comfort in the rooms next to it. They're also generally quieter when operating. Non-insulated doors cost less upfront and work fine for a detached garage used mainly for storage or parking.",
  },
  {
    question: "Can I add windows to my new door?",
    answer:
      "Yes, most door styles offer window options in various layouts. It's a style and light preference more than a functional one — happy to show you what's available.",
  },
  {
    question: "Do you haul away my old door?",
    answer: "Yes, removal and haul-away of the old door is included as part of installation.",
  },
];

export default function GarageDoorInstallationPage() {
  return (
    <>
      <Hero
        h1="New Garage Door Installation in Huntsville, AL"
        subhead="Replacing an old, damaged, or outdated door with one built for your home, your budget, and how you actually use your garage."
      />
      <ServiceSchema name="New Garage Door Installation" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">
          When Replacement Makes More Sense Than Repair
        </h2>
        <p className="mt-4">A new door is usually the right call when:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The existing door has damage severe enough that repair costs approach replacement cost</li>
          <li>The door is old enough that matching replacement parts (panels, hardware) are hard or impossible to find</li>
          <li>You&rsquo;re renovating and want better insulation, a different style, or improved curb appeal</li>
          <li>The door was totaled by a storm, accident, or structural issue</li>
          <li>You&rsquo;ve moved into a home with a dated or poorly maintained door and want to start fresh</li>
        </ul>
        <p className="mt-4">
          If you&rsquo;re not sure which situation you&rsquo;re in, that&rsquo;s a normal question
          to have — we&rsquo;ll give you an honest comparison between repairing what you have and
          replacing it, rather than defaulting to whichever is more expensive.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Installation Involves</h2>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Material and style</span> — residential
          garage doors are commonly steel (durable, low-maintenance), wood (highest curb appeal,
          more upkeep), aluminum (lighter, often used with large glass-panel designs), or
          composite (wood-look without the maintenance). Style options range from traditional
          raised-panel to modern flush designs to carriage-house styles that mimic swing-out
          doors.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Insulation</span> — insulated doors use
          either polystyrene or polyurethane foam and are rated by R-value. If your garage is
          attached to living space, or you use it as a workshop, insulation makes a real
          difference in comfort and energy cost. Non-insulated doors are lighter and less
          expensive but offer less temperature control.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Sizing and hardware</span> — every new
          door is measured to your exact opening, and the track, springs, and rollers are sized to
          match the new door&rsquo;s weight — hardware from an old door generally isn&rsquo;t
          reused, since it&rsquo;s matched to the old door&rsquo;s specific weight and balance.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Opener compatibility</span> — if your
          current opener is more than a few years old or wasn&rsquo;t rated for the new
          door&rsquo;s weight, it may need to be replaced or reprogrammed alongside the new door.
          We check this as part of the process rather than leaving you to discover a mismatch
          after installation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Honest guidance</span> — we&rsquo;ll
            tell you when repair still makes sense instead of upselling a new door
          </li>
          <li>
            <span className="font-semibold text-slate-900">Sized and matched correctly</span> —
            track, springs, and hardware installed to fit the new door&rsquo;s actual weight, not
            reused from the old one
          </li>
          <li>
            <span className="font-semibold text-slate-900">Old door removed</span> — haul-away
            included, no separate disposal hassle for you
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — tell us what
            you&rsquo;re looking for (or if you&rsquo;re not sure yet, we can walk through
            options)
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              On-site measurement and consultation
            </span>{" "}
            — we measure your opening and go over material, style, and insulation options within
            your budget
          </li>
          <li>
            <span className="font-semibold text-slate-900">Ordering</span> — lead time depends on
            the door style and manufacturer, and we&rsquo;ll give you a realistic timeline upfront
          </li>
          <li>
            <span className="font-semibold text-slate-900">Installation</span> — old door removed
            and hauled away, new door, track, and springs installed and balanced, opener
            compatibility confirmed
          </li>
          <li>
            <span className="font-semibold text-slate-900">Walkthrough</span> — we test the door
            fully and show you how everything operates before we leave
          </li>
        </ol>
        <p className="mt-4">
          Installation itself is typically completed in a single day once the door has arrived.
        </p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="garage-door-installation" />
      <LocationLinks />
      <CtaBand
        heading="Ready for a New Garage Door?"
        body="Whether your current door is past saving or you're just ready for an upgrade, we'll help you find the right fit."
      />
    </>
  );
}
