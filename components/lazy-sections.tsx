'use client';

import dynamic from 'next/dynamic';

export const PerformanceCarousel = dynamic(
  () =>
    import('@/components/sections/performance/performance-carousel').then(
      (m) => m.PerformanceCarousel,
    ),
  { ssr: false },
);

export const ScrollytellingSection = dynamic(
  () =>
    import('@/components/sections/scrollytelling-section').then(
      (m) => m.ScrollytellingSection,
    ),
  { ssr: false },
);

export const OledDisplaySection = dynamic(
  () =>
    import('@/components/sections/oled-display-section').then(
      (m) => m.OledDisplaySection,
    ),
  { ssr: false },
);

export const OledFeaturesSection = dynamic(
  () =>
    import('@/components/sections/oled-features-section').then(
      (m) => m.OledFeaturesSection,
    ),
  { ssr: false },
);

export const DesignSection = dynamic(
  () =>
    import('@/components/sections/design-section').then(
      (m) => m.DesignSection,
    ),
  { ssr: false },
);

export const CoolingSection = dynamic(
  () =>
    import('@/components/sections/cooling-section').then(
      (m) => m.CoolingSection,
    ),
  { ssr: false },
);

export const ControlSection = dynamic(
  () =>
    import('@/components/sections/control-section').then(
      (m) => m.ControlSection,
    ),
  { ssr: false },
);

export const PortabilitySection = dynamic(
  () =>
    import('@/components/sections/portability-section').then(
      (m) => m.PortabilitySection,
    ),
  { ssr: false },
);

export const FaqSection = dynamic(
  () => import('@/components/sections/faq-section').then((m) => m.FaqSection),
  { ssr: false },
);

export const NewsletterSection = dynamic(
  () =>
    import('@/components/sections/newsletter-section').then(
      (m) => m.NewsletterSection,
    ),
  { ssr: false },
);
