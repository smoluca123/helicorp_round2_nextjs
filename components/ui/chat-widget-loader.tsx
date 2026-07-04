'use client';

import dynamic from 'next/dynamic';

// Must live in a Client Component — `ssr: false` is not allowed in Server Components
const ChatWidget = dynamic(
  () => import('@/components/ui/chat-widget').then((mod) => mod.ChatWidget),
  { ssr: false },
);

export function ChatWidgetLoader() {
  return <ChatWidget />;
}
