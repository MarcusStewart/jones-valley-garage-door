import type { Metadata } from "next";
import LocationArticle from "@/components/LocationArticle";

export const metadata: Metadata = {
  title: "Garage Door Repair in Decatur, AL",
  description:
    "Same-day garage door repair in Decatur, AL — springs, openers, cables, panels, and off-track doors. Local team, upfront pricing.",
};

export default function DecaturPage() {
  return (
    <LocationArticle
      city="Decatur"
      neighborhoods={["Old Decatur", "the Albany Historic District", "areas near Delano Park"]}
      paragraphs={[
        "Decatur sits on the Tennessee River and has some of the oldest housing stock in our service area, particularly in the Old Decatur and Albany historic districts near Delano Park. Older homes in this part of Decatur often have original garage hardware that's well past its expected lifespan, which is exactly where issues like frayed cables and worn springs tend to show up first. Decatur's newer neighborhoods, further from the historic core, see more of the builder-grade opener issues common to newer construction.",
        "Decatur sits on the Tennessee River, and the river's humidity is genuinely harder on garage door hardware than drier inland areas — steel components rust faster and wood doors are more prone to swelling and rot without regular attention. That's especially relevant for the antebellum and mid-century homes around Old Decatur and Albany, where original or long-untouched hardware is common. Newer Decatur neighborhoods, further from the river and the historic core, see fewer moisture-related issues and more of the standard opener and spring wear we see everywhere.",
      ]}
    />
  );
}
