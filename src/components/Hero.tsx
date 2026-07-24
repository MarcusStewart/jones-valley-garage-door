import Image from "next/image";
import PhoneCta from "./PhoneCta";
import HeroQuoteForm from "./HeroQuoteForm";

type Props = {
  h1: string;
  subhead: string;
};

export default function Hero({ h1, subhead }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Residential garage door on a well-kept home"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dark gradient overlay so text stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.65) 100%)",
        }}
      />

      {/* Content — two columns on md+ */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          {/* Left: headline + phone CTA */}
          <div>
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl leading-tight drop-shadow-md">
              {h1}
            </h1>
            <p className="mt-5 text-lg text-slate-200 drop-shadow-sm">{subhead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PhoneCta label="Call for a Fast Quote" />
              <span className="text-sm text-slate-400 hidden sm:block">or fill out the form →</span>
            </div>
          </div>

          {/* Right: quick-quote form */}
          <div>
            <HeroQuoteForm />
          </div>

        </div>
      </div>
    </section>
  );
}

