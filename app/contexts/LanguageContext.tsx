"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang, Translations } from "../i18n/translations";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  t: translations.fr,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
