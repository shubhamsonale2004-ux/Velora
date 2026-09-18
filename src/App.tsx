import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Code-split VeloraView to dramatically shrink initial page load bundle for desktop and mobile
const VeloraView = lazy(() =>
  import('./components/VeloraView').then((m) => ({ default: m.VeloraView }))
);

// Instant prefetch helper triggered on hover / touchstart of the Velora link
export const prefetchVelora = () => {
  import('./components/VeloraView');
};

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

  // Highly performant Scroll spy using requestAnimationFrame to prevent layout thrashing
  useEffect(() => {
    if (currentView !== 'portfolio') return;

    const sections = ['home', 'about', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
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

  return (
    <div className={currentView === 'velora' ? 'theme-velora min-h-screen' : 'theme-portfolio min-h-screen flex flex-col font-sans bg-[#FAFAF8] text-[#1F2733] antialiased selection:bg-[#B8791B]/20 selection:text-[#B8791B]'}>
      {currentView === 'velora' ? (
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#0F1119] text-[#ECEEF3] flex flex-col items-center justify-center p-6 text-center">
              <h2 className="font-serif text-3xl font-semibold text-[#ECEEF3] tracking-tight mb-2">
                Velora
              </h2>
              <p className="text-sm text-[#B9BDCB] max-w-sm mb-6">
                Loading intelligence publication...
              </p>
              <div className="w-7 h-7 border-2 border-[#2A2E3A] border-t-[#C9A768] rounded-full animate-spin" />
            </div>
          }
        >
          <VeloraView onBackToPortfolio={handleBackToPortfolio} />
        </Suspense>
      ) : (
        <>
          {/* Editorial Navigation */}
          <Navbar
            activeSection={activeSection}
            onOpenVelora={handleOpenVelora}
          />

          {/* Main Portfolio Content with progressive content-visibility for rapid paint */}
          <main className="flex-1">
            <Hero />
            <div className="content-auto">
              <About />
            </div>
            <div className="content-auto">
              <Contact />
            </div>
          </main>

          {/* Portfolio Footer */}
          <Footer onOpenVelora={handleOpenVelora} />
        </>
      )}
    </div>
  );
}
