import React from "react";

const claims = [
  "Tough on stains",
  "Fresh lasting fragrance",
  "Everyday home ready",
  "Gentle where it matters",
  "Made for busy routines",
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Brand promises">
      <ul>
        {claims.map((claim) => (
          <li key={claim}>{claim}</li>
        ))}
      </ul>
    </section>
  );
}
