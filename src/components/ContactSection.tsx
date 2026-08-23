import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Sparkles, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-panel p-8 sm:p-12 lg:p-16 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build Something Resilient</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Ready to elevate your engineering architecture?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Open for high-impact backend engineering, Next.js / Astro fullstack development, performance optimization, and distributed systems consulting.
              </p>

              {/* Direct Email Action Box */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-mono border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard' : PORTFOLIO_DATA.profile.socials.email}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-6 flex items-center gap-4">
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column: Engineering Principles & Values */}
            <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Engineering Commitments
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">Clean Architecture & Modularity</strong>
                  Decoupled business logic from frameworks and databases for maximum testability.
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">Observability by Default</strong>
                  Structured logs, metrics tracing, and proactive health probes built from day one.
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">Zero-Downtime CI/CD</strong>
                  Automated test suites, containerized staging pipelines, and automated rollback triggers.
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All engagements follow strict NDA & IP privacy standards.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
