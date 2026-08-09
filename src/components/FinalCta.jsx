import React from "react";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function FinalCta() {
  const scrollToSection = useSectionNavigation();

  return (
    <section className="final-cta-section" aria-labelledby="final-cta-heading">
      <div className="final-cta-panel">
        <span className="eyebrow light">Ready for a fresher home?</span>
        <h2 id="final-cta-heading">Clean Smarter. Live Better.</h2>
        <p>
          Choose RR26 for everyday cleaning that feels premium, performs hard, and keeps your spaces
          smelling fresh.
        </p>
        <button type="button" className="accent-button" onClick={() => scrollToSection(null, "products")}>
          Shop RR26 Products
        </button>
      </div>
    </section>
  );
}
