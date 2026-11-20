import React from "react";

import {
  testimonials as defaultTestimonials,
  testimonialStats as defaultStats,
} from "../data/homeContent";

export default function Testimonials({
  eyebrow = "Trusted at home",
  title = "What Customers Say",
  lead = "Real feedback from households that switched to RR26.",
  testimonials = defaultTestimonials,
  stats = defaultStats,
  className = "",
  id = "reviews",
}) {
  if (!testimonials?.length) {
    return null;
  }

  return (
    <section className={`section-surface section-surface--soft testimonials-section ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="section-heading ult-head centered">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>

        {stats?.length ? (
          <div className="testimonial-stats">
            {stats.map((stat) => (
              <article key={`${stat.value}-${stat.label}`} className="testimonial-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        ) : null}

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
