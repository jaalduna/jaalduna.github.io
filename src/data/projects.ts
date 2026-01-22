export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: "fullstack" | "data" | "backend";
  highlights: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "biotrack",
    title: "BioTrack",
    description: "Full-stack medical system for antibiotic tracking and patient management",
    longDescription: "Comprehensive medical tracking system with multi-tenant architecture, JWT authentication, and real-time dashboards for hospital antibiotic usage monitoring.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Railway", "TanStack Query"],
    category: "fullstack",
    highlights: [
      "Multi-tenant architecture",
      "JWT authentication",
      "76+ React components",
      "Production deployed"
    ],
    github: "https://github.com/jaalduna/biotrack",
    demo: "https://biotrack-app.railway.app",
  },
  {
    id: "frutiverdura",
    title: "FrutiVerdura",
    description: "Modern POS system for produce stores with image search and analytics",
    longDescription: "Point-of-sale system featuring intelligent image search via Unsplash API integration, real-time inventory management, and comprehensive sales analytics dashboard.",
    tech: ["React", "Vite", "TanStack Query", "TanStack Table", "FastAPI", "Unsplash API"],
    category: "fullstack",
    highlights: [
      "Unsplash API integration",
      "Real-time inventory",
      "Analytics dashboard",
      "Modern React patterns"
    ],
    github: "https://github.com/jaalduna/frutiverdura",
  },
  {
    id: "data-shoveling",
    title: "Data Shoveling ETL",
    description: "High-performance ETL pipeline for 16+ LATAM countries consumer data",
    longDescription: "Enterprise-grade data pipeline processing millions of consumer panel records across Latin America, featuring Polars for performance and comprehensive testing suite.",
    tech: ["Python", "Polars", "Pandas", "Azure", "Databricks", "pytest"],
    category: "data",
    highlights: [
      "16+ countries coverage",
      "385+ unit tests",
      "80% code coverage",
      "High-performance Polars"
    ],
    github: "https://github.com/jaalduna/data-shoveling",
  },
  {
    id: "mtr-calibration",
    title: "MTR Calibration",
    description: "Statistical calibration system for consumer panel data using Newton-Raphson",
    longDescription: "Advanced statistical system for detecting and correcting anomalies in consumer purchase panels using sigma-based detection and iterative Newton-Raphson optimization.",
    tech: ["Python", "Pandas", "NumPy", "Databricks", "Newton-Raphson", "Statistics"],
    category: "data",
    highlights: [
      "Anomaly detection (2 sigma)",
      "Newton-Raphson optimization",
      "Multi-country support",
      "Automated calibration"
    ],
    github: "https://github.com/jaalduna/mtr",
  },
  {
    id: "kwp-pipelines",
    title: "KWP Databricks Pipelines",
    description: "Production data pipelines using Databricks Asset Bundles and Unity Catalog",
    longDescription: "Enterprise Databricks pipelines for consumer insights processing with multi-environment deployment (dev/staging/prod) and Unity Catalog integration.",
    tech: ["Databricks", "PySpark", "Unity Catalog", "Azure DevOps", "Asset Bundles"],
    category: "data",
    highlights: [
      "Multi-environment CI/CD",
      "Unity Catalog integration",
      "Asset Bundles deployment",
      "Production-grade reliability"
    ],
  },
  {
    id: "impact-simulator",
    title: "Impact Simulator",
    description: "Business impact simulation tool for scenario analysis and forecasting",
    longDescription: "Interactive simulation platform enabling business analysts to model market scenarios and forecast KPI impacts with configurable parameters.",
    tech: ["Python", "Streamlit", "Polars", "NumPy", "Plotly"],
    category: "backend",
    highlights: [
      "Real-time simulation",
      "Interactive dashboards",
      "Scenario modeling",
      "Business intelligence"
    ],
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "data", label: "Data Engineering" },
  { id: "backend", label: "Backend" },
] as const;
