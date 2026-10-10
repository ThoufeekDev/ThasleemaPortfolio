import React from 'react';
import { Network, Users, ClipboardCheck, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutContent, professionalStrengths } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'network':
        return <Network className="w-6 h-6 text-emerald-700" />;
      case 'users':
        return <Users className="w-6 h-6 text-tealAccent-700" />;
      case 'clipboard-check':
        return <ClipboardCheck className="w-6 h-6 text-emerald-800" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-navy-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="editorial-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Profile &amp; Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            About Me
          </h2>
          <p className="mt-3 text-base text-navy-600">
            A reliable, organized, and service-focused professional dedicated to operational excellence and positive client experiences.
          </p>
        </div>

        {/* Introduction Narrative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-navy-800 leading-relaxed">
            <p className="font-normal text-navy-900/90">
              {aboutContent.paragraph1}
            </p>
            <p className="font-normal text-navy-700">
              {aboutContent.paragraph2}
            </p>
          </div>

          {/* Side Editorial Callout Box */}
          <div className="lg:col-span-4 bg-sand-50 rounded-2xl p-6 sm:p-7 border border-sand-200 shadow-sm">
            <h3 className="font-heading font-bold text-base text-navy-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              Core Competency Summary
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-navy-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Visitor &amp; Delegate Management</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Vendor &amp; Cross-Team Communication</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Administrative Documentation &amp; Billing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Inventory Control &amp; Team Supervision</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Professional Strength Cards */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold font-heading text-navy-900">
              Professional Strengths
            </h3>
            <p className="text-xs sm:text-sm text-navy-600 mt-1">
              Key domains where Thasleema delivers dependable, high-quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalStrengths.map((strength) => (
              <div
                key={strength.id}
                className="subtle-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sand-100 flex items-center justify-center mb-5 group-hover:bg-emerald-50 transition-colors">
                    {getIcon(strength.iconName)}
                  </div>
                  <h4 className="text-base font-bold font-heading text-navy-950 mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-sand-100 flex items-center text-[11px] font-semibold text-emerald-800">
                  <span>Core Expertise</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
