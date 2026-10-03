import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Mweema accueil">
      <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)]">
        <Image
          alt=""
          className="h-full w-full object-cover"
          height={80}
          priority
          src="/brand/mweema.png"
          width={80}
        />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black tracking-[0.01em] text-[color:var(--ui-accent)]">Mweema</span>
        <span className="block text-xs font-medium text-[color:var(--ui-muted)]">Pour ici et l&apos;au-delà</span>
      </span>
    </Link>
  );
}
