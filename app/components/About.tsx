"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {a.title} <span className="gradient-text">{a.titleHighlight}</span>
          </h2>
        </div>

        {/* Bio — pleine largeur */}
        <div className="space-y-4 mb-8 max-w-3xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">{a.p1}</p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
            {a.p2start}
            <span className="text-indigo-600 dark:text-indigo-300 font-medium">{a.p2highlight}</span>
            {a.p2end}
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
            {a.p3start}
            <span className="text-slate-800 dark:text-white font-medium">{a.p3company}</span>
            {a.p3end}
          </p>
        </div>

        {/* Qualités — centrées */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {a.qualities.map((q) => (
            <span key={q} className="px-4 py-1.5 rounded-xl border border-indigo-300 dark:border-indigo-500/25 bg-indigo-50 dark:bg-indigo-500/8 text-indigo-700 dark:text-indigo-300 text-sm">
              {q}
            </span>
          ))}
        </div>

        {/* 3 cartes égales : Langues | Disponibilité | Loisirs */}
        <div className="grid sm:grid-cols-3 gap-5">

          {/* Langues */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
            <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-4 font-medium">{a.langLabel}</p>
            <div className="space-y-3">
              {a.languages.map((l) => (
                <div key={l.name} className="flex items-center gap-3">
                  <span className="text-xl">{l.flag}</span>
                  <div>
                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-tight">{l.name}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs">{l.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disponibilité */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
            <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-4 font-medium">{a.availLabel}</p>
            <div className="space-y-3">
              {a.availItems.map((item) => (
                <div key={item} className={`flex items-center gap-2 text-sm ${item === a.availHighlight ? "text-emerald-600 dark:text-emerald-400 font-semibold" : "text-slate-600 dark:text-slate-300"}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Loisirs */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
            <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-4 font-medium">{a.hobbiesLabel}</p>
            <div className="space-y-3">
              {a.hobbies.map((h) => (
                <div key={h.text} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="text-xl">{h.icon}</span>
                  {h.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
