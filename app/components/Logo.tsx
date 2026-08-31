"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
  interactive?: boolean;
};

const variantClasses = {
  default: "",
  hero: "brightness-0 invert drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]",
};

export default function Logo({
  className = "h-12 w-auto",
  priority = false,
  variant = "default",
  interactive = true,
}: LogoProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative inline-block ${className} ${interactive ? "cursor-pointer" : ""}`}
      onClick={() => interactive && setIsFlipped((prev) => !prev)}
      style={{ perspective: 1000 }}
      title={interactive ? "Klicken, um das Logo zu wechseln" : undefined}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/logo-icon.png"
            alt="Alltagsteam"
            width={565}
            height={484}
            className={`${variantClasses[variant]} h-full w-auto object-contain`}
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
            src="/Logo Familie mit Hause.png"
            alt="Alltagsteam Familie mit Haus"
            width={817}
            height={802}
            className={`${variantClasses[variant]} h-full w-auto object-contain`}
            priority={priority}
          />
        </div>
      </motion.div>
    </div>
  );
}
