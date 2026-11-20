import React from "react";
import { Link } from "react-router-dom";

export default function FinalCta() {
  return (
    <section className="section-surface section-surface--dark final-cta-section" aria-labelledby="final-cta-heading">
      <div className="container-rr">
        <div className="final-cta-panel">
          <span className="eyebrow light">Ready for a fresher home?</span>
          <h2 id="final-cta-heading">Clean Smarter. Live Better.</h2>
          <p>
            Choose RR26 for everyday cleaning that feels premium, performs hard, and keeps your spaces
            smelling fresh.
          </p>
          <Link className="accent-button" to="/products">
            Shop RR26 Products
          </Link>
        </div>
      </div>
    </section>
  );
}
