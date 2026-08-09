import dishwashingLiquid1 from "../assets/dishwashing-liquid-1.jpeg";
import dishwashingLiquid2 from "../assets/dishwashing-liquid-2.jpeg";
import floorCleaner1 from "../assets/floor-cleaner-1.jpeg";
import floorCleaner2 from "../assets/floor-cleaner-2.jpeg";
import handCleanser1 from "../assets/hand-cleanser-1.jpeg";
import handCleanser2 from "../assets/hand-cleanser-2.jpeg";
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
    product: "Dishwashing Liquid",
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
    slug: "hand-cleanser",
    product: "Hand Cleanser",
    category: "Personal Care",
    title: "Clean Hands. Fresh Feeling. Everyday Protection.",
    description: "Keeps your hands clean, soft, and refreshed with every wash.",
    images: [handCleanser1, handCleanser2],
    size: [
      { volume: "250ml", price: 89, currency: "INR" },
      { volume: "500ml", price: 169, currency: "INR" },
    ],
    colour: "Green",
    color: "#BFE7C6",
    fragrances: ["Lemon", "Aloe Vera", "Green Tea"],
    keyFeatures: [
      "Removes dirt and germs",
      "Gentle on skin",
      "Rich lather",
      "Suitable for frequent use",
      "Refreshing fragrance",
    ],
  },
  {
    id: 4,
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
  {
    id: 5,
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
