import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle, Scale } from 'lucide-react';

export const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="portfolio-container py-16 md:py-20 border-t border-[#DEDACE]">
      <p className="text-[#B8791B] text-[0.85rem] font-medium tracking-wide uppercase">
        About
      </p>

      <h2 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-[2.1rem] mt-2 max-w-[32ch] text-[#1F2733] tracking-tight">
        {portfolioData.person.aboutHeadline}
      </h2>

      <div className="mt-6 text-[#5B6472] text-[1.05rem] max-w-[62ch] leading-relaxed space-y-4">
        <p className="text-[#1F2733] font-medium text-lg leading-relaxed">
          {portfolioData.person.aboutBody}
        </p>

        {portfolioData.person.extendedBio && (
          <div className="space-y-4 pt-1">
            <p>{portfolioData.person.extendedBio[0]}</p>
            {expanded && (
              <>
                <p>{portfolioData.person.extendedBio[1]}</p>
                <p>{portfolioData.person.extendedBio[2]}</p>
              </>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-medium text-[#B8791B] hover:text-[#935f15] transition-colors pt-2 cursor-pointer"
        >
          <span>{expanded ? 'Show less' : 'Read more about research principles'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* 3 Pillars of Rigor */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#DEDACE]/60">
        <div className="bg-[#F1EEE6]/50 p-5 rounded-md border border-[#DEDACE]/80">
          <div className="flex items-center gap-2 text-[#B8791B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Scale className="w-4 h-4" />
            <span>Integrity</span>
          </div>
          <h3 className="font-serif font-semibold text-[#1F2733] text-base mb-1.5">
            Empirical Grounding
          </h3>
          <p className="text-xs text-[#5B6472] leading-relaxed">
            Every statistic and recommendation is traced to validated sample sets, mitigating confirmation bias.
          </p>
        </div>

        <div className="bg-[#F1EEE6]/50 p-5 rounded-md border border-[#DEDACE]/80">
          <div className="flex items-center gap-2 text-[#B8791B] text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Clarity</span>
          </div>
          <h3 className="font-serif font-semibold text-[#1F2733] text-base mb-1.5">
            Unambiguous Synthesis
          </h3>
          <p className="text-xs text-[#5B6472] leading-relaxed">
            Translating complex numerical tables and behavioral transcripts into plain language and decision matrices.
          </p>
        </div>

        <div className="bg-[#F1EEE6]/50 p-5 rounded-md border border-[#DEDACE]/80">
          <div className="flex items-center gap-2 text-[#B8791B] text-xs font-semibold uppercase tracking-wider mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>Impact</span>
          </div>
          <h3 className="font-serif font-semibold text-[#1F2733] text-base mb-1.5">
            Actionable Roadmaps
          </h3>
          <p className="text-xs text-[#5B6472] leading-relaxed">
            Reports end with concrete next steps, prioritization frameworks, and verifiable success criteria.
          </p>
        </div>
      </div>
    </section>
  );
};
