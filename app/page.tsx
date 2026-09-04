import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FinanzierungSection from "./components/FinanzierungSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroFeatures from "./components/HeroFeatures";
import HesseStatsSection from "./components/HesseStatsSection";
import KarriereSection from "./components/KarriereSection";
import LeistungenSection from "./components/LeistungenSection";
import PflegeboxSection from "./components/PflegeboxSection";
import TeamSection from "./components/TeamSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero
          image="/images/hero.jpg"
          alt="AlltagsTeam – Gemeinsam. Für Ihren Alltag."
          eyebrow="ALLTAGSTEAM • MARBURG & HESSEN"
          title="Gemeinsam. Für Ihren Alltag."
          subtitle="Persönliche Unterstützung, die entlastet und Ihnen mehr Zeit für das gibt, was wirklich zählt."
          imageClassName="object-[70%_35%] sm:object-center"
        />

        <HeroFeatures />

        <WelcomeSection />

        <AboutSection />

        <LeistungenSection />

        <PflegeboxSection />

        <FinanzierungSection />

        <HesseStatsSection />

        <TeamSection />

        <KarriereSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
