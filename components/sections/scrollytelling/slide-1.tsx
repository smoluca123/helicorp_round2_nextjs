'use client';

import Image from 'next/image';

export function Slide1Content() {
  return (
    <>
      <Image
        src="/assets/images/performance_3_nb.webp"
        alt="Zephyrus G14 Performance"
        fill
        className="object-cover object-[70%_center] md:object-right z-0"
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
