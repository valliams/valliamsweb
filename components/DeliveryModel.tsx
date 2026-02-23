const STEPS = [
  "Product & Architecture Discovery",
  "Dedicated Pod Allocation",
  "Agile Sprint Execution",
  "AI Feature Enhancement",
  "Continuous Scaling & Optimization",
];

const COMPARISON = [
  {
    inHouse: "$150K+/year per engineer",
    valliams: "Fixed monthly pricing",
  },
  {
    inHouse: "Hiring delays",
    valliams: "Ready-to-deploy teams",
  },
  {
    inHouse: "HR overhead",
    valliams: "Fully managed pod",
  },
];

export function DeliveryModel() {
  return (
    <section id="model" className="bg-neutral-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Our Structured Scaling Model
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            From discovery to ongoing optimization—we scale with you.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-green bg-neutral-900 text-lg font-semibold text-brand-green">
                {i + 1}
              </div>
              <p className="mt-4 text-sm font-medium text-neutral-300">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing highlight */}
        <div className="mt-20 rounded-2xl border border-brand-green/30 bg-neutral-900/80 p-8 lg:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="font-display text-2xl font-bold">
                Dedicated Pods starting from $8K–$15K/month
              </h3>
              <p className="mt-2 text-neutral-400">
                Predictable costs. No surprises. Scale on your terms.
              </p>
            </div>
            <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-neutral-700">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-700 bg-neutral-800/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">
                      In-House Hiring
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-brand-green">
                      Valliams Dedicated Pod
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-neutral-800 last:border-0"
                    >
                      <td className="px-6 py-4 text-neutral-400">{row.inHouse}</td>
                      <td className="px-6 py-4 font-medium text-white">
                        {row.valliams}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
