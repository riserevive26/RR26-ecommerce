import React from "react";

const features = [
  { icon: "01", title: "Plant-Based Formula", copy: "Cleaner ingredients with serious cleaning power." },
  { icon: "02", title: "Streak-Free Finish", copy: "Leaves surfaces bright, fresh, and residue-light." },
  { icon: "03", title: "Lasting Fragrance", copy: "Fresh scents that stay after the work is done." },
];

export default function FeatureBar() {
  return (
    <section className="feature-section" aria-label="Key benefits">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <span className="feature-icon">{feature.icon}</span>
          <div>
            <strong>{feature.title}</strong>
            <p>{feature.copy}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
