import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Moon,
  Sun,
  Cpu,
  Wrench,
  LineChart,
  TrendingUp,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { veloraData } from '../data/portfolioData';
import { VeloraArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { SubscribeModal } from './SubscribeModal';
import { SearchModal } from './SearchModal';

interface VeloraViewProps {
  onBackToPortfolio: () => void;
}

export const VeloraView: React.FC<VeloraViewProps> = ({ onBackToPortfolio }) => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<VeloraArticle | null>(null);
  const [subscribeOpen, setSubscribeOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const filterOptions = ['ALL', 'AI', 'TECHNOLOGY', 'RESEARCH', 'FUTURE TECH'];

  const filteredArticles =
    activeFilter === 'ALL'
      ? veloraData.articles
      : veloraData.articles.filter((a) => a.tag === activeFilter);

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-500" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-sky-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-indigo-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? 'bg-[#0B0E17] text-[#ECEEF3]' : 'bg-[#FAFAF9] text-[#1E2530]'
      }`}
    >
      {/* Top Utility & Navigation Bar */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-[#0B0E17]/90 border-[#1E2333]'
            : 'bg-white/90 border-slate-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Left: Back to Shubham Sonale Portfolio link & Folded V Brand Logo */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onBackToPortfolio}
              className={`text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2 rounded ${
                isDark
                  ? 'text-[#B9BDCB] hover:text-white hover:bg-[#1A2033]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="Return to Shubham Sonale Portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>&larr; Shubham Sonale</span>
            </button>

            <div className="h-4 w-px bg-slate-400/20 hidden sm:block" />

            {/* Geometric Folded V Logo matching mockup */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                {/* Custom SVG Folded V Emblem */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 drop-shadow-sm"
                >
                  <path
                    d="M4 6L16 26L20 18L10 6H4Z"
                    fill="url(#velora-grad-1)"
                  />
                  <path
                    d="M28 6L16 26L20 18L24 10L28 6Z"
                    fill="url(#velora-grad-2)"
                    fillOpacity="0.85"
                  />
                  <defs>
                    <linearGradient
                      id="velora-grad-1"
                      x1="4"
                      y1="6"
                      x2="20"
                      y2="26"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient
                      id="velora-grad-2"
                      x1="28"
                      y1="6"
                      x2="16"
                      y2="26"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <span className="font-serif font-bold text-lg tracking-[0.18em] uppercase">
                VELORA
              </span>
            </div>
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-slate-400">
            <button
              onClick={() => scrollToSection('velora-hero')}
              className={`hover:text-white transition-colors ${
                isDark ? 'text-white' : 'text-slate-900 font-semibold'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('velora-insights')}
              className="hover:text-blue-500 transition-colors"
            >
              Articles
            </button>
            <button
              onClick={() => scrollToSection('velora-areas')}
              className="hover:text-blue-500 transition-colors"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection('velora-areas')}
              className="hover:text-blue-500 transition-colors"
            >
              Tools
            </button>
            <button
              onClick={onBackToPortfolio}
              className="hover:text-blue-500 transition-colors"
            >
              About
            </button>
          </nav>

          {/* Right Controls: Search, Theme Toggle, Subscribe */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-[#1A2033]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Search articles"
              title="Search insights"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'text-amber-400 hover:bg-[#1A2033]'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle dark/light theme"
              title={isDark ? 'Switch to Light Editorial' : 'Switch to Cosmic Dark'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setSubscribeOpen(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                isDark
                  ? 'border-slate-500 text-white hover:bg-white hover:text-[#0B0E17]'
                  : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Main Velora Hero */}
      <section
        id="velora-hero"
        className={`relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32 ${
          isDark
            ? 'bg-gradient-to-b from-[#0B0E17] via-[#0E1322] to-[#12172A]'
            : 'bg-gradient-to-b from-white via-blue-50/20 to-slate-50'
        }`}
      >
        {/* Cosmic Ambient Ring & Glow (as in dark version of screenshot) */}
        {isDark && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Celestial Horizon Arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] h-[360px] rounded-t-full border-t border-blue-500/30 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-70" />
            {/* Ambient Radial Flare */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-blue-600/15 via-violet-600/10 to-transparent blur-3xl" />
            {/* Horizon Sunrise Glow */}
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl animate-pulse-glow" />
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 animate-velora-reveal">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>AI &middot; TECHNOLOGY &middot; INTELLIGENCE</span>
          </div>

          {/* Headline with gradient word matching mockup */}
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
            Understanding what comes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              next.
            </span>
          </h1>

          <p
            className={`text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 ${
              isDark ? 'text-[#B9BDCB]' : 'text-slate-600'
            }`}
          >
            Research, insights and discoveries from the rapidly evolving world of AI and technology.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => scrollToSection('velora-insights')}
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Velora</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSubscribeOpen(true)}
              className={`px-6 py-3.5 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                isDark
                  ? 'border-[#2A2E3A] hover:border-slate-400 text-slate-300'
                  : 'border-slate-300 hover:border-slate-800 text-slate-700'
              }`}
            >
              Join Dispatch
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: Key areas we cover (Directly matching upper screenshot) */}
      <section
        id="velora-areas"
        className={`py-16 sm:py-20 border-y transition-colors ${
          isDark ? 'bg-[#0E121E] border-[#1C2234]' : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-500 mb-2">
              <span className="w-5 h-0.5 bg-blue-500 inline-block" />
              <span>EXPLORE VELORA</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-inherit tracking-tight">
              Key areas we cover
            </h2>

            <p
              className={`text-sm sm:text-base mt-2 leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              From breakthrough research to practical tools, we bring you the most important developments in AI and technology.
            </p>
          </div>

          {/* 4 Cards Grid as in mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {veloraData.keyAreas.map((area) => (
              <div
                key={area.id}
                onClick={() => {
                  if (area.id === 'ai-ml') setActiveFilter('AI');
                  else if (area.id === 'tools-products') setActiveFilter('TECHNOLOGY');
                  else if (area.id === 'research-analysis') setActiveFilter('RESEARCH');
                  else if (area.id === 'future-tech') setActiveFilter('FUTURE TECH');
                  scrollToSection('velora-insights');
                }}
                className={`p-6 rounded-xl border transition-all duration-200 group cursor-pointer hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#131826] border-[#22293E] hover:border-blue-500/50 hover:bg-[#181F33]'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md'
                }`}
              >
                {/* Circle Icon Badge matching screenshot */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    isDark ? 'bg-[#1C2338]' : 'bg-blue-100/70'
                  }`}
                >
                  {getAreaIcon(area.iconName)}
                </div>

                <h3 className="font-serif font-semibold text-base mb-2 group-hover:text-blue-500 transition-colors">
                  {area.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {area.description}
                </p>

                <div className="mt-4 pt-3 border-t border-inherit/40 flex items-center justify-between text-[11px] font-medium text-blue-500">
                  <span>View research</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Latest Insights / Articles (Matching lower screenshot) */}
      <section id="velora-insights" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Title & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-500 mb-2">
                <span className="w-5 h-0.5 bg-blue-500 inline-block" />
                <span>LATEST INSIGHTS</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight">
                Empirical Research &amp; Field Briefs
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setActiveFilter(opt)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    activeFilter === opt
                      ? 'bg-blue-600 text-white'
                      : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-[#1A2033]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`rounded-xl border overflow-hidden transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-[#131826] border-[#22293E] hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/30'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Article Card Visual Header with thematic glowing gradient */}
                  <div className="h-44 relative overflow-hidden bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                        {article.tag}
                      </span>
                      <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Abstract geometry element inside header */}
                    <div className="opacity-20 group-hover:opacity-40 transition-opacity absolute -right-6 -bottom-6 w-36 h-36 rounded-full border-4 border-blue-400/40" />

                    <div className="text-[11px] text-slate-300 font-medium z-10 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                      <span>&middot;</span>
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Article content info */}
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-lg sm:text-xl leading-snug mb-3 group-hover:text-blue-500 transition-colors">
                      {article.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read link */}
                <div className="px-6 pb-6 pt-2 border-t border-inherit/40 flex items-center justify-between text-xs font-semibold text-blue-500">
                  <span>Read full dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Dispatch Box */}
          <div
            className={`mt-16 p-8 sm:p-10 rounded-2xl border text-center relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-[#121829] to-[#1A1F36] border-[#252C44]'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
            }`}
          >
            <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-3">
              Research dispatches, straight to your inbox.
            </h3>
            <p
              className={`text-sm max-w-xl mx-auto mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Get notified when new field audits, benchmark analyses, and AI architecture breakdowns are published on Velora.
            </p>
            <button
              type="button"
              onClick={() => setSubscribeOpen(true)}
              className="px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 shadow-md transition-all"
            >
              Subscribe to Velora Briefing
            </button>
          </div>
        </div>
      </section>

      {/* Velora Footer */}
      <footer
        className={`py-12 border-t transition-colors ${
          isDark ? 'bg-[#080B12] border-[#181E2E] text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-base tracking-widest uppercase text-inherit">
              VELORA
            </span>
            <span>&middot;</span>
            <span>Curated by Shubham Sonale &copy; 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('velora-hero')}
              className="hover:text-inherit transition-colors"
            >
              Back to top ↑
            </button>
            <button
              type="button"
              onClick={onBackToPortfolio}
              className="text-blue-500 hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Shubham Sonale Portfolio</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          isDark={isDark}
        />
      )}

      {subscribeOpen && (
        <SubscribeModal onClose={() => setSubscribeOpen(false)} isDark={isDark} />
      )}

      {searchOpen && (
        <SearchModal
          articles={veloraData.articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
          onClose={() => setSearchOpen(false)}
          isDark={isDark}
        />
      )}
    </div>
  );
};
