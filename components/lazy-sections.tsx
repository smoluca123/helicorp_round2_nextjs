'use client';

import dynamic from 'next/dynamic';

const SectionSkeleton = () => (
  <div className="w-full min-h-[50vh] bg-zinc-50 dark:bg-zinc-950/50 animate-pulse" />
);

export const PerformanceCarousel = dynamic(
  () =>
    import('@/components/sections/performance/performance-carousel').then(
      (m) => m.PerformanceCarousel,
    ),
  { loading: SectionSkeleton }
);

export const ScrollytellingSection = dynamic(
  () =>
    import('@/components/sections/scrollytelling-section').then(
      (m) => m.ScrollytellingSection,
    ),
  { loading: SectionSkeleton }
);

export const OledDisplaySection = dynamic(
  () =>
    import('@/components/sections/oled-display-section').then(
      (m) => m.OledDisplaySection,
    ),
  { loading: SectionSkeleton }
);

export const OledFeaturesSection = dynamic(
  () =>
    import('@/components/sections/oled-features-section').then(
      (m) => m.OledFeaturesSection,
    ),
  { loading: SectionSkeleton }
);

export const DesignSection = dynamic(
  () =>
    import('@/components/sections/design-section').then(
      (m) => m.DesignSection,
    ),
  { loading: SectionSkeleton }
);

export const CoolingSection = dynamic(
  () =>
    import('@/components/sections/cooling-section').then(
      (m) => m.CoolingSection,
    ),
  { loading: SectionSkeleton }
);

export const ControlSection = dynamic(
  () =>
    import('@/components/sections/control-section').then(
      (m) => m.ControlSection,
    ),
  { loading: SectionSkeleton }
);

export const PortabilitySection = dynamic(
  () =>
    import('@/components/sections/portability-section').then(
      (m) => m.PortabilitySection,
    ),
  { loading: SectionSkeleton }
);

export const FaqSection = dynamic(
  () => import('@/components/sections/faq-section').then((m) => m.FaqSection),
  { loading: SectionSkeleton }
);

export const NewsletterSection = dynamic(
  () =>
    import('@/components/sections/newsletter-section').then(
      (m) => m.NewsletterSection,
    ),
  { loading: SectionSkeleton }
);
