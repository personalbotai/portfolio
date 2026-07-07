import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50 sm:top-8 sm:right-8">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border text-muted-foreground hover:text-foreground focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          )}
        </button>
      </div>

      {/* Background Fade Effect */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
        <div className="h-full w-full" style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"}}>
          <div className="pointer-events-none w-full h-full bg-muted"></div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="relative z-10 py-12 pb-24 sm:py-24 px-6">
        <main className="min-h-screen flex flex-col gap-14 relative max-w-2xl mx-auto">
          
          {/* Hero Section */}
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                
                <div className="gap-2 flex flex-col order-2 md:order-1">
                  <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                    Hi, I'm Syamsul Bahri
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl font-medium">
                    Software Engineer • Full Stack Developer
                  </p>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="rounded-full p-[2px] w-24 h-24 md:w-32 md:h-32 border border-border bg-muted/50 flex items-center justify-center overflow-hidden transition-colors duration-300">
                    <img src="https://syamsulbahri.dev/assets/logo-pp-dbb1c1a4.jpg" alt="Syamsul Bahri" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about">
            <div className="flex min-h-0 flex-col gap-y-4">
              <div>
                <h2 className="text-xl font-bold border-l-2 border-foreground pl-3">About</h2>
              </div>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground">
                <p className="bg-primary/5 p-4 rounded-lg border border-border/50">
                  I have a passion for all things technology and design, from software engineering to UI/UX. Well-organised person, problem solver, independent employee with high attention to detail. I specialize in building modern, scalable web applications and enterprise systems.
                </p>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-6">
              <div>
                <h2 className="text-xl font-bold border-l-2 border-foreground pl-3">Work Experience</h2>
              </div>
              
              <div className="flex flex-col gap-8 w-full border-l border-border ml-2 pl-6 relative">
                
                {/* BNI */}
                <div className="relative w-full flex flex-col gap-1">
                  <div className="absolute w-3 h-3 bg-muted border border-border rounded-full -left-[1.95rem] top-1.5 transition-colors duration-300"></div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold leading-none">
                      PT Bank Negara Indonesia (Persero) Tbk (BNI)
                    </span>
                    <time className="text-xs tabular-nums text-muted-foreground text-right flex-none">Present</time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Software Engineer / IT Developer</p>
                  <p className="text-xs text-muted-foreground/60 italic">Indonesia</p>
                  <ul className="text-sm text-muted-foreground leading-relaxed mt-2 list-disc ml-4 space-y-1">
                    <li>Developing and maintaining core banking applications and financial systems.</li>
                    <li>Implementing secure and scalable enterprise solutions.</li>
                  </ul>
                </div>

                <div className="relative w-full flex flex-col gap-1">
                  <div className="absolute w-3 h-3 bg-muted border border-border rounded-full -left-[1.95rem] top-1.5 transition-colors duration-300"></div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold leading-none">
                      Pusat Al Quran Custom
                    </span>
                    <time className="text-xs tabular-nums text-muted-foreground text-right flex-none">Apr 2021 - Present</time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Online Shop Owner</p>
                  <p className="text-xs text-muted-foreground/60 italic">Tangerang, Indonesia</p>
                  <ul className="text-sm text-muted-foreground leading-relaxed mt-2 list-disc ml-4 space-y-1">
                    <li>Analyzed customer trends and provided insights to improve customer experience.</li>
                    <li>Established a reseller system and current business processes.</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education">
            <div className="flex min-h-0 flex-col gap-y-6">
              <div>
                <h2 className="text-xl font-bold border-l-2 border-foreground pl-3">Education</h2>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-x-4 justify-between">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="font-semibold leading-none">Universitas Negeri Makassar</div>
                    <div className="font-sans text-sm text-muted-foreground">Bachelor's Degree</div>
                  </div>
                </div>

                <div className="flex items-start gap-x-4 justify-between">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="font-semibold leading-none">Hacktiv8 Indonesia</div>
                    <div className="font-sans text-sm text-muted-foreground">Full Stack Web Development Bootcamp</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
              
              <div className="flex flex-col gap-y-4 items-center justify-center mt-6">
                <div className="flex items-center w-full">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300"></div>
                  <div className="border border-border bg-primary z-10 rounded-xl px-4 py-1 mx-2 transition-colors duration-300">
                    <span className="text-primary-foreground text-sm font-medium">My Projects</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent transition-colors duration-300"></div>
                </div>
                
                <div className="flex flex-col gap-y-3 items-center justify-center text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                  <p className="text-muted-foreground max-w-[600px] md:text-lg">
                    A selection of projects I've built using modern web technologies.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto mt-4">
                
                {/* Project 1 */}
                <div className="flex flex-col border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-border/80 transition-all duration-300 bg-background">
                  <div className="w-full aspect-video bg-muted border-b border-border flex items-center justify-center text-muted-foreground text-sm font-medium transition-colors duration-300 p-6 text-center">
                    [ CNN Indonesia Portal Clone ]
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="font-semibold tracking-tight mt-1 text-lg">CNN Clone / News Portal</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      News portal application covering Technology, Economy, Entertainment, and Sports, accessed via website and mobile using CNN Indonesia 3rd Party API.
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">ReactJS</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">React-Native</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">GraphQL</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">MongoDB</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Docker</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-border/80 transition-all duration-300 bg-background">
                  <div className="w-full aspect-video bg-muted border-b border-border flex items-center justify-center text-muted-foreground text-sm font-medium transition-colors duration-300 p-6 text-center">
                    [ E-commerce Platform ]
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="font-semibold tracking-tight mt-1 text-lg">Wedding E-commerce</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      E-commerce website specifically designed for wedding necessities with Microservices architecture and integrated payment gateway.
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Microservices</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">React.Js</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Redis</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Midtrans</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-border/80 transition-all duration-300 bg-background">
                  <div className="w-full aspect-video bg-muted border-b border-border flex items-center justify-center text-muted-foreground text-sm font-medium transition-colors duration-300 p-6 text-center">
                    [ IKEA Web Clone ]
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="font-semibold tracking-tight mt-1 text-lg">IKEA Web Clone</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      IKEA Web cloning application designed to aid in the understanding of new tech stacks and front-end development workflows.
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">VueJS</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">NodeJS</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Tailwind CSS</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">Firebase</span>
                    </div>
                  </div>
                </div>

                {/* Project 4 - FlixUI */}
                <div className="flex flex-col border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-border/80 transition-all duration-300 bg-background">
                  <div className="w-full aspect-video bg-muted border-b border-border flex items-center justify-center text-muted-foreground text-sm font-medium transition-colors duration-300 p-6 text-center">
                    [ FlixUI Demo Image ]
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="font-semibold tracking-tight mt-1 text-lg">FlixUI - Movie Explorer</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      A production-grade Netflix clone built with React and TMDB API. Features include seamless API integrations, custom local storage watchlist, grid-mode category filtering, and an integrated YouTube trailer full-screen player.
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">React</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">React Router</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md transition-colors duration-300">TMDB API</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a href="https://personalbotai.github.io/netflix-clone" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 py-2 w-full transition-colors duration-300">
                        Website
                      </a>
                      <a href="https://github.com/personalbotai/netflix-clone" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium border border-border bg-background hover:bg-muted text-foreground h-8 px-3 py-2 w-full transition-colors duration-300">
                        Source
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="pb-10 pt-20 border-t border-border mt-10">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground mb-4">Feel free to reach out for collaborations or just a friendly hello.</p>
              <div className="flex gap-4">
                <a href="https://github.com/personalbotai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted rounded-full">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://id.linkedin.com/in/aisyamsulbahri" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted rounded-full">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
