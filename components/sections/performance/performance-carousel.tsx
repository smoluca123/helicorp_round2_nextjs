'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { PauseIcon, PlayIcon } from 'lucide-react';

const CAROUSEL_DATA = [
  {
    id: 1,
    title: 'DUNG LƯỢNG LƯU TRỮ',
    description:
      'Game, ứng dụng và tệp tin lớn tải ở tốc độ ánh sáng trên ổ SSD PCIe® 4.0 siêu nhanh. Với dung lượng 1TB và tối đa 2TB thoải mái để chứa các ứng dụng sáng tạo và nhiều tựa game cũng như đủ cho cả danh mục công việc của bạn.',
    note: '',
    rightLabel: 'Ổ cứng SSD',
    rightValue: '1TB M.2 PCIe® 4.0',
    rightSub: 'Tối đa 2TB',
    imageClear: '/assets/images/performance_slide_storage_clear.webp',
    imageBlur: '/assets/images/performance_slide_storage_blur.webp',
    activeTransform: '-translate-x-6 -translate-y-2',
    inactiveTransform: 'translate-x-6 translate-y-4',
  },
  {
    id: 2,
    title: 'BỘ NHỚ',
    description:
      'Khả năng nâng cấp lên RAM dung lượng 64GB thường chỉ dành cho các máy trạm cao cấp, bộ nhớ 8533 MT/s siêu nhanh cho phép Zephyrus G14 thao tác đa nhiệm thật dễ dàng.',
    note: '*Tốc độ bộ nhớ thực tế có thể khác tùy theo cấu hình CPU.',
    rightLabel: 'RAM',
    rightValue: '32GB LPDDR5X',
    rightSub: '8533 MT/s',
    imageClear: '/assets/images/performance_slide_memory_clear.webp',
    imageBlur: '/assets/images/performance_slide_memory_blur.webp',
    activeTransform: 'translate-x-1 translate-y-0',
    inactiveTransform: 'translate-x-6 -translate-y-3',
  },
];

export function PerformanceCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const count = CAROUSEL_DATA.length;
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const autoplay = api.plugins().autoplay;
    if (autoplay) {
      api.on('autoplay:play', () => setIsPlaying(true));
      api.on('autoplay:stop', () => setIsPlaying(false));
    }
  }, [api]);

  const toggleAutoplay = () => {
    if (!api) return;
    const autoplay = api.plugins().autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-24">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {CAROUSEL_DATA.map((item, index) => {
            const isActive = current === index + 1;
            return (
              <CarouselItem key={item.id}>
                <div className="h-full relative w-full aspect-auto pt-70 pb-16 px-6 md:aspect-21/10 rounded-sm overflow-hidden border border-cyan-400/30 border-b-purple-500/50 border-t-purple-500/50 bg-[#0a0a0f] flex flex-col justify-end md:p-12 transition-all duration-500">
                  {/* Center Image Container */}
                  <div className="absolute top-0 inset-x-0 h-70 md:h-auto md:inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-[90%] h-[90%] md:w-[60%] md:h-[70%] mt-4 md:-mt-20">
                      {/* Soft CSS Blue Radial Glow Background */}
                      <div
                        className={cn(
                          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[150%] md:h-[150%] bg-blue-500/15 blur-[60px] md:blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      />

                      {/* Clear Image */}
                      <Image
                        src={item.imageClear}
                        alt={item.title}
                        fill
                        className={cn(
                          'object-contain transition-transform duration-1000 ease-out',
                          isActive
                            ? item.activeTransform
                            : item.inactiveTransform,
                        )}
                      />

                      {/* Blur Effect Overlay */}
                      <Image
                        src={item.imageBlur}
                        alt={`${item.title} blur effect`}
                        fill
                        className={cn(
                          'object-contain transition-opacity duration-1000 relative z-10',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 md:px-4">
                    {/* Left Content */}
                    <div className="max-w-2xl text-left">
                      <h3 className="text-3xl md:text-[2.5rem] font-bold text-white mb-4 tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm md:text-base leading-relaxed font-medium font-sans">
                        {item.description}
                      </p>
                      {item.note && (
                        <p className="text-zinc-400 text-xs mt-4 font-sans">
                          {item.note}
                        </p>
                      )}
                    </div>

                    {/* Right Content */}
                    <div className="text-left shrink-0 md:min-w-50 mb-8 md:mb-0">
                      <p className="text-[#a855f7] text-sm md:text-base font-medium mb-1">
                        {item.rightLabel}
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {item.rightValue}
                      </p>
                      <p className="text-[#a855f7] text-sm md:text-base font-medium">
                        {item.rightSub}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Custom Pagination Dots overlaying the slide */}
        <div className="absolute bottom-4 right-6 md:bottom-10 md:right-12 z-30 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.max(CAROUSEL_DATA.length, count) }).map(
              (_, index) => {
                const isActive = current === index + 1;
                return isActive ? (
                  <div
                    key={index}
                    className="w-12 h-1 bg-zinc-700/50 rounded-full overflow-hidden relative"
                  >
                    <div
                      key={current} // Key forces re-render/re-animation when slide changes
                      className="absolute top-0 left-0 h-full bg-white"
                      style={{
                        animation: 'progress 5000ms linear forwards',
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    />
                  </div>
                ) : (
                  <button
                    key={index}
                    className="w-2 h-2 rotate-45 bg-zinc-600 transition-colors hover:bg-zinc-400"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              },
            )}
          </div>

          <button
            onClick={toggleAutoplay}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5 fill-current" />
            ) : (
              <PlayIcon className="w-5 h-5 fill-current" />
            )}
          </button>
        </div>
      </Carousel>
    </div>
  );
}
