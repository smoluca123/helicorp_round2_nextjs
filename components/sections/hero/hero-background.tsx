'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <>
      {/* Background Images with Framer Motion Transition */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-zinc-100 dark:bg-black">
        <AnimatePresence initial={false}>
          {!isDark ? (
            <motion.div
              key="light-bg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1.0, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 1.0, ease: 'easeInOut' },
              }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/images/01__kv_reverse.webp"
                alt="ROG Zephyrus G14 Light"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          ) : (
            <motion.div
              key="dark-bg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1.0, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 1.0, ease: 'easeInOut' },
              }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/images/01__kv.webp"
                alt="ROG Zephyrus G14 Dark"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/95 dark:to-transparent" />
    </>
  );
}
