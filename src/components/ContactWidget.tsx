'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall3CX = () => {
    window.open('https://1280.3cx.cloud/callus/#hoteldelahersedor', '_blank');
  };

  const handleWhatsApp = () => {
    const phoneNumber = '33185737247';
    const message = 'Hello! I have a question about OuiLockers luggage storage in Paris.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 3CX Online Call */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
              >
                Call us online (3CX)
              </motion.span>
              <button
                onClick={handleCall3CX}
                className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
                aria-label="Call us online via 3CX"
              >
                <Headphones className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                {/* Pulsing online indicator */}
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
              </button>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
              >
                Chat on WhatsApp
              </motion.span>
              <button
                onClick={handleWhatsApp}
                className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800'
            : 'bg-emerald-600 hover:bg-emerald-700'
        } text-white`}
        aria-label={isOpen ? 'Close contact options' : 'Contact us'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.span>
          ) : (
            <motion.span
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulsing ring when closed */}
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 flex h-4 w-4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
