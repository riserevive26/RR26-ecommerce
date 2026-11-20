import React from "react";
import { Link } from "react-router-dom";

import { featuredProductsContent as defaultContent } from "../data/homeContent";
import { products as allProducts } from "../data/products";
import { formatPrice, getBasePrice } from "../utils/format";

export default function FeaturedProducts({
  products = allProducts,
  limit,
  eyebrow = defaultContent.eyebrow,
  title = defaultContent.title,
  lead = defaultContent.lead,
  showViewAll = false,
  viewAllLabel = "View all products",
  viewAllTo = "/products",
  className = "",
  id = "products",
}) {
  const items = typeof limit === "number" ? products.slice(0, limit) : products;

  if (!items.length) {
    return null;
  }

  return (
    <section className={`section-surface section-surface--soft ${className}`.trim()} id={id}>
      <div className="container-rr">
        <div className="section-heading ult-head centered">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>

        <div className={`featured-products-grid featured-products-grid--${items.length}`}>
          {items.map((product) => {
            const href = `/product/${product.slug}`;
            const thumbnail = product.images?.[0];
            const fromPrice = formatPrice(getBasePrice(product));

            return (
              <article key={product.id} className="featured-product-card">
                <Link
                  className="featured-product-stage"
                  to={href}
                  style={{ "--card-accent": product.color }}
                >
                  {product.category ? (
                    <span className="featured-product-cat">{product.category}</span>
                  ) : null}
                  <span className="featured-product-glow" aria-hidden="true" />
                  {thumbnail ? (
                    <img className="featured-product-image" src={thumbnail} alt={product.product} />
                  ) : null}
                </Link>

                <div className="featured-product-body">
                  <h3>
                    <Link to={href}>{product.product}</Link>
                  </h3>
                  {product.title ? <p className="featured-product-desc">{product.title}</p> : null}
                  <div className="featured-product-meta">
                    <strong>{fromPrice}</strong>
                    {product.size?.[0]?.volume ? <span>From {product.size[0].volume}</span> : null}
                  </div>
                  <Link className="featured-product-link" to={href}>
                    View details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {showViewAll ? (
          <div className="featured-products-actions">
            <Link className="primary-button" to={viewAllTo}>
              {viewAllLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
