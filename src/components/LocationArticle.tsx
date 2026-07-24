import Hero from "@/components/Hero";
import ServiceLinks from "@/components/ServiceLinks";
import CtaBand from "@/components/CtaBand";
import PhoneCta from "@/components/PhoneCta";

type Props = {
  city: string;
  paragraphs: string[];
  neighborhoods?: string[];
};

export default function LocationArticle({ city, paragraphs, neighborhoods }: Props) {
  return (
    <>
      <Hero
        h1={`Garage Door Repair in ${city}, AL`}
        subhead={`Springs, openers, cables, panels, and off-track doors — diagnosed and fixed for ${city} homes and businesses.`}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 text-slate-600">
        {neighborhoods && neighborhoods.length > 0 && (
          <p className="mb-6 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
            <span className="font-semibold text-slate-900">Neighborhoods we serve:</span>{" "}
            {neighborhoods.join(", ")}, and areas throughout {city}.
          </p>
        )}
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-4">
            {p}
          </p>
        ))}
        {/* TODO: embed a real Google Maps service-area map once a Google Business Profile / API key exists */}
      </article>

      <ServiceLinks heading={`What We Fix in ${city}`} />

      <section className="mx-auto max-w-3xl px-4 pb-12 text-center">
        <PhoneCta label={`Call for a Fast Quote in ${city}`} />
      </section>

      <CtaBand
        heading={`Need a Garage Door Fixed in ${city}?`}
        body="Fast, honest service — call now for a same-day quote in most cases."
      />
    </>
  );
}
