import { HeroBackground } from './hero/hero-background';
import { HeroAnimatedContent } from './hero/hero-animated-content';

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20 pb-32">
      <HeroBackground />

      {/* Hero Typography & Text Content - Pure HTML for Instant LCP */}
      <div className="w-full max-w-6xl px-6 lg:px-24 flex flex-col items-center text-center z-10 mt-[45vh]">
        {/* Main Title - Rendered instantly for LCP without JS blocking */}
        <div className="mb-2">
          <h1
            className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-widest text-zinc-900 dark:text-white uppercase uppercase-rog drop-shadow-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            ROG ZEPHYRUS G14
          </h1>
        </div>

        {/* Subtitle - Rendered instantly for LCP */}
        <div className="mb-8">
          <p className="text-lg md:text-xl font-medium tracking-[0.2em] text-zinc-600 dark:text-zinc-300 uppercase">
            ĐỈNH HIỆU NĂNG. BẬC PHONG CÁCH{' '}
            <span className="text-sm tracking-normal text-zinc-400">
              (GU405)
            </span>
          </p>
        </div>

        {/* Animated content wrapper (Client Component) */}
        <HeroAnimatedContent />
      </div>
    </section>
  );
}
