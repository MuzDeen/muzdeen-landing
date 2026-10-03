import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/animated-background";
import "./globals.css";

const siteUrl = "https://muzdeen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muz'Deen - Pour ici et l'au-delà",
    template: "%s | Muz'Deen",
  },
  description:
    "Muz'Deen aide les mosquees a digitaliser les dons via QR code, NFC et mobile, avec une experience rapide, fiable et spirituelle.",
  openGraph: {
    title: "Muz'Deen - Pour ici et l'au-delà",
    description:
      "La plateforme moderne pour soutenir les mosquees en quelques secondes, sans friction et sans compte obligatoire.",
    url: siteUrl,
    siteName: "Muz'Deen",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muz'Deen - Pour ici et l'au-delà",
    description:
      "Digitalisez les dons de votre mosquee avec une experience QR code, NFC et mobile.",
  },
  icons: {
    icon: "/brand/muzdeen.png",
    apple: "/brand/muzdeen.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    try {
      const stored = localStorage.getItem("muzdeen-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = stored || (prefersDark ? "dark" : "light");
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  `;

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
