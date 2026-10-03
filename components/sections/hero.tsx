"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppScreensCarousel } from "@/components/app-screens-carousel";
import { SiteHeader } from "@/components/site-header";
import { EASE, RevealLines } from "@/components/ui/motion";
import { hero } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tx = useSpring(px, { stiffness: 120, damping: 22 });
  const ty = useSpring(py, { stiffness: 120, damping: 22 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width - 0.5) * 22);
    py.set(((e.clientY - rect.top) / rect.height - 0.5) * 22);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-4 md:pb-28 md:pt-5"
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <div className="section-shell">
        <SiteHeader />

        <div className="grid items-center gap-10 pt-12 md:gap-14 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div>
            <h1 className="text-balance text-[3.15rem] font-black leading-[0.92] text-[color:var(--ui-text)] sm:text-6xl md:text-7xl">
              <RevealLines lines={hero.titleLines} />
            </h1>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--ui-muted)] md:mt-7 md:text-xl md:leading-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
            >
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--ui-accent)] px-6 text-sm font-semibold text-[color:var(--ui-on-primary)] shadow-[0_18px_40px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)] transition duration-300 hover:bg-[color:var(--ui-accent-hover)] hover:shadow-[0_22px_52px_color-mix(in_srgb,var(--ui-shadow)_26%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ui-accent)]"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--ui-accent)] bg-[color:var(--ui-surface-raised)] px-6 text-sm font-semibold text-[color:var(--ui-accent)] transition duration-300 hover:bg-[color:var(--ui-surface-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ui-mint)]"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.dl
              className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[color:var(--ui-line)] pt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.74 }}
            >
              {hero.stats.map((stat) => (
                <div key={stat.value}>
                  <dt className="text-2xl font-black text-[color:var(--ui-accent)] md:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-[color:var(--ui-muted)]">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div style={{ x: tx, y: ty }} className="will-change-transform">
            <AppScreensCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
