import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import imageManifest from "../generated/images.json";

type PreparedImage = {
  width: number;
  height: number;
  quality: number;
  src: string;
  srcSet: string;
};

type ImageProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: 95;
};

const images: Record<string, PreparedImage> = imageManifest;

/** Responsive images prepared locally by scripts/prepare-images.mjs. */
export default function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 95,
  sizes,
  srcSet,
  loading,
  fetchPriority,
  decoding = "async",
  style,
  ...props
}: ImageProps) {
  const entry = images[src];
  const image = entry?.quality === quality ? entry : undefined;
  const imageWidth = width ?? (height && image ? Math.round(height * image.width / image.height) : image?.width);
  const imageHeight = height ?? (width && image ? Math.round(width * image.height / image.width) : image?.height);
  const imageStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style;

  return (
    <img
      {...props}
      src={image?.src ?? src}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      srcSet={srcSet ?? image?.srcSet}
      sizes={sizes ?? (fill ? "100vw" : imageWidth ? `${imageWidth}px` : undefined)}
      loading={priority ? "eager" : loading ?? "lazy"}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding={decoding}
      style={imageStyle}
    />
  );
}
