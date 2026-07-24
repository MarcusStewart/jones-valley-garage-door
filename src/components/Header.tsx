import Link from "next/link";
import { site } from "@/lib/site-data";
import PhoneCta from "./PhoneCta";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/garage-door-repair" className="hover:text-amber-600">
            Services
          </Link>
          <Link href="/service-area" className="hover:text-amber-600">
            Service Area
          </Link>
          <Link href="/about" className="hover:text-amber-600">
            About
          </Link>
          <Link href="/faq" className="hover:text-amber-600">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-amber-600">
            Contact
          </Link>
        </nav>
        <PhoneCta className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400" />
      </div>
    </header>
  );
}
