export interface Localized {
  es: string;
  en: string;
}

export interface Skill {
  name: string | Localized;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  name: Localized;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "python-data",
    name: { es: "Python y Datos", en: "Python & Data" },
    skills: [
      { name: "Python", level: 95 },
      { name: "Polars", level: 90 },
      { name: "Pandas", level: 90 },
      { name: "PySpark", level: 85 },
      { name: "FastAPI", level: 88 },
    ],
  },
  {
    id: "cloud-devops",
    name: { es: "Cloud y DevOps", en: "Cloud & DevOps" },
    skills: [
      { name: "Databricks", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Docker", level: 82 },
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    id: "frontend",
    name: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "TanStack Query", level: 82 },
    ],
  },
  {
    id: "databases",
    name: { es: "Bases de Datos", en: "Databases" },
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "SQL", level: 92 },
      { name: "Delta Lake", level: 80 },
      { name: "Unity Catalog", level: 82 },
    ],
  },
  {
    id: "ai-automation",
    name: { es: "IA y Automatización", en: "AI & Automation" },
    skills: [
      { name: "Claude Code", level: 90 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Agentic Workflows", level: 85 },
      { name: "LLM-assisted Code Review", level: 85 },
      { name: { es: "CI/CD con IA", en: "AI-driven CI/CD" }, level: 88 },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
