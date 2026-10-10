import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, MessageCircle } from 'lucide-react';
import { personalDetails, contactInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-950/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand & Descriptor */}
          <div className="md:col-span-6 space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 inline-flex cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-sand-50 flex items-center justify-center font-heading font-bold text-base shadow-sm">
                TN
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                {personalDetails.name}
              </span>
            </motion.div>
            
            <p className="text-sm text-sand-300 max-w-md leading-relaxed">
              Front Office Operations &amp; Business Support Professional experienced in administration, delegate handling, customer service, and team supervision.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-sand-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {contactInfo.location}
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 text-sand-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {contactInfo.email}
              </a>
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-navy-950" />
                WhatsApp Direct PM
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sand-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-sand-300">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item === 'Skills' ? 'Core Skills' : item === 'About' ? 'About Me' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Credentials & Top Link */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sand-400">
              Profile Summary
            </h4>
            <div className="text-xs text-sand-300 space-y-2">
              <p>• Bachelor of Business Administration (BBA)</p>
              <p>• Derrick Jones Management (Front Office)</p>
              <p>• Cafe Management &amp; Operations</p>
              <p>• Multilingual in 4 Languages</p>
            </div>

            <div className="pt-4">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-sand-200 hover:text-white text-xs font-bold border border-navy-800 transition-colors shadow-sm"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>

        </div>

        {/* Copyright & Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400">
          <p>
            &copy; {currentYear} {personalDetails.name}. All rights reserved.
          </p>
          <p className="text-sand-500 font-medium">
            Professional Portfolio · Front Office &amp; Business Support
          </p>
        </div>

      </div>
    </footer>
  );
};
