import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
