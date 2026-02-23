const REASONS = [
  "AI-First Development Culture",
  "Dedicated Pod Structure",
  "Startup-Centric Execution",
  "40–60% Cost Optimization",
  "Transparent Communication",
  "Long-Term Partnership Mindset",
];

export function WhyValliams() {
  return (
    <section className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Why Founders Choose Valliams
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We&apos;re not freelancers. We&apos;re long-term product partners.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason}
              className="group relative rounded-xl border border-neutral-200 bg-white px-8 py-6 shadow-sm transition-all duration-300 hover:border-brand-red/30 hover:shadow-md"
            >
              <span className="absolute left-0 top-0 h-full w-1 scale-y-0 rounded-l-xl bg-brand-red transition-transform duration-300 group-hover:scale-y-100" />
              <p className="font-medium text-neutral-800 group-hover:text-brand-red">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
