import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VeloraView } from './components/VeloraView';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'velora'>('portfolio');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle URL hash routing (#velora)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#velora') {
        setCurrentView('velora');
        document.title = 'Velora | AI, Technology, Intelligence';
      } else {
        setCurrentView('portfolio');
        document.title = 'Shubham Sonale | Research Writer & Analyst';
      }
    };

    handleHash(); // initial check
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll spy for portfolio sections
  useEffect(() => {
    if (currentView !== 'portfolio') return;

    const sections = ['home', 'about', 'services', 'work', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleOpenVelora = () => {
    window.location.hash = '#velora';
    setCurrentView('velora');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '';
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'velora') {
    return <VeloraView onBackToPortfolio={handleBackToPortfolio} />;
  }

  return (
    <div className="theme-portfolio min-h-screen flex flex-col font-sans bg-[#FAFAF8] text-[#1F2733] antialiased selection:bg-[#B8791B]/20 selection:text-[#B8791B]">
      {/* Editorial Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenVelora={handleOpenVelora}
      />

      {/* Main Portfolio Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>

      {/* Portfolio Footer */}
      <Footer onOpenVelora={handleOpenVelora} />
    </div>
  );
}
