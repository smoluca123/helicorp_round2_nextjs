import Image from 'next/image';

/**
 * Hero background component.
 * Uses Tailwind CSS dark mode classes for instant theme-based display
 * without any JavaScript — keeping this as a Server Component for best LCP.
 * CSS is parsed before JS, so images are visible immediately on paint.
 */
export function HeroBackground() {
  return (
    <>
      {/* Background images — controlled by Tailwind dark mode (no JS needed) */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-zinc-100 dark:bg-black">
        {/* Light mode image */}
        <div className="absolute inset-0 block dark:hidden">
          <Image
            src="/assets/images/01__kv_reverse.webp"
            alt="ROG Zephyrus G14 Light"
            fill
            className="object-cover object-top"
            sizes="100vw"
            quality={60}
          />
        </div>

        {/* Dark mode image */}
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/assets/images/01__kv.webp"
            alt="ROG Zephyrus G14 Dark"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/95 dark:to-transparent" />
    </>
  );
}
