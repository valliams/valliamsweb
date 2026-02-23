"use client";

const TECH_ITEMS = [
  { name: "MongoDB", color: "hover:border-green-500/50" },
  { name: "Express", color: "hover:border-neutral-600" },
  { name: "React", color: "hover:border-cyan-400/50" },
  { name: "Node.js", color: "hover:border-green-600/50" },
  { name: "OpenAI", color: "hover:border-emerald-500/50" },
  { name: "AWS", color: "hover:border-orange-500/50" },
  { name: "Docker", color: "hover:border-blue-500/50" },
  { name: "Kubernetes", color: "hover:border-blue-600/50" },
];

export function TechStack() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Our Technology Expertise
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Full-stack MERN and AI infrastructure.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          {TECH_ITEMS.map((tech) => (
            <div
              key={tech.name}
              className={`flex h-24 w-32 items-center justify-center rounded-xl border-2 border-neutral-200 bg-neutral-50 px-4 text-center font-semibold text-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.color}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
