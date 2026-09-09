import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

const variants = {
  standard: "aspect-[4/3] rounded-3xl",
  card: "aspect-video",
  banner: "aspect-[16/10] rounded-3xl sm:aspect-video lg:aspect-[21/9]",
} as const;

type PhotoFrameProps = Pick<ImageProps, "src" | "alt" | "loading" | "fetchPriority"> & {
  sizes: string;
  variant?: keyof typeof variants;
  focalPosition?: string;
  children?: ReactNode;
};

/** Static framing rules; overlays remain children of the clipped frame. */
export default function PhotoFrame({
  src, alt, sizes, variant = "standard", focalPosition = "50% 50%",
  loading = "lazy", fetchPriority, children,
}: PhotoFrameProps) {
  return (
    <div className={`relative w-full overflow-hidden ${variants[variant]}`} data-photo-frame={variant}>
      <Image src={src} alt={alt} fill quality={95} sizes={sizes}
        loading={loading} fetchPriority={fetchPriority}
        className="object-cover" style={{ objectPosition: focalPosition }} />
      {children}
    </div>
  );
}
