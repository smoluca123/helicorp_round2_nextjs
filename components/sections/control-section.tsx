import Image from 'next/image';

export function ControlSection() {
  return (
    <section
      id="control"
      className="relative w-full bg-white dark:bg-black flex flex-col items-center transition-colors duration-500"
    >
      {/* Top Visual Area (chiều cao phụ thuộc ảnh bg) */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="w-full leading-none flex">
          <Image
            src="/assets/images/control_bg.webp"
            alt="Control Background"
            width={2560}
            height={1440}
            className="w-full h-auto object-cover block"
            priority
          />
        </div>

        {/* Laptop Keyboard Image (được căn tuyệt đối dựa trên bg) */}
        <div className="absolute inset-0 w-full flex justify-center items-end px-4 md:px-8">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/assets/images/control_nb.webp"
              alt="ROG Zephyrus G14 Keyboard Control"
              width={1200}
              height={800}
              className="w-full h-auto object-contain object-bottom drop-shadow-[0_-20px_50px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_-20px_50px_rgba(255,255,255,0.05)] translate-y-[5%] md:translate-y-[10%]" 
            />
          </div>
        </div>
      </div>

      {/* Text Content Area */}
      <div className="relative w-full z-20 bg-white dark:bg-black pt-24 pb-32 px-4 md:px-8 flex flex-col items-center text-center transition-colors duration-500">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h3 className="text-zinc-500 dark:text-zinc-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-6 transition-colors duration-500">
            \ ĐIỀU KHIỂN
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-zinc-900 dark:text-white tracking-tight transition-colors duration-500">
            Điều Khiển Dễ Dàng
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-4xl mx-auto mb-20 text-justify md:text-center transition-colors duration-500">
            Chuột cảm ứng và bàn phím là các công cụ cực kỳ quan trọng trong
            việc điều khiển laptop, vì vậy chúng tôi đã nỗ lực cải tiến thiết kế
            của Zephyrus G14. Dù chỉ là một thiết kế 14 inch nhỏ gọn, G14 vẫn sở
            hữu chuột cảm ứng cực lớn giúp thao tác cuộn dễ dàng. Tận hưởng trải
            nghiệm gõ mượt mà hơn với keycap lớn và bề mặt bàn phím chắc chắn
            hơn nhờ khung máy gia công CNC. Hành trình phím 1,7 mm mang lại cảm
            giác gõ cao cấp, trong khi keycap phủ lớp chống bám vân tay và hạn
            chế bóng, giúp tăng khả năng chống trầy xước và hao mòn. N-key
            rollover đảm bảo máy luôn nhận đủ lệnh ngay cả khi bạn nhấn nhiều
            phím cùng lúc, và độ bền 20 triệu lần nhấn phím cho phép Zephyrus
            G14 đồng hành cùng bạn trong nhiều năm chơi game.
          </p>

          {/* Specs Grid */}
          <div className="w-full flex flex-wrap justify-center items-center gap-y-12 gap-x-8 md:gap-x-12 mb-16">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Hành trình phím
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                1,7 mm
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Yên tĩnh
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                &lt; 30 dB
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Độ bền
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                20 triệu lần nhấn
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Hỗ trợ
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                NKRO
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Bản lề
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                EasyLift 2.0
              </span>
            </div>
          </div>

          {/* Bottom Special Feature */}
          <div className="w-full flex justify-center items-center gap-6">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium transition-colors duration-500">
                Bàn phím
              </span>
              <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-500">
                Hạn chế bóng
              </span>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 relative opacity-100 dark:opacity-100 transition-opacity duration-500">
              <Image
                src="/assets/images/icons/aura.webp"
                alt="Aura Sync"
                fill
                className="object-contain filter brightness-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
