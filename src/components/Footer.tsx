import Link from "next/link";
import { site, services, locations } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <p className="text-base font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">
            <a href={site.phoneHref} className="hover:text-amber-400">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Service-area business serving the Huntsville, AL metro
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-2 space-y-1 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-amber-400">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Service Area</p>
          <ul className="mt-2 space-y-1 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="hover:text-amber-400">
                  {l.city}, AL
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:text-amber-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-amber-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
