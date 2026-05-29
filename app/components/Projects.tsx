"use client";

import { useLanguage } from "../contexts/LanguageContext";

const cardStyle: Record<string, string> = {
  indigo: "border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/50",
  purple: "border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/50",
  blue:   "border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/50",
  cyan:   "border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/50",
  amber:  "border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/50",
  emerald:"border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/50",
  pink:   "border-pink-200 dark:border-pink-500/20 hover:border-pink-400 dark:hover:border-pink-500/50",
  rose:   "border-rose-200 dark:border-rose-500/20 hover:border-rose-400 dark:hover:border-rose-500/50",
};

const catStyle: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10",
  purple: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10",
  blue:   "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10",
  cyan:   "text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10",
  amber:  "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10",
  emerald:"text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10",
  pink:   "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-500/10",
  rose:   "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10",
};

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {p.title} <span className="gradient-text">{p.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">{p.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {p.items.map((project) => (
            <div key={project.title} className={`group p-5 sm:p-6 rounded-2xl border bg-white dark:bg-slate-800/15 card-hover transition-all duration-300 flex flex-col shadow-sm dark:shadow-none ${cardStyle[project.color]}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${catStyle[project.color]}`}>
                  {project.category}
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2 leading-snug text-[15px]">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 rounded-md text-xs border border-slate-200 dark:border-slate-700/50">
                    {tag}
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
