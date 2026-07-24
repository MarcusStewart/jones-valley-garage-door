import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import LocationLinks from "@/components/LocationLinks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: site.tagline,
  description:
    "Same-day garage door repair in Huntsville, AL — springs, openers, cables, panels, and off-track doors. Upfront pricing, local team. Call " +
    site.phone +
    ".",
};

const faqItems = [
  {
    question: "How much does garage door repair cost?",
    answer:
      "It depends on what's wrong — a stuck sensor is a different job than a broken spring or a bent panel. We'll look at the issue and give you a straight price before any work starts, not after.",
  },
  {
    question: "Do you offer same-day repair?",
    answer:
      "In most cases, yes. Garage door issues tend to be urgent — a door that won't close is a security problem, and a door that won't open can block you in. Call and we'll tell you the soonest we can get to you.",
  },
  {
    question: "What brands of garage doors and openers do you work on?",
    answer:
      "We work on most major residential brands, including Clopay, Amarr, LiftMaster, Chamberlain, and Genie. If you're not sure what you have, that's fine — we can identify it on-site.",
  },
  {
    question: "Is it safe to try fixing a broken spring myself?",
    answer:
      "No. Garage door springs are under high tension and can cause serious injury if handled without the right tools and experience. If your spring is broken or making unusual noise, call a technician rather than attempting it yourself.",
  },
  {
    question: "How do I know if I need a repair or a full door replacement?",
    answer:
      "Most issues — springs, cables, openers, off-track doors, damaged panels — are repairable. Replacement usually only makes sense if the door is old, the frame is damaged, or repairs would cost close to the price of a new door. We'll give you an honest read on which makes more sense for your situation.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        h1={site.tagline}
        subhead="Same-day service for broken springs, openers, off-track doors, and more — serving Huntsville, Madison, Athens, Decatur, and Meridianville."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Your Local Garage Door Team</h2>
        <p className="mt-4 text-slate-600">
          A garage door that won&rsquo;t open or close isn&rsquo;t just inconvenient — it&rsquo;s
          a security risk and, if you&rsquo;re heading to work, a real problem. {site.name} handles
          repairs, installations, and maintenance for homes and businesses across the Huntsville
          area, with technicians who show up when they say they will and give you a straight
          answer before any work starts.
        </p>
        <p className="mt-4 text-slate-600">
          Whether it&rsquo;s a broken spring, a door stuck off its track, or an opener that&rsquo;s
          stopped responding, we handle the job start to finish — no runaround, no guessing games
          on price.
        </p>
      </section>

      <ServiceLinks />

      <section className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-xl font-bold text-slate-900">Why Call Us</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">Fast response</span> — same-day
            appointments available in most cases
          </li>
          <li>
            <span className="font-semibold text-slate-900">Upfront pricing</span> — you&rsquo;ll
            know the cost before we start, not after
          </li>
          <li>
            <span className="font-semibold text-slate-900">Local team</span> — we know the
            Huntsville area, not a national call center
          </li>
        </ul>
      </section>

      <LocationLinks />
      <Faq items={faqItems} />
      <CtaBand
        heading="Get a Fast, Honest Quote"
        body="Garage door problems don't wait, and neither do we."
      />
    </>
  );
}
