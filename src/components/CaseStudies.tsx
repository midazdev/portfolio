import React, { useState } from 'react';
import { Layers, Activity, CheckCircle2, Cpu, ArrowUpRight, ShieldCheck, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '../data/portfolioData';

export const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend & Distributed', 'Fullstack & Web', 'Performance & Architecture'];

  const filteredProjects = activeCategory === 'All' 
    ? PORTFOLIO_DATA.caseStudies 
    : PORTFOLIO_DATA.caseStudies.filter(p => p.category === activeCategory);

  return (
    <section id="case-studies" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Production Blueprint Archives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Sanitized Case Studies & Architecture
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              High-impact solutions engineered with Clean Architecture principles. Proprietary business terms replaced with generalized system design patterns.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectCaseStudy) => (
            <div
              key={project.id}
              className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>IP Sanitized</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-mono">
                  {project.tagline}
                </p>

                {/* Problem vs Solution Accordion / Box */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <span className="font-mono font-bold text-amber-400 block mb-1">
                      [Engineering Challenge]
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <span className="font-mono font-bold text-emerald-400 block mb-1">
                      [Architectural Solution]
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Quantifiable Impact Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                      <div className="text-sm sm:text-base font-extrabold font-mono text-cyan-300">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Architecture Highlights */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Core Design Highlights:
                  </span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags Bottom Strip */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono font-medium border border-slate-700/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
