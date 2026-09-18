import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { prefetchVelora } from '../App';

interface NavbarProps {
  activeSection: string;
  onOpenVelora: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenVelora }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-xs border-b border-[#DEDACE]/70 transition-colors">
      <div className="portfolio-container flex items-center justify-between py-4 md:py-5">
        {/* Author Name / Brand in Fraunces serif */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif font-semibold text-lg text-[#1F2733] tracking-tight hover:text-[#B8791B] transition-colors py-1 inline-flex items-center min-h-[44px]"
        >
          {portfolioData.person.fullName}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-[0.95rem]">
          {portfolioData.navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`py-2 transition-colors ${
                  isActive
                    ? 'text-[#1F2733] font-medium'
                    : 'text-[#5B6472] hover:text-[#1F2733]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Distinctive Velora pill button as defined in user's CSS */}
          <button
            type="button"
            onClick={onOpenVelora}
            onMouseEnter={prefetchVelora}
            onTouchStart={prefetchVelora}
            className="border border-[#1F2733] px-4 py-1.5 min-h-[38px] rounded-full text-[0.9rem] text-[#1F2733] font-medium hover:bg-[#1F2733] hover:text-[#FAFAF8] transition-all duration-150 inline-flex items-center gap-1.5 group cursor-pointer"
            title="Open Velora AI & Technology Intelligence publication"
          >
            <span>Velora</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile menu toggle with compliant 44px+ touch targets */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenVelora}
            onMouseEnter={prefetchVelora}
            onTouchStart={prefetchVelora}
            className="border border-[#1F2733] px-3.5 min-h-[44px] rounded-full text-xs font-medium text-[#1F2733] flex items-center justify-center active:bg-[#1F2733] active:text-[#FAFAF8] transition-colors"
          >
            Velora
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1F2733] rounded-md hover:bg-[#F1EEE6] active:bg-[#E7E2D6] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#DEDACE] px-6 py-4 space-y-1 shadow-xs animate-velora-reveal">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="min-h-[44px] flex items-center text-[#5B6472] hover:text-[#1F2733] active:text-[#B8791B] text-base font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#DEDACE]/80">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVelora();
              }}
              onMouseEnter={prefetchVelora}
              onTouchStart={prefetchVelora}
              className="w-full text-left min-h-[44px] text-[#B8791B] font-medium text-base flex items-center justify-between"
            >
              <span>Explore Velora Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
