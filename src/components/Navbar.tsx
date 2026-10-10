import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-sm'
          : 'bg-ivory-100/90 backdrop-blur-md py-5'
      }`}
    >
      {/* Top Scroll Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-tealAccent-500 to-navy-900 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Animated Brand Logo */}
          <motion.a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Thasleema N Home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-lg bg-navy-900 text-sand-50 flex items-center justify-center font-bold text-sm tracking-wider group-hover:bg-emerald-800 transition-colors shadow-sm relative overflow-hidden">
              <span className="relative z-10">TN</span>
              <motion.div
                className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-30 transition-opacity"
                layoutId="logoHighlight"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-navy-900 group-hover:text-emerald-800 transition-colors">
                {personalDetails.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-navy-600">
                Front Office &amp; Support
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links with Framer Motion Sliding Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-sand-200 shadow-sm relative" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-navy-700 hover:text-navy-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-navy-900 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={onOpenResumeModal}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-sand-300 bg-white hover:bg-sand-50 text-navy-800 transition-all hover:border-emerald-300 shadow-xs"
              aria-label="Download Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-700" />
              <span>Resume</span>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-sm hover:shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sand-300 bg-white text-navy-800 shadow-xs"
              aria-label="Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-700" />
              <span>CV</span>
            </button>
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.92 }}
              className="p-2 rounded-lg bg-white border border-sand-200 text-navy-800 hover:bg-sand-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-xs"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-sand-200 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'text-navy-800 hover:bg-sand-100'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-sand-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border border-sand-300 bg-sand-50 text-navy-800 hover:bg-sand-100"
                >
                  <FileDown className="w-4 h-4 text-emerald-700" />
                  <span>Download Resume (PDF)</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
