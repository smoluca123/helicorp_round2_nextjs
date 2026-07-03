import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/hero-section';
import { VerticalNav } from '@/components/ui/vertical-nav';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { PerformanceSection } from '@/components/sections/performance-section';

// Lazy-load below-the-fold sections to reduce initial JS bundle
// These sections are not visible on first paint, so they don't need to be in the critical path
const PerformanceCarousel = dynamic(
  () =>
    import('@/components/sections/performance/performance-carousel').then(
      (m) => m.PerformanceCarousel,
    ),
  { ssr: true },
);

const ScrollytellingSection = dynamic(
  () =>
    import('@/components/sections/scrollytelling-section').then(
      (m) => m.ScrollytellingSection,
    ),
  { ssr: true },
);

const OledDisplaySection = dynamic(
  () =>
    import('@/components/sections/oled-display-section').then(
      (m) => m.OledDisplaySection,
    ),
  { ssr: true },
);

const OledFeaturesSection = dynamic(
  () =>
    import('@/components/sections/oled-features-section').then(
      (m) => m.OledFeaturesSection,
    ),
  { ssr: true },
);

const DesignSection = dynamic(
  () =>
    import('@/components/sections/design-section').then(
      (m) => m.DesignSection,
    ),
  { ssr: true },
);

const CoolingSection = dynamic(
  () =>
    import('@/components/sections/cooling-section').then(
      (m) => m.CoolingSection,
    ),
  { ssr: true },
);

const ControlSection = dynamic(
  () =>
    import('@/components/sections/control-section').then(
      (m) => m.ControlSection,
    ),
  { ssr: true },
);

const PortabilitySection = dynamic(
  () =>
    import('@/components/sections/portability-section').then(
      (m) => m.PortabilitySection,
    ),
  { ssr: true },
);

const FaqSection = dynamic(
  () =>
    import('@/components/sections/faq-section').then((m) => m.FaqSection),
  { ssr: true },
);

const NewsletterSection = dynamic(
  () =>
    import('@/components/sections/newsletter-section').then(
      (m) => m.NewsletterSection,
    ),
  { ssr: true },
);

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Global layout elements */}
      <ThemeToggle />
      <VerticalNav />

      {/* Hero Section — critical, loaded eagerly */}
      <div id="hero" className="w-full">
        <HeroSection />
      </div>

      {/* Use Cases — just below the fold, load eagerly for fast scroll */}
      <UseCasesSection />

      {/* Performance Section — header & specs */}
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

      {/* OLED Display Section */}
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
