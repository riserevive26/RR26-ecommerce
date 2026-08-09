import React, { useEffect, useState } from "react";

export default function ProductImageSlider({
  images,
  alt = "Product",
  alts,
  color,
  className = "",
  variant = "default",
  autoPlay = false,
  interval = 4000,
  showThumbs = false,
}) {
  const slides = images?.length ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (!autoPlay || slides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  if (!slides.length) {
    return null;
  }

  const goTo = (index) => {
    const total = slides.length;
    setActiveIndex(((index % total) + total) % total);
  };

  return (
    <div
      className={`product-slider product-slider--${variant} ${className}`.trim()}
      style={color ? { "--slide-accent": color } : undefined}
    >
      <div className="product-slider-stage">
        <div className="product-slider-glow" aria-hidden="true" />
        <div className="product-slider-frame">
          {slides.map((src, index) => (
            <img
              key={src}
              className={`product-slider-image ${index === activeIndex ? "is-active" : ""}`}
              src={src}
              alt={alts?.[index] ?? `${alt} view ${index + 1}`}
            />
          ))}
        </div>

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              className="product-slider-nav prev"
              aria-label="Previous image"
              onClick={() => goTo(activeIndex - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="product-slider-nav next"
              aria-label="Next image"
              onClick={() => goTo(activeIndex + 1)}
            >
              ›
            </button>
            <div className="product-slider-dots" role="tablist" aria-label="Product images">
              {slides.map((src, index) => (
                <button
                  key={`dot-${src}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show image ${index + 1}`}
                  className={`product-slider-dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {showThumbs && slides.length > 1 ? (
        <div className="product-slider-thumbs" aria-label="Image thumbnails">
          {slides.map((src, index) => (
            <button
              key={`thumb-${src}`}
              type="button"
              className={`product-slider-thumb ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Select image ${index + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
