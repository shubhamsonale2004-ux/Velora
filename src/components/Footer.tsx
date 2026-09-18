import React from 'react';

interface FooterProps {
  onOpenVelora: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVelora }) => {
  return (
    <footer className="portfolio-container py-8 sm:py-12 border-t border-[#DEDACE] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#5B6472] text-[0.85rem]">
      <span>&copy; 2026 Shubham Sonale. All rights reserved.</span>

      <div className="flex items-center gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-[#1F2733] transition-colors"
        >
          Back to top ↑
        </a>
        <button
          type="button"
          onClick={onOpenVelora}
          className="hover:text-[#B8791B] font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
        >
          <span>Velora</span>
          <span>→</span>
        </button>
      </div>
    </footer>
  );
};
