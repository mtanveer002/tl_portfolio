import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Technical Lead / Full Stack Developer',
      company: 'Topdot Pvt. Ltd',
      location: 'Lahore, Pakistan',
      period: 'Jan 2023 - Present',
      achievements: [
        'Led cross-functional team of 5 developers, reducing project delivery time by 30%',
        'Architected 8+ scalable web applications serving 10,000+ daily active users with 99.9% uptime',
        'Implemented CI/CD pipelines using Docker, reducing deployment time by 60%',
        'Established agile methodologies, resulting in 40% faster feature delivery',
        'Mentored junior developers, improving team productivity by 35%',
      ],
    },
    {
      title: 'Senior Laravel/Vue.js Developer',
      company: 'Technology Brainz',
      location: 'Lahore, Pakistan',
      period: 'Jan 2020 - Dec 2022',
      achievements: [
        'Architected backend solutions for 12+ complex web applications',
        'Designed and integrated 50+ RESTful APIs, improving data flow efficiency by 45%',
        'Managed AWS and DigitalOcean infrastructure, achieving 99.8% uptime',
        'Automated deployment processes, reducing manual deployment time by 80%',
        'Resolved 95% of production issues within 2 hours through root cause analysis',
      ],
    },
    {
      title: 'PHP/Laravel Developer',
      company: 'Ikonic Solution',
      location: 'Islamabad, Pakistan',
      period: 'May 2019 - Nov 2020',
      achievements: [
        'Developed 6+ web applications using Laravel framework following industry best practices',
        'Built and maintained 30+ APIs supporting iOS and Android mobile applications',
        'Created comprehensive technical documentation, reducing onboarding time by 50%',
        'Implemented system integrations, improving data synchronization by 60%',
        'Researched and adopted new technologies, contributing to 15% efficiency improvement',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-3 text-slate-600 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
