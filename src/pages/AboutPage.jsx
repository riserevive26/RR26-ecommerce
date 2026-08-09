import React from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="page-shell about-page">
        <section className="page-hero">
          <span className="eyebrow">About RR26</span>
          <h1>Clean Smarter. Live Better.</h1>
          <p>
            RR26 Home Cleaning Co. builds everyday cleaning essentials that feel premium, perform with
            confidence, and leave homes fresher after every use.
          </p>
        </section>

        <section className="about-grid">
          <article className="about-card">
            <h2>Our Story</h2>
            <p>
              RR26 started with a simple idea: cleaning products should work hard without making your
              routine complicated. From laundry and dishes to bathrooms and floors, we create liquid
              formulas designed for real homes and busy days.
            </p>
          </article>
          <article className="about-card">
            <h2>What We Stand For</h2>
            <p>
              We focus on strong cleaning performance, refreshing fragrances, and practical packaging
              that fits into daily life. Every product is made to deliver a visibly cleaner finish and
              a lasting sense of freshness.
            </p>
          </article>
          <article className="about-card">
            <h2>Our Promise</h2>
            <ul>
              <li>Effective formulas for everyday messes</li>
              <li>Fresh scents that feel clean, not overpowering</li>
              <li>Clear product choices for every room</li>
              <li>A brand experience that feels modern and trustworthy</li>
            </ul>
          </article>
        </section>

        <section className="about-highlight">
          <h2>Built For Every Room</h2>
          <p>
            Whether you are washing clothes, sparkling dishes, freshening floors, or keeping bathrooms
            hygienic, RR26 is designed as one brand for whole-home cleaning confidence.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
