'use client';

import Image from 'next/image';

export function Slide4Content() {
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
            sizes="(max-width: 1024px) 100vw, 50vw"
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

          {/* eslint-disable-next-line @next/next/no-img-element */}
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
