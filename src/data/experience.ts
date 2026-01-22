export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "kantar",
    company: "Kantar Worldpanel",
    role: "Senior Data Engineer",
    period: "2022 - Present",
    location: "Santiago, Chile",
    description: "Leading data engineering initiatives for consumer panel analytics across Latin America.",
    achievements: [
      "Architected ETL pipelines processing data from 16+ LATAM countries",
      "Implemented Databricks Asset Bundles for multi-environment deployments",
      "Developed statistical calibration systems improving panel accuracy by 15%",
      "Built real-time dashboards reducing report generation from hours to minutes",
    ],
    tech: ["Python", "Databricks", "Azure", "Polars", "PySpark", "Unity Catalog"],
  },
  {
    id: "evink",
    company: "eVink Technologies",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    location: "Santiago, Chile",
    description: "Developed web applications and backend systems for digital signage solutions.",
    achievements: [
      "Built React-based dashboard for managing digital signage networks",
      "Designed RESTful APIs serving 1000+ connected devices",
      "Implemented real-time communication using WebSockets",
      "Reduced API response times by 40% through optimization",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "trefimet",
    company: "Trefimet",
    role: "Process Engineer",
    period: "2018 - 2020",
    location: "Santiago, Chile",
    description: "Industrial process optimization and data analysis for manufacturing operations.",
    achievements: [
      "Developed Python automation scripts reducing manual work by 60%",
      "Created production dashboards for real-time monitoring",
      "Implemented statistical process control improving quality metrics",
      "Led digital transformation initiatives in production planning",
    ],
    tech: ["Python", "SQL", "Excel VBA", "Power BI", "Statistical Analysis"],
  },
  {
    id: "komatsu",
    company: "Komatsu Cummins",
    role: "Engineering Intern",
    period: "2017 - 2018",
    location: "Santiago, Chile",
    description: "Mining equipment maintenance data analysis and process improvement.",
    achievements: [
      "Analyzed maintenance data to optimize equipment reliability",
      "Developed reporting tools for fleet performance tracking",
      "Supported predictive maintenance initiatives",
    ],
    tech: ["Python", "SQL", "Data Analysis", "Excel"],
  },
];
