"use client";

import { motionStagger } from "../config/motion";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-20 text-white lg:py-24"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Kontakt
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold leading-tight lg:text-4xl">
              Wir sind für Sie da
            </h2>
          </Reveal>

          <Reveal variant="up-sm" delay={0.2}>
            <p className="mt-6 leading-relaxed text-white/80">
              Ob Haushaltsführung, Pflanzenpflege oder Begleitung zu Terminen –
              unser Team unterstützt Pflegebedürftige und Angehörige in Marburg
              und ganz Hessen. Nehmen Sie noch heute Kontakt mit uns auf.
            </p>
          </Reveal>

          <Reveal variant="scale" delay={0.3}>
            <blockquote className="mt-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm">
              <p className="text-lg italic leading-relaxed text-white/90">
                „Die Unterstützung von Alltagsteam hat unseren Alltag erheblich
                erleichtert. Einfühlsame Betreuung und schnelle Hilfe, die uns
                sehr entlastet hat.“
              </p>
              <footer className="mt-4 text-sm font-semibold text-white/60">
                — Kundenstimme
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                label: "E-Mail",
                value: "info@alltagsteam.com",
                href: "mailto:info@alltagsteam.com",
              },
              {
                label: "Festnetz",
                value: "0641 32051318",
                href: "tel:+4964132051318",
              },
              {
                label: "Mobil",
                value: "+49 179 2248163",
                href: "tel:+491792248163",
              },
              {
                label: "Einsatzgebiet",
                value: "Marburg und ganz Hessen",
                href: undefined,
              },
            ].map((item, i) => (
              <Reveal key={item.label} variant="up-sm" delay={motionStagger(i, 0.15)}>
                <div className="group rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10">
                  <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                    {item.label}
                  </dt>
                  <dd className="mt-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-white transition-colors group-hover:text-accent-light"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white/80">{item.value}</span>
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up-sm" delay={0.4}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@alltagsteam.com"
                className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
              >
                E-Mail senden
              </a>
              <a
                href="tel:+4964132051318"
                className="group rounded-full border border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Jetzt anrufen
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
