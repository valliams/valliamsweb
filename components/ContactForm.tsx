"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 shadow-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 shadow-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 shadow-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 shadow-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-brand-green">Message sent. We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-brand-red">Something went wrong. Please email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition hover:bg-brand-red-dark disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
