import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Fast, safe garage door spring replacement in Huntsville, AL — torsion and extension springs, same-day appointments available.";

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement",
  description,
};

const faqItems = [
  {
    question: "Can I replace a garage door spring myself?",
    answer:
      "We don't recommend it. Springs are under enough tension to cause serious injury, and getting the tension or sizing wrong can damage the door or opener. This is one repair worth leaving to a technician with the right tools.",
  },
  {
    question: "How long does spring replacement take?",
    answer:
      "Most replacements are done in a single appointment, typically under two hours once a technician is on-site.",
  },
  {
    question: "Should I replace one spring or both?",
    answer:
      "If your door has two springs and one has failed, the other is usually close behind, since they wear down at roughly the same rate. We'll take a look and give you an honest recommendation rather than upselling you automatically.",
  },
  {
    question: "Will a new spring fix my noisy garage door?",
    answer:
      "If the noise is a loud bang followed by the door not opening, yes — that's a classic broken-spring symptom. Other noises (grinding, squeaking) are usually a different issue, and we'll diagnose it correctly rather than assuming.",
  },
];

export default function SpringReplacementPage() {
  return (
    <>
      <Hero
        h1="Garage Door Spring Replacement in Huntsville, AL"
        subhead="Fast, safe torsion and extension spring replacement — same-day appointments available."
      />
      <ServiceSchema name="Garage Door Spring Replacement" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">
          Signs Your Garage Door Spring Is Broken
        </h2>
        <p className="mt-4">
          If your garage door won&rsquo;t budge, feels unusually heavy when opening manually, or
          made a loud bang from the garage recently, a broken spring is the most likely cause.
          Garage door springs carry the full weight of the door — when one fails, the door can
          become impossible to open safely, and in some cases can slam down without warning.
        </p>
        <p className="mt-4 font-semibold text-slate-900">Common signs of a failing spring:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The door won&rsquo;t open, or only opens a few inches</li>
          <li>A loud &ldquo;bang&rdquo; from the garage (the sound of a spring snapping)</li>
          <li>The door looks crooked or uneven when opening</li>
          <li>The opener strains or stalls trying to lift the door</li>
          <li>A visible gap in the spring above the door</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          Torsion Springs vs. Extension Springs
        </h2>
        <p className="mt-4">
          Most residential garage doors use one of two spring types, and knowing which one you
          have matters for both safety and repair.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Torsion springs</span> mount horizontally
          on a metal shaft directly above the closed door. As the door closes, the spring winds up
          and stores torque; as it opens, that torque unwinds to help lift the door&rsquo;s
          weight. Heavier doors (like double-wide doors) often use two torsion springs working
          together. Torsion springs are generally considered more durable and give smoother, more
          controlled movement, which is why most newer installations use them.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-slate-900">Extension springs</span> run along the
          horizontal tracks on either side of the door and stretch as the door closes, then
          contract to help pull it open. They&rsquo;re common on older installations and lighter
          doors. Because they store energy by stretching rather than winding, a snapped extension
          spring can release suddenly — which is why code requires safety cables running through
          them, so a broken spring doesn&rsquo;t become a projectile.
        </p>
        <p className="mt-4">
          We identify which type your door uses during the on-site visit and replace it with a
          correctly sized match — mixing spring types or using the wrong size isn&rsquo;t a safe
          workaround.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          How Long Do Garage Door Springs Last?
        </h2>
        <p className="mt-4">
          Spring life is measured in open/close cycles, not calendar years — one cycle is one full
          open-and-close. Standard-duty springs are typically rated for 10,000-15,000 cycles, with
          higher-cycle springs (20,000-25,000+) available for doors that see heavy daily use. For
          an average household opening the door 3-5 times a day, that works out to roughly 7-10
          years before a standard spring wears out — sooner if the garage sees frequent use
          (multiple vehicles, a home workshop, or a door that doubles as a main entrance).
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          Getting the Right Spring for Your Door
        </h2>
        <p className="mt-4">
          A spring has to be matched to your door&rsquo;s exact weight, the wire gauge, and the
          coil length — not just &ldquo;a torsion spring&rdquo; or &ldquo;an extension
          spring&rdquo; generically. An undersized spring wears out fast and can strain the opener
          motor; an oversized one can make the door difficult to control manually and can also
          stress the opener. This is the main reason DIY spring replacement kits sold online cause
          repeat failures — the sizing has to match the specific door, not a generic average.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Replacement Involves</h2>
        <p className="mt-4">
          Replacement means releasing all stored tension from the damaged spring safely, removing
          it, installing a correctly sized replacement rated for your door&rsquo;s weight and
          cycle needs, and running the door through a full open/close cycle to confirm it&rsquo;s
          balanced — meaning it stays in place at any point when disconnected from the opener,
          without drifting up or slamming down. An unbalanced door is a sign something&rsquo;s
          still off, even if it technically opens and closes.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          Why Call {site.name}
        </h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">We come to you</span> — on-site
            diagnosis, no guessing over the phone
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — you&rsquo;ll
            know the cost before we touch the door
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Same-day availability in most cases
            </span>{" "}
            — a broken spring usually means you&rsquo;re stuck, so we prioritize getting to you
            fast
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — tell us what
            you&rsquo;re seeing (won&rsquo;t open, loud bang, etc.)
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site diagnosis</span> — we confirm
            it&rsquo;s the spring (not the opener or cables) and identify the correct replacement
            part
          </li>
          <li>
            <span className="font-semibold text-slate-900">Replacement</span> — old spring removed,
            new spring installed and tensioned correctly
          </li>
          <li>
            <span className="font-semibold text-slate-900">Test</span> — full open/close cycle
            check to confirm the door is balanced and running smoothly
          </li>
        </ol>
        <p className="mt-4">Most spring replacements are completed in a single visit.</p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="spring-replacement" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Spring Replaced Today"
        body="A broken spring means your garage door isn't safe to operate until it's fixed."
      />
    </>
  );
}
