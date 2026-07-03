'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const carouselItems = [
  {
    id: '35-vung-sang',
    title: '35 VÙNG SÁNG',
    type: 'video',
    src: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/lighting_section-35.mp4',
    text: '35 vùng chiếu sáng riêng biệt trên hệ thống đèn Slash Lighting giúp tăng tính chân thực, cho phép tùy chỉnh hoạt họa nhiều hơn nữa, và để thỏa mãn cá tính riêng.',
  },
  {
    id: 'pin',
    title: '% PIN',
    type: 'video',
    src: 'https://dlcdnwebimgs.asus.com/files/media/202511/85cd7ea8-68ac-425c-b737-ffee2c8192dd/v2/videos/battery_animation.mp4',
    text: 'Hình hoạt họa báo hiệu mức pin tinh tế giúp thể hiện trạng thái sạc pin suốt cả ngày.',
  },
  {
    id: 'sonic-match',
    title: 'SONIC MATCH',
    type: 'image',
    src: '/assets/images/design_story_ui3.webp',
    text: 'Sonic Match đáp ứng sở thích cá nhân của bạn bằng cách phối nhịp điệu của những bài hát bạn yêu thích để tạo thành một màn trình diễn ánh sáng độc nhất.',
  },
  {
    id: 'slash-mixer',
    title: 'SLASH MIXER',
    type: 'image',
    src: '/assets/images/design_story_ui4.webp',
    text: 'Nếu bạn muốn tùy chỉnh sâu hơn nữa, Slash Mixer là lựa chọn không thể bỏ qua. Được tích hợp sẵn trong Armoury Crate, Slash Mixer là một công cụ mới cho phép tạo hiệu ứng âm thanh thông báo ứng dụng tùy chỉnh riêng và kết hợp với hiệu ứng ánh sáng, để bạn biến chiếc Zephyrus G14 thành một thiết bị độc nhất của riêng mình.',
  },
  {
    id: '15-che-do',
    title: '15 CHẾ ĐỘ',
    type: 'image',
    src: '/assets/images/design_story_ui5.webp',
    text: 'Chúng tôi cũng trang bị sẵn 15 tùy chọn hình hoạt họa để khai thác tối đa 35 vùng sáng, khiến cuộc sống của bạn thêm thú vị.',
  },
  {
    id: 'tro-ly-ao',
    title: 'TRỢ LÝ ẢO',
    type: 'image',
    src: '/assets/images/design_story_ui6.webp',
    text: 'Slash Lighting phản ứng với từng hành động của Trợ lý ảo ROG, từ tóm tắt văn bản tới phiên âm giọng nói, khiến thiết bị của bạn thêm sống động nhờ ánh sáng.',
  },
];

export function DesignCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    // Đăng ký sự kiện
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    // Cleanup sự kiện khi unmount
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  // Handle video autoplay for the active slide and tab scroll
  useEffect(() => {
    carouselItems.forEach((item, index) => {
      const video = videoRefs.current[index];
      if (video) {
        if (index === activeIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });

    // Auto-scroll the tabs container on mobile so the active tab is visible
    const container = tabsContainerRef.current;
    const activeTab = tabRefs.current[activeIndex];
    
    if (container && activeTab) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      
      // Calculate how much to scroll to center the active tab
      const scrollPos = 
        container.scrollLeft + 
        (tabRect.left - containerRect.left) - 
        (containerRect.width / 2) + 
        (tabRect.width / 2);
        
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div className="w-full flex flex-col items-center mt-12 pb-24 overflow-hidden">
      {/* Shadcn Carousel (Embla) */}
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: false,
        }}
        className="w-full mb-8"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {carouselItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <CarouselItem
                key={item.id}
                className="pl-4 md:pl-6 basis-[85%] md:basis-[60%] lg:basis-[50%] transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0.4,
                }}
              >
                <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-2.5/1 bg-black rounded-lg overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={item.src}
                      className="w-full h-full object-contain"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1536px) 100vw, 1536px"
                      />
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Tabs UI */}
      <div 
        ref={tabsContainerRef}
        className="w-full px-4 overflow-x-auto no-scrollbar max-w-7xl mx-auto mb-12 scroll-smooth"
      >
        <div className="flex w-max min-w-full justify-between border-b border-zinc-800">
          {carouselItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => handleTabClick(index)}
                className={cn(
                  'relative flex-1 min-w-30 pb-4 px-4 text-center transition-colors duration-300 group outline-none',
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300',
                )}
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                  {item.title}
                </span>
                {/* Active Indicator Line */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300',
                    isActive
                      ? 'bg-white'
                      : 'bg-transparent group-hover:bg-zinc-700',
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Text Content (changes based on active item) */}
      <div className="w-full text-center min-h-20 px-4 max-w-7xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          >
            {carouselItems[activeIndex]?.text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
