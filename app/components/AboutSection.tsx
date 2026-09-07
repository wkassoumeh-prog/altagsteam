import Image from "next/image";

const highlights = [
  {
    title: "Anerkannt durch den Landkreis Marburg-Biedenkopf",
    text: "Als anerkannter Anbieter erfüllen wir die Voraussetzungen für Unterstützungsangebote im Alltag.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Persönlich. Verlässlich. Auf Augenhöhe.",
    text: "Wir stehen Ihnen mit flexibler und zuverlässiger Unterstützung zur Seite – einfühlsam, kompetent und immer an Ihrer Seite.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: "Persönlich beraten lassen",
    text: "Wir nehmen uns Zeit für Ihr Anliegen und finden gemeinsam die passende Unterstützung für Sie.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    title: "Unterstützung, die zu Ihnen passt",
    text: "Individuelle Hilfe im Alltag – flexibel, zuverlässig und auf Ihre Bedürfnisse abgestimmt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
  {
    title: "Vertrauen, das bleibt",
    text: "Mit Herz, Erfahrung und Verlässlichkeit sind wir an Ihrer Seite – in Marburg und ganz Hessen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4.5 18c.9-2.4 2.6-4 3.5-4s2.6 1.6 3.5 4M12 18c.9-2.4 2.6-4 3.5-4s2.6 1.6 3.5 4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function FloralAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      aria-hidden
    >
      <path d="M20 90c20-30 35-45 55-55" strokeLinecap="round" />
      <path d="M30 95c15-18 28-28 42-35" strokeLinecap="round" />
      <ellipse cx="78" cy="32" rx="10" ry="5" transform="rotate(-20 78 32)" />
      <ellipse cx="95" cy="40" rx="8" ry="4" transform="rotate(15 95 40)" />
      <ellipse cx="62" cy="42" rx="7" ry="3.5" transform="rotate(-35 62 42)" />
      <path d="M75 35c8 12 12 22 10 34" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="about-viewport-top relative overflow-hidden bg-white pb-10 pt-12 sm:pb-14 sm:pt-16">
        <div className="container mx-auto px-6">
          <div className="about-top-grid grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12 xl:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs">
                ÜBER UNS
              </p>

              <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] text-primary sm:mt-4 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Vertrauen, auf das Sie zählen können.
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-base lg:max-w-xl">
                <p>
                  AlltagsTeam steht für professionelle und persönliche Unterstützung
                  im Alltag – in Marburg und ganz Hessen. Wir begleiten Menschen in
                  ihrem vertrauten Zuhause und entlasten Angehörige dort, wo
                  Unterstützung gebraucht wird.
                </p>
                <p>
                  Dabei stehen Ihre individuellen Bedürfnisse im Mittelpunkt. Mit
                  Einfühlungsvermögen, Verlässlichkeit und Respekt sind wir persönlich
                  für Sie da – auf Augenhöhe und mit Zeit für das, was Ihnen wichtig ist.
                </p>
              </div>

              <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 lg:max-w-xl">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-14 sm:w-14">
                      <span className="h-5 w-5 sm:h-6 sm:w-6">{item.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold leading-snug text-primary sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:justify-self-end">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] shadow-sm sm:rounded-3xl">
                <Image
                  src="/images/wir-sind-da-v3.png"
                  alt="Das Alltagsteam – Wir sind da"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
              <FloralAccent className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-32 text-accent/35 sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-36" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-wave-top about-viewport-bottom relative bg-cream pb-14 pt-20 sm:pb-20 sm:pt-24">
        <FloralAccent className="pointer-events-none absolute bottom-8 left-6 h-20 w-28 text-accent/30 sm:bottom-12 sm:left-10 sm:h-24 sm:w-32" />
        <FloralAccent className="pointer-events-none absolute bottom-6 right-6 h-20 w-28 scale-x-[-1] text-accent/30 sm:bottom-10 sm:right-10 sm:h-24 sm:w-32" />

        <div className="container relative z-10 mx-auto px-6">
          <h3 className="font-display text-center text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl">
            Gemeinsam für Ihren Alltag da.
          </h3>

          <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-14 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`text-center ${index > 0 ? "sm:border-l sm:border-border/60 sm:px-4 lg:px-8" : ""}`}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="h-6 w-6">{pillar.icon}</span>
                </div>
                <h4 className="font-display text-base font-semibold text-primary sm:text-lg">
                  {pillar.title}
                </h4>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted sm:text-[15px]">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-14">
            <a
              href="#leistungen"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white sm:px-10 sm:py-4 sm:text-base"
            >
              Unsere Leistungen entdecken
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
