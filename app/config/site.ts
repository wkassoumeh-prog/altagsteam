const DEFAULT_SITE_URL = "https://alltagsteam.com";

/** Canonical site origin (no trailing slash). Set NEXT_PUBLIC_SITE_URL in production if the live URL differs. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Alltagsteam",
  legalName: "Alltagsteam",
  defaultTitle:
    "Alltagsteam Marburg und ganz Hessen – Unterstützung für Pflegebedürftige",
  description:
    "Alltagsteam bietet professionelle Unterstützung für Pflegebedürftige in Marburg und ganz Hessen. Haushalt, Betreuung und Entlastung im Alltag – herzlich, zuverlässig und anerkannt nach § 45 SGB XI.",
  locale: "de_DE",
  email: "info@alltagsteam.com",
  telephone: "+4964132051318",
  address: {
    streetAddress: "Ludwig Weisel Straße 19",
    addressLocality: "Heuchelheim",
    postalCode: "35452",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  serviceAreas: [
    "Marburg",
    "Gießen",
    "Wetzlar",
    "Frankfurt am Main",
    "Kassel",
    "Hessen",
  ],
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  ogImagePath: "/images/hero.jpg",
  logoPath: "/Logo Familie mit Hause.png",
} as const;

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
