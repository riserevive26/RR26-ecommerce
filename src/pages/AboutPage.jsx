import React from "react";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { aboutContent } from "../data/homeContent";

export default function AboutPage() {
  return (
    <>
      <main className="page-shell about-page">
        <AboutSection content={aboutContent} showCta={false} className="about-page-section" />

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
