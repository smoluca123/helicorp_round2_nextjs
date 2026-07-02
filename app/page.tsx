import { HeroSection } from '@/components/sections/hero-section';
import { VerticalNav } from '@/components/ui/vertical-nav';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { PerformanceSection } from '@/components/sections/performance-section';
import { PerformanceCarousel } from '@/components/sections/performance/performance-carousel';
import { ScrollytellingSection } from '@/components/sections/scrollytelling-section';

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

      {/* Another Dummy Section */}
      <section
        id="parallax"
        className="min-h-screen w-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-950"
      >
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">
          More Parallax Sections Here
        </h2>
      </section>

      {/* Additional dummy sections to fill out the nav items */}
      <section
        id="design"
        className="min-h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900"
      >
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">
          Design Section
        </h2>
      </section>

      <section
        id="cooling"
        className="min-h-screen w-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-950"
      >
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">
          Cooling Section
        </h2>
      </section>

      <section
        id="ai"
        className="min-h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900"
      >
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">
          AI & Copilot+ Section
        </h2>
      </section>
    </main>
  );
}
