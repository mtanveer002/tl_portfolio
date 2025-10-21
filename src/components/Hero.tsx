import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-32 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div className="animate-fadeInUp">
          <p className="mb-4 text-lg text-cyan-400 animate-slideDown">Hello, I'm</p>
          <h1 className="mb-6 text-5xl font-bold text-white delay-100 md:text-7xl animate-slideDown">
            Muhammad Tanveer
          </h1>
          <h2 className="mb-8 text-2xl delay-200 md:text-4xl text-slate-300 animate-slideDown">
            Technical Lead & Senior Laravel Developer
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg delay-300 text-slate-400 md:text-xl animate-slideDown">
            Architecting scalable web applications with 6+ years of expertise in Laravel ecosystem,
            leading high-performance teams, and delivering enterprise solutions with 99.9% uptime
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-slideDown delay-400">
            <a
              href="mailto:mtanveerraj002@gmail.com"
              className="flex items-center gap-2 transition-all text-slate-300 hover:text-white hover:scale-105"
            >
              <Mail size={20} />
              <span>mtanveerraj002@gmail.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={20} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 delay-500 animate-slideDown">
            <a
              href="https://github.com/mtanveer002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-tanveer002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:mtanveerraj002@gmail.com"
              className="p-4 transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-white/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
