import React from "react";

const reasons = [
  {
    icon: "01",
    title: "Premium Quality",
    description: "Dependable formulas made for everyday homes that expect a cleaner, fresher finish.",
  },
  {
    icon: "02",
    title: "Fresh Fragrance",
    description: "Long-lasting scents that leave fabrics, floors, and surfaces feeling renewed.",
  },
  {
    icon: "03",
    title: "Strong Performance",
    description: "Built to cut grease, lift stains, dissolve residue, and neutralize odors with ease.",
  },
  {
    icon: "04",
    title: "Easy To Use",
    description: "Liquid formats that fit quickly into daily routines without complicated steps.",
  },
  {
    icon: "05",
    title: "Versatile Spaces",
    description: "Ready for kitchens, bathrooms, laundry rooms, and high-traffic commercial areas.",
  },
];

export default function WhyChooseSection({ compact = false }) {
  return (
    <section className={`why-section ${compact ? "compact-why" : ""}`} id={compact ? undefined : "why"}>
      <div className="section-heading compact">
        <span className="eyebrow">Why choose RR26</span>
        <h2>Cleaning Confidence For Every Room</h2>
        <p className="section-lead">
          Stronger formulas, fresher finishes, and a brand built around reliable everyday results.
        </p>
      </div>

      <div className={`why-grid ${compact ? "compact-grid" : ""}`}>
        {reasons.map((reason) => (
          <article key={reason.title} className="why-card">
            <div className="why-icon">{reason.icon}</div>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
