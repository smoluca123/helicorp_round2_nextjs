'use client';

const faqs = [
  {
    question:
      'Đâu là sự khác biệt chính giữa Zephyrus G14 chạy Intel và AMD bản 2026?',
    answer:
      'Zephyrus G14 GU405 được trang bị bộ vi xử lý Intel® Core™ Ultra 9 386H mới kèm khung máy được cải tiến với khả năng tản nhiệt tốt hơn và hệ thống đèn Slash Lighting 35 vùng trên nắp máy tinh xảo hơn. Máy cũng đi kèm nhiều tùy chọn GPU hơn cùng đầu đọc thẻ SD kích thước đầy đủ (UHS-II, 312MB/s). Zephyrus G14 GA403 giữ nguyên khung máy phiên bản 2025 nhưng được nâng cấp đáng kể về phần cứng với bộ vi xử lý AMD Ryzen™ AI 9 465.',
  },
  {
    question: 'Tôi có thể nâng cấp RAM trên Zephyrus G14 GU405 không?',
    answer:
      'Không. Để đạt được độ mỏng chỉ 1.59cm cho khung máy và hỗ trợ bộ nhớ LPDDR5X-8533 tốc độ cao, RAM đã được hàn trực tiếp vào bo mạch chủ. Tuy vậy, có thể lựa chọn cấu hình lên tới 64GB. (Nếu bạn muốn RAM có thể nâng cấp, hãy khám phá các mẫu laptop gaming ROG Strix của chúng tôi.)',
  },
  {
    question: 'SSD có thể nâng cấp được không?',
    answer:
      'Có, Zephyrus G14 GU405 được trang bị một khe M.2 2280 PCIe 4.0 với ổ SSD có thể tự thay thế.',
  },
  {
    question: 'Hệ thống tản nhiệt hiệu quả ra sao, laptop có bị nóng không?',
    answer:
      'Zephyrus G14 sử dụng thiết kế Ba quạt (trên một số model) với hệ thống ống dẫn nhiệt bên trong, giúp giữ cho nhiệt độ luôn mát mẻ. Ngoài ra, CPU và GPU còn được tinh chỉnh theo mức công suất phù hợp với khả năng tản nhiệt của máy, giúp đảm bảo các cấu phần bên trong luôn nằm trong giới hạn hoạt động an toàn.',
  },
  {
    question:
      'Đâu là sự khác biệt giữa màn hình Nebula HDR 2026 và các thế hệ Zephyrus dùng màn hình OLED trước đó?',
    answer:
      'Màn hình Nebula HDR trên Zephyrus G14 2026 sáng hơn đáng kể so với các thế hệ tiền nhiệm, với độ sáng tối đa lên đến 1100 nits và đạt chứng nhận VESA DisplayHDR 1000 True Black. Màn hình này còn được phủ lớp chống lóa, cho phép dễ dàng quan sát trong các môi trường ánh sáng cực đoan.',
  },
  {
    question: 'Màn hình Zephyrus G14 GU405 OLED có hỗ trợ NVIDIA G-SYNC không?',
    answer:
      'Có. Màn hình Zephyrus G14 hoàn toàn tương thích với NVIDIA G-SYNC.',
  },
  {
    question: 'Thời lượng pin cụ thể như thế nào?',
    answer:
      'Có. Màn hình Zephyrus G14 hoàn toàn tương thích với NVIDIA G-SYNC.',
  },
  {
    question:
      'Hệ thống đèn Slash Lighting có được cập nhật cho phiên bản 2026 không?',
    answer:
      'Có. Hệ thống đèn Slash Lighting của Zephyrus G14 GU405 đã được nâng cấp từ 7 lên 35 vùng cùng chất liệu mang hiệu ứng tráng gương. Giờ đây, máy được trang bị các chế độ Sạc và Trạng thái pin, cho phép bạn nhanh chóng theo dõi trạng thái laptop.',
  },
  {
    question:
      'Hệ thống đèn Slash Lighting trên nắp máy có thể tùy chỉnh hoặc tắt đi được không?',
    answer:
      'Có. Có thể tùy chỉnh hệ thống đèn Slash Lighting với các họa tiết hoạt họa khác hoặc tắt hoàn toàn bằng phần mềm Armoury Crate của chúng tôi.',
  },
  {
    question: 'Zephyrus G14 GU405 có khe cắm thẻ SD kích thước đầy đủ không?',
    answer:
      'Có. Trong khi các phiên bản trước đây chỉ được trang bị khe cắm thẻ microSD, Zephyrus G14 GU405 2026 giờ đây đã được trang bị đầu đọc thẻ SD kích thước đầy đủ (UHS-II, 312MB/s).',
  },
  {
    question:
      'Laptop có hỗ trợ sạc qua cổng USB-C không, và công suất như thế nào?',
    answer:
      'Có. Các cổng USB Type-C trên Zephyrus G14 hỗ trợ Power Delivery (PD) 3.0 với công suất lên đến 100W.',
  },
  {
    question:
      'Bàn phím có hỗ trợ đèn RGB trên từng phím hoặc đèn RGB 1 vùng không?',
    answer: 'Máy được trang bị bàn phím đèn nền RGB một vùng.',
  },
  {
    question: 'Laptop có hỗ trợ WiFi 7 không?',
    answer: 'Có. Máy được trang bị WiFi 7.',
  },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section
      id="faq"
      className="w-full bg-zinc-100 dark:bg-black py-24 md:py-32 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-zinc-900 dark:text-white mb-12 md:mb-16 uppercase transition-colors duration-500">
          Câu hỏi thường gặp
        </h2>

        <Accordion
          type="single"
          collapsible
          className="flex flex-col space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="w-full flex items-center justify-between px-6 py-4 md:py-5 bg-white dark:bg-white text-zinc-900 dark:text-black rounded-lg md:rounded-xl shadow-sm hover:shadow-md hover:no-underline transition-all duration-300 group">
                <span className="font-bold text-sm md:text-base text-left pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                <div className="px-6 py-5 mt-2 bg-white/50 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 rounded-lg md:rounded-xl text-sm md:text-base transition-colors duration-500 border border-zinc-200 dark:border-zinc-800">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
