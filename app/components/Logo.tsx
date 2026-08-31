"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FLIPPING_LOGOS,
  FLIPPING_LOGO_CONTAINER_CLASS,
  getNextLogoIndex,
  type FlippingLogo,
} from "./flippingLogoConfig";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
  interactive?: boolean;
};

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
  interactive = true,
}: LogoProps) {
  const [logoIndex, setLogoIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const frontLogo = FLIPPING_LOGOS[logoIndex];
  const backLogo = FLIPPING_LOGOS[getNextLogoIndex(logoIndex)];

  const handleFlipComplete = () => {
    if (!isFlipping) return;

    setLogoIndex((index) => getNextLogoIndex(index));
    setIsFlipped(false);
    setIsFlipping(false);
  };

  return (
    <div
      className={`${FLIPPING_LOGO_CONTAINER_CLASS} ${className} ${interactive ? "cursor-pointer" : ""}`}
      onClick={() => {
        if (!interactive || isFlipping) return;
        setIsFlipping(true);
        setIsFlipped(true);
      }}
      style={{ perspective: 1000 }}
      title={interactive ? "Klicken, um das Logo zu wechseln" : undefined}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: isFlipped ? 0.6 : 0,
          ease: "easeInOut",
        }}
        onAnimationComplete={handleFlipComplete}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={frontLogo.src}
            alt={frontLogo.alt}
            width={frontLogo.width}
            height={frontLogo.height}
            className={logoImageClassName(frontLogo, variant)}
            priority={priority}
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={backLogo.src}
            alt={backLogo.alt}
            width={backLogo.width}
            height={backLogo.height}
            className={logoImageClassName(backLogo, variant)}
            priority={priority}
          />
        </div>
      </motion.div>
    </div>
  );
}
