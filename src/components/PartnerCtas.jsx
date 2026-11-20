import React from "react";
import { Link } from "react-router-dom";

import { partnerCtas as defaultItems } from "../data/homeContent";

export default function PartnerCtas({
  eyebrow = "Support & partnerships",
  title = "Grow With RR26",
  lead = "Whether you need product guidance or want to stock RR26, start a conversation with our team.",
  items = defaultItems,
  className = "",
  id = "partners",
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className={`section-surface section-surface--dark ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="section-heading ult-head centered">
          {eyebrow ? <span className="eyebrow light">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>

        <div className="partner-ctas-grid">
          {items.map((item) => (
            <article key={item.title} className="partner-cta-card">
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
              {item.to ? (
                <Link className="primary-button" to={item.to}>
                  {item.ctaLabel ?? "Learn more"}
                </Link>
              ) : item.href ? (
                <a className="primary-button" href={item.href}>
                  {item.ctaLabel ?? "Learn more"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
