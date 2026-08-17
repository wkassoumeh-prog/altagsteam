import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-12 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Alltagsteam"
      width={711}
      height={506}
      className={className}
      priority={priority}
    />
  );
}
