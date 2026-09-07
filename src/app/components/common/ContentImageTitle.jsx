import React from "react";

export const ContentImageTitle = ({ title, image, text, bkgColor, poster }) => {
  let bkgColorClass =
    bkgColor === "yellow"
      ? "content-image-title-background-yellow"
      : "content-image-title-background-blue";

  let imageClass = poster
    ? "content-image-title-image-poster"
    : "content-image-title-image";

  return (
    <div className="content-image-title-wrapper">
      {title && (
        <div className={`content-image-title-title ${bkgColorClass}`}>
          <div className="content-image-title-title-text">{title}</div>
        </div>
      )}
      {title ? (
        <>
          <div className={imageClass}>{image}</div>
          <div className="content-image-title-text">{text}</div>
        </>
      ) : (
        <>
          <div className="content-image-title-text">{text}</div>
          <div className={imageClass}>{image}</div>
        </>
      )}
    </div>
  );
};
