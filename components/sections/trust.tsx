"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE, Stagger, staggerItem } from "@/components/ui/motion";
import { moneyFlow, trustItems } from "@/lib/content";

export function Trust() {
  return (
    <section id="confiance" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Confiance & sécurité"
          title="L'argent est sacré. On le traite comme tel."
          text="Double vérification, paiements gérés par Stripe, et des fonds qui ne passent jamais par le compte bancaire de Mweema."
          align="center"
        />

        {/* Schéma du flux d'argent */}
        <motion.div
          className="mt-14 rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-sm md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
            {moneyFlow.map((node, index) => (
              <div key={node.title} className="flex flex-1 flex-col items-stretch gap-4 md:flex-row md:items-center">
                <motion.div
                  className="flex-1 rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] p-5 text-center"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: index * 0.25 }}
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)]">
                    <node.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-lg font-black text-[color:var(--ui-text)]">{node.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ui-muted)]">{node.text}</p>
                </motion.div>

                {index < moneyFlow.length - 1 ? (
                  <div className="relative mx-auto flex h-10 w-full items-center justify-center md:h-auto md:w-14">
                    <span className="absolute h-0.5 w-full bg-[color:var(--ui-line)] md:w-full" />
                    <motion.span
                      className="absolute left-0 h-0.5 origin-left bg-[color:var(--ui-accent)]"
                      style={{ width: "100%" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.25 + 0.2 }}
                    />
                    {/* Pastille d'argent qui circule */}
                    <motion.span
                      className="absolute z-10 grid h-7 w-7 place-items-center rounded-full bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)] shadow-md"
                      initial={{ x: -16, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE, delay: index * 0.25 + 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                    </motion.span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <motion.p
            className="mt-8 rounded-2xl bg-[color:var(--ui-surface-soft)] px-5 py-4 text-center text-sm font-bold text-[color:var(--ui-accent)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Mweema prélève automatiquement 5% de commission au passage — les dons ne passent jamais par son compte bancaire.
          </motion.p>
        </motion.div>

        {/* Badges de confiance */}
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" amount={0.2}>
          {trustItems.map((item) => (
            <motion.div
              variants={staggerItem}
              key={item.title}
              className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-[color:var(--ui-accent)]" />
              <h3 className="mt-4 text-base font-black text-[color:var(--ui-text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--ui-muted)]">{item.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
