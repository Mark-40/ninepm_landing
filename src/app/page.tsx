// NinePM Landing Page — App Router entry point
//
// Section flow (split-layout visual-first):
//   Navbar
//   → Hero           split: headline + live dashboard mockup
//   → Problem        pain points grid
//   → BeforeAfter    split: Excel chaos ↔ NinePM dashboard
//   → FeatureSplits  4× alternating split sections (Reports / Leads / Workflows / Dashboard)
//   → Services       service card grid
//   → UseCases       3× alternating split (Clinic / Seller / Agency)
//   → HowItWorks     3-step process
//   → Benefits       metrics
//   → CTA            closing argument
//   → Footer

import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import Problem        from "@/components/Problem";
import BeforeAfter    from "@/components/BeforeAfter";
import FeatureSplits  from "@/components/FeatureSplits";
import Services       from "@/components/Services";
import UseCases       from "@/components/UseCases";
import HowItWorks     from "@/components/HowItWorks";
import Benefits       from "@/components/Benefits";
import CTA            from "@/components/CTA";
import Footer         from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1. Hero — split headline + dashboard mockup */}
      <Hero />

      {/* 2. Problem — pain points that resonate with SMB owners */}
      <Problem />

      {/* 3. Before vs After — visual proof of transformation */}
      <BeforeAfter />

      {/* 4. Feature Splits — 4 alternating split sections (the core product story) */}
      <FeatureSplits />

      {/* 5. Services — full card grid of what NinePM builds */}
      <Services />

      {/* 6. Use Cases — Clinic / Seller / Agency with industry mockups */}
      <UseCases />

      {/* 7. How It Works — 3-step Discover → Build → Automate */}
      <HowItWorks />

      {/* 8. Benefits — metrics and outcomes */}
      <Benefits />

      {/* 9. CTA — closing argument + book a demo */}
      <CTA />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
