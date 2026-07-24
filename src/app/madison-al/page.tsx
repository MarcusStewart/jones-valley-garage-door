import type { Metadata } from "next";
import LocationArticle from "@/components/LocationArticle";

export const metadata: Metadata = {
  title: "Garage Door Repair in Madison, AL",
  description:
    "Same-day garage door repair in Madison, AL — springs, openers, cables, panels, and off-track doors. Local team, upfront pricing.",
};

export default function MadisonPage() {
  return (
    <LocationArticle
      city="Madison"
      neighborhoods={[
        "Town Madison",
        "Rainbow Mountain Heights",
        "Bridgefield",
        "the Village at Oakland Springs",
      ]}
      paragraphs={[
        "Madison has grown fast over the past decade — much of it new construction in communities like Town Madison, Bridgefield, and the Village at Oakland Springs, alongside older, established neighborhoods like Rainbow Mountain Heights. That mix matters for garage doors: newer homes often have builder-installed openers and springs that weren't sized generously and start acting up a few years in, while older Madison homes are more likely due for a full hardware refresh.",
        "We regularly work throughout Madison, from the growing area around Town Madison's Exchange and Commons districts out toward the quieter residential streets near Rainbow Mountain.",
        "Madison's rapid growth means most of the garage doors we service here are on the newer side compared to Huntsville's historic core — but \"newer\" doesn't mean trouble-free. Builder-installed springs and openers are sized to pass inspection, not necessarily to hold up under years of daily use, and that's the single most common reason we get called out to newer Madison subdivisions: a door that's only a few years old already struggling with a spring or opener issue that feels premature for its age.",
        "Madison is a short drive from our home base in Huntsville, so response times stay fast.",
      ]}
    />
  );
}
