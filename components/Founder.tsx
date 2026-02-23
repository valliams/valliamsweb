export function Founder() {
  return (
    <section id="founder" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            A Message from the Founder
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="shrink-0">
              <div className="h-48 w-48 overflow-hidden rounded-2xl bg-neutral-200 lg:h-64 lg:w-64">
                <div className="flex h-full w-full items-center justify-center text-neutral-400">
                  <svg
                    className="h-24 w-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-neutral-600 lg:text-left">
                Founder, Valliams Technologies
              </p>
            </div>
            <div className="flex-1">
              <blockquote className="text-lg leading-relaxed text-neutral-700 lg:text-xl">
                &ldquo;At Valliams Technologies, we built our company to help
                ambitious SaaS founders scale without the overhead of traditional
                hiring. We combine AI innovation with disciplined product
                engineering to deliver measurable growth.&rdquo;
              </blockquote>
              <p className="mt-6 text-neutral-600">
                We are not freelancers. We are not low-cost outsourcing. We are
                long-term product partners committed to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
