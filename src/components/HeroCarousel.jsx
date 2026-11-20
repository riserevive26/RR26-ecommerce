import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { heroSlides as defaultSlides } from "../data/homeContent";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function HeroCarousel({
  slides = defaultSlides,
  autoPlay = true,
  interval = 6000,
  className = "",
}) {
  const scrollToSection = useSectionNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [slides]);

  useEffect(() => {
    if (!autoPlay || total < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, total]);

  if (!total) {
    return null;
  }

  const goTo = (index) => {
    setActiveIndex(((index % total) + total) % total);
  };

  const handlePrimaryClick = (event, cta) => {
    if (!cta?.href?.includes("#")) {
      return;
    }

    const sectionId = cta.href.split("#")[1];
    if (sectionId) {
      scrollToSection(event, sectionId);
    }
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className={`hero-carousel ${className}`.trim()} aria-roledescription="carousel">
      <div className="hero-carousel-media" aria-hidden="true">
        {slides.map((slide, index) =>
          slide.image ? (
            <img
              key={slide.id ?? slide.title}
              className={`hero-carousel-image ${index === activeIndex ? "is-active" : ""}`}
              src={slide.image}
              alt=""
            />
          ) : null,
        )}
        <div className="hero-carousel-overlay" />
      </div>

      <div className="container-rr hero-carousel-frame">
        <div className="hero-carousel-content">
          {activeSlide.eyebrow ? <p className="hero-carousel-eyebrow">{activeSlide.eyebrow}</p> : null}
          <h1>{activeSlide.title}</h1>
          {activeSlide.description ? <p>{activeSlide.description}</p> : null}

          <div className="hero-actions">
            {activeSlide.primaryCta ? (
              activeSlide.primaryCta.to ? (
                <Link className="hero-cta" to={activeSlide.primaryCta.to}>
                  {activeSlide.primaryCta.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className="hero-cta"
                  onClick={(event) => handlePrimaryClick(event, activeSlide.primaryCta)}
                >
                  {activeSlide.primaryCta.label}
                </button>
              )
            ) : null}

            {activeSlide.secondaryCta?.to ? (
              <Link className="hero-secondary" to={activeSlide.secondaryCta.to}>
                {activeSlide.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {total > 1 ? (
        <>
          <button
            type="button"
            className="hero-carousel-nav prev"
            aria-label="Previous slide"
            onClick={() => goTo(activeIndex - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="hero-carousel-nav next"
            aria-label="Next slide"
            onClick={() => goTo(activeIndex + 1)}
          >
            ›
          </button>
          <div className="hero-carousel-dots" role="tablist" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id ?? slide.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show slide ${index + 1}`}
                className={`hero-carousel-dot ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
