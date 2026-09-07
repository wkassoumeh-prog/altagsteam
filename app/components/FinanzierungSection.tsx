import Image from "next/image";

const supportCards = [
  {
    title: "Entlastungsbetrag nach § 45b SGB XI",
    body: (
      <>
        Pflegebedürftige in häuslicher Pflege haben Anspruch auf bis zu{" "}
        <strong className="font-semibold text-primary">131 € monatlich</strong>{" "}
        für anerkannte Entlastungsangebote – z. B. für haushaltsnahe Unterstützung.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h.01M11 15h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Leistungen der Pflegekasse nutzen",
    body: "Wir erklären Ihnen verständlich, welche Leistungen in Frage kommen, und unterstützen Sie bei Antragstellung und Abrechnung mit Ihrer Pflegekasse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="M9 12h6M12 9v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Persönliche Unterstützung",
    body: "Ob Antrag, Fragen oder nächste Schritte – wir begleiten Sie persönlich und nehmen uns Zeit, bis alles klar ist.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const values = [
  {
    label: "Persönlich & nah",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
  {
    label: "Einfach & verständlich",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Zuverlässig an Ihrer Seite",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
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

function LeafDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="0.75" className={className} aria-hidden>
      <path d="M15 80c25-35 45-50 70-60" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="88" cy="22" rx="12" ry="6" transform="rotate(-15 88 22)" opacity="0.35" />
      <path d="M82 28c6 10 9 18 8 28" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export default function FinanzierungSection() {
  return (
    <section id="finanzierung" className="scroll-mt-20 bg-white">
      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12 xl:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b4904d] sm:text-xs">
              FINANZIERUNG & PFLEGEKASSE
            </p>
            <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] text-primary sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
              Unterstützung, die Ihnen zusteht.
              <GoldHeart className="ml-2 inline-block h-6 w-6 align-[-0.2em] text-[#b4904d] sm:h-7 sm:w-7" />
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:mt-6 sm:text-base lg:max-w-xl">
              <p>
                Viele Leistungen der Alltagshilfe können bei entsprechendem Anspruch
                über die Pflegekasse finanziert werden.
              </p>
              <p>
                Wir erklären Ihnen verständlich, welche Möglichkeiten bestehen, und
                unterstützen Sie bei den nächsten Schritten.
              </p>
            </div>
            <div className="mt-8 flex gap-4 rounded-2xl bg-[#f5f0e8] px-5 py-5 sm:px-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                  <circle cx="12" cy="8" r="3" />
                  <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                <strong className="font-semibold text-primary">Wir sind für Sie da.</strong>{" "}
                Persönlich, herzlich und mit Zeit für Ihre Fragen.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto lg:mr-0 lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[11/10] w-full overflow-hidden rounded-[1.75rem] sm:rounded-3xl">
              <Image
                src="/images/finanzierung-hero-new.png"
                alt="Persönliche Beratung zu Finanzierung und Pflegekasse"
                fill
                quality={95}
                className="object-cover object-[50%_38%] scale-[0.8]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 text-center sm:mt-16 lg:mt-20">
          <h3 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
            Finanzielle Unterstützung im Überblick
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
            Je nach Pflegegrad und persönlicher Situation stehen Ihnen verschiedene
            Leistungen zu, die Ihnen den Alltag erleichtern und mehr Entlastung
            ermöglichen.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {supportCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl bg-[#f5f0e8] px-5 py-7 text-center sm:px-6 sm:py-8"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <span className="h-5 w-5">{card.icon}</span>
              </div>
              <h4 className="font-display mt-5 text-lg font-semibold leading-snug text-primary sm:text-xl">
                {card.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-[#f5f0e8] px-5 py-5 sm:mt-12 sm:px-8 sm:py-6">
          <div className="relative z-10 flex items-start gap-4 sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
              <GoldHeart className="h-5 w-5 text-[#b4904d]" />
            </span>
            <p className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
              <strong className="font-semibold text-primary">Gut zu wissen.</strong>{" "}
              Die Leistungen sind zweckgebunden und setzen eine entsprechende
              Bewilligung durch die Pflegekasse voraus.
            </p>
          </div>
          <LeafDecor className="pointer-events-none absolute bottom-0 right-4 h-20 w-24 text-[#b4904d]/30 sm:right-8" />
        </div>

        <div className="mt-10 rounded-3xl bg-[#f5f0e8] px-5 py-6 sm:mt-12 sm:px-8 sm:py-7">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
                  <path d="M12 14v2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                Wir beraten Sie persönlich und unverbindlich – rufen Sie uns an
                oder schreiben Sie uns.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base"
            >
              Möglichkeiten prüfen
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 grid divide-y divide-border/70 sm:mt-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {values.map((value) => (
            <div key={value.label} className="flex items-center justify-center gap-3 px-4 py-5 sm:py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="h-4 w-4">{value.icon}</span>
              </span>
              <p className="text-sm font-medium text-primary">{value.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-foreground/75 sm:mt-12">
          <GoldHeart className="inline-block h-4 w-4 text-[#b4904d]" />
          <span>Noch Fragen? Wir sind gerne für Sie da.</span>
          <span className="hidden sm:inline">·</span>
          <a href="tel:+4964132051318" className="font-semibold text-primary hover:opacity-80">
            Telefon 0641 32051318
          </a>
          <span>·</span>
          <a href="mailto:info@alltagsteam.com" className="font-semibold text-primary hover:opacity-80">
            E-Mail info@alltagsteam.com
          </a>
        </p>
      </div>
    </section>
  );
}
