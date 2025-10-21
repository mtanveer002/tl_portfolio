import { useInView } from '../hooks/useInView';
import { Code2, Users, Rocket, Award } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const highlights = [
    {
      icon: Code2,
      value: '15+',
      label: 'Projects Delivered',
      description: 'High-performance applications',
    },
    {
      icon: Users,
      value: '5+',
      label: 'Team Members Led',
      description: 'Cross-functional development teams',
    },
    {
      icon: Rocket,
      value: '99.9%',
      label: 'Uptime Achieved',
      description: 'Enterprise-grade reliability',
    },
    {
      icon: Award,
      value: '6+',
      label: 'Years Experience',
      description: 'Full-stack development expertise',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Technical Lead with a proven track record of architecting and delivering enterprise-grade
              web applications. Specialized in the Laravel ecosystem and modern JavaScript frameworks,
              I bring strategic vision to technical implementation.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              My expertise spans full-stack development, cloud infrastructure management, and
              leading agile development teams. I've consistently optimized application performance
              by up to 83% while reducing operational costs by 30%.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Passionate about mentoring developers, implementing best practices, and building
              scalable solutions that drive business growth and exceed client expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-cyan-100">Technical Leadership</h4>
              <ul className="space-y-2 text-white/90">
                <li>Architecture Design & Review</li>
                <li>Performance Optimization</li>
                <li>Technical Mentoring</li>
                <li>Code Quality Standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-cyan-100">Project Management</h4>
              <ul className="space-y-2 text-white/90">
                <li>Agile Methodologies</li>
                <li>Sprint Planning & Execution</li>
                <li>Stakeholder Communication</li>
                <li>Risk Mitigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-cyan-100">System Design</h4>
              <ul className="space-y-2 text-white/90">
                <li>Distributed Systems</li>
                <li>RESTful API Architecture</li>
                <li>Microservices Design</li>
                <li>Scalability & Fault Tolerance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
