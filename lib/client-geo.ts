/** Geo hints from the hosting edge (e.g. Vercel). Empty when not available (local dev). */
export function getRequestGeo(headers: Headers): {
  city?: string;
  country?: string;
} {
  const decode = (value: string | null): string | undefined => {
    if (!value?.trim()) return undefined;
    try {
      return decodeURIComponent(value.trim().replace(/\+/g, " "));
    } catch {
      return value.trim();
    }
  };

  const city =
    decode(headers.get("x-vercel-ip-city")) ??
    decode(headers.get("x-vercel-ip-country-region"));
  const country = decode(headers.get("x-vercel-ip-country"));

  return {
    city,
    country,
  };
}

export function formatVisitLocation(
  city?: string,
  country?: string,
): string {
  if (city && country) return `${city}, ${country}`;
  if (city) return city;
  if (country) return country;
  return "—";
}
