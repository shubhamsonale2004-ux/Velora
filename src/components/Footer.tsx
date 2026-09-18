import React from 'react';
import { prefetchVelora } from '../App';

interface FooterProps {
  onOpenVelora: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVelora }) => {
  return (
    <footer className="portfolio-container py-8 sm:py-12 pb-safe border-t border-[#DEDACE] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#5B6472] text-[0.85rem]">
      <span className="text-center sm:text-left">&copy; 2026 Shubham Sonale. All rights reserved.</span>

      <div className="flex items-center gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-[#1F2733] transition-colors min-h-[44px] inline-flex items-center px-1 rounded focus-visible:ring-1 focus-visible:ring-[#B8791B]"
        >
          Back to top &uarr;
        </a>
        <button
          type="button"
          onClick={onOpenVelora}
          onMouseEnter={prefetchVelora}
          onTouchStart={prefetchVelora}
          className="hover:text-[#B8791B] font-medium transition-colors cursor-pointer min-h-[44px] inline-flex items-center gap-1 px-1 rounded focus-visible:ring-1 focus-visible:ring-[#B8791B]"
        >
          <span>Velora</span>
          <span>&rarr;</span>
        </button>
      </div>
    </footer>
  );
};
