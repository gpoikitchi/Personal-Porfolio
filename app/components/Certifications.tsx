"use client";

import { useLanguage } from "../contexts/LanguageContext";

const borderStyle: Record<string, string> = {
  amber:  "border-amber-200 dark:border-amber-500/25 hover:border-amber-400 dark:hover:border-amber-500/50",
  purple: "border-purple-200 dark:border-purple-500/25 hover:border-purple-400 dark:hover:border-purple-500/50",
  blue:   "border-blue-200 dark:border-blue-500/25 hover:border-blue-400 dark:hover:border-blue-500/50",
  rose:   "border-rose-200 dark:border-rose-500/25 hover:border-rose-400 dark:hover:border-rose-500/50",
  emerald:"border-emerald-200 dark:border-emerald-500/25 hover:border-emerald-400 dark:hover:border-emerald-500/50",
};

const orgStyle: Record<string, string> = {
  amber:  "text-amber-600 dark:text-amber-400",
  purple: "text-purple-600 dark:text-purple-400",
  blue:   "text-blue-600 dark:text-blue-400",
  rose:   "text-rose-600 dark:text-rose-400",
  emerald:"text-emerald-600 dark:text-emerald-400",
};

export default function Certifications() {
  const { t } = useLanguage();
  const c = t.certifications;

  return (
    <section id="certifications" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {c.title} <span className="gradient-text">{c.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">{c.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.items.map((cert) => (
            <div key={cert.title} className={`flex items-start gap-4 p-5 rounded-2xl border bg-white dark:bg-slate-800/20 card-hover transition-all duration-300 shadow-sm dark:shadow-none ${borderStyle[cert.color]}`}>
              <span className="text-3xl shrink-0 mt-0.5">{cert.icon}</span>
              <div className="min-w-0">
                <h3 className="text-slate-900 dark:text-white font-medium text-sm leading-snug mb-1">{cert.title}</h3>
                <p className={`text-sm font-medium ${orgStyle[cert.color]}`}>{cert.org}</p>
                <p className="text-slate-400 dark:text-slate-600 text-xs mt-0.5">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
