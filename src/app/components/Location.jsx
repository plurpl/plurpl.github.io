import React from "react";
import { useTranslationHook } from "../language/useTranslationHook";

const Location = ({ locationKey, imageSrc, altText, imageOnLeft = false }) => {
  const { t } = useTranslationHook();

  const locationText = (
    <div className="location-text">
      <h3 className="location-title">
        {t(`locationSection.${locationKey}.title`)}
      </h3>
      <div className="location-details">
        <p className="location-manager">
          {t(`locationSection.${locationKey}.manager`)}
        </p>
        <p className="location-phone">
          {t(`locationSection.${locationKey}.tel`)}
        </p>
        <p className="location-address">
          {t(`locationSection.${locationKey}.address`)}
        </p>
      </div>
    </div>
  );

  const locationImage = (
    <div className="location-image">
      <img src={imageSrc} alt={altText} loading="lazy" />
    </div>
  );

  return (
    <div
      className={`location-item ${imageOnLeft ? "image-left" : ""}`}
      data-aos={imageOnLeft ? "fade-left" : "fade-right"}
    >
      {imageOnLeft ? (
        <>
          {locationImage}
          {locationText}
        </>
      ) : (
        <>
          {locationText}
          {locationImage}
        </>
      )}
    </div>
  );
};

export default Location;
