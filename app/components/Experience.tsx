"use client";

import { useLanguage } from "../contexts/LanguageContext";

const typeStyle: Record<string, string> = {
  Stage:      "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/25",
  Freelance:  "bg-purple-100 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/25",
  Internship: "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/25",
};

const dotStyle: Record<string, string> = {
  indigo: "border-indigo-400 shadow-indigo-500/30",
  purple: "border-purple-400 shadow-purple-500/30",
};

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {e.title} <span className="gradient-text">{e.titleHighlight}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent rounded-full" />
          <div className="space-y-8">
            {e.items.map((exp, i) => (
              <div key={i} className="relative pl-14">
                <div className={`absolute left-[11px] top-7 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 shadow-lg ${dotStyle[exp.color]}`} />
                <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 shadow-sm dark:shadow-none card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeStyle[exp.type]}`}>{exp.type}</span>
                      <h3 className="text-slate-900 dark:text-white font-semibold">{exp.role}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{exp.period}</p>
                      <p className="text-slate-400 dark:text-slate-600 text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">▸</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
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
