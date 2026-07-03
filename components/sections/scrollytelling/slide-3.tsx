'use client';

import Image from 'next/image';

export function Slide3Content() {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/assets/images/performance_11.webp"
        alt="NVIDIA AI Power"
        fill
        className="object-cover object-center z-0"
        sizes="100vw"
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

          {/* eslint-disable-next-line @next/next/no-img-element */}
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
