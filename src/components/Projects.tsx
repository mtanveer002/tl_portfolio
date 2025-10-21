import { useInView } from '../hooks/useInView';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Sound.com',
      subtitle: 'Music Streaming Platform',
      description:
        'Royalty-free music streaming platform serving 5,000+ content creators with advanced filtering and persistent audio playback.',
      tech: ['Laravel', 'Livewire 3', 'Alpine.js', 'MySQL', 'AWS', 'Node.js'],
      highlights: [
        'Optimized load speed from 12s to 2s (83% improvement)',
        'Built persistent audio player with cross-page functionality',
        'Implemented dynamic filtering for 10,000+ tracks',
        'Reduced bounce rate by 30%, increased session duration by 65%',
      ],
      impact: 'Performance & User Engagement',
    },
    {
      title: 'Recovery Shop',
      subtitle: 'Healthcare Equipment Platform',
      description:
        'Comprehensive healthcare platform for equipment rental and purchase with multi-vendor support and secure payment processing.',
      tech: ['Laravel', 'Livewire 3', 'Alpine.js', 'MySQL', 'Stripe API', 'Apple Pay'],
      highlights: [
        'Integrated Apple Pay and Stripe with intelligent routing',
        'Served 200+ healthcare providers',
        'Processed $100K+ transactions with 99.9% success rate',
        'Implemented flexible commission and invoicing system',
      ],
      impact: 'Payment Processing & Healthcare Solutions',
    },
    {
      title: 'Rafka',
      subtitle: 'Premium Jewelry Platform',
      description:
        'Premium jewelry brand website with drag-and-drop page builder allowing marketing team to manage content independently.',
      tech: ['Laravel', 'Livewire 3', 'GrapesJS', 'MySQL', 'AWS'],
      highlights: [
        'Built custom CMS with drag-and-drop functionality',
        'Reduced development requests by 70%',
        'Improved mobile conversion rate by 40%',
        'Real-time inventory management integration',
      ],
      impact: 'Content Management & E-commerce',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Enterprise-grade applications delivering measurable business impact and exceptional user experiences
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                      <p className="text-sm text-slate-500">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium">
                    <ExternalLink size={16} />
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 h-full">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Development Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-cyan-300 font-semibold mb-2">Performance First</div>
                <p className="text-sm text-white/90">
                  Optimizing applications for speed and efficiency, achieving up to 83% performance improvements
                </p>
              </div>
              <div>
                <div className="text-cyan-300 font-semibold mb-2">Scalable Architecture</div>
                <p className="text-sm text-white/90">
                  Building systems that grow with business needs while maintaining reliability and security
                </p>
              </div>
              <div>
                <div className="text-cyan-300 font-semibold mb-2">User-Centric Design</div>
                <p className="text-sm text-white/90">
                  Creating intuitive interfaces that enhance user experience and drive engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
