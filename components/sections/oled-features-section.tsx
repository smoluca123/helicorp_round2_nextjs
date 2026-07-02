'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type Spec = {
  label: string;
  value: string;
  logo?: string;
};

type Feature = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  specs: Spec[];
  disclaimer?: string;
  bgImage: string;
  video: {
    poster: string;
    src: string;
    vtt: string;
  };
};

const features: Feature[] = [
  {
    id: 'fast',
    subtitle: 'NHANH',
    title: 'Màn Hình OLED Hàng Đầu Có Hỗ Trợ G-SYNC',
    description:
      'Màn hình OLED có thời gian đáp ứng 0.2ms siêu nhanh, giúp đảm bảo các cảnh hành động tốc độ cao mượt mà hơn, gameplay có độ trễ thấp hơn và các chi tiết tinh tế như cuộn văn bản không bị nhòe. Chúng tôi cũng tự hào với NVIDIA® G-SYNC, một công nghệ điều chỉnh tần số quét cực quan trọng cho laptop gaming mà chưa được trang bị cho các máy dùng màn hình OLED cho tới Zephyrus G14 2024.',
    specs: [
      {
        label: 'Tốc độ phản hồi (GtG)',
        value: '0.2 ms',
        logo: '/assets/images/icons/nvidia-g-sync.svg',
      },
    ],
    bgImage: '/assets/images/display_mini_bg.webp',
    video: {
      poster:
        'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_fast.jpg',
      src: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_fast.mp4',
      vtt: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_fast.vtt',
    },
  },
  {
    id: 'bright',
    subtitle: 'SÁNG',
    title: 'SÁNG Tỷ Lệ Tương Phản Siêu Cao 1.000.000:1',
    description:
      'Màn hình OLED có hàng triệu đèn đi ốt phát quang (LED) và không giống các công nghệ màn hình truyền thống, chúng có thể tắt và bật riêng rẽ từng pixel. Bởi vậy, màn hình OLED có thể đạt các cấp độ màu đen hoàn hảo tới từng pixel, cho tỷ lệ tương phản cực độ 1.000.000:1. Màu đen chân thực này cho phép hình ảnh hiển thị sáng và rõ nét mà không gây cảm giác mờ nhòe, đảm bảo bạn sẽ không bao giờ bỏ lỡ một kẻ địch đang nấp trong bóng tối. Màn hình của Zephyrus G14 cũng có thể đạt độ sáng tối đa 1100 nits*, cho khả năng hiển thị vùng sáng xuất sắc trong những bộ phim hay tựa game yêu thích của bạn. HDR chưa bao giờ hiển thị xuất sắc như vậy.',
    specs: [
      {
        label: 'Độ tương phản',
        value: '1.000.000:1',
      },
      {
        label: 'Độ sáng tối đa',
        value: '1100 nits*',
      },
    ],
    disclaimer:
      '*Số liệu về độ sáng tối đa thể hiện các thông số của chính tấm nền. Độ sáng thực tế có thể khác biệt do các yếu tố, bao gồm nhưng không giới hạn ở, lớp kính hoặc tích hợp màn hình cảm ứng và hiệu chuẩn màu sắc.',
    bgImage: '/assets/images/display_bg2.webp',
    video: {
      poster:
        'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_bright.jpg',
      src: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_bright.mp4',
      vtt: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_bright.vtt',
    },
  },
  {
    id: 'vivid',
    subtitle: 'RỰC RỠ',
    title: 'Độ Phân Giải 3K',
    description:
      'Tận hưởng hình ảnh sống động khó tin nhờ độ chân thực hình ảnh được cải thiện với độ phân giải 3K. Với mật độ pixel cao hơn 1440p, màn hình 3K cho khả năng hiển thị cả hình ảnh tĩnh cũng như nội dung video chân thực, sống động và rực rỡ.',
    specs: [
      {
        label: 'Độ phân giải',
        value: '3K (2880x1800)',
      },
    ],
    bgImage: '/assets/images/display_bg3.webp',
    video: {
      poster:
        'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_vivid.jpg',
      src: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_vivid.mp4',
      vtt: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_vivid.vtt',
    },
  },
];

