import Image from "next/image";

const categoryColors = {
  haushalt: "#1a4d3e",
  einkaufen: "#e87722",
  begleitung: "#7a8f6e",
  betreuung: "#c4a035",
  entlastung: "#3d8b8b",
} as const;

const navItems = [
  {
    id: "haushalt",
    label: "HAUSHALT & ZUHAUSE",
    color: categoryColors.haushalt,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
        <path d="M12 10.5s-1.5 1-2.5 2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "einkaufen",
    label: "EINKAUFEN & ERLEDIGUNGEN",
    color: categoryColors.einkaufen,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M6 6h15l-1.5 9h-12L6 6Z" />
        <path d="M6 6 5 3H2" strokeLinecap="round" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
  },
  {
    id: "begleitung",
    label: "BEGLEITUNG IM ALLTAG",
    color: categoryColors.begleitung,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M5 18c1-2.5 2.8-4 3-4s2 1.5 3 4M13 18c1-2.5 2.8-4 3-4s2 1.5 3 4" strokeLinecap="round" />
        <path d="M10 14l2 2 2-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "betreuung",
    label: "BETREUUNG & GESELLSCHAFT",
    color: categoryColors.betreuung,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        <path d="M12 10.5s-.5 1-1.5 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "entlastung",
    label: "ENTLASTUNG FÜR ANGEHÖRIGE",
    color: categoryColors.entlastung,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 12c-1.5-1-2.5-2.5-2.5-4a2.5 2.5 0 0 1 5 0c0 1.5-1 3-2.5 4Z" />
        <path d="M16 12c-1.5-1-2.5-2.5-2.5-4a2.5 2.5 0 0 1 5 0c0 1.5-1 3-2.5 4Z" />
        <path d="M12 20.5s-1.5-2-3.5-3.5c-1.5-.8-2.5-2-2.5-3.5a3 3 0 0 1 6 0c0 1.5-1 2.7-2.5 3.5-2 1.5-3.5 3.5-3.5 3.5Z" />
      </svg>
    ),
  },
];

