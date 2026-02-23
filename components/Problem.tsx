const PAIN_POINTS = [
  "High US engineering costs",
  "Hiring delays",
  "AI skill shortages",
  "Infrastructure bottlenecks",
  "Inconsistent sprint velocity",
];

export function Problem() {
  return (
    <section className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Scaling AI Products Is Expensive and Complex.
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Startups struggle with:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {PAIN_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="font-medium text-neutral-800">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg font-medium text-neutral-700">
            Valliams Technologies solves this with{" "}
            <span className="text-brand-red underline decoration-brand-red/50 underline-offset-4">
              structured offshore AI product pods
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
