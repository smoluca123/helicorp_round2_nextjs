import Image from 'next/image';

export function HeroBackground() {
  return (
    <>
      {/* Background Images controlled by Tailwind Dark Mode for instant LCP */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-zinc-100 dark:bg-black">
        
        {/* Light Mode Image */}
        <div className="absolute inset-0 block dark:hidden">
          <Image
            src="/assets/images/01__kv_reverse.webp"
            alt="ROG Zephyrus G14 Light"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Dark Mode Image */}
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/assets/images/01__kv.webp"
            alt="ROG Zephyrus G14 Dark"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/95 dark:to-transparent" />
    </>
  );
}
