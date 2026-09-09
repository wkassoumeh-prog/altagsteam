import Image from "next/image";
import PhotoFrame from "./PhotoFrame";
import { splitImageSizes } from "./imageSizes";
import ContactForm from "./ContactForm";

const contactCards = [
  {
    title: "Telefon",
    subtitle: "Persönlich mit uns sprechen",
    value: "0641 32051318",
    href: "tel:+4964132051318",
    note: "Mo – Fr 8:00 – 18:00 Uhr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    title: "E-Mail",
    subtitle: "Schreiben Sie uns direkt",
    value: "info@alltagsteam.com",
    href: "mailto:info@alltagsteam.com",
    note: "Wir antworten schnellstmöglich.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Einsatzgebiet",
    subtitle: "Für Sie in ganz Hessen da",
    value: "Mehr zu unserem Einsatzgebiet →",
    href: "#region",
    note: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
];

function LeafOverlay({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      className={className}
      aria-hidden
    >
      <path d="M15 80c25-35 45-50 70-60" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="88" cy="22" rx="12" ry="6" transform="rotate(-15 88 22)" opacity="0.45" />
      <ellipse cx="72" cy="30" rx="9" ry="4.5" transform="rotate(-40 72 30)" opacity="0.4" />
      <path d="M82 28c6 10 9 18 8 28" strokeLinecap="round" opacity="0.45" />
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

function ContactIntro() {
  return (
    <>
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent sm:text-xs lg:text-[#b4904d]">
        KONTAKT
      </p>
      <h2 className="font-display mt-3 text-[2rem] font-semibold leading-[1.12] text-white sm:mt-4 sm:text-4xl lg:text-5xl lg:text-primary">
        Wir sind persönlich für Sie da.
      </h2>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base lg:text-foreground/80">
        Sie wünschen sich Unterstützung im Alltag oder möchten wissen, welche
        Leistungen für Sie infrage kommen?
      </p>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base lg:text-foreground/80">
        <strong className="font-semibold text-white lg:text-primary">
          Sprechen Sie mit uns.
        </strong>{" "}
        Wir beraten Sie persönlich, unverbindlich und in Ruhe.
      </p>
    </>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#faf8f9]">
      <div className="bg-primary px-6 py-12 text-white lg:hidden">
        <ContactIntro />
      </div>

      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          <div>
            <ContactIntro />
          </div>

          <div className="relative w-full">
            <PhotoFrame src="/images/company.jpg" alt="Alltagshelferin im persönlichen Gespräch mit einer Seniorin" focalPosition="70% 50%" sizes={splitImageSizes}>
              <LeafOverlay className="pointer-events-none absolute bottom-6 left-5 h-24 w-28 text-white/70" />
              <LeafOverlay className="pointer-events-none absolute right-5 top-5 h-20 w-24 scale-x-[-1] text-white/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </PhotoFrame>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white px-5 py-6 shadow-sm sm:flex-col sm:items-center sm:text-center lg:px-6 lg:py-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary sm:mx-auto">
                <span className="h-5 w-5">{card.icon}</span>
              </div>
              <div className="min-w-0 flex-1 sm:w-full">
                <h3 className="font-semibold text-primary">{card.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{card.subtitle}</p>
                <a
                  href={card.href}
                  className="mt-3 inline-block text-sm font-bold text-primary transition-opacity hover:opacity-80 sm:text-base"
                >
                  {card.value}
                </a>
                {card.note && (
                  <p className="mt-2 text-xs text-muted">{card.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 hidden items-center gap-6 rounded-3xl bg-[#e8ede4] px-6 py-5 lg:flex lg:px-8 lg:py-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
              <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
            </svg>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
            Vertrauen beginnt mit einem Gespräch. Wir nehmen uns Zeit für Ihr
            Anliegen und finden gemeinsam eine Lösung, die zu Ihnen passt.
          </p>
          <div className="relative hidden h-20 w-28 shrink-0 opacity-70 xl:block">
            <Image
              src="/images/hessen-map.jpg"
              alt=""
              fill
              quality={95}
              className="object-contain object-right"
              sizes="112px"
            />
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <a
            href="tel:+4964132051318"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white"
          >
            Persönlich beraten lassen
            <ArrowIcon />
          </a>
        </div>

        <div id="contact-form" className="mx-auto mt-10 max-w-3xl scroll-mt-24 lg:mt-12">
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
              Schreiben Sie uns
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
              Ein paar Angaben genügen. Wir melden uns schnellstmöglich persönlich
              bei Ihnen.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-border/50 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
