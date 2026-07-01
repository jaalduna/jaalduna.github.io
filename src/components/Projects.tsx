import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "../lib/utils";
import { useLanguage } from "../i18n/LanguageContext";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { lang, t } = useLanguage();

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sky-950/5 to-background" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sky-400 text-sm font-medium mb-3">{t.projects.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.projects.intro}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                activeCategory === category.id
                  ? "bg-sky-500 text-white"
                  : "bg-surface border border-border text-gray-400 hover:text-white hover:border-sky-500/30"
              )}
            >
              {category.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/jaalduna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors"
          >
            {t.projects.viewMore}
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
