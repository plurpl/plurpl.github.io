import React from "react";
import { useTranslation } from "react-i18next";
import Location from "../components/Location";
import Map from "../components/Map";
import "../App.css";

export const Locations = () => {
  const { t } = useTranslation();

  const locations = [
    {
      key: "westVancouver",
      image: "/images/tournaments/harvard/harvard4.jpg",
      alt: "West Vancouver Branch",
      imageOnLeft: false, // Text (20vw) | Image (80vw)
    },
    {
      key: "southSurrey",
      image: "/images/tournaments/harvard/harvard8.jpg",
      alt: "South Surrey Branch",
      imageOnLeft: true, // Image (80vw) | Text (20vw)
    },
    {
      key: "burnaby",
      image: "/images/tournaments/harvard/harvard7.jpg",
      alt: "Burnaby Branch",
      imageOnLeft: false, // Text (20vw) | Image (80vw)
    },
  ];

  return (
    <div className="locations-page">
      <div className="locations-header">
        <h1 className="locations-title">{t("locationSection.title")}</h1>
        <p className="locations-subtitle">
          Discover our three convenient locations across the Greater Vancouver
          area
        </p>
      </div>
      <Map />
      <h3 className="contact-info-title">Contact Info</h3>
      <div className="locations-content">
        {locations.map((location, index) => (
          <Location
            key={location.key}
            locationKey={location.key}
            imageSrc={location.image}
            altText={location.alt}
            imageOnLeft={location.imageOnLeft}
          />
        ))}
      </div>
    </div>
  );
};
