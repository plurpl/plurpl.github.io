import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";
import "../../App.css";

export const Debate = () => {
  const { t } = useTranslation();

  const debateProgramContent = (
    <div className="content-image-title-text-text">
      {t("programs.debate.section1.content")}
    </div>
  );

  const debateBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.debate.section2.content")}
    </div>
  );

  const debateProgramImageTitle = (
    <ContentImageTitle
      title={t("programs.debate.section1.title")}
      image={
        <img
          src={"/images/tournaments/awsdc/awsdc 3.jpg"}
          alt="Debate Program"
        />
      }
      text={debateProgramContent}
      bkgColor="yellow"
    />
  );

  const debateBenefitsImageTitle = (
    <ContentImageTitle
      image={<img src={"/images/posters/debate.jpg"} alt="Debate Benefits" />}
      text={debateBenefitsContent}
      bkgColor="blue"
      poster={true}
    />
  );

  const coach1 = {
    name: "Chris P",
    title: "Head Coach",
    image: "/images/coaches/chris_p.jpg",
    achievements: [
      t("coaches.chris_p.achievement1"),
      t("coaches.chris_p.achievement2"),
      t("coaches.chris_p.achievement3"),
      t("coaches.chris_p.achievement4"),
    ],
  };

  const coach2 = {
    name: "Deborah W",
    title: "Head Coach",
    image: "/images/coaches/deborah_w.jpg",
    achievements: [
      t("coaches.deborah_w.achievement1"),
      t("coaches.deborah_w.achievement2"),
      t("coaches.deborah_w.achievement3"),
      t("coaches.deborah_w.achievement4"),
    ],
  };

  return (
    <div className="debate-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.debate.title")}
        content={debateProgramImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        coach2={coach2}
        title={t("programs.debate.coaches.title")}
        description={t("programs.debate.coaches.description")}
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.debate.section2.title")}
        content={debateBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
