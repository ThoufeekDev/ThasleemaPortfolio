import React from 'react';
import { MapPin, Briefcase, Mail, ArrowRight, FileDown, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient gradient spots */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-sand-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & Availability Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for Front Office &amp; Business Support Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 font-heading leading-[1.12]">
                {personalDetails.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-800 font-heading">
                {personalDetails.title}
              </p>
            </div>

            {/* Location tag */}
            <div className="inline-flex items-center gap-2 text-sm text-navy-700 bg-sand-100/80 px-3.5 py-1.5 rounded-lg border border-sand-200">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="font-medium">{personalDetails.location}</span>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed max-w-xl">
              {personalDetails.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sand-50 text-navy-900 text-sm font-semibold border border-sand-300 shadow-sm transition-all hover:border-sand-400 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-navy-700 hover:text-navy-900 hover:bg-sand-200/60 text-sm font-medium transition-colors"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-navy-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-sand-200 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-navy-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Front Office Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Client &amp; Visitor Relations</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>BBA Graduate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Profile Summary Card (Typography & Structural Design) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border frame */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-xl overflow-hidden">
                
                {/* Subtle top banner accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-900 via-emerald-800 to-tealAccent-700" />

                {/* Monogram and Badge Header */}
                <div className="flex items-center justify-between pb-6 border-b border-sand-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-800 text-sand-50 flex items-center justify-center font-heading font-bold text-2xl shadow-inner border border-navy-700">
                      TN
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg text-navy-950">
                        Thasleema N
                      </h2>
                      <p className="text-xs text-navy-600 font-medium flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                        Verified Professional
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-sand-100 text-navy-800 rounded-md border border-sand-200">
                    BBA Grad
                  </span>
                </div>

                {/* Summary Key Attributes */}
                <div className="py-6 space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 bg-sand-50 rounded-xl border border-sand-200/80 flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-navy-900">Front Office &amp; Operations</h4>
                      <p className="text-xs text-navy-600 mt-0.5">Delegate handling, scheduling, administrative record-keeping &amp; documentation</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-sand-50 rounded-xl border border-sand-200/80 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-tealAccent-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-navy-900">Customer &amp; Business Support</h4>
                      <p className="text-xs text-navy-600 mt-0.5">Customer service, billing, inventory control, and vendor coordination</p>
                    </div>
                  </div>
                </div>

                {/* Languages & Location Footer strip */}
                <div className="pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-navy-600">
                  <div>
                    <span className="text-navy-500 font-normal">Location: </span>
                    <span className="font-medium text-navy-800">Kerala, India</span>
                  </div>
                  <div>
                    <span className="text-navy-500 font-normal">Languages: </span>
                    <span className="font-medium text-navy-800">4 Languages</span>
                  </div>
                </div>

              </div>

              {/* Small floating badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-navy-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-navy-800 items-center gap-2.5 text-xs font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for Corporate &amp; Operations Roles</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
