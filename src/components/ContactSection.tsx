import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Phone, MapPin, Copy, Check, Send, PhoneCall, Sparkles, ArrowUpRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { contactInfo, personalDetails } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Form state for direct message composer
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

  const copyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    triggerConfetti();
    onShowToast(`Phone number copied: ${contactInfo.phone}`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const copyWhatsApp = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedWhatsApp(true);
    triggerConfetti();
    onShowToast(`WhatsApp number copied: ${contactInfo.phone}`);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
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
            Looking for a dedicated professional for front office operations, business support, administration, or customer-facing roles? Send a direct message or connect via WhatsApp and Phone.
          </p>
        </motion.div>

        {/* Contact Layout: Left Info & Right Send Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp, Phone, and Location Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Contact Card (Instant PM Highlight) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500/40 shadow-sm hover:border-emerald-500 transition-all duration-300 space-y-4 relative overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Instant PM
              </div>

              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <motion.button
                  onClick={copyWhatsApp}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-xl text-navy-600 hover:text-navy-950 hover:bg-sand-100 transition-colors text-xs font-semibold inline-flex items-center gap-1.5 border border-sand-200 shadow-2xs mr-16 sm:mr-0"
                  title="Copy WhatsApp number to clipboard"
                  aria-label="Copy WhatsApp number"
                >
                  {copiedWhatsApp ? (
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
                  WhatsApp Direct Chat
                </span>
                <a
                  href={personalDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg font-bold text-navy-950 hover:text-emerald-700 transition-colors mt-0.5"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </div>

              <motion.a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>Chat on WhatsApp (Direct PM)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Phone Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 border border-sand-300 text-xs font-bold shadow-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-800" />
                <span>Call Me Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Location & Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/90 rounded-2xl p-5 border border-sand-200 shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-3.5 text-navy-700">
                <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-navy-500 block">Based in</span>
                  <span className="text-sm font-bold text-navy-900">{contactInfo.location}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs text-navy-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Immediate Joining</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Open to Roles</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Send a Direct Message Form */}
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
                    Have an opportunity or interview inquiry? Fill out the details below:
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct Message</span>
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
                    placeholder="e.g. Front Office / Business Support Opportunity in Kochi"
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

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isComposing}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-sm font-bold shadow-md transition-all disabled:opacity-75"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>{isComposing ? 'Preparing Message...' : 'Send Direct Message'}</span>
                  </motion.button>
                  
                  <a
                    href={personalDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-sm font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span>Or Chat on WhatsApp</span>
                  </a>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
