"use client";

import Image from "next/image";
import { isSiteMotionEnabled } from "../config/motion";
import Reveal from "./Reveal";

type ImageBannerProps = {
  id?: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  imageClassName?: string;
  className?: string;
};

function BannerText({
  eyebrow,
  title,
  subtitle,
  variant,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  variant: "mobile" | "desktop";
}) {
  const isMobile = variant === "mobile";

  return (
    <>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
          {eyebrow}
        </p>
      )}
      <h2
        className={
          isMobile
            ? "text-xl font-bold leading-tight text-white"
            : "max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
        }
      >
        {title}
      </h2>
      <p
        className={
          isMobile
            ? "mt-3 text-sm leading-relaxed text-white/85"
            : "mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
        }
      >
        {subtitle}
      </p>
    </>
  );
}

export default function ImageBanner({
  id,
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  imageClassName = "object-center",
  className = "bg-white py-12 lg:py-24",
}: ImageBannerProps) {
  return (
    <section id={id} className={className}>
      <Reveal variant="scale" duration={1}>
        <div className="group relative w-full overflow-hidden">
          <div className="relative aspect-[4/3] w-full sm:aspect-[21/9]">
            <Image
              src={image}
              alt={alt}
              fill
              className={`object-cover ${imageClassName} ${
                isSiteMotionEnabled()
                  ? "transition-transform duration-[2000ms] group-hover:scale-105"
                  : ""
              }`}
              sizes="100vw"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:block" />
          </div>

          <Reveal
            variant="up-sm"
            delay={0.5}
            className="bg-primary px-6 py-5 sm:hidden"
          >
            <BannerText
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              variant="mobile"
            />
          </Reveal>

          <Reveal
            variant="up-sm"
            delay={0.5}
            className="absolute inset-x-0 bottom-0 hidden sm:block"
          >
            <div className="container mx-auto px-6 pb-10 lg:px-8 lg:pb-12">
              <BannerText
                eyebrow={eyebrow}
                title={title}
                subtitle={subtitle}
                variant="desktop"
              />
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
