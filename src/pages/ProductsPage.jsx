import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import {
  getCategoryByKey,
  getProductsByCategoryKey,
  productCategories,
} from "../data/products";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryKey = searchParams.get("category");
  const activeCategory = getCategoryByKey(categoryKey);
  const filteredProducts = getProductsByCategoryKey(categoryKey);

  useEffect(() => {
    const target = document.getElementById("all-products");
    if (categoryKey && target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [categoryKey]);

  return (
    <>
      <main className="page-shell products-page">
        <section className="page-hero">
          <span className="eyebrow">Shop RR26</span>
          <h1>{activeCategory ? activeCategory.title : "All Products"}</h1>
          <p>
            {activeCategory
              ? activeCategory.lead
              : "Explore the full RR26 lineup for laundry, kitchen, floors, and bathrooms — practical sizes, fresh fragrances, and everyday cleaning confidence."}
          </p>

          <div className="products-filter-row" aria-label="Filter by category">
            <Link
              to="/products"
              className={`products-filter-chip ${!activeCategory ? "is-active" : ""}`}
            >
              All
            </Link>
            {productCategories.map((category) => (
              <Link
                key={category.key}
                to={`/products?category=${category.key}`}
                className={`products-filter-chip ${
                  activeCategory?.key === category.key ? "is-active" : ""
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </section>

        <FeaturedProducts
          products={filteredProducts}
          eyebrow={activeCategory ? activeCategory.label : ""}
          title={activeCategory ? activeCategory.title : "Complete Collection"}
          lead={
            activeCategory
              ? activeCategory.lead
              : "Every formula is made for real homes — choose the cleaner that fits your routine."
          }
          className="products-page-grid"
          id="all-products"
        />
      </main>
      <Footer />
    </>
  );
}
