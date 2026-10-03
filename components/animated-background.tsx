"use client";

import { motion, useReducedMotion } from "framer-motion";

type Blob = {
  className: string;
  color: string;
  from: { x: number; y: number; scale: number };
  to: { x: number; y: number; scale: number };
  duration: number;
};

const blobs: Blob[] = [
  {
    className: "left-[-12%] top-[-8%] h-[42rem] w-[42rem]",
    color: "var(--ui-accent)",
    from: { x: -40, y: -20, scale: 1 },
    to: { x: 60, y: 80, scale: 1.18 },
    duration: 22,
  },
  {
    className: "right-[-14%] top-[12%] h-[38rem] w-[38rem]",
    color: "var(--ui-mint)",
    from: { x: 40, y: 0, scale: 1.1 },
    to: { x: -60, y: 90, scale: 0.92 },
    duration: 27,
  },
  {
    className: "left-[18%] top-[55%] h-[36rem] w-[36rem]",
    color: "var(--ui-accent)",
    from: { x: -30, y: 40, scale: 0.95 },
    to: { x: 70, y: -50, scale: 1.15 },
    duration: 31,
  },
  {
    className: "right-[6%] bottom-[-10%] h-[40rem] w-[40rem]",
    color: "var(--ui-mint)",
    from: { x: 20, y: 30, scale: 1.05 },
    to: { x: -50, y: -40, scale: 0.9 },
    duration: 25,
  },
];

export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Voile de base qui suit le thème */}
      <div className="absolute inset-0 bg-[color:var(--ui-bg)]" />

      {/* Orbes lumineuses qui dérivent lentement */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${blob.className}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, ${blob.color} 55%, transparent), transparent 68%)`,
            opacity: 0.4,
          }}
          initial={reduce ? false : { x: blob.from.x, y: blob.from.y, scale: blob.from.scale }}
          animate={
            reduce
              ? undefined
              : {
                  x: [blob.from.x, blob.to.x, blob.from.x],
                  y: [blob.from.y, blob.to.y, blob.from.y],
                  scale: [blob.from.scale, blob.to.scale, blob.from.scale],
                }
          }
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Dégradé de finition pour fondre les orbes dans le fond */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--ui-bg)_55%,transparent),transparent_30%,transparent_70%,color-mix(in_srgb,var(--ui-bg)_75%,transparent))]" />
    </div>
  );
}
