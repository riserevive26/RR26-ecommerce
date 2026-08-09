import React from "react";
import { Link } from "react-router-dom";

import { products } from "../data/products";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import ProductImageSlider from "./ProductImageSlider";

export default function Hero() {
  const scrollToSection = useSectionNavigation();
  const heroImages = products.map((product) => product.images?.[0]).filter(Boolean);
  const heroAlts = products.map((product) => product.product);

  return (
    <section className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <ProductImageSlider
          className="hero-product-slider"
          variant="hero"
          images={heroImages}
          alts={heroAlts}
          alt="RR26 products"
          autoPlay
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-brand">RR26</p>
        <h1>A Higher Standard of Clean</h1>
        <p>
          Powerful liquid formulas. Fresh fragrances. Cleaning confidence for every room in your home.
        </p>
        <div className="hero-actions">
          <button type="button" className="hero-cta" onClick={() => scrollToSection(null, "products")}>
            Shop Now
          </button>
          <Link className="hero-secondary" to="/about">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
