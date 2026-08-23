import React, { useState } from 'react';
import { Cpu, Server, Database, Globe, Zap, ArrowRight, ShieldAlert, CheckCircle, Radio } from 'lucide-react';
import { PORTFOLIO_DATA, ArchitectureNode } from '../data/portfolioData';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(PORTFOLIO_DATA.architectureTopology[1].id);

  const selectedNode = PORTFOLIO_DATA.architectureTopology.find(n => n.id === selectedNodeId) || PORTFOLIO_DATA.architectureTopology[0];

  return (
    <section id="architecture" className="py-24 bg-gradient-to-b from-[#090d16] via-[#0b1120] to-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Interactive System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Distributed End-to-End System Topology
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Click on any component node in the topology pipeline below to inspect its data flow, throughput capacity, and resilience guarantees.
          </p>
        </div>

        {/* Interactive Topology Visualizer Pipeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PORTFOLIO_DATA.architectureTopology.map((node, index) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 relative border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500">
                      STEP 0{index + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <h4 className={`text-xs font-bold font-mono transition-colors ${
                    isSelected ? 'text-cyan-300' : 'text-slate-200'
                  }`}>
                    {node.title.replace(/^\d+\.\s*/, '')}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono truncate">
                    {node.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Inspect</span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep-Dive Detail Card */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Cpu className="w-48 h-48 text-cyan-400" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left: General Overview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {selectedNode.title}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Stack: <strong className="text-white font-medium">{selectedNode.tech}</strong>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {selectedNode.role}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {selectedNode.details}
              </p>

              {/* Design Principles Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Stateless Horizontal Scalability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Graceful Degradation & Timeout Safeguards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Decoupled Clean Architecture Boundaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Trust Token Validation & Observability</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs Box */}
            <div className="space-y-3 bg-slate-900/90 p-5 rounded-xl border border-slate-800 font-mono">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">
                Operational Characteristics
              </span>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="text-[11px] text-slate-400">Target Throughput & Latency</div>
                <div className="text-sm font-bold text-cyan-300 mt-0.5">{selectedNode.throughput}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="text-[11px] text-slate-400">Failover & High-Availability</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">{selectedNode.resilience}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="text-[11px] text-slate-400">Primary Core Framework</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">{selectedNode.tech}</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
