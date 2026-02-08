
import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import SectionHeader from './components/SectionHeader';
import AIChatbox from './components/AIChatbox';
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="relative min-h-screen transition-colors duration-500 selection:bg-primary-500/30">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 dark:bg-primary-500/15 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Futuristic Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass rounded-full px-6 py-3 flex justify-between items-center shadow-2xl border border-white/20 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg -rotate-3 transition-transform hover:rotate-12 cursor-pointer">X</div>
            <span className="font-display font-bold text-lg tracking-tight dark:text-white hidden sm:block">XUB.DEV</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-widest uppercase">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <a 
              href="#contact" 
              className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section with Refined Video */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="bg-video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="bg-video"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-in-blue-9141-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/80 to-slate-50 dark:from-dark-950/20 dark:via-dark-950/80 dark:to-dark-950"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.2em] text-primary-600 uppercase glass rounded-full border-primary-500/20 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 tracking-tighter leading-[0.9] dark:text-white uppercase">
              Creating <br/> <span className="text-gradient">Premium</span> Digital <br/> Experiences
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-medium tracking-tight leading-relaxed">
              Senior Frontend Engineer crafting high-performance, accessible, and AI-powered web applications that users love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#projects" className="group px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black transition-all shadow-2xl hover:scale-105 uppercase tracking-widest text-xs flex items-center gap-3">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="#contact" className="px-10 py-5 glass text-slate-900 dark:text-white rounded-2xl font-black transition-all hover:scale-105 uppercase tracking-widest text-xs border-white/40 shadow-xl">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* Improved Stack Section - User Friendly & Attractive */}
        <section id="skills" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader 
              title="My Expertise" 
              subtitle="A deep dive into the technologies I use to build world-class products."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[280px]">
              {SKILLS.map((skill, idx) => (
                <div 
                  key={idx}
                  className={`bento-card group p-10 glass rounded-[2.5rem] border-2 border-transparent transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] ${idx === 0 || idx === 5 ? 'lg:col-span-2' : ''}`}
                >
                  {/* Background Icon Effect */}
                  <div className="bento-bg-icon absolute -right-8 -bottom-8 text-[12rem] opacity-[0.03] dark:opacity-[0.06] transition-all duration-700 pointer-events-none group-hover:rotate-12 group-hover:scale-125 group-hover:text-primary-500">
                    {skill.icon}
                  </div>
                  
                  <div className="relative">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 origin-left">
                      {skill.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <span className="px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-slate-100/50 dark:bg-dark-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Showcasing high-impact work ranging from data dashboards to crypto wallets."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {PROJECTS.map((project) => (
                <div 
                  key={project.id}
                  className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 bg-slate-900"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-90"></div>
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-xl text-[10px] font-bold tracking-widest text-white rounded-full border border-white/10 group-hover:border-primary-500/50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-300 mb-8 max-w-lg line-clamp-2 text-base font-light leading-relaxed">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-xs group/link">
                      View Live Project
                      <span className="w-12 h-px bg-white/40 group-hover/link:w-16 group-hover/link:bg-primary-500 transition-all"></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-white/20">
               {/* Left: Artistic Visual */}
               <div className="lg:w-1/2 relative min-h-[500px] overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Contact Background" 
                  className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse transition-all duration-[10s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-purple-800/90 mix-blend-overlay"></div>
                 <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-between text-white">
                    <div>
                      <div className="w-16 h-1.5 bg-white/40 mb-10 rounded-full"></div>
                      <h2 className="text-5xl lg:text-6xl font-display font-black mb-6 tracking-tighter uppercase leading-none">Let's <br/> Collaborate</h2>
                    </div>
                    <div className="space-y-10">
                      <p className="text-xl font-medium opacity-90 leading-relaxed max-w-sm">
                        I'm always excited to hear about new ideas and ambitious projects. Send me a message and let's build something amazing together.
                      </p>
                      <div className="flex flex-col gap-5 text-xs font-bold tracking-widest uppercase">
                        <a href="mailto:hello@xub.dev" className="flex items-center gap-4 group cursor-pointer hover:text-primary-200 transition-colors">
                          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-all shadow-lg">✉</span>
                          HELLO@XUB.DEV
                        </a>
                        <a href="#" className="flex items-center gap-4 group cursor-pointer hover:text-primary-200 transition-colors">
                          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-all shadow-lg">LN</span>
                          LINKEDIN.COM/IN/XUB
                        </a>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Right: Normal Form */}
               <div className="lg:w-1/2 p-12 lg:p-20 bg-white dark:bg-dark-900/40 relative">
                  <div className="mb-12">
                    <h3 className="text-3xl font-display font-black dark:text-white uppercase mb-4 tracking-tight">Send Message</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Responses usually within 24 hours.</p>
                  </div>
                  <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-100 dark:border-dark-700 pb-4 outline-none focus:border-primary-600 transition-colors text-slate-900 dark:text-white text-xl font-bold" />
                      <label htmlFor="name" className="absolute top-0 left-0 text-slate-400 pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-[11px] peer-focus:font-black peer-focus:tracking-[0.1em] peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[11px]">Your Name</label>
                    </div>
                    <div className="relative">
                      <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-100 dark:border-dark-700 pb-4 outline-none focus:border-primary-600 transition-colors text-slate-900 dark:text-white text-xl font-bold" />
                      <label htmlFor="email" className="absolute top-0 left-0 text-slate-400 pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-[11px] peer-focus:font-black peer-focus:tracking-[0.1em] peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[11px]">Email Address</label>
                    </div>
                    <div className="relative">
                       <textarea id="message" rows={4} placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-100 dark:border-dark-700 pb-4 outline-none focus:border-primary-600 transition-colors text-slate-900 dark:text-white text-xl font-bold resize-none"></textarea>
                       <label htmlFor="message" className="absolute top-0 left-0 text-slate-400 pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-[11px] peer-focus:font-black peer-focus:tracking-[0.1em] peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[11px]">How can I help?</label>
                    </div>
                    <button className="group relative w-full overflow-hidden py-6 bg-slate-900 dark:bg-primary-600 text-white font-black text-xs uppercase tracking-[0.4em] rounded-2xl transition-all shadow-2xl hover:shadow-primary-500/40 flex items-center justify-center gap-4">
                      <span className="relative z-10">Send Request</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Re-designed Footer - Stylish & Branded */}
      <footer className="pt-32 pb-16 relative overflow-hidden bg-white dark:bg-dark-950 border-t border-slate-100 dark:border-dark-900">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-2xl -rotate-6 transition-transform hover:rotate-6 cursor-pointer">X</div>
                <h2 className="font-display font-black text-4xl tracking-tighter dark:text-white uppercase">XUB.DEV</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-md font-medium text-lg leading-relaxed mb-10">
                Designing and developing modern digital products with a focus on usability, accessibility, and high-performance engineering.
              </p>
              <div className="flex flex-wrap gap-5">
                {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map(s => (
                  <button key={s} className="px-6 py-2.5 glass rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-600 hover:text-white transition-all shadow-md">
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-black text-[11px] uppercase tracking-[0.3em] mb-10 text-primary-600">Quick Links</h4>
              <ul className="space-y-6 text-base font-bold text-slate-600 dark:text-slate-300">
                {['Home', 'Skills', 'Projects', 'Contact'].map(i => (
                  <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-primary-600 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary-500 transition-all"></span>
                    {i}
                  </a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-black text-[11px] uppercase tracking-[0.3em] mb-10 text-primary-600">Office</h4>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Location</p>
                  <p className="text-lg font-bold dark:text-white">Berlin, Germany <br/> Remote Worldwide</p>
                </div>
                <div className="p-6 glass rounded-2xl border-white/10 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-600">Live Status</span>
                  </div>
                  <p className="text-sm font-bold dark:text-white">Currently accepting new projects for Q3 2026.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">
              © XUB.DEV // {new Date().getFullYear()} // ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-10 text-[10px] font-black tracking-widest text-slate-400 uppercase">
              <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
        
        {/* Background Noise/Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      </footer>

      {/* AI Assistant FAB */}
      <AIChatbox />
    </div>
  );
};

export default App;
