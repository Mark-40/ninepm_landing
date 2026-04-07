// NinePM Landing Page — App Router entry point
//
// Section flow (visual-first, conversion-optimized):
//   Navbar
//   → Hero            (split layout + live dashboard mockup)
//   → Problem         (pain points — dark section)
//   → BeforeAfter     (Excel chaos vs NinePM dashboard — NEW)
//   → ProductOutputs  (3 concrete deliverables — NEW)
//   → Solution        (the NinePM approach)
//   → Services        (5 service cards)
//   → UseCases        (Clinic / Seller / Agency mockups — NEW)
//   → HowItWorks      (3-step process)
//   → Benefits        (metrics section)
//   → CTA             (closing argument)
//   → Footer

import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Problem       from "@/components/Problem";
import BeforeAfter   from "@/components/BeforeAfter";
import ProductOutputs from "@/components/ProductOutputs";
import Solution      from "@/components/Solution";
import Services      from "@/components/Services";
import UseCases      from "@/components/UseCases";
import HowItWorks    from "@/components/HowItWorks";
import Benefits      from "@/components/Benefits";
import CTA           from "@/components/CTA";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1. Hero — bold headline + live dashboard mockup */}
      <Hero />

      {/* 2. Problem — pain points that resonate with SMB owners */}
      <Problem />

      {/* 3. Before vs After — immediate visual proof of transformation */}
      <BeforeAfter />

      {/* 4. Product Outputs — 3 concrete deliverables (report, pipeline, log) */}
      <ProductOutputs />

      {/* 5. Solution — the NinePM approach, framed as philosophy */}
      <Solution />

      {/* 6. Services — full breakdown of what we build */}
      <Services />

      {/* 7. Use Cases — Clinic, Seller, Agency with real mockups */}
      <UseCases />

      {/* 8. How It Works — 3-step Discover → Build → Automate */}
      <HowItWorks />

      {/* 9. Benefits — metrics and outcomes */}
      <Benefits />

      {/* 10. CTA — closing argument + book a demo */}
      <CTA />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
