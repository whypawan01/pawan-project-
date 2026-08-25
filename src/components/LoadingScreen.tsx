import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Trophy, Play } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [rabbitPos, setRabbitPos] = useState(10);
  const [turtlePos, setTurtlePos] = useState(5);
  const [rabbitAsleep, setRabbitAsleep] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4500; // 4.5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      setProgress(Math.round(t * 100));

      // Rabbit logic: starts very fast (0 to 70% in first 35% time), then slows and naps
      if (t < 0.35) {
        // Fast burst
        const rNorm = t / 0.35;
        setRabbitPos(10 + rNorm * 62); // reaches ~72%
        setRabbitAsleep(false);
      } else {
        // Asleep from 35% onward
        setRabbitPos(72);
        setRabbitAsleep(true);
      }

      // Turtle logic: steady constant pace from 5% to 92% (finish line)
      // At t >= 0.85, turtle passes rabbit (72%) and hits 92% at t=0.95
      const turt = 5 + t * 87;
      setTurtlePos(turt);

      if (turt >= 75 && !winner) {
        setWinner('turtle');
      }

      if (t >= 1) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, winner]);

  return (
    <div
      id="fixai-loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 bg-[#070a12] text-white transition-opacity duration-700 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient neon glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Skip */}
      <div className="w-full max-w-4xl flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Fix<span className="text-cyan-400">AI</span>
          </span>
        </div>

        <button
          id="skip-intro-btn"
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 300);
          }}
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition flex items-center space-x-1.5 cursor-pointer backdrop-blur-sm"
        >
          <span>Skip Intro</span>
          <Play className="w-3 h-3 fill-current" />
        </button>
      </div>

      {/* Center Animated Race Track */}
      <div className="w-full max-w-4xl my-auto py-8 z-10 flex flex-col items-center">
        {/* Race Banner Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI PERFORMANCE OPTIMIZATION ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            FixAI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Speed Race</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Analyzing latency bottlenecks and optimizing execution threads...
          </p>
        </div>

        {/* The Track Container */}
        <div className="w-full bg-slate-900/90 border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Track Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px)] bg-[size:40px] opacity-40 pointer-events-none" />

          {/* Finish Line Ribbon */}
          <div className="absolute top-0 bottom-0 right-[8%] w-4 flex flex-col items-center justify-between py-2 border-r-2 border-dashed border-cyan-400/80 z-0">
            <div className="bg-cyan-500 text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded text-slate-950 shadow-md">
              FINISH
            </div>
            <div className="w-full h-full flex flex-col justify-around opacity-40">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 rounded-xs mx-auto" />
              ))}
            </div>
          </div>

          {/* Lane 1: Rabbit (Fast start, then naps) */}
          <div className="relative h-20 mb-3 rounded-xl bg-slate-950/60 border border-slate-800/50 flex items-center px-4 overflow-hidden">
            <div className="absolute left-3 top-2 text-[10px] font-mono text-slate-500 flex items-center space-x-1">
              <span>LANE 01 // UNOPTIMIZED SITE (RABBIT)</span>
            </div>

            {/* Rabbit Character Container */}
            <div
              className="absolute transition-all duration-75 flex flex-col items-center"
              style={{ left: `${rabbitPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Zzz animation when asleep */}
              {rabbitAsleep && (
                <div className="flex items-center space-x-0.5 text-xs font-bold text-cyan-300 animate-bounce -mt-6">
                  <span className="text-sm">Z</span>
                  <span className="text-xs">z</span>
                  <span className="text-[10px]">z</span>
                  <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/40 px-1.5 py-0.2 rounded ml-1">
                    Bloated JS Crash
                  </span>
                </div>
              )}

              {/* Rabbit SVG Icon */}
              <div className="relative">
                <svg
                  className={`w-12 h-12 transition-transform ${rabbitAsleep ? 'opacity-80 rotate-12 scale-90' : 'scale-100 animate-pulse'}`}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Rabbit Body */}
                  <ellipse cx="28" cy="38" rx="16" ry="12" fill="#E2E8F0" />
                  {/* Rabbit Head */}
                  <circle cx="42" cy="28" r="10" fill="#CBD5E1" />
                  {/* Ears */}
                  <ellipse cx="44" cy="12" rx="3.5" ry="10" fill="#F43F5E" transform="rotate(10 44 12)" />
                  <ellipse cx="49" cy="14" rx="3" ry="9" fill="#FDA4AF" transform="rotate(25 49 14)" />
                  {/* Eye */}
                  {rabbitAsleep ? (
                    <path d="M42 27 L46 27" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <circle cx="44" cy="26" r="2" fill="#0F172A" />
                  )}
                  {/* Tail */}
                  <circle cx="12" cy="36" r="5" fill="#FFFFFF" />
                  {/* Feet */}
                  <ellipse cx="24" cy="48" rx="8" ry="3" fill="#94A3B8" />
                  <ellipse cx="36" cy="48" rx="6" ry="3" fill="#94A3B8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Lane 2: Turtle (FixAI Engine - Steady and passes to win) */}
          <div className="relative h-20 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/40 border border-cyan-800/40 flex items-center px-4 overflow-hidden">
            <div className="absolute left-3 top-2 text-[10px] font-mono text-cyan-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LANE 02 // FIXAI TURBO ENGINE (TURTLE)</span>
            </div>

            {/* Turtle Character Container */}
            <div
              className="absolute transition-all duration-75 flex flex-col items-center"
              style={{ left: `${turtlePos}%`, transform: 'translateX(-50%)' }}
            >
              {/* High score tag */}
              <div className="text-[11px] font-bold text-cyan-200 bg-cyan-500/20 border border-cyan-400/50 px-2 py-0.5 rounded-full mb-1 shadow-sm flex items-center space-x-1 whitespace-nowrap">
                <Zap className="w-3 h-3 text-cyan-300 fill-cyan-300" />
                <span>99 Speed Score</span>
              </div>

              {/* Turtle SVG with cyber armor/booster */}
              <div className="relative">
                <svg
                  className="w-12 h-12 animate-pulse"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cyber Shell */}
                  <ellipse cx="32" cy="34" rx="15" ry="12" fill="#0EA5E9" />
                  <path d="M22 34 Q32 24 42 34" stroke="#38BDF8" strokeWidth="2.5" />
                  <path d="M24 38 Q32 30 40 38" stroke="#38BDF8" strokeWidth="1.5" />
                  {/* Head with futuristic visor */}
                  <circle cx="48" cy="33" r="7" fill="#10B981" />
                  {/* Cyber Visor */}
                  <rect x="46" y="30" width="7" height="4" rx="2" fill="#06B6D4" />
                  {/* Legs */}
                  <ellipse cx="22" cy="44" rx="5" ry="3" fill="#059669" />
                  <ellipse cx="40" cy="44" rx="5" ry="3" fill="#059669" />
                  <circle cx="16" cy="36" r="3" fill="#059669" />
                  {/* Turbo Exhaust Flame */}
                  <path d="M16 34 L8 32 L13 36 L6 37 L14 40 L16 36 Z" fill="#F59E0B" />
                  <path d="M14 34 L10 33 L12 36 L8 37 L13 38 Z" fill="#EF4444" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* The Motto / Message */}
        <div className="mt-8 text-center max-w-lg">
          <div className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            “Slow and steady wins — but we fix fast.”
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Eliminating bloat, fixing console errors, and delivering blazing 90+ PageSpeed.
          </p>
        </div>

        {/* Progress Bar & Status */}
        <div className="w-full max-w-md mt-6">
          <div className="flex justify-between text-xs text-slate-400 font-mono mb-1.5">
            <span>CALIBRATING OPTIMIZER</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="w-full text-center text-xs text-slate-500 z-10">
        FixAI Automated Diagnostics • Loading Workspace...
      </div>
    </div>
  );
};
