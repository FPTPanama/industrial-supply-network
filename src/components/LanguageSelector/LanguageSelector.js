"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import classNames from "classnames";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={classNames("flex", "gap-2", "items-center")}>
      <button
        onClick={() => changeLanguage("en")}
        className={classNames(
          "px-3",
          "py-1",
          "rounded",
          "transition-all",
          language === "en" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700"
        )}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={classNames(
          "px-3",
          "py-1",
          "rounded",
          "transition-all",
          language === "es" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700"
        )}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;

