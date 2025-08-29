import React from "react";
import Herosection from "./Hero/Herosection";
import Services from "./Services/Services";
import FeaturedSection from "./Benefits/FeaturedSection";
import Pricingsection from "./Pricing/Pricingsection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import Footer from "./Footer/Footer";
import ProductSection from "./Products/ProductSection";

function App() {
  return (
    <div className="home">
      <Herosection />
      <Services />
      <FeaturedSection />
      <Pricingsection />
      <ProductSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
