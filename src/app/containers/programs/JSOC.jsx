import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";

export const JSOC = () => {
  const { t } = useTranslation();

  const jsocContent = (
    <div className="content-image-title-text-text">
      {t("programs.jsoc.section1.content")}
    </div>
  );

  const jsocBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.jsoc.section2.content")}
    </div>
  );

  const jsocImageTitle = (
    <ContentImageTitle
      title={t("programs.jsoc.section1.title")}
      image={<img src={"/images/posters/jsoc.jpg"} alt="JSOC Program" />}
      text={jsocContent}
      bkgColor="yellow"
      poster={true}
    />
  );

  const jsocBenefitsImageTitle = (
    <ContentImageTitle
      image={<img src={"/images/courses/jsoc.jpg"} alt="JSOC Benefits" />}
      text={jsocBenefitsContent}
      bkgColor="blue"
    />
  );

  return (
    <div className="jsoc-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.jsoc.title")}
        content={jsocImageTitle}
        alignment="left"
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.jsoc.section2.title")}
        content={jsocBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
