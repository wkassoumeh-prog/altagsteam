"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useSiteMotion } from "./useSiteMotion";

type HeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  imageClassName?: string;
};

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

  const LogoLink = enabled ? motion.a : "a";
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />

      <div className="relative z-10 container mx-auto w-full px-6 pb-[max(5rem,env(safe-area-inset-bottom))] pt-32 lg:pb-28">
        <LogoLink href="#start" className="mb-6 block w-fit" {...fadeUp(0, 20)}>
          <Logo
            variant="hero"
            className="h-20 w-auto sm:h-24 lg:h-32"
            priority
          />
        </LogoLink>

        <Eyebrow
          className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300 sm:text-base sm:tracking-[0.35em]"
          {...fadeUp(0, 20)}
        >
          {eyebrow}
        </Eyebrow>

        <Title
          className="font-display max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl"
          {...fadeUp(0.2, 30)}
        >
          {title}
        </Title>

        <Subtitle
          className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/90 sm:mt-5 sm:text-lg lg:text-2xl"
          {...fadeUp(0.4, 30)}
        >
          {subtitle}
        </Subtitle>

        <Actions
          className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
          {...fadeUp(0.6, 30)}
        >
          <a
            href="#gardening"
            className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
          >
            Unsere Leistungen
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
          >
            Kontakt aufnehmen
          </a>
        </Actions>
      </div>
    </section>
  );
}
