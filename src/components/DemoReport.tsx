import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sliders,
  Columns,
  SplitSquareVertical,
  Activity,
  Layers
} from 'lucide-react';

export const DemoReport: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="demo-report" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE AUDIT COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the Difference FixAI Makes:{' '}
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              45 to 92 Score
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Compare the live telemetry of an audited e-commerce storefront before and after FixAI AI optimization.
          </p>

          {/* Quick preset & mode controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                id="btn-inspect-before"
                onClick={() => {
                  setViewMode('slider');
                  setSliderPosition(100);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'slider' && sliderPosition >= 98
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🔴 Full Before (45)
              </button>
              <button
                id="btn-split-slider"
                onClick={() => {
                  setViewMode('slider');
                  setSliderPosition(50);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1 ${
                  viewMode === 'slider' && sliderPosition > 5 && sliderPosition < 95
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>Split Slider</span>
              </button>
              <button
                id="btn-inspect-after"
                onClick={() => {
                  setViewMode('slider');
                  setSliderPosition(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'slider' && sliderPosition <= 2
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🟢 Full After (92)
              </button>
              <button
                id="btn-side-by-side"
                onClick={() => setViewMode(viewMode === 'sideBySide' ? 'slider' : 'sideBySide')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1 ${
                  viewMode === 'sideBySide'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Side-by-Side Mode */}
        {viewMode === 'sideBySide' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto animate-fadeIn">
            {/* BEFORE CARD */}
            <div className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-slate-950 via-[#180b0f] to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-red-950/20">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold font-mono tracking-wider text-red-400 uppercase">
                      BEFORE AUDIT // ORIGINAL SITE
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                    Grade: Poor
                  </span>
                </div>

                <div className="flex items-center space-x-4 my-6">
                  <div className="w-18 h-18 rounded-2xl bg-red-500/20 border border-red-500/40 flex flex-col items-center justify-center shadow-lg shrink-0">
                    <span className="text-[10px] font-bold text-red-400 uppercase">SCORE</span>
                    <span className="text-3xl font-black text-red-300">45</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Severe Performance Bottlenecks</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Uncompressed assets, 18 fatal script console errors, and high bounce rate.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/20">
                    <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                    <span className="text-xl font-bold text-red-300">4.2s</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Severe Delay</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/20">
                    <span className="text-[11px] text-slate-400 block font-medium">Total Blocking Time</span>
                    <span className="text-xl font-bold text-red-300">850ms</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Frozen Thread</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/20">
                    <span className="text-[11px] text-slate-400 block font-medium">Page Weight</span>
                    <span className="text-xl font-bold text-red-300">5.2 MB</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Raw PNG Assets</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-red-500/20">
                    <span className="text-[11px] text-slate-400 block font-medium">Console Errors</span>
                    <span className="text-xl font-bold text-red-300">18 Errors</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Broken Scripts</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-red-500/20 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5 text-red-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Render-Blocking CSS</span>
                </div>
                <div className="flex items-center space-x-1.5 text-red-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Uncompressed Hero Media</span>
                </div>
                <div className="flex items-center space-x-1.5 text-red-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Missing Cache Headers</span>
                </div>
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-950 via-[#071915] to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/30">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
                      AFTER FIXAI // AI OPTIMIZED
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Grade: A+ (Top 1%)
                  </span>
                </div>

                <div className="flex items-center space-x-4 my-6">
                  <div className="w-18 h-18 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center justify-center shadow-lg shrink-0">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">SCORE</span>
                    <span className="text-3xl font-black text-emerald-300">92</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Sub-Second Interactive Experience</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Zero console errors, WebP image compression, async script hydration.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                    <span className="text-xl font-bold text-emerald-300">0.9s</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 78% Faster</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Total Blocking Time</span>
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
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 100% Resolved</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-emerald-500/20 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>WebP Compressed</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Async JS Loaded</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>CDN Cache Active</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Interactive Precision Slider */
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            id="before-after-slider-container"
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-950/30 select-none touch-none cursor-ew-resize"
          >
            {/* Simulated Browser Address & Status Bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between z-30 relative select-none">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <div className="ml-2 sm:ml-3 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center space-x-1.5 truncate max-w-[200px] sm:max-w-none">
                  <span className="text-cyan-400">https://</span>
                  <span>client-store-sample.com</span>
                </div>
              </div>

              {/* Status Indicator Tabs */}
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="hidden md:inline-flex items-center space-x-1 text-slate-400">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Drag Handle to Compare</span>
                </span>
                <div className="flex items-center space-x-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  <span className={`text-[11px] font-bold ${sliderPosition > 50 ? 'text-red-400' : 'text-slate-500'}`}>
                    45
                  </span>
                  <span className="text-slate-600">/</span>
                  <span className={`text-[11px] font-bold ${sliderPosition < 50 ? 'text-emerald-400' : 'text-slate-500'}`}>
                    92
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison Stage Container */}
            <div className="relative min-h-[440px] sm:min-h-[460px] w-full overflow-hidden">
              {/* UNDER LAYER: AFTER FIXAI (Revealed on the Right side) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-[#091520] to-slate-950 p-6 sm:p-10 flex flex-col justify-between">
                {/* Header After */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center justify-center shadow-lg shrink-0">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">SCORE</span>
                      <span className="text-2xl sm:text-3xl font-black text-emerald-300">92</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
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
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-300">0.9s</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 78% Faster</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Blocking Time</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-300">35ms</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ Clean Thread</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Page Weight</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-300">1.1 MB</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ Next-Gen WebP</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Console Errors</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-300">0</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">⚡ 100% Fixed</span>
                  </div>
                </div>

                {/* Verified Checklist After */}
                <div className="bg-slate-950/80 rounded-xl p-3 sm:p-4 border border-emerald-500/20 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Images WebP Compressed</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Async JS Hydration</span>
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

              {/* TOP LAYER: BEFORE AUDIT (Clipped pixel-perfectly using clipPath) */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-[#180b0f] to-slate-950 p-6 sm:p-10 flex flex-col justify-between transition-none pointer-events-none"
                style={{
                  clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)`
                }}
              >
                {/* Header Before */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex flex-col items-center justify-center shadow-lg shrink-0">
                      <span className="text-[10px] font-bold text-red-400 uppercase">SCORE</span>
                      <span className="text-2xl sm:text-3xl font-black text-red-300">45</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Largest Paint (LCP)</span>
                    <span className="text-lg sm:text-xl font-bold text-red-300">4.2s</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Severe Delay</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Blocking Time</span>
                    <span className="text-lg sm:text-xl font-bold text-red-300">850ms</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Unresponsive UI</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Page Weight</span>
                    <span className="text-lg sm:text-xl font-bold text-red-300">5.2 MB</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Raw PNG Assets</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/90 border border-red-500/30">
                    <span className="text-[11px] text-slate-400 block font-medium">Console Errors</span>
                    <span className="text-lg sm:text-xl font-bold text-red-300">18 Errors</span>
                    <span className="text-[10px] text-red-400 block mt-0.5">⚠️ Broken Scripts</span>
                  </div>
                </div>

                {/* Problem flags Before */}
                <div className="bg-slate-950/80 rounded-xl p-3 sm:p-4 border border-red-500/30 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Render-Blocking CSS</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Uncompressed Media</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Missing Canonical Tags</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>No Cache Headers</span>
                  </div>
                </div>
              </div>

              {/* DRAGGABLE DIVIDER HANDLE & LINE */}
              <div
                className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-1 bg-gradient-to-b from-cyan-400 via-white to-purple-400 h-full shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
                <div className="pointer-events-auto absolute w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-2xl cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-3.5 bg-cyan-400 rounded-full" />
                    <div className="w-1 h-3.5 bg-cyan-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action beneath slider */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Ready to upgrade your website from poor performance to verified 90+ PageSpeed?
          </p>
          <a
            id="audit-plan-cta"
            href="#pricing"
            className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 mt-2 group"
          >
            <span>Get your website optimized with our $149 package</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
