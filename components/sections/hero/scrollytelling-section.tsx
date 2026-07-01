/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const slidesCount = 5;

function Slide1Content() {
  return (
    <>
      <Image
        src="/assets/images/performance_3_nb.webp"
        alt="Zephyrus G14 Performance"
        fill
        className="object-cover object-[70%_center] md:object-right z-0"
        priority
      />
      <div className="w-full max-w-7xl mx-auto h-full flex items-center relative z-10">
        <div className="flex flex-col justify-center text-white max-w-[85vw] sm:max-w-xl h-full pt-10 md:pt-0 px-6 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight mb-4 md:mb-6 mt-8 md:mt-12">
            Kẻ Thay Đổi Luật Chơi
          </h2>
          <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-8 md:mb-12 max-w-[90%] md:max-w-125">
            Zephyrus G14 được thiết kế từ đầu dành cho game thủ, nhà sáng tạo và
            cả nhà phát triển. Được trang bị GPU Laptop lên đến NVIDIA® GeForce
            RTX™ 5080, G14 có thể chạy mọi phần mềm cũng như tựa game mới nhất.
            Ngoài ra, với các tính năng thay đổi cuộc chơi như DLSS 4.5 với
            Multi Frame Generation, Super Resolution nâng cao và các cải tiến về
            công nghệ dò tia mới nhất, cỗ máy này sẽ đem lại hình ảnh chân thực
            chưa từng có trong các tựa game hiện đại.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-12 md:gap-y-12">
            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                Lên đến NVIDIA® GeForce
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                RTX™ 5080
              </span>
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mt-1 md:mt-2">
                Laptop GPU
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                Hiệu năng AI
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                1334 TOPS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                NVIDIA®
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                DLSS 4.5
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                Ray Tracing
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                Thế hệ 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Slide2Content() {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/assets/images/performance_NV_bg.webp"
        alt="NVIDIA Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="flex flex-col items-center justify-center w-full h-full relative z-10 px-6 md:px-0">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto pt-10 md:pt-0 relative">
          <h2 className="text-xl md:text-2xl font-bold text-[#8c74f5] mb-2 md:mb-4 tracking-wider uppercase">
            Kẻ Thay Đổi Luật Chơi
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
            Laptop Trang Bị GeForce RTX 50 Series
          </h3>
          <p className="text-zinc-300 text-sm md:text-base font-medium mt-3">
            Được trang bị NVIDIA Blackwell và AI
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl relative">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square md:aspect-4/5 lg:aspect-square bg-black border border-zinc-700/60 mb-6 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/assets/images/performance_NV_01.webp"
                alt="Gaming Performance"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-[15px] md:text-lg font-bold text-white mb-3 uppercase text-center leading-tight">
              Chất Lượng Hình Ảnh Và Hiệu
              <br />
              Năng Gaming Đỉnh Cao
            </h4>
            <p className="text-zinc-200 text-xs md:text-sm leading-[1.6] md:leading-[1.8] text-center max-w-[90%] md:max-w-full">
              Hơn 800 tựa game và ứng dụng sử dụng RTX để đem lại hình ảnh chân
              thực, hiệu năng nhanh không tưởng và các tính năng AI mới tối tân
              như DLSS 4.5.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square md:aspect-4/5 lg:aspect-square bg-black border border-zinc-700/60 mb-6 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/assets/images/performance_NV_02.webp"
                alt="Creator Performance"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-[15px] md:text-lg font-bold text-white mb-3 uppercase text-center leading-tight">
              Lợi Thế Sáng Tạo Từ AI
            </h4>
            <p className="text-zinc-200 text-xs md:text-sm leading-[1.6] md:leading-[1.8] text-center max-w-[90%] md:max-w-full">
              Trải nghiệm khả năng tăng tốc trong các ứng dụng sáng tạo hàng
              đầu, NVIDIA Studio Driver cho độ ổn định tối đa và các công cụ RTX
              độc quyền dành cho các quy trình sáng tạo hỗ trợ AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square md:aspect-4/5 lg:aspect-square bg-black border border-zinc-700/60 mb-6 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/assets/images/performance_NV_03.webp"
                alt="AI Performance"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-[15px] md:text-lg font-bold text-white mb-3 uppercase text-center leading-tight">
              Hiệu Năng Và Sức Mạnh Tối Ưu AI
            </h4>
            <p className="text-zinc-200 text-xs md:text-sm leading-[1.6] md:leading-[1.8] text-center max-w-[90%] md:max-w-full">
              NVIDIA Blackwell Max-Q được thiết kế lại hoàn toàn để cho hiệu quả
              tối đa, thể hiện một bước nhảy vọt về hiệu năng và thời lượng pin.
            </p>
          </div>
        </div>

        {/* Góc dưới cùng bên phải: Logo GeForce RTX */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-0 lg:-right-8 z-20 hidden md:block">
          <img
            src="/assets/images/icons/nvidia-geforce.svg"
            alt="GeForce RTX"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
        <div className="absolute bottom-6 right-6 z-20 md:hidden">
          <img
            src="/assets/images/icons/nvidia-geforce.svg"
            alt="GeForce RTX"
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

function Slide3Content() {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/assets/images/performance_11.webp"
        alt="NVIDIA AI Power"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="w-full max-w-7xl mx-auto h-full flex items-center relative z-10">
        {/* Nội dung bên trái */}
        <div className="flex flex-col justify-center text-white max-w-[85vw] sm:max-w-lg lg:max-w-160 h-full pt-10 md:pt-0 px-6 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            NVIDIA Sức Mạnh AI Cho Cả Thế Giới. Và Cho Chính Bạn.
          </h2>
          <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-8 md:mb-12">
            Nâng cấp lên AI tiên tiến với GPU NVIDIA GeForce RTX™, và tăng tốc
            trải nghiệm chơi game, sáng tạo nội dung, làm việc hiệu suất và phát
            triển phần mềm. Nhờ các bộ vi xử lý AI chuyên dụng tích hợp sẵn, bạn
            sẽ được trải nghiệm công nghệ AI hàng đầu thế giới ngay trên chiếc
            PC Windows của mình.
          </p>

          <img
            src="/assets/images/icons/nvidia-geforce.svg"
            alt="GeForce RTX"
            className="h-8 md:h-12 w-auto object-contain self-start"
          />
        </div>
      </div>
    </>
  );
}

function Slide4Content() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto items-center">
        {/* Cột trái: Hình ảnh */}
        <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-16/10">
          <Image
            src="/assets/images/performance_10.webp"
            alt="Biên Tập Video Nhanh Và Mượt Hơn"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Cột phải: Nội dung */}
        <div className="flex flex-col justify-center text-white px-6 md:px-0 w-full min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight mb-4 md:mb-6 leading-tight wrap-break-word">
            Biên Tập Video Nhanh Và Mượt Hơn
          </h2>
          <p className="text-zinc-200 text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-8 md:mb-10">
            Card đồ họa GeForce RTX 50 Series đem lại bước tiến lớn về khả năng
            biên tập video: hỗ trợ định dạng màu 4:2:2, mà không cần máy chủ
            trung gian. Bộ giải mã NVIDIA cho phép bạn biên tập trực tiếp, các
            nhân Tensor tăng tốc hiệu ứng chạy AI và tối đa ba bộ mã hóa chuyên
            dụng giúp xuất video với tốc độ cực nhanh. Các công cụ AI tạo sinh
            được tăng tốc bởi RTX giúp tối ưu quy trình làm việc với những tác
            vụ như kéo dài clip, nâng cấp độ phân giải video và tạo nội dung
            mới. Với GeForce RTX 50 Series, hoạt động biên tập video trở nên
            nhanh chóng, mượt mà và mạnh mẽ hơn bao giờ hết.
          </p>

          <img
            src="/assets/images/badge_for_screen_02.svg"
            alt="NVIDIA Studio"
            className="h-12 md:h-16 w-auto object-contain self-start"
          />
        </div>
      </div>
    </div>
  );
}

