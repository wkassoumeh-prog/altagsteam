import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum – Alltagsteam",
  description: "Impressum und Anbieterkennzeichnung von Alltagsteam.",
};

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-primary">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <Section heading="Angaben gemäß § 5 DDG">
        <p>
          Alltagsteam
          <br />
          Inhaberin: Halisa Gecer
          <br />
          Ludwig Weisel Straße 19
          <br />
          35452 Heuchelheim
        </p>
      </Section>

      <Section heading="Kontakt">
        <p>
          Sie können uns auch über unser <Link href="/#contact" className="text-primary underline">Kontaktformular</Link> erreichen.
          Informationen zur Verarbeitung Ihrer Angaben finden Sie in der{" "}
          <Link href="/datenschutz#kontaktformular" className="text-primary underline">Datenschutzerklärung</Link>.
        </p>
        <p>
          Telefon:{" "}
          <a
            href="tel:+4964132051318"
            className="font-medium text-primary transition-colors hover:text-primary-light"
          >
            0641 32051318
          </a>
          <br />
          Mobil:{" "}
          <a
            href="tel:+491792248163"
            className="font-medium text-primary transition-colors hover:text-primary-light"
          >
            +49 179 2248163
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@alltagsteam.com"
            className="font-medium text-primary transition-colors hover:text-primary-light"
          >
            info@alltagsteam.com
          </a>
        </p>
      </Section>

      <Section heading="Aufsichtsbehörde / Anerkennung">
        <p>
          Anerkannt durch den Landkreis Marburg-Biedenkopf nach § 45 SGB XI
          sowie im Lahn-Dill-Kreis (Anerkennung von Angeboten zur Unterstützung
          im Alltag nach § 45a SGB XI).
        </p>
      </Section>

      <Section heading="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          Halisa Gecer
          <br />
          Ludwig Weisel Straße 19
          <br />
          35452 Heuchelheim
        </p>
      </Section>

      <Section heading="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach Art. 6 bis 8 der
          Verordnung (EU) 2022/2065 (Digital Services Act) in Verbindung mit
          dem Digitale-Dienste-Gesetz (DDG) sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
      </Section>

      <Section heading="Haftung für Links">
        <p>
          Unser Angebot enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
          wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich.
        </p>
      </Section>

      <Section heading="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen (§ 36 VSBG).
        </p>
      </Section>
    </LegalPage>
  );
}
