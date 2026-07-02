'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'TỔNG QUAN' },
  { id: 'performance', label: 'HIỆU NĂNG' },
  { id: 'parallax', label: 'MÀN HÌNH' },
  { id: 'design', label: 'THIẾT KẾ' },
  { id: 'cooling', label: 'TẢN NHIỆT' },
  { id: 'ai', label: 'AI & COPILOT+' },
];

export function VerticalNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentIdx = 0;
      sections.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentIdx = idx;
          }
        }
      });
      setActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-around border-l border-zinc-200/20 bg-transparent py-8 md:flex pointer-events-none">
      {/* Top spacing */}
      <div className="h-12 w-px bg-red-600/50" />

      {/* Product Name (Rotated) */}
      <div className="flex items-center justify-center">
        <h2
          className="text-sm font-bold tracking-[0.3em] text-zinc-900 dark:text-zinc-100"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          ROG ZEPHYRUS G14
        </h2>
      </div>

      {/* Section Indicator */}
      <div className="flex flex-col items-center gap-2 pointer-events-auto">
        {sections.map((section, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="relative flex items-center justify-center h-6 w-full group cursor-pointer "
              aria-label={`Scroll to ${section.label}`}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-8 whitespace-nowrap text-[10px] font-bold tracking-widest text-zinc-900 dark:text-zinc-100 pointer-events-none bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/50 dark:border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.8)] dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
              <div
                className={cn(
                  'transition-all duration-300 rounded-sm rotate-25 shadow-md ',
                  isActive
                    ? 'h-8 w-2 bg-zinc-900 shadow-zinc-400/50 dark:bg-zinc-100 dark:shadow-white/20'
                    : 'h-6 w-1.5 bg-zinc-400 shadow-zinc-300/50 dark:bg-zinc-700 dark:shadow-zinc-900/50 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-500',
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Bottom spacing */}
      <div className="mt-8 h-12 w-px bg-red-600/50" />
    </div>
  );
}
