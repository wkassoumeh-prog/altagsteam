import Image from "next/image";

type PhotoSectionProps = {
  id?: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  priority?: boolean;
  imageClassName?: string;
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
}: PhotoSectionProps) {
  return (
    <section
      id={id}
      className="relative h-dvh w-full snap-start snap-always overflow-hidden"
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

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-[max(5rem,env(safe-area-inset-bottom))] pt-24 lg:px-16 lg:pb-28">
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
      </div>
    </section>
  );
}
