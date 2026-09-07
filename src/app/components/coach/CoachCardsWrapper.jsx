import React from "react";
import { CoachCardNew } from "./CoachCardNew";
import "../../App.css";

export const CoachCardsWrapper = ({ coach1, coach2, title, description }) => {
  return (
    <div className="coach-cards-wrapper">
      {title && (
        <div className="coach-cards-header">
          <h2 className="coach-cards-title">{title}</h2>
        </div>
      )}
      <div className="coach-cards-outer-wrapper">
        <div className="coach-cards-container">
          <div className="coach-card-wrapper">
            <CoachCardNew coach={coach1} enableAos={false} />
          </div>
          {coach2 && (
            <div className="coach-card-wrapper">
              <CoachCardNew coach={coach2} enableAos={false} />
            </div>
          )}
        </div>
      </div>
      {description && (
        <div className="coach-cards-footer">
          <p className="coach-cards-description">{description}</p>
        </div>
      )}
    </div>
  );
};
