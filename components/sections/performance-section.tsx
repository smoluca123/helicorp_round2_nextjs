'use client';

import { PerformanceHeader } from './performance/performance-header';
import { PerformanceSpecs } from './performance/performance-specs';

export function PerformanceSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white flex flex-col items-center justify-center py-32 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-500"
      id="performance"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-200/50 via-white to-white dark:from-zinc-900/40 dark:via-black dark:to-black pointer-events-none transition-colors duration-500"></div>

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        <PerformanceHeader />
        <PerformanceSpecs />
      </div>
    </section>
  );
}
