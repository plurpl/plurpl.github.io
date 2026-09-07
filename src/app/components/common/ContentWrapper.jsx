import React from "react";
import "../../App.css";

export const ContentWrapper = ({
  headerColor = "#3b82f6",
  textColor = "#111",
  title = "",
  content = ` test `,
  alignment = "left",
}) => {
  let headerClass = "";
  let bodyClass = "";
  let contentWrapperClass = "";
  let contentTitleClass = "";
  let contentTextWrapperClass = "";
  let fadeDirection = "";

  if (alignment === "left") {
    if (headerColor === "blue") {
      headerClass = "content-header-left-background-blue";
      bodyClass = "content-body-left-background-blue";
    } else {
      headerClass = "content-header-left-background-yellow";
      bodyClass = "content-body-left-background-yellow";
    }
    contentWrapperClass = "content-wrapper-left";
    contentTitleClass = "content-title-left";
    contentTextWrapperClass = "content-text-wrapper-left";
    fadeDirection = "fade-left";
  } else {
    if (headerColor === "blue") {
      headerClass = "content-header-right-background-blue";
      bodyClass = "content-body-right-background-blue";
    } else {
      headerClass = "content-header-right-background-yellow";
      bodyClass = "content-body-right-background-yellow";
    }
    contentWrapperClass = "content-wrapper-right";
    contentTitleClass = "content-title-right";
    contentTextWrapperClass = "content-text-wrapper-right";
    fadeDirection = "fade-right";
  }

  return (
    <div className={`content-wrapper ${contentWrapperClass}`}>
      <div className={`content-header ${headerClass}`}>
        <h1
          className={`content-title ${contentTitleClass}`}
          style={{ color: textColor }}
        >
          {title}
        </h1>
      </div>
      <div className={`content-body ${bodyClass}`}>
        <div className={contentTextWrapperClass} style={{ color: textColor }}>
          {content}
        </div>
      </div>
    </div>
  );
};
