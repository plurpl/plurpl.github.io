import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../components/common/ContentWrapper";
import { ContentImageTitle } from "../components/common/ContentImageTitle";
import "../App.css";

export const OurStory = () => {
  const { t } = useTranslation();

  const ourStoryContent = (
    <div className="content-image-title-text-text">
      {t("ourStory.section1.content")}
    </div>
  );

  const ourStoryVisionContent = (
    <div className="content-image-title-text-text">
      {t("ourStory.section2.content")}
    </div>
  );

  const ourStoryImageTitle = (
    <ContentImageTitle
      title={t("ourStory.section1.title")}
      image={
        <img src={"/images/tournaments/awsdc/awsdc 1.jpg"} alt="Our Story" />
      }
      text={ourStoryContent}
      bkgColor="yellow"
    />
  );

  const ourFoundersImageTitle = (
    <ContentImageTitle
      image={
        <img
          src={"/images/tournaments/workshop/friday_workshop4.jpg"}
          alt="Our Story"
        />
      }
      text={ourStoryVisionContent}
      bkgColor="blue"
    />
  );

  return (
    <div className="our-story-page">
      <ContentWrapper
        headerColor="yellow"
        title={t("ourStory.title")}
        content={ourStoryImageTitle}
        alignment="left"
      />
      <ContentWrapper
        headerColor="blue"
        title={t("ourStory.section2.title")}
        content={ourFoundersImageTitle}
        alignment="right"
      />
    </div>
  );
};
