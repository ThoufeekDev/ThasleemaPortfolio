import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
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
        </motion.div>

        {/* Stacked Experience Timeline / Cards */}
        <div className="space-y-10 relative">
          
          {/* Vertical timeline line with glowing gradient */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-600 via-sand-300 to-emerald-700/40" />

          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="relative lg:pl-20 group"
            >
              {/* Animated Timeline Indicator Dot */}
              <div className="hidden lg:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-white border-4 border-navy-900 group-hover:border-emerald-600 group-hover:scale-125 transition-all duration-300 z-10 -translate-x-2 items-center justify-center shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-sand-200 shadow-card hover:shadow-hover hover:border-emerald-200 transition-all duration-300"
              >
                
                {/* Header Row: Role, Company, Period */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-sand-100">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 group-hover:text-emerald-950 transition-colors">
                        {item.title}
                      </h3>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-2xs">
                          <Sparkles className="w-3 h-3 text-emerald-700" />
                          Recent Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-navy-700 font-medium">
                      <div className="flex items-center gap-1.5 text-navy-900">
                        <Building className="w-4 h-4 text-emerald-700" />
                        <span className="font-bold">{item.company}</span>
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sand-50 border border-sand-200 text-xs font-bold text-navy-900 self-start shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">
                    Key Responsibilities &amp; Operations
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-navy-800">
                    {item.responsibilities.map((resp, respIdx) => (
                      <motion.li
                        key={respIdx}
                        whileHover={{ x: 3, backgroundColor: 'rgba(236, 253, 245, 0.6)' }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-sand-50/70 border border-sand-100 hover:border-emerald-200 transition-all duration-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                        <span className="leading-snug">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
