"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, staggerItem } from "@/components/ui/motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Preuve sociale"
          title="Bientôt, leurs mots ici."
          text="Mweema ouvre ses premières organisations pilotes. Les témoignages affichés ci-dessous sont des emplacements réservés — nous ne publions aucun avis inventé."
          align="center"
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" amount={0.15}>
          {testimonials.map((t, i) => (
            <motion.figure
              variants={staggerItem}
              key={i}
              className="relative rounded-[1.75rem] border border-dashed border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-7"
            >
              <span className="absolute right-5 top-5 rounded-full bg-[color:var(--ui-surface-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--ui-muted)]">
                Placeholder
              </span>
              <Quote className="h-8 w-8 text-[color:var(--ui-mint)]" />
              <blockquote className="mt-5 leading-7 text-[color:var(--ui-muted)]">{t.placeholder}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--ui-line)] pt-5">
                <span className="h-10 w-10 rounded-full bg-[color:var(--ui-surface-soft)]" />
                <span className="text-sm font-black text-[color:var(--ui-text)]">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
