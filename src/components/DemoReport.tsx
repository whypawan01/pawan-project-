import React, { useState, useRef, useCallback } from 'react';
import {
  Sparkles,
  Gauge,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Maximize2,
  Sliders,
  FileCode,
  ShieldCheck
} from 'lucide-react';

export const DemoReport: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="demo-report" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEMO AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the Difference FixAI Makes:{' '}
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              45 to 92 Score
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Drag the visual slider below to inspect the before and after telemetry of an audited e-commerce site.
          </p>

          {/* Quick preset buttons */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <button
              onClick={() => setSliderPosition(10)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                sliderPosition < 30
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Inspect Before (Score: 45)
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              50/50 Split View
            </button>
            <button
              onClick={() => setSliderPosition(90)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                sliderPosition > 70
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Inspect After FixAI (Score: 92)
            </button>
          </div>
        </div>

        {/* Main Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          id="before-after-slider-container"
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-950/40 select-none cursor-ew-resize"
        >
          {/* Top simulated browser bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between z-20 relative">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <div className="ml-3 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center space-x-2">
                <span className="text-cyan-400">https://</span>
                <span>client-store-sample.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Drag Slider Handle to Compare</span>
            </div>
          </div>

          {/* Dual Layer View Area */}
          <div className="relative min-h-[460px] sm:min-h-[480px]">
            {/* RIGHT / AFTER FIXAI LAYER (Full width behind) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a1220] to-slate-950 p-6 sm:p-10 flex flex-col justify-between">
              {/* After Badge & Score */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">SCORE</span>
                    <span className="text-3xl font-black text-emerald-300">92</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                        AFTER FIXAI AI OPTIMIZATION
                      </span>
                      <span className="text-xs text-emerald-400 font-semibold">Grade: A+</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Blazing fast rendering • 0 Console Errors • Perfect Core Web Vitals
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics Grid After */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                  <span className="text-xl font-bold text-emerald-300">0.9s</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 78% Faster</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <span className="text-[11px] text-slate-400 block font-medium">Blocking Time</span>
                  <span className="text-xl font-bold text-emerald-300">35ms</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ Clean Thread</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <span className="text-[11px] text-slate-400 block font-medium">Page Weight</span>
                  <span className="text-xl font-bold text-emerald-300">1.1 MB</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ Next-Gen WebP</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <span className="text-[11px] text-slate-400 block font-medium">Console Errors</span>
                  <span className="text-xl font-bold text-emerald-300">0</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 100% Fixed</span>
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-emerald-500/20 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Images WebP Compressed</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Async JS Loaded</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Schema.org Injected</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CDN Cache Active</span>
                </div>
              </div>
            </div>

            {/* LEFT / BEFORE LAYER (Clipped overlay based on sliderPosition) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#150a0e] to-slate-950 p-6 sm:p-10 flex flex-col justify-between border-r border-red-500/50"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[850px] sm:w-[980px]">
                {/* Before Badge & Score */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-[10px] font-bold text-red-400 uppercase">SCORE</span>
                      <span className="text-3xl font-black text-red-300">45</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-950 text-red-300 border border-red-500/40">
                          BEFORE AUDIT (ORIGINAL SITE)
                        </span>
                        <span className="text-xs text-red-400 font-semibold">Grade: Poor</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        High bounce rate • 18 Console Errors • Severe LCP delays
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid Before */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 max-w-4xl">
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                    <span className="text-xl font-bold text-red-300">4.2s</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Severe Delay</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Blocking Time</span>
                    <span className="text-xl font-bold text-red-300">850ms</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Unresponsive UI</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Page Weight</span>
                    <span className="text-xl font-bold text-red-300">5.2 MB</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Raw PNG Assets</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Console Errors</span>
                    <span className="text-xl font-bold text-red-300">18 Errors</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Broken Scripts</span>
                  </div>
                </div>

                {/* Problem flags */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-red-500/30 flex flex-wrap items-center gap-4 text-xs text-slate-400 max-w-4xl">
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Render-Blocking CSS</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Uncompressed Hero Media</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Missing Canonical Tags</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>No Cache-Control Headers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 bg-gradient-to-b from-cyan-400 via-white to-purple-400 h-full shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
              <div
                onMouseDown={handleMouseDown}
                className="pointer-events-auto absolute w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
              >
                <div className="flex space-x-0.5">
                  <div className="w-1 h-3 bg-cyan-400 rounded-full" />
                  <div className="w-1 h-3 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action beneath slider */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            Want these exact performance numbers on your website?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 mt-2"
          >
            <span>View our transparent $149 pricing plan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
