import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useTranslationHook } from "../../language/useTranslationHook";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const InfoSection = () => {
  const { t } = useTranslationHook();

  const carouselImages = [
    "/images/tournaments/harvard/harvard1.jpg",
    "/images/tournaments/harvard/harvard10.jpg",
    // "/images/tournaments/harvard/harvard11.jpg",
    "/images/tournaments/harvard/harvard9.jpg",
    "/images/tournaments/workshop/friday_workshop1.jpg",
  ];

  return (
    <section className="info-section">
      <div className="info-content">
        <div data-aos="fade-right" className="info-text">
          <h2 className="info-title">{t("infoSection.title")}</h2>
          <h3 className="info-subtitle">{t("infoSection.subtitle")}</h3>
          <p className="info-description">{t("infoSection.description1")}</p>
          <p className="info-description">{t("infoSection.description2")}</p>
          <p className="info-description">{t("infoSection.description3")}</p>
        </div>

        <div data-aos="fade-left" className="info-carousel-container">
          <div className="info-carousel">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              swipeable={false}
              emulateTouch={true}
              dynamicHeight={false}
              centerMode={false}
              centerSlidePercentage={100}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={`Campus view ${index + 1}`}
                    className="carousel-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
