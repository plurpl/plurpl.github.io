import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";

export const BusinessCase = () => {
  const { t } = useTranslation();

  const businessCaseContent = (
    <div className="content-image-title-text-text">
      {t("programs.businessCase.section1.content")}
    </div>
  );

  const businessCaseBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.businessCase.section2.content")}
    </div>
  );

  const businessCaseImageTitle = (
    <ContentImageTitle
      title={t("programs.businessCase.section1.title")}
      image={
        <img
          src={"/images/courses/case-comp.jpg"}
          alt="Business Case Competition Program"
        />
      }
      text={businessCaseContent}
      bkgColor="yellow"
    />
  );

  const businessCaseBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img
          src={"/images/posters/case-comp.png"}
          alt="Business Case Competition Benefits"
        />
      }
      text={businessCaseBenefitsContent}
      bkgColor="blue"
      poster={true}
    />
  );

  const coach1 = {
    name: "Emily C",
    title: "Case Competition Coach",
    image: "/images/coaches/emily_c.jpg",
    achievements: [
      t("coaches.emily_c.achievement1"),
      t("coaches.emily_c.achievement2"),
      t("coaches.emily_c.achievement3"),
      t("coaches.emily_c.achievement4"),
    ],
  };
  return (
    <div className="business-case-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.businessCase.title")}
        content={businessCaseImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        title="Our Case Competition Coach"
        description="TBA's Case Competition coaches are seasoned and accomplished experts in case competitions, with extensive experience both competing in and running case competitions."
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.businessCase.section2.title")}
        content={businessCaseBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
