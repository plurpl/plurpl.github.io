import React from "react";
import { useTranslationHook } from "../../../language/useTranslationHook";
import { useNavigate } from "react-router-dom";

export const BodyText = () => {
  const { t } = useTranslationHook();
  const navigate = useNavigate();
  return (
    <div className="left-panel">
      <div className="panel-content">
        <h2 className="panel-title">{t("mainContent.bodyText.title")}</h2>
        <p className="panel-description">
          {t("mainContent.bodyText.description")}
        </p>
        <button
          onClick={() => navigate("/about/our-story")}
          className="learn-more-btn"
        >
          {t("mainContent.bodyText.learnMore")}
        </button>
      </div>
    </div>
  );
};
