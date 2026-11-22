import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

export const normalizeLanguage = (language: string) => language.toLowerCase().split("-")[0];

export const syncDocumentLanguage = () => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = i18n.resolvedLanguage ?? "pt";
  }
};

i18n.on("initialized", syncDocumentLanguage);
i18n.on("languageChanged", syncDocumentLanguage);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      convertDetectedLanguage: normalizeLanguage,
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lowmovie_lang",
    },
  });

export default i18n;
