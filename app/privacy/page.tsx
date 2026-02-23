export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-neutral-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-neutral-600">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="prose prose-neutral mt-8 max-w-none">
          <p>
            Valliams Technologies respects your privacy. We collect information
            you provide when contacting us or booking a call, and use it to
            respond to your inquiries and improve our services.
          </p>
          <p>
            We do not sell or share your data with third parties. For questions,
            contact us at{" "}
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
