import React from "react";

import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="section products-section">
      <div className="section-heading centered">
        <span className="eyebrow">Bestsellers</span>
        <h2>Shop the RR26 Collection</h2>
        <p className="section-lead">
          Premium cleaning essentials with clear benefits, fresh fragrances, and confident everyday performance.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
