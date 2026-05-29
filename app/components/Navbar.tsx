"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about",      label: t.nav.about },
    { href: "#skills",     label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects",   label: t.nav.projects },
    { href: "#education",  label: t.nav.education },
    { href: "#contact",    label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b shadow-xl shadow-black/10 dark:shadow-black/30" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-lg">
            <span className="gradient-text">MB</span>
          </span>
          <span className="hidden sm:block text-slate-400 dark:text-slate-600 text-sm font-light">
            · portfolio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-500/20"
          >
            {t.nav.contactBtn}
          </a>
          <button
            className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-slate-200 dark:border-slate-800/80 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/50">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg text-center transition-colors"
            >
              {t.nav.contactBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
