"use client";

import Image from "next/image";
import FadeInGroup from "./FadeInGroup";
import Logo from "./Logo";

type PhotoSectionProps = {
  id?: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  priority?: boolean;
  imageClassName?: string;
  showLogo?: boolean;
};

export default function PhotoSection({
  id,
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  priority = false,
  imageClassName = "object-center",
  showLogo = false,
}: PhotoSectionProps) {
  return (
    <section
      id={id}
      className="relative h-dvh w-full overflow-hidden"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${imageClassName}`}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />

      <FadeInGroup
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-[max(5rem,env(safe-area-inset-bottom))] pt-24 lg:px-16 lg:pb-28"
        staggerMs={100}
        duration={600}
        immediate={priority}
      >
        {showLogo && (
          <a href="#start" className="mb-5 block w-fit sm:mb-6">
            <Logo
              variant="hero"
              className="h-20 w-auto sm:h-24 lg:h-32"
              priority={priority}
            />
          </a>
        )}
        {eyebrow && (
          <p className="mb-4 text-lg font-extrabold uppercase tracking-[0.2em] text-amber-300 sm:text-xl sm:tracking-[0.35em] lg:text-2xl">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl sm:leading-[1.05] lg:text-7xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/90 sm:mt-5 sm:text-lg lg:text-2xl">
          {subtitle}
        </p>
      </FadeInGroup>
    </section>
  );
}
