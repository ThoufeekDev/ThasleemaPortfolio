import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-ivory-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="editorial-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-navy-600">
            A track record of front office coordination, team supervision, visitor management, and operational administration.
          </p>
        </div>

        {/* Stacked Experience Timeline / Cards */}
        <div className="space-y-8 relative">
          
          {/* Vertical subtle timeline guideline for desktop */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-sand-300" />

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative lg:pl-20 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="hidden lg:flex absolute left-6 top-8 w-4 h-4 rounded-full bg-white border-4 border-navy-900 group-hover:border-emerald-700 transition-colors z-10 -translate-x-1.5" />

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-sand-200/90 shadow-card hover:shadow-hover transition-all duration-300">
                
                {/* Header Row: Role, Company, Period */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-sand-100">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                        {item.title}
                      </h3>
                      {index === 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                          Recent Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-navy-700 font-medium">
                      <div className="flex items-center gap-1.5 text-navy-900">
                        <Building className="w-4 h-4 text-emerald-700" />
                        <span className="font-semibold">{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-navy-600">
                          <MapPin className="w-3.5 h-3.5 text-navy-500" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sand-50 border border-sand-200 text-xs font-semibold text-navy-800 self-start">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">
                    Key Responsibilities &amp; Operations
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm text-navy-800">
                    {item.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-sand-50/70 border border-sand-100 hover:bg-sand-50 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
