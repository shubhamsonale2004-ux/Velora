import React, { useState, useEffect } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { VeloraArticle } from '../types';

interface SearchModalProps {
  articles: VeloraArticle[];
  onSelectArticle: (article: VeloraArticle) => void;
  onClose: () => void;
  isDark: boolean;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  articles,
  onSelectArticle,
  onClose,
  isDark,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.tag.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-xl rounded-xl border shadow-2xl p-5 sm:p-6 ${
          isDark
            ? 'bg-[#121624] border-[#2A2E3A] text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-inherit pb-4">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI, hardware, agents, research..."
            className="w-full bg-transparent focus:outline-none text-base placeholder-slate-400 min-h-[36px]"
          />
          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-slate-200 cursor-pointer rounded"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">
              No results found for "{query}".
            </p>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                  isDark ? 'hover:bg-[#1A2033]' : 'hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                    {art.tag}
                  </span>
                  <h4 className="text-sm font-medium mt-0.5">{art.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{art.excerpt}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
