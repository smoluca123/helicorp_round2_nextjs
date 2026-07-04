import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,

  images: {
    // Serve AVIF format first (30-50% smaller than WebP), fallback to WebP
    formats: ['image/avif', 'image/webp'],
    // Standard device widths for responsive srcsets
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // Intermediate image sizes for fill/layout images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Increase cache TTL for optimized images (7 days)
    minimumCacheTTL: 604800,
    qualities: [60, 75],
  },
};

export default nextConfig;
