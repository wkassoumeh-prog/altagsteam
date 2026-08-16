"use client";

import { useState } from "react";

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#gardening" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary lg:text-3xl">
            Altagsteam
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
            Alltagshilfe
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-primary transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground/80"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
