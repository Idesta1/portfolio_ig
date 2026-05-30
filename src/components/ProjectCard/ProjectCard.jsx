import { Code, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

function ProjectCard() {
  return (
    <section id="projects" className="py-32 px-6 bg-rose-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
            <Code size={28} />
          </div>
          <div>
            <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">
              Projects
            </h2>
            <p className="text-zinc-400 text-sm mt-1 italic">
              Short project videos that show the work in motion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group flex h-full flex-col">
              <div className="aspect-4/3 overflow-hidden rounded-[2.5rem] bg-zinc-200 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-8">
                <h3 className="mb-4 text-2xl font-medium leading-tight text-zinc-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-8 text-lg font-light leading-relaxed text-zinc-500">
                  {project.desc}
                </p>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-3 border-b border-rose-200 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500 transition-colors hover:border-rose-500"
                  >
                    View
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ) : (
                  <span className="mt-auto text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-300">
                    Add live link
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
