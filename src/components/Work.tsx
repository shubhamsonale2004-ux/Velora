import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { WorkProject } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  return (
    <section id="work" className="portfolio-container py-16 md:py-20 border-t border-[#DEDACE]">
      <p className="text-[#B8791B] text-[0.85rem] font-medium tracking-wide uppercase">
        Selected work
      </p>

      <h2 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-[2.1rem] mt-2 max-w-[32ch] text-[#1F2733] tracking-tight">
        Recent projects
      </h2>

      {/* Work List matching user CSS (.work-list and .work-item) */}
      <div className="mt-9 flex flex-col">
        {portfolioData.projects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 py-7 border-t border-[#DEDACE] last:border-b hover:bg-[#F1EEE6]/30 px-2 rounded-sm transition-colors cursor-pointer"
          >
            <div>
              <span className="text-xs font-medium text-[#B8791B] tracking-wide block mb-1">
                {project.tag}
              </span>
              <h3 className="font-serif font-semibold text-[#1F2733] text-[1.18rem] group-hover:text-[#B8791B] transition-colors leading-snug">
                {project.title}
              </h3>
              {project.clientContext && (
                <span className="text-xs text-[#5B6472] mt-1 block">
                  {project.clientContext}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-[#5B6472] text-[0.95rem] leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex items-center justify-between pt-2">
                {project.outcome && (
                  <span className="text-xs font-medium text-[#1F2733] bg-[#F1EEE6] px-2.5 py-1 rounded-sm border border-[#DEDACE]/70">
                    <strong>Result:</strong> {project.outcome}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#B8791B] group-hover:translate-x-0.5 transition-transform ml-auto">
                  Case note <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Case Note Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
