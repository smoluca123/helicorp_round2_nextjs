'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { HeroBackground } from './hero/hero-background';
import { HeroFeatures } from './hero/hero-features';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20 pb-32">
      <HeroBackground />

      {/* Hero Typography & Text Content */}
      <motion.div
        className="w-full max-w-6xl px-6 lg:px-24 flex flex-col items-center text-center z-10 mt-[45vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1
            className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-widest text-zinc-900 dark:text-white uppercase uppercase-rog drop-shadow-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            ROG ZEPHYRUS G14
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl font-medium tracking-[0.2em] text-zinc-600 dark:text-zinc-300 uppercase">
            ĐỈNH HIỆU NĂNG. BẬC PHONG CÁCH{' '}
            <span className="text-sm tracking-normal text-zinc-400">
              (GU405)
            </span>
          </p>
        </motion.div>

        {/* Brand Badges */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16"
        >
          <Image 
            src="/assets/images/nv_logo.webp" 
            alt="NVIDIA GeForce RTX" 
            width={150} 
            height={60} 
            className="object-contain h-8 md:h-12 w-auto" 
          />
          <Image 
            src="/assets/images/badge_for_screen_02.svg" 
            alt="NVIDIA Studio" 
            width={150} 
            height={60} 
            className="object-contain h-8 md:h-12 w-auto" 
          />
          <Image 
            src="/assets/images/core9.webp" 
            alt="Intel Core Ultra 9" 
            width={80} 
            height={60} 
            className="object-contain h-8 md:h-12 w-auto" 
          />
          <Image 
            src="/assets/images/xboxpass.webp" 
            alt="Xbox Game Pass" 
            width={160} 
            height={60} 
            className="object-contain h-8 md:h-12 w-auto" 
          />
        </motion.div>

        {/* Feature Highlight Title */}
        <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 mb-2">
            GPU Laptop NVIDIA® GeForce RTX™ 5080
            <br />
            với thân máy mỏng 1.59cm
          </h2>
        </motion.div>

        <HeroFeatures />
      </motion.div>
    </section>
  );
}
