import React, { useState } from 'react';
import { Mail, Check, Copy, Send, Github, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="portfolio-container py-16 md:py-20 border-t border-[#DEDACE]">
      <p className="text-[#B8791B] text-[0.85rem] font-medium tracking-wide uppercase">
        Contact
      </p>

      <h2 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-[2.1rem] mt-2 max-w-[32ch] text-[#1F2733] tracking-tight">
        {portfolioData.contact.heading}
      </h2>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-[#5B6472] text-[1.05rem] leading-relaxed">
              Have a research inquiry or want to discuss an analytical topic? Send a message or reach out directly.
            </p>

            {/* Direct contact links matching user CSS */}
            <div className="flex flex-col gap-4 items-start pt-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-block text-base sm:text-xl break-all sm:break-normal text-[#B8791B] border-b border-[#B8791B] hover:text-[#935f15] hover:border-[#935f15] transition-colors focus-visible:ring-1 focus-visible:ring-[#B8791B]"
                >
                  {portfolioData.contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#5B6472] hover:text-[#1F2733] active:bg-[#F1EEE6] rounded-md transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[#5B6472] border-b border-[#DEDACE] hover:text-[#1F2733] hover:border-[#1F2733] transition-colors break-all sm:break-normal min-h-[44px]"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>github.com/shubhamsonale2004-ux</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#DEDACE]/70 text-xs text-[#5B6472] space-y-2">
              <p>
                <strong className="text-[#1F2733]">Location:</strong> Remote / Global Availability
              </p>
              <p>
                <strong className="text-[#1F2733]">Response Time:</strong> Typically within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Inquiry Form */}
        <div className="lg:col-span-7 bg-[#F1EEE6]/40 p-6 sm:p-8 rounded-md border border-[#DEDACE]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-[#1F2733] mb-2">
                Message Received
              </h3>
              <p className="text-sm text-[#5B6472] max-w-sm mx-auto mb-6">
                Thank you for reaching out, {formData.name}. I’ll review your project scope and respond to <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                  });
                }}
                className="text-xs font-semibold text-[#B8791B] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif font-semibold text-lg text-[#1F2733]">
                Send a message
              </h3>

              {errorMsg && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5B6472] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#DEDACE] rounded text-[#1F2733] focus:outline-none focus:border-[#B8791B] focus:ring-1 focus:ring-[#B8791B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5B6472] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#DEDACE] rounded text-[#1F2733] focus:outline-none focus:border-[#B8791B] focus:ring-1 focus:ring-[#B8791B] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#5B6472] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Research Inquiry, Collaboration, or Question"
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#DEDACE] rounded text-[#1F2733] focus:outline-none focus:border-[#B8791B] focus:ring-1 focus:ring-[#B8791B] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#5B6472] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message or project question..."
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#DEDACE] rounded text-[#1F2733] focus:outline-none focus:border-[#B8791B] focus:ring-1 focus:ring-[#B8791B] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded text-sm font-medium bg-[#1F2733] text-[#FAFAF8] hover:bg-[#343e4f] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F2733]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending note...' : 'Send inquiry'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
