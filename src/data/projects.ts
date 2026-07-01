export interface Localized {
  es: string;
  en: string;
}

export interface LocalizedList {
  es: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  longDescription?: Localized;
  tech: string[];
  category: "fullstack" | "data" | "backend" | "ai";
  highlights: LocalizedList;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "biotrack",
    title: { es: "BioTrack", en: "BioTrack" },
    description: {
      es: "Sistema médico full-stack para seguimiento de antibióticos y gestión de pacientes",
      en: "Full-stack medical system for antibiotic tracking and patient management",
    },
    longDescription: {
      es: "Sistema de seguimiento médico integral con arquitectura multi-tenant, autenticación JWT y dashboards en tiempo real para el monitoreo del uso de antibióticos hospitalarios.",
      en: "Comprehensive medical tracking system with multi-tenant architecture, JWT authentication, and real-time dashboards for hospital antibiotic usage monitoring.",
    },
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Railway", "TanStack Query"],
    category: "fullstack",
    highlights: {
      es: ["Arquitectura multi-tenant", "Autenticación JWT", "76+ componentes React", "Desplegado en producción"],
      en: ["Multi-tenant architecture", "JWT authentication", "76+ React components", "Production deployed"],
    },
    github: "https://github.com/jaalduna/biotrack",
    demo: "https://biotrack-app.railway.app",
  },
  {
    id: "frutiverdura",
    title: { es: "FrutiVerdura", en: "FrutiVerdura" },
    description: {
      es: "Sistema POS moderno para verdulerías con búsqueda de imágenes y analítica",
      en: "Modern POS system for produce stores with image search and analytics",
    },
    longDescription: {
      es: "Sistema de punto de venta con búsqueda inteligente de imágenes vía integración con la API de Unsplash, gestión de inventario en tiempo real y un dashboard integral de analítica de ventas.",
      en: "Point-of-sale system featuring intelligent image search via Unsplash API integration, real-time inventory management, and comprehensive sales analytics dashboard.",
    },
    tech: ["React", "Vite", "TanStack Query", "TanStack Table", "FastAPI", "Unsplash API"],
    category: "fullstack",
    highlights: {
      es: ["Integración con API de Unsplash", "Inventario en tiempo real", "Dashboard de analítica", "Patrones modernos de React"],
      en: ["Unsplash API integration", "Real-time inventory", "Analytics dashboard", "Modern React patterns"],
    },
    github: "https://github.com/jaalduna/frutiverdura",
  },
  {
    id: "data-shoveling",
    title: { es: "Data Shoveling ETL", en: "Data Shoveling ETL" },
    description: {
      es: "Pipeline ETL de alto rendimiento para datos de consumo de más de 16 países de LATAM",
      en: "High-performance ETL pipeline for 16+ LATAM countries consumer data",
    },
    longDescription: {
      es: "Pipeline de datos de nivel empresarial que procesa millones de registros de paneles de consumo en Latinoamérica, usando Polars para el rendimiento y una suite de tests integral.",
      en: "Enterprise-grade data pipeline processing millions of consumer panel records across Latin America, featuring Polars for performance and comprehensive testing suite.",
    },
    tech: ["Python", "Polars", "Pandas", "Azure", "Databricks", "pytest"],
    category: "data",
    highlights: {
      es: ["Cobertura de 16+ países", "385+ tests unitarios", "80% de cobertura de código", "Alto rendimiento con Polars"],
      en: ["16+ countries coverage", "385+ unit tests", "80% code coverage", "High-performance Polars"],
    },
    github: "https://github.com/jaalduna/data-shoveling",
  },
  {
    id: "mtr-calibration",
    title: { es: "Calibración MTR", en: "MTR Calibration" },
    description: {
      es: "Sistema de calibración estadística para datos de paneles de consumo usando Newton-Raphson",
      en: "Statistical calibration system for consumer panel data using Newton-Raphson",
    },
    longDescription: {
      es: "Sistema estadístico avanzado para detectar y corregir anomalías en paneles de compra de consumo, usando detección basada en sigma y optimización iterativa Newton-Raphson.",
      en: "Advanced statistical system for detecting and correcting anomalies in consumer purchase panels using sigma-based detection and iterative Newton-Raphson optimization.",
    },
    tech: ["Python", "Pandas", "NumPy", "Databricks", "Newton-Raphson", "Statistics"],
    category: "data",
    highlights: {
      es: ["Detección de anomalías (2 sigma)", "Optimización Newton-Raphson", "Soporte multi-país", "Calibración automatizada"],
      en: ["Anomaly detection (2 sigma)", "Newton-Raphson optimization", "Multi-country support", "Automated calibration"],
    },
    github: "https://github.com/jaalduna/mtr",
  },
  {
    id: "kwp-pipelines",
    title: { es: "Pipelines KWP Databricks", en: "KWP Databricks Pipelines" },
    description: {
      es: "Pipelines de datos de producción usando Databricks Asset Bundles y Unity Catalog",
      en: "Production data pipelines using Databricks Asset Bundles and Unity Catalog",
    },
    longDescription: {
      es: "Pipelines Databricks empresariales para el procesamiento de insights de consumo, con despliegue multi-entorno (dev/staging/prod) e integración con Unity Catalog.",
      en: "Enterprise Databricks pipelines for consumer insights processing with multi-environment deployment (dev/staging/prod) and Unity Catalog integration.",
    },
    tech: ["Databricks", "PySpark", "Unity Catalog", "Azure DevOps", "Asset Bundles"],
    category: "data",
    highlights: {
      es: ["CI/CD multi-entorno", "Integración con Unity Catalog", "Despliegue con Asset Bundles", "Confiabilidad de nivel productivo"],
      en: ["Multi-environment CI/CD", "Unity Catalog integration", "Asset Bundles deployment", "Production-grade reliability"],
    },
  },
  {
    id: "impact-simulator",
    title: { es: "Simulador de Impacto", en: "Impact Simulator" },
    description: {
      es: "Herramienta de simulación de impacto de negocio para análisis de escenarios y forecasting",
      en: "Business impact simulation tool for scenario analysis and forecasting",
    },
    longDescription: {
      es: "Plataforma de simulación interactiva que permite a analistas de negocio modelar escenarios de mercado y proyectar impactos en KPIs con parámetros configurables.",
      en: "Interactive simulation platform enabling business analysts to model market scenarios and forecast KPI impacts with configurable parameters.",
    },
    tech: ["Python", "Streamlit", "Polars", "NumPy", "Plotly"],
    category: "backend",
    highlights: {
      es: ["Simulación en tiempo real", "Dashboards interactivos", "Modelado de escenarios", "Inteligencia de negocio"],
      en: ["Real-time simulation", "Interactive dashboards", "Scenario modeling", "Business intelligence"],
    },
  },
  {
    id: "ai-harness",
    title: {
      es: "Orquestación de Workflows con IA (Harness)",
      en: "AI Workflow Orchestration (Harness)",
    },
    description: {
      es: "Sistema autónomo de generación + evaluación supervisada, integrado con Linear y cron jobs, para ejecutar y verificar tareas técnicas sin intervención manual.",
      en: "Autonomous supervised generator + evaluator system, integrated with Linear and cron jobs, to execute and verify technical tasks without manual intervention.",
    },
    tech: ["Claude Code", "Linear API", "Cron", "Bash", "Python"],
    category: "ai",
    highlights: {
      es: [
        "Loop generador/evaluador: un agente implementa, otro evalúa de forma independiente y escéptica antes de aprobar",
        "Detector programado (cron) que consulta Linear y solo dispara trabajo cuando hay tickets pendientes -- cero costo en idle",
        "Sincronización automática de estado (comentarios, labels) de vuelta a Linear",
        "Reduce intervención manual en tareas repetitivas de migración e implementación",
      ],
      en: [
        "Generator/evaluator loop: one agent implements, another independently and skeptically evaluates before approving",
        "Scheduled cron detector that queries Linear and only triggers work when tickets are pending -- zero cost when idle",
        "Automatic status sync (comments, labels) back to Linear",
        "Reduces manual intervention on repetitive migration and implementation tasks",
      ],
    },
  },
];

export const categories = [
  { id: "all", label: { es: "Todos los Proyectos", en: "All Projects" } },
  { id: "fullstack", label: { es: "Full-Stack", en: "Full-Stack" } },
  { id: "data", label: { es: "Ingeniería de Datos", en: "Data Engineering" } },
  { id: "backend", label: { es: "Backend", en: "Backend" } },
  { id: "ai", label: { es: "IA", en: "AI" } },
] as const;
