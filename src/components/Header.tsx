import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";
import PhoneCta from "./PhoneCta";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <Image
            src="/logo.svg"
            alt={site.name}
            width={175}
            height={175}
            className="h-[120px] w-[120px] sm:h-[175px] sm:w-[175px] object-contain rounded-full transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight max-w-[200px] sm:max-w-none leading-tight">
            {site.name}
          </span>
        </Link>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <Link href="/garage-door-repair" className="hover:text-red-700 transition-colors py-2">
              Services
            </Link>
            <Link href="/service-area" className="hover:text-red-700 transition-colors py-2">
              Service Area
            </Link>
            <Link href="/about" className="hover:text-red-700 transition-colors py-2">
              About
            </Link>
            <Link href="/faq" className="hover:text-red-700 transition-colors py-2">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-red-700 transition-colors py-2">
              Contact
            </Link>
          </nav>

          <PhoneCta className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-800 shrink-0" />
        </div>
      </div>
    </header>
  );
}


