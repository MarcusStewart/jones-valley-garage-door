import Link from "next/link";
import { locations } from "@/lib/site-data";

type Props = {
  heading?: string;
};

export default function LocationLinks({ heading = "Areas We Serve" }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
      <p className="mt-2 text-slate-600">
        Proudly serving{" "}
        {locations.map((l, i) => (
          <span key={l.slug}>
            <Link href={`/${l.slug}`} className="font-medium text-amber-600 hover:underline">
              {l.city}
            </Link>
            {i < locations.length - 2 ? ", " : i === locations.length - 2 ? ", and " : ""}
          </span>
        ))}
        , AL. Not sure if you&rsquo;re in our service area? Call us and we&rsquo;ll let you know.
      </p>
    </section>
  );
}
