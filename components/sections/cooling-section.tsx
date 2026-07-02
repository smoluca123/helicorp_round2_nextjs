'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    label: 'Lên đến',
    value: '4 Ống dẫn nhiệt',
  },
  {
    label: 'Công nghệ',
    value: 'Ba quạt*',
  },
  {
    label: 'Yên tĩnh',
    value: '0 dB',
  },
  {
    label: 'Lưu lượng gió',
    value: '+11.4%',
  },
];

export function CoolingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="cooling"
      className="relative w-full bg-white dark:bg-black py-32 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm md:text-base font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
              \ TẢN NHIỆT
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Mát Mẻ Và Yên Tĩnh
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Hệ thống tản nhiệt ROG Intelligent Cooling là một tập hợp các công nghệ tản nhiệt khác nhau được tích hợp hợp bên trong chiếc laptop hiệu năng cao của chúng tôi để luôn đạt hiệu suất cao, luôn mát mẻ và yên tĩnh. Hệ thống ống dẫn nhiệt, Công nghệ ba quạt*, hợp chất tản nhiệt kim loại lỏng và lỗ thoát hiệu quả cao được tái thiết kế trên G14 phối hợp hoạt động mượt mà để đem lại sự cân bằng lý tưởng giữa chức năng tản nhiệt và cách âm. Kết hợp cùng nhau, các hệ thống này giúp tăng đến 11,4% tốc độ lưu thông không khí, cho phép máy hoạt động với hiệu năng tối đa mà vẫn giữ yên tĩnh hơn bao giờ hết.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 w-full"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <span className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400">
                  {stat.label}
                </span>
                <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white whitespace-nowrap">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
