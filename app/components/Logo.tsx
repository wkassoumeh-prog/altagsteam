"use client";

import Image from "next/image";
import {
  FLIPPING_LOGOS,
  FLIPPING_LOGO_CONTAINER_CLASS,
  type FlippingLogo,
} from "./flippingLogoConfig";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
};

const DEFAULT_LOGO = FLIPPING_LOGOS[1];

const variantClasses = {
  default: "logo-tint-primary",
  hero: "brightness-0 invert drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]",
};

function logoImageClassName(logo: FlippingLogo, variant: "default" | "hero") {
  if (variant === "default") {
    return logo.imageClassName;
  }

  const scaleMatch = logo.imageClassName.match(/\bscale-\S+/);
  const scaleClass = scaleMatch ? scaleMatch[0] : "";

  return `${variantClasses.hero} max-h-full max-w-full object-contain ${scaleClass}`.trim();
}

export default function Logo({
  className = "",
  priority = false,
  variant = "default",
}: LogoProps) {
  return (
    <div className={`${FLIPPING_LOGO_CONTAINER_CLASS} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={DEFAULT_LOGO.src}
          alt={DEFAULT_LOGO.alt}
          width={DEFAULT_LOGO.width}
          height={DEFAULT_LOGO.height}
          quality={95}
          className={logoImageClassName(DEFAULT_LOGO, variant)}
          priority={priority}
        />
      </div>
    </div>
  );
}
