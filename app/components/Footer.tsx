import Link from "next/link";

const supportLinks = [
  {
    label: "Haushalt & Zuhause",
    href: "/#leistung-haushalt",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
      </svg>
    ),
  },
  {
    label: "Alltagsbegleitung",
    href: "/#leistung-begleitung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Begleitung & Erledigungen",
    href: "/#leistung-einkaufen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M6 6h15l-1.5 9h-12L6 6Z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
  },
  {
    label: "Gesellschaft & Gespräche",
    href: "/#leistung-betreuung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Entlastung für Angehörige",
    href: "/#leistung-entlastung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
];

const companyLinks = [
  { label: "Über uns", href: "/#about" },
  { label: "Pflegebox", href: "/#pflegebox" },
  { label: "Finanzierung", href: "/#finanzierung" },
  { label: "Einsatzgebiet", href: "/#region" },
  { label: "Unser Team", href: "/#team" },
  { label: "Karriere", href: "/#karriere" },
  { label: "Kontakt", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 pb-6 pt-12 sm:pb-8 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="font-display text-2xl font-semibold leading-none text-white">
                Alltags<span className="text-[#b4904d]">Team</span>
              </span>
              <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Alltagshilfe
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Gemeinsam.
              <br />
              Menschlich.
              <br />
              Nah.
            </p>
            <Link
              href="/#about"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#b4904d]/70 px-5 py-2.5 text-sm font-medium text-[#b4904d] transition-colors hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
              </svg>
              Mit Herz. Für Menschen.
            </Link>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b4904d]">
              Unterstützung
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#b4904d]">
                      <span className="h-4 w-4">{link.icon}</span>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b4904d]">
              Alltagsteam
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b4904d]">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href="tel:+4964132051318" className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="text-[#b4904d]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                    </svg>
                  </span>
                  0641 32051318
                </a>
              </li>
              <li>
                <a href="tel:+491792248163" className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="text-[#b4904d]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                      <rect x="8" y="2.5" width="8" height="19" rx="1.8" />
                      <path d="M11 18.5h2" strokeLinecap="round" />
                    </svg>
                  </span>
                  0179 2248163
                </a>
              </li>
              <li>
                <a href="mailto:info@alltagsteam.com" className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="text-[#b4904d]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  info@alltagsteam.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b4904d]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" strokeLinecap="round" />
                  </svg>
                </span>
                Mo – Fr 8:00 – 18:00 Uhr
              </li>
              <li className="flex items-start gap-3 border-t border-white/15 pt-3">
                <span className="mt-0.5 text-[#b4904d]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                </span>
                In ganz Hessen für Sie im Einsatz
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 pb-[env(safe-area-inset-bottom)] sm:mt-12 sm:flex-row">
          <p className="text-center text-xs text-white/55 sm:text-left">
            &copy; {new Date().getFullYear()} AlltagsTeam{" "}
            <span className="mx-1.5 text-white/30">|</span>
            <Link href="/impressum" className="transition-colors hover:text-white/80">
              Impressum
            </Link>
            <span className="mx-1.5 text-white/30">|</span>
            <Link href="/datenschutz" className="transition-colors hover:text-white/80">
              Datenschutz
            </Link>
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M14 8h2.5V5h-2.5C12.57 5 11 6.57 11 8.5V11H8v3h3v7h3v-7h2.6l.4-3H14V8.5c0-.28.22-.5.5-.5Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
