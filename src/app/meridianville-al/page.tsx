import type { Metadata } from "next";
import LocationArticle from "@/components/LocationArticle";

export const metadata: Metadata = {
  title: "Garage Door Repair in Meridianville, AL",
  description:
    "Same-day garage door repair in Meridianville, AL — springs, openers, cables, panels, and off-track doors. Local team, upfront pricing.",
};

export default function MeridianvillePage() {
  return (
    <LocationArticle
      city="Meridianville"
      paragraphs={[
        "Meridianville has a more rural, spread-out feel than Huntsville proper, with newer homes and larger lots and one of the fastest growth rates in Madison County. Because it's mostly newer residential construction, the garage door issues we see most often here are builder-grade opener problems and springs that weren't sized for how heavily a family with an attached garage actually uses the door day to day.",
        "Because Meridianville is one of the fastest-growing parts of Madison County, most of what we service here is recent construction on larger lots — which usually means two-car or larger garages getting more daily use than a typical in-town home. More cycles per day wears springs and cables down faster than the manufacturer's rated lifespan assumes, so it's not unusual for a Meridianville door only a few years old to already need its first spring replacement.",
      ]}
    />
  );
}
