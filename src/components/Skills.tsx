import { useInView } from '../hooks/useInView';
import { Code, Database, Cloud, Wrench, GitBranch, Award } from 'lucide-react';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Laravel', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Vue.js', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Livewire', level: 90 },
        { name: 'Alpine.js', level: 85 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MySQL', level: 92 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 87 },
        { name: 'DigitalOcean', level: 85 },
        { name: 'Nginx', level: 82 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Jira', level: 88 },
        { name: 'Postman', level: 90 },
        { name: 'PhpStorm', level: 92 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Specializations',
      color: 'from-slate-600 to-slate-800',
      skills: [
        { name: 'RESTful API Development', level: 95 },
        { name: 'Microservices Architecture', level: 87 },
        { name: 'Payment Integration (Stripe)', level: 90 },
        { name: 'OAuth2 & JWT', level: 88 },
      ],
    },
    {
      icon: Award,
      title: 'Leadership',
      color: 'from-yellow-500 to-amber-600',
      skills: [
        { name: 'Team Leadership', level: 92 },
        { name: 'Agile Project Management', level: 90 },
        { name: 'Technical Mentoring', level: 88 },
        { name: 'Architecture Design', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 transition-all shadow-md bg-gradient-to-br from-slate-50 to-white rounded-xl hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${idx * 50}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 mt-12 text-white bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl">
          <h3 className="mb-6 text-2xl font-bold text-center">Certifications</h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">Technical Support Fundamentals</div>
              <p className="text-sm text-slate-300">Core IT Support Skills</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">Linux Command Line</div>
              <p className="text-sm text-slate-300">System Administration</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">Relational Database & SQL</div>
              <p className="text-sm text-slate-300">Query Optimization</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">JavaScript ES6+</div>
              <p className="text-sm text-slate-300">Modern Best Practices</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">Introduction to Generative
                AI - Art of the Possible</div>
              <p className="text-sm text-slate-300">Prompt Engineering</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-semibold text-cyan-400">Google AI Essentials</div>
              <p className="text-sm text-slate-300">Stay Ahead of the AI Curve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
