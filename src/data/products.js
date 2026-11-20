import bathroomCleaner1 from "../assets/new product images/Bathroom Cleaner - Front.jpeg";
import bathroomCleaner2 from "../assets/new product images/Bathroom Cleaner - Back.jpeg";
import dishwashingLiquid1 from "../assets/new product images/Dish Wash - Front.jpeg";
import dishwashingLiquid2 from "../assets/new product images/Dish Wash - Back.jpeg";
import floorCleaner1 from "../assets/new product images/Floor Cleaner - Front.jpeg";
import floorCleaner2 from "../assets/new product images/Floor Cleaner - Back.jpeg";
import liquidDetergent1 from "../assets/new product images/Liquid Detergent - Front.jpeg";
import liquidDetergent2 from "../assets/new product images/Liquid Detergent - Back.jpeg";
import toiletCleaner1 from "../assets/new product images/Toilet Cleaner - Front.jpeg";
import toiletCleaner2 from "../assets/new product images/Toilet Cleaner - Back.jpeg";

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

export const productCategories = [
  {
    key: "laundry",
    label: "Laundry",
    match: ["Laundry Care"],
    title: "Laundry Care",
    lead: "Liquid detergent built for tough stains and everyday fabric care.",
  },
  {
    key: "kitchen",
    label: "Kitchen",
    match: ["Kitchen Care"],
    title: "Kitchen Care",
    lead: "Dish washing formulas that cut grease and leave utensils sparkling.",
  },
  {
    key: "bathroom",
    label: "Bathroom",
    match: ["Bathroom Care"],
    title: "Bathroom Care",
    lead: "Bathroom and toilet cleaners for hygienic, fresh surfaces.",
  },
  {
    key: "floors",
    label: "Floors",
    match: ["Home Care"],
    title: "Floor Care",
    lead: "Floor cleaners that lift dirt and leave a streak-free finish.",
  },
];

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug);
}

export function getCategoryByKey(key) {
  if (!key) {
    return null;
  }

  return productCategories.find((category) => category.key === key) ?? null;
}

export function getProductsByCategoryKey(key) {
  const category = getCategoryByKey(key);

  if (!category) {
    return products;
  }

  return products.filter((product) => category.match.includes(product.category));
}

export const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      "RR26 made my cleaning routine simpler and my home feels fresher for longer. The fragrances are such a nice touch.",
  },
  {
    name: "Ananya Krishnan",
    quote:
      "I love that RR26 products clean well without feeling harsh. The dishwashing liquid and floor cleaner are repeat buys for me.",
  },
  {
    name: "Rohan Mehta",
    quote:
      "RR26 feels premium, practical, and easy to trust. The detergent handled tough stains better than I expected.",
  },
];
