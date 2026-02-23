const CALENDLY_URL = "https://calendly.com/valliams-tech/strategy-call";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="border-b border-brand-green/30 pb-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Valliams Technologies
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                AI-powered product engineering for high-growth SaaS startups.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="mt-4 space-y-2">
<li><a href="/#services" className="transition hover:text-brand-green">AI Integration</a></li>
              <li><a href="/#services" className="transition hover:text-brand-green">SaaS Development</a></li>
              <li><a href="/#services" className="transition hover:text-brand-green">Cloud & DevOps</a></li>
              <li><a href="/#services" className="transition hover:text-brand-green">Dedicated Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="/#blog" className="transition hover:text-brand-green">Blog</a></li>
                <li><a href="/#founder" className="transition hover:text-brand-green">About</a></li>
                <li><a href="/contact" className="transition hover:text-brand-green">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Connect</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-green">LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:hello@valliams.com" className="transition hover:text-brand-green">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="transition hover:text-brand-green">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-brand-green">Terms</a>
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Valliams Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
