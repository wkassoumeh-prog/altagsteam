import { absoluteUrl, siteConfig } from "../config/site";

export default function LocalBusinessJsonLd() {
  const { address, openingHours, serviceAreas } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.ogImagePath),
    logo: encodeURI(absoluteUrl(siteConfig.logoPath)),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": name === "Hessen" ? "State" : "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHours.days,
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    inLanguage: "de-DE",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
