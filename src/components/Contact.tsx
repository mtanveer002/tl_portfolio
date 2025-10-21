import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Linkedin, Github, Send, Phone } from 'lucide-react';

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
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto mb-4 bg-blue-600"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Looking for a technical leader to architect your next project? Let's discuss how I can help
            drive your development initiatives forward.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="p-8 text-white bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:mtanveerraj002@gmail.com"
                  className="flex items-start gap-4 transition-transform hover:translate-x-2"
                >
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Email</div>
                    <div className="text-white/90">mtanveerraj002@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Phone</div>
                    <div className="text-white/90">+92 300 2884058</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Location</div>
                    <div className="text-white/90">Lahore, Punjab, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/20">
                <div className="mb-4 font-semibold">Connect With Me</div>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/muhammad-tanveer002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 transition-all rounded-lg bg-white/20 hover:bg-white/30 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/mtanveer002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 transition-all rounded-lg bg-white/20 hover:bg-white/30 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:mtanveerraj002@gmail.com"
                    className="p-3 transition-all rounded-lg bg-white/20 hover:bg-white/30 hover:scale-110"
                  >
                    <Send size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl">
              <h4 className="mb-4 font-bold text-slate-900">Open to Opportunities</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>Technical Leadership Roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>Full-Stack Development Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>Architecture Consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>Team Mentoring & Training</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-white border shadow-xl rounded-2xl border-slate-100">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 transition-all border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 transition-all border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 transition-all border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 transition-all border rounded-lg resize-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:-translate-y-1"
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
