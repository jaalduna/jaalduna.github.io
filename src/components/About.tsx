import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building scalable ETL pipelines with Python, Polars, and Databricks for LATAM markets.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs and microservices with FastAPI and modern Python patterns.",
  },
  {
    icon: Code2,
    title: "Full-Stack Apps",
    description: "Developing React applications with TypeScript and modern tooling.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing data processing and application performance at scale.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <p className="text-sky-400 text-sm font-medium mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Engineer by training, builder by passion.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a Senior Data Engineer based in Santiago, Chile, with 6+ years of experience
              transforming complex data challenges into elegant solutions.
            </p>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Currently at <span className="text-white font-medium">Kantar Worldpanel</span>,
                I architect data pipelines that process consumer panel data across 16+ Latin American countries.
                My work combines statistical analysis, software engineering, and cloud infrastructure
                to deliver insights that drive business decisions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, tested code. With 385+ tests in my latest project
                and a passion for developer experience, I build systems that are both powerful
                and maintainable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond data, I enjoy building full-stack applications with React and TypeScript,
                bringing the same engineering rigor to frontend development.
              </p>
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
            <p className="text-sm text-gray-500 mb-4">Technologies I work with daily</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Python", "TypeScript", "React", "FastAPI",
                "Databricks", "Polars", "PostgreSQL", "Azure",
                "Docker", "Git", "PySpark", "Unity Catalog"
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
