import PhotoFrame from "./PhotoFrame";
import { splitImageSizes } from "./imageSizes";

const boxItems = [
  {
    label: "Einmalhandschuhe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 12V8a2 2 0 0 1 4 0v4" strokeLinecap="round" />
        <path d="M6 12v5a2 2 0 0 0 2 2h1M14 12v5a2 2 0 0 1-2 2h-1M10 12h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Hände- und Flächendesinfektion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="8" y="4" width="8" height="14" rx="2" />
        <path d="M10 8h4M12 4v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Schutzschürzen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 4h8l2 6v10H6V10l2-6Z" />
        <path d="M12 4v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Bettschutzeinlagen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="5" y="8" width="14" height="10" rx="2" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    label: "Medizinische Masken",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 12c2-2 4-3 8-3s6 1 8 3" strokeLinecap="round" />
        <path d="M6 12v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" />
        <path d="M9 9V7M15 9V7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Persönliche Unterstützung",
    text: "Wir nehmen uns Zeit für Ihre Fragen und sind jederzeit für Sie da.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M12 11v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Einfach & unkompliziert",
    text: "Wir unterstützen Sie bei Antrag und Organisation – Sie müssen sich um nichts kümmern.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Regelmäßige Lieferung",
    text: "Ihre Pflegebox erhalten Sie monatlich – zuverlässig und bequem direkt nach Hause.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
        <path d="M16 14h4l1 3H3" strokeLinecap="round" />
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

export default function PflegeboxSection() {
  return (
    <section id="pflegebox" className="scroll-mt-20 bg-cream">
      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b4904d] sm:text-xs">
              PFLEGEHILFSMITTEL
            </p>
            <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] text-primary sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
              Ihre Pflegebox – jeden Monat gut versorgt.
              <GoldHeart className="ml-2 inline-block h-6 w-6 align-[-0.2em] text-[#b4904d] sm:h-7 sm:w-7" />
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:mt-6 sm:text-base lg:max-w-xl">
              Bei Pflegegrad 1–5 können zum Verbrauch bestimmte Pflegehilfsmittel
              im Wert von{" "}
              <strong className="font-semibold text-primary">
                bis zu 42 € monatlich
              </strong>{" "}
              von der Pflegekasse übernommen werden.
            </p>
          </div>

          <div className="relative w-full">
            <PhotoFrame src="/images/pflegebox-box.jpg" alt="AlltagsTeam Pflegebox mit Pflegehilfsmitteln" sizes={splitImageSizes} />
            <div className="mt-4 flex w-fit max-w-full items-center gap-3 rounded-full bg-primary px-4 py-3 text-white shadow-lg sm:px-5 sm:py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#b4904d]">
                <GoldHeart className="h-5 w-5" />
              </span>
              <p className="text-xs font-medium sm:text-sm">
                Wir sind für Sie da – persönlich und zuverlässig.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-3xl bg-[#f5f0e8] px-5 py-7 sm:px-7 sm:py-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                  <circle cx="12" cy="8" r="3" />
                  <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary sm:text-xl">
                  Wir kümmern uns darum – für Sie.
                  <GoldHeart className="ml-1 inline-block h-4 w-4 align-[-0.1em] text-[#b4904d]" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                  Wir unterstützen Sie persönlich bei Antrag und Organisation,
                  damit Sie Ihre Pflegehilfsmittel unkompliziert erhalten.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-4 border-t border-primary/10 pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
                  <path d="M3 8h11v8H3V8Z" />
                  <path d="M14 10h4l3 3v3h-7V10Z" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="17" cy="18" r="1.5" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                Auf <strong className="font-semibold text-primary">Wunsch</strong>{" "}
                kommt Ihre Pflegebox bequem direkt zu Ihnen nach Hause.
              </p>
            </div>

            <p className="font-display mt-6 text-base italic leading-relaxed text-primary sm:text-lg">
              Persönlich begleitet. Einfach organisiert. Bequem zu Ihnen nach Hause.
              <GoldHeart className="ml-1 inline-block h-4 w-4 align-[-0.1em] text-[#b4904d]" />
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-white px-5 py-7 shadow-sm sm:px-7 sm:py-8">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M4 12h16M12 8v-4M9 4h6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl">
                  In Ihrer Pflegebox enthalten
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
                  Praktische Pflegehilfsmittel für den täglichen Bedarf – individuell
                  nach Ihrem Bedarf zusammengestellt.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
              {boxItems.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-cream text-primary sm:h-12 sm:w-12">
                    <span className="h-5 w-5">{item.icon}</span>
                  </div>
                  <p className="mt-2 text-[11px] leading-tight text-foreground/80 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-full bg-[#f0eeeb] px-4 py-2.5 text-center text-xs text-foreground/70 sm:text-sm">
              Die Zusammenstellung erfolgt individuell nach Ihrem Bedarf.
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-primary px-6 py-7 text-white sm:mt-12 sm:px-8 sm:py-8">
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                <path d="M12 3c-2 4-5 6-5 10a5 5 0 0 0 10 0c0-4-3-6-5-10Z" />
                <path d="M12 13v4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-semibold sm:text-2xl">
                Bis zu 42 € monatlich über die Pflegekasse
              </p>
              <p className="mt-1 text-sm text-white/80 sm:text-[15px]">
                Bei erfüllten Voraussetzungen gemäß § 40 Abs. 2 SGB XI.
              </p>
            </div>
          </div>
          <GoldHeart className="pointer-events-none absolute -right-4 top-1/2 h-32 w-32 -translate-y-1/2 text-[#b4904d]/25 sm:h-40 sm:w-40" />
        </div>

        <div className="mt-10 grid divide-y divide-border/70 sm:mt-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="px-2 py-6 text-center first:pl-0 last:pr-0 sm:px-5 sm:py-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="h-5 w-5">{benefit.icon}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {benefit.text}
              </p>
              <GoldHeart className="mx-auto mt-3 h-4 w-4 text-[#b4904d]" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#f5f0e8] px-5 py-6 sm:mt-12 sm:flex-row sm:px-8 sm:py-7">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <GoldHeart className="h-5 w-5 shrink-0 text-[#b4904d]" />
            <p className="text-sm font-medium text-primary sm:text-[15px]">
              Wir beraten Sie persönlich und unverbindlich.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base"
          >
            Pflegebox anfragen
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted sm:max-w-md sm:text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10v5M12 7h.01" strokeLinecap="round" />
            </svg>
            Die Kostenübernahme erfolgt durch die Pflegekasse. Voraussetzung ist
            ein entsprechender Antrag.
          </p>
          <p className="font-display text-right text-base italic text-primary sm:text-lg">
            Alltag erleichtern. Menschen stärken.
            <GoldHeart className="ml-1 inline-block h-4 w-4 align-[-0.1em] text-[#b4904d]" />
          </p>
        </div>
      </div>
    </section>
  );
}
