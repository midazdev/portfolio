import React from 'react';
import { Terminal, Shield, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#070b12] text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              SYSTEM STATUS: <strong className="text-emerald-400">OPERATIONAL</strong> (100% UPTIME)
            </span>
          </div>

          {/* Center text */}
          <div className="text-center text-slate-500 text-[11px]">
            Designed with Clean Architecture • Zero Confidential IP Disclosed
          </div>

          {/* Right copyright */}
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">midaz.dev</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
