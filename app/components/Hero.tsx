"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSiteMotion } from "./useSiteMotion";

type HeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  imageClassName?: string;
};

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 shrink-0" aria-hidden>
      <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 shrink-0" aria-hidden>
      <path d="M12 21c-4-3.5-6-7.5-6-11a6 6 0 0 1 12 0c0 3.5-2 7.5-6 11Z" />
      <path d="M12 21V10" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  imageClassName = "object-center",
}: HeroProps) {
  const { enabled } = useSiteMotion();

  const fadeUp = (delay: number, y = 30) =>
    enabled
      ? {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay },
        }
      : {};

  const Eyebrow = enabled ? motion.p : "p";
  const Title = enabled ? motion.h1 : "h1";
  const Subtitle = enabled ? motion.p : "p";
  const Actions = enabled ? motion.div : "div";

  return (
    <section
      id="start"
      className="relative flex min-h-dvh w-full items-end overflow-hidden"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        quality={90}
        className={`object-cover ${imageClassName}`}
        sizes="(max-width: 768px) 100vw, 1920px"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-overlay-top absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 container mx-auto w-full px-6 pb-[max(5rem,env(safe-area-inset-bottom))] pt-32 lg:pb-28">
        <Eyebrow
          className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.25em]"
          {...fadeUp(0, 20)}
        >
          {eyebrow}
        </Eyebrow>

        <Title
          className="font-display max-w-4xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl"
          {...fadeUp(0.15, 30)}
        >
          {title}
        </Title>

        <Subtitle
          className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/95 sm:mt-5 sm:max-w-2xl sm:text-base lg:text-lg"
          {...fadeUp(0.3, 30)}
        >
          {subtitle}
        </Subtitle>

        <Actions
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          {...fadeUp(0.45, 30)}
        >
          <a
            href="#contact"
            className="flex items-center justify-between gap-3 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg sm:px-6 sm:py-4"
          >
            <span className="flex items-center gap-3">
              <HeartIcon />
              Persönlich beraten lassen
            </span>
            <ArrowIcon />
          </a>
          <a
            href="#gardening"
            className="flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 sm:px-6 sm:py-4"
          >
            <span className="flex items-center gap-3">
              <LeafIcon />
              Leistungen entdecken
            </span>
            <ArrowIcon />
          </a>
        </Actions>
      </div>
    </section>
  );
}
