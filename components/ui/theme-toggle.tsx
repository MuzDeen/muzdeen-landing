"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("mweema-theme", next);
    setTheme(next);
  }

  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode nuit"}
      className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] text-[color:var(--ui-accent)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--ui-surface-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ui-accent)]"
      onClick={toggleTheme}
      type="button"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
