'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export function PerformanceSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="performance"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="text-zinc-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
            \ HIỆU NĂNG
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight"
        >
          Khai Mở Kỷ Nguyên Mới
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed mb-24 max-w-4xl"
        >
          Chơi game, sáng tạo và cộng tác dễ dàng trên cỗ máy chạy Windows 11
          Home Single Language thế hệ tiếp theo này. Được trang bị bộ vi xử lý
          lên đến Intel® Core™ Ultra 9 386H và card đồ họa lên đến NVIDIA®
          GeForce RTX™ 5080 Laptop GPU, chiếc laptop gaming 14 inch này có thể
          dễ dàng xử lý các tựa game mới nhất cũng như các phần mềm sáng tạo tối
          tân. Trình tăng tốc AI được tích hợp trên cả CPU lẫn GPU cho phép
          Zephyrus G14 tiếp tục là mẫu laptop mỏng nhẹ cao cấp của ROG từng được
          chế tạo mà không phải hy sinh hiệu suất khi bắt tay vào công việc.
        </motion.p>

        {/* Specs Grid - Top Row (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 w-full items-end justify-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-end h-full"
          >
            <p className="text-purple-500 text-xs md:text-sm font-semibold mb-2">
              Hệ điều hành
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-1">
              Windows 11 Home
            </h3>
            <p className="text-zinc-500 text-xs tracking-wider">
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
              <div className="flex items-center gap-0.5 text-white">
                <span className="font-semibold text-2xl tracking-wide">
                  Copilot
                </span>
                <span className="border border-white rounded-lg px-1 text-sm font-bold ml-1">
                  +
                </span>
                <span className="font-semibold text-2xl tracking-wide ml-1">
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
            <p className="text-purple-500 text-xs md:text-sm font-semibold mb-2">
              Vi xử lý Intel® Core™
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">Ultra 9 386H</h3>
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
            <p className="text-purple-500 text-xs md:text-sm font-semibold mb-2">
              Lên đến NVIDIA® GeForce
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">RTX™ 5080</h3>
            <p className="text-zinc-500 text-xs tracking-wider">Laptop GPU</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center justify-end h-full"
          >
            <p className="text-purple-500 text-xs md:text-sm font-semibold mb-2">
              TGP tối đa
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">130W</h3>
            <p className="text-zinc-500 text-xs tracking-wider">
              ở Manual Mode
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
