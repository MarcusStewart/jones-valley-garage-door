import { site } from "@/lib/site-data";

type Props = {
  name: string;
  description: string;
};

export default function ServiceSchema({ name, description }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: "Huntsville, AL metro area",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
