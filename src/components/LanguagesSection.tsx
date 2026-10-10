import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-20 md:py-24 bg-white border-t border-sand-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="editorial-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Multilingual Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Language Proficiency
          </h2>
          <p className="mt-3 text-base text-navy-600">
            Fluent multilingual communication enabling smooth interactions with diverse delegates, clients, team members, and visitors.
          </p>
        </motion.div>

        {/* Languages Cards Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {languagesData.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-sand-50/70 hover:bg-sand-50 rounded-2xl p-6 border border-sand-200 hover:border-emerald-300 transition-all duration-300 shadow-2xs hover:shadow-hover cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-500">
                  Language {idx + 1}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-900 border border-emerald-200/60 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                  {lang.proficiency}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-navy-950 mb-1">
                {lang.language}
              </h3>
              
              <p className="text-xs text-navy-600 font-semibold">
                {lang.levelTag}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Multilingual Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -2 }}
          className="mt-8 p-5 bg-sand-100/70 rounded-2xl border border-sand-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
        >
          <div className="flex items-center gap-3.5">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-10 h-10 rounded-xl bg-white border border-sand-200 flex items-center justify-center text-emerald-800 shrink-0 shadow-2xs"
            >
              <Globe2 className="w-5 h-5" />
            </motion.div>
            <p className="text-xs sm:text-sm text-navy-800">
              Proficient in handling cross-regional business coordination and client communications across <strong>Malayalam, English, Hindi, and Tamil</strong>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
