export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Python & Data",
    skills: [
      { name: "Python", level: 95, category: "Python & Data" },
      { name: "Polars", level: 90, category: "Python & Data" },
      { name: "Pandas", level: 90, category: "Python & Data" },
      { name: "PySpark", level: 85, category: "Python & Data" },
      { name: "FastAPI", level: 88, category: "Python & Data" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Databricks", level: 90, category: "Cloud & DevOps" },
      { name: "Azure", level: 85, category: "Cloud & DevOps" },
      { name: "Docker", level: 82, category: "Cloud & DevOps" },
      { name: "Git", level: 92, category: "Cloud & DevOps" },
      { name: "CI/CD", level: 85, category: "Cloud & DevOps" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 85, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 88, category: "Frontend" },
      { name: "TanStack Query", level: 82, category: "Frontend" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 88, category: "Databases" },
      { name: "SQL", level: 92, category: "Databases" },
      { name: "Delta Lake", level: 80, category: "Databases" },
      { name: "Unity Catalog", level: 82, category: "Databases" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
