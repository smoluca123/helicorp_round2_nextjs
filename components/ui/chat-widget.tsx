'use client';

import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport } from 'ai';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronDown, Loader2, Send, Sparkles, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef, useState } from 'react';

// ─── Suggested questions for first-time users ───────────────────────────────
const QUICK_SUGGESTIONS = [
  'Màn hình OLED có ưu điểm gì?',
  'RAM có nâng cấp được không?',
  'Pin dùng được bao lâu?',
  'Có hỗ trợ WiFi 7 không?',
];

// ─── Types ───────────────────────────────────────────────────────────────────
interface MessagePart {
  type: string;
  text?: string;
}

interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  parts: MessagePart[];
}

// ─── Helper: extract plain text from message parts ───────────────────────────
function getMessageText(message: UIMessage): string {
  return (
    message.parts
      ?.filter((p) => p.type === 'text')
      .map((p) => p.text ?? '')
      .join('') ?? ''
  );
}

// ─── Typing indicator component ──────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-2 h-2 rounded-full bg-red-500"
          style={{
            animation: `chatBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main ChatWidget component ────────────────────────────────────────────────
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new TextStreamChatTransport({ api: '/api/chat' }),
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    sendMessage({ text });
    setInputValue('');
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
    setShowSuggestions(false);
  };

  return (
    <>
      {/* Keyframe styles injected globally */}
      <style>{`
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(220,38,38,0); }
        }
      `}</style>

      {/* ── Chat Window ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-95 flex flex-col"
            style={{
              height: 'min(580px, calc(100dvh - 120px))',
              borderRadius: '1.25rem',
              background:
                'linear-gradient(145deg, rgba(18,18,22,0.97) 0%, rgba(10,10,14,0.99) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
              backdropFilter: 'blur(24px)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 shrink-0"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem 1.25rem 0 0',
                background:
                  'linear-gradient(90deg, rgba(220,38,38,0.12) 0%, rgba(255,255,255,0.03) 100%)',
              }}
            >
              {/* ROG icon */}
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{
                  background:
                    'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                  boxShadow: '0 2px 12px rgba(220,38,38,0.4)',
                }}
              >
                <Bot size={18} className="text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight truncate">
                  ROG AI Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="block w-1.5 h-1.5 rounded-full bg-emerald-400"
                    style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }}
                  />
                  <span className="text-xs text-zinc-400">
                    Tư vấn ROG Zephyrus G14
                  </span>
                </div>
              </div>

              {/* Minimize */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Đóng chat"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Messages area */}
            <div
              className="flex-1 overflow-y-auto px-3 py-3 space-y-3"
              style={{ overscrollBehavior: 'contain' }}
              data-lenis-prevent
            >
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex gap-2.5"
                >
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 mt-0.5"
                    style={{
                      background:
                        'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                    }}
                  >
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div
                    className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-zinc-200 leading-relaxed max-w-[85%]"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    Xin chào! Tôi là trợ lý AI của ROG 🎮
                    <br />
                    Hãy hỏi tôi bất cứ điều gì về laptop{' '}
                    <span className="text-red-400 font-semibold">
                      ROG Zephyrus G14 2026
                    </span>
                    !
                  </div>
                </motion.div>
              )}

              {/* Conversation messages */}
              {(messages as UIMessage[]).map((message) => {
                const text = getMessageText(message);
                const isUser = message.role === 'user';

                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Avatar */}
                    {!isUser && (
                      <div
                        className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 mt-0.5"
                        style={{
                          background:
                            'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                        }}
                      >
                        <Bot size={12} className="text-white" />
                      </div>
                    )}

                    {/* Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[82%] wrap-break-word ${
                        isUser
                          ? 'rounded-tr-sm text-white'
                          : 'rounded-tl-sm text-zinc-200'
                      }`}
                      style={
                        isUser
                          ? {
                              background:
                                'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                              boxShadow: '0 2px 12px rgba(220,38,38,0.25)',
                            }
                          : {
                              background: 'rgba(255,255,255,0.06)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }
                      }
                    >
                      {isUser ? (
                        <span className="whitespace-pre-wrap">{text}</span>
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => (
                              <p className="mb-2 last:mb-0">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-white">
                                {children}
                              </strong>
                            ),
                            em: ({ children }) => (
                              <em className="italic text-zinc-300">
                                {children}
                              </em>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-inside space-y-1 my-2 pl-1">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-inside space-y-1 my-2 pl-1">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="text-zinc-200 leading-relaxed">
                                {children}
                              </li>
                            ),
                            code: ({ children }) => (
                              <code className="bg-black/40 text-red-300 px-1.5 py-0.5 rounded text-xs font-mono">
                                {children}
                              </code>
                            ),
                            h1: ({ children }) => (
                              <h1 className="font-bold text-white text-base mb-2">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="font-semibold text-white text-sm mb-1.5">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="font-semibold text-zinc-100 text-sm mb-1">
                                {children}
                              </h3>
                            ),
                            hr: () => <hr className="border-white/10 my-2" />,
                            blockquote: ({ children }) => (
                              <blockquote className="border-l-2 border-red-500/60 pl-3 italic text-zinc-400 my-2">
                                {children}
                              </blockquote>
                            ),
                          }}
                        >
                          {text}
                        </ReactMarkdown>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                    style={{
                      background:
                        'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                    }}
                  >
                    <Bot size={12} className="text-white" />
                  </div>
                  <div
                    className="rounded-2xl rounded-tl-sm"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions */}
            <AnimatePresence>
              {showSuggestions && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 pb-2 flex flex-wrap gap-1.5"
                >
                  {QUICK_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 text-xs text-zinc-300 rounded-full transition-all duration-200 hover:text-white hover:scale-105"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = 'rgba(220,38,38,0.2)';
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = 'rgba(220,38,38,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = 'rgba(255,255,255,0.06)';
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div
              className="px-3 pb-3 pt-2 shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="flex items-end gap-2 rounded-xl p-2"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hỏi về ROG Zephyrus G14..."
                  rows={1}
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 resize-none outline-none leading-relaxed disabled:opacity-50"
                  style={{ maxHeight: '80px', minHeight: '20px' }}
                  onInput={(e) => {
                    const target = e.currentTarget;
                    target.style.height = 'auto';
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 shrink-0 disabled:opacity-40 disabled:scale-100 hover:scale-110 active:scale-95"
                  style={{
                    background:
                      inputValue.trim() && !isLoading
                        ? 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)'
                        : 'rgba(255,255,255,0.08)',
                    boxShadow:
                      inputValue.trim() && !isLoading
                        ? '0 2px 12px rgba(220,38,38,0.4)'
                        : 'none',
                  }}
                  aria-label="Gửi tin nhắn"
                >
                  {isLoading ? (
                    <Loader2 size={14} className="text-white animate-spin" />
                  ) : (
                    <Send size={14} className="text-white translate-x-px" />
                  )}
                </button>
              </div>
              <p className="text-center text-[10px] text-zinc-600 mt-1.5">
                Powered by OpenRouter · Nhấn Enter để gửi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Bubble Button ───────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-4 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-2xl"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #3f3f46 0%, #27272a 100%)'
            : 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          boxShadow: isOpen
            ? '0 8px 24px rgba(0,0,0,0.4)'
            : '0 8px 24px rgba(220,38,38,0.45)',
          animation: isOpen ? 'none' : 'chatPulse 2.5s ease-in-out infinite',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        aria-label={isOpen ? 'Đóng chat' : 'Mở chat tư vấn'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
