// NinePM Landing Page — App Router entry point
// Sections: Navbar → Hero → Problem → Solution → Services → How It Works → Benefits → CTA → Footer

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Fixed navigation */}
      <Navbar />

      {/* 1. Hero — headline + CTA */}
      <Hero />

      {/* 2. Problem — pain points */}
      <Problem />

      {/* 3. Solution — how NinePM addresses the problem */}
      <Solution />

      {/* 4. Services — breakdown of what we offer */}
      <Services />

      {/* 5. How It Works — 3-step process */}
      <HowItWorks />

      {/* 6. Benefits — value proposition with metrics */}
      <Benefits />

      {/* 7. Call to Action — book a demo */}
      <CTA />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
