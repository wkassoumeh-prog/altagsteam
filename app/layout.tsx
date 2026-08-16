import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Altagsteam Gießen – Unterstützung für Pflegebedürftige",
  description:
    "Altagsteam bietet professionelle Unterstützung für Pflegebedürftige im Landkreis Gießen. Unser engagiertes Team sorgt für eine einfache Haushaltsführung und Betreuung, damit der Alltag leichter wird. Vertrauen Sie auf unsere herzliche und kompetente Hilfe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
