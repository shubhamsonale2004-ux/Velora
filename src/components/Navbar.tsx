import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
      <div className="portfolio-container flex items-center justify-between py-6">
        {/* Author Name / Brand in Fraunces serif */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif font-semibold text-lg text-[#1F2733] tracking-tight hover:text-[#B8791B] transition-colors"
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
                className={`transition-colors ${
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
            className="border border-[#1F2733] px-4 py-1.5 rounded-full text-[0.9rem] text-[#1F2733] font-medium hover:bg-[#1F2733] hover:text-[#FAFAF8] transition-all duration-150 inline-flex items-center gap-1.5 group cursor-pointer"
            title="Open Velora AI & Technology Intelligence publication"
          >
            <span>Velora</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onOpenVelora}
            className="border border-[#1F2733] px-3 py-1 rounded-full text-xs font-medium text-[#1F2733]"
          >
            Velora
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1F2733] rounded hover:bg-[#F1EEE6]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#DEDACE] px-6 py-4 space-y-3">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block py-1.5 text-[#5B6472] hover:text-[#1F2733] text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#DEDACE]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVelora();
              }}
              className="w-full text-left py-1.5 text-[#B8791B] font-medium text-sm flex items-center justify-between"
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
