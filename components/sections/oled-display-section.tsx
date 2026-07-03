'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const oledSpecs = [
  { label: 'Màn hình', value: 'OLED' },
  { label: 'Độ phân giải', value: '3K (2880x1800)' },
  { label: 'Độ sáng tối đa', value: '1100 nits' },
  { label: 'Độ tương phản', value: '1,000,000:1' },
  { label: 'Tốc độ phản hồi (GtG)', value: '0.2 ms' },
  { label: 'Độ phủ màu', value: '100% DCI-P3' },
  { label: 'Độ chính xác màu', value: 'ΔE<1' },
  { label: 'Tần số quét', value: '120Hz' },
  { label: 'Kính chống chói', value: 'Corning Glass DXC' },
];

export function OledDisplaySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scale from high (to make the video fill the screen) down to 1
  const scale = useTransform(scrollYProgress, [0, 1], [6, 1]);

  // The heading will now use standard whileInView animation instead of scroll-linked opacity

  // Ensure video auto-plays when in view (especially on mobile)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.log('Video autoplay blocked', e));
    }
  }, []);

  return (
    <>
      <section
        id="parallax"
        ref={containerRef}
        className="relative h-[300vh] w-full bg-zinc-50 dark:bg-black transition-colors duration-500"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-zinc-50 dark:bg-[#0a0a0a] pt-16 md:pt-24 transition-colors duration-500">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/assets/images/display_bg1.webp"
              alt="Display Background"
              fill
              className="object-cover opacity-50 md:opacity-70"
              priority
            />
            {/* Gradient overlay để hòa trộn với các section khác và giúp text dễ đọc hơn */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-50/90 via-transparent to-zinc-50 dark:from-[#0a0a0a]/80 dark:via-transparent dark:to-[#0a0a0a] transition-colors duration-500"></div>
          </div>

          {/* Tiêu đề */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 flex flex-col items-center z-30 shrink-0"
          >
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                \ MÀN HÌNH
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight text-zinc-900 dark:text-white transition-colors duration-500">
              Next-Gen OLED
            </h2>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto text-center transition-colors duration-500">
              Màn hình đỉnh cao với độ sắc nét và màu sắc vượt trội, được chứng
              nhận ROG Nebula Display.
            </p>
          </motion.div>

          {/* Cụm Laptop + Video */}
          {/* Đặt trong một flex-1 container để laptop tự động chiếm phần không gian còn lại bên dưới chữ. Thêm overflow-hidden để khi zoom out laptop ko bị tràn lên đè vào phần chữ. */}
          <div className="relative w-full flex-1 flex items-center justify-center mt-4 md:mt-8 pb-8 z-20 overflow-hidden">
            <motion.div
              style={{ scale }}
              className="relative w-[95vw] md:w-[75vw] max-w-5xl aspect-16/10 flex items-center justify-center origin-[50%_45.5%]"
            >
              <div className="relative w-full h-full">
                {/* Ảnh khung laptop (Nằm trên cùng) */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                  <Image
                    src="/assets/images/g14_nb.webp"
                    alt="Zephyrus G14 Laptop Frame"
                    fill
                    className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_40px_60px_rgba(255,255,255,0.05)]"
                    priority
                  />
                </div>

                {/* Vùng chứa Video (Nằm dưới khung laptop để tạo cảm giác chìm vào màn hình) */}
                {/* Các giá trị % được ước lượng cho một ảnh laptop hướng thẳng chuẩn */}
                <div className="absolute top-[8%] left-[20%] w-[59%] z-10 rounded-sm md:rounded-md overflow-hidden bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    id="video-nebula"
                    className="w-full h-full object-cover"
                    width="100%"
                    poster="https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_nebula.webp"
                    muted
                    playsInline
                    loop
                    autoPlay
                    aria-label="An Eclipse Grey Zephyrus G14 with the Nebula Display logo on screen."
                  >
                    <track
                      src="https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_nebula.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                    Rất tiếc, trình duyệt của bạn không hỗ trợ video tích hợp.
                    <source src="https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/display_nebula.mp4" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thông số chi tiết Màn Hình */}
      <section className="relative w-full bg-zinc-50 dark:bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
        {/* Đoạn văn mô tả */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed font-light transition-colors duration-500">
            Cuối cùng thì các game thủ dùng laptop cũng có thể tận hưởng thời
            gian đáp ứng siêu nhanh và tỷ lệ tương phản khó tin mà chỉ có thể
            thành hiện thực với công nghệ OLED. Màn hình ROG Nebula HDR này sở
            hữu độ phân giải 3K cùng độ sáng tối đa 1100 nits*, cho mật độ pixel
            cao đến khó tin cùng công nghệ HDR cho màn hình 14-inch. Tần số quét
            120Hz và G-SYNC khiến mọi tựa game đều hiển thị mượt như lụa. Với
            không gian màu DCI-P3 100%, độ chính xác màu ΔE nhỏ hơn 1 và đạt
            chứng nhận VESA DisplayHDR True Black 1000, hãy chuẩn bị tinh thần
            đắm chìm trong nội dung HDR chân thực tới mức khó tin.
          </p>
        </div>

        {/* Các thông số */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:flex xl:flex-wrap xl:justify-center gap-8 md:gap-12 mt-16 w-full max-w-6xl">
          {oledSpecs.map((spec, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-2"
            >
              <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-colors duration-500">
                {spec.value}
              </span>
              <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-semibold transition-colors duration-500">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-20 w-full max-w-4xl opacity-60 dark:opacity-80 brightness-0 dark:brightness-100 transition-all duration-500">
          <Image
            src="/assets/images/icons/nvidia-g-sync.svg"
            alt="NVIDIA G-SYNC"
            width={120}
            height={40}
            className="object-contain h-8 md:h-10 w-auto"
          />
          <Image
            src="/assets/images/icons/pantoneLogo.svg"
            alt="Pantone Validated"
            width={120}
            height={40}
            className="object-contain h-8 md:h-10 w-auto"
          />
          <Image
            src="/assets/images/icons/dolby.webp"
            alt="Dolby Vision Atmos"
            width={120}
            height={40}
            className="object-contain h-8 md:h-10 w-auto"
          />
          <Image
            src="/assets/images/icons/dipspayHDRicon1000.webp"
            alt="DisplayHDR True Black 1000"
            width={120}
            height={40}
            className="object-contain h-8 md:h-10 w-auto"
          />
        </div>

        {/* Ghi chú */}
        <div className="max-w-4xl mx-auto w-full mt-16 space-y-2 text-center">
          <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-600 transition-colors duration-500">
            *Số liệu về độ sáng tối đa thể hiện các thông số của chính tấm nền.
            Độ sáng thực tế có thể khác biệt do các yếu tố, bao gồm nhưng không
            giới hạn ở, lớp kính hoặc tích hợp màn hình cảm ứng và hiệu chuẩn
            màu sắc.
          </p>
          <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-600 transition-colors duration-500">
            **Kết quả thử nghiệm trung bình trong MyASUS/ Ứng dụng Armoury
            Splendid Display P3 và dải màu sRGB: Delta E {'<'} 1, +/- 0,5, và có
            thể khác biệt tùy theo thông số kỹ thuật. Xin lưu ý rằng hiệu năng
            thực tế cũng có thể khác biệt tùy theo các mô hình, trang thiết bị
            và quy trình thử nghiệm khác nhau.
          </p>
        </div>
      </section>
    </>
  );
}
