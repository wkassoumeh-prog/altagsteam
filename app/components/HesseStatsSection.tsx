import FadeIn from "./FadeIn";
import FadeInGroup from "./FadeInGroup";

type LocationStat = {
  city: string;
  region: string;
  customers: number;
  hoursPerMonth: number;
  highlight: string;
};

const locations: LocationStat[] = [
  {
    city: "Marburg",
    region: "Landkreis Marburg-Biedenkopf",
    customers: 48,
    hoursPerMonth: 620,
    highlight: "Unser Stammsitz – anerkannt nach §45 SGB XI",
  },
  {
    city: "Gießen",
    region: "Mittelhessen",
    customers: 31,
    hoursPerMonth: 410,
    highlight: "Regelmäßige Haushalts- und Begleitungsleistungen",
  },
  {
    city: "Frankfurt am Main",
    region: "Südhessen",
    customers: 22,
    hoursPerMonth: 290,
    highlight: "Unterstützung für Senioren und Angehörige",
  },
  {
    city: "Wiesbaden",
    region: "Südhessen",
    customers: 18,
    hoursPerMonth: 245,
    highlight: "Flexible Termine auch am Wochenende",
  },
  {
    city: "Kassel",
    region: "Nordhessen",
    customers: 26,
    hoursPerMonth: 355,
    highlight: "Entlastung durch Entlastungsbetrag abrechenbar",
  },
  {
    city: "Darmstadt",
    region: "Südhessen",
    customers: 19,
    hoursPerMonth: 260,
    highlight: "Betreuung und Haushaltshilfe aus einer Hand",
  },
  {
    city: "Fulda",
    region: "Osthessen",
    customers: 14,
    hoursPerMonth: 185,
    highlight: "Persönliche Ansprechpartner vor Ort",
  },
  {
    city: "Limburg",
    region: "Mittelhessen",
    customers: 12,
    hoursPerMonth: 160,
    highlight: "Kurze Anfahrtswege, schnelle Verfügbarkeit",
  },
];

const totals = {
  customers: locations.reduce((sum, loc) => sum + loc.customers, 0),
  hoursPerMonth: locations.reduce((sum, loc) => sum + loc.hoursPerMonth, 0),
  cities: locations.length,
  satisfaction: 97,
};

export default function HesseStatsSection() {
  return (
    <section
      id="region"
      className="min-h-dvh w-full bg-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <FadeInGroup staggerMs={70} duration={550}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Einsatzgebiet
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Alltagsteam in ganz Hessen – Zahlen, die Vertrauen schaffen
          </h2>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            Von Marburg bis Frankfurt, von Kassel bis Darmstadt: Wir unterstützen
            Pflegebedürftige und Angehörige an vielen Standorten in Hessen mit
            herzlicher Alltagshilfe.
          </p>
        </FadeInGroup>

        <FadeInGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerMs={90}
          duration={550}
        >
          <div className="rounded-2xl border border-border bg-white px-6 py-8">
            <p className="text-4xl font-bold text-primary">{totals.customers}+</p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Betreute Kunden
            </p>
            <p className="mt-1 text-sm text-muted">in ganz Hessen</p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-6 py-8">
            <p className="text-4xl font-bold text-primary">
              {totals.hoursPerMonth.toLocaleString("de-DE")}
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Stunden pro Monat
            </p>
            <p className="mt-1 text-sm text-muted">Alltagshilfe vor Ort</p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-6 py-8">
            <p className="text-4xl font-bold text-primary">{totals.cities}</p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Standorte
            </p>
            <p className="mt-1 text-sm text-muted">in Hessen aktiv</p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-6 py-8">
            <p className="text-4xl font-bold text-primary">
              {totals.satisfaction}%
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Kundenzufriedenheit
            </p>
            <p className="mt-1 text-sm text-muted">laut Rückmeldungen 2025</p>
          </div>
        </FadeInGroup>

        <div className="mt-16">
          <FadeInGroup staggerMs={70} duration={550}>
            <h3 className="text-xl font-bold text-primary">
              Unsere Präsenz in Hessen
            </h3>
            <p className="mt-2 text-sm text-muted">
              Ausgewählte Standorte mit aktuellen Kennzahlen
            </p>
          </FadeInGroup>

          <FadeInGroup
            as="ul"
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerMs={70}
            duration={550}
            threshold={0.08}
          >
            {locations.map((loc) => (
              <li key={loc.city}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold text-primary">{loc.city}</p>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-accent">
                        {loc.region}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {loc.customers} Kunden
                    </span>
                  </div>

                  <div className="mt-5 border-l-4 border-accent pl-4">
                    <p className="text-2xl font-bold text-primary">
                      {loc.hoursPerMonth}
                    </p>
                    <p className="text-sm text-muted">Stunden/Monat</p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {loc.highlight}
                  </p>
                </div>
              </li>
            ))}
          </FadeInGroup>
        </div>

        <FadeIn delay={100} duration={550}>
          <p className="mt-12 text-center text-sm text-muted">
            Ihr Ort ist nicht dabei?{" "}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Sprechen Sie uns an
            </a>{" "}
            – wir prüfen gerne, ob wir auch bei Ihnen helfen können.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
