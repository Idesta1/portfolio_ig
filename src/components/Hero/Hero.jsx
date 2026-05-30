import { heroImage } from "../../services/cloudinary";
import { ChevronRight, ChevronDown } from "lucide-react";
import denmarkFlag from "../../assets/icons/denmark-flag.svg";

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40 overflow-hidden">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
        {/* Profile image */}
        <div
          className="hero-fade-up flex justify-center md:justify-end"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="hero-image-ring w-52 sm:w-60 md:w-full md:max-w-xs lg:max-w-xs aspect-square overflow-hidden rounded-full border-4 border-rose-100 bg-rose-50 shadow-2xl shadow-rose-100/60">
            <img
              src={heroImage("portfolio_3_hjlqao.jpg")}
              alt="Portfolio profile portrait"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <p
            className="hero-fade-up text-rose-400 text-lg italic mb-3"
            style={{ animationDelay: "0.25s" }}
          >
            Glad you're here — I'm
          </p>
          <h1
            className="hero-fade-up mb-1"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-6xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-400 to-red-500">
              Iglesia
            </span>
            <span className="block text-xl md:text-3xl font-extralight tracking-tighter leading-[0.9] uppercase text-zinc-900 mt-3">
              a Front-end Developer
            </span>
          </h1>
          <div
            className="hero-fade-up mb-6 flex items-center justify-center gap-2 text-sm md:text-base font-light tracking-widest text-zinc-500 uppercase md:justify-start"
            style={{ animationDelay: "0.55s" }}
          >
            <span>based in Denmark</span>
            <img src={denmarkFlag} alt="Denmark flag" className="w-5 h-auto" />
          </div>
          <p
            className="hero-fade-up text-lg md:text-2xl text-zinc-500 font-light leading-relaxed mb-10 max-w-lg"
            style={{ animationDelay: "0.7s" }}
          >
            I build modern and user-friendly web applications with React,
            Next.js, TypeScript, JavaScript, and responsive design, with
            additional experience in backend development, APIs, and SQL. I enjoy
            creating clean and interactive digital experiences while
            continuously growing my full-stack development skills through
            hands-on projects and collaboration.
          </p>
          <div
            className="hero-fade-up flex flex-wrap justify-center md:justify-start gap-4"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#contact"
              className="connect-cta px-10 py-4 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              Let's Connect <ChevronRight size={18} aria-hidden="true" />
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#work"
          aria-label="Scroll to next section"
          className="hero-scroll-bounce flex flex-col items-center gap-1 text-zinc-400 hover:text-rose-400 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

export default Hero;
