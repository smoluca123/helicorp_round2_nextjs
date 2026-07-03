import { HeroSection } from '@/components/sections/hero-section';
import { VerticalNav } from '@/components/ui/vertical-nav';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { PerformanceSection } from '@/components/sections/performance-section';
import { PerformanceCarousel } from '@/components/sections/performance/performance-carousel';
import { ScrollytellingSection } from '@/components/sections/scrollytelling-section';
import { OledDisplaySection } from '@/components/sections/oled-display-section';
import { OledFeaturesSection } from '@/components/sections/oled-features-section';
import { CoolingSection } from '@/components/sections/cooling-section';
import { ControlSection } from '@/components/sections/control-section';
import { DesignSection } from '@/components/sections/design-section';
import { PortabilitySection } from '@/components/sections/portability-section';
import { FaqSection } from '@/components/sections/faq-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Global layout elements */}
      <ThemeToggle />
      <VerticalNav />

      {/* Hero Section */}
      <div id="hero" className="w-full">
        <HeroSection />
      </div>

      {/* Use Cases (Gaming / Sáng tạo / Hiệu suất) */}
      <UseCasesSection />

      {/* Performance Section (Header & Specs) */}
      <PerformanceSection />

      {/* Scrollytelling Section */}
      <ScrollytellingSection />

      {/* Performance Carousel */}
      <section className="relative w-full bg-white dark:bg-black py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-200/50 via-white to-white dark:from-zinc-900/40 dark:via-black dark:to-black pointer-events-none transition-colors duration-500"></div>
        <div className="w-full z-10 px-4 md:px-0">
          <PerformanceCarousel />
        </div>
      </section>

      {/* OLED Display Section (Scroll zoom out) */}
      <OledDisplaySection />

      {/* OLED Features Scrollytelling */}
      <OledFeaturesSection />

      {/* Design Section */}
      <DesignSection />

      <CoolingSection />
      
      <ControlSection />

      {/* Portability Section */}
      <PortabilitySection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
