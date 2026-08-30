import Image from "next/image";

const stats = [
  {
    value: "190+",
    label: "betreute Kundinnen und Kunden",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "2.525+",
    label: "Unterstützungsstunden im Monat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Hessenweit",
    label: "für Sie im Einsatz",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
];

const cities = [
  {
    name: "Marburg",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 34V18l6-6h20l6 6v16" />
        <path d="M14 34V24h6v10M28 34V24h6v10" />
        <path d="M8 34h32" />
      </svg>
    ),
  },
  {
    name: "Gießen",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M24 8v28M18 14h12M16 36h16" />
        <path d="M20 8h8l2 6H18l2-6Z" />
      </svg>
    ),
  },
  {
    name: "Wetzlar",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M10 34V20l14-10 14 10v14H10Z" />
        <path d="M18 34v-8h12v8" />
      </svg>
    ),
  },
  {
    name: "Frankfurt",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M10 34V22h6v12M18 34V16h4v18M26 34V12h4v22M34 34V20h4v14" />
        <path d="M8 34h32" />
      </svg>
    ),
  },
  {
    name: "Kassel",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M24 6v28M18 12l6-6 6 6" />
        <path d="M14 34h20M16 34V22h16v12" />
      </svg>
    ),
  },
  {
    name: "weitere Regionen",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="14" cy="24" r="2" fill="currentColor" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <circle cx="34" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function HesseStatsSection() {
  return (
    <section id="region" className="scroll-mt-20 bg-[#faf8f9]">
      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs">
              EINSATZGEBIET
            </p>
            <h2 className="font-display mt-4 text-[2rem] font-semibold leading-[1.12] text-primary sm:text-4xl lg:text-5xl">
              In ganz Hessen für Sie da.
            </h2>
            <div className="mt-4 h-px w-12 bg-accent/70" />
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/85 sm:text-base">
              Wir sind hessenweit für Menschen da, die sich Unterstützung und
              Entlastung im Alltag wünschen – persönlich, zuverlässig und nah.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                  <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-primary sm:text-base">
                Mit Herz. Für Menschen in Hessen.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[5/4] w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/hessen-map.jpg"
              alt="Einsatzgebiet AlltagsTeam in Hessen – Karte mit Marburg und weiteren Standorten"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-white px-6 py-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary">
                <span className="h-6 w-6">{stat.icon}</span>
              </div>
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-cream px-5 py-8 sm:mt-10 sm:px-8 sm:py-10">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-12 sm:w-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl">
                Von Nord- bis Südhessen
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">
                Wir sind in vielen Regionen für Sie unterwegs.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-3">
            {cities.map((city) => (
              <div key={city.name} className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center text-primary sm:h-14 sm:w-14">
                  {city.icon}
                </div>
                <p className="text-[11px] font-semibold leading-tight text-primary sm:text-xs">
                  {city.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-cream sm:mt-8">
          <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-8">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xs sm:mx-0 sm:max-w-none sm:min-h-[12rem]">
              <Image
                src="/images/WhatsApp Image 2026-08-26 at 11.25.16 PM - Copy.JPG"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 320px"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-border/40 sm:rounded-none sm:ring-0" />
            </div>

            <div className="px-5 pb-8 sm:px-8 sm:py-8 sm:pb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
                    <path d="M4 14v4a2 2 0 0 0 2 2h2M20 14v4a2 2 0 0 1-2 2h-2" strokeLinecap="round" />
                    <path d="M6 10a6 6 0 0 1 12 0v4H6v-4Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl">
                    Ist Ihr Wohnort dabei?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    Wir prüfen gerne persönlich, ob wir Sie auch in Ihrer Region
                    unterstützen können.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Jetzt unverbindlich anfragen
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
