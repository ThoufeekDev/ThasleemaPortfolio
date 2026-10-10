import React from 'react';
import { Globe2, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-20 md:py-24 bg-white border-t border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
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
        </div>

        {/* Languages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {languagesData.map((lang, idx) => (
            <div
              key={idx}
              className="bg-sand-50/70 rounded-2xl p-6 border border-sand-200 hover:border-sand-300 hover:bg-sand-50 transition-all duration-200 shadow-2xs"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                  Language {idx + 1}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-emerald-100/80 text-emerald-800 border border-emerald-200/50">
                  <CheckCircle2 className="w-3 h-3" />
                  {lang.proficiency}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-navy-950 mb-1">
                {lang.language}
              </h3>
              
              <p className="text-xs text-navy-600 font-medium">
                {lang.levelTag}
              </p>
            </div>
          ))}
        </div>

        {/* Multilingual Support Banner */}
        <div className="mt-8 p-5 bg-sand-100/70 rounded-2xl border border-sand-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-sand-200 flex items-center justify-center text-emerald-800 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-navy-700">
              Proficient in handling cross-regional business coordination and client communications across <strong>Malayalam, English, Hindi, and Tamil</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
