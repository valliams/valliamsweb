"use client";

const CALENDLY_URL = "https://calendly.com/valliams-tech/strategy-call";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background gradient and glow */}
      <div className="gradient-dark-glow absolute inset-0" />
      <div className="gradient-red-green absolute inset-0 opacity-50" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating AI graphic elements */}
      <div className="absolute right-[10%] top-[25%] h-24 w-24 rounded-full bg-brand-red/20 blur-3xl animate-float" />
      <div className="absolute bottom-[20%] left-[15%] h-32 w-32 rounded-full bg-brand-green/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute right-[30%] bottom-[35%] h-16 w-16 rounded-lg bg-brand-red/10 blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-wider text-brand-green">
            AI-Powered Product Engineering
          </p>
          <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-tight text-white delay-100 sm:text-5xl lg:text-6xl">
            Build and Scale AI-Powered SaaS Products with Dedicated Offshore Teams.
          </h1>
          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-neutral-300 delay-200">
            Valliams Technologies partners with growth-stage startups to deliver
            scalable MERN and AI-driven solutions without the cost of in-house
            expansion.
          </p>
          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row delay-300">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-red px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-brand-red-dark hover:shadow-2xl sm:w-auto"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="/#model"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-brand-green px-8 py-4 text-base font-semibold text-brand-green transition hover:bg-brand-green/10 sm:w-auto"
            >
              Explore Our Model
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="animate-scale-in relative mx-auto mt-16 max-w-4xl delay-500">
          <div className="overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-900/80 shadow-2xl backdrop-blur">
            <div className="flex gap-1 border-b border-neutral-700/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex">
              <div className="w-48 border-r border-neutral-700/50 p-4">
                <div className="mb-4 h-8 w-24 rounded bg-neutral-700" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-6 rounded bg-neutral-800" />
                  ))}
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg bg-neutral-800/80 p-4">
                      <div className="mb-2 h-4 w-16 rounded bg-neutral-700" />
                      <div className="h-8 w-20 rounded bg-brand-green/20" />
                    </div>
                  ))}
                </div>
                <div className="h-48 rounded-lg bg-neutral-800/60">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-24 w-3/4 rounded bg-gradient-to-r from-brand-red/20 to-brand-green/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-brand-red/10 blur-3xl" />
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-brand-green/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
