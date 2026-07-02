'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function PerformanceSpecs() {
  return (
    <>
      {/* Specs Grid - Top Row (3 items) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 w-full items-end justify-center mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-end h-full"
        >
          <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-semibold mb-2 transition-colors duration-500">
            Hệ điều hành
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-1">
            Windows 11 Home
          </h3>
          <p className="text-zinc-500 text-xs tracking-wider transition-colors duration-500">
            Single Language
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-end h-full py-4"
        >
          {/* Copilot+ Logo */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/images/icons/01_icon6.webp"
              alt="Copilot+ PC"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
            <div className="flex items-center gap-0.5 text-zinc-900 dark:text-white transition-colors duration-500">
              <span className="font-semibold text-xl md:text-2xl tracking-wide">
                Copilot
              </span>
              <span className="border border-zinc-900 dark:border-white rounded-lg px-1 text-sm font-bold ml-1 transition-colors duration-500">
                +
              </span>
              <span className="font-semibold text-xl md:text-2xl tracking-wide ml-1">
                PC
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-end h-full"
        >
          <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-semibold mb-2 transition-colors duration-500">
            Vi xử lý Intel® Core™
          </p>
          <h3 className="text-xl md:text-2xl font-bold">Ultra 9 386H</h3>
        </motion.div>
      </div>

      {/* Specs Grid - Bottom Row (2 items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-3xl mx-auto items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center justify-end h-full"
        >
          <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-semibold mb-2 transition-colors duration-500">
            Lên đến NVIDIA® GeForce
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-1">RTX™ 5080</h3>
          <p className="text-zinc-500 text-xs tracking-wider transition-colors duration-500">Laptop GPU</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center justify-end h-full"
        >
          <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-semibold mb-2 transition-colors duration-500">
            TGP tối đa
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-1">130W</h3>
          <p className="text-zinc-500 text-xs tracking-wider transition-colors duration-500">
            ở Manual Mode
          </p>
        </motion.div>
      </div>
    </>
  );
}
