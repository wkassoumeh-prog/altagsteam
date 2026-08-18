import Logo from "./Logo";

const footerLinks = {
  services: [
    { label: "Pflanzenpflege & Alltagshilfe", href: "#gardening" },
    { label: "Reinigung & Pflege", href: "#cleaning" },
    { label: "Betten & Bettwäsche", href: "#laundry" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div>
            <a href="#start" className="inline-block">
              <Logo className="h-20 w-auto brightness-0 invert sm:h-24 lg:h-28" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              Herzliche Unterstützung im Alltag
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Alltagsteam bietet professionelle Unterstützung für
              Pflegebedürftige in Marburg und ganz Hessen. Unser engagiertes
              Team sorgt für eine einfache Haushaltsführung und Betreuung,
              damit der Alltag leichter wird.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Leistungen
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Unternehmen
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 pb-[env(safe-area-inset-bottom)] sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Alltagsteam. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
              aria-label="Datenschutz"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
              aria-label="Impressum"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
