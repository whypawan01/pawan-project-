import React, { useState } from 'react';
import {
  Send,
  Cpu,
  Wrench,
  FileCheck2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Submit Website',
      subtitle: 'Takes 60 seconds',
      icon: Send,
      gradient: 'from-cyan-500 to-blue-500',
      description:
        'Fill out our quick audit form with your website URL and any specific issues you are encountering (slow pages, drop in rankings, broken buttons).',
      bullets: [
        'No credit card required upfront for diagnostic scan',
        'Optional CMS access for one-click staging fixes',
        'Instant confirmation & queue allocation',
      ],
      tag: 'Step 1: Input',
    },
    {
      number: '02',
      title: 'AI Deep Scan',
      subtitle: 'Neural 120-Point Audit',
      icon: Cpu,
      gradient: 'from-blue-500 to-indigo-500',
      description:
        'Our proprietary AI crawling bots simulate thousands of real user requests, mobile device conditions, and network throttles to isolate every bottleneck.',
      bullets: [
        'Unearths render-blocking scripts and bloated CSS',
        'Tests Largest Contentful Paint (LCP) & Cumulative Layout Shift (CLS)',
        'Detects hidden console JavaScript errors & 404 links',
      ],
      tag: 'Step 2: Analysis',
    },
    {
      number: '03',
      title: 'Fix & Optimize Issues',
      subtitle: 'Automated + Verified Repair',
      icon: Wrench,
      gradient: 'from-purple-500 to-pink-500',
      description:
        'FixAI generates verified code patches, optimizes assets to modern WebP formats, fixes server cache headers, and remedies SEO schema tags.',
      bullets: [
        'Safe staging environment deployment first',
        'Zero downtime and zero broken design layouts',
        'Human senior engineers double-check every AI patch',
      ],
      tag: 'Step 3: Execution',
    },
    {
      number: '04',
      title: 'Receive Report & Handover',
      subtitle: 'Guaranteed 90+ Score Handover',
      icon: FileCheck2,
      gradient: 'from-emerald-500 to-teal-500',
      description:
        'You receive a comprehensive interactive Before vs. After report, live Google PageSpeed verification, and a 30-day performance retention warranty.',
      bullets: [
        'Detailed PDF & interactive audit dashboard',
        'Confirmed 90+ Google PageSpeed score',
        '30 days of automated health monitoring included',
      ],
      tag: 'Step 4: Completion',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-950/60 relative border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEAMLESS WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How FixAI Transforms Your Website in{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From initial submission to a blazing-fast, error-free website in less than 48 hours.
          </p>
        </div>

        {/* 4 Steps Grid & Interactive Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                id={`how-step-${idx + 1}`}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-6 sm:p-7 border backdrop-blur-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/40 -translate-y-1'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {/* Step number watermark in background */}
                <span className="absolute top-4 right-4 text-4xl font-black text-slate-800/40 select-none">
                  {step.number}
                </span>

                <div>
                  {/* Icon & Step Tag */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.gradient} flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        {step.tag}
                      </span>
                      <div className="text-xs text-slate-400 font-medium">{step.subtitle}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnaround Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900/80 to-purple-950/50 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Guaranteed Delivery in 48 Hours or Less
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Once submitted, our automated scanners and senior web developers get to work immediately.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition whitespace-nowrap shrink-0 shadow-lg shadow-cyan-400/20"
          >
            Start Your Audit Now
          </a>
        </div>
      </div>
    </section>
  );
};
