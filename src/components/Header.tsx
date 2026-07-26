import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";
import PhoneCta from "./PhoneCta";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={site.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-full"
            priority
          />
          <span className="text-lg font-bold text-slate-900">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/garage-door-repair" className="hover:text-red-700 transition-colors">
            Services
          </Link>
          <Link href="/service-area" className="hover:text-red-700 transition-colors">
            Service Area
          </Link>
          <Link href="/about" className="hover:text-red-700 transition-colors">
            About
          </Link>
          <Link href="/faq" className="hover:text-red-700 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-red-700 transition-colors">
            Contact
          </Link>
        </nav>
        <PhoneCta className="inline-flex items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800" />
      </div>
    </header>
  );
}

