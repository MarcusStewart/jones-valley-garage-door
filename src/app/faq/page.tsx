import type { Metadata } from "next";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common questions about ${site.name}'s garage door repair service in the Huntsville, AL area.`,
};

const faqItems = [
  {
    question: "What areas do you serve?",
    answer:
      "Huntsville, Madison, Athens, Decatur, and Meridianville, AL, and the areas in between. Not sure if you're in range? Call and ask.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "We'll assess the problem and give you a clear price before any work starts — no surprise charges once a technician arrives.",
  },
  {
    question: "How fast can you get to me?",
    answer:
      "Same-day appointments are available in most cases. Garage door issues are usually urgent, and we treat them that way.",
  },
  {
    question: "Do you work on both residential and commercial garage doors?",
    answer: "Yes, we handle both.",
  },
  {
    question: "What brands do you work on?",
    answer:
      "Most major residential garage door and opener brands, including Clopay, Amarr, LiftMaster, Chamberlain, and Genie.",
  },
  {
    question: "Is it safe to keep using my garage door if something seems wrong?",
    answer:
      "Not always — a door that's crooked, off-track, or straining should be left alone until it's looked at. Continuing to use it can cause more damage or become a safety risk.",
  },
  {
    question: "Do you offer emergency or after-hours service?",
    answer:
      "Call us and we'll let you know what's available — garage door problems don't always happen during business hours, and we try to accommodate urgent situations.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Call to confirm current accepted payment methods.",
  },
  {
    question: "Do you offer any warranty on repairs?",
    answer:
      "Ask your technician about warranty coverage for your specific repair when you call — this can vary depending on the parts and service involved.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call us. In most cases we can give you a same-day or next-day appointment window right on the call.",
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16">
        <h1 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
      </div>
      <Faq heading="" items={faqItems} />
      <CtaBand
        heading="Still Have a Question?"
        body="Call us directly and we'll give you a straight answer."
      />
    </>
  );
}
