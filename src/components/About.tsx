import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Sparkles, Database, Server, Code2];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const highlights = t.about.highlights.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sky-400 text-sm font-medium mb-3">{t.about.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              {t.about.heading}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.about.intro}
            </p>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed font-medium">{t.about.bioAI}</p>
              <p className="text-gray-300 leading-relaxed">{t.about.bio1}</p>
              <p className="text-gray-300 leading-relaxed">{t.about.bio2}</p>
              <p className="text-gray-300 leading-relaxed">{t.about.bio3}</p>
            </div>

            {/* Tech stack visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-surface/50 border border-border hover:border-sky-500/30 transition-colors group"
                  >
                    <item.icon className="w-8 h-8 text-sky-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech badges */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">{t.about.techLabel}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Python", "TypeScript", "React", "FastAPI",
                "Databricks", "Polars", "PostgreSQL", "Azure",
                "Docker", "Git", "PySpark", "Unity Catalog", "Claude Code"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-surface border border-border rounded-lg text-gray-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
