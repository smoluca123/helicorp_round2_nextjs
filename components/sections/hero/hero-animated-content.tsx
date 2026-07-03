'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { HeroFeatures } from './hero-features';

const containerVariants: Variants = {
  hidden: {},
  visible: {
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

export function HeroAnimatedContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center w-full"
    >
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
      <motion.div variants={itemVariants} className="mb-16 max-w-3xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 mb-2">
          GPU Laptop NVIDIA® GeForce RTX™ 5080
          <br />
          với thân máy mỏng 1.59cm
        </h2>
      </motion.div>

      <HeroFeatures />
    </motion.div>
  );
}
