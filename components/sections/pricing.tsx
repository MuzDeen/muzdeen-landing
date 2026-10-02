"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE, Stagger, staggerItem } from "@/components/ui/motion";
import { pricing } from "@/lib/content";

function Amount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
    </span>
  );
}

const toneClass = {
  primary: "bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)]",
  accent: "bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-accent)]",
  muted: "bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-muted-strong)]",
} as const;

export function Pricing() {
  const { donation, breakdown } = pricing.example;
  const max = Math.max(...breakdown.map((b) => b.amount));

  return (
    <section id="tarif" className="night-panel py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Le modèle économique"
            title="Vous ne payez que si vous collectez."
            text="Pas d'abonnement, pas de frais cachés. Une commission de 5% uniquement sur les dons reçus."
            tone="dark"
          />
          <Stagger className="mt-8 grid gap-3">
            {pricing.points.map((point) => (
              <motion.div
                variants={staggerItem}
                key={point.title}
                className="flex gap-3 rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-4"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-black text-[color:var(--ui-text)]">{point.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--ui-muted-strong)]">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Carte exemple */}
        <motion.div
          className="rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-7 shadow-[0_30px_80px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)] md:p-9"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">Exemple concret</p>
          <p className="mt-3 text-5xl font-black text-[color:var(--ui-text)]">
            Pour un don de {donation} €
          </p>
          <div className="mt-8 grid gap-5">
            {breakdown.map((row) => (
              <div key={row.label}>
                <div className="flex items-baseline justify-between">
                  <span className="font-black text-[color:var(--ui-text)]">{row.label}</span>
                  <span className="font-black text-[color:var(--ui-accent)]">
                    <Amount value={row.amount} />
                  </span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-[color:var(--ui-surface-soft)]">
                  <motion.div
                    className={`h-full rounded-full ${toneClass[row.tone]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(row.amount / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                  />
                </div>
                <p className="mt-1 text-xs text-[color:var(--ui-muted)]">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 rounded-2xl bg-[color:var(--ui-surface-soft)] px-4 py-3 text-center text-sm font-bold text-[color:var(--ui-accent)]">
            L&apos;organisation reçoit l&apos;essentiel. Directement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
