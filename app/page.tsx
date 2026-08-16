import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhotoSection from "./components/PhotoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PhotoSection
          id="start"
          image="/images/hero.jpg"
          alt="Alltagsteam – herzliche Unterstützung im Alltag"
          eyebrow="Alltagsteam Marburg"
          title="Herzliche Unterstützung im Alltag"
          subtitle="Professionelle Alltagshilfe für Pflegebedürftige und Angehörige im Landkreis Marburg Biedenkopf."
          imageClassName="object-[70%_35%] sm:object-center"
          priority
        />

        <ContentCard>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Willkommen
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Ihr Partner für entlastenden Alltag
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Alltagsteam bietet professionelle Unterstützung für Pflegebedürftige
            und Angehörige. Unser engagiertes Team sorgt für eine einfache
            Haushaltsführung und Betreuung, damit der Alltag leichter wird.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Vertrauen Sie auf unsere herzliche und kompetente Hilfe – flexibel,
            zuverlässig und anerkannt durch den Landkreis Marburg Biedenkopf.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#gardening"
              className="rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Unsere Leistungen
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary px-8 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </ContentCard>

        <PhotoSection
          id="about"
          image="/images/company.jpg"
          alt="Das Alltagsteam bei der Arbeit"
          eyebrow="Über uns"
          title="Alltagsteam im Marburg Biedenkopf"
          subtitle="Professionelle Unterstützung für Pflegebedürftige und Angehörige – herzlich, kompetent und zuverlässig."
          imageClassName="object-[65%_center] sm:object-center"
        />

        <ContentCard>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Über uns
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Vertrauen durch Anerkennung und Erfahrung
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Alltagsteam bietet professionelle Unterstützung für
            Pflegebedürftige und Angehörige im Landkreis Marburg Biedenkopf.
            Unser engagiertes Team sorgt für eine einfache Haushaltsführung und
            Betreuung, damit der Alltag leichter wird.
          </p>
          <p className="mt-4 font-semibold text-primary">
            Anerkannt durch den Landkreis Marburg Biedenkopf
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Wir stehen Ihnen mit flexibler und zuverlässiger Unterstützung zur
            Seite – einfühlsam, kompetent und immer an Ihrer Seite.
          </p>
        </ContentCard>

        <PhotoSection
          id="gardening"
          image="/images/gardening.jpg"
          alt="Pflanzenpflege und Alltagshilfe"
          eyebrow="Leistungen"
          title="Pflanzenpflege & Alltagshilfe"
          subtitle="Fürsorge für Ihr Zuhause und Ihren Alltag."
        />

        <ContentCard>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Pflanzenpflege
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Fürsorge für Ihr Zuhause
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Wir kümmern uns um Ihre Pflanzen und unterstützen Sie bei
            alltäglichen Aufgaben – damit Sie sich in Ihrem Zuhause wohlfühlen.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Ob regelmäßige Pflanzenpflege oder praktische Hilfe im Haushalt: Wir
            sind an Ihrer Seite und entlasten Sie im Alltag.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">131 €</p>
              <p className="mt-1 text-sm text-muted">
                Entlastungsbetrag monatlich
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">§45</p>
              <p className="mt-1 text-sm text-muted">Anerkannt nach SGB XI</p>
            </div>
          </div>
        </ContentCard>

        <PhotoSection
          id="cleaning"
          image="/images/cleaning.jpg"
          alt="Reinigung und Pflege"
          eyebrow="Leistungen"
          title="Reinigung & Pflege"
          subtitle="Sauberkeit und Wohlbefinden in Ihrem Zuhause."
        />

        <ContentCard>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Reinigung
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Sauberkeit, die entlastet
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Wir unterstützen Sie bei der Haushaltsführung, damit der Alltag
            einfacher und angenehmer wird.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Dies rechnen wir mit dem Entlastungsbetrag Ihrer Pflegekasse ab.
            Unkomplizierte Abrechnung mit allen Pflegekassen.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">131 €</p>
              <p className="mt-1 text-sm text-muted">
                Entlastungsbetrag monatlich
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted">
                Abrechnung mit Pflegekassen
              </p>
            </div>
          </div>
        </ContentCard>

        <PhotoSection
          id="laundry"
          image="/images/laundry.jpg"
          alt="Betten und Bettwäsche"
          eyebrow="Leistungen"
          title="Betten & Bettwäsche"
          subtitle="Frische Bettwäsche und gepflegte Betten."
        />

        <ContentCard>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Bettwäsche
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Frische und Gemütlichkeit
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Wir wechseln Bettwäsche und sorgen für ein sauberes, gemütliches
            Schlafzimmer – eine wichtige Entlastung im Alltag.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Unsere Leistungen werden mit dem Entlastungsbetrag Ihrer
            Pflegekasse abgerechnet. Anerkannt durch den Landkreis Marburg
            Biedenkopf nach §45 SGB XI und im Lahn-Dill-Kreis (Anerkennung von
            Angeboten zur Unterstützung im Alltag nach §45a Abs.).
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">131 €</p>
              <p className="mt-1 text-sm text-muted">
                Entlastungsbetrag monatlich
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="text-3xl font-bold text-primary">§45a</p>
              <p className="mt-1 text-sm text-muted">
                Anerkennung Lahn-Dill-Kreis
              </p>
            </div>
          </div>
        </ContentCard>

        <PhotoSection
          id="team"
          image="/images/team.png"
          alt="Das engagierte Alltagsteam"
          eyebrow="Unser Team"
          title="Herzliche Unterstützung, auf die Sie zählen können"
          subtitle="Flexibel und zuverlässig mit kurzen Wartezeiten – schnelle Lösungen für Ihren Alltag."
          imageClassName="object-[80%_center] sm:object-center"
        />

        <ContentCard id="contact">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Kontakt
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Wir sind für Sie da
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Ob Haushaltsführung, Pflanzenpflege oder Begleitung zu Terminen –
            unser Team unterstützt Pflegebedürftige und Angehörige im Landkreis
            Marburg Biedenkopf. Nehmen Sie noch heute Kontakt mit uns auf.
          </p>

          <blockquote className="mt-10 border-l-4 border-accent bg-cream px-6 py-6">
            <p className="text-lg italic leading-relaxed text-primary">
              „Die Unterstützung von Alltagsteam hat unseren Alltag erheblich
              erleichtert. Einfühlsame Betreuung und schnelle Hilfe, die uns
              sehr entlastet hat.“
            </p>
            <footer className="mt-4 text-sm font-semibold text-muted">
              — Kundenstimme
            </footer>
          </blockquote>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                E-Mail
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:info@alltagsteam.com"
                  className="font-medium text-primary hover:underline"
                >
                  info@alltagsteam.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                Telefon
              </dt>
              <dd className="mt-1">
                <a
                  href="tel:+496421234567"
                  className="font-medium text-primary hover:underline"
                >
                  (+49) 6421 123 4567
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                Einsatzgebiet
              </dt>
              <dd className="mt-1 text-muted">
                Landkreis Marburg Biedenkopf · Landkreis Marburg ·
                Lahn-Dill-Kreis
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@alltagsteam.com"
              className="rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              E-Mail senden
            </a>
            <a
              href="tel:+496421234567"
              className="rounded-full border border-primary px-8 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Jetzt anrufen
            </a>
          </div>
        </ContentCard>
      </main>
      <Footer />
    </>
  );
}
