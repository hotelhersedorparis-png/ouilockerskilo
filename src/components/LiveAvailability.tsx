'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type AvailabilityStatus = 'available' | 'limited' | 'loading';

interface AvailabilityData {
  status: AvailabilityStatus;
  count: number;
  label: string;
}

function getAvailabilityData(): AvailabilityData {
  // Simulate dynamic availability based on time of day
  const hour = new Date().getHours();
  // Peak hours: 9-12 and 14-18 → limited; off-peak → available
  const isPeak = (hour >= 9 && hour <= 12) || (hour >= 14 && hour <= 18);
  const count = isPeak
    ? Math.floor(Math.random() * 5) + 3   // 3–7 during peak
    : Math.floor(Math.random() * 8) + 8;  // 8–15 off-peak

  if (count <= 5) {
    return { status: 'limited', count, label: `Only ${count} lockers left today!` };
  }
  return { status: 'available', count, label: `${count} lockers available` };
}

export default function LiveAvailability() {
  const [data, setData] = useState<AvailabilityData | null>(null);

  useEffect(() => {
    // Initial load
    setTimeout(() => {
      setData(getAvailabilityData());
    }, 800);

    // Refresh every 60 seconds
    const interval = setInterval(() => {
      setData(getAvailabilityData());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
      bg-white border-slate-200 shadow-sm">
      <AnimatePresence mode="wait">
        {!data ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-slate-500"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Checking availability…
          </motion.span>
        ) : data.status === 'limited' ? (
          <motion.span
            key="limited"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-amber-600"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{data.label}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
          </motion.span>
        ) : (
          <motion.span
            key="available"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-emerald-600"
          >
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <span>{data.label}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
