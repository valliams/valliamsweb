const CASES = [
  {
    title: "AI SaaS Dashboard Platform",
    challenge: "Manual workflow management.",
    solution: "Built MERN SaaS with AI automation engine.",
    impact: "Reduced manual tasks by 40%.",
    stack: ["MongoDB", "React", "Node.js", "OpenAI"],
  },
  {
    title: "Intelligent Workflow Automation Tool",
    challenge: "Inefficient internal operations.",
    solution: "Integrated OpenAI-powered decision engine.",
    impact: "Improved process speed by 55%.",
    stack: ["Express", "React", "OpenAI", "AWS"],
  },
  {
    title: "Multi-Tenant SaaS Architecture",
    challenge: "Scaling infrastructure.",
    solution: "Cloud-native MERN deployment with containerization.",
    impact: "Handled 10x traffic growth.",
    stack: ["MongoDB", "React", "Docker", "Kubernetes"],
  },
];

const STACK_ICONS: Record<string, string> = {
  MongoDB: "🟢",
  Express: "⚡",
  React: "⚛️",
  "Node.js": "🟩",
  OpenAI: "🤖",
  AWS: "☁️",
  Docker: "🐳",
  Kubernetes: "⎈",
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Engineering Impact
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real outcomes from AI and MERN product delivery.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-green/30 hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-900">
                {c.title}
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Challenge
                  </p>
                  <p className="mt-1 text-neutral-700">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Solution
                  </p>
                  <p className="mt-1 text-neutral-700">{c.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                    Impact
                  </p>
                  <p className="mt-1 font-semibold text-neutral-900">{c.impact}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {STACK_ICONS[tech] || "•"} {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
