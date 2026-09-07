import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";

export const CoachCardNew = ({ coach, enableAos = true }) => {
  const { t } = useTranslation();

  return (
    <div
      className="coach-card-new"
      data-aos={enableAos ? "fade-up" : undefined}
    >
      <div className="coach-header-new">
        <div className="coach-profile-new">
          <img
            src={coach.image}
            alt={coach.name}
            className="coach-profile-image-new"
          />
        </div>
        <div className="coach-title-info-new">
          <div className="coach-title-main-new">{coach.title}</div>
          <div className="coach-name-new">{coach.name}</div>
        </div>
      </div>

      <div className="coach-separator-new"></div>

      <div className="coach-achievements-new">
        <ul className="achievement-list-new">
          {coach.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
