import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Briefcase, Mail, ArrowRight, FileDown, CheckCircle2, ShieldCheck, Sparkles, Building2, Award } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth 3D tilt transformation
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for smooth staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs with Staggered Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status & Availability Tag */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for Front Office &amp; Business Support Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 font-heading leading-[1.12]">
                {personalDetails.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-emerald-800 font-heading">
                {personalDetails.title}
              </p>
            </motion.div>

            {/* Location tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-sm text-navy-700 bg-sand-100/90 px-3.5 py-1.5 rounded-xl border border-sand-200"
            >
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="font-semibold">{personalDetails.location}</span>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-navy-700 leading-relaxed max-w-xl"
            >
              {personalDetails.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <motion.button
                onClick={() => scrollToSection('experience')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all group"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sand-50 text-navy-900 text-sm font-semibold border border-sand-300 shadow-sm transition-all hover:border-emerald-300"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Get In Touch</span>
              </motion.button>

              <motion.button
                onClick={onOpenResumeModal}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-navy-700 hover:text-navy-900 hover:bg-sand-200/60 text-sm font-medium transition-colors"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-navy-600" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-sand-200 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-navy-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Front Office Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Client &amp; Visitor Relations</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">BBA</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Animated Tilt Card */}
          <div className="lg:col-span-5 perspective-1000">
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none group cursor-pointer"
            >
              {/* Outer decorative card container */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl overflow-hidden">

                {/* Top decorative gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-900 via-emerald-800 to-tealAccent-700" />

                {/* Monogram and Badge Header */}
                <div className="flex items-center justify-between pb-6 border-b border-sand-100">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-800 text-sand-50 flex items-center justify-center font-heading font-bold text-2xl shadow-inner border border-navy-700 relative overflow-hidden"
                    >
                      <span className="relative z-10">TN</span>
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 pointer-events-none" />
                    </motion.div>
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

                {/* Summary Key Attributes with micro hover animations */}
                <div className="py-6 space-y-4 text-xs sm:text-sm">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-3.5 bg-sand-50/80 rounded-xl border border-sand-200/80 flex items-start gap-3 transition-colors hover:bg-emerald-50/40"
                  >
                    <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy-900">Front Office &amp; Operations</h4>
                      <p className="text-xs text-navy-600 mt-0.5">Delegate handling, scheduling, administrative record-keeping &amp; documentation</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-3.5 bg-sand-50/80 rounded-xl border border-sand-200/80 flex items-start gap-3 transition-colors hover:bg-tealAccent-50/40"
                  >
                    <Sparkles className="w-5 h-5 text-tealAccent-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy-900">Customer &amp; Business Support</h4>
                      <p className="text-xs text-navy-600 mt-0.5">Customer service, billing, inventory control, and vendor coordination</p>
                    </div>
                  </motion.div>
                </div>

                {/* Languages & Location Footer strip */}
                <div className="pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-navy-600">
                  <div>
                    <span className="text-navy-500 font-normal">Location: </span>
                    <span className="font-semibold text-navy-800">Kochi, Kerala</span>
                  </div>
                  <div>
                    <span className="text-navy-500 font-normal">Languages: </span>
                    <span className="font-semibold text-navy-800">4 Languages</span>
                  </div>
                </div>

              </div>

              {/* Floating interactive badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -bottom-4 -left-4 bg-navy-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-navy-800 items-center gap-2.5 text-xs font-semibold"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Ready for Corporate &amp; Operations Roles</span>
              </motion.div>

              {/* Top Floating Badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:flex absolute -top-4 -right-3 bg-white text-navy-900 px-3.5 py-1.5 rounded-xl shadow-lg border border-sand-200 items-center gap-2 text-xs font-bold"
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>BBA Graduate</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
