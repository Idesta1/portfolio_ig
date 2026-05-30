import { Briefcase } from "lucide-react";
import { skills } from "../../data/skills";
import "./Skills.css";

function SkillsCard() {
  return (
    <section id="work" className="py-32 px-6 relative bg-amber-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
              <Briefcase size={14} /> My Journey
            </div>
            <h2 className="text-5xl md:text-6xl font-earthlight tracking-tight text-zinc-900 uppercase">
              Skills
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm text-lg font-light leading-snug">
            I have strong hands-on skills in front-end and full-stack
            development, with a focus on creating responsive and user-friendly
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill) => (
            <article key={skill.id} className="group relative">
              <div className="flex min-h-56 flex-col items-center justify-center rounded-[3rem] border border-zinc-100 bg-white p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-100">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-amber-50/70 ring-1 ring-amber-100 transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-[0.18em] text-zinc-800">
                    {skill.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCard;
