const POSTS = [
  {
    title: "How AI is transforming SaaS products",
    excerpt: "Explore the shift from reactive to predictive product experiences.",
    category: "AI",
  },
  {
    title: "Building scalable MERN architecture",
    excerpt: "Patterns and practices for multi-tenant SaaS backends.",
    category: "Engineering",
  },
  {
    title: "Offshore team management best practices",
    excerpt: "Transparent workflows and sprint cadence that work.",
    category: "Leadership",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Insights on AI & SaaS Engineering
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Thought leadership for founders and product leaders.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-green/30 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                {post.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900 group-hover:text-brand-red">
                {post.title}
              </h3>
              <p className="mt-2 text-neutral-600">{post.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-red transition hover:gap-3"
              >
                Read more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
