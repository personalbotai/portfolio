import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Background Fade Effect */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
        <div className="h-full w-full" style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"}}>
          <div className="pointer-events-none w-full h-full bg-neutral-900/20"></div>
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
                    Hi, I'm Yehezkiel
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">
                    Android Engineer & Full Stack Developer. Building native apps, web products, and AI-powered tools.
                  </p>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="rounded-full p-[2px] w-24 h-24 md:w-32 md:h-32 border border-border bg-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
                      Y
                    </div>
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
                <p>
                  Android engineer with 6+ years of experience, focused on <strong>Jetpack Compose and modern Android</strong>. I also build full-stack apps with Next.js, Ktor, and PostgreSQL. Currently at Rakuten in Japan, working on AI-integrated tooling and native development. Outside of work, I enjoy films, learning to take pictures, and reading.
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
                
                {/* Rakuten */}
                <div className="relative w-full flex flex-col gap-1">
                  <div className="absolute w-3 h-3 bg-muted border border-border rounded-full -left-[1.95rem] top-1.5"></div>
                  <div className="flex items-center justify-between gap-2">
                    <a href="https://rakuten.co.jp" target="_blank" rel="noopener noreferrer" className="font-semibold leading-none hover:underline">
                      Rakuten
                    </a>
                    <time className="text-xs tabular-nums text-muted-foreground text-right flex-none">Oct 2025 – Present</time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Software Engineer Android</p>
                  <p className="text-xs text-muted-foreground/60 italic">Japan</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Lead on the Booking Native Project — migrating booking transactions from web to native, improving search performance, and refactoring the codebase for future scalability.
                  </p>
                </div>
                
                {/* Bytedance */}
                <div className="relative w-full flex flex-col gap-1">
                  <div className="absolute w-3 h-3 bg-muted border border-border rounded-full -left-[1.95rem] top-1.5"></div>
                  <div className="flex items-center justify-between gap-2">
                    <a href="https://bytedance.com" target="_blank" rel="noopener noreferrer" className="font-semibold leading-none hover:underline">
                      Bytedance
                    </a>
                    <time className="text-xs tabular-nums text-muted-foreground text-right flex-none">Dec 2023 – Sep 2025</time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Software Engineer Android</p>
                  <p className="text-xs text-muted-foreground/60 italic">Jakarta, Indonesia</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Led Lynx.js integration into Tokopedia in collaboration with the TikTok team. Became main PIC for Gecko hybrid pages. Integrated TikTok's Byte.io and BTM tracking systems achieving 99%+ GMV accuracy.
                  </p>
                </div>

                {/* Tokopedia */}
                <div className="relative w-full flex flex-col gap-1">
                  <div className="absolute w-3 h-3 bg-muted border border-border rounded-full -left-[1.95rem] top-1.5"></div>
                  <div className="flex items-center justify-between gap-2">
                    <a href="https://tokopedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold leading-none hover:underline">
                      Tokopedia
                    </a>
                    <time className="text-xs tabular-nums text-muted-foreground text-right flex-none">Mar 2019 – Dec 2023</time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Android Squad Lead → Sr. Software Engineer</p>
                  <p className="text-xs text-muted-foreground/60 italic">Jakarta, Indonesia</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Developed and owned the Product Detail Page — Tokopedia's most visited page. As Squad Lead, managed a cross-functional team of six and led the Jetpack Compose migration.
                  </p>
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
                    <div className="font-semibold leading-none">Duta Wacana Christian University</div>
                    <div className="font-sans text-sm text-muted-foreground">Bachelor's Degree of Informatics Engineering (GPA: 3.46)</div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    2015 - 2019
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
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="border border-border bg-primary z-10 rounded-xl px-4 py-1 mx-2">
                    <span className="text-primary-foreground text-sm font-medium">My Projects</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent"></div>
                </div>
                
                <div className="flex flex-col gap-y-3 items-center justify-center text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                  <p className="text-muted-foreground max-w-[600px] md:text-lg">
                    I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto mt-4">
                
                {/* Project Card */}
                <div className="flex flex-col border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-border/80 transition-all duration-200 bg-background">
                  <div className="w-full aspect-video bg-muted border-b border-border flex items-center justify-center text-muted-foreground text-sm font-medium">
                    [ FlixUI Demo Image ]
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-semibold tracking-tight mt-1 text-lg">FlixUI - Movie Explorer</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      A production-grade Netflix clone built with React and TMDB API. Features include seamless API integrations, custom local storage watchlist, grid-mode category filtering, and an integrated YouTube trailer full-screen player.
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md">React</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md">React Router</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md">TMDB API</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a href="https://personalbotai.github.io/netflix-clone" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 py-2 w-full">
                        Website
                      </a>
                      <a href="https://github.com/personalbotai/netflix-clone" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium border border-border bg-background hover:bg-muted text-foreground h-8 px-3 py-2 w-full">
                        Source
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
