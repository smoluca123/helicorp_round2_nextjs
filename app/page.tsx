import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/hero-section';
import { VerticalNav } from '@/components/ui/vertical-nav';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const UseCasesSection = dynamic(() => import('@/components/sections/use-cases-section').then(mod => mod.UseCasesSection));
const PerformanceSection = dynamic(() => import('@/components/sections/performance-section').then(mod => mod.PerformanceSection));
const PerformanceCarousel = dynamic(() => import('@/components/sections/performance/performance-carousel').then(mod => mod.PerformanceCarousel));
const ScrollytellingSection = dynamic(() => import('@/components/sections/scrollytelling-section').then(mod => mod.ScrollytellingSection));
const OledDisplaySection = dynamic(() => import('@/components/sections/oled-display-section').then(mod => mod.OledDisplaySection));
const OledFeaturesSection = dynamic(() => import('@/components/sections/oled-features-section').then(mod => mod.OledFeaturesSection));
const CoolingSection = dynamic(() => import('@/components/sections/cooling-section').then(mod => mod.CoolingSection));
const ControlSection = dynamic(() => import('@/components/sections/control-section').then(mod => mod.ControlSection));
const DesignSection = dynamic(() => import('@/components/sections/design-section').then(mod => mod.DesignSection));
const PortabilitySection = dynamic(() => import('@/components/sections/portability-section').then(mod => mod.PortabilitySection));
const FaqSection = dynamic(() => import('@/components/sections/faq-section').then(mod => mod.FaqSection));
const NewsletterSection = dynamic(() => import('@/components/sections/newsletter-section').then(mod => mod.NewsletterSection));

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
