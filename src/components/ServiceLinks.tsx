import Link from "next/link";
import { services } from "@/lib/site-data";

type Props = {
  heading?: string;
  excludeSlug?: string;
};

export default function ServiceLinks({ heading = "What We Fix", excludeSlug }: Props) {
  const items = services.filter((s) => s.slug !== excludeSlug);

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              className="block rounded-md border border-slate-200 px-4 py-3 text-slate-800 transition hover:border-red-400 hover:bg-red-50/60"
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
