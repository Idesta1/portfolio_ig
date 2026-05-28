import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Code,
  Mail,
  ExternalLink,
  Menu,
  X,
  Monitor,
  ChevronRight,
  MoonStar,
  SunMedium,
} from "lucide-react";

// Workshop TODO:
// Replace "demo" with your own Cloudinary cloud name.
// You can find it in your Cloudinary dashboard.
const CLOUD_NAME = "dhtbqmkyd";

function heroImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
}

function cloudinaryImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
}

function cloudinaryVideo(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`;
}

function cloudinaryVideoPoster(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.jpg`;
}

const skills = [
  {
    id: "html5",
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "css3",
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: "javascript",
    name: "JAVASCRIPT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "react",
    name: "REACT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "nextjs",
    name: "NEXT.JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "git-github",
    name: "GIT & GITHUB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: "figma",
    name: "FIGMA DESIGN",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: "responsive-design",
    name: "RESPONSIVE DESIGN",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: "agile",
    name: "AGILE METHODOLOGIES",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
];

const projects = [
  {
    id: 1,
    title: "Weather App",
    desc: "A react weather application that fetches real-time data from a public API and displays current weather conditions and forecasts for any location.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/v1779901380/react_weather-app_gvxpp3.png",
    url: "https://weatherforecast-react-app-shecodes-hw.netlify.app/",
  },
  {
    id: 2,
    title: "Travel Vlog",
    desc: "A responsive travel vlog website built using HTML and CSS to showcase modern responsive web design skills. The project features a clean layout, mobile-friendly design, smooth navigation, and visually engaging travel section that adapt seamlessly across desktop,tablet and mobile devices.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/v1779901433/cophenhagen-vlog_oidvab.png",
    url: "https://travel-destination-cophenhagen.netlify.app/",
  },
  {
    id: 3,
    title: "Dictionary App",
    desc: "A mobile-first dictionary application built using React and API integration to showcase front-end development and data-fetching skills. The app allows users to search for word definitions, meanings, and pronunciations in real time through a clean, user-friendly interface optimization for all screen sizes.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/q_auto/f_auto/v1779901351/dictionary_app_jo9vzz.png",
    url: "https://shecode-dictionary-react-app.netlify.app/",
  },
  {
    id: 4,
    title: "Events Ticket App",
    desc: "An interactive events platform developed with React and API integration as a part of Hack Your Future Denmark curriculum. The app allows users to browse and search for upcoming events, view event details, and purchase tickets through a seamless and responsive user interface.The project is continuously being improved with additional features and enhancements.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/q_auto/f_auto/v1779901333/Events-app_afzfla.png",
    url: "https://mid-frontend-project-skeleton.vercel.app/",
  },
  {
    id: 5,
    title: "Galactica",
    desc: "Galactica is a responsive fictional space travel web application built with Next.js, typescript, and API integration. It is part of the Hack your Future curriculum and show case my skill in modern react and next.js development. The project features multiple page rendering, reusable components, and state management using react context, along with dynamic data handling and fully responsive  user interface.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/q_auto/f_auto/v1779901417/react_week_3_galactia_zsfx5t.png",
    url: "https://space-galactica-next-beryl.vercel.app/",
  },
  {
    id: 6,
    title: "Card Game",
    desc: "A full-stack matching card game developed as a collaborative team project to demonstrate my skills in full-stack development, version control, and teamwork using Github. The application features interactive game mechanics, SQL database for storing and managing game data and player progress, backend integration for handling game state, and responsive frontend experience. The project highlights both technical implementation and effective collaboration within a structured development workflow.",
    image:
      "https://res.cloudinary.com/dhtbqmkyd/image/upload/q_auto/f_auto/v1779901271/foundation_yu16u1.png",
    url: "https://github.com/Idesta1/FoundationGameProject",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "portfolio-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  return (
    <div
      className={`app-shell min-h-screen font-sans selection:bg-rose-100 ${
        isDarkMode ? "theme-dark" : "theme-light"
      }`}
    >
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="nav-code-badge relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-rose-100 bg-rose-50 font-semibold text-rose-500 shadow-sm">
              <span className="nav-code-glyph text-sm tracking-tight">
                &lt;/&gt;
              </span>
              <span className="nav-code-cursor" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-400 to-red-500">
              IGLESIA
            </span>
          </div>

          <div className="ml-auto hidden items-center gap-5 md:flex">
            <div className="flex gap-6 text-sm text-zinc-400 tracking-wide">
              <a href="#work" className="hover:text-zinc-900 transition-colors">
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-zinc-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-rose-500 transition-colors font-medium text-zinc-600"
              >
                Contact
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsDarkMode((currentMode) => !currentMode)}
              className="theme-toggle"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
              aria-pressed={isDarkMode}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  {isDarkMode ? (
                    <MoonStar size={12} />
                  ) : (
                    <SunMedium size={12} />
                  )}
                </span>
              </span>
              <span className="theme-toggle-label">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsDarkMode((currentMode) => !currentMode)}
              className="theme-toggle theme-toggle-mobile"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <MoonStar size={16} /> : <SunMedium size={16} />}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-zinc-600 bg-white border-b border-zinc-100">
            <a href="#work" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          <div className="flex justify-center md:justify-end">
            <div className="w-72 sm:w-80 md:w-full md:max-w-sm lg:max-w-md aspect-square overflow-hidden rounded-full border-4 border-rose-100 bg-rose-50 shadow-2xl shadow-rose-100/60">
              <img
                src={heroImage("Ig-avatar_e9aneh")}
                alt="Portfolio profile portrait"
                className="h-full w-full object-cover"
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
              additional experience in backend development, APIs, and SQL. I
              enjoy creating clean and interactive digital experiences while
              continuously growing my full-stack development skills through
              hands-on projects and collaboration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-10 py-4 bg-rose-400 text-white rounded-full font-semibold hover:bg-rose-500 transition-all hover:scale-105 flex items-center gap-2"
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
              <article key={`${skill.name}`} className="group relative">
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
              <article
                key={project.title}
                className="group flex h-full flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-zinc-200 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      <footer
        id="contact"
        className="footer-bloom relative overflow-hidden py-32 px-6 border-t border-rose-50 bg-gradient-to-b from-white to-amber-50/30"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-rose-50 border border-rose-100 rounded-[2.5rem] mb-12 flex items-center justify-center shadow-sm">
            <Mail size={32} className="text-rose-300" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 text-zinc-900 uppercase">
            Let's Connect!
          </h2>
          <p className="text-zinc-600 max-w-lg mb-12 font-normal text-lg leading-relaxed">
            I love meeting curious, creative people. Whether you want to
            collaborate, have a question, or just want to say hi — my inbox is
            always open.
          </p>
          <a
            href="mailto:iglesia25@gmail.com"
            className="text-2xl md:text-5xl text-zinc-500 hover:text-rose-500 transition-colors border-b-2 border-zinc-100 hover:border-rose-300 pb-4 mb-20 inline-block font-light tracking-tight"
          >
            hello@example.com
          </a>

          <div className="flex gap-8 mb-24 opacity-60 hover:opacity-100 transition-opacity">
            <a
              href="#"
              className="text-zinc-400 hover:text-rose-500 transition-colors"
              aria-label="Portfolio site"
            >
              <Monitor size={28} />
            </a>
          </div>

          <div className="w-full pt-16 border-t border-amber-50 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-[10px] font-medium tracking-[0.32em] uppercase">
            <p>Coded by Iglesia G. Desta © 2026</p>
            <div className="flex gap-12 text-zinc-600 font-medium">
              <a
                href="https://www.linkedin.com/in/iglesia-desta-"
                className="hover:text-rose-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                Resume
              </a>
              <a
                href="https://github.com/Idesta1"
                className="hover:text-rose-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
