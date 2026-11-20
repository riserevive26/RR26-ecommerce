import React from "react";

import { brandFamilies as defaultBrands } from "../data/homeContent";

export default function BrandFamily({
  eyebrow = "One standard of clean",
  title = "Trusted Care Across Every Room",
  lead = "RR26 brings laundry, kitchen, and surface care together under one practical home-cleaning brand.",
  brands = defaultBrands,
  className = "",
  id = "brands",
}) {
  if (!brands?.length) {
    return null;
  }

  return (
    <section className={`section-surface section-surface--soft ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="section-heading ult-head centered">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>

        <div className="brand-family-grid">
          {brands.map((brand) => (
            <article key={brand.title} className="brand-family-card">
              {brand.label ? <span className="brand-family-label">{brand.label}</span> : null}
              <h3>{brand.title}</h3>
              {brand.description ? <p>{brand.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
