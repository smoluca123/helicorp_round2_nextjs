'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';


const sections = [
  { id: 'hero', label: 'TỔNG QUAN' },
  { id: 'performance', label: 'HIỆU NĂNG' },
  { id: 'parallax', label: 'MÀN HÌNH' },
  { id: 'design', label: 'THIẾT KẾ' },
  { id: 'cooling', label: 'TẢN NHIỆT' },
  { id: 'control', label: 'ĐIỀU KHIỂN' },
  { id: 'portability', label: 'TÍNH DI ĐỘNG' },
  { id: 'faq', label: 'FAQ' },
  { id: 'newsletter', label: 'ĐĂNG KÝ NHẬN TIN' },
];

export function VerticalNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Desktop Vertical Nav */}
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
        <div className="flex w-full flex-col items-center gap-1 pointer-events-auto">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="relative flex items-center justify-center h-10 w-full group cursor-pointer"
                aria-label={`Scroll to ${section.label}`}
              >
                <span
                  className={cn(
                    'absolute right-12 whitespace-nowrap text-[10px] font-bold tracking-widest text-zinc-900 dark:text-zinc-100 pointer-events-none bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/50 dark:border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.8)] dark:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300',
                    isActive
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0',
                  )}
                >
                  {section.label}
                </span>
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

      {/* Mobile Custom Overlay Menu */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg text-zinc-900 dark:text-white transition-all duration-300 outline-none hover:scale-105 active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Full-screen Overlay */}
        <div
          className={cn(
            'fixed inset-0 z-40 flex flex-col items-center justify-center bg-zinc-50/98 dark:bg-[#030303]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center gap-6 w-full px-6">
            {sections.map((section, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(section.id);
                  }}
                  className={cn(
                    'text-xl sm:text-2xl font-black tracking-widest uppercase transition-all duration-300 outline-none',
                    isActive
                      ? 'text-zinc-900 dark:text-white scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                      : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400',
                  )}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
