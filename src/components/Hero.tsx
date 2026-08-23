import React from 'react';
import { ArrowRight, Terminal, Layers, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-8 backdrop-blur-md shadow-lg shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{PORTFOLIO_DATA.profile.availability}</span>
        </div>

        {/* Main Title & Headline */}
        <div className="max-w-4xl">
          <div className="text-xs font-mono text-cyan-400 font-bold mb-3 tracking-wider uppercase flex items-center gap-2">
            <span className="w-6 h-[1px] bg-cyan-400 inline-block"></span>
            <span>Dato' Samuel F. • Founder & Principal Architect @ Midaz Dev</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">AI Governance</span> & High-Performance Web
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
            {PORTFOLIO_DATA.profile.tagline}{' '}
            <span className="text-slate-400">
              Specialized in <strong className="text-white font-medium">Enterprise AI Governance</strong>, <strong className="text-white font-medium">Next.js</strong>, <strong className="text-white font-medium">Python FastAPI</strong>, <strong className="text-white font-medium">Astro</strong>, <strong className="text-white font-medium">Tailwind CSS</strong>, and resilient distributed architectures.
            </span>
          </p>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {PORTFOLIO_DATA.featuredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-200 hover:border-slate-700 transition-colors"
              >
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({skill.tag})</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Sanitized Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:bg-slate-800/80 text-sm font-medium border border-slate-700 hover:border-slate-600 transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Interactive System Explorer</span>
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-300 text-xs font-mono border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>$ lojin --cli</span>
            </a>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-panel">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* IP Safety Guarantee Disclaimer Pill */}
        <div className="mt-8 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Clean & IP-Safe Showcase:</strong> All featured architectural blueprints, system patterns, and code snippets are generalized reference implementations free of proprietary business secrets.
          </span>
        </div>

      </div>
    </section>
  );
};
