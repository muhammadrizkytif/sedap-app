import React from "react";

import HeroSection from "../../../sections/HeroSection";
import AboutSection from "../../../sections/AboutSection";
import TopProductsSection from "../../../sections/TopProductsSection";
import TestimonialsSection from "../../../sections/TestimonialsSection";
// Tambahkan impor section lain jika ada

const GuestPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {" "}
      {/* Background dasar */}
      <main className="flex-grow">
        <HeroSection />
        {/* Beri jarak antar section jika perlu, atau atur padding di dalam section */}
        <AboutSection />
        <TopProductsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default GuestPage;