function Slide5Content() {
  return (
    <>
      <Image
        src="/assets/images/performance_1.webp"
        alt="Intel Core Ultra 9"
        fill
        className="object-cover object-[30%_center] md:object-left z-0"
        priority
      />
      <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-end relative z-10">
        <div className="flex flex-col justify-center text-white max-w-[85vw] sm:max-w-xl h-full pt-10 md:pt-0 px-6 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight mb-4 md:mb-6 mt-8 md:mt-12 capitalize">
            Các Cấp Độ Hiệu Năng Mới
          </h2>
          <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-8 md:mb-12 max-w-[90%] md:max-w-125">
            Với 16 nhân và 16 luồng, bộ vi xử lý Intel® Core™ 9 386H mang đến
            sức mạnh thế hệ mới của Panther Lake. Con chip tối tân này là sự kết
            hợp hoàn hảo giữa hiệu năng và khả năng tiết kiệm điện năng, khiến
            nó trở thành sự lựa chọn lý tưởng cho mẫu laptop siêu di động như
            Zephyrus G14, với các tính năng AI nâng cao tích hợp giúp hoạt động
            công việc và cuộc sống của bạn diễn ra suôn sẻ.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-12 md:gap-y-12 items-start mt-4">
            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                Vi xử lý Intel® Core™
              </span>
              <span className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold tracking-tight leading-none mt-1">
                Ultra 9 386H
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                Intel®
              </span>
              <span className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold tracking-tight leading-none mt-1">
                AI Boost
              </span>
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mt-1 md:mt-2">
                NPU
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold tracking-tight leading-none mt-1">
                16
              </span>
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mt-1 md:mt-2">
                nhân
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold tracking-tight leading-none mt-1">
                16
              </span>
              <span className="text-[#8c74f5] text-[10px] md:text-sm font-semibold mt-1 md:mt-2">
                luồng
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
