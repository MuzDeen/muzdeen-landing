"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE, Stagger, staggerItem } from "@/components/ui/motion";
import { afterItems, beforeItems } from "@/lib/content";

export function ProblemSolution() {
  return (
    <section id="solution" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Le problème"
          title="Un système de dons resté à l'âge du papier."
          text="Boîtes à dons, espèces, virements manuels, QR codes statiques, Excel et WhatsApp. Résultat : aucune visibilité, aucun reçu, et un temps précieux perdu en tâches manuelles."
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          {/* AVANT */}
          <Stagger className="grid gap-3 rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] p-6 md:p-7">
            <motion.p variants={staggerItem} className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-muted)]">
              Avant
            </motion.p>
            {beforeItems.map((item) => (
              <motion.div variants={staggerItem} key={item.title} className="flex gap-3 rounded-2xl bg-[color:var(--ui-surface-raised)] p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-muted)]">
                  <X className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-black text-[color:var(--ui-text)]">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--ui-muted)]">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>

          {/* FLÈCHE TRANSITION */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)] shadow-lg lg:rotate-0 rotate-90">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.div>

          {/* APRÈS */}
          <Stagger className="grid gap-3 rounded-[2rem] border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-6 text-[color:var(--ui-on-primary)] shadow-[0_30px_80px_color-mix(in_srgb,var(--ui-shadow)_22%,transparent)] md:p-7">
            <motion.p variants={staggerItem} className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-mint)]">
              Avec Mweema
            </motion.p>
            {afterItems.map((item) => (
              <motion.div variants={staggerItem} key={item.title} className="flex gap-3 rounded-2xl bg-[color:var(--ui-primary-overlay)] p-4 backdrop-blur">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--ui-mint)] text-[color:var(--ui-accent)]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-black">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 opacity-90">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
