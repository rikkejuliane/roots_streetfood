"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { translations } from "./translations";

type Language = "hr" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: typeof translations.hr; // current translation object
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("hr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "hr" ? "en" : "hr"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for convenience
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
