"use client";

import { useState, useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/valliams-tech/strategy-call";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className={`font-display text-xl font-bold transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}>
            Valliams
          </span>
          <span className={`font-display text-xl font-semibold transition-colors ${scrolled ? "text-brand-red" : "text-brand-green"}`}>
            Technologies
          </span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          <a
            href="/#services"
            className={`text-sm font-medium transition hover:opacity-80 ${scrolled ? "text-neutral-600 hover:text-brand-red" : "text-neutral-300 hover:text-white"}`}
          >
            Services
          </a>
          <a
            href="/#model"
            className={`text-sm font-medium transition hover:opacity-80 ${scrolled ? "text-neutral-600 hover:text-brand-red" : "text-neutral-300 hover:text-white"}`}
          >
            Our Model
          </a>
          <a
            href="/#case-studies"
            className={`text-sm font-medium transition hover:opacity-80 ${scrolled ? "text-neutral-600 hover:text-brand-red" : "text-neutral-300 hover:text-white"}`}
          >
            Case Studies
          </a>
          <a
            href="/#blog"
            className={`text-sm font-medium transition hover:opacity-80 ${scrolled ? "text-neutral-600 hover:text-brand-red" : "text-neutral-300 hover:text-white"}`}
          >
            Blog
          </a>
          <a
            href="/contact"
            className={`text-sm font-medium transition hover:opacity-80 ${scrolled ? "text-neutral-600 hover:text-brand-red" : "text-neutral-300 hover:text-white"}`}
          >
            Contact
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-red-dark hover:shadow-xl"
          >
            Book a Call
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <a href="/#services" className="text-neutral-700 hover:text-brand-red" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/#model" className="text-neutral-700 hover:text-brand-red" onClick={() => setMobileMenuOpen(false)}>Our Model</a>
            <a href="/#case-studies" className="text-neutral-700 hover:text-brand-red" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="/#blog" className="text-neutral-700 hover:text-brand-red" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="/contact" className="text-neutral-700 hover:text-brand-red" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-red px-5 py-2.5 text-center font-semibold text-white"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
