import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "joaquin.aldunate@gmail.com",
    href: "mailto:joaquin.aldunate@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jaalduna",
    href: "https://github.com/jaalduna",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jaalduna",
    href: "https://linkedin.com/in/jaalduna",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Santiago, Chile",
    href: null,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sky-400 text-sm font-medium mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let's connect.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities,
              collaborations, or just having a chat about data and technology.
            </p>
          </div>

          {/* Contact content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border hover:border-sky-500/30 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                        <link.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{link.label}</p>
                        <p className="text-white font-medium group-hover:text-sky-400 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border">
                      <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400">
                        <link.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{link.label}</p>
                        <p className="text-white font-medium">{link.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/5 border border-sky-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-sky-500/20">
                  <Send className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Get in touch</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Whether you have a project in mind, a question about data engineering,
                or just want to say hi, I'd love to hear from you.
              </p>
              <a
                href="mailto:joaquin.aldunate@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl transition-colors"
              >
                <Mail size={18} />
                Send me an email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
