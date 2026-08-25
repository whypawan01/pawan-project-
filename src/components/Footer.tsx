import React from 'react';
import { Zap, ShieldCheck, Heart, ArrowUp, RefreshCw, Sparkles } from 'lucide-react';

interface FooterProps {
  onReplayRace: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayRace }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Fix<span className="text-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              FixAI is the industry leader in autonomous website auditing, speed optimization, and error repair. We help founders, e-commerce stores, and agencies achieve flawless 90+ PageSpeed scores.
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-500">
              <span className="flex items-center space-x-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Diagnostic Nodes Operational</span>
              </span>
              <span>•</span>
              <span>48h SLA Guaranteed</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Audit & Speed Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#demo-report" className="hover:text-cyan-400 transition">
                  Interactive Demo Report
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition">
                  Pricing ($149 Flat)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact & WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services & Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">120-Point AI Website Audit</li>
              <li className="text-slate-400">Core Web Vitals Remediation</li>
              <li className="text-slate-400">JavaScript Console Error Fixes</li>
              <li className="text-slate-400">Next-Gen WebP Compression</li>
              <li className="text-slate-400">Schema.org SEO Markup</li>
              <li>
                <button
                  onClick={onReplayRace}
                  className="text-cyan-400 hover:text-cyan-300 transition flex items-center space-x-1.5 text-xs font-semibold mt-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Replay Turtle & Rabbit Race</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} FixAI Inc. All rights reserved. Slow and steady wins — but we fix fast.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-slate-300 transition">
              Security
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center space-x-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
