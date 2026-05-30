import { heroImage } from "../../services/cloudinary";
import { ChevronRight } from "lucide-react";

function Hero() {
  return (
    <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
        <div className="flex justify-center md:justify-end">
          <div className="w-72 sm:w-80 md:w-full md:max-w-sm lg:max-w-md aspect-square overflow-hidden rounded-full border-4 border-rose-100 bg-rose-50 shadow-2xl shadow-rose-100/60">
            <img
              src={heroImage("Ig-avatar_e9aneh")}
              alt="Portfolio profile portrait"
              className="h-full w-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-rose-400 text-lg italic mb-3">
            Glad you're here — I'm
          </p>
          <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-400 to-red-500">
            Iglesia
          </span>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tighter leading-[0.9] uppercase text-zinc-900">
            a Front-end Developer
          </h1>
          <div className="mb-6 flex items-center justify-center gap-2 text-2xl md:text-4xl font-light tracking-tight text-zinc-700 uppercase md:justify-start">
            <span>based in Denmark</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
              alt="Denmark flag"
              className="w-5 h-auto"
            />
          </div>
          <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
            I build modern and user-friendly web applications with React,
            Next.js, TypeScript, JavaScript, and responsive design, with
            additional experience in backend development, APIs, and SQL. I enjoy
            creating clean and interactive digital experiences while
            continuously growing my full-stack development skills through
            hands-on projects and collaboration.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="connect-cta px-10 py-4 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              Let's Connect <ChevronRight size={18} />
            </a>
            <a
              href="#projects"
              className="px-10 py-4 border border-zinc-200 text-zinc-600 rounded-full font-light hover:border-rose-300 hover:text-rose-500 transition-all"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
