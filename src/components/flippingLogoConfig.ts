export type FlippingLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageClassName: string;
};

export const FLIPPING_LOGOS: FlippingLogo[] = [
  {
    src: "/logo-icon.png",
    alt: "Alltagsteam Logo",
    width: 565,
    height: 484,
    imageClassName:
      "logo-tint-primary max-h-full max-w-full scale-110 object-contain",
  },
  {
    src: "/Logo Familie mit Hause.png",
    alt: "Alltagsteam Familie mit Haus Logo",
    width: 817,
    height: 802,
    imageClassName:
      "logo-tint-primary max-h-full max-w-full scale-130 object-contain",
  },
  {
    src: "/old logo without a house.png",
    alt: "Alltagsteam Logo ohne Haus",
    width: 1374,
    height: 1145,
    imageClassName:
      "logo-tint-primary max-h-full max-w-full scale-130 object-contain",
  },
];

export function getNextLogoIndex(index: number) {
  return (index + 1) % FLIPPING_LOGOS.length;
}

// Sized to fit the largest scaled logo so flip faces stay consistent.
export const FLIPPING_LOGO_CONTAINER_CLASS =
  "relative h-10 w-[3.9rem] shrink-0 overflow-visible sm:h-12 sm:w-[4.7rem]";
