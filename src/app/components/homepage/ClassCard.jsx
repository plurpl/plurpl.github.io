import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslationHook } from "../../language/useTranslationHook";

export const ClassCard = ({ title, description, image, route, className }) => {
  const { t } = useTranslationHook();
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div data-aos="fade-up" className={`class-card ${className || ""}`}>
      <div className="class-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="class-content">
        <h3 className="class-name">{title}</h3>
        <p className="class-description">{description}</p>
        <button className="learn-more-class-btn" onClick={handleLearnMoreClick}>
          {t("classesSection.learnMore")}
        </button>
      </div>
    </div>
  );
};
