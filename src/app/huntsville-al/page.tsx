import type { Metadata } from "next";
import LocationArticle from "@/components/LocationArticle";

export const metadata: Metadata = {
  title: "Garage Door Repair in Huntsville, AL",
  description:
    "Same-day garage door repair in Huntsville, AL — springs, openers, cables, panels, and off-track doors. Local team, upfront pricing.",
};

export default function HuntsvillePage() {
  return (
    <LocationArticle
      city="Huntsville"
      neighborhoods={[
        "Five Points",
        "Blossomwood",
        "Twickenham",
        "Jones Valley",
        "Hampton Cove",
        "Monte Sano",
        "Providence",
        "areas near Redstone Arsenal",
      ]}
      paragraphs={[
        "Huntsville is home base for Jones Valley Garage Door, so it's where we can typically get to you fastest. From the historic homes around Twickenham and Five Points to the newer construction spreading through Hampton Cove and out toward Redstone Arsenal, we've seen the full range of garage door setups Huntsville has to offer — older doors with original hardware that's overdue for a spring or cable replacement, and newer builder-grade openers that tend to need attention sooner than homeowners expect.",
        "Huntsville's housing stock varies more than most of our service area — you've got early-to-mid-1900s homes in the historic districts close to downtown, a wave of mid-century construction in neighborhoods like Blossomwood, and newer subdivisions further out toward Hampton Cove and Providence. That range shows up directly in the calls we get: historic-district homes are more likely to need cable or panel work on original or long-since-replaced hardware, while newer construction tends to have opener issues from builder-grade equipment that wasn't built for years of daily use.",
        "North Alabama's climate plays a role too. Huntsville sees real humidity swings across the year and occasional severe spring storms, both of which affect garage doors over time — humidity contributes to rust on older steel hardware and rot on wood doors, and storm debris is a common cause of dented panels and damaged sensors. None of that means your door needs constant attention, but it's part of why doors in this area don't always fail in the same way doors do in drier climates.",
        "Since Huntsville is our primary service area, same-day appointments are available in most cases.",
      ]}
    />
  );
}