const services = [
  {
    id: "haushalt",
    title: "Haushalt & Zuhause",
    color: categoryColors.haushalt,
    image: "/images/cleaning.jpg",
    alt: "Reinigung und Haushaltshilfe",
    description: "Wir unterstützen Sie bei allen haushaltsnahen Aufgaben.",
    icon: navItems[0].icon,
    features: [
      {
        label: "Reinigung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z" />
          </svg>
        ),
      },
      {
        label: "Wäsche & Betten",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="M4 10h16" />
          </svg>
        ),
      },
      {
        label: "Mahlzeitenunterstützung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M6 4v8M8 4v8M6 8h2" strokeLinecap="round" />
            <path d="M14 4v16M16 8v8" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "einkaufen",
    title: "Einkaufen & Erledigungen",
    color: categoryColors.einkaufen,
    image: "/images/einkaufen-erledigungen.png",
    alt: "Alltagshelferin übergibt einer Seniorin ihre Einkäufe",
    description: "Wir übernehmen Besorgungen und organisatorische Unterstützung.",
    icon: navItems[1].icon,
    features: [
      {
        label: "Einkäufe",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M6 6h15l-1.5 9h-12L6 6Z" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        ),
      },
      {
        label: "Besorgungen",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "organisatorische Unterstützung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="5" y="4" width="14" height="16" rx="2" />
            <path d="M9 9h6M9 13h6M9 17h4" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "begleitung",
    title: "Begleitung im Alltag",
    color: categoryColors.begleitung,
    image: "/images/team.jpg",
    alt: "Begleitung im Alltag",
    description: "Wir begleiten Sie zu Terminen und Aktivitäten – drinnen und draußen.",
    icon: navItems[2].icon,
    features: [
      {
        label: "Arzttermine",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Spaziergänge & Ausflüge",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M12 22V12M12 12c-2 0-3.5-1.5-3.5-3.5S10 5 12 5s3.5 1.5 3.5 3.5S14 12 12 12Z" />
            <path d="M8 22h8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Behördengänge",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M4 20V10l8-6 8 6v10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "betreuung",
    title: "Betreuung & Gesellschaft",
    color: categoryColors.betreuung,
    image: "/images/company.jpg",
    alt: "Betreuung und Gesellschaft",
    description: "Gemeinsame Zeit, Gespräche und Aktivitäten, die Freude bereiten.",
    icon: navItems[3].icon,
    features: [
      {
        label: "Gespräche",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
          </svg>
        ),
      },
      {
        label: "gemeinsame Aktivitäten",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <circle cx="8" cy="8" r="2" />
            <circle cx="16" cy="8" r="2" />
            <path d="M5 18c1-2 2.5-3 3-3s2 1 3 3M13 18c1-2 2.5-3 3-3s2 1 3 3" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "individuelle Beschäftigung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M5 4h14v16H5V4Z" />
            <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "entlastung",
    title: "Entlastung für Angehörige",
    color: categoryColors.entlastung,
    image: "/images/laundry.jpg",
    alt: "Entlastung für Angehörige",
    description: "Wir entlasten Sie, damit Sie Kraft tanken und Zeit für sich haben.",
    icon: navItems[4].icon,
    features: [
      {
        label: "stundenweise Entlastung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l3 2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "verlässliche Betreuung",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <circle cx="12" cy="8" r="3" />
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Zeit zum Durchatmen",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
          </svg>
        ),
      },
    ],
  },
];

function LeafDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      className={className}
      aria-hidden
    >
      <path d="M15 80c25-35 45-50 70-60" strokeLinecap="round" opacity="0.5" />
      <path d="M25 85c18-22 32-32 48-38" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="88" cy="22" rx="12" ry="6" transform="rotate(-15 88 22)" opacity="0.35" />
      <ellipse cx="72" cy="30" rx="9" ry="4.5" transform="rotate(-40 72 30)" opacity="0.3" />
      <ellipse cx="98" cy="35" rx="8" ry="4" transform="rotate(20 98 35)" opacity="0.3" />
      <path d="M82 28c6 10 9 18 8 28" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LeistungenSection() {
  return (
    <section id="leistungen" className="relative scroll-mt-20 overflow-hidden bg-[#faf8f9]">
      <LeafDecor className="pointer-events-none absolute left-0 top-8 h-24 w-28 text-primary/25 sm:h-32 sm:w-36" />
      <LeafDecor className="pointer-events-none absolute right-0 top-8 h-24 w-28 scale-x-[-1] text-primary/25 sm:h-32 sm:w-36" />

      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <header className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs">
            UNSERE LEISTUNGEN
          </p>
          <h2 className="font-display mt-4 text-[2rem] font-semibold leading-[1.12] text-primary sm:text-4xl lg:text-[2.75rem]">
            Unterstützung im Alltag, die zu Ihnen passt.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
            Wir helfen Ihnen genau dort, wo Sie Entlastung brauchen – persönlich,
            zuverlässig und mit Herz.
          </p>
        </header>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-4">
          {services.map((service) => (
            <article
              key={service.id}
              id={`leistung-${service.id}`}
              className="w-[72vw] shrink-0 scroll-mt-24 overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm sm:w-auto"
            >
              <div className="relative h-36 sm:h-32 lg:h-28">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 45vw, 20vw"
                />
              </div>
              <div className="relative px-4 pb-5 pt-9 text-center">
                <div
                  className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white shadow-sm"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  <span className="h-5 w-5">{service.icon}</span>
                </div>
                <h3
                  className="font-display text-lg font-semibold leading-tight sm:text-xl"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/75 sm:text-[13px]">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2.5 text-left">
                  {service.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-2.5 text-xs text-foreground/80 sm:text-[13px]"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#faf8f9]"
                        style={{ color: service.color }}
                      >
                        <span className="h-3.5 w-3.5">{feature.icon}</span>
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="#leistungen-finanz"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white sm:px-10 sm:py-4 sm:text-base"
          >
            Alle Leistungen entdecken
            <ArrowIcon />
          </a>
        </div>

        <div
          id="leistungen-finanz"
          className="mt-10 scroll-mt-24 rounded-3xl bg-[#e8ede4] px-5 py-8 sm:mt-12 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="flex gap-4 sm:gap-5 lg:max-w-2xl lg:flex-1">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-16 sm:w-16">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden>
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18" />
                <path d="M7 15h.01M11 15h2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70 sm:text-xs">
                FINANZIELLE UNTERSTÜTZUNG
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold text-primary sm:text-2xl">
                Bis zu 131 € monatlicher Entlastungsbetrag
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                Pflegebedürftige in häuslicher Pflege können den Entlastungsbetrag
                für anerkannte Angebote zur Unterstützung im Alltag einsetzen.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-4 sm:mt-0 lg:max-w-xs lg:shrink-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-sm leading-relaxed text-foreground/85">
              Anerkanntes Angebot zur Unterstützung im Alltag nach § 45a SGB XI
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-white sm:mt-12">
          <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-0">
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[280px]">
              <Image
                src="/images/hero.jpg"
                alt="Persönliche Beratung bei AlltagsTeam"
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 45vw"
              />
            </div>
            <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <svg
                viewBox="0 0 120 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="pointer-events-none absolute right-6 top-6 h-20 w-24 text-primary/10 sm:right-10 sm:top-8 sm:h-28 sm:w-32"
                aria-hidden
              >
                <path d="M60 85s-20-15-20-35a15 15 0 0 1 20-10 15 15 0 0 1 20 10c0 20-20 35-20 35Z" />
              </svg>
              <h3 className="font-display relative text-2xl font-semibold leading-snug text-primary sm:text-3xl">
                Persönlich beraten. Passgenau unterstützen.
              </h3>
              <p className="relative mt-4 max-w-md text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                Wir nehmen uns Zeit für Sie und finden gemeinsam die Unterstützung,
                die zu Ihren Bedürfnissen passt.
              </p>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base"
              >
                Jetzt unverbindlich kontaktieren
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
