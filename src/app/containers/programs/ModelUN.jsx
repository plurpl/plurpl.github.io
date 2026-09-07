import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";

export const ModelUN = () => {
  const { t } = useTranslation();

  const modelUNProgramContent = (
    <div className="content-image-title-text-text">
      {t("programs.modelUN.section1.content")}
    </div>
  );

  const modelUNBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.modelUN.section2.content")}
    </div>
  );

  const modelUNProgramImageTitle = (
    <ContentImageTitle
      title={t("programs.modelUN.section1.title")}
      image={
        <img src={"/images/tournaments/modelun.jpg"} alt="Model UN Program" />
      }
      text={modelUNProgramContent}
      bkgColor="yellow"
    />
  );

  const modelUNBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img src={"/images/courses/model-un.jpg"} alt="Model UN Benefits" />
      }
      text={modelUNBenefitsContent}
      bkgColor="blue"
    />
  );

  const coach1 = {
    name: "Madeline K",
    title: "Model UN Coach",
    image: "/images/coaches/madeline_k.jpg",
    achievements: [
      t("coaches.madeline_k.achievement1"),
      t("coaches.madeline_k.achievement2"),
      t("coaches.madeline_k.achievement3"),
      t("coaches.madeline_k.achievement4"),
    ],
  };

  const coach2 = {
    name: "Sean O",
    title: "Model UN Coach",
    image: "/images/coaches/sean_o.jpg",
    achievements: [
      t("coaches.sean_o.achievement1"),
      t("coaches.sean_o.achievement2"),
      t("coaches.sean_o.achievement3"),
      t("coaches.sean_o.achievement4"),
    ],
  };

  return (
    <div className="model-un-page">
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.modelUN.title")}
        content={modelUNProgramImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        coach2={coach2}
        title="Our Heads of MUN"
        description="TBA's MUN coaches are seasoned and accomplished experts in Model UN, with extensive experience both competing in and running MUN conferences."
      />
      <ContentWrapper
        headerColor="blue"
        title={t("programs.modelUN.section2.title")}
        content={modelUNBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
