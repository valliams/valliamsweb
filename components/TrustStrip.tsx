const ITEMS = [
  "AI-First Engineering",
  "Startup-Focused",
  "Agile Delivery",
  "Cost Efficient Scaling",
  "Trusted by Global SaaS Teams",
];

export function TrustStrip() {
  return (
    <section className="border-y border-neutral-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {ITEMS.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-2 text-neutral-600 transition hover:text-brand-red"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
