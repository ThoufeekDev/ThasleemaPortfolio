import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, HeartHandshake, BarChart3, Sparkles } from 'lucide-react';
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
    <section id="skills" className="py-20 md:py-28 bg-white border-y border-sand-200 relative overflow-hidden">
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
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Core Skills
          </h2>
          <p className="mt-3 text-base text-navy-600">
            A comprehensive set of operational, administrative, client-facing, and supervisory skills built through direct hands-on execution.
          </p>
        </motion.div>

        {/* Skill Category Cards Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-sand-50/70 hover:bg-sand-50 rounded-3xl p-7 sm:p-8 border border-sand-200 hover:border-emerald-300 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-hover"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-10 h-10 rounded-xl bg-white border border-sand-200 flex items-center justify-center shadow-2xs"
                  >
                    {getCategoryIcon(group.category)}
                  </motion.div>
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
                    <motion.li
                      key={skillIdx}
                      whileHover={{ scale: 1.02, x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-white px-4 py-3 rounded-xl border border-sand-200/90 hover:border-emerald-300 flex items-center gap-3 text-sm font-semibold text-navy-800 shadow-2xs hover:bg-emerald-50/20 transition-all cursor-default"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sand-200/80 flex items-center justify-between text-[11px] font-bold text-navy-600">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-700" />
                  {group.skills.length} Competencies
                </span>
                <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">Verified Area</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
