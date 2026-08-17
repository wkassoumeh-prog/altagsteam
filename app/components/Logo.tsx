import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
};

const variantClasses = {
  default: "",
  hero: "brightness-0 invert drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]",
};

export default function Logo({
  className = "h-12 w-auto",
  priority = false,
  variant = "default",
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Alltagsteam"
      width={711}
      height={506}
      className={`${variantClasses[variant]} ${className}`}
      priority={priority}
    />
  );
}
