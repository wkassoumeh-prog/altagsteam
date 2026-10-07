import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Alltagsteam – Informationen zur Verarbeitung personenbezogener Daten.",
  alternates: { canonical: "/datenschutz" },
};

function Section({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
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
          Inhaberin: Halisa Gecer
          <br />
          Ludwig Weisel Straße 19
          <br />
          35452 Heuchelheim
          <br />
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
            0179 2248163
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
        <p>
          {/* TODO: Sobald der Hosting-Anbieter feststeht, hier Name und
              Anschrift des Anbieters eintragen. */}
          Unser Hosting-Anbieter verarbeitet diese Daten in unserem Auftrag
          auf Grundlage eines Vertrags über Auftragsverarbeitung gemäß
          Art. 28 DSGVO.
        </p>
      </Section>

      <Section id="kontaktformular" heading="4. Kontaktformular und Kontaktaufnahme">
        <p>
          Wenn Sie uns über das Kontaktformular oder per E-Mail Anfragen
          zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der
          von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          Im Formular sind Name, E-Mail-Adresse und Nachricht erforderlich,
          damit wir Ihre Anfrage zuordnen und beantworten können. Die Angabe
          einer Telefonnummer ist freiwillig. Ohne die Pflichtangaben können
          Sie das Formular nicht absenden; alternativ können Sie uns anrufen.
          Bitte übermitteln Sie keine Gesundheitsdaten, Diagnosen oder
          Versicherungsnummern über das Kontaktformular.
        </p>
        <p>
          Betrifft Ihre Anfrage einen Vertrag oder vorvertragliche Maßnahmen,
          ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Sonstige Anfragen
          bearbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser
          berechtigtes Interesse besteht darin, Ihre Anliegen zu beantworten.
          Die Angaben werden nicht für Newsletter oder Werbung verwendet.
        </p>
        <p>
          Für den Versand und Empfang der Nachrichten nutzen wir den E-Mail-Dienst
          der IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, Deutschland.
          Dabei werden Name, E-Mail-Adresse, die freiwillige Telefonnummer und
          der Nachrichteninhalt sowie die zur Zustellung erforderlichen
          technischen Daten durch IONOS verarbeitet. Die Übertragung vom
          Webserver an den Mailserver erfolgt TLS-verschlüsselt.
          Eine zusätzliche Speicherung der Formulardaten in einer
          Website-Datenbank findet nicht statt.
        </p>
        <p>
          Soweit IONOS personenbezogene Daten in unserem Auftrag verarbeitet,
          erfolgt dies auf Grundlage einer Vereinbarung zur Auftragsverarbeitung
          nach Art. 28 DSGVO. Weitere Informationen finden Sie in der{" "}
          <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" className="text-primary underline">Datenschutzerklärung von IONOS</a>.
        </p>
        <p>
          Zum Schutz vor automatisierten Anfragen prüfen wir ein für Menschen
          nicht sichtbares Formularfeld sowie technische Anfrageinformationen.
          Dafür werden keine zusätzlichen Cookies und kein externer
          CAPTCHA-Dienst eingesetzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse am Schutz vor Missbrauch).
        </p>
      </Section>

      <Section heading="5. Speicherdauer">
        <p>
          Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es
          für die genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies verlangen. Nach Wegfall des Zwecks bzw.
          Ablauf der Fristen werden die Daten gelöscht.
          Kontaktanfragen werden gelöscht, sobald die Bearbeitung einschließlich
          möglicher Rückfragen abgeschlossen ist und keine gesetzlichen
          Aufbewahrungspflichten oder Gründe zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen entgegenstehen. Dies betrifft auch
          die im E-Mail-Postfach gespeicherten Nachrichten.
        </p>
      </Section>

      <Section heading="6. Ihre Rechte">
        <p>
          Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
          betreffenden personenbezogenen Daten:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die
            Zukunft (Art. 7 Abs. 3 DSGVO)
          </li>
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

      <p className="text-sm text-muted/80">Stand: September 2026</p>
    </LegalPage>
  );
}
