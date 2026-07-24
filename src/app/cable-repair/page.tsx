import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Garage door cable repair in Huntsville, AL — frayed, loose, or snapped cables replaced safely before they cause bigger damage.";

export const metadata: Metadata = {
  title: "Garage Door Cable Repair",
  description,
};

const faqItems = [
  {
    question: "Is a broken garage door cable dangerous?",
    answer:
      "Yes. A cable under tension that fails can release suddenly, and a door with a broken cable can drop unevenly or become unstable. Don't attempt to operate the door if you notice a broken or badly frayed cable — call before using it further.",
  },
  {
    question: "Is cable repair the same as spring replacement?",
    answer:
      "They're related but different components. Springs store the lifting power; cables transfer that power evenly to both sides of the door. A problem with either can cause similar symptoms (a heavy or crooked door), which is why on-site diagnosis matters rather than assuming which one it is.",
  },
  {
    question: "Should I replace both cables even if only one is damaged?",
    answer:
      "Often yes, for the same reason we usually recommend replacing both springs together — if one cable has worn out from age or use, the other has typically seen the same wear and isn't far behind. We'll assess the actual condition of both and give you an honest recommendation rather than an automatic upsell.",
  },
  {
    question: "Can I tell if a cable is about to fail before it snaps?",
    answer:
      "Sometimes — visible fraying, a loose or slack cable, or a door that's started sitting slightly crooked are all early warning signs. If you notice any of these, it's worth having it looked at before it fails completely.",
  },
];

export default function CableRepairPage() {
  return (
    <>
      <Hero
        h1="Garage Door Cable Repair in Huntsville, AL"
        subhead="Frayed, loose, or snapped cables — replaced safely before they cause bigger damage."
      />
      <ServiceSchema name="Garage Door Cable Repair" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">
          Signs Your Garage Door Cable Is Damaged
        </h2>
        <p className="mt-4">
          Lift cables work alongside the springs to raise and lower your door evenly on both
          sides. When a cable fails, it usually shows up as:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The door hanging crooked, with one side noticeably lower than the other</li>
          <li>A visible frayed or fraying cable near the bottom bracket or drum</li>
          <li>The door suddenly feeling heavy or difficult to open, especially on one side</li>
          <li>A loose cable hanging away from the drum or track</li>
          <li>The door dropping suddenly or unevenly when opening or closing</li>
        </ul>
        <p className="mt-4">
          A frayed cable that hasn&rsquo;t fully snapped yet is still a warning sign worth acting
          on — cables rarely fail without some warning wear, and catching it before it snaps
          completely is safer and usually a simpler repair.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Causes Cables to Fail</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Normal wear</span> — cables fray
            gradually at points of friction, especially where they wrap around the drum
          </li>
          <li>
            <span className="font-semibold text-slate-900">Corrosion or rust</span> — moisture
            exposure over time weakens the cable strands
          </li>
          <li>
            <span className="font-semibold text-slate-900">Spring-related stress</span> — since
            cables and springs work together, a spring that&rsquo;s failing or improperly
            tensioned can put extra strain on the cables
          </li>
          <li>
            <span className="font-semibold text-slate-900">Improper prior installation</span> — a
            cable that wasn&rsquo;t seated or sized correctly wears unevenly and fails sooner
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Cable Repair Involves</h2>
        <p className="mt-4">
          Because cables work under tension alongside the springs, replacing one isn&rsquo;t a
          simple unhook-and-rehook job — the door has to be safely secured and tension released
          before the damaged cable can be removed. We inspect both cables and the drums during the
          visit, since if one cable has failed from age or wear, the other is often close behind
          for the same reason springs are usually replaced in pairs.
        </p>
        <p className="mt-4">
          Once the new cable (or cables) are installed and properly tensioned, we run the door
          through a full open/close cycle to confirm both sides are lifting evenly and the door is
          balanced.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">
              We check both cables, not just the broken one
            </span>{" "}
            — same logic as springs, since matched wear means matched risk
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — cost confirmed
            before work starts
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Same-day availability in most cases
            </span>{" "}
            — a broken or badly frayed cable isn&rsquo;t safe to leave as-is
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — describe
            what you&rsquo;re seeing (crooked door, visible fraying, sudden heaviness)
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site diagnosis</span> — we inspect
            both cables, the drums, and check whether spring tension is contributing to the wear
          </li>
          <li>
            <span className="font-semibold text-slate-900">Replacement</span> — damaged cable(s)
            replaced and properly tensioned
          </li>
          <li>
            <span className="font-semibold text-slate-900">Test</span> — full cycle test
            confirming the door lifts evenly and stays balanced
          </li>
        </ol>
        <p className="mt-4">Most cable repairs are completed in a single visit.</p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="cable-repair" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Cable Repaired Today"
        body="A damaged cable isn't something to wait on."
      />
    </>
  );
}
