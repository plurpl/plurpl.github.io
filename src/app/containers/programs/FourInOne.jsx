import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";

export const FourInOne = () => {
  const { t } = useTranslation();

  const fourInOneProgramContent = (
    <div className="content-image-title-text-text">
      {t("programs.fourInOne.section1.content")}
    </div>
  );

  const fourInOneBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.fourInOne.section2.content")}
    </div>
  );

  const fourInOneProgramImageTitle = (
    <ContentImageTitle
      title={t("programs.fourInOne.section1.title")}
      image={
        <img
          src={"/images/tournaments/workshop/friday_workshop4.jpg"}
          alt="4-in-1 Program"
        />
      }
      text={fourInOneProgramContent}
      bkgColor="yellow"
    />
  );

  const fourInOneBenefitsImageTitle = (
    <ContentImageTitle
      image={<img src={"/images/posters/4-in-1.jpg"} alt="4-in-1 Benefits" />}
      text={fourInOneBenefitsContent}
      bkgColor="blue"
      poster={true}
    />
  );
  const coach1 = {
    name: "Charlie P",
    title: "Head Coach",
    image: "/images/coaches/charlie_p.jpg",
    achievements: [
      t("coaches.charlie_p.achievement1"),
      t("coaches.charlie_p.achievement2"),
      t("coaches.charlie_p.achievement3"),
      t("coaches.charlie_p.achievement4"),
    ],
  };

  return (
    <div className="four-in-one-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.fourInOne.title")}
        content={fourInOneProgramImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        title="Our Head Coach"
        description={t("programs.debate.coaches.description")}
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.fourInOne.section2.title")}
        content={fourInOneBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
