import Image from 'next/image';

export function HeroBackground() {
  return (
    <>
      {/* Background Images controlled by Tailwind Dark Mode for instant LCP and single-image fetch */}
      <div 
        className="absolute inset-0 -z-20 overflow-hidden bg-cover bg-top bg-no-repeat bg-[url('/assets/images/01__kv_reverse.webp')] dark:bg-[url('/assets/images/01__kv.webp')]"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/95 dark:to-transparent" />
    </>
  );
}
