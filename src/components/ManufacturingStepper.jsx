import React from "react";

import {
  manufacturingStats as defaultStats,
  manufacturingSteps as defaultSteps,
} from "../data/homeContent";

export default function ManufacturingStepper({
  eyebrow = "How RR26 is built",
  title = "Formulated. Balanced. Ready for Home.",
  lead = "From the cleaning job to the finished bottle, every RR26 product follows a clear path before it reaches your shelf.",
  steps = defaultSteps,
  stats = defaultStats,
  className = "",
  id = "process",
}) {
  if (!steps?.length) {
    return null;
  }

  return (
    <section className={`section-surface section-surface--tint ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="section-heading ult-head centered">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>

        <div className="manufacturing-stepper">
          {steps.map((step) => (
            <article key={step.number ?? step.title} className="manufacturing-step">
              <span className="manufacturing-step-number">{step.number}</span>
              <div className="manufacturing-step-body">
                <h3>{step.title}</h3>
                {step.description ? <p>{step.description}</p> : null}
              </div>
            </article>
          ))}
        </div>

        {stats?.length ? (
          <div className="manufacturing-stats-bar">
            {stats.map((stat) => (
              <article key={`${stat.value}-${stat.label}`} className="manufacturing-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
