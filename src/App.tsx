import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { DemoReport } from './components/DemoReport';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        const elem = document.querySelector(anchor.hash);
        if (elem) {
          e.preventDefault();
          elem.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Full-Screen Loading Screen: Rabbit vs. Turtle Race */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Website Content (Reveals smoothly) */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar onReplayRace={() => setIsLoading(true)} />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <DemoReport />
          <Pricing />
          <Contact />
        </main>
        <Footer onReplayRace={() => setIsLoading(true)} />
      </div>
    </div>
  );
}
