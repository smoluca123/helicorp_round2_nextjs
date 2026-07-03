'use client';

import Image from 'next/image';

export function Slide5Content() {
  return (
    <>
      <Image
        src="/assets/images/performance_1.webp"
        alt="Intel Core Ultra 9"
        fill
        className="object-cover object-[30%_center] md:object-left z-0"
        sizes="100vw"
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
