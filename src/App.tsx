import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { CaseStudies } from './components/CaseStudies';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { CodePlayground } from './components/CodePlayground';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <InteractiveTerminal />
        <CaseStudies />
        <ArchitectureExplorer />
        <CodePlayground />
        <SkillsMatrix />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
