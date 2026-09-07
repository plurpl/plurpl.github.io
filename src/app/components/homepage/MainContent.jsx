import React from "react";
import { Sidebar } from "./maincontent/Sidebar";
import { TitleBar } from "./maincontent/TitleBar";
import { BodyText } from "./maincontent/BodyText";
import { ContactForm } from "./maincontent/ContactForm";

export const MainContent = () => {
  return (
    <section className="main-content-section">
      <div data-aos="fade-in" className="content-layout">
        <Sidebar />
        <div className="right-content">
          <TitleBar />
          <div className="content-panels">
            <BodyText />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
