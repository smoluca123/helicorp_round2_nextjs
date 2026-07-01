import { HeroSection } from "@/components/sections/hero-section";
import { VerticalNav } from "@/components/ui/vertical-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UseCasesSection } from "@/components/sections/hero/use-cases-section";
import { PerformanceSection } from "@/components/sections/hero/performance-section";
import { ScrollytellingSection } from "@/components/sections/hero/scrollytelling-section";

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

      {/* Performance Section */}
      <PerformanceSection />

      {/* Scrollytelling Section */}
      <ScrollytellingSection />
      
      {/* Another Dummy Section */}
      <section id="parallax" className="min-h-screen w-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-950">
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">
          More Parallax Sections Here
        </h2>
      </section>

      {/* Additional dummy sections to fill out the nav items */}
      <section id="design" className="min-h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">Design Section</h2>
      </section>
      
      <section id="cooling" className="min-h-screen w-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-950">
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">Cooling Section</h2>
      </section>

      <section id="ai" className="min-h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-400">AI & Copilot+ Section</h2>
      </section>
    </main>
  );
}
