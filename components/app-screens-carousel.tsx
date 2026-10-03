"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/** Écrans réels de l'application — espace donateur (public/app-screens/user/). */
const screens = [
  { src: "/app-screens/user/connexion.jpg", alt: "Connexion à l'application" },
  { src: "/app-screens/user/accueil.png", alt: "Écran d'accueil" },
  { src: "/app-screens/user/home.jpg", alt: "Mode découverte" },
  { src: "/app-screens/user/idmosquee.jpg", alt: "Fiche organisation" },
  { src: "/app-screens/user/campa.jpg", alt: "Campagne de collecte" },
  { src: "/app-screens/user/don.jpg", alt: "Écran de don" },
  { src: "/app-screens/user/horaire.jpg", alt: "Horaires de prière" },
  { src: "/app-screens/user/qibla.png", alt: "Boussole Qibla" },
  { src: "/app-screens/user/duaa.jpg", alt: "Invocations (Duaa)" },
  { src: "/app-screens/user/IMG_8530.png", alt: "Écran de l'application Mweema" },
  { src: "/app-screens/user/IMG_8531.png", alt: "Écran de l'application Mweema" },
  { src: "/app-screens/user/IMG_8533.png", alt: "Écran de l'application Mweema" },
  { src: "/app-screens/user/IMG_8534.png", alt: "Écran de l'application Mweema" },
];

const half = Math.ceil(screens.length / 2);
const columnA = screens.slice(0, half);
const columnB = screens.slice(half);

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[1.9rem] border-[5px] border-[#0c1310] bg-[#0c1310] shadow-[0_24px_60px_color-mix(in_srgb,var(--ui-shadow)_28%,transparent)]">
      <div className="relative aspect-[1170/2338] w-full overflow-hidden rounded-[1.5rem]">
        <Image src={src} alt={alt} fill sizes="(max-width:768px) 45vw, 220px" className="object-cover" />
      </div>
    </div>
  );
}

function Column({
  items,
  direction,
  duration,
}: {
  items: { src: string; alt: string }[];
  direction: "up" | "down";
  duration: number;
}) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  const animate = reduce
    ? undefined
    : { y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] };

  return (
    <div className="flex-1">
      <motion.div
        className="flex flex-col gap-5 will-change-transform"
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((s, i) => (
          <Phone key={`${s.src}-${i}`} src={s.src} alt={s.alt} />
        ))}
      </motion.div>
    </div>
  );
}

export function AppScreensCarousel() {
  return (
    <div
      className="relative mx-auto h-[480px] w-full max-w-[440px] overflow-hidden md:h-[560px]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
      }}
      aria-label="Aperçu de l'application Mweema"
    >
      <div className="flex gap-5">
        <Column items={columnA} direction="up" duration={34} />
        <Column items={columnB} direction="down" duration={40} />
      </div>
    </div>
  );
}
