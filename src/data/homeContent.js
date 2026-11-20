import { products, testimonials as defaultTestimonials } from "./products";

export const heroSlides = [
  {
    id: "clean-standard",
    eyebrow: "RR26 Home Cleaning Co.",
    title: "A Higher Standard of Clean",
    description:
      "Powerful liquid formulas. Fresh fragrances. Cleaning confidence for every room in your home.",
    image: products[0]?.images?.[0],
    primaryCta: { label: "Shop Now", to: "/products" },
    secondaryCta: { label: "Our Story", to: "/about" },
  },
  {
    id: "kitchen-fresh",
    eyebrow: "Kitchen Care",
    title: "Sparkling Dishes. Everyday Ease.",
    description:
      "Cut through grease and food residue with Dish Washing Liquid made for busy kitchens.",
    image: products[1]?.images?.[0],
    primaryCta: { label: "Shop Kitchen", to: "/products" },
    secondaryCta: { label: "Contact Us", to: "/contact" },
  },
  {
    id: "whole-home",
    eyebrow: "Whole-Home Clean",
    title: "From Floors to Bathrooms",
    description:
      "Floor Cleaner, Bathroom Cleaner, and Toilet Cleaner — one brand for every surface that matters.",
    image: products[2]?.images?.[0],
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Our Story", to: "/about" },
  },
];

export const trustStats = [
  { value: "5", label: "Core cleaning formulas" },
  { value: "2", label: "Size options per product" },
  { value: "3+", label: "Fragrance choices" },
  { value: "100%", label: "Everyday home ready" },
];

export const brandFamilies = [
  {
    label: "Laundry Care",
    title: "Liquid Detergent",
    description: "Tough on stains, gentle on fabrics — built for machine and hand wash routines.",
  },
  {
    label: "Kitchen Care",
    title: "Dish Washing Liquid",
    description: "Rich foam that cuts grease while staying kind to hands and utensils.",
  },
  {
    label: "Home & Bathroom",
    title: "Surfaces That Shine",
    description: "Floor, bathroom, and toilet cleaners for fresher rooms every day.",
  },
];

export const aboutContent = {
  eyebrow: "About RR26",
  title: "Clean Smarter. Live Better.",
  sinceLabel: "Built for modern homes",
  description:
    "RR26 Home Cleaning Co. builds everyday cleaning essentials that feel premium, perform with confidence, and leave homes fresher after every use. From laundry and dishes to bathrooms and floors, our liquid formulas are designed for real homes and busy days.",
  promiseTitle: "What we stand for",
  promises: [
    "Strong clean for everyday messes",
    "Fresh fragrances that feel light",
    "Simple choices for every room",
  ],
  highlights: [
    {
      title: "Everyday performance",
      description: "Effective formulas built for the messes homes actually face.",
    },
    {
      title: "Fresh, not overpowering",
      description: "Scents that leave rooms feeling clean without lingering harshness.",
    },
    {
      title: "Clear product choices",
      description: "A simple lineup for laundry, kitchen, floors, and bathrooms.",
    },
    {
      title: "Modern and trustworthy",
      description: "Practical packaging and a brand experience you can rely on.",
    },
  ],
};

export const featuredProductsContent = {
  eyebrow: "Featured Products",
  title: "Shop the RR26 Collection",
  lead: "Formulated for everyday performance — clear benefits, fresh fragrances, and confident cleaning results.",
};

export const manufacturingSteps = [
  {
    number: "01",
    title: "Formula Focus",
    description:
      "Each RR26 product starts with a clear cleaning job — stains, grease, floors, or bathroom hygiene.",
  },
  {
    number: "02",
    title: "Balanced Performance",
    description:
      "We tune strength and gentleness so products clean hard without making daily use complicated.",
  },
  {
    number: "03",
    title: "Fragrance Finish",
    description:
      "Fresh scent options are chosen to leave rooms feeling renewed after the work is done.",
  },
  {
    number: "04",
    title: "Ready for Home",
    description:
      "Practical sizes and easy-to-use liquids that fit into real household and commercial routines.",
  },
];

export const manufacturingStats = [
  { value: "5", label: "Product formulas" },
  { value: "Every room", label: "Coverage focus" },
  { value: "Daily-use", label: "Routine ready" },
];

export const partnerCtas = [
  {
    title: "Need Product Support?",
    description: "Questions about sizes, fragrances, or which cleaner fits your space? We’re here to help.",
    ctaLabel: "Contact Support",
    to: "/contact",
  },
  {
    title: "Become a Retail Partner",
    description: "Bring RR26 into your store or distribution network and grow with a practical home-care lineup.",
    ctaLabel: "Talk to Us",
    to: "/contact",
  },
];

export const testimonialStats = [
  { value: "4.8/5", label: "Average rating" },
  { value: "Homes", label: "Built for everyday use" },
  { value: "Repeat", label: "Ready routines" },
];

export { defaultTestimonials as testimonials };
