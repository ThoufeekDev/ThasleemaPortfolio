import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Copy, Check, Send, PhoneCall, Sparkles, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state for email draft composer
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isComposing, setIsComposing] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#047857', '#10B981', '#111927', '#AC9774']
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    triggerConfetti();
    onShowToast(`Email address copied: ${contactInfo.email}`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    triggerConfetti();
    onShowToast(`Phone number copied: ${contactInfo.phone}`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!name.trim()) errors.name = 'Please enter your name';
    if (!email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) errors.message = 'Please enter your message or opportunity details';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsComposing(true);

    // Construct mailto URI with encoded parameters
    const subjectParam = subject.trim() || `Inquiry from ${name.trim()} - Front Office / Business Support`;
    const bodyParam = `Hi Thasleema,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}\n${email.trim()}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subjectParam)}&body=${encodeURIComponent(bodyParam)}`;

    triggerConfetti();
    onShowToast('Opening your email client to send message...');

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsComposing(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory-100 relative overflow-hidden">
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
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-heading">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-navy-600 leading-relaxed">
            Looking for a dedicated professional for front office operations, business support, administration, or customer-facing roles? Get in touch to discuss opportunities.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sand-200 shadow-sm hover:border-emerald-300 transition-all duration-300 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <motion.button
                  onClick={copyEmail}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-xl text-navy-600 hover:text-navy-950 hover:bg-sand-100 transition-colors text-xs font-semibold inline-flex items-center gap-1.5 border border-sand-200 shadow-2xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div>
                <span className="text-xs font-bold text-navy-500 uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-base sm:text-lg font-bold text-navy-950 hover:text-emerald-800 transition-colors break-all mt-0.5"
                >
                  {contactInfo.email}
                </a>
              </div>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Phone Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sand-200 shadow-sm hover:border-emerald-300 transition-all duration-300 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-tealAccent-50 border border-tealAccent-100 flex items-center justify-center text-tealAccent-800 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <motion.button
                  onClick={copyPhone}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-xl text-navy-600 hover:text-navy-950 hover:bg-sand-100 transition-colors text-xs font-semibold inline-flex items-center gap-1.5 border border-sand-200 shadow-2xs"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div>
                <span className="text-xs font-bold text-navy-500 uppercase tracking-wider">
                  Phone / Mobile
                </span>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg font-bold text-navy-950 hover:text-emerald-800 transition-colors mt-0.5"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </div>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Location Detail Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white/80 rounded-2xl p-5 border border-sand-200 flex items-center gap-3.5 text-navy-700 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-emerald-800 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-navy-500 block">Based in</span>
                <span className="text-sm font-bold text-navy-900">{contactInfo.location}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Direct Inquiry Draft Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-sand-200 shadow-card">
              
              <div className="flex items-center justify-between pb-6 border-b border-sand-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-navy-950">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-navy-600 mt-0.5">
                    Fills an email draft directly addressed to {contactInfo.email}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct Routing</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                      Your Name <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. HR Manager / Recruiter"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-navy-400 bg-sand-50/50 focus:bg-white transition-all ${
                        formErrors.name ? 'border-red-400 focus:ring-red-400' : 'border-sand-200 focus:border-emerald-700 focus:ring-emerald-700'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                      Your Email <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-navy-400 bg-sand-50/50 focus:bg-white transition-all ${
                        formErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-sand-200 focus:border-emerald-700 focus:ring-emerald-700'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Opportunity for Front Office Coordinator"
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-200 text-sm text-navy-900 placeholder:text-navy-400 bg-sand-50/50 focus:bg-white focus:border-emerald-700 focus:ring-emerald-700 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                    Message / Opportunity Details <span className="text-emerald-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding the open position, role responsibilities, company location, or interview scheduling..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-navy-400 bg-sand-50/50 focus:bg-white transition-all ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400' : 'border-sand-200 focus:border-emerald-700 focus:ring-emerald-700'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isComposing}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-sm font-bold shadow-md transition-all disabled:opacity-75"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>{isComposing ? 'Preparing Draft...' : 'Compose & Send Message'}</span>
                  </motion.button>
                  <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0 text-[11px] font-medium text-navy-500">
                    Launches your default email application with prefilled message.
                  </span>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
