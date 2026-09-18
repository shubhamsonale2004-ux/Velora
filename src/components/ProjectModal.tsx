import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { WorkProject } from '../types';

interface ProjectModalProps {
  project: WorkProject;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAFAF8] border border-[#DEDACE] shadow-xl rounded-md p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#5B6472] hover:text-[#1F2733] hover:bg-[#F1EEE6] rounded transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase font-medium tracking-wider text-[#B8791B]">
          {project.tag}
        </span>

        <h3 className="font-serif font-semibold text-2xl text-[#1F2733] mt-2 mb-1">
          {project.title}
        </h3>

        {project.clientContext && (
          <p className="text-xs text-[#5B6472] mb-6 font-medium">
            Engagement: {project.clientContext}
          </p>
        )}

        <div className="space-y-6 text-[#5B6472] text-[0.95rem] leading-relaxed">
          <div>
            <h4 className="font-serif font-semibold text-[#1F2733] text-base mb-2">
              The Challenge &amp; Scope
            </h4>
            <p>{project.fullOverview || project.description}</p>
          </div>

          {project.methods && (
            <div>
              <h4 className="font-serif font-semibold text-[#1F2733] text-base mb-2">
                Methodology &amp; Techniques
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.methods.map((method, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F1EEE6] border border-[#DEDACE] text-xs font-medium text-[#1F2733] rounded-sm"
                  >
                    <Layers className="w-3 h-3 text-[#B8791B]" />
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.outcome && (
            <div className="bg-[#F1EEE6]/60 p-4 border-l-2 border-[#B8791B] rounded-r-sm">
              <h4 className="font-serif font-semibold text-[#1F2733] text-sm mb-1">
                Measurable Impact
              </h4>
              <p className="text-xs text-[#1F2733] font-medium leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-5 border-t border-[#DEDACE] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium bg-[#1F2733] text-[#FAFAF8] rounded-md hover:bg-[#343e4f] transition-colors"
          >
            Close Note
          </button>
        </div>
      </div>
    </div>
  );
};
