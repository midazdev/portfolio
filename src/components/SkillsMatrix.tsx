import React from 'react';
import { 
  Terminal, Zap, Database, Cpu, Layers, Globe, Rocket, Layout, Code2, Gauge, Box, GitBranch, Server, Activity, Wrench
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal,
  Zap,
  Database,
  Cpu,
  Layers,
  Globe,
  Rocket,
  Layout,
  Code2,
  Gauge,
  Box,
  GitBranch,
  Server,
  Activity,
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#090d16] via-[#0c1222] to-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering & Technology Matrix
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Hands-on expertise across backend concurrency, modern frontend frameworks, database optimization, and cloud infrastructure.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = ICON_MAP[skill.iconName] || Terminal;
                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-slate-100">
                              {skill.name}
                            </span>
                          </div>

                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            skill.level === 'Expert' 
                              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                              : skill.level === 'Advanced'
                              ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-400 font-mono leading-normal pl-8">
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/80">
                ✓ Validated in high-throughput production environments
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
