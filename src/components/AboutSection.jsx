import React from "react";
import { Link } from "react-router-dom";

import { aboutContent as defaultContent } from "../data/homeContent";

export default function AboutSection({
  content = defaultContent,
  showCta = true,
  ctaLabel = "Read Our Story",
  ctaTo = "/about",
  className = "",
  id = "about",
}) {
  const {
    eyebrow,
    title,
    sinceLabel,
    description,
    promiseTitle,
    promises = [],
    highlights = [],
  } = content;

  return (
    <section className={`section-surface section-surface--pattern ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="about-section-layout">
          <div className="about-copy-card">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            {sinceLabel ? <p className="about-section-since">{sinceLabel}</p> : null}
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}

            {promises.length ? (
              <div className="about-promise-block">
                {promiseTitle ? <h3>{promiseTitle}</h3> : null}
                <ul>
                  {promises.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {showCta ? (
              <Link className="primary-button about-section-cta" to={ctaTo}>
                {ctaLabel}
              </Link>
            ) : null}
          </div>

          {highlights.length ? (
            <div className="about-highlight-grid">
              {highlights.map((item, index) => {
                const itemTitle = typeof item === "string" ? item : item.title;
                const itemDescription =
                  typeof item === "string"
                    ? "Part of the RR26 standard for everyday cleaning confidence."
                    : item.description;

                return (
                  <article key={itemTitle} className="about-highlight-card">
                    <span className="about-highlight-icon" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{itemTitle}</h3>
                      {itemDescription ? <p>{itemDescription}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
