import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-ivory-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
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
        </div>

        {/* Education Card Layout */}
        <div className="max-w-3xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-sand-200 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-sand-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-medium text-navy-700">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand-50 border border-sand-200 text-xs font-semibold text-navy-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-navy-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-navy-700 bg-sand-50 px-3 py-1.5 rounded-lg border border-sand-200/80">
                  <BookOpen className="w-3.5 h-3.5 text-navy-500" />
                  <span>Business Administration &amp; Management Studies</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
