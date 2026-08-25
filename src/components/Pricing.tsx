import React, { useState } from 'react';
import {
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Clock,
  RefreshCw,
  Award
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const inclusions = [
    'Full 120-Point AI Architecture & Code Audit',
    'PageSpeed & Core Web Vitals optimization to 90+',
    'WebP/AVIF Next-Gen Image Compression Pipeline',
    'Render-blocking JavaScript & CSS code deferral',
    'Console runtime error & broken link remediation',
    'Technical SEO schema markup & canonical tag fixes',
    'Safe Staging Environment testing before live deploy',
    'Detailed interactive PDF Before vs. After Report',
    '30 Days of continuous health monitoring & support',
    'Zero downtime guarantee with instant rollback safeguard',
  ];

  const faqs = [
    {
      q: 'Do you need our hosting or WordPress login credentials?',
      a: 'For full hands-off fix implementation, we can either work directly on your staging/production server via temporary delegated access, or provide copy-paste code patches & PRs for your development team to merge.',
    },
    {
      q: 'What if you cannot reach a 90+ PageSpeed score?',
      a: 'We offer an ironclad 100% money-back guarantee. If we fail to meaningfully boost your performance and reach the agreed 90+ target, you receive a full refund with no questions asked.',
    },
    {
      q: 'How fast will my website be fixed?',
      a: 'Standard turnaround time is within 48 hours from initial access grant. Complex custom enterprise applications usually take 3 to 4 days.',
    },
    {
      q: 'Will my website experience any downtime during fixes?',
      a: 'Zero downtime. All code optimizations, asset conversions, and script tweaks are staged and tested first, then deployed seamlessly.',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Simple Plan.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zero Hidden Fees.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything your website needs to load instantly and convert visitors into paying customers.
          </p>
        </div>

        {/* The Featured Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div
            id="featured-pricing-card"
            className="relative rounded-3xl bg-slate-900/90 border-2 border-cyan-500/50 p-8 sm:p-10 shadow-2xl shadow-cyan-950/60 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400"
          >
            {/* Top Popular Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>ALL-IN-ONE FIX & BOOST PACKAGE</span>
            </div>

            {/* Price Header */}
            <div className="text-center mt-3 pb-8 border-b border-slate-800">
              <h3 className="text-2xl font-bold text-white">Full Website Audit & Fix</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Complete performance repair, SEO remediation & speed overhaul
              </p>

              <div className="mt-6 flex items-baseline justify-center space-x-2">
                <span className="text-2xl font-bold text-slate-400">$</span>
                <span className="text-6xl font-extrabold text-white tracking-tight">149</span>
                <span className="text-slate-400 text-sm font-medium">/ per website</span>
              </div>
              <p className="text-xs font-medium text-cyan-400 mt-2">
                One-time investment • No recurring subscriptions
              </p>
            </div>

            {/* Inclusions List */}
            <div className="py-8 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                What's 100% Included:
              </span>
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href="#contact"
                id="pricing-start-now-btn"
                className="w-full py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 hover:from-cyan-300 hover:to-blue-200 shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-400/50 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Start Now — Boost Your Site</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Satisfaction or Full Refund Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini FAQ Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Have questions before getting started? We've got answers.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-semibold text-slate-200 hover:text-cyan-400 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
