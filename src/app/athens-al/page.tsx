import type { Metadata } from "next";
import LocationArticle from "@/components/LocationArticle";

export const metadata: Metadata = {
  title: "Garage Door Repair in Athens, AL",
  description:
    "Same-day garage door repair in Athens, AL — springs, openers, cables, panels, and off-track doors. Local team, upfront pricing.",
};

export default function AthensPage() {
  return (
    <LocationArticle
      city="Athens"
      neighborhoods={[
        "the historic Courthouse Square",
        "the Athens State University Historic District",
        "The Meadows",
        "Covington Cove",
      ]}
      paragraphs={[
        "Athens carries a lot of history — the Courthouse Square downtown, the Athens State University Historic District, and neighborhoods like The Meadows and Covington Cove that have grown up around that historic core. It's also seeing real growth as Huntsville's tech and aerospace expansion spills west into Limestone County, which means a mix of well-worn older doors near the historic downtown and newer installations in Athens' newer subdivisions.",
        "Whether you're near the Square or out in one of Athens' newer neighborhoods, we cover the area.",
        "Athens' mix of housing ages is a lot like Decatur's on a smaller scale — older homes near the historic Square tend to have original hardware overdue for service, while the newer subdivisions that have grown up as Huntsville's tech corridor expands west lean toward the builder-grade opener issues common to recent construction. Either way, we treat an Athens service call the same as any other: diagnose first, quote honestly, fix it right.",
      ]}
    />
  );
}
