import { site } from "@/lib/site-data";

type Props = {
  label?: string;
  className?: string;
};

export default function PhoneCta({ label, className }: Props) {
  return (
    <a
      href={site.phoneHref}
      className={
        className ??
        "inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400"
      }
    >
      {label ?? `Call ${site.phone}`}
    </a>
  );
}
