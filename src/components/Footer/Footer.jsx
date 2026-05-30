import { Mail, Monitor } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
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
        ></a>

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
  );
}

export default Footer;
