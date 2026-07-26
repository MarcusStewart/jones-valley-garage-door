import Image from "next/image";
import Link from "next/link";
import { site, services, locations } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt={site.name}
              width={36}
              height={36}
              className="h-9 w-9 object-contain rounded-full bg-white p-0.5"
            />
            <p className="text-base font-bold text-white">{site.name}</p>
          </div>
          <p className="mt-3 text-sm">
            <a href={site.phoneHref} className="font-semibold text-red-400 hover:text-red-300 transition-colors">
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
                <Link href={`/${s.slug}`} className="hover:text-red-400 transition-colors">
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
                <Link href={`/${l.slug}`} className="hover:text-red-400 transition-colors">
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
              <Link href="/about" className="hover:text-red-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-400 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-400 transition-colors">
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

