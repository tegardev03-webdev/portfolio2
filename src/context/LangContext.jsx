import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { translations } from "@/lib/i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "id";
    return localStorage.getItem("portfolio-lang") || "id";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "id" ? "en" : "id")),
      t: translations[lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
