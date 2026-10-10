import React from 'react';
import { Check, ShieldCheck, HeartHandshake, BarChart3 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Administration')) {
      return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
    }
    if (category.includes('Customer')) {
      return <HeartHandshake className="w-5 h-5 text-tealAccent-700" />;
    }
    return <BarChart3 className="w-5 h-5 text-navy-800" />;
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-y border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="editorial-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Core Skills
          </h2>
          <p className="mt-3 text-base text-navy-600">
            A comprehensive set of operational, administrative, client-facing, and supervisory skills built through direct hands-on execution.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-sand-50/60 rounded-3xl p-7 sm:p-8 border border-sand-200 flex flex-col justify-between hover:border-sand-300 hover:bg-sand-50 transition-all duration-200 shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-sand-200 flex items-center justify-center shadow-xs">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy-950">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-navy-600 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills list items */}
                <ul className="space-y-3">
                  {group.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="bg-white px-4 py-3 rounded-xl border border-sand-200/90 flex items-center gap-3 text-sm font-medium text-navy-800 shadow-2xs hover:border-emerald-200 hover:bg-emerald-50/20 transition-all"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sand-200/70 flex items-center justify-between text-[11px] font-semibold text-navy-600">
                <span>{group.skills.length} Key Competencies</span>
                <span className="text-emerald-800">Verified Skill Area</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
