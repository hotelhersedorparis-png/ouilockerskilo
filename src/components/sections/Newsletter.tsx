'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setFormState('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState('success');
  };

  return (
    <section className="py-16 lg:py-20 bg-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Get Exclusive Deals & Paris Tips
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to receive special offers, promo codes, and insider tips for exploring Paris hands-free.
          </p>

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 text-white"
            >
              <CheckCircle className="w-12 h-12 text-white" />
              <p className="text-xl font-semibold">You&apos;re in! 🎉</p>
              <p className="text-emerald-100">
                Check your inbox for a welcome gift — a 10% discount code for your first booking.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white h-12"
                  aria-label="Email address"
                  disabled={formState === 'loading'}
                />
                {errorMsg && (
                  <p className="text-red-200 text-sm mt-1 text-left">{errorMsg}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={formState === 'loading'}
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold h-12 px-6 flex-shrink-0"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing…
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
          )}

          <p className="text-emerald-200 text-xs mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
