import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUpRight, X } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 bg-navy-950/95 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl shadow-xl border border-navy-800 text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-1 p-0.5 text-sand-400 hover:text-white rounded transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated WhatsApp Button */}
      <motion.a
        href={personalDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Thasleema on WhatsApp"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg hover:shadow-emerald-900/30 transition-all border border-emerald-500/30"
      >
        {/* Pulsing subtle ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
        <span className="hidden sm:inline font-heading tracking-wide">WhatsApp Me</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.a>
    </div>
  );
};
