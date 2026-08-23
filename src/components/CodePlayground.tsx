import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, CodeSnippet } from '../data/portfolioData';

export const CodePlayground: React.FC = () => {
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(PORTFOLIO_DATA.codeSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const selectedSnippet = PORTFOLIO_DATA.codeSnippets.find(s => s.id === selectedSnippetId) || PORTFOLIO_DATA.codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-showcase" className="py-24 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Code2 className="w-4 h-4" />
              <span>Idiomatic Engineering Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Production-Grade Code Showcase
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Inspect sanitized, high-standard patterns across FastAPI, Next.js, and Astro. Emphasizing type safety, dependency injection, and clean boundaries.
            </p>
          </div>

          {/* Snippet Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.codeSnippets.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => setSelectedSnippetId(snippet.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 border ${
                  selectedSnippetId === snippet.id
                    ? 'bg-slate-800 text-cyan-300 border-cyan-400/60 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{snippet.stackBadge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Code Viewer Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#0b1120] shadow-2xl overflow-hidden font-mono">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0e1629] border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-200 ml-2">
                {selectedSnippet.title}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Description banner */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/60 text-xs text-slate-400 font-sans flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{selectedSnippet.description}</span>
          </div>

          {/* Code Content */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm leading-relaxed text-slate-200 bg-[#090e1a]">
            <pre className="font-mono">
              <code>{selectedSnippet.code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
