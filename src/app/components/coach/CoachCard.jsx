import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";

export const CoachCard = ({ coach }) => {
  const { t } = useTranslation();

  return (
    <div className="coach-card" data-aos="fade-up">
      <div className="coach-image-container">
        <img src={coach.image} alt={coach.name} className="coach-image" />
      </div>
      <div className="coach-info">
        <h3 className="coach-name">{coach.name}</h3>
        <p className="coach-title">{coach.title}</p>
        <div className="coach-achievements">
          <h4>{t("ourTeamPage.achievements")}:</h4>
          <ul>
            {coach.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
