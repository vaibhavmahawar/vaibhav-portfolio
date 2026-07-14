"use client";

import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const flagship = projects.find((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-outline-variant/10 py-stack-lg">
      <SectionHeading kicker="DEPLOYED_OPERATIONS" title="Flagship Projects" align="center" />

      <div className="mt-12 space-y-gutter">
        {flagship && (
          <Reveal>
            <ProjectCard project={flagship} featured />
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delayIndex={i}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
