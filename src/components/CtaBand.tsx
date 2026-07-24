import PhoneCta from "./PhoneCta";

type Props = {
  heading: string;
  body: string;
};

export default function CtaBand({ heading, body }: Props) {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">{heading}</h2>
        <p className="mt-3 text-slate-600">{body}</p>
        <div className="mt-6">
          <PhoneCta />
        </div>
      </div>
    </section>
  );
}
