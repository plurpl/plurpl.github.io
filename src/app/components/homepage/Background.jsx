import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "../../hooks/useParallax";
import { useTranslationHook } from "../../language/useTranslationHook";
import "../../App.css";

export const Background = () => {
  const { t } = useTranslationHook();
  const textOffset = useParallax(0.0);
  const backgroundRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (backgroundRef.current) {
      const img = new Image();
      const isMobile = window.innerWidth < 768;
      const imagePath = isMobile
        ? "/images/mainbkg-mobile.avif"
        : "/images/mainbkg.avif";

      img.onload = () => {
        if (backgroundRef.current) {
          backgroundRef.current.style.backgroundImage = `url(${img.src})`;
          setImageLoaded(true);
        }
      };
      img.onerror = () => {
        // Handle image loading error gracefully
        console.warn("Failed to load hero background image");
        setImageLoaded(true); // Still show the component without the background
      };
      img.src = imagePath;

      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, []);

  return (
    <div className="hero-section">
      <div
        className={`hero-background ${imageLoaded ? "image-loaded" : ""}`}
        ref={backgroundRef}
      >
        {!imageLoaded && (
          <div className="loading-indicator">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div className="hero-overlay"></div>
      </div>
      <div
        className="hero-content"
        style={{
          transform: `translateY(${Math.max(0, textOffset)}px)`,
        }}
      >
        <div className="hero-white-border">
          <div className="hero-text">
            <h1 className="hero-title">{t("hero.title")}</h1>
            <h2 className="hero-subtitle">{t("hero.subtitle")}</h2>
            <p className="hero-tagline">{t("hero.tagline")}</p>
            <div className="hero-online-promo">
              <span className="hero-online-badge">ONLINE PROGRAM</span>
              <h3>Learn from globally award-winning coaches.</h3>
              <p>
                Join students from anywhere in the world for expert-led debate and
                public speaking training.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
