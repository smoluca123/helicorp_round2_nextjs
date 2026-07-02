'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    title: 'GAMING',
    image: '/assets/images/large/user_1.webp',
  },
  {
    title: 'SÁNG TẠO',
    image: '/assets/images/large/user_2.webp',
  },
  {
    title: 'HIỆU SUẤT',
    image: '/assets/images/large/user_3.webp',
  },
];

export function UseCasesSection() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[60vh] md:h-[75vh]">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="relative group overflow-hidden w-full h-full border-r border-zinc-900 last:border-r-0 cursor-pointer"
          >
            <div className="absolute inset-0 bg-zinc-900">
              {/* 
                 Sử dụng thẻ img hoặc Next Image tùy theo cấu hình của bạn. 
                 Đây là placeholder cho ảnh thực tế 
               */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: '#18181b',
                }}
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

            <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end">
              <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white uppercase tracking-tighter drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2.5">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
