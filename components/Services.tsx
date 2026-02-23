"use client";

const SERVICES = [
  {
    title: "AI Integration & Automation",
    items: [
      "OpenAI integrations",
      "AI copilots",
      "Predictive analytics",
      "Custom AI workflows",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "SaaS Product Development (MERN)",
    items: [
      "Scalable backend architecture",
      "Multi-tenant SaaS platforms",
      "API-first systems",
      "Modern React dashboards",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS / GCP deployment",
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Infrastructure scaling",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Dedicated AI Product Teams",
    items: [
      "Fully managed offshore pods",
      "Agile sprint cycles",
      "Transparent reporting",
      "Long-term engineering partnership",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            End-to-end AI and MERN expertise for ambitious SaaS products.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-red/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 rounded-b-xl bg-gradient-to-r from-brand-red to-brand-green transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
