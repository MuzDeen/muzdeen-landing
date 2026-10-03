import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/animated-background";
import "./globals.css";

const siteUrl = "https://mweema.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mweema - Pour ici et l'au-delà",
    template: "%s | Mweema",
  },
  description:
    "Mweema aide les mosquees a digitaliser les dons via QR code, NFC et mobile, avec une experience rapide, fiable et spirituelle.",
  openGraph: {
    title: "Mweema - Pour ici et l'au-delà",
    description:
      "La plateforme moderne pour soutenir les mosquees en quelques secondes, sans friction et sans compte obligatoire.",
    url: siteUrl,
    siteName: "Mweema",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mweema - Pour ici et l'au-delà",
    description:
      "Digitalisez les dons de votre mosquee avec une experience QR code, NFC et mobile.",
  },
  icons: {
    icon: "/brand/mweema.png",
    apple: "/brand/mweema.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    try {
      const stored = localStorage.getItem("mweema-theme");
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
