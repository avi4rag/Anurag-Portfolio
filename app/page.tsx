import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <WorkSection />
        <TestimonialsSection />
        <AboutTeaser />
      </main>
      <Footer />
    </>
  );
}
