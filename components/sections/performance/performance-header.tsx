'use client';

import { motion } from 'framer-motion';

export function PerformanceHeader() {
  return (
    <>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="text-zinc-500 dark:text-zinc-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base transition-colors duration-500">
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
        className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed mb-24 max-w-4xl transition-colors duration-500"
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
    </>
  );
}
