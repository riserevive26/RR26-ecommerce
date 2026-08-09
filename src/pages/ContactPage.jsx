import React, { useState } from "react";
import Footer from "../components/Footer";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <main className="page-shell contact-page">
        <section className="page-hero">
          <span className="eyebrow">Contact</span>
          <h1>Let’s Talk Clean</h1>
          <p>
            Have a question about RR26 products, orders, or partnerships? Send us a message and our
            team will get back to you.
          </p>
        </section>

        <section className="contact-layout">
          <aside className="contact-info">
            <h2>Reach RR26</h2>
            <p>We are here to help with product guidance, order support, and brand enquiries.</p>
            <ul>
              <li>
                <strong>Email</strong>
                <span>hello@rr26.com</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <strong>Hours</strong>
                <span>Mon–Sat, 10:00 AM – 6:00 PM IST</span>
              </li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">
                Full name
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your name"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="phone">
                Phone
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="Optional"
                />
              </label>
              <label htmlFor="subject">
                Subject
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={updateField}
                  placeholder="How can we help?"
                />
              </label>
            </div>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us a little more..."
              />
            </label>

            <button type="submit" className="primary-button">
              Send Message
            </button>

            {submitted ? (
              <p className="form-success" role="status">
                Thanks for reaching out. Your message has been received.
              </p>
            ) : null}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
