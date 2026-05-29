"use client";

import Image from "next/image";
import { Mail, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 dark:bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
              {h.available}
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-widest uppercase mb-3">
                {h.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Messipsa<br />
                <span className="gradient-text">Boussaid</span>
              </h1>
            </div>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px] max-w-lg mx-auto lg:mx-0">
              {h.description}
            </p>

            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
              {h.location}
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={h.cvFile}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-sm"
              >
                <Download className="w-4 h-4" />
                {h.downloadCV}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 hover:border-indigo-500/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                {h.contactMe}
              </a>
            </div>

            <div className="flex items-center gap-5 justify-center lg:justify-start pt-1">
              <a href="https://github.com/gpoikitchi" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">
                <GithubIcon className="w-4 h-4" /> gpoikitchi
              </a>
              <a href="https://www.linkedin.com/in/messipsa-boussaid-37b4a5225" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                <LinkedinIcon className="w-4 h-4" /> messipsa-boussaid
              </a>
              <a href="mailto:messipsa.boussaid@gmail.com"
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Photo card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-25 blur-sm" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col">

                {/* Photo */}
                <div className="relative flex-1 min-h-0">
                  <Image
                    src="/avatar.jpg"
                    alt="Messipsa Boussaid"
                    fill
                    priority
                    className="object-cover object-top brightness-[1.02] contrast-[1.03] dark:brightness-[0.88] dark:contrast-[1.08] transition-all duration-300"
                  />
                </div>

                {/* Info + code */}
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 px-5 pt-3 pb-4">
                  <div className="text-center mb-2.5">
                    <p className="text-slate-800 dark:text-white font-semibold text-sm">Messipsa Boussaid</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{h.cardSubtitle}</p>
                  </div>
                  <div className="font-mono text-xs space-y-0.5 text-left">
                    <p className="text-slate-400 dark:text-slate-600">
                      <span className="text-indigo-500">const</span>{" "}
                      <span className="text-slate-700 dark:text-white">profil</span> = {"{"}
                    </p>
                    <p className="text-slate-400 dark:text-slate-600 pl-3">
                      <span className="text-purple-500 dark:text-purple-400">domaine</span>:{" "}
                      <span className="text-emerald-500 dark:text-emerald-400">{h.codeDomain}</span>,
                    </p>
                    <p className="text-slate-400 dark:text-slate-600 pl-3">
                      <span className="text-purple-500 dark:text-purple-400">dispo</span>:{" "}
                      <span className="text-amber-500 dark:text-amber-400">{h.codeDispo}</span>
                    </p>
                    <p className="text-slate-400 dark:text-slate-600">{"}"}</p>
                  </div>
                </div>

              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-700 dark:text-slate-300 shadow-lg whitespace-nowrap">
                {h.badge1}
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-700 dark:text-slate-300 shadow-lg whitespace-nowrap">
                {h.badge2}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            <span className="text-xs">{h.discover}</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
