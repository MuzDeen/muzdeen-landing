"use client";

import { motion } from "framer-motion";
import { Check, Compass, Heart, Landmark, QrCode, ReceiptText } from "lucide-react";

export function AppMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[360px]"
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        className="absolute -left-8 top-12 hidden rounded-3xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-4 shadow-2xl backdrop-blur md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <QrCode className="h-9 w-9 text-[color:var(--ui-accent)]" />
        <p className="mt-2 text-xs font-bold text-[color:var(--ui-text)]">Scan & give</p>
      </motion.div>
      <motion.div
        className="absolute -right-7 bottom-16 hidden rounded-3xl border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-4 text-[color:var(--ui-on-primary)] shadow-2xl md:block"
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
      >
        <ReceiptText className="h-8 w-8 text-[color:var(--ui-mint)]" />
        <p className="mt-2 text-xs font-bold">Recu prevu</p>
      </motion.div>
      <div className="rounded-[2.4rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-text)] p-3 shadow-[0_35px_90px_color-mix(in_srgb,var(--ui-shadow)_28%,transparent)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-[color:var(--ui-bg)]">
          <div className="flex items-center justify-between bg-[color:var(--ui-accent)] px-5 pb-5 pt-6 text-[color:var(--ui-on-primary)]">
            <div>
              <p className="text-xs text-[color:var(--ui-mint)]">Mweema</p>
              <p className="text-lg font-black">Soutenir Al Noor</p>
            </div>
            <Landmark className="h-6 w-6" />
          </div>
          <div className="space-y-4 p-5">
            <div className="rounded-3xl bg-[color:var(--ui-surface-raised)] p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold text-[color:var(--ui-text)]">Don rapide</p>
                <span className="rounded-full bg-[color:var(--ui-surface-soft)] px-3 py-1 text-xs font-bold text-[color:var(--ui-accent)]">NFC ready</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["10 EUR", "25 EUR", "50 EUR"].map((amount) => (
                  <button
                    className="rounded-2xl border border-[color:var(--ui-accent)] bg-[color:var(--ui-bg)] px-2 py-3 text-xs font-black text-[color:var(--ui-accent)]"
                    key={amount}
                    type="button"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--ui-accent)] py-3 text-sm font-black text-[color:var(--ui-on-primary)]" type="button">
                <Heart className="h-4 w-4 text-[color:var(--ui-mint)]" />
                Donner maintenant
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-[color:var(--ui-surface-soft)] p-4">
                <Compass className="mb-3 h-5 w-5 text-[color:var(--ui-accent)]" />
                <p className="text-xs font-bold text-[color:var(--ui-text)]">Qibla</p>
                <p className="mt-1 text-xs text-[color:var(--ui-muted)]">Disponible app</p>
              </div>
              <div className="rounded-3xl bg-[color:var(--ui-surface-soft)] p-4">
                <Check className="mb-3 h-5 w-5 text-[color:var(--ui-accent)]" />
                <p className="text-xs font-bold text-[color:var(--ui-text)]">Sans compte</p>
                <p className="mt-1 text-xs text-[color:var(--ui-muted)]">Parcours fluide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
