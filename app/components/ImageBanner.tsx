"use client";

import Image from "next/image";
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
      <div className="container mx-auto px-6">
        <Reveal variant="scale" duration={1}>
          <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl lg:rounded-[3rem]">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <Image
                src={image}
                alt={alt}
                fill
                className={`object-cover transition-transform duration-[2000ms] group-hover:scale-105 ${imageClassName}`}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <Reveal
              variant="up-sm"
              delay={0.5}
              className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12"
            >
              {eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                  {eyebrow}
                </p>
              )}
              <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {subtitle}
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
