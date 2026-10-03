"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/** Écrans réels de l'espace manager (public/app-screens/manager/). */
const screens = [
  { src: "/app-screens/manager/IMG_8535.jpg", alt: "Espace manager Mweema" },
  { src: "/app-screens/manager/IMG_8536.png", alt: "Espace manager Mweema" },
  { src: "/app-screens/manager/IMG_8537.png", alt: "Espace manager Mweema" },
  { src: "/app-screens/manager/IMG_8538.png", alt: "Espace manager Mweema" },
  { src: "/app-screens/manager/IMG_8539.png", alt: "Espace manager Mweema" },
  { src: "/app-screens/manager/IMG_8540.png", alt: "Espace manager Mweema" },
];

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[180px] shrink-0 overflow-hidden rounded-[1.6rem] border-[5px] border-[#0c1310] bg-[#0c1310] shadow-[0_20px_50px_color-mix(in_srgb,var(--ui-shadow)_26%,transparent)] md:w-[210px]">
      <div className="relative aspect-[1170/2370] w-full overflow-hidden rounded-[1.3rem]">
        <Image src={src} alt={alt} fill sizes="210px" className="object-cover" />
      </div>
    </div>
  );
}

export function ManagerCarousel() {
  const reduce = useReducedMotion();
  const loop = [...screens, ...screens];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
      aria-label="Aperçu de l'espace manager Mweema"
    >
      <motion.div
        className="flex w-max gap-5 will-change-transform"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((s, i) => (
          <Phone key={`${s.src}-${i}`} src={s.src} alt={s.alt} />
        ))}
      </motion.div>
    </div>
  );
}
