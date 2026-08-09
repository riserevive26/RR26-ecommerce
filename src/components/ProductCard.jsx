import React from "react";
import { Link } from "react-router-dom";
import { formatPrice, getBasePrice } from "../utils/format";

export default function ProductCard({ product }) {
  const thumbnail = product.images?.[0];
  const fromPrice = formatPrice(getBasePrice(product));
  const href = `/product/${product.slug}`;

  return (
    <article className="product-card home-product-card">
      <Link className="product-image-link" to={href}>
        <div className="home-product-visual" style={{ "--card-accent": product.color }}>
          <span className="product-category-badge">{product.category}</span>
          <div className="home-product-halo" aria-hidden="true" />
          <div className="home-product-pedestal" aria-hidden="true" />
          {thumbnail ? (
            <img className="home-product-photo" src={thumbnail} alt={product.product} />
          ) : null}
        </div>
      </Link>
      <div className="product-body">
        <h3>
          <Link to={href}>{product.product}</Link>
        </h3>
        <p className="product-benefit">{product.title}</p>
        <div className="product-card-footer">
          <strong className="product-price">{fromPrice}</strong>
          <Link className="product-card-cta" to={href}>
            Shop
          </Link>
        </div>
      </div>
    </article>
  );
}
