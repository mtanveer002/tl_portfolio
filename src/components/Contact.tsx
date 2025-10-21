import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Looking for a technical leader to architect your next project? Let's discuss how I can help
            drive your development initiatives forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:mtanveerraj002@gmail.com"
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/90">mtanveerraj002@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-white/90">Lahore, Punjab, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="font-semibold mb-4">Connect With Me</div>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/muhammad-tanveer002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/mtanveer002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:mtanveerraj002@gmail.com"
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all hover:scale-110"
                  >
                    <Send size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-4">Open to Opportunities</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Technical Leadership Roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Full-Stack Development Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Architecture Consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Team Mentoring & Training</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-600">
          <p>© 2025 Muhammad Tanveer. Technical Lead & Senior Laravel Developer.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
