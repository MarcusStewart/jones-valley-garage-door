import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.tagline,
    template: `%s | ${site.name}`,
  },
  description:
    "Same-day garage door repair in Huntsville, AL — springs, openers, cables, panels, and off-track doors fixed by a local team. Upfront pricing, no runaround.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  telephone: site.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huntsville",
    addressRegion: "AL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7304,
    longitude: -86.5861,
  },
  areaServed: [
    "Huntsville, AL",
    "Madison, AL",
    "Athens, AL",
    "Decatur, AL",
    "Meridianville, AL",
  ],
  priceRange: "$$",
  image: `${site.url}/hero.jpg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
