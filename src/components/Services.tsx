import React, { useState } from 'react';
import {
  Search,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCode,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Database
} from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'speed' | 'seo'>('audit');

  const services = [
    {
      id: 'audit',
      title: 'Full Website Audit',
      subtitle: 'Complete 120-Point AI Diagnostic',
      icon: Search,
      badge: 'Deep Inspection',
      accentColor: 'from-cyan-500 to-blue-600',
      glowColor: 'group-hover:border-cyan-500/50',
      description:
        'We run neural automated crawlers across every template, script, and API call to uncover invisible blockers, security vulnerabilities, and broken user journeys.',
      features: [
        'JavaScript console runtime error detection',
        'Dead link & broken 404 redirect identification',
        'Mobile UX & viewport responsiveness auditing',
        'Security headers & SSL configuration verification',
        'Accessibility (WCAG 2.1 AA) compliance checklist',
      ],
      impact: '100% visibility into issues holding back conversions.',
    },
    {
      id: 'speed',
      title: 'Speed & Core Web Vitals',
      subtitle: 'Guaranteed 90+ PageSpeed Score',
      icon: Zap,
      badge: 'Performance Boost',
      accentColor: 'from-blue-500 to-indigo-600',
      glowColor: 'group-hover:border-blue-500/50',
      description:
        'Slow sites bleed customers. We optimize your asset pipelines, defer non-critical JS/CSS, configure intelligent CDN caching, and slash load times to under 1 second.',
      features: [
        'Image compression & Next-Gen WebP/AVIF conversions',
        'JavaScript tree-shaking and render-blocking script deferral',
        'Time to First Byte (TTFB) & server response optimization',
        'Largest Contentful Paint (LCP) reduction to < 1.2s',
        'Elimination of Cumulative Layout Shift (CLS)',
      ],
      impact: 'Up to 3.8x faster page loads and lower bounce rates.',
    },
    {
      id: 'seo',
      title: 'SEO & Structural Fixes',
      subtitle: 'Rank Higher & Capture Organic Traffic',
      icon: TrendingUp,
      badge: 'Search Engine Growth',
      accentColor: 'from-purple-500 to-pink-600',
      glowColor: 'group-hover:border-purple-500/50',
      description:
        'Search engine crawlers penalize broken markup. We rectify metadata, schema markup, canonical tags, and mobile indexing so Google indexes your pages accurately.',
      features: [
        'Structured Schema.org JSON-LD generation',
        'Canonical tag & duplicate content mitigation',
        'Sitemap XML & robots.txt auto-regeneration',
        'OpenGraph & Twitter Card social meta tag fixing',
        'Heading tag hierarchy (H1-H6) semantic cleanup',
      ],
      impact: 'Higher search rankings and rich snippet eligibility.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED AI SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Website Needs to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Dominate
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don't just hand you a confusing PDF list of problems. We actually write the code, fix the errors, and verify the performance boost.
          </p>
        </div>

        {/* 3 Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between ${service.glowColor}`}
              >
                {/* Card Glow accent bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${service.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.accentColor} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mt-1 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-slate-800/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Included in Service:
                    </span>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action */}
                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4">
                    <div className="text-[11px] font-medium text-slate-400">
                      <strong className="text-emerald-400">Expected Result:</strong> {service.impact}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 group-hover:shadow-md"
                  >
                    <span>Request This Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
