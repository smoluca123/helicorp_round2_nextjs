'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Slide1Content } from './scrollytelling/slide-1';
import { Slide2Content } from './scrollytelling/slide-2';
import { Slide3Content } from './scrollytelling/slide-3';
import { Slide4Content } from './scrollytelling/slide-4';
import { Slide5Content } from './scrollytelling/slide-5';

const slidesCount = 5;

export function ScrollytellingSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${100 - 100 / slidesCount}%`],
  );

  return (
    <>
      {/* ================= BẢN MOBILE (Cuộn Dọc) ================= */}
      <section className="flex md:hidden w-full bg-black flex-col pb-20">
        <div className="w-full min-h-[90vh] relative overflow-hidden pb-12 border border-border">
          <Slide1Content />
        </div>
        <div className="w-full relative overflow-hidden py-12 border border-border">
          <Slide2Content />
        </div>
        <div className="w-full min-h-[90vh] relative overflow-hidden py-12 border border-border">
          <Slide3Content />
        </div>
        <div className="w-full min-h-[90vh] relative overflow-hidden py-12 flex items-center border border-border">
          <Slide4Content />
        </div>
        <div className="w-full min-h-[90vh] relative overflow-hidden py-12 flex items-center border border-border">
          <Slide5Content />
        </div>
      </section>

      {/* ================= BẢN DESKTOP (Scrollytelling Ngang) ================= */}
      <section
        ref={targetRef}
        className="hidden md:block relative w-full bg-black"
        style={{ height: `${slidesCount * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x, width: `${slidesCount * 100}vw` }}
            className="flex h-[80dvh]"
          >
            {/* SLIDE 1 */}
            <div className="w-screen h-full flex items-center shrink-0 relative px-16 lg:px-24 border border-border">
              <Slide1Content />
            </div>

            {/* SLIDE 2 */}
            <div className="w-screen h-full flex items-center shrink-0 relative px-12 lg:px-24 border border-border">
              <Slide2Content />
            </div>

            {/* SLIDE 3 */}
            <div className="w-screen h-full flex items-center shrink-0 relative px-16 lg:px-24 border border-border">
              <Slide3Content />
            </div>

            {/* SLIDE 4 */}
            <div className="w-screen h-full flex items-center shrink-0 relative px-12 lg:px-24 border border-border">
              <Slide4Content />
            </div>

            {/* SLIDE 5 */}
            <div className="w-screen h-full flex items-center shrink-0 relative px-16 lg:px-24 border border-border">
              <Slide5Content />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
