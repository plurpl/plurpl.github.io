import React from "react";
import { useTranslationHook } from "../../language/useTranslationHook";

const LocationCard = ({ locationKey, imageSrc, altText }) => {
  const { t } = useTranslationHook();

  return (
    <div className="service-card" data-aos="zoom-in">
      <div className="service-image">
        <img src={imageSrc} alt={altText} loading="lazy" />
      </div>
      <div className="service-overlay"></div>
      <div className="service-content">
        <h3 className="service-title">
          {t(`locationSection.${locationKey}.title`)}
        </h3>
        <div className="service-description">
          <p>{t(`locationSection.${locationKey}.manager`)}</p>
          <p>{t(`locationSection.${locationKey}.tel`)}</p>
          <p>{t(`locationSection.${locationKey}.address`)}</p>
        </div>
      </div>
    </div>
  );
};

const MainLocationCard = () => {
  const { t } = useTranslationHook();

  return (
    <div className="locations-section-main-card" data-aos="fade-up">
      <div className="locations-section-main-content">
        <div className="locations-section-main-text">
          <h2 className="locations-section-main-title">
            {t("locationSection.mainLocation.title")}
          </h2>
          <p className="locations-section-main-description">
            {t("locationSection.mainLocation.description")}
          </p>
          <div className="locations-section-main-details">
            <p>
              <strong>Founder:</strong> Maggie
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {t("locationSection.mainLocation.address")}
            </p>
            <p>
              <strong>Phone:</strong> {t("locationSection.mainLocation.phone")}
            </p>
            <p>
              <strong>Email:</strong> {t("locationSection.mainLocation.email")}
            </p>
          </div>
        </div>
        <div className="locations-section-main-image">
          <img src="/images/langara.avif" alt="Main Campus" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export const LocationsSection = () => {
  const { t } = useTranslationHook();

  const locations = [
    {
      key: "westVancouver",
      image: "/images/tournaments/harvard/harvard4.jpg",
      alt: "West Vancouver Branch",
    },
    {
      key: "southSurrey",
      image: "/images/tournaments/harvard/harvard8.jpg",
      alt: "South Surrey Branch",
    },
    {
      key: "burnaby",
      image: "/images/tournaments/harvard/harvard7.jpg",
      alt: "Burnaby Branch",
    },
  ];

  return (
    <section className="services-section">
      <div className="locations-section-header">
        <h2 className="locations-section-title">
          {t("locationSection.title")}
        </h2>
      </div>

      <MainLocationCard />

      <div className="services-grid">
        {locations.map((location, index) => (
          <LocationCard
            key={location.key}
            locationKey={location.key}
            imageSrc={location.image}
            altText={location.alt}
          />
        ))}
      </div>
    </section>
  );
};
