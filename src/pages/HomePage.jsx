import React from "react";

import AboutSection from "../components/AboutSection";
import BrandFamily from "../components/BrandFamily";
import FeaturedProducts from "../components/FeaturedProducts";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import ManufacturingStepper from "../components/ManufacturingStepper";
import PartnerCtas from "../components/PartnerCtas";
import Testimonials from "../components/Testimonials";
import TrustStrip from "../components/TrustStrip";
import { useHomeHashScroll } from "../hooks/useSectionNavigation";

export default function HomePage() {
  useHomeHashScroll();

  return (
    <>
      <HeroCarousel />
      <TrustStrip />
      <BrandFamily />
      <AboutSection />
      <FeaturedProducts
        limit={3}
        showViewAll
        eyebrow="Featured Products"
        title="Shop the RR26 Collection"
        lead="A quick look at our bestsellers — browse the full lineup on the products page."
      />
      <ManufacturingStepper />
      <PartnerCtas />
      <Testimonials />
      <FinalCta />
      <Footer />
    </>
  );
}
