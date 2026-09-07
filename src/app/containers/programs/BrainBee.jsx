import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";

export const BrainBee = () => {
  const { t } = useTranslation();

  const brainBeeContent = (
    <div className="content-image-title-text-text">
      {t("programs.brainBee.section1.content")}
    </div>
  );

  const brainBeeBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.brainBee.section2.content")}
    </div>
  );

  const brainBeeImageTitle = (
    <ContentImageTitle
      title={t("programs.brainBee.section1.title")}
      image={
        <img src={"/images/posters/brainbee.jpg"} alt="Brain Bee Program" />
      }
      text={brainBeeContent}
      bkgColor="yellow"
      poster={true}
    />
  );

  const brainBeeBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img src={"/images/courses/brainbee.jpg"} alt="Brain Bee Benefits" />
      }
      text={brainBeeBenefitsContent}
      bkgColor="blue"
    />
  );

  return (
    <div className="brain-bee-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.brainBee.title")}
        content={brainBeeImageTitle}
        alignment="left"
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.brainBee.section2.title")}
        content={brainBeeBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
