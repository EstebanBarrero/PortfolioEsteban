export type { Lang } from '../domain';

export const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About', skills: 'Skills',
      projects: 'Projects', experience: 'Experience', ai: 'AI', contact: 'Contact',
    },
    hero: {
      available: 'Available for new projects',
      greeting: "Hi, I'm",
      bio: 'Full-Stack Developer &amp; AI Engineer from <strong>Colombia</strong> building scalable systems where backend reliability meets frontend elegance, with AI at the core.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      langSpanish: 'Spanish — Native',
      langEnglish: 'English — B2',
      openToWork: 'Open to work',
      scroll: 'Scroll',
      typewriterPhrases: [
        'Full Stack Developer', 'AI Engineer', 'Cloud Architect', 'MCP Builder', 'AI Agent Developer', 'RAG & Automation Specialist',
      ],
    },
    about: {
      label: '01. about_me',
      title: 'The Developer Behind the Code',
      bio1: 'I was born in <strong>Colombia</strong> and started writing code as a teenager, driven by a simple curiosity: understanding how the technology we use every day works. What began with simple HTML pages quickly became a passion for designing and building complex, scalable systems capable of solving real problems.',
      bio2: 'Today I specialize in <strong>Full Stack development</strong> and <strong>AI integration</strong>. I enjoy designing cloud native architectures on AWS, building applications powered by AI models like OpenAI and Claude, and creating products where technology delivers tangible value to users.',
      bio3: 'When I\'m not coding, I usually explore the latest advances in <strong>Artificial Intelligence</strong>, experiment with autonomous agents and LLMs, or refine my tech stack to keep learning and building better solutions.',
      statProjects: 'Projects Shipped',
      statYears: 'Years Experience',
      statAWS: 'AWS Services',
      statCoffee: 'Coffee Consumed',
      yearsExp: 'Years Exp.',
      langSpanish: 'Spanish — <strong>Native</strong>',
      langEnglish: 'English — <strong>B2</strong>',
      fact1Title: 'Favorite Stack',
      fact1Desc: 'NestJS + Angular + AWS + Anthropic Claude for enterprise AI apps',
      fact2Title: 'Current Obsession',
      fact2Desc: 'Building MCP servers and agentic workflows with Claude Agent SDK',
      fact3Title: 'Side Projects',
      fact3Desc: 'Open-source AI dev tools, RAG systems, and serverless architectures',
    },
    skills: {
      label: '02. skills',
      title: 'Tools of the Trade',
      subtitle: 'Technologies I work with daily — from frontend elegance to cloud architecture',
      catFrontend: 'Frontend', catBackend: 'Backend',
      catAI: 'AI & LLMs', catDevOps: 'Cloud & DevOps', catTools: 'Tools',
      coreLabel: 'proficiency',
      coreTitle: 'Core Competencies',
      softLabel: 'beyond the code',
      softTitle: 'Soft Skills',
      softSubtitle: 'Great software is built by great people these are the human qualities I bring to every team',
      softSkills: [
        {
        name: 'Leadership',
        desc: 'Inspire and guide teams with clarity and purpose, translating strategic vision into actionable outcomes while aligning people around shared goals.'
        },
        {
        name: 'Communication',
        desc: 'Communicate complex technical concepts clearly and effectively, enabling collaboration across teams, stakeholders, and clients.'
        },
        {
        name: 'Teamwork',
        desc: 'Collaborate effectively within cross-functional teams, fostering alignment between engineering, design, and business through empathy and transparency.'
        },
        {
        name: 'Respect & Inclusion',
        desc: 'Cultivate inclusive environments where every voice is valued, promoting mutual respect, diversity, and psychological safety.'
        },
        {
        name: 'Problem Solving',
        desc: 'Analyze complex challenges, identify root causes, and deliver practical, scalable solutions, even under pressure.'
        },
        {
        name: 'Adaptability',
        desc: 'Embrace change with agility, quickly adapting to evolving requirements, emerging technologies, and dynamic business needs.'
        },
        {
        name: 'Mentorship',
        desc: 'Support the growth of others through knowledge sharing, constructive feedback, and continuous professional development.'
        },
        {
        name: 'Critical Thinking',
        desc: 'Evaluate alternatives objectively, challenge assumptions thoughtfully, and make informed decisions backed by data and evidence.'
        },
        {
        name: 'Time Management',
        desc: 'Prioritize effectively, consistently meet deadlines, and proactively communicate risks, dependencies, and blockers.'
        },
        {
        name: 'Continuous Learning',
        desc: 'Maintain a growth mindset by continuously exploring new technologies, refining skills, and sharing knowledge with others.'
        },
        {
        name: 'Empathy',
        desc: 'Understand the needs and perspectives of users and teammates to create meaningful solutions that deliver real value.'
        },
        {
        name: 'Accountability',
        desc: 'Take ownership of commitments and outcomes, demonstrating integrity, reliability, and a strong focus on excellence.'
        }
        ],
    },
    projects: {
      label: '03. projects',
      title: "Things I've Built",
      subtitle: 'From AI-powered platforms to cloud native architectures production-grade work',
      catAll: 'All Projects', catAI: 'AI Projects', catWeb: 'Web Apps',
      catAPI: 'APIs & Backends', catDevOps: 'Cloud / DevOps',
    },
    experience: {
      label: '04. experience',
      title: "Where I've Worked",
      subtitle: '4+ years of shipping production code across agencies, startups, and enterprise',
    },
    ai: {
      label: '05. ai_engineering',
      title: 'AI at the Core',
      subtitle: 'Building the next generation of software with LLMs, agents, and MCP integrations',
      headlineMain: 'Connecting AI to the',
      headlineAccent: 'Real World',
      introPara1: 'I specialize in building production AI systems that go beyond simple chat  connecting large language models to live data sources, APIs, and internal tools through the <strong>Model Context Protocol (MCP)</strong>.',
      introPara2: 'My work spans from rapid prompt engineering and fine tuning to architecting multi agent pipelines that handle complex, real world business workflows with full observability and safety guardrails.',
      card1Title: 'OpenAI Integration',
      card1Desc: 'GPT-4o, GPT-4 Vision, Whisper, DALL-E 3, Embeddings API — production-grade integrations with streaming, function calling, and structured outputs.',
      card2Title: 'Anthropic Claude',
      card2Desc: 'Claude Opus, Sonnet, and Haiku via Claude API and Claude Agent SDK. Extended thinking, computer use, MCP tools, and multi-turn agentic workflows.',
      card3Title: 'MCP Servers',
      card3Desc: 'Built and deployed custom Model Context Protocol servers connecting Claude to databases, REST APIs, file systems, and internal business services.',
      card4Title: 'RAG & Vector Search',
      card4Desc: 'End-to-end RAG pipelines: document ingestion, chunking, embedding, pgvector/Pinecone storage, and semantic retrieval with re-ranking.',
      card5Title: 'AI Agents',
      card5Desc: 'Multi-agent orchestration systems with tool use, memory, planning, and human-in-the-loop checkpoints for complex automation workflows.',
      card6Title: 'AWS Bedrock & SageMaker',
      card6Desc: 'Deployed fine-tuned models and managed LLM endpoints on AWS Bedrock. Custom training pipelines on SageMaker for domain-specific models.',
    },
    contact: {
      label: '06. contact',
      title: "Let's Build Something",
      subtitle: 'Open to freelance projects, full-time roles, and AI consulting',
      available: 'Available for new opportunities',
      tagline: 'Got a project in mind?',
      taglineAccent: "I'd love to hear about it.",
      desc: "Whether you're building an AI product, need cloud architecture help, or want a full stack developer to join your team let's talk.",
      locationTZ: 'UTC-5 · Open to remote worldwide',
      formName: 'Name', formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formSubject: 'Subject', formSubjectPlaceholder: 'Project idea, collaboration, etc.',
      formMessage: 'Message', formMessagePlaceholder: 'Tell me about your project...',
      formSubmit: 'Send Message →',
      formSending: 'Sending...',
      formSuccess: "✓ Message sent! I'll get back to you soon.",
    },
    footer: {
      tagline: 'Full-Stack Developer &amp; AI Engineer',
      navTitle: 'Navigate',
      connectTitle: 'Connect',
      home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects',
      experience: 'Experience', ai: 'AI', contact: 'Contact',
      backToTop: '↑ Top',
    },
  },

  es: {
    nav: {
      home: 'Inicio', about: 'Sobre Mí', skills: 'Habilidades',
      projects: 'Proyectos', experience: 'Experiencia', ai: 'IA', contact: 'Contacto',
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      greeting: 'Hola, soy',
      bio: 'Desarrollador Full-Stack e Ingeniero de IA de <strong>Colombia</strong> construyendo sistemas escalables donde la solidez del backend se une a la elegancia del frontend, con IA en el núcleo.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      langSpanish: 'Español — Nativo',
      langEnglish: 'Inglés — B2',
      openToWork: 'Disponible para trabajar',
      scroll: 'Bajar',
      typewriterPhrases: [
        'Desarrollador Full Stack', 'Ingeniero de IA', 'Arquitecto Cloud',
        'Constructor de MCPs', 'Desarrollador de Agentes IA', 'Especialista en RAG y Automatización',
      ],
    },
    about: {
      label: '01. sobre_mí',
      title: 'El Desarrollador Detrás del Código',
      bio1: 'Nací en <strong>Colombia</strong> y comencé a programar durante mi adolescencia, impulsado por una simple curiosidad: entender cómo funciona la tecnología que utilizamos todos los días. Lo que empezó creando páginas web en HTML pronto se transformó en una pasión por diseñar y construir sistemas complejos, escalables y capaces de resolver problemas reales.',
      bio2: 'Actualmente me especializo en el desarrollo <strong>Full Stack</strong> y en la integración de soluciones basadas en <strong>Inteligencia Artificial</strong>. Disfruto diseñando arquitecturas cloud-native sobre AWS, desarrollando aplicaciones potenciadas por modelos de IA como OpenAI y Claude, y construyendo productos donde la tecnología aporta valor tangible a los usuarios.',
      bio3: 'Cuando no estoy programando, suelo explorar los avances más recientes en <strong>Inteligencia Artificial</strong>, experimentar con agentes autónomos y LLMs, o perfeccionar mi stack tecnológico para seguir aprendiendo y construyendo mejores soluciones.',
      statProjects: 'Proyectos Entregados',
      statYears: 'Años de Experiencia',
      statAWS: 'Servicios AWS',
      statCoffee: 'Cafés Consumidos',
      yearsExp: 'Años Exp.',
      langSpanish: 'Español — <strong>Nativo</strong>',
      langEnglish: 'Inglés — <strong>Nivel B2</strong>',
      fact1Title: 'Stack Favorito',
      fact1Desc: 'Python + FastAPI + React + AWS/VPS + Anthropic Claude para crear aplicaciones empresariales escalables con IA.',
      fact2Title: 'Obsesión Actual',
      fact2Desc: 'Construyendo servidores MCP y flujos agénticos con Claude Agent SDK',
      fact3Title: 'Proyectos Personales',
      fact3Desc: 'Herramientas de desarrollo de IA, sistemas RAG y arquitecturas cloud',
    },
    skills: {
      label: '02. habilidades',
      title: 'Herramientas del Oficio',
      subtitle: 'Tecnologías con las que trabajo a diario desde elegancia Frontend hasta arquitectura Cloud',
      catFrontend: 'Frontend', catBackend: 'Backend',
      catAI: 'IA & LLMs', catDevOps: 'Cloud & DevOps', catTools: 'Herramientas',
      coreLabel: 'competencia',
      coreTitle: 'Competencias Clave',
      softLabel: 'más allá del código',
      softTitle: 'Habilidades Blandas',
      softSubtitle: 'El gran software lo construye gran gente estas son las cualidades humanas que aporto a cada equipo',
      softSkills: [
        {
        name: 'Liderazgo',
        desc: 'Inspirar y guiar equipos con claridad y propósito, transformando la visión estratégica en acciones concretas y alineando a las personas hacia objetivos compartidos.'
        },
        {
        name: 'Comunicación',
        desc: 'Comunicar ideas y conceptos técnicos de forma clara y efectiva, facilitando la colaboración entre equipos, clientes y stakeholders.'
        },
        {
        name: 'Trabajo en Equipo',
        desc: 'Colaborar eficazmente en entornos multidisciplinarios, fomentando la alineación entre desarrollo, diseño y negocio mediante la empatía y la transparencia.'
        },
        {
        name: 'Respeto e Inclusión',
        desc: 'Promover entornos de trabajo inclusivos donde todas las voces sean escuchadas, impulsando el respeto mutuo, la diversidad y la seguridad psicológica.'
        },
        {
        name: 'Resolución de Problemas',
        desc: 'Analizar desafíos complejos, identificar causas raíz y desarrollar soluciones prácticas y sostenibles, incluso bajo presión.'
        },
        {
        name: 'Adaptabilidad',
        desc: 'Responder con agilidad a los cambios, adoptando nuevas tecnologías, metodologías y prioridades sin perder el enfoque en los resultados.'
        },
        {
        name: 'Mentoría',
        desc: 'Impulsar el crecimiento profesional de otros mediante el intercambio de conocimientos, la retroalimentación constructiva y el acompañamiento continuo.'
        },
        {
        name: 'Pensamiento Crítico',
        desc: 'Evaluar alternativas de manera objetiva, cuestionar supuestos con criterio y respaldar decisiones estratégicas y técnicas con evidencia.'
        },
        {
        name: 'Gestión del Tiempo',
        desc: 'Organizar prioridades de forma efectiva, cumplir plazos de manera consistente y comunicar riesgos o bloqueos de manera oportuna.'
        },
        {
        name: 'Aprendizaje Continuo',
        desc: 'Mantener una mentalidad de crecimiento constante, explorando nuevas tecnologías, compartiendo conocimientos y mejorando habilidades de forma proactiva.'
        },
        {
        name: 'Empatía',
        desc: 'Comprender las necesidades de usuarios y equipos para crear soluciones que generen valor real y experiencias significativas.'
        },
        {
        name: 'Responsabilidad',
        desc: 'Asumir la propiedad de los compromisos y resultados, actuando con integridad, compromiso y enfoque en la excelencia.'
        }
        ]
        
    },
    projects: {
      label: '03. proyectos',
      title: 'Lo Que He Construido',
      subtitle: 'Desde plataformas con IA hasta arquitecturas Cloud Native trabajo de nivel producción',
      catAll: 'Todos', catAI: 'Proyectos IA', catWeb: 'Web Apps',
      catAPI: 'APIs & Backends', catDevOps: 'Cloud / DevOps',
    },
    experience: {
      label: '04. experiencia',
      title: 'Dónde He Trabajado',
      subtitle: '4+ años de código en producción en startups, agencias y empresas',
    },
    ai: {
      label: '05. ia_ingeniería',
      title: 'IA en el Núcleo',
      subtitle: 'Construyendo la próxima generación de software con LLMs, agentes e integraciones MCP',
      headlineMain: 'Conectando la IA con el',
      headlineAccent: 'Mundo Real',
      introPara1: 'Me especializo en construir sistemas de IA en producción que van más allá del simple chat, conectando modelos de lenguaje a fuentes de datos en vivo, APIs y herramientas internas a través del <strong>Model Context Protocol (MCP)</strong>.',
      introPara2: 'Mi trabajo abarca desde ingeniería de prompts y fine tuning hasta arquitecturas de pipelines multi agente que manejan flujos de trabajo empresariales complejos con observabilidad total y guardianes de seguridad.',
      card1Title: 'Integración OpenAI',
      card1Desc: 'GPT-4o, GPT-4 Vision, Whisper, DALL-E 3, API de Embeddings — integraciones de nivel producción con streaming, llamada a funciones y salidas estructuradas.',
      card2Title: 'Anthropic Claude',
      card2Desc: 'Claude Opus, Sonnet y Haiku vía Claude API y Claude Agent SDK. Pensamiento extendido, uso de computadora, herramientas MCP y flujos agénticos de múltiples turnos.',
      card3Title: 'Servidores MCP',
      card3Desc: 'Construí y desplegué servidores MCP personalizados que conectan Claude con bases de datos, APIs REST, sistemas de archivos y servicios empresariales internos.',
      card4Title: 'RAG y Búsqueda Vectorial',
      card4Desc: 'Pipelines RAG completos: ingesta de documentos, fragmentación, embedding, almacenamiento en pgvector/Pinecone y recuperación semántica con re-ranking.',
      card5Title: 'Agentes de IA',
      card5Desc: 'Sistemas de orquestación multi-agente con uso de herramientas, memoria, planificación y puntos de control humano-en-el-bucle para flujos de automatización complejos.',
      card6Title: 'AWS Bedrock y SageMaker',
      card6Desc: 'Modelos fine-tuneados y endpoints LLM administrados en AWS Bedrock. Pipelines de entrenamiento personalizados en SageMaker para modelos de dominio específico.',
    },
    contact: {
      label: '06. contacto',
      title: 'Construyamos Algo',
      subtitle: 'Disponible para proyectos freelance, roles full-time y consultoría en IA',
      available: 'Disponible para nuevas oportunidades',
      tagline: '¿Tienes un proyecto en mente?',
      taglineAccent: 'Me encantaría escucharte.',
      desc: 'Ya sea que estés construyendo un producto de IA, necesites ayuda con arquitectura Cloud, o quieras un desarrollador Full Stack en tu equipo hablemos.',
      locationTZ: '',
      formName: 'Nombre', formNamePlaceholder: 'Tu nombre',
      formEmail: 'Correo',
      formSubject: 'Asunto', formSubjectPlaceholder: 'Idea de proyecto, colaboración, etc.',
      formMessage: 'Mensaje', formMessagePlaceholder: 'Cuéntame sobre tu proyecto...',
      formSubmit: 'Enviar Mensaje →',
      formSending: 'Enviando...',
      formSuccess: '✓ ¡Mensaje enviado! Te respondo pronto.',
    },
    footer: {
      tagline: 'Desarrollador Full Stack e Ingeniero de IA',
      navTitle: 'Navegar',
      connectTitle: 'Conectar',
      home: 'Inicio', about: 'Sobre Mí', skills: 'Habilidades', projects: 'Proyectos',
      experience: 'Experiencia', ai: 'IA', contact: 'Contacto',
      backToTop: '↑ Inicio',
    },
  },
} as const;

export type T = typeof translations.en;
