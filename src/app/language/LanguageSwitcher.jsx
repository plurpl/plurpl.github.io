import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher-container">
      <button
        className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`lang-btn ${currentLanguage === "zh" ? "active" : ""}`}
        onClick={() => changeLanguage("zh")}
      >
        中文
      </button>
    </div>
  );
};
