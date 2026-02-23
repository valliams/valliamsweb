export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-neutral-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-neutral-600">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="prose prose-neutral mt-8 max-w-none">
          <p>
            By using Valliams Technologies website and services, you agree to
            these terms. We provide AI-powered product engineering services
            under separate agreements.
          </p>
          <p>
            For questions, contact us at{" "}
            <a href="mailto:hello@valliams.com" className="text-brand-red hover:underline">
              hello@valliams.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
