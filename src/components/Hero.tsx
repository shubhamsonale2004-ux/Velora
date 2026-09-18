import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="portfolio-container pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-end">
        {/* Left Column: Headline, Role, Intro, Actions */}
        <div>
          <h1 className="font-serif font-semibold text-[1.95rem] xs:text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.1] tracking-tight text-[#1F2733]">
            {portfolioData.person.headline}
          </h1>

          <p className="text-[#B8791B] text-[1.05rem] mt-3 font-medium tracking-normal">
            {portfolioData.person.role}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-7 sm:mt-8">
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-md text-[0.95rem] font-medium bg-[#1F2733] text-[#FAFAF8] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F2733]"
            >
              Get in touch
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('about')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-md text-[0.95rem] font-medium border border-[#DEDACE] text-[#1F2733] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-[#F1EEE6]/60 transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8791B]"
            >
              About my approach
            </button>
          </div>
        </div>

        {/* Right Column: Hero Facts (responsive 2x2 grid on mobile phones, sleek vertical sidebar on computers) */}
        <dl className="border-t md:border-t-0 md:border-l border-[#DEDACE] pt-6 md:pt-0 md:pl-7 self-end grid grid-cols-2 gap-4 md:grid-cols-1 md:space-y-4">
          {portfolioData.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="text-xs uppercase tracking-wider text-[#5B6472] font-medium">
                {fact.label}
              </dt>
              <dd className="mt-0.5 text-sm sm:text-[1.05rem] text-[#1F2733] font-medium">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
};
