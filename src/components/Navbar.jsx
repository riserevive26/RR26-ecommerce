import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rr26-logo.png";
import { useCart } from "../context/CartContext";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function Navbar() {
  const { itemCount } = useCart();
  const scrollToSection = useSectionNavigation();

  return (
    <header className="navbar-shell">
      <div className="navbar">
        <nav className="nav-links nav-links-left" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <a href="/#products" onClick={(event) => scrollToSection(event, "products")}>
            Shop
          </a>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link className="brand" to="/">
          <img className="brand-logo" src={logo} alt="RR26 logo" />
          <span className="brand-copy">
            <span className="brand-mark">RR26</span>
            <span className="brand-tagline">Home Cleaning Co.</span>
          </span>
        </Link>

        <div className="nav-right">
          <Link className="cart-button" aria-label={`Cart with ${itemCount} items`} to="/cart">
            <span className="cart-icon">Cart</span>
            <span className="cart-badge">{itemCount}</span>
          </Link>
        </div>
      </div>

      <div className="category-nav" aria-label="Product categories">
        {["Laundry", "Kitchen", "Personal Care", "Bathroom", "Floors"].map((label) => (
          <a key={label} href="/#products" onClick={(event) => scrollToSection(event, "products")}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
