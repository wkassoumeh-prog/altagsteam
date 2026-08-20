"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSiteMotion } from "./useSiteMotion";

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#gardening" },
  { label: "Team", href: "#team" },
  { label: "Hessen", href: "#region" },
  { label: "Kontakt", href: "#contact" },
];

const SCROLL_OFFSET = 80;

function mobileNavLinks(onNavigate: (href: string) => void) {
  return (
    <div className="flex flex-col gap-2">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-lg px-2 py-3 text-lg font-medium text-foreground/80 transition-colors active:bg-primary/5"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(link.href);
          }}
        >
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        className="mt-2 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("#contact");
        }}
      >
        Kontakt
      </a>
    </div>
  );
}

function scrollToSection(href: string, smooth: boolean) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
}

export default function Header() {
  const { enabled: motionEnabled } = useSiteMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY > window.innerHeight - SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onHero = !isPastHero;
  const showSolid = isScrolled || menuOpen;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href, motionEnabled);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        showSolid
          ? "border-b border-border/60 bg-cream/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-3"
      } ${isPastHero && showSolid ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto my-3 flex items-center justify-between px-6">
        <a
          href="#start"
          className="group flex flex-col"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#start");
          }}
        >
          <span
            className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-500 lg:text-3xl ${
              onHero && !showSolid ? "text-white" : "text-primary"
            }`}
          >
            Alltagsteam
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${
              onHero && !showSolid ? "text-white/70" : "text-muted"
            }`}
          >
            Alltagshilfe
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                onHero && !showSolid
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/80 hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              onHero && !showSolid
                ? "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                : "bg-primary text-white hover:bg-primary-light hover:shadow-lg"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
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
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              onHero && !showSolid ? "bg-white" : "bg-primary"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-300 ${
              onHero && !showSolid ? "bg-white" : "bg-primary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              onHero && !showSolid ? "bg-white" : "bg-primary"
            } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen &&
          (motionEnabled ? (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top))] overflow-y-auto border-t border-border bg-cream px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:hidden"
              aria-label="Mobile Navigation"
            >
              {mobileNavLinks(handleNavClick)}
            </motion.nav>
          ) : (
            <nav
              className="max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top))] overflow-y-auto border-t border-border bg-cream px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:hidden"
              aria-label="Mobile Navigation"
            >
              {mobileNavLinks(handleNavClick)}
            </nav>
          ))}
      </AnimatePresence>
    </header>
  );
}
