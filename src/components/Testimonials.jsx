import React from "react";

import { testimonials } from "../data/products";

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="reviews">
      <div className="section-heading compact">
        <span className="eyebrow">Trusted at home</span>
        <h2>What Customers Say</h2>
        <p className="section-lead">Real feedback from households that switched to RR26.</p>
      </div>
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
    </section>
  );
}
