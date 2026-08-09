import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ProductImageSlider from "../components/ProductImageSlider";
import RelatedProducts from "../components/RelatedProducts";
import { useCart } from "../context/CartContext";
import { getProductBySlug, products } from "../data/products";
import { expandedDescription, formatPrice } from "../utils/format";

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size[0] ?? null);
  const [selectedFragrance, setSelectedFragrance] = useState(product?.fragrances[0] ?? "");

  useEffect(() => {
    if (!product) {
      return;
    }

    setQuantity(1);
    setSelectedSize(product.size[0] ?? null);
    setSelectedFragrance(product.fragrances[0] ?? "");
  }, [product]);

  if (!product) {
    return (
      <main className="section product-page">
        <button type="button" className="back-button" onClick={() => navigate("/")}>
          Back to Products
        </button>
        <div className="not-found-card">
          <h2>Product not found</h2>
          <p>The item you were looking for is not available right now.</p>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const activeSize = selectedSize ?? product.size[0];

  return (
    <>
      <main className="section product-page">
        <button type="button" className="back-button" onClick={() => navigate("/")}>
          ← Back to Shop
        </button>

        <section className="product-layout">
          <div className="detail-visual">
            <ProductImageSlider
              variant="detail"
              images={product.images}
              alt={product.product}
              color={product.color}
            />
          </div>

          <div className="detail-copy">
            <span className="product-category">{product.category}</span>
            <h1>{product.product}</h1>
            <p className="detail-tagline">{product.title}</p>
            <div className="detail-price">{formatPrice(activeSize.price)}</div>

            <div className="option-group">
              <div className="option-label">Select size</div>
              <div className="chip-row">
                {product.size.map((variant) => (
                  <button
                    key={variant.volume}
                    type="button"
                    className={`selection-chip selectable-chip ${
                      activeSize.volume === variant.volume ? "active-chip" : ""
                    }`}
                    onClick={() => setSelectedSize(variant)}
                  >
                    {variant.volume}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <div className="option-label">Select scent</div>
              <div className="chip-row">
                {product.fragrances.map((fragrance) => (
                  <button
                    key={fragrance}
                    type="button"
                    className={`selection-chip selectable-chip ${
                      selectedFragrance === fragrance ? "active-chip" : ""
                    }`}
                    onClick={() => setSelectedFragrance(fragrance)}
                  >
                    {fragrance}
                  </button>
                ))}
              </div>
            </div>

            <p className="detail-description">{expandedDescription(product)}</p>

            <div className="buy-box">
              <div className="quantity-row" aria-label="Quantity selector">
                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((current) => current + 1)}>
                  +
                </button>
              </div>

              <button
                type="button"
                className="primary-button full-width"
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id: product.id,
                      name: product.product,
                      price: activeSize.price,
                      qty: quantity,
                      volume: activeSize.volume,
                      fragrance: selectedFragrance,
                    },
                  })
                }
              >
                Add to Cart · {formatPrice(activeSize.price * quantity)}
              </button>
            </div>

            <ul className="pdp-promises">
              <li>Fresh lasting fragrance</li>
              <li>Everyday home performance</li>
              <li>Easy liquid format</li>
            </ul>
          </div>
        </section>

        <section className="pdp-story-grid">
          <article className="benefits-panel">
            <div className="section-heading compact">
              <span className="eyebrow">Why it works</span>
              <h2>Key Benefits</h2>
            </div>
            <ul className="benefit-list">
              {product.keyFeatures.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <article className="benefits-panel">
            <div className="section-heading compact">
              <span className="eyebrow">How to use</span>
              <h2>Simple Routine</h2>
            </div>
            <ol className="howto-list">
              <li>Choose the right size for your household needs.</li>
              <li>Pick a fragrance that matches the room or fabric.</li>
              <li>Use as directed for a fresh, confident clean every day.</li>
            </ol>
          </article>
        </section>

        <RelatedProducts items={relatedProducts} />
      </main>
      <Footer />
    </>
  );
}
