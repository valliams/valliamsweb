import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-neutral-900">
          Get in Touch
        </h1>
        <p className="mt-4 text-neutral-600">
          Prefer email? Send us a message and we&apos;ll respond within 24 hours.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
        <p className="mt-8 text-center text-sm text-neutral-500">
          Or{" "}
          <a
            href="https://calendly.com/valliams-tech/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-red hover:underline"
          >
            book a free strategy call
          </a>{" "}
          to speak with us directly.
        </p>
      </div>
    </section>
  );
}
