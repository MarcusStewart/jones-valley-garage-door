import type { MetadataRoute } from "next";
import { site, services, locations, trustPages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  // Home page
  const home: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // Service pages
  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Location pages
  const locationUrls: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Trust/info pages
  const trustUrls: MetadataRoute.Sitemap = trustPages.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...home, ...serviceUrls, ...locationUrls, ...trustUrls];
}
