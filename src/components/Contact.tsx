import React, { useState } from 'react';
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  PhoneCall,
  ArrowRight,
  Globe,
  User,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    message: '',
    servicePlan: 'Full Website Audit & Fix ($149)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.websiteUrl.trim()) {
      setErrorMessage('Please fill in your name, email, and website URL.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate API network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        websiteUrl: '',
        message: '',
        servicePlan: 'Full Website Audit & Fix ($149)',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Fix & Accelerate Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Website?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Submit your URL below. We will run our automated initial scan and get back with a customized remediation plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* WhatsApp Quick Chat Card */}
              <a
                href="https://wa.me/15550198372?text=Hello%20FixAI%20Team,%20I'd%20like%20to%20get%20my%20website%20audited%20and%20fixed."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="group p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Chat on WhatsApp
                      </h4>
                      <p className="text-xs text-slate-400">Instant direct response</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-950 border border-emerald-800 rounded-full">
                    Online
                  </span>
                </div>
              </a>

              {/* Direct Email Card */}
              <a
                href="mailto:contact@fixai.tech"
                id="contact-email-btn"
                className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Direct Email Support
                    </h4>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">contact@fixai.tech</p>
                    <p className="text-xs text-slate-400 mt-1">Average reply time: &lt; 20 mins</p>
                  </div>
                </div>
              </a>

              {/* Guarantee Pill */}
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Our Zero-Risk Commitments</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>100% Confidentiality & NDA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Staging Deployments Only</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Full 30-Day Performance Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Audit Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
              {submitted ? (
                <div className="py-12 px-4 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You! We've Received Your Request.
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! We'll get back within 24 hours with your preliminary AI scan report and execution plan.
                  </p>

                  <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-left max-w-md mx-auto space-y-2">
                    <div className="font-semibold text-cyan-400">Next Steps:</div>
                    <div>1. Automated initial DOM scan initiated.</div>
                    <div>2. Diagnostic engineer assigned.</div>
                    <div>3. Detailed report delivered to your inbox.</div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition"
                  >
                    Submit Another Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Request Your Website Audit & Fix
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Enter your details below to schedule your AI optimization run.
                  </p>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-slate-500" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Sarah Jenkins"
                          className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="w-4 h-4 text-slate-500" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@company.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Website URL to Audit & Fix <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Globe className="w-4 h-4 text-slate-500" />
                      </div>
                      <input
                        type="text"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Key Issues or Goals (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Slow checkout page, low mobile Google PageSpeed score, broken scripts after recent update..."
                      className="w-full px-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full mt-2 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 hover:from-cyan-300 hover:to-blue-200 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 disabled:opacity-60 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Queuing Audit Diagnostics...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Audit Request ($149 / site)</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    🔒 We protect your data. No spam, ever. 100% satisfaction guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
