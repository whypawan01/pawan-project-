import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Search,
  Gauge,
  Cpu,
  Layers,
  Code2,
  Clock
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [testUrl, setTestUrl] = useState('mystore.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanResult, setScanResult] = useState<null | {
    score: number;
    issuesFound: number;
    speedGain: string;
    criticalFixes: string[];
  }>(null);

  const handleQuickScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl.trim() || isScanning) return;

    setIsScanning(true);
    setScanResult(null);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1500);
    setTimeout(() => setScanStep(4), 2200);

    setTimeout(() => {
      setIsScanning(false);
      setScanStep(0);
      setScanResult({
        score: 48,
        issuesFound: 14,
        speedGain: '+3.4s Faster',
        criticalFixes: [
          'Render-blocking JS scripts (820ms penalty)',
          'Uncompressed WebP hero assets (2.4MB bloat)',
          '11 Broken internal redirects & meta tags',
          'Cumulative Layout Shift (CLS score: 0.38)',
        ],
      });
    }, 2800);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient gradient blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Announcement */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-md animate-float">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Next-Gen Autonomous AI Web Repair Engine</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]">
            We Find & Fix Website Errors{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Audit, repair, and boost your website's performance — <span className="text-white font-semibold">done for you</span>. No technical headaches, no code changes required on your part.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              id="hero-cta-get-audit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 hover:from-cyan-300 hover:to-blue-200 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>Get Your Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#demo-report"
              id="hero-cta-view-demo"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer backdrop-blur-sm"
            >
              <Gauge className="w-5 h-5 text-cyan-400" />
              <span>View Before/After Demo</span>
            </a>
          </div>

          {/* Trust Guarantees row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>90+ PageSpeed Guarantee</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>48-Hour Turnaround</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Zero Downtime Risk</span>
            </div>
          </div>
        </div>

        {/* Interactive Quick Scan Simulator & Live Dashboard Graphic */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Quick Scanner Bar */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl mb-8">
            <form onSubmit={handleQuickScan} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  placeholder="Enter your website URL (e.g. yourstore.com)"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isScanning}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md shadow-cyan-600/30 disabled:opacity-60 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
              >
                {isScanning ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-cyan-300" />
                    <span>Analyzing DOM & Assets...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run Instant AI Scan</span>
                  </>
                )}
              </button>
            </form>

            {/* Scan Steps Visualizer */}
            {isScanning && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono">
                <div className="flex items-center justify-between text-cyan-300 mb-2">
                  <span className="flex items-center space-x-2">
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>FixAI Diagnostic Protocol v4.2</span>
                  </span>
                  <span>{scanStep === 1 ? 'Inspecting DOM (25%)' : scanStep === 2 ? 'Measuring TTFB & Core Web Vitals (55%)' : scanStep === 3 ? 'Tracing JavaScript Console Leaks (85%)' : 'Compiling Patch Report (98%)'}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                    style={{ width: `${scanStep * 25}%` }}
                  />
                </div>
              </div>
            )}

            {/* Scan Result Mini-Report */}
            {scanResult && (
              <div className="mt-4 pt-4 border-t border-slate-800/80 animate-fadeIn">
                <div className="p-4 rounded-xl bg-slate-950/90 border border-red-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex flex-col items-center justify-center shrink-0">
                      <span className="text-red-400 text-xs font-bold uppercase">SCORE</span>
                      <span className="text-red-300 text-lg font-black">{scanResult.score}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center space-x-2">
                        <span>{testUrl} has {scanResult.issuesFound} critical bottlenecks</span>
                        <span className="px-2 py-0.5 text-[10px] font-semibold bg-red-950 text-red-300 border border-red-800 rounded">
                          Slow Rating
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Our AI can increase your speed to <strong className="text-emerald-400">92+</strong> and reduce load time by <strong className="text-cyan-300">{scanResult.speedGain}</strong>.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="w-full md:w-auto px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition shrink-0 text-center"
                  >
                    Fix All 14 Errors Now →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Live Mock Dashboard Graphic */}
          <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl p-5 sm:p-7 backdrop-blur-xl overflow-hidden">
            {/* Top window mock controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  fixai-live-telemetry // production-audit
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>AI REPAIR PIPELINE: OPERATIONAL</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Metric 1 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition">
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                  <span>PageSpeed Score</span>
                  <Gauge className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">96</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">
                    +51 pts
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center space-x-1">
                  <span className="line-through text-slate-500">45 Initial</span>
                  <span>→</span>
                  <span className="text-cyan-300 font-semibold">96 Optimized</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition">
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                  <span>Largest Contentful Paint</span>
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">0.82s</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">
                    -3.4s
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center space-x-1">
                  <span className="line-through text-slate-500">4.2s Before</span>
                  <span>→</span>
                  <span className="text-emerald-300 font-semibold">Good (LCP)</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition">
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                  <span>Errors Auto-Fixed</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/60">
                    18/18
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400">
                  <span className="text-emerald-300 font-medium">0 Console errors left</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition">
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1">
                  <span>SEO Health Score</span>
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">99/100</span>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/60">
                    Clean
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400">
                  <span className="text-purple-300 font-medium">Full Schema & Canonical</span>
                </div>
              </div>
            </div>

            {/* Live Terminal / Code Diagnostic Log Stream */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-800/60">
                <span>TERMINAL INSPECTION FEED</span>
                <span className="text-cyan-400">STATUS: ALL PASS</span>
              </div>
              <div className="flex items-start space-x-2 text-emerald-400">
                <span className="text-slate-600">[00:01.2]</span>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                <span>RESOLVED: 4 unminified script bundles converted to modern ESM modules with async deferral.</span>
              </div>
              <div className="flex items-start space-x-2 text-cyan-300">
                <span className="text-slate-600">[00:02.8]</span>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-cyan-400" />
                <span>OPTIMIZED: 28 oversized PNG/JPG assets converted to WebP (Saved 3.42 MB bandwidth).</span>
              </div>
              <div className="flex items-start space-x-2 text-purple-300">
                <span className="text-slate-600">[00:03.4]</span>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-purple-400" />
                <span>PATCHED: Fixed Cumulative Layout Shift (CLS) on dynamic hero banner and navigation drawer.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
