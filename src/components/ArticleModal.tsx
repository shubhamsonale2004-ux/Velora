import React, { useEffect } from 'react';
import { X, Clock, Calendar, User, Bookmark, Share2, ArrowLeft } from 'lucide-react';
import { VeloraArticle } from '../types';

interface ArticleModalProps {
  article: VeloraArticle;
  onClose: () => void;
  isDark: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, isDark }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl rounded-xl border shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-[#121624] border-[#2A2E3A] text-[#ECEEF3]'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with back/close */}
        <div className="flex items-center justify-between pb-6 border-b border-inherit mb-6">
          <button
            type="button"
            onClick={onClose}
            className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded transition-colors ${
              isDark ? 'text-[#B9BDCB] hover:text-white bg-[#1A1F30]' : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded transition-colors ${
              isDark ? 'text-[#B9BDCB] hover:text-white hover:bg-[#1A1F30]' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tag & metadata */}
        <div className="flex items-center gap-3 text-xs mb-3">
          <span className="px-2.5 py-1 rounded font-semibold tracking-wider bg-blue-600 text-white text-[10px]">
            {article.tag}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif font-semibold text-2xl sm:text-3xl leading-tight mb-4">
          {article.title}
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed mb-6 font-normal italic ${
          isDark ? 'text-[#B9BDCB]' : 'text-slate-600'
        }`}>
          "{article.excerpt}"
        </p>

        {/* Author row */}
        <div className="flex items-center gap-3 py-3 border-y border-inherit mb-8">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold text-xs">
            SS
          </div>
          <div>
            <div className="text-xs font-semibold">By {article.author}</div>
            <div className="text-[11px] text-slate-400">Researcher &amp; Analyst &middot; Velora Intelligence</div>
          </div>
        </div>

        {/* Key Findings Callout */}
        <div className={`p-5 rounded-lg border mb-8 ${
          isDark ? 'bg-[#171C2E] border-blue-900/50' : 'bg-blue-50/70 border-blue-200'
        }`}>
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-3">
            Core Empirical Takeaways
          </h4>
          <ul className="space-y-2 text-sm">
            {article.keyFindings.map((finding, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className={`space-y-5 text-base leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-inherit flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Published on Velora &middot; AI, Technology, Intelligence
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 transition-opacity"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
