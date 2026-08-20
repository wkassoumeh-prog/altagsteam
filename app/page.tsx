import ContactSection from "./components/ContactSection";
import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HesseStatsSection from "./components/HesseStatsSection";
import ImageBanner from "./components/ImageBanner";
import { StatItem } from "./components/StatItem";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero
          image="/images/hero.jpg"
          alt="Alltagsteam – herzliche Unterstützung im Alltag"
          eyebrow="Alltagsteam Marburg und ganz Hessen"
          title="Herzliche Unterstützung im Alltag"
          subtitle="Professionelle Alltagshilfe für Pflegebedürftige und Angehörige in Marburg und ganz Hessen."
          imageClassName="object-[70%_35%] sm:object-center"
        />

        <ContentCard variant="cream">
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
            zuverlässig und tätig in Marburg und ganz Hessen.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#gardening"
              className="rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg"
            >
              Unsere Leistungen
            </a>
            <a
              href="#contact"
              className="group rounded-full border border-primary px-8 py-3.5 text-center text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              Kontakt aufnehmen
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </ContentCard>

        <ImageBanner
          id="about"
          image="/images/company.jpg"
          alt="Das Alltagsteam bei der Arbeit"
          eyebrow="Über uns"
          title="Alltagsteam in Marburg und ganz Hessen"
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
            Pflegebedürftige und Angehörige in Marburg und ganz Hessen. Unser
            engagiertes Team sorgt für eine einfache Haushaltsführung und
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

        <ImageBanner
          id="gardening"
          image="/images/gardening.jpg"
          alt="Pflanzenpflege und Alltagshilfe"
          eyebrow="Leistungen"
          title="Pflanzenpflege & Alltagshilfe"
          subtitle="Fürsorge für Ihr Zuhause und Ihren Alltag."
          className="bg-cream"
        />

        <ContentCard variant="cream">
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
            <StatItem value="131 €" label="Entlastungsbetrag monatlich" />
            <StatItem value="§45" label="Anerkannt nach SGB XI" />
          </div>
        </ContentCard>

        <ImageBanner
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
            <StatItem value="131 €" label="Entlastungsbetrag monatlich" />
            <StatItem value="100%" label="Abrechnung mit Pflegekassen" />
          </div>
        </ContentCard>

        <ImageBanner
          id="laundry"
          image="/images/laundry.jpg"
          alt="Betten und Bettwäsche"
          eyebrow="Leistungen"
          title="Betten & Bettwäsche"
          subtitle="Frische Bettwäsche und gepflegte Betten."
          className="bg-cream"
        />

        <ContentCard variant="cream">
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
            <StatItem value="131 €" label="Entlastungsbetrag monatlich" />
            <StatItem value="§45a" label="Anerkennung Lahn-Dill-Kreis" />
          </div>
        </ContentCard>

        <ImageBanner
          id="team"
          image="/images/team.jpg"
          alt="Das engagierte Alltagsteam"
          eyebrow="Unser Team"
          title="Herzliche Unterstützung, auf die Sie zählen können"
          subtitle="Flexibel und zuverlässig mit kurzen Wartezeiten – schnelle Lösungen für Ihren Alltag."
          imageClassName="object-[80%_center] sm:object-center"
        />

        <HesseStatsSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
