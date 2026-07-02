'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon1.webp"
        alt="CPU"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title:
      'Tận hưởng khả năng sáng tạo và chơi game đỉnh cao trên Windows 11 với bộ vi xử lý Intel® Core™ Ultra 9 285H và NPU 50 TOPs',
    linkText: 'đọc thêm về CPU',
  },
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon2.webp"
        alt="GPU"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title: 'Chơi game và sáng tạo với GPU lên đến NVIDIA® GeForce RTX™ 5080',
    linkText: 'đọc thêm về GPU',
  },
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon3.webp"
        alt="OLED"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title:
      'Màn hình ROG Nebula HDR với tấm nền OLED, 3K 120Hz/0.2ms, 100% DCI-P3, độ sáng tối đa 1100 nits và đạt chứng nhận VESA HDR TrueBlack 1000',
    linkText: 'đọc thêm về màn hình',
  },
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon4.webp"
        alt="Design"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title:
      'Thiết kế siêu mỏng chỉ 1.59cm, trọng lượng từ 1.5kg, hỗ trợ USB Type-C với DP 2.1 và PD 3.0',
    linkText: 'đọc thêm về tính di động',
  },
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon5.webp"
        alt="Cooling"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title:
      'Ống dẫn nhiệt hiệu năng cao, Công nghệ ba quạt* và thiết kế khe thoát cải tiến\n*Tùy Model',
    linkText: 'đọc thêm về tản nhiệt',
  },
  {
    icon: (
      <Image
        src="/assets/images/icons/01_icon6.webp"
        alt="AI"
        width={90}
        height={90}
        className="w-22.5 h-22.5 object-contain"
      />
    ),
    title: 'Đạt chuẩn Copilot+ PC với khả năng xử lý AI trên cả CPU và GPU',
    linkText: 'đọc thêm về hiệu năng',
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function HeroFeatures() {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 w-full text-left"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col border-b border-zinc-200 dark:border-zinc-800 pb-6 group"
        >
          <div className="flex items-start gap-4 mb-4 h-24">
            <div className="text-zinc-900 dark:text-zinc-100 mt-1 shrink-0">
              {feature.icon}
            </div>
            <p className="text-xs font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
              {feature.title}
            </p>
          </div>
          <div className="mt-auto">
            <a
              href="#"
              className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors flex items-center justify-between"
            >
              {feature.linkText}
              <span className="text-lg leading-none">&gt;</span>
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
