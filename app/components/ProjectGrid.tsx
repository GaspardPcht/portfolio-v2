'use client';

import dynamic from 'next/dynamic';

const Card = dynamic(() => import('./Cards'), { ssr: false });

interface Project {
  id: string;
  title: string;
  frontend: string;
  backend: string;
  functionalities: string;
  projetURL: string;
  backgroundImage: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="w-full max-w-[1200px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="transform transition-all duration-300 hover:-translate-y-1 max-w-[280px] mx-auto w-full"
          >
            <Card
              backgroundImage={project.backgroundImage}
              title={project.title}
              text={project.functionalities}
              genres={[
                ...project.frontend.split(", "),
                ...project.backend.split(", "),
              ]}
              href={project.projetURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 