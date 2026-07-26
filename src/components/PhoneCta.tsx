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
        "inline-flex items-center justify-center rounded-md bg-red-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-800"
      }
    >
      {label ?? `Call ${site.phone}`}
    </a>
  );
}

