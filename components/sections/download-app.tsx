"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/components/ui/motion";
import { download } from "@/lib/content";

function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={download.appStore.href} target="_blank" rel="noreferrer" className="transition hover:opacity-85">
        <Image src={download.appStore.src} alt={download.appStore.alt} width={180} height={54} className="h-[52px] w-auto" />
      </a>
      <a href={download.googlePlay.href} target="_blank" rel="noreferrer" className="transition hover:opacity-85">
        <Image src={download.googlePlay.src} alt={download.googlePlay.alt} width={180} height={54} className="h-[52px] w-auto" />
      </a>
    </div>
  );
}

export function DownloadApp() {
  return (
    <section id="telecharger" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-8 text-[color:var(--ui-on-primary)] shadow-[0_30px_90px_color-mix(in_srgb,var(--ui-shadow)_24%,transparent)] md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-mint)]">Télécharger l&apos;application</p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-tight md:text-5xl">
                Votre soutien, à portée de main.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 opacity-90">
                Scannez le QR code ou téléchargez Mweema sur l&apos;App Store et Google Play. Donnez en quelques secondes, suivez vos reçus et soutenez vos organisations.
              </p>
              <StoreBadges className="mt-8" />
            </div>

            {/* QR code */}
            <motion.div
              className="mx-auto flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              <div className="rounded-[1.75rem] bg-white p-4 shadow-xl">
                <Image src={download.qr} alt="QR code de téléchargement de l'application Mweema" width={200} height={200} className="h-44 w-44" />
              </div>
              <p className="mt-4 text-center text-sm font-bold opacity-90">Scannez pour télécharger</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
