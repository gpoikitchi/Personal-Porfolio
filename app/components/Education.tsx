"use client";

import { useLanguage } from "../contexts/LanguageContext";

const statusStyle: Record<string, string> = {
  upcoming: "border-amber-300 dark:border-amber-500/30 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300",
  current:  "border-emerald-300 dark:border-emerald-500/30 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  done:     "border-indigo-300 dark:border-indigo-500/30 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
};

const dotStyle: Record<string, string> = {
  upcoming: "border-amber-400 shadow-amber-500/20",
  current:  "border-emerald-400 shadow-emerald-500/20",
  done:     "border-indigo-400 shadow-indigo-500/20",
};

export default function Education() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {e.title} <span className="gradient-text">{e.titleHighlight}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-500 via-emerald-500 to-indigo-500 rounded-full opacity-70" />
          <div className="space-y-8">
            {e.items.map((f, i) => (
              <div key={i} className="relative pl-14">
                <div className={`absolute left-[11px] top-7 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 shadow-lg ${dotStyle[f.status]}`} />
                <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 shadow-sm dark:shadow-none card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyle[f.status]}`}>
                      {f.statusLabel}
                    </span>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium shrink-0">{f.period}</p>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-[15px] mb-1">{f.degree}</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm mb-3">{f.school}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{f.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 rounded-lg text-xs border border-slate-200 dark:border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
