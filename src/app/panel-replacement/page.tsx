import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ServiceSchema from "@/components/ServiceSchema";
import { site } from "@/lib/site-data";

const description =
  "Garage door panel replacement in Huntsville, AL — dented, cracked, or rotted panels replaced, without always needing a full new door.";

export const metadata: Metadata = {
  title: "Garage Door Panel Replacement",
  description,
};

const faqItems = [
  {
    question: "Can I really replace just one panel, or do I need a whole new door?",
    answer:
      "In most cases, yes — sectional doors are built to allow individual panel replacement. Whole-door replacement usually only becomes the better option when a matching panel isn't available or when the door is old enough that further piecemeal repairs don't make financial sense.",
  },
  {
    question: "Will the new panel match the rest of my door exactly?",
    answer:
      "It depends on how faded or weathered the existing door is. A newer door usually matches well; an older one may show a slight color difference until it weathers to match, or may need a repaint for a seamless look. We'll be upfront about what to expect before ordering.",
  },
  {
    question: "Does homeowners or auto insurance cover panel damage?",
    answer:
      "Sometimes — if a vehicle caused the damage, it may fall under auto or homeowners coverage depending on the situation. We're not insurance agents, so we'd recommend checking directly with your provider, but we can provide a written estimate to support a claim if needed.",
  },
  {
    question: "Is a damaged panel actually a safety issue, or just cosmetic?",
    answer:
      "It depends on the location and severity. Minor cosmetic dents usually aren't a safety concern. Significant damage, especially to the bottom panel or near hinges and rollers, can affect how the door tracks and should be looked at rather than left.",
  },
  {
    question: "How much does panel replacement typically cost compared to a new door?",
    answer:
      "It varies significantly based on your door's brand, age, and how easy the matching panel is to source. We'll give you a clear number for both the panel replacement and, if relevant, a full door replacement, so you can compare and decide what makes sense.",
  },
];

export default function PanelReplacementPage() {
  return (
    <>
      <Hero
        h1="Garage Door Panel Replacement in Huntsville, AL"
        subhead="Dented, cracked, or rotted panels replaced — without always needing a full new door."
      />
      <ServiceSchema name="Garage Door Panel Replacement" description={description} />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-900">Common Causes of Panel Damage</h2>
        <p className="mt-4">
          Garage door panels take more abuse than most homeowners expect. The most common causes
          we see:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>A vehicle backing into the door (by far the most frequent cause)</li>
          <li>Storm damage — hail, fallen branches, or wind-driven debris</li>
          <li>
            Rust or rot on older steel or wood doors, especially near the bottom panel where
            moisture collects
          </li>
          <li>Cracking or warping from years of sun exposure, particularly on south-facing garages</li>
          <li>Impact damage from basketballs, tools, or general wear near the bottom of the door</li>
        </ul>
        <p className="mt-4">
          A damaged panel isn&rsquo;t just cosmetic. On sectional doors, panels contribute to the
          door&rsquo;s structural rigidity — a badly dented or cracked bottom panel in particular
          can throw off how evenly the door sits and moves along the track.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What Panel Replacement Involves</h2>
        <p className="mt-4">
          Most residential garage doors are sectional, built from individual panels stacked and
          connected, which means damage to one section doesn&rsquo;t automatically mean replacing
          the whole door. Replacement starts with identifying your door&rsquo;s manufacturer,
          model, and color so we can source a matching panel.
        </p>
        <p className="mt-4">
          This is where panel replacement gets genuinely tricky: if your door is several years
          old, the exact color may have faded unevenly compared to a brand-new panel, and some
          older or discontinued door models no longer have panels in production. When an exact
          match isn&rsquo;t available, we&rsquo;ll walk you through the real options — a close
          match that&rsquo;s functionally identical but slightly different in shade, a full
          repaint after installation, or in some cases, replacing the whole door if matching parts
          simply don&rsquo;t exist anymore. We&rsquo;d rather tell you that upfront than sell you a
          mismatched panel and let you find out later.
        </p>
        <p className="mt-4">
          For insulated doors, we also match the insulation type (polystyrene or polyurethane) so
          the replacement panel doesn&rsquo;t create a weak spot in energy efficiency.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Why Call {site.name}</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Honest assessment</span> — if a
            matching panel isn&rsquo;t realistically available, we&rsquo;ll tell you instead of
            guessing
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — panel cost and
            labor confirmed before we order parts
          </li>
          <li>
            <span className="font-semibold text-slate-900">Structural check included</span> — we
            verify the door still tracks and balances correctly after replacement, not just that
            the new panel looks right
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">What to Expect</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-slate-900">Call or reach out</span> — describe the
            damage and, if you have it, your door&rsquo;s brand or model
          </li>
          <li>
            <span className="font-semibold text-slate-900">On-site assessment</span> — we identify
            the exact panel needed and check for any related damage (track misalignment, hinge
            damage) the impact may have caused
          </li>
          <li>
            <span className="font-semibold text-slate-900">Sourcing</span> — we order the matching
            panel, or discuss alternatives if an exact match isn&rsquo;t available
          </li>
          <li>
            <span className="font-semibold text-slate-900">Installation and test</span> — panel
            installed, hardware reattached, and the door tested through a full cycle to confirm
            it&rsquo;s balanced and tracking correctly
          </li>
        </ol>
        <p className="mt-4">
          Timeline depends on part availability — a common panel style may be replaceable within a
          day or two, while a discontinued or unusual model can take longer to source.
        </p>
      </article>

      <Faq items={faqItems} />
      <ServiceLinks excludeSlug="panel-replacement" />
      <LocationLinks />
      <CtaBand
        heading="Get Your Panel Fixed Today"
        body="Don't let a damaged panel sit — it can affect how your whole door operates."
      />
    </>
  );
}
