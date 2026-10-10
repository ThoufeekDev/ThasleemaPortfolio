import React, { useState } from 'react';
import { FileText, Download, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadAttempted, setDownloadAttempted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadAttempted(true);
    // Create an anchor tag pointing directly to /Thasleema-Resume.pdf
    const link = document.createElement('a');
    link.href = personalDetails.resumePath;
    link.download = 'Thasleema-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="bg-white border border-sand-200 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative transform transition-all animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-navy-500 hover:text-navy-900 rounded-xl hover:bg-sand-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-navy-900">
              Download Resume
            </h3>
            <p className="text-xs sm:text-sm text-navy-600">
              Official Curriculum Vitae · Thasleema N
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6 text-sm text-navy-700">
          <div className="p-4 bg-sand-50 rounded-xl border border-sand-200 space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Candidate:</strong> Thasleema N (BBA)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Role:</strong> Front Office & Business Support Professional</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Location:</strong> Kollam, Kerala, India</span>
            </div>
          </div>

          <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p>
              The resume download is mapped to <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono text-[11px]">public/Thasleema-Resume.pdf</code>. Place the original PDF file in that folder to ensure instant recruiter downloads.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-navy-700"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            {downloadAttempted ? 'Download Again (/Thasleema-Resume.pdf)' : 'Download Resume PDF'}
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-800 font-medium text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
