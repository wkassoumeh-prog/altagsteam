import Image from "next/image";

const values = [
  {
    title: "Persönlich",
    text: "Wir nehmen uns Zeit für Ihre Bedürfnisse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Zuverlässig",
    text: "Auf uns können Sie sich verlassen – jeden Tag.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mit Herz",
    text: "Wir begegnen Ihnen mit Respekt und Empathie.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
];

function PlantSprig() {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-28 w-20 text-primary/70 sm:h-36 sm:w-24"
      aria-hidden
    >
      <path d="M60 150V40" strokeLinecap="round" />
      <path d="M60 55C45 48 28 52 22 68" strokeLinecap="round" />
      <path d="M60 55C75 48 92 52 98 68" strokeLinecap="round" />
      <path d="M60 78C42 72 24 78 18 96" strokeLinecap="round" />
      <path d="M60 78C78 72 96 78 102 96" strokeLinecap="round" />
      <path d="M60 102C48 98 34 104 28 118" strokeLinecap="round" />
      <path d="M60 102C72 98 86 104 92 118" strokeLinecap="round" />
      <ellipse cx="22" cy="68" rx="8" ry="4" transform="rotate(-25 22 68)" />
      <ellipse cx="98" cy="68" rx="8" ry="4" transform="rotate(25 98 68)" />
      <ellipse cx="18" cy="96" rx="9" ry="4.5" transform="rotate(-30 18 96)" />
      <ellipse cx="102" cy="96" rx="9" ry="4.5" transform="rotate(30 102 96)" />
    </svg>
  );
}

export default function WelcomeSection() {
  return (
    <section id="welcome" className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-44 sm:h-72 sm:w-56 lg:h-80 lg:w-72">
        <Image
          src="/images/WhatsApp Image 2026-08-26 at 11.25.16 PM - Copy.JPG"
          alt=""
          fill
          className="object-cover object-left opacity-90"
          sizes="(max-width: 640px) 180px, 288px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs">
          WILLKOMMEN BEI ALLTAGSTEAM
        </p>

        <h2 className="font-display mt-4 max-w-md text-[2rem] font-semibold leading-[1.15] text-primary sm:max-w-xl sm:text-4xl lg:text-5xl">
          Ihr Partner für einen leichteren Alltag.
        </h2>

        <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
          <p>
            AlltagsTeam unterstützt Sie und Ihre Angehörigen dort, wo im Alltag
            Entlastung gebraucht wird –{" "}
            <strong className="font-semibold text-primary">
              persönlich, zuverlässig und mit Herz.
            </strong>
          </p>
          <p>
            Ob im Haushalt, bei Erledigungen oder als Begleitung im Alltag: Wir
            nehmen uns Zeit für Ihre Bedürfnisse und sind verlässlich für Sie da.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 divide-x divide-border/70">
          {values.map((value) => (
            <div key={value.title} className="px-2 text-center first:pl-0 last:pr-0 sm:px-4">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-4 sm:h-14 sm:w-14">
                <span className="h-5 w-5 sm:h-6 sm:w-6">{value.icon}</span>
              </div>
              <h3 className="text-sm font-bold text-primary sm:text-base">{value.title}</h3>
              <p className="mt-1.5 text-[10px] leading-relaxed text-foreground/75 sm:mt-2 sm:text-xs">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4 sm:mt-14 sm:gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent sm:h-14 sm:w-14">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden>
              <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-2xl font-semibold leading-snug text-primary sm:text-3xl lg:text-4xl">
              Mehr Entlastung
              <span className="text-accent">.</span> Mehr Zeit
              <span className="text-accent">.</span>
              <br className="sm:hidden" />
              {" "}Mehr Raum für das, was Ihnen wichtig ist.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base"
            >
              AlltagsTeam kennenlernen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="welcome-wave pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40" />
      <div className="pointer-events-none absolute bottom-2 right-4 z-10 sm:bottom-4 sm:right-8">
        <PlantSprig />
      </div>
    </section>
  );
}
