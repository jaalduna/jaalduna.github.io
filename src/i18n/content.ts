export interface Content {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    roleOne: string;
    roleTwo: string;
    subtitleTail: string;
    statYears: string;
    statCountries: string;
    statTests: string;
    ctaProjects: string;
    ctaContact: string;
    ctaDownloadCV: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    intro: string;
    bio1: string;
    bio2: string;
    bio3: string;
    bioAI: string;
    techLabel: string;
    educationLabel: string;
    education: string;
    highlights: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    labelEmail: string;
    labelGithub: string;
    labelLinkedin: string;
    labelLocation: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  footer: {
    builtWith: string;
    downloadCV: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    viewMore: string;
    categoryAll: string;
    categoryFullstack: string;
    categoryData: string;
    categoryBackend: string;
    categoryAI: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    intro: string;
    alsoExperienced: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
}

export type Lang = "es" | "en";

export const content: Record<Lang, Content> = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      badge: "Abierto a nuevas oportunidades",
      greeting: "Hola, soy",
      roleOne: "Data Engineer Senior",
      roleTwo: "Desarrollador Backend",
      subtitleTail: "que usa IA (Claude Code) para explorar problemas, revisar arquitectura y programar -- llevando su expertise exactamente a donde cada cliente lo necesita.",
      statYears: "Años de experiencia",
      statCountries: "Países con datos",
      statTests: "Tests escritos",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contactar",
      ctaDownloadCV: "Descargar CV",
    },
    about: {
      eyebrow: "Sobre mí",
      heading: "Ingeniero de formación, constructor por pasión.",
      intro:
        "Soy Backend Python & Data Engineer con más de 5 años resolviendo desafíos de datos complejos -- y dirijo esa experiencia con IA generativa hacia lo que cada cliente realmente necesita, en vez de forzar siempre la misma solución.",
      bioAI:
        "Uso IA generativa (Claude Code) para explorar problemas, revisar arquitectura y programar -- no solo para escribir código más rápido, sino para decidir mejor qué construir. Por ejemplo, coordino flujos de trabajo autónomos combinando un sistema de revisión generador + evaluador independiente (harness), tickets en Linear y cron jobs programados que solo se activan cuando hay trabajo pendiente.",
      bio1:
        "Actualmente en Numerator, diseño pipelines de datos que procesan información de paneles de consumo en más de 16 países de Latinoamérica, combinando análisis estadístico, ingeniería de software e infraestructura en la nube para entregar insights que impulsan decisiones de negocio.",
      bio2:
        "Creo en escribir código limpio y probado. Con más de 385 tests en mi último proyecto y una pasión por la experiencia de desarrollo, construyo sistemas potentes y mantenibles.",
      bio3:
        "Más allá de los datos, disfruto construir aplicaciones full-stack con React y TypeScript, llevando el mismo rigor de ingeniería al desarrollo frontend.",
      techLabel: "Tecnologías con las que trabajo a diario",
      educationLabel: "Formación",
      education: "PhD en Ciencias de la Ingeniería (Electrónica y Comunicaciones) e Ingeniería Civil Electricista — Pontificia Universidad Católica de Chile",
      highlights: [
        {
          title: "IA & Automatización",
          description: "Orquestación de workflows con IA (Claude Code) para explorar problemas, revisar arquitectura y acelerar desarrollo y QA.",
        },
        {
          title: "Ingeniería de Datos",
          description: "Construyendo pipelines ETL escalables con Python, Polars y Databricks para mercados de LATAM.",
        },
        {
          title: "Desarrollo Backend",
          description: "Creando APIs robustas y microservicios con FastAPI y patrones modernos de Python.",
        },
        {
          title: "Apps Full-Stack",
          description: "Desarrollando aplicaciones React con TypeScript y herramientas modernas.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Conectemos.",
      intro:
        "Siempre estoy interesado en escuchar sobre nuevas oportunidades, colaboraciones, o simplemente conversar sobre datos y tecnología.",
      labelEmail: "Email",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      labelLocation: "Ubicación",
      ctaTitle: "Hablemos",
      ctaText:
        "Ya sea que tengas un proyecto en mente, una pregunta sobre ingeniería de datos, o solo quieras saludar, me encantaría escucharte.",
      ctaButton: "Envíame un correo",
    },
    footer: {
      builtWith: "Construido con React + Tailwind.",
      downloadCV: "Descargar CV",
    },
    projects: {
      eyebrow: "Proyectos",
      heading: "Cosas que he construido.",
      intro:
        "Desde pipelines de datos que procesan millones de registros hasta aplicaciones full-stack, aquí hay algunos proyectos de los que estoy orgulloso.",
      viewMore: "Ver más en GitHub",
      categoryAll: "Todos los Proyectos",
      categoryFullstack: "Full-Stack",
      categoryData: "Ingeniería de Datos",
      categoryBackend: "Backend",
      categoryAI: "IA",
    },
    skills: {
      eyebrow: "Habilidades",
      heading: "Expertise técnico.",
      intro: "Especializado en Python e ingeniería de datos, con sólidas capacidades full-stack.",
      alsoExperienced: "También con experiencia en",
    },
    experience: {
      eyebrow: "Experiencia",
      heading: "Dónde he trabajado.",
      intro: "Desde ingeniería industrial hasta pipelines de datos, construyendo soluciones en industrias diversas.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new opportunities",
      greeting: "Hi, I'm",
      roleOne: "Senior Data Engineer",
      roleTwo: "Backend Developer",
      subtitleTail: "who uses AI (Claude Code) to explore problems, review architecture, and ship code -- directing deep expertise exactly where each client needs it.",
      statYears: "Years Experience",
      statCountries: "Countries Data",
      statTests: "Tests Written",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      ctaDownloadCV: "Download CV",
    },
    about: {
      eyebrow: "About Me",
      heading: "Engineer by training, builder by passion.",
      intro:
        "I'm a Backend Python & Data Engineer with 5+ years solving complex data challenges -- and I direct that expertise with generative AI toward what each client actually needs, instead of forcing the same solution every time.",
      bioAI:
        "I use generative AI (Claude Code) to explore problems, review architecture, and code -- not just to write code faster, but to decide better what to build. For example, I coordinate autonomous workflows combining a generator + independent evaluator review system (harness), Linear tickets, and scheduled cron jobs that only trigger when work is pending.",
      bio1:
        "Currently at Numerator, I architect data pipelines that process consumer panel data across 16+ Latin American countries, combining statistical analysis, software engineering, and cloud infrastructure to deliver insights that drive business decisions.",
      bio2:
        "I believe in writing clean, tested code. With 385+ tests in my latest project and a passion for developer experience, I build systems that are both powerful and maintainable.",
      bio3:
        "Beyond data, I enjoy building full-stack applications with React and TypeScript, bringing the same engineering rigor to frontend development.",
      techLabel: "Technologies I work with daily",
      educationLabel: "Education",
      education: "PhD in Engineering Sciences (Electronics & Communications) and Electrical Engineering (B.Sc. + M.Sc.) — Pontificia Universidad Católica de Chile",
      highlights: [
        {
          title: "AI & Automation",
          description: "AI-driven workflow orchestration (Claude Code) to explore problems, review architecture, and accelerate development and QA.",
        },
        {
          title: "Data Engineering",
          description: "Building scalable ETL pipelines with Python, Polars, and Databricks for LATAM markets.",
        },
        {
          title: "Backend Development",
          description: "Creating robust APIs and microservices with FastAPI and modern Python patterns.",
        },
        {
          title: "Full-Stack Apps",
          description: "Developing React applications with TypeScript and modern tooling.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's connect.",
      intro:
        "I'm always interested in hearing about new opportunities, collaborations, or just having a chat about data and technology.",
      labelEmail: "Email",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      labelLocation: "Location",
      ctaTitle: "Get in touch",
      ctaText:
        "Whether you have a project in mind, a question about data engineering, or just want to say hi, I'd love to hear from you.",
      ctaButton: "Send me an email",
    },
    footer: {
      builtWith: "Built with React + Tailwind.",
      downloadCV: "Download CV",
    },
    projects: {
      eyebrow: "Projects",
      heading: "Things I've built.",
      intro:
        "From data pipelines processing millions of records to full-stack applications, here are some projects I'm proud of.",
      viewMore: "View more on GitHub",
      categoryAll: "All Projects",
      categoryFullstack: "Full-Stack",
      categoryData: "Data Engineering",
      categoryBackend: "Backend",
      categoryAI: "AI",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Technical expertise.",
      intro: "Specialized in Python and data engineering, with strong full-stack capabilities.",
      alsoExperienced: "Also experienced with",
    },
    experience: {
      eyebrow: "Experience",
      heading: "Where I've worked.",
      intro: "From industrial engineering to data pipelines, building solutions across diverse industries.",
    },
  },
};
