"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="font-bold"><span className="gradient-text">MB</span></span>
          <span className="text-slate-400 dark:text-slate-600 text-sm">{f.copyright}</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/gpoikitchi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/messipsa-boussaid-37b4a5225" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="mailto:messipsa.boussaid@gmail.com" aria-label="Email"
            className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>


      </div>
    </footer>
  );
}
