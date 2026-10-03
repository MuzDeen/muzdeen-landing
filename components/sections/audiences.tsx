"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, TiltCard } from "@/components/ui/motion";
import { organizations } from "@/lib/content";

export function Audiences() {
  return (
    <section id="pour-qui" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Pour qui"
          title="Pensé pour toutes les organisations de la communauté."
          text="Chaque structure est vérifiée par notre équipe avant d'être mise en ligne."
          align="center"
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.15}>
          {organizations.map((org) => (
            <TiltCard
              key={org.title}
              className="group rounded-[1.75rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-7 shadow-sm transition-shadow duration-300 hover:shadow-[0_28px_70px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-accent)] transition-colors duration-300 group-hover:bg-[color:var(--ui-accent)] group-hover:text-[color:var(--ui-on-primary)]">
                <org.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-black text-[color:var(--ui-text)]">{org.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--ui-muted)]">{org.text}</p>
            </TiltCard>
          ))}

          {/* Carte d'accroche */}
          <TiltCard className="flex flex-col justify-between rounded-[1.75rem] border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-7 text-[color:var(--ui-on-primary)] shadow-[0_28px_70px_color-mix(in_srgb,var(--ui-shadow)_22%,transparent)]">
            <p className="text-lg font-black leading-snug">
              Votre organisation a une mission. Mweema lui donne les moyens de la financer.
            </p>
            <a
              href="#demo"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--ui-on-primary)] px-5 py-3 text-sm font-black text-[color:var(--ui-accent)] transition hover:opacity-90"
            >
              Inscrire mon organisation
            </a>
          </TiltCard>
        </Stagger>
      </div>
    </section>
  );
}
