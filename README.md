# ASUS ROG Zephyrus G14 (2024) - Interactive Landing Page

This project is a modern, high-performance, and interactive landing page built for the **ASUS ROG Zephyrus G14 (2024)**. It features advanced animations, 3D elements, scrollytelling, and an AI-powered chatbot, designed to provide a premium user experience and showcase the laptop's cutting-edge features.

## 🚀 Features & Highlights

### 1. Modern UI & Animations

- **Framer Motion & Tailwind CSS:** Smooth page transitions, entry animations, and hover effects that create a premium feel.
- **Lenis Smooth Scrolling:** Implemented for a seamless, fluid scrolling experience across all sections.
- **WebGL/3D Elements:** Powered by OGL to render stunning, interactive backgrounds and visual effects.

### 2. Scrollytelling & Interactive Sections

- **Dynamic Scroll-Linked Animations:** Elements animate in response to the user's scroll position, creating an engaging storytelling flow.
- **Sticky & Parallax Effects:** Used in key sections like Portability and OLED Features to keep users immersed.
- **Responsive Layout:** Perfectly tailored for all screen sizes (Mobile, Tablet, Desktop).

### 3. AI Chatbot Integration

- **Vercel AI SDK & OpenRouter:** Integrated an intelligent conversational AI assistant to answer user questions on the fly.
- **Markdown Support:** The chatbot processes and renders complex responses beautifully using `react-markdown`.
- **Context-Aware:** Purpose-built to answer queries about the G14's specifications, performance, and unique features in real-time.

### 4. Newsletter Subscription System

- **Database Integration:** Utilizes **Prisma ORM** and **CockroachDB** to securely store subscriber emails and data.
- **API Routes:** Implemented secure Next.js App Router API handlers for processing form submissions.
- **Form Validation:** Strict client-side and server-side validation powered by **React Hook Form** and **Zod**.
- **User Feedback:** Toast notifications via **Sonner** inform users instantly upon successful registration or if an error occurs.

## 🧱 Sections Overview

The landing page is carefully structured into the following distinct sections, each engineered to highlight specific aspects of the product:

1. **Hero Section**: High-impact introduction with a dynamic WebGL background and quick feature highlights.
2. **Design Section**: Showcases the premium CNC aluminum chassis and sleek build.
3. **Performance Section**: Details the power of the AMD Ryzen™ CPU and NVIDIA® GeForce RTX™ GPU.
4. **OLED Display & Features**: Highlights the gorgeous ROG Nebula Display with its high contrast, color accuracy, and fast response times.
5. **Portability Section**: Emphasizes the ultra-thin and lightweight nature of the laptop.
6. **Cooling Section**: Explains the ROG Intelligent Cooling system (vapor chamber, liquid metal, improved fans).
7. **Control Section**: Focuses on the typing experience, oversized trackpad, and comprehensive I/O ports.
8. **Use Cases**: Illustrates scenarios for gamers, creators, and on-the-go professionals.
9. **Scrollytelling Section**: An interactive narrative journey highlighting key specs as the user scrolls.
10. **FAQ Section**: Frequently asked questions about the device.
11. **Newsletter Section**: A fully functional subscription form for users to receive updates and news.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Radix UI, Shadcn UI components
- **Animations:** Framer Motion, Lenis (Smooth Scroll), OGL (WebGL)
- **Backend & Database:** Prisma ORM, CockroachDB
- **AI Integration:** Vercel AI SDK, OpenRouter
- **Forms & Validation:** React Hook Form, Zod
- **Other Utilities:** Sonner (Toasts), Lucide React (Icons), Embla Carousel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ (or Bun/pnpm/yarn)
- CockroachDB Database

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add the following keys:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   OPENROUTER_API_KEY="your_openrouter_api_key"
   ```

4. Setup Database:
   Generate the Prisma client and push the schema to your database.

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:

   ```bash
   npm run dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
