'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function PortabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="portability"
      className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/images/portability_bg.jpg"
          alt="Portability Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Lớp phủ cho dark mode */}
        <div className="absolute inset-0 bg-transparent dark:bg-black/85 transition-colors duration-500"></div>
      </div>

      <div
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Top Left: Title & Description */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center pr-0 md:pr-4"
          >
            <h3 className="text-sm md:text-base text-center md:text-left font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-4">
              \ Tính di động
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 transition-colors duration-500">
              Pin dùng cả ngày
            </h2>
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium transition-colors duration-500">
              Zephyrus G14 luôn gắn với tính di động, và model 2026 cũng không
              phải ngoại lệ. Cỗ máy gaming ấn tượng này thực sự mỏng và nhẹ, chỉ
              nặng 1.5 kg, một số model có độ dày chỉ 1.59 cm. Được trang bị pin
              73Wh hỗ trợ sạc nhanh từ 0-50% chỉ trong 30 phút và kết nối mạng
              không dây Wi-Fi 7, Zephyrus G14 chính là cỗ máy làm việc hiệu suất
              và gaming đỉnh cao cho những người dùng năng động.
            </p>
          </motion.div>

          {/* Top Right: Sạc 50% */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-3/2 group shadow-xl">
              <Image
                src="/assets/images/portability_3.webp"
                alt="Sạc 50% chỉ trong 30 phút"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Sạc 50% chỉ trong 30 phút
                </h4>
              </div>
            </div>
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 px-2 font-medium transition-colors duration-500">
              Tính di động của G14 được tăng cường nhờ khả năng sạc nhanh từ
              0-50% chỉ trong 30 phút.
            </p>
          </motion.div>

          {/* Mid Left: 1.59 cm */}
          <motion.div variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-3/2 group shadow-xl bg-linear-to-br from-zinc-50 to-zinc-300 dark:from-zinc-800 dark:to-zinc-950">
              <Image
                src="/assets/images/io_02.webp"
                alt="1.59 cm"
                fill
                className="object-contain object-left scale-110 origin-left transition-transform duration-700 group-hover:scale-125 p-4"
              />
              <div className="absolute inset-0 bg-linear-to-tl from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  1.59 cm
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Mid Right: 1.5KG */}
          <motion.div variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-3/2 group shadow-xl">
              <Image
                src="/assets/images/portability_4.webp"
                alt="1.5KG"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  1.5KG
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Bot Left: 73Wh */}
          <motion.div variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-3/2 group shadow-xl">
              <Image
                src="/assets/images/portability_2.webp"
                alt="73Wh"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  73Wh
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Bot Right: Wi-Fi 7 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-3/2 group shadow-xl">
              <Image
                src="/assets/images/portability_5.webp"
                alt="Wi-Fi 7"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Wi-Fi 7
                </h4>
              </div>
            </div>
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 px-2 font-medium transition-colors duration-500">
              Với khả năng hỗ trợ đầy đủ chuẩn Wi-Fi 7 và tốc độ truyền gửi lên
              đến 5,8 Gbps, G14 có thể hỗ trợ kết nối ở cấp độ băng thông rộng
              ngay cả trong các mạng đông đúc.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
