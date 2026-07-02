import Image from 'next/image';
import { DesignCarousel } from './design/design-carousel';

export function DesignSection() {
  return (
    <section id="design" className="w-full bg-black flex flex-col">
      {/* Top Part: Background Image and Text Overlay */}
      <div className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/designStory_bg.webp"
            alt="Design Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 flex justify-end">
          {/* Text Container aligned to the right */}
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start text-white">
            <h3 className="text-zinc-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
              \ CÂU CHUYỆN THIẾT KẾ
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Thiết Kế Mảnh Mai
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-10 text-justify md:text-left">
              Zephyrus G14 mới thu hút mọi ánh nhìn ngay từ lần tiếp xúc đầu tiên. Máy được gia công CNC chính xác từ hợp kim nhôm. Vật liệu có độ bền cao này có thể đúc thành các hình dạng phức tạp mà trông vẫn tuyệt đẹp sau khi được anode hóa thành màu Eclipse Gray hoặc tổ hợp màu Platinum White ấn tượng. Bản lề Easylift độc quyền của ROG cho phép mở máy dễ dàng và đóng nắp chỉ với một tay. Khung máy thanh mảnh và lớp hoàn thiện nhám mờ của Zephyrus G14 khiến ai cũng muốn chạm vào.
            </p>

            {/* Color Options */}
            <div className="flex flex-wrap items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#35393c] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border border-zinc-500"></div>
                <span className="font-bold text-lg">Eclipse Grey</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#f2f4f5] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] border border-zinc-300"></div>
                <span className="font-bold text-lg">Platinum White</span>
              </div>
            </div>

            {/* Specs Layout */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col space-y-1">
                <span className="text-2xl md:text-3xl font-bold">
                  Gia công CNC
                </span>
                <span className="text-purple-400 text-xs md:text-sm font-semibold uppercase tracking-wider">
                  Chế tác với độ chính xác cao
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-2xl md:text-3xl font-bold">
                  100%
                </span>
                <span className="text-purple-400 text-xs md:text-sm font-semibold uppercase tracking-wider">
                  Hợp kim nhôm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part: Slash Lighting Intro */}
      <div className="w-full bg-black text-white pt-24 pb-12 flex flex-col items-center justify-center px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center tracking-tight">
          Tỏa Sáng Rực Rỡ
        </h2>
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl text-center md:text-justify mx-auto">
          Zephyrus G14 đã sẵn sàng làm sáng bừng cả thế giới với mảng đèn Slash Lighting. Mang thiết kế một dải đèn LED nổi bật chạy chéo theo nắp máy với lớp hoàn thiện tráng gương, được nâng cấp từ 7 lên 35 vùng riêng biệt trên bản 2026, Slash Lighting là sự tái hiện trực quan, thể hiện tính thanh lịch và bản sắc cá nhân, khiến Zephyrus trở nên độc nhất. Hệ thống đèn này được tích hợp sẵn 15 hình hoạt họa, gồm chế độ Trạng thái pin và chế độ Sạc, cho phép bạn quan sát được mức pin của máy dù đứng ở xa. Tất cả các hình hoạt họa đều có thể tùy chỉnh hoàn toàn trong Armoury Crate, để bạn có thể biến G14 thành của riêng mình.
        </p>
      </div>

      {/* Carousel */}
      <DesignCarousel />
    </section>
  );
}
