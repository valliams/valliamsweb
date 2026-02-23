const CALENDLY_URL = "https://calendly.com/valliams-tech/strategy-call";

export function FinalCTA() {
  return (
    <section className="bg-neutral-950 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Scale Your AI Product?
        </h2>
        <p className="mt-6 text-xl text-neutral-400">
          Let&apos;s build your next AI milestone together.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-lg bg-brand-red px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-brand-red-dark hover:shadow-2xl"
        >
          Book Your Free 30-Minute Strategy Call
        </a>
        <p className="mt-6 text-sm text-neutral-500">
          No commitment. No pressure. Just a conversation about your product.
        </p>
      </div>
    </section>
  );
}
