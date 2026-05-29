"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-xl border border-slate-700 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group overflow-hidden"
    >
      {/* Sun */}
      <span
        className={`absolute text-lg transition-all duration-500 ${
          isDark ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        ☀️
      </span>
      {/* Moon */}
      <span
        className={`absolute text-lg transition-all duration-500 ${
          isDark ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        🌙
      </span>
    </button>
  );
}
