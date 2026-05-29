"use client";

import { useLanguage } from "../contexts/LanguageContext";

const cardStyle: Record<string, string> = {
  indigo: "border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/50 bg-indigo-50/50 dark:bg-indigo-500/4",
  purple: "border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/50 bg-purple-50/50 dark:bg-purple-500/4",
  blue:   "border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/50 bg-blue-50/50 dark:bg-blue-500/4",
  cyan:   "border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/50 bg-cyan-50/50 dark:bg-cyan-500/4",
  emerald:"border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-500/4",
  amber:  "border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/50 bg-amber-50/50 dark:bg-amber-500/4",
};

const tagStyle: Record<string, string> = {
  indigo: "bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20",
  purple: "bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20",
  blue:   "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20",
  cyan:   "bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20",
  emerald:"bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
  amber:  "bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20",
};

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {s.title} <span className="gradient-text">{s.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {s.categories.map((cat) => (
            <div key={cat.title} className={`p-5 sm:p-6 rounded-2xl border card-hover transition-all duration-300 ${cardStyle[cat.color]}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-slate-800 dark:text-white text-[15px]">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${tagStyle[cat.color]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
