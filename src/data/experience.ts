export interface Localized {
  es: string;
  en: string;
}

export interface LocalizedList {
  es: string[];
  en: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: Localized;
  period: Localized;
  location: string;
  description: Localized;
  achievements: LocalizedList;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "numerator",
    company: "Numerator (ex Kantar)",
    role: { es: "Data Engineer", en: "Data Engineer" },
    period: { es: "Sep 2025 -- Presente", en: "Sep 2025 -- Present" },
    location: "Remoto, Chile",
    description: {
      es: "Diseño workflows de datos multi-país junto a clientes, potenciando mi trabajo con orquestación de IA (Claude Code) desde la exploración del problema hasta el código.",
      en: "I design multi-country data workflows with clients, powering my work with AI orchestration (Claude Code) from problem exploration through to code.",
    },
    achievements: {
      es: [
        "Coordino flujos de trabajo autónomos combinando un sistema de revisión generador + evaluador independiente (harness), tickets en Linear y cron jobs programados que solo se activan cuando hay trabajo pendiente.",
        "Diseño workflows multi-agente con Claude Code para automatización de ETL y revisión de código.",
        "Valido paridad de migraciones a Databricks generando datos de prueba sintéticos a partir de esquemas reales.",
        "Escalé de contractor a planilla indefinida y ahora lidero múltiples proyectos en paralelo.",
      ],
      en: [
        "Coordinate autonomous workflows combining a generator + independent evaluator review system (harness), Linear tickets, and scheduled cron jobs that only trigger when work is pending.",
        "Design multi-agent workflows with Claude Code for ETL automation and code review.",
        "Validate Databricks migration parity by generating synthetic test data from real schemas.",
        "Grew from contractor to permanent staff and now lead multiple parallel projects.",
      ],
    },
    tech: ["Python", "Claude Code", "Databricks", "Linear API", "Azure DevOps"],
  },
  {
    id: "kantar-tecnologia",
    company: "Kantar -- Tecnología",
    role: { es: "Data Engineer / Desarrollador Backend", en: "Data Engineer / Backend Developer" },
    period: { es: "Dic 2024 -- Ago 2025", en: "Dec 2024 -- Aug 2025" },
    location: "Remoto, Chile",
    description: {
      es: "Desarrollo de simuladores y pipelines ETL multi-país (5 países LATAM) con Python, Polars y PySpark.",
      en: "Development of simulators and multi-country ETL pipelines (5 LATAM countries) with Python, Polars, and PySpark.",
    },
    achievements: {
      es: [
        "Arquitectura Databricks: Asset Bundles, Unity Catalog, CI/CD con Azure DevOps.",
        "Creación de librerías reutilizables (storage, merge, simulators) publicadas en Azure Artifacts.",
        "Dashboard interno (FastAPI + React) que redujo 200+ horas-hombre/mes en calidad de datos.",
        "Refactoring de notebooks a backend automatizado con 100+ unit tests (pytest).",
      ],
      en: [
        "Databricks architecture: Asset Bundles, Unity Catalog, CI/CD with Azure DevOps.",
        "Creation of reusable libraries (storage, merge, simulators) published to Azure Artifacts.",
        "Internal dashboard (FastAPI + React) that reduced 200+ man-hours/month in data quality.",
        "Refactored notebooks into an automated backend with 100+ unit tests (pytest).",
      ],
    },
    tech: ["Python", "Polars", "PySpark", "Databricks", "FastAPI", "React"],
  },
  {
    id: "evink",
    company: "eVink -- Departamento I+D",
    role: { es: "Líder Tecnológico", en: "Tech Lead" },
    period: { es: "Nov 2023 -- Nov 2024", en: "Nov 2023 -- Nov 2024" },
    location: "Remoto, Chile",
    description: {
      es: "Lideré equipo de 3 desarrolladores creando backend (Python) y firmware embebido (C++) para red inalámbrica de medidores industriales de energía en tiempo real.",
      en: "Led a team of 3 developers building backend (Python) and embedded firmware (C++) for a wireless network of real-time industrial energy meters.",
    },
    achievements: {
      es: ["Diseñé hardware y firmware de data-loggers miniaturizados, escalables y testeables."],
      en: ["Designed hardware and firmware for miniaturized, scalable, testable data-loggers."],
    },
    tech: ["Python", "C++", "Firmware", "Embedded Systems"],
  },
  {
    id: "trefimet",
    company: "Trefimet S.A. -- Departamento I+D",
    role: { es: "Ingeniero I+D", en: "R&D Engineer" },
    period: { es: "Ago 2021 -- Oct 2023", en: "Aug 2021 -- Oct 2023" },
    location: "Remoto/Híbrido, Chile",
    description: {
      es: 'Lideré el programa "Smart Furnace Opening": firmware para tres prototipos + backend en Python para monitoreo y control remoto en tiempo real.',
      en: 'Led the "Smart Furnace Opening" program: firmware for three prototypes + Python backend for real-time remote monitoring and control.',
    },
    achievements: {
      es: ['Lideré el programa "Smart Furnace Opening": firmware para tres prototipos + backend en Python para monitoreo y control remoto en tiempo real.'],
      en: ['Led the "Smart Furnace Opening" program: firmware for three prototypes + Python backend for real-time remote monitoring and control.'],
    },
    tech: ["Python", "Firmware", "Real-time Systems"],
  },
  {
    id: "komatsu",
    company: "Komatsu Reman Center Chile",
    role: { es: "Ingeniero I+D", en: "R&D Engineer" },
    period: { es: "Mar 2020 -- Jul 2021", en: "Mar 2020 -- Jul 2021" },
    location: "Remoto/Híbrido, Chile",
    description: {
      es: "Desarrollé sistemas automáticos de adquisición y reporte de datos en Python para equipos con conectividad intermitente.",
      en: "Developed automated data acquisition and reporting systems in Python for equipment with intermittent connectivity.",
    },
    achievements: {
      es: ["Diseñé arquitectura de microservicios y módulos de machine learning para extracción de insights accionables."],
      en: ["Designed microservices architecture and machine learning modules for actionable insight extraction."],
    },
    tech: ["Python", "Microservices", "Machine Learning"],
  },
];
