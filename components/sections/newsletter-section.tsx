'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRays from '@/components/LightRays';
import ShinyText from '@/components/ui/ShinyText';
import { useTheme } from 'next-themes';

// React Hook Form & Zod
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

// Shadcn Field UI
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email('Địa chỉ email không hợp lệ.'),
});

export function NewsletterSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    totalCount: 347,
    initials: ['NT', 'LH', 'PD', 'TK'],
  });

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });

    // Fetch stats
    fetch('/api/newsletter')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.totalCount === 'number') {
          setStats({
            totalCount: data.totalCount, // exact count from DB
            initials: data.initials || ['NT', 'LH', 'PD', 'TK'],
          });
        }
      })
      .catch((err) => console.error('Failed to fetch newsletter stats', err));

    return () => cancelAnimationFrame(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resultData = await res.json();

      if (!res.ok) {
        toast.error(resultData.message || 'Có lỗi xảy ra');
        setStatus('idle');
        return;
      }

      setStatus('success');
      form.reset();

      // Tracking Success
      import('@/lib/tracking').then(({ sendTrackingEvent }) => {
        sendTrackingEvent({
          eventType: 'click',
          target: 'newsletter_subscribe_success',
        });
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch {
      toast.error('Không thể kết nối đến máy chủ.');
      setStatus('idle');
    }
  };

  return (
    <section
      className="relative w-full bg-zinc-50 dark:bg-[#030303] py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      id="newsletter"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 bg-zinc-400/10 dark:bg-zinc-500/5 rounded-full blur-[120px] transition-colors duration-500" />

        {/* LightRays Component */}
        <div className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40">
          <LightRays
            raysOrigin="top-center"
            raysColor={
              mounted && resolvedTheme === 'dark' ? '#ffffff' : '#71717a'
            }
            raysSpeed={1.5}
            pulsating={true}
            rayLength={3}
            fadeDistance={0.8}
            mouseInfluence={0.1}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200/50 dark:bg-zinc-900/40 border border-zinc-300/50 dark:border-zinc-800/50 backdrop-blur-md transition-colors duration-500">
            <Sparkles className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 transition-colors duration-500">
              Đặc quyền ROG — Giới hạn 500 suất
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 font-display transition-colors duration-500">
            Sẵn sàng khai phóng <br className="hidden md:block" />
            <ShinyText
              text="giới hạn?"
              speed={2.5}
              delay={0}
              color="currentColor"
              shineColor={
                mounted && resolvedTheme === 'dark' ? '#ffffff' : '#000000'
              }
              className="text-zinc-500 dark:text-zinc-400 transition-colors duration-500"
            />
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 transition-colors duration-500"
        >
          Đăng ký waitlist để nhận đặc quyền Early Bird —{' '}
          <br className="hidden md:block" />
          giảm giá độc quyền và giao hàng ưu tiên.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-lg mb-8"
        >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative w-full"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full p-2 bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 rounded-full h-16 transition-colors duration-500"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium text-emerald-700 dark:text-emerald-200 transition-colors duration-500">
                    Đăng ký thành công! Bạn đã vào danh sách.
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col"
                >
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="w-full"
                      >
                        <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:bg-white/80 sm:dark:bg-zinc-900/60 sm:border sm:border-zinc-200 sm:dark:border-zinc-800 sm:rounded-full sm:p-1.5 sm:backdrop-blur-md sm:focus-within:ring-1 sm:focus-within:ring-zinc-400 sm:dark:focus-within:ring-zinc-700 transition-all sm:shadow-xl sm:dark:shadow-2xl">
                          <div className="w-full sm:grow flex items-center bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 sm:bg-transparent sm:dark:bg-transparent sm:border-transparent sm:dark:border-transparent rounded-full sm:rounded-none p-1.5 sm:p-0 backdrop-blur-md sm:backdrop-blur-none shadow-xl dark:shadow-2xl sm:shadow-none sm:dark:shadow-none focus-within:ring-1 focus-within:ring-zinc-400 dark:focus-within:ring-zinc-700 sm:focus-within:ring-0 sm:dark:focus-within:ring-0 transition-all relative">
                            <FieldLabel
                              htmlFor={field.name}
                              className="sr-only"
                            >
                              Email
                            </FieldLabel>
                            <Input
                              {...field}
                              id={field.name}
                              type="email"
                              aria-invalid={fieldState.invalid}
                              placeholder="your@email.com"
                              className="w-full h-12 sm:h-full min-h-12 min-w-0 bg-transparent! border-none! rounded-full! sm:rounded-r-none! outline-none text-center sm:text-left text-zinc-900 dark:text-white px-5 sm:px-6 placeholder:text-zinc-500 dark:placeholder:text-zinc-600 font-medium transition-colors duration-500 shadow-none focus-visible:ring-0 [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] [&:-webkit-autofill]:[-webkit-text-fill-color:black] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                              disabled={status === 'loading'}
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full sm:w-auto h-12 px-6 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] shrink-0"
                          >
                            {status === 'loading' ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                              />
                            ) : (
                              <>
                                <span>Đăng ký ngay</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </div>
                        {/* Error Message underneath */}
                        {fieldState.invalid && (
                          <div className="mt-2 text-left px-4">
                            <FieldError errors={[fieldState.error]} />
                          </div>
                        )}
                      </Field>
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center">
            <div className="flex -space-x-2">
              {stats.initials.map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-[#030303] flex items-center justify-center text-[10px] font-bold text-zinc-500 dark:text-zinc-300 transition-colors duration-500"
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-500 max-w-50 sm:max-w-none">
              <span className="font-semibold text-zinc-900 dark:text-white">
                {stats.totalCount}
              </span>{' '}
              người đã đăng ký · còn{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {Math.max(0, 500 - stats.totalCount)}
              </span>{' '}
              suất Early Bird
            </div>
          </div>

          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-2 transition-colors duration-500">
            Không spam. Hủy đăng ký bất kỳ lúc nào.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
