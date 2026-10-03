"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DemoForm } from "@/components/demo-form";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE } from "@/components/ui/motion";
import { finalCta } from "@/lib/content";

const cards = [finalCta.donor, finalCta.organization];

export function FinalCta() {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="On commence ?"
          title="Deux façons de rejoindre Mweema."
          text="Que vous soyez donateur ou responsable d'organisation, votre place est ici."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.1 }}
              className={
                index === 1
                  ? "flex flex-col rounded-[2rem] border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-8 text-[color:var(--ui-on-primary)] shadow-[0_30px_80px_color-mix(in_srgb,var(--ui-shadow)_22%,transparent)]"
                  : "flex flex-col rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-8 shadow-sm"
              }
            >
              <span
                className={
                  index === 1
                    ? "grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--ui-primary-overlay)] text-[color:var(--ui-on-primary)]"
                    : "grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-accent)]"
                }
              >
                <card.icon className="h-7 w-7" />
              </span>
              <h3 className={index === 1 ? "mt-6 text-2xl font-black" : "mt-6 text-2xl font-black text-[color:var(--ui-text)]"}>
                {card.title}
              </h3>
              <p className={index === 1 ? "mt-3 leading-7 opacity-90" : "mt-3 leading-7 text-[color:var(--ui-muted)]"}>
                {card.text}
              </p>
              <Link
                href={card.cta.href}
                className={
                  index === 1
                    ? "group mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[color:var(--ui-on-primary)] px-6 text-sm font-black text-[color:var(--ui-accent)] transition hover:opacity-90"
                    : "group mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[color:var(--ui-accent)] px-6 text-sm font-black text-[color:var(--ui-on-primary)] transition hover:bg-[color:var(--ui-accent-hover)]"
                }
              >
                {card.cta.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Formulaire de demande (préservé) */}
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">
            Inscrire mon organisation
          </p>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
