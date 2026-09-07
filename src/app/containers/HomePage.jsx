import React from "react";
import { Background } from "../components/homepage/Background";
import { MainContent } from "../components/homepage/MainContent";
import { ClassesSection } from "../components/homepage/ClassesSection";
import { InfoSection } from "../components/homepage/InfoSection";
import { StudentQuote } from "../components/homepage/StudentQuote";
import "../App.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Background />
      <MainContent />
      <ClassesSection />
      <InfoSection />
      <StudentQuote />
    </div>
  );
};
