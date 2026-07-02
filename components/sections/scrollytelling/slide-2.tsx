'use client';

import Image from 'next/image';

export function Slide2Content() {
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/icons/nvidia-geforce.svg"
            alt="GeForce RTX"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
        <div className="absolute bottom-6 right-6 z-20 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
