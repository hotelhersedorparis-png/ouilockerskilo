'use client';

import { useState } from 'react';
import { X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  const promoCode = 'PARIS10';

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-emerald-600 text-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 justify-center">
              <Tag className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm font-medium text-center">
                🎉 First booking? Use code{' '}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white font-bold px-2 py-0.5 rounded cursor-pointer transition-colors mx-1"
                  title="Click to copy"
                  aria-label="Copy promo code PARIS10"
                >
                  {promoCode}
                </button>
                {' '}for{' '}
                <span className="font-bold">10% off</span> your first day!
                {copied && (
                  <span className="ml-2 text-emerald-200 text-xs font-normal">✓ Copied!</span>
                )}
              </p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
              aria-label="Dismiss promo banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
