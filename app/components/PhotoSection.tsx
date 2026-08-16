import Image from "next/image";

type PhotoSectionProps = {
  id?: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  priority?: boolean;
};

export default function PhotoSection({
  id,
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  priority = false,
}: PhotoSectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start snap-always overflow-hidden"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 pt-28 lg:px-16 lg:pb-28">
        {eyebrow && (
          <p className="mb-4 text-xl font-extrabold uppercase tracking-[0.35em] text-amber-300 sm:text-2xl">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