function FeatureText({
  feature,
  onInView,
}: {
  feature: Feature;
  onInView: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  useEffect(() => {
    if (isInView) {
      onInView(feature.id);
    }
  }, [isInView, feature.id, onInView]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#9b72ff] font-bold uppercase tracking-wider text-sm md:text-base lg:text-lg">
          {feature.subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mt-2 leading-[1.1] tracking-tight">
          {feature.title}
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-zinc-300 text-sm md:text-base leading-relaxed font-light mt-6 lg:mt-8"
      >
        {feature.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-end gap-10 md:gap-12 mt-8 lg:mt-12"
      >
        {feature.specs.map((spec, i) => (
          <div key={i} className="flex items-end gap-6">
            <div className="flex flex-col space-y-1">
              <span className="text-[#9b72ff] text-xs md:text-sm font-medium">
                {spec.label}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
                {spec.value}
              </span>
            </div>
            {spec.logo && (
              <div className="pb-1 md:pb-2">
                <Image
                  src={spec.logo}
                  alt={spec.label}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {feature.disclaimer && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs md:text-sm text-zinc-500/80 mt-8 font-light max-w-lg"
        >
          {feature.disclaimer}
        </motion.p>
      )}

      {/* MOBILE ONLY: Inline Laptop + Video */}
      <div className="w-full block lg:hidden mt-12 mb-8 pointer-events-none">
        <div className="relative w-full max-w-xl mx-auto">
          <Image
            src="/assets/images/display_laptop.webp"
            alt="Zephyrus G14 Laptop Frame"
            width={1600}
            height={1100}
            className="w-full h-auto drop-shadow-2xl relative z-20"
          />

          {/* Video Player */}
          <div
            className="absolute z-30 overflow-hidden bg-black flex items-center justify-center rounded-sm"
            style={{ top: '2%', left: '9.5%', width: '81%', bottom: '33%' }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              width="100%"
              poster={feature.video.poster}
              muted
              loop
              playsInline
              autoPlay
            >
              <source src={feature.video.src} />
            </video>
          </div>

          {/* Glow effect */}
          <div className="absolute -bottom-4 left-[20%] right-[20%] h-8 bg-zinc-500/30 blur-2xl rounded-[100%]"></div>
        </div>
      </div>
    </div>
  );
}

export function OledFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="relative w-full bg-black">
      {/* Background Images (Fixed) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        {features.map((feature, idx) => (
          <div
            key={`bg-${feature.id}`}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              activeFeature === feature.id
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0',
            )}
          >
            <Image
              src={feature.bgImage}
              alt="OLED Background"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Global Dark overlay to make text pop more */}
        <div className="absolute inset-0 bg-black/30 z-20"></div>
      </div>

      {/* Content Container */}
      {/* Kéo ngược container lên để nằm đè lên lớp sticky background */}
      <div className="relative z-30 w-full max-w-350 mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row mt-[-100vh]">
        {/* Left Side: Scrolling Text Blocks */}
        <div className="w-full lg:w-[65%] flex flex-col z-40">
          {features.map((feature) => (
            <FeatureText
              key={feature.id}
              feature={feature}
              onInView={setActiveFeature}
            />
          ))}
        </div>

        {/* Right Side: Sticky Laptop + Video */}
        <div className="w-full lg:w-[45%] hidden lg:flex h-screen sticky top-0 items-center justify-center pointer-events-none z-30">
          <div className="relative w-full max-w-3xl">
            {/* 
              Thay vì dùng 'fill' và 'aspect-16/11' dễ gây lệch viền khi đổi màn hình, 
              ta dùng ảnh với w-full h-auto để thẻ div bọc ngoài tự động lấy đúng tỷ lệ thật của ảnh.
              Lúc đó các thông số % của top, left, bottom sẽ luôn khớp chính xác tuyệt đối trên mọi màn hình.
            */}
            <Image
              src="/assets/images/display_laptop.webp"
              alt="Zephyrus G14 Laptop Frame"
              width={1600}
              height={1100}
              className="w-full h-auto drop-shadow-2xl relative z-20"
            />

            {/* Video Players (Crossfading) */}
            <div
              className="absolute z-30 overflow-hidden bg-black flex items-center justify-center rounded-sm"
              style={{ top: '2%', left: '9.5%', width: '81%', bottom: '33%' }}
            >
              {features.map((feature) => (
                <video
                  key={`video-${feature.id}`}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out',
                    activeFeature === feature.id ? 'opacity-100' : 'opacity-0',
                  )}
                  width="100%"
                  poster={feature.video.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <track
                    src={feature.video.vtt}
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                  <source src={feature.video.src} />
                </video>
              ))}
            </div>

            {/* Optional glow effect under the laptop */}
            <div className="absolute -bottom-4 left-[20%] right-[20%] h-8 bg-zinc-500/30 blur-2xl rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
