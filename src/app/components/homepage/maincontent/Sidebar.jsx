import React from "react";
import { NavigationItem } from "./NavigationItem";
import { useTranslationHook } from "../../../language/useTranslationHook";

export const Sidebar = () => {
  const { t } = useTranslationHook();

  return (
    <div className="left-sidebar">
      <div className="sidebar-header"></div>
      <nav className="sidebar-navigation">
        <NavigationItem
          type="story"
          navTo="programs"
          text={t("mainContent.sidebar.academicPrograms")}
        />
        <NavigationItem
          type="team"
          navTo="about/our-team"
          text={t("mainContent.sidebar.studentServices")}
        />
        <NavigationItem
          type="register"
          navTo="register"
          text={t("mainContent.sidebar.applyNow")}
          showDivider={false}
        />
      </nav>
    </div>
  );
};
