import bathroomCleaner1 from "../assets/bathroom-cleaner-1.jpeg";
import bathroomCleaner2 from "../assets/bathroom-cleaner-2.jpeg";
import dishwashingLiquid1 from "../assets/dishwashing-liquid-1.jpeg";
import dishwashingLiquid2 from "../assets/dishwashing-liquid-2.jpeg";
import floorCleaner1 from "../assets/floor-cleaner-1.jpeg";
import floorCleaner2 from "../assets/floor-cleaner-2.jpeg";
import liquidDetergent1 from "../assets/liquid-detergent-1.jpeg";
import liquidDetergent2 from "../assets/liquid-detergent-2.jpeg";
import toiletCleaner1 from "../assets/toilet-cleaner-1.jpeg";
import toiletCleaner2 from "../assets/toilet-cleaner-2.jpeg";

export const products = [
  {
    id: 1,
    slug: "liquid-detergent",
    product: "Liquid Detergent",
    category: "Laundry Care",
    title: "Powerful Cleaning. Gentle on Fabrics.",
    description:
      "Our Liquid Detergent is specially formulated to remove tough stains while protecting the softness and color of your clothes.",
    images: [liquidDetergent1, liquidDetergent2],
    size: [
      { volume: "250ml", price: 99, currency: "INR" },
      { volume: "500ml", price: 179, currency: "INR" },
    ],
    colour: "Orange",
    color: "#FFD6A5",
    fragrances: ["Fresh Linen", "Citrus Burst", "Spring Blossom"],
    keyFeatures: [
      "Effective stain removal",
      "Gentle on all fabrics",
      "Machine & hand wash compatible",
      "Easy-rinse formula",
      "Long-lasting freshness",
    ],
  },
  {
    id: 2,
    slug: "dishwashing-liquid",
    product: "Dish Washing Liquid",
    category: "Kitchen Care",
    title: "Sparkling Clean Dishes with a Refreshing Aroma.",
    description: "Removes stubborn grease and food residue while being gentle on your hands.",
    images: [dishwashingLiquid1, dishwashingLiquid2],
    size: [
      { volume: "250ml", price: 79, currency: "INR" },
      { volume: "500ml", price: 149, currency: "INR" },
    ],
    colour: "Yellow",
    color: "#FFE38A",
    fragrances: ["Mango", "Lemon Fresh", "Orange Splash"],
    keyFeatures: [
      "Cuts through grease",
      "Rich foam",
      "Gentle on hands",
      "Suitable for all utensils",
      "Leaves dishes sparkling clean",
    ],
  },
  {
    id: 3,
    slug: "floor-cleaner",
    product: "Floor Cleaner",
    category: "Home Care",
    title: "Shiny Floors with Long-Lasting Freshness.",
    description: "Cleans dirt and stains while leaving your floors fresh and sparkling.",
    images: [floorCleaner1, floorCleaner2],
    size: [
      { volume: "250ml", price: 89, currency: "INR" },
      { volume: "500ml", price: 169, currency: "INR" },
    ],
    colour: "Light Purple",
    color: "#E6D7FF",
    fragrances: ["Lavender", "Rose Blossom", "Jasmine Fresh"],
    keyFeatures: [
      "Removes dirt and stains",
      "Suitable for all hard floors",
      "Quick drying",
      "Long-lasting fragrance",
      "Streak-free finish",
    ],
  },
  {
    id: 4,
    slug: "bathroom-cleaner",
    product: "Bathroom Cleaner",
    category: "Bathroom Care",
    title: "Spotless Surfaces. Fresh Bathroom Every Day.",
    description:
      "Cleans tiles, sinks, and fittings while cutting through soap scum and water stains.",
    images: [bathroomCleaner1, bathroomCleaner2],
    size: [
      { volume: "250ml", price: 89, currency: "INR" },
      { volume: "500ml", price: 169, currency: "INR" },
    ],
    colour: "Teal",
    color: "#A8E0D8",
    fragrances: ["Ocean Mist", "Citrus Fresh", "Herbal Clean"],
    keyFeatures: [
      "Removes soap scum",
      "Cuts through limescale",
      "Suitable for tiles and fittings",
      "Leaves a fresh scent",
      "Everyday bathroom hygiene",
    ],
  },
  {
    id: 5,
    slug: "toilet-cleaner",
    product: "Toilet Cleaner",
    category: "Bathroom Care",
    title: "Deep Cleaning for a Hygienic Bathroom.",
    description: "Powerful formula that removes stains, limescale, and unpleasant odors.",
    images: [toiletCleaner1, toiletCleaner2],
    size: [
      { volume: "250ml", price: 99, currency: "INR" },
      { volume: "500ml", price: 189, currency: "INR" },
    ],
    colour: "Blue",
    color: "#B7D9FF",
    fragrances: ["Green Apple", "Ocean Breeze", "Mint Fresh"],
    keyFeatures: [
      "Kills germs",
      "Removes tough stains",
      "Eliminates odors",
      "Clings to surfaces",
      "Keeps toilets hygienic",
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug);
}

export const testimonials = [
  {
    name: "Priya M.",
    quote:
      "RR26 made my cleaning routine simpler and my home feels fresher for longer. The fragrances are such a nice touch.",
  },
  {
    name: "Ariana T.",
    quote:
      "I love that RR26 products clean well without feeling harsh. The dishwashing liquid and floor cleaner are repeat buys for me.",
  },
  {
    name: "Dan R.",
    quote:
      "RR26 feels premium, practical, and easy to trust. The detergent handled tough stains better than I expected.",
  },
];
