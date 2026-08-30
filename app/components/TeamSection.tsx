import Image from "next/image";

const values = [
  {
    title: "Persönlich",
    text: "Wir begegnen jedem Menschen mit Respekt und auf Augenhöhe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Zuverlässig",
    text: "Auf Absprachen und unsere Unterstützung können Sie sich verlassen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mit Herz",
    text: "Wir möchten nicht nur Aufgaben erledigen, sondern den Alltag spürbar erleichtern.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
];

const qualifications = [
  "Qualifikation gemäß §45a SGB XI (Entlastungsleistungen)",
  "Regelmäßige Schulungen und Weiterbildungen",
  "Erfahrung, Einfühlungsvermögen und ein hohes Maß an Verantwortung",
  "Verschwiegenheit und ein respektvoller Umgang sind für uns selbstverständlich",
];

function TeamHeartGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      aria-hidden
    >
      <path d="M80 118s-28-19-28-48a22 22 0 0 1 28-14 22 22 0 0 1 28 14c0 29-28 48-28 48Z" />
      <circle cx="62" cy="58" r="4" />
      <circle cx="98" cy="58" r="4" />
      <path d="M68 72c4 4 10 6 12 6s8-2 12-6" strokeLinecap="round" />
      <path d="M118 38c8 6 14 14 16 24" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="128" cy="28" rx="8" ry="4" transform="rotate(20 128 28)" opacity="0.7" />
      <ellipse cx="138" cy="36" rx="6" ry="3" transform="rotate(-10 138 36)" opacity="0.6" />
    </svg>
  );
}

function QualificationBadge() {
  return (
    <div className="relative mx-auto flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#1a4d3e" strokeWidth="1.5" opacity="0.25" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#1a4d3e" strokeWidth="1" opacity="0.2" />
        <defs>
          <path
            id="team-badge-top"
            d="M 100,24 A 76,76 0 1,1 99.9,24"
            fill="none"
          />
          <path
            id="team-badge-bottom"
            d="M 100,176 A 76,76 0 1,0 100.1,176"
            fill="none"
          />
        </defs>
        <text fill="#1a4d3e" fontSize="11" fontWeight="700" letterSpacing="2.5">
          <textPath href="#team-badge-top" startOffset="50%" textAnchor="middle">
            QUALIFIZIERT & GEPRÜFT
          </textPath>
        </text>
        <text fill="#1a4d3e" fontSize="9" fontWeight="600" letterSpacing="2" opacity="0.85">
          <textPath href="#team-badge-bottom" startOffset="50%" textAnchor="middle">
            FACHKUNDIG & ZUVERLÄSSIG
          </textPath>
        </text>
      </svg>
      <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white sm:h-24 sm:w-24">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden>
          <path d="m6 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-20 bg-cream">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/team-section.jpg"
          alt="Das AlltagsTeam – engagierte Mitarbeitende"
          fill
          className="object-cover object-[60%_center]"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="bg-primary text-white">
        <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b4904d] sm:text-xs">
                UNSER TEAM
              </p>
              <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] sm:mt-4 sm:text-4xl lg:text-5xl">
                Menschen, die mit Herz unterstützen.
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/85 sm:mt-6 sm:text-base">
                <p>
                  Bei AlltagsTeam geht es um mehr als praktische Hilfe. Es geht um
                  Menschen, die zuhören, mitdenken und verlässlich an Ihrer Seite sind.
                </p>
                <p>
                  Unsere Mitarbeitenden unterstützen Sie persönlich und respektvoll in
                  Ihrem gewohnten Umfeld – mit Zeit, Aufmerksamkeit und einem offenen Ohr.
                </p>
              </div>
            </div>
            <div className="hidden justify-center lg:flex">
              <TeamHeartGraphic className="h-40 w-44 text-[#b4904d]/90 xl:h-48 xl:w-52" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 sm:py-12 lg:py-14">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-border/50 bg-white px-5 py-6 text-center shadow-sm sm:px-6 sm:py-8"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary">
                <span className="h-5 w-5">{value.icon}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary sm:text-xl">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {value.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          <QualificationBadge />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b4904d] sm:text-xs">
              QUALIFIZIERT & GEPRÜFT
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-primary sm:mt-4 sm:text-3xl">
              Qualität, auf die Sie vertrauen können.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
              Unsere Mitarbeitenden sind sorgfältig ausgewählt, geschult und
              fachlich qualifiziert.
            </p>
            <ul className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden>
                      <path d="m5 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl bg-[#e8ede4] px-5 py-4 sm:mt-12 sm:px-6 sm:py-5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5" aria-hidden>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10v5M12 7h.01" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
            Unsere Leistungen können im Rahmen der Entlastungsleistungen nach §45b
            SGB XI über die Pflegekasse abgerechnet werden.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 rounded-2xl bg-primary px-6 py-5 text-center text-white sm:mt-12 sm:px-8 sm:py-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0 text-white/90" aria-hidden>
            <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
          </svg>
          <p className="font-display text-lg font-semibold sm:text-xl">
            Vertrauen entsteht dort, wo man sich gut aufgehoben fühlt.
          </p>
        </div>
      </div>
    </section>
  );
}
