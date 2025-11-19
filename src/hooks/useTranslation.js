"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return { t, language };
};

