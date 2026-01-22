import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/skills";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sky-400 text-sm font-medium mb-3">Skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Technical expertise.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized in Python and data engineering, with strong full-stack capabilities.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl bg-surface/30 border border-border"
              >
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {category.name}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-4">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "NumPy", "SciPy", "Streamlit", "Redis",
                "Jupyter", "pytest", "GitHub Actions", "Azure DevOps",
                "REST APIs", "WebSockets", "Data Modeling", "Statistics"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs bg-surface/50 border border-border rounded-lg text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
