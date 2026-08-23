import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: `⚡ Lojin Interactive Developer Shell v2.4.0 (x86_64-engine-linux)
Type 'help' to view available system commands or click suggested pills below.
Demonstrating Next.js, Python FastAPI, Astro, Tailwind CSS, & Distributed System Design.`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response = PORTFOLIO_DATA.terminalCommands[trimmed];

    if (!response) {
      if (trimmed === 'fastapi') {
        response = `[FastAPI Stack Details]\n• AsyncIO non-blocking event loop with Uvicorn clustering\n• Pydantic v2 type coercion and validation\n• Dependency Injection architecture for Database Sessions & Auth\n• Pytest integration with async client tests`;
      } else if (trimmed === 'nextjs') {
        response = `[Next.js Stack Details]\n• Next.js 15 App Router with React Server Components (RSC)\n• Server Actions with Zod validation & Optimistic UI\n• Edge Middleware for multi-tenant routing & geo-localization\n• Core Web Vitals score: 99+`;
      } else if (trimmed === 'astro') {
        response = `[Astro Stack Details]\n• Islands Architecture (Zero JS baseline)\n• Content Collections with Zod schema validation\n• Hybrid SSR/SSG compilation with sub-second page loads`;
      } else if (trimmed === 'tailwind') {
        response = `[Tailwind CSS Details]\n• Custom design tokens & fluid responsive typography\n• Zero runtime CSS overhead\n• Accessible dark/light mode with native color-scheme`;
      } else {
        response = `Command not recognized: '${trimmed}'. Type 'help' for a list of valid commands.`;
      }
    }

    setHistory(prev => [
      ...prev,
      {
        command: cmdStr,
        output: response,
        isError: !PORTFOLIO_DATA.terminalCommands[trimmed] && !['fastapi', 'nextjs', 'astro', 'tailwind'].includes(trimmed)
      }
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['help', 'about', 'skills', 'projects', 'architecture', 'fastapi', 'nextjs', 'astro', 'tailwind', 'contact', 'clear'];
      const match = available.find(c => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  const copyTerminalOutput = () => {
    const fullText = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickPills = ['help', 'skills', 'fastapi', 'nextjs', 'projects', 'architecture', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <TerminalIcon className="w-4 h-4" />
              <span>Interactive Developer Environment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Query System Capabilities via CLI
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Execute real-time commands or click suggested pills to inspect architecture standards, stack specifications, and case study overviews.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#0b1120] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0e1629] border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-mono">visitor@lojin-arch: ~ (interactive-zsh)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyTerminalOutput}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 text-xs transition-colors"
                title="Copy terminal session"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                type="button"
                onClick={() => setHistory([])}
                className="p-1 rounded bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="Clear screen"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalBodyRef}
            className="p-4 sm:p-6 min-h-[320px] max-h-[480px] overflow-y-auto space-y-4 font-mono leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-slate-500">➜</span>
                  <span className="text-emerald-400 font-semibold">visitor@lojin-arch</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300 font-bold">$ {item.command}</span>
                </div>
                <div className={`whitespace-pre-wrap pl-4 ${item.isError ? 'text-rose-400' : 'text-slate-300'}`}>
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Input Line */}
            <div className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="text-slate-500">➜</span>
              <span className="text-emerald-400 font-semibold">visitor@lojin-arch</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-300 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'skills', or 'fastapi'..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono placeholder:text-slate-600 caret-cyan-400"
                autoComplete="off"
                spellCheck="false"
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </div>

          {/* Quick Command Suggestion Bar */}
          <div className="px-4 py-3 bg-[#0e1629] border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Quick Run:
            </span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleCommand(pill);
                }}
                className="px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 text-xs font-mono border border-slate-700/60 transition-colors"
              >
                ${pill}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
