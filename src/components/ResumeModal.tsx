import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FileText, Download, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadAttempted, setDownloadAttempted] = useState(false);

  const handleDownloadConfetti = () => {
    setDownloadAttempted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#047857', '#10B981', '#111927', '#C7B79B']
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white border border-sand-200 rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative z-10 overflow-hidden"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-emerald-700 to-tealAccent-600" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-navy-500 hover:text-navy-900 rounded-xl hover:bg-sand-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shadow-2xs"
              >
                <FileText className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 id="resume-modal-title" className="text-xl font-bold text-navy-950 font-heading">
                  Download Resume
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 font-medium">
                  Official Curriculum Vitae · Thasleema N
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-sm text-navy-700">
              <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span><strong>Candidate:</strong> Thasleema N (BBA)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span><strong>Role:</strong> Front Office &amp; Business Support Professional</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span><strong>Location:</strong> {personalDetails.location}</span>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <p>
                  Official Resume PDF is ready. Click below to download directly to your device or view in a new browser tab.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <motion.a
                href={personalDetails.resumePath}
                download="THASLEEMA Resume.pdf"
                onClick={handleDownloadConfetti}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white font-bold text-sm transition-all shadow-sm hover:shadow"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>{downloadAttempted ? 'Download Again' : 'Download Resume (PDF)'}</span>
              </motion.a>

              <motion.a
                href={personalDetails.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 font-bold text-sm transition-colors border border-sand-300"
              >
                <span>View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
