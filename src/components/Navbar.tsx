import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ShieldCheck, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onReplayRace: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayRace }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Demo Report', href: '#demo-report' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="fixai-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="flex items-center space-x-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
              Fix<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span>
              <span className="ml-2 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded">
                PRO
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Replay race easter egg / animation button */}
          <button
            onClick={onReplayRace}
            title="Replay Rabbit vs Turtle Race Animation"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 transition flex items-center space-x-1.5 text-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">Race Intro</span>
          </button>

          <a
            href="#contact"
            id="nav-cta-audit"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Get Your Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onReplayRace}
            title="Replay intro"
            className="p-2 rounded-lg text-slate-400 bg-slate-800/60 border border-slate-700/60 text-xs"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#090e18]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25"
              >
                Get Your Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
