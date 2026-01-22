import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import type { Project } from "../data/projects";
import { cn } from "../lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors = {
  fullstack: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  data: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  backend: "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

const categoryLabels = {
  fullstack: "Full-Stack",
  data: "Data Engineering",
  backend: "Backend",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full p-6 rounded-2xl bg-surface/50 border border-border hover:border-sky-500/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-sky-500/10">
          <Folder className="w-6 h-6 text-sky-400" />
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-400 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-400 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <span
          className={cn(
            "inline-block px-2.5 py-1 text-xs font-medium rounded-md border mb-3",
            categoryColors[project.category]
          )}
        >
          {categoryLabels[project.category]}
        </span>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs text-gray-500 font-mono"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-gray-600">+{project.tech.length - 4}</span>
        )}
      </div>
    </motion.article>
  );
}
