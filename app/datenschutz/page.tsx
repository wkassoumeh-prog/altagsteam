import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Alltagsteam",
  description:
    "Datenschutzerklärung von Alltagsteam – Informationen zur Verarbeitung personenbezogener Daten.",
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

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <Section heading="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Alltagsteam
          <br />
          [Vor- und Nachname der Inhaberin / des Inhabers]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ] Marburg
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

      <Section heading="2. Allgemeines zur Datenverarbeitung">
        <p>
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG)
          sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in
          der Regel ohne Angabe personenbezogener Daten möglich.
        </p>
      </Section>

      <Section heading="3. Zugriffsdaten und Hosting">
        <p>
          Beim Besuch dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles erfasst, die
          Ihr Browser übermittelt. Dies sind unter anderem: Browsertyp und
          -version, verwendetes Betriebssystem, Referrer-URL, Uhrzeit der
          Serveranfrage und IP-Adresse.
        </p>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
          Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der technisch fehlerfreien Darstellung und
          Optimierung der Website).
        </p>
      </Section>

      <Section heading="4. Kontaktformular und Kontaktaufnahme">
        <p>
          Wenn Sie uns über das Kontaktformular oder per E-Mail Anfragen
          zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der
          von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung
          vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
        </p>
      </Section>

      <Section heading="5. Speicherdauer">
        <p>
          Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es
          für die genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies verlangen. Nach Wegfall des Zwecks bzw.
          Ablauf der Fristen werden die Daten gelöscht.
        </p>
      </Section>

      <Section heading="6. Ihre Rechte">
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          Zuständig ist der Hessische Beauftragte für Datenschutz und
          Informationsfreiheit.
        </p>
      </Section>

      <Section heading="7. SSL- bzw. TLS-Verschlüsselung">
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
        </p>
      </Section>

      <p className="text-sm text-muted/80">
        Hinweis: Die in eckigen Klammern stehenden Angaben müssen noch durch
        die tatsächlichen Daten ersetzt werden. Diese Vorlage ersetzt keine
        rechtliche Beratung.
      </p>
    </LegalPage>
  );
}
