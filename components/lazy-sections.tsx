'use client';

import dynamic from 'next/dynamic';

export const PerformanceCarousel = dynamic(
  () =>
    import('@/components/sections/performance/performance-carousel').then(
      (m) => m.PerformanceCarousel,
    )
);

export const ScrollytellingSection = dynamic(
  () =>
    import('@/components/sections/scrollytelling-section').then(
      (m) => m.ScrollytellingSection,
    )
);

export const OledDisplaySection = dynamic(
  () =>
    import('@/components/sections/oled-display-section').then(
      (m) => m.OledDisplaySection,
    )
);

export const OledFeaturesSection = dynamic(
  () =>
    import('@/components/sections/oled-features-section').then(
      (m) => m.OledFeaturesSection,
    )
);

export const DesignSection = dynamic(
  () =>
    import('@/components/sections/design-section').then(
      (m) => m.DesignSection,
    )
);

export const CoolingSection = dynamic(
  () =>
    import('@/components/sections/cooling-section').then(
      (m) => m.CoolingSection,
    )
);

export const ControlSection = dynamic(
  () =>
    import('@/components/sections/control-section').then(
      (m) => m.ControlSection,
    )
);

export const PortabilitySection = dynamic(
  () =>
    import('@/components/sections/portability-section').then(
      (m) => m.PortabilitySection,
    )
);

export const FaqSection = dynamic(
  () => import('@/components/sections/faq-section').then((m) => m.FaqSection)
);

export const NewsletterSection = dynamic(
  () =>
    import('@/components/sections/newsletter-section').then(
      (m) => m.NewsletterSection,
    )
);
