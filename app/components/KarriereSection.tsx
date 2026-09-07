import Image from "next/image";

const perks = [
  {
    label: "Sinnvolle & wertschätzende Tätigkeit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
  {
    label: "Flexible Arbeitszeiten",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Persönliche Einarbeitung & Unterstützung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Ein herzliches und zuverlässiges Team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 12h8M6 16c1-2 2.5-3 3-3s2 1 3 3M15 16c1-2 2.5-3 3-3s2 1 3 3" strokeLinecap="round" />
        <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: "Sinnvoll & erfüllend",
    text: "Sie machen jeden Tag einen echten Unterschied im Leben anderer Menschen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3c-2 4-5 6-5 10a5 5 0 0 0 10 0c0-4-3-6-5-10Z" />
      </svg>
    ),
  },
  {
    title: "Flexibel & familienfreundlich",
    text: "Arbeitszeiten, die zu Ihrem Leben passen – planbar und fair.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wertschätzung & Respekt",
    text: "Ihre Arbeit wird gesehen – mit Respekt, Dankbarkeit und offenem Miteinander.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
  {
    title: "Team & Zusammenhalt",
    text: "Ein warmes Team, auf das Sie zählen können – persönlich und verlässlich.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4.5 18c.9-2.4 2.6-4 3.5-4s2.6 1.6 3.5 4M12 18c.9-2.4 2.6-4 3.5-4s2.6 1.6 3.5 4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function GoldHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
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

export default function KarriereSection() {
  return (
    <section id="karriere" className="scroll-mt-20 bg-[#faf8f9]">
      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b4904d] sm:text-xs">
              KARRIERE
              <GoldHeart className="h-3.5 w-3.5" />
            </p>
            <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] text-primary sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
              Mit Herz arbeiten.
              <br />
              <span className="italic">Im Alltag etwas bewegen.</span>
              <GoldHeart className="ml-2 inline-block h-6 w-6 align-[-0.2em] text-[#b4904d] sm:h-7 sm:w-7" />
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:mt-6 sm:text-base lg:max-w-xl">
              Sie möchten Menschen im Alltag unterstützen – mit Herz, Zuverlässigkeit
              und echter Nähe? Dann freuen wir uns, Sie kennenzulernen. Werden Sie
              Teil eines Teams, das täglich etwas bewegt.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map((perk) => (
                <li key={perk.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-[#b4904d]">
                    <span className="h-5 w-5">{perk.icon}</span>
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                    {perk.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
            >
              <GoldHeart className="h-4 w-4 text-white/90" />
              Jetzt bei uns bewerben!
              <ArrowIcon />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-xl lg:justify-self-end">
            <div className="relative aspect-[4/3.2] sm:aspect-[4/3.1] w-full overflow-hidden rounded-[1.75rem] sm:rounded-3xl">
              <Image
                src="/images/karriere-hero.jpg"
                alt="Das AlltagsTeam – engagierte Mitarbeitende"
                fill
                priority
                quality={95}
                className="object-cover object-[80%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -left-2 top-8 max-w-[180px] rounded-full bg-[#f5f0e8] px-4 py-3 text-center shadow-sm sm:-left-4 sm:max-w-[200px] sm:px-5 sm:py-3.5">
              <p className="font-display text-sm font-semibold leading-snug text-primary sm:text-base">
                Bei uns zählt der Mensch.
              </p>
            </div>
            <div className="absolute -bottom-3 right-2 max-w-[220px] rounded-2xl bg-white px-4 py-3 shadow-md sm:-bottom-4 sm:right-4 sm:max-w-[240px] sm:px-5 sm:py-4">
              <p className="text-sm font-medium leading-snug text-primary sm:text-[15px]">
                Gemeinsam stark für unsere Kunden.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border/60 pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="h-5 w-5">{pillar.icon}</span>
              </div>
              <h3 className="font-display mt-4 text-base font-semibold text-primary sm:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        <p className="font-display mt-12 text-center text-lg italic text-primary sm:mt-14 sm:text-xl">
          Alltag erleichtern. Menschen stärken.
          <GoldHeart className="ml-1.5 inline-block h-4 w-4 align-[-0.1em] text-[#b4904d]" />
        </p>
      </div>
    </section>
  );
}
