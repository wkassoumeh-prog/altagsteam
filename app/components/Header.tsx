"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSiteMotion } from "./useSiteMotion";
import {
  FLIPPING_LOGOS,
  FLIPPING_LOGO_CONTAINER_CLASS,
} from "./flippingLogoConfig";

const DEFAULT_LOGO = FLIPPING_LOGOS[1];

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Finanzierung", href: "#finanzierung" },
  { label: "Einsatzgebiet", href: "#region" },
  { label: "Team", href: "#team" },
  { label: "Karriere", href: "#karriere" },
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
        className="mt-2 rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-light"
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
  const onHeroTransparent = onHero && !showSolid;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href, motionEnabled);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        showSolid
          ? "border-b border-border/60 bg-cream/90 py-3 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6"
      } ${isPastHero && showSolid ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto mt-3 mb-1.5 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            className="group shrink-0"
            onClick={() => handleNavClick("#start")}
            aria-label="Zur Startseite"
          >
            <div className={FLIPPING_LOGO_CONTAINER_CLASS}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={DEFAULT_LOGO.src}
                  alt={DEFAULT_LOGO.alt}
                  width={DEFAULT_LOGO.width}
                  height={DEFAULT_LOGO.height}
                  className={DEFAULT_LOGO.imageClassName}
                  priority
                />
              </div>
            </div>
          </button>
          <div className="flex min-w-0 flex-col">
            <span className="font-display truncate text-[1.43rem] font-bold tracking-tight text-primary sm:text-[1.609rem]">
              Alltags
              <span className="text-accent">Team</span>
            </span>
            <span className="truncate text-[9.9px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">
              GEMEINSAM. MENSCHLICH. NAH.
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                onHeroTransparent
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
              onHeroTransparent
                ? "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                : "bg-accent text-white hover:bg-accent-light hover:shadow-md"
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
          className="-mr-1 flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              onHeroTransparent ? "bg-white" : "bg-primary"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-300 ${
              onHeroTransparent ? "bg-white" : "bg-primary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              onHeroTransparent ? "bg-white" : "bg-primary"
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
