import React from "react";

import { trustStats as defaultStats } from "../data/homeContent";

export default function TrustStrip({
  items = defaultStats,
  className = "",
  ariaLabel = "Brand proof points",
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className={`trust-strip trust-strip--stats ${className}`.trim()} aria-label={ariaLabel}>
      <div className="trust-stats-grid">
        {items.map((item, index) => (
          <article key={`${item.value}-${item.label}`} className="trust-stat">
            <span className="trust-stat-icon" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="trust-stat-value">{item.value}</strong>
            <span className="trust-stat-label">{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
