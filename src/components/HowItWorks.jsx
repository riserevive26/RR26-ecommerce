import React from "react";

const steps = [
  {
    number: "01",
    title: "Pick Your Clean",
    copy: "Choose the RR26 formula built for laundry, dishes, hands, floors, or bathrooms.",
  },
  {
    number: "02",
    title: "Choose Size & Scent",
    copy: "Select the volume and fragrance that fits your routine and the rooms you clean most.",
  },
  {
    number: "03",
    title: "Clean With Confidence",
    copy: "Use daily for fresher fabrics, brighter surfaces, and a home that feels genuinely cared for.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-heading centered">
        <span className="eyebrow">How it works</span>
        <h2>Simple Steps. Serious Clean.</h2>
        <p className="section-lead">
          A straightforward routine inspired by the best modern cleaning brands — made for real Indian homes.
        </p>
      </div>
      <div className="how-grid">
        {steps.map((step) => (
          <article key={step.number} className="how-card">
            <span className="how-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
