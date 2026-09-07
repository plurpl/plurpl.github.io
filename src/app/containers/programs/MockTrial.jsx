import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";

export const MockTrial = () => {
  const { t } = useTranslation();

  const mockTrialContent = (
    <div className="content-image-title-text-text">
      {t("programs.mockTrial.section1.content")}
    </div>
  );

  const mockTrialBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.mockTrial.section2.content")}
    </div>
  );

  const mockTrialImageTitle = (
    <ContentImageTitle
      title={t("programs.mockTrial.section1.title")}
      image={
        <img src={"/images/courses/mock-trial.jpg"} alt="Mock Trial Program" />
      }
      text={mockTrialContent}
      bkgColor="yellow"
    />
  );

  const coach1 = {
    name: "Ameen P",
    title: "MockTrial Instructor",
    image: "/images/coaches/ameen_p.jpg",
    achievements: [
      t("coaches.ameen_p.achievement1"),
      t("coaches.ameen_p.achievement2"),
      t("coaches.ameen_p.achievement3"),
      t("coaches.ameen_p.achievement4"),
    ],
  };

  const mockTrialBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img src={"/images/posters/mock-trial.jpg"} alt="Mock Trial Benefits" />
      }
      text={mockTrialBenefitsContent}
      bkgColor="blue"
      poster={true}
    />
  );

  return (
    <div className="mock-trial-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.mockTrial.title")}
        content={mockTrialImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        title="Our MockTrial Instructor"
        description="TBA's Mock Trial coaches are international competitors who have won multiple awards and have a passion for teaching students the skills they need to succeed in Mock Trial."
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.mockTrial.section2.title")}
        content={mockTrialBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
