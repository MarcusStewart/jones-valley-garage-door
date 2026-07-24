export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  heading?: string;
  items: FaqItem[];
};

export default function Faq({ heading = "Frequently Asked Questions", items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      {heading && <h2 className="text-xl font-bold text-slate-900">{heading}</h2>}
      <dl className="mt-4 space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-slate-900">{item.question}</dt>
            <dd className="mt-1 text-slate-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
