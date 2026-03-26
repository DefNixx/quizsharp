import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { locales } from "./index";

const LOCALE_KEY = "quizsharp-locale";

function detectLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (saved && locales[saved]) return saved;
  } catch {}
  const lang = navigator.language || "en";
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es";
  return "en";
}

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(detectLocale);

  useEffect(() => {
    try { localStorage.setItem(LOCALE_KEY, locale); } catch {}
  }, [locale]);

  const t = useMemo(() => {
    const ui = locales[locale]?.ui || locales["en"].ui;
    return (key, params) => {
      let str = ui[key] ?? key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          str = str.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v);
        });
      }
      return str;
    };
  }, [locale]);

  const content = useMemo(() => locales[locale]?.content || locales["en"].content, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, content }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
