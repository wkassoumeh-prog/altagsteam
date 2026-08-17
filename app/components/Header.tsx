"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#gardening" },
  { label: "Team", href: "#team" },
  { label: "Hessen", href: "#region" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-cream/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#start" className="group flex flex-col">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary lg:text-3xl">
            Alltagsteam
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
          className="-mr-2 flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
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
        <nav
          className="max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top))] overflow-y-auto border-t border-border bg-cream px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-lg font-medium text-foreground/80 active:bg-primary/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-white active:bg-primary-light"
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
