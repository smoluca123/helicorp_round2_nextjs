import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { Toaster } from '@/components/ui/sonner';
import { ChatWidgetLoader } from '@/components/ui/chat-widget-loader';

// Single font family to avoid extra network requests
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | ASUS ROG Zephyrus G14',
    default: 'ASUS ROG Zephyrus G14 - Đỉnh Hiệu Năng. Bậc Phong Cách',
  },
  description:
    'ASUS ROG Zephyrus G14 (GU405) - Cỗ máy gaming siêu mỏng nhẹ, pin dùng cả ngày với màn hình OLED và hiệu năng đỉnh cao.',
  keywords: ['ASUS', 'ROG', 'Zephyrus', 'G14', 'Laptop Gaming', 'OLED'],
  openGraph: {
    title: 'ASUS ROG Zephyrus G14 - Đỉnh Hiệu Năng. Bậc Phong Cách',
    description:
      'ASUS ROG Zephyrus G14 (GU405) - Cỗ máy gaming siêu mỏng nhẹ, pin dùng cả ngày với màn hình OLED và hiệu năng đỉnh cao.',
    url: 'https://zephyrus-g14.lingdethuong.com',
    siteName: 'ASUS ROG',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASUS ROG Zephyrus G14',
    description: 'Cỗ máy gaming siêu mỏng nhẹ, hiệu năng đỉnh cao.',
  },
  alternates: {
    canonical: 'https://zephyrus-g14.lingdethuong.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', inter.variable, 'font-sans')}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'ASUS ROG Zephyrus G14 (GU405)',
              description:
                'ASUS ROG Zephyrus G14 - Cỗ máy gaming siêu mỏng nhẹ, pin dùng cả ngày với màn hình OLED và hiệu năng đỉnh cao.',
              brand: {
                '@type': 'Brand',
                name: 'ASUS ROG',
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <Toaster />
          <ChatWidgetLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
