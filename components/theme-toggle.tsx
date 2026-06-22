"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300 dark:border-blue-500/40 dark:bg-black/70 dark:text-zinc-100 dark:hover:border-blue-300"
      aria-label="Toggle light and dark mode"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
