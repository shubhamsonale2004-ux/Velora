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
    <header id="home" className="portfolio-container pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 items-end">
        {/* Left Column: Headline, Role, Intro, Actions */}
        <div>
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.08] tracking-tight text-[#1F2733]">
            {portfolioData.person.headline}
          </h1>

          <p className="text-[#B8791B] text-[1.05rem] mt-3.5 font-medium tracking-normal">
            {portfolioData.person.role}
          </p>

          <p className="text-[#5B6472] text-[1.05rem] max-w-[46ch] mt-4 leading-relaxed font-normal">
            {portfolioData.person.intro}
          </p>

          <div className="flex items-center gap-3.5 mt-8 flex-wrap">
            <button
              type="button"
              onClick={() => handleScrollTo('work')}
              className="inline-block px-6 py-3 rounded-md text-[0.95rem] font-medium bg-[#1F2733] text-[#FAFAF8] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer shadow-xs"
            >
              View my work
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="inline-block px-6 py-3 rounded-md text-[0.95rem] font-medium border border-[#DEDACE] text-[#1F2733] hover:-translate-y-0.5 hover:bg-[#F1EEE6]/60 transition-all duration-150 cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Right Column: Hero Facts */}
        <dl className="border-t md:border-t-0 md:border-l border-[#DEDACE] pt-6 md:pt-0 md:pl-7 self-end space-y-4">
          {portfolioData.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs uppercase tracking-wider text-[#5B6472] font-medium">
                {fact.label}
              </dt>
              <dd className="mt-0.5 text-[1.05rem] text-[#1F2733] font-medium">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
};
