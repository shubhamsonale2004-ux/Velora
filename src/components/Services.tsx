import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="portfolio-container py-16 md:py-20 border-t border-[#DEDACE]">
      <p className="text-[#B8791B] text-[0.85rem] font-medium tracking-wide uppercase">
        Services
      </p>

      <h2 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-[2.1rem] mt-2 max-w-[32ch] text-[#1F2733] tracking-tight">
        What I can help with
      </h2>

      {/* Services Grid with 1px lines as specified in user's CSS */}
      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DEDACE] border border-[#DEDACE]">
        {portfolioData.services.map((service) => (
          <div
            key={service.id}
            className="bg-[#FAFAF8] p-7 flex flex-col justify-between hover:bg-[#FDFDFB] transition-colors"
          >
            <div>
              <h3 className="font-serif font-semibold text-[#1F2733] text-[1.18rem]">
                {service.title}
              </h3>

              <p className="mt-2.5 text-[#5B6472] text-[0.95rem] leading-relaxed">
                {service.description}
              </p>

              {service.deliverables && (
                <div className="mt-6 pt-5 border-t border-[#DEDACE]/60 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-[#B8791B] font-semibold">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 mt-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#5B6472] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B8791B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#DEDACE]/40">
              <span className="text-xs text-[#5B6472] italic">
                {service.deliverablesSummary}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
