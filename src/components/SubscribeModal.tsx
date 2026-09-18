import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Sparkles } from 'lucide-react';

interface SubscribeModalProps {
  onClose: () => void;
  isDark: boolean;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ onClose, isDark }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md rounded-xl border p-6 sm:p-8 shadow-2xl ${
          isDark
            ? 'bg-[#121624] border-[#2A2E3A] text-[#ECEEF3]'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {subscribed ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-xl mb-2">
              Welcome to Velora
            </h3>
            <p className="text-xs text-slate-400 max-w-xs mx-auto mb-6">
              You're now subscribed to the Velora Intelligence Briefing with <strong>{email}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Intelligence Briefing</span>
            </div>

            <h3 className="font-serif font-semibold text-2xl mb-2">
              Stay ahead of what comes next.
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Receive rigorous, bi-weekly field dispatches analyzing emerging AI models, cognitive agent frameworks, and silicon architectures. Zero noise, high signal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address"
                  className={`w-full px-4 py-3 rounded-lg text-base sm:text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    isDark
                      ? 'bg-[#181D2E] border-[#2A2E3A] text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 min-h-[44px] rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                Join the Intelligence Network
              </button>
            </form>

            <p className="text-[11px] text-slate-500 text-center mt-4">
              Curated by Shubham Sonale &middot; No sponsored fluff &middot; Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
