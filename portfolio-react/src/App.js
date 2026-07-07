import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Header / Nav */}
      <nav className="fixed w-full top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-white">Y<span className="text-emerald-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-emerald-500 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Yehezkiel.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-500 mb-8 tracking-tight">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-neutral-400 text-lg leading-relaxed mb-10">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-emerald-500 text-neutral-950 px-6 py-3 rounded font-medium hover:bg-emerald-400 transition-colors">
              Check out my work
            </a>
            <a href="https://github.com/personalbotai" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded font-medium hover:bg-neutral-800 transition-colors text-white">
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
            <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-emerald-500/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                React, Next.js, Vue, TypeScript, Tailwind CSS, Framer Motion, Redux, Zustand.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-emerald-500/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Backend</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Node.js, Express, Go (Golang), Python, PostgreSQL, MongoDB, Redis.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-emerald-500/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">DevOps & Tools</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Git, Docker, AWS, Vercel, GitHub Actions, Linux, Nginx.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-white">Some Things I've Built</h3>
          <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-20">
          {/* Project 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7 md:col-start-1 row-start-1 relative z-10 p-6 md:p-0 bg-neutral-900/90 md:bg-transparent rounded-lg">
              <p className="text-emerald-500 font-mono text-sm mb-2">Featured Project</p>
              <h4 className="text-2xl font-bold text-white mb-6">FlixUI - Movie Explorer</h4>
              <div className="md:bg-neutral-900 md:p-6 md:rounded-xl md:border border-neutral-800 md:shadow-xl mb-6">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  A production-grade Netflix clone built with React and TMDB API. Features include seamless API integrations, custom local storage watchlist, grid-mode category filtering, dynamic skeleton loading shimmers, and an integrated YouTube trailer full-screen player.
                </p>
              </div>
              <ul className="flex flex-wrap gap-4 font-mono text-xs text-neutral-400 mb-6">
                <li>React</li>
                <li>React Router</li>
                <li>Axios</li>
                <li>CSS Grid</li>
              </ul>
              <div className="flex gap-4">
                <a href="https://github.com/personalbotai/netflix-clone" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                  Code
                </a>
                <a href="https://personalbotai.github.io/netflix-clone" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                  Live Preview
                </a>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 row-start-1 opacity-20 md:opacity-100 transition-opacity hover:opacity-100 rounded-xl overflow-hidden border border-neutral-800">
              <div className="aspect-video bg-neutral-800 flex items-center justify-center text-neutral-600">
                 [ Project Image ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
        <p className="text-emerald-500 font-mono mb-4">03. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-10">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:hello@example.com" className="inline-block border border-emerald-500 text-emerald-500 px-8 py-4 rounded font-mono hover:bg-emerald-500/10 transition-colors">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm font-mono text-neutral-500">
        <p>Built with React & Tailwind CSS</p>
        <p className="mt-2">© {new Date().getFullYear()} Yehezkiel</p>
      </footer>
    </div>
  );
}

export default App;
