import React from "react";

import FeatureBar from "../components/FeatureBar";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import TrustStrip from "../components/TrustStrip";
import WhyChooseSection from "../components/WhyChooseSection";
import { useHomeHashScroll } from "../hooks/useSectionNavigation";

export default function HomePage() {
  useHomeHashScroll();

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeatureBar />
      <ProductGrid />
      <HowItWorks />
      <WhyChooseSection />
      <Testimonials />
      <FinalCta />
      <Footer />
    </>
  );
}
