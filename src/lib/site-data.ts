export const site = {
  name: "Jones Valley Garage Door",
  phone: "(256) 578-9228",
  phoneHref: "tel:+12565789228",
  domain: "jonesvalleygaragedoor.com",
  url: "https://jonesvalleygaragedoor.com",
  tagline: "Fast, Reliable Garage Door Repair in Huntsville, AL",
};

export type ServiceLink = {
  slug: string;
  title: string;
  shortTitle: string;
};

export const services: ServiceLink[] = [
  { slug: "garage-door-repair", title: "Garage Door Repair", shortTitle: "General Repair" },
  { slug: "spring-replacement", title: "Spring Replacement", shortTitle: "Spring Replacement" },
  { slug: "opener-repair", title: "Opener & Motor Repair", shortTitle: "Opener & Motor Repair" },
  { slug: "panel-replacement", title: "Panel Replacement", shortTitle: "Panel Replacement" },
  { slug: "off-track-repair", title: "Off-Track Door Repair", shortTitle: "Off-Track Repair" },
  { slug: "garage-door-installation", title: "New Garage Door Installation", shortTitle: "New Installation" },
  { slug: "cable-repair", title: "Cable Repair", shortTitle: "Cable Repair" },
];

export type LocationLink = {
  slug: string;
  city: string;
};

export const locations: LocationLink[] = [
  { slug: "huntsville-al", city: "Huntsville" },
  { slug: "madison-al", city: "Madison" },
  { slug: "athens-al", city: "Athens" },
  { slug: "decatur-al", city: "Decatur" },
  { slug: "meridianville-al", city: "Meridianville" },
];

export const trustPages = [
  { slug: "about", title: "About" },
  { slug: "service-area", title: "Service Area" },
  { slug: "faq", title: "FAQ" },
  { slug: "contact", title: "Contact" },
];
