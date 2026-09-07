import { useState, useEffect, useCallback } from "react";

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.pageYOffset * speed);
  }, [speed]);

  useEffect(() => {
    const updateOffset = () => {
      handleScroll();
    };

    window.addEventListener("scroll", updateOffset, { passive: true });

    return () => window.removeEventListener("scroll", updateOffset);
  }, [handleScroll]);

  return offset;
};
