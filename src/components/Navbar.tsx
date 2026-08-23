import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Layers, Cpu, Mail, Github, Linkedin, Menu, X, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Case Studies', href: '#case-studies', icon: Layers },
    { name: 'Architecture', href: '#architecture', icon: Cpu },
    { name: 'Code Snippets', href: '#code-showcase', icon: Code2 },
    { name: 'Skills & Stack', href: '#skills', icon: Terminal },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
              <span className="font-mono font-black text-cyan-400 text-base tracking-tighter">M</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
              Dato' Samuel F. <span className="text-slate-500 font-normal">|</span> <span className="text-cyan-400 font-semibold">Midaz Dev</span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-wide">Founder • AI System & Governance</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="#terminal"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800/80 text-cyan-300 hover:bg-cyan-950/50 hover:text-cyan-200 border border-cyan-500/30 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI</span>
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-cyan-300 hover:bg-slate-800 transition-all border border-slate-700/50"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-all border border-slate-700/50"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#terminal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/40"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Interactive CLI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
