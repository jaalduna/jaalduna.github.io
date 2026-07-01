import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/contact";
import { useLanguage } from "../i18n/LanguageContext";

const socialLinks = [
  { href: contact.github, icon: Github, label: "GitHub" },
  { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
];

export function Hero() {
  const { lang, t } = useLanguage();
  const cvHref = lang === "es" ? "/cv-joaquin-aldunate-es.pdf" : "/cv-joaquin-aldunate-en.pdf";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-background to-background" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          {t.hero.badge}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          {t.hero.greeting}{" "}
          <span className="text-gradient">Joaquin Aldunate</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8"
        >
          <span className="text-white font-medium">{t.hero.roleOne}</span> &{" "}
          <span className="text-white font-medium">{t.hero.roleTwo}</span>
          <br className="hidden sm:block" />
          {t.hero.subtitleTail}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: "5+", label: t.hero.statYears },
            { value: "16+", label: t.hero.statCountries },
            { value: "385+", label: t.hero.statTests },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl transition-colors"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-surface hover:bg-surface-hover border border-border text-white font-medium rounded-xl transition-colors"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href={cvHref}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface hover:bg-surface-hover border border-border text-white font-medium rounded-xl transition-colors"
          >
            <Download size={18} />
            {t.hero.ctaDownloadCV}
          </a>
        </motion.div>

        {/* Social Links (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex md:hidden justify-center gap-6 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border text-gray-400 hover:text-sky-400 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-sky-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
