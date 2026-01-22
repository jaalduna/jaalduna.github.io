import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/experience";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sky-950/5 to-background" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sky-400 text-sm font-medium mb-3">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Where I've worked.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From industrial engineering to data pipelines,
              building solutions across diverse industries.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-2 rounded-full bg-sky-500 border-4 border-background" />

                  {/* Content card */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="p-6 rounded-2xl bg-surface/50 border border-border hover:border-sky-500/30 transition-colors">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-sky-400 font-medium">
                            <Briefcase size={14} />
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {exp.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-500 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
