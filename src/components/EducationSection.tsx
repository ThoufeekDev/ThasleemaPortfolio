import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-ivory-100 relative overflow-hidden">
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
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Education
          </h2>
          <p className="mt-3 text-base text-navy-600">
            Formal business education establishing core competencies in administration, management, and organizational workflows.
          </p>
        </motion.div>

        {/* Education Card Layout */}
        <div className="max-w-3xl">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-sand-200 shadow-card hover:shadow-hover hover:border-emerald-300 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top shimmer bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-emerald-700 to-tealAccent-600" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-sand-100">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-2xs"
                  >
                    <GraduationCap className="w-7 h-7" />
                  </motion.div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 group-hover:text-emerald-950 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-navy-700">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sand-50 border border-sand-200 text-xs font-bold text-navy-900 self-start sm:self-auto shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-navy-600">
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-800 bg-sand-50 px-3.5 py-1.5 rounded-xl border border-sand-200/80">
                  <BookOpen className="w-3.5 h-3.5 text-navy-600" />
                  <span>Business Administration &amp; Management Studies</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
