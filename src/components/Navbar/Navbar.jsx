import { useState } from "react";
import { Menu, X, SunMedium, MoonStar } from "lucide-react";
import "./Navbar.css";

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
                {isDarkMode ? <MoonStar size={12} /> : <SunMedium size={12} />}
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
  );
}

export default Navbar;
