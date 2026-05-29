"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="relative w-10 h-10 rounded-xl border border-slate-700 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center overflow-hidden"
    >
      <span
        className={`absolute font-bold text-xs tracking-tight transition-all duration-500 ${
          lang === "fr"
            ? "translate-y-0 opacity-100 text-indigo-500 dark:text-indigo-400"
            : "translate-y-8 opacity-0"
        }`}
      >
        FR
      </span>
      <span
        className={`absolute font-bold text-xs tracking-tight transition-all duration-500 ${
          lang === "en"
            ? "translate-y-0 opacity-100 text-indigo-500 dark:text-indigo-400"
            : "-translate-y-8 opacity-0"
        }`}
      >
        EN
      </span>
    </button>
  );
}
