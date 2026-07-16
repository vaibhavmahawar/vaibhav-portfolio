/**
 * Single source of truth for all portfolio content.
 * Every value here is derived from Vaibhav Kumar Mahawar's actual resume.
 * No fabricated companies, publications, or metrics.
 */

export const profile = {
  name: "Vaibhav Kumar Mahawar",
  title: "AI Engineer • Software Engineer • Computer Vision Researcher",
  headline: ["Engineering Intelligent Systems", "That Perceive, Reason and Act"],
  description:
    "Building production-grade AI systems combining Computer Vision, Multi-Agent AI, Backend Engineering, Autonomous Systems, and Generative AI.",
  location: "Ajmer, Rajasthan, India",
  availability: "Open to AI / Software Engineering roles",
  email: "vaibhavmahawar@rocketmail.com",
  phone: "+91-8209851728",
  github: "https://github.com/vaibhavmahawar",
  linkedin: "https://www.linkedin.com/in/vaibhavkumarmahawar",
  resumeUrl: "/Vaibhav_Kumar_Mahawar_Resume.pdf",
  roles: [
    "AI Engineer",
    "Software Engineer",
    "Computer Vision Researcher",
    "Multi-Agent Systems Builder",
  ],
} as const;

/**
 * Hero statistics. Values are grounded in real work only.
 * No invented awards, years of professional experience, or publication counts.
 */
export const stats: { label: string; value: string; hint: string; href: string }[] = [
  { label: "FLAGSHIP PROJECTS", value: "3", hint: "Production-grade AI systems", href: "#projects" },
  { label: "RESEARCH AREAS", value: "5", hint: "CV, GenAI, Agentic, XAI, Drones", href: "#research" },
  { label: "DETECTION ACCURACY", value: "91%", hint: "YOLOv8 drone detection", href: "#research" },
  { label: "TECHNOLOGIES", value: "30+", hint: "Across the AI/SWE stack", href: "#skills" },
  { label: "YEARS OF STUDY", value: "6+", hint: "B.Tech + M.Tech", href: "#about" },
];

export const about = {
  kicker: "// MISSION_PROFILE",
  heading: "Cognitive Engineering Specialist",
  paragraphs: [
    "I am pursuing an M.Tech in Machine Intelligence and Automation at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar. My work sits at the intersection of Computer Vision, Generative & Agentic AI, and scalable backend engineering.",
    "I specialize in building reasoning systems — pipelines that don't just process data but contextualize it to detect, decide, and act. From YOLOv8 drone detection with ANFIS-based threat reasoning to multi-agent software engineering platforms, I focus on shipping AI that holds up in production.",
  ],
  pillars: [
    {
      icon: "BrainCircuit",
      title: "MACHINE INTELLIGENCE",
      body: "M.Tech research in ANFIS, fuzzy logic, and explainable AI for real-time perception and decision reliability.",
    },
    {
      icon: "ScanEye",
      title: "COMPUTER VISION",
      body: "YOLOv8, OpenCV, CNNs and Vision Transformers for detection, tracking, and spatial perception.",
    },
    {
      icon: "Bot",
      title: "AGENTIC & GENERATIVE AI",
      body: "LangGraph, LangChain, MCP, RAG and multi-agent orchestration for autonomous engineering workflows.",
    },
    {
      icon: "Server",
      title: "BACKEND ENGINEERING",
      body: "FastAPI, Node.js, Redis and Neo4j — modular, scalable services powering AI systems.",
    },
  ],
} as const;

export const education = [
  {
    school: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    degree: "M.Tech — Machine Intelligence & Automation",
    score: "CGPA 8.48 / 10",
    period: "Aug 2024 — Jun 2026",
    location: "Jalandhar, Punjab",
  },
  {
    school: "Poornima Institute of Engineering and Technology",
    degree: "B.Tech — Computer Science & Engineering",
    score: "CGPA 8.54 / 10",
    period: "Jul 2019 — Jun 2023",
    location: "Jaipur, Rajasthan",
  },
];

export const experience = [
  {
    period: "Jul 2022 — Sep 2022",
    role: "Software Development Intern",
    company: "Techienest Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    summary:
      "Built a cross-platform mobile learning product and shipped features end-to-end following software engineering best practices.",
    points: [
      "Developed a React Native mobile application used by 500+ primary students, featuring interactive Vedic mathematics exercises, progress tracking, and REST API integration.",
      "Improved learning accessibility across Android devices through responsive mobile UI and performant client-side rendering.",
      "Collaborated on application testing, debugging, and UI improvements for maintainable, scalable mobile development.",
    ],
    stack: ["React Native", "REST APIs", "Mobile Development", "Testing", "JavaScript"],
  },
];

export type Project = {
  id: string;
  index: string;
  codename: string;
  name: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  challenges: string[];
  architecture: string[];
  lessons: string[];
  diagram: "drone" | "multiagent" | "rag";
  github: string;
  demo?: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    id: "drone-intelligence",
    index: "PROJECT_01",
    codename: "AIR_INTEL",
    name: "Drone Intelligence Platform",
    year: "2026",
    tagline: "Real-time aerial detection, threat reasoning & explainable analysis",
    description:
      "An AI-powered surveillance platform integrating YOLOv8-based drone detection with ANFIS-driven threat assessment. It analyzes uploaded surveillance video, tracks aerial objects in real time, and layers LLM-powered conversational analytics over every detection.",
    stack: ["Python", "YOLOv8", "OpenCV", "ANFIS", "LangChain", "LLMs", "RAG", "Fuzzy Logic"],
    features: [
      "YOLOv8 detection pipeline with real-time bounding boxes and multi-object tracking",
      "ANFIS + fuzzy-logic post-processing for robust threat classification",
      "RAG-powered conversational analytics to explain, summarize and compare detections",
      "Telemetry overlay: coordinates, distance estimation and live inference metrics",
    ],
    challenges: [
      "Reducing bird–drone misclassification in cluttered, low-visibility scenes",
      "Keeping inference real-time while running fuzzy reasoning on top of detections",
      "Making model decisions explainable rather than a black box",
    ],
    architecture: [
      "Video ingestion → frame extraction → YOLOv8 detection engine",
      "Detections → ANFIS threat scoring → structured event log",
      "Event log → vector store → RAG query layer → LLM explanation",
    ],
    lessons: [
      "Fuzzy-logic post-processing measurably improves reliability over raw detections.",
      "Explainability is a product feature — surfacing the 'why' builds operator trust.",
    ],
    diagram: "drone",
    github: "https://github.com/vaibhavmahawar",
    flagship: true,
  },
  {
    id: "rudra",
    index: "PROJECT_02",
    codename: "AGENT_ORCHESTRATOR",
    name: "Rudra — AI Software Engineering Platform",
    year: "2026",
    tagline: "Autonomous multi-agent platform for the software development lifecycle",
    description:
      "An autonomous AI engineering platform that assists developers across the SDLC — generating code, debugging, analyzing repositories, reviewing pull requests, writing documentation and automating workflows through coordinated multi-agent AI.",
    stack: ["Node.js", "TypeScript", "Python", "FastAPI", "LangGraph", "MCP", "Neo4j", "Redis", "Docker"],
    features: [
      "Planner agent decomposes tasks and routes them to specialized agents",
      "Tool-calling + Model Context Protocol (MCP) for grounded agent actions",
      "Memory-enabled reasoning backed by Neo4j graph + Redis state",
      "Scalable FastAPI backend with modular, service-oriented architecture",
    ],
    challenges: [
      "Coordinating specialized agents without runaway loops or context drift",
      "Persisting reasoning state and code context across long-running tasks",
      "Designing a router that reliably decomposes ambiguous engineering requests",
    ],
    architecture: [
      "Planner → Router → specialized agents (analysis / search / code)",
      "Agents call tools via MCP; state persisted in Redis, relations in Neo4j",
      "FastAPI gateway orchestrates agent graph via LangGraph",
    ],
    lessons: [
      "A dedicated router/planner layer is the backbone of reliable multi-agent systems.",
      "Graph + cache state (Neo4j + Redis) keeps long agentic workflows coherent.",
    ],
    diagram: "multiagent",
    github: "https://github.com/vaibhavmahawar",
    flagship: false,
  },
  {
    id: "career-twin",
    index: "PROJECT_03",
    codename: "CAREER_INTELLIGENCE",
    name: "Career Twin — AI Career Intelligence",
    year: "2026",
    tagline: "Resume analysis, ATS optimization & RAG-driven career guidance",
    description:
      "An AI-driven career platform that analyzes resumes, matches job descriptions, identifies skill gaps, and generates ATS-optimized resumes, cover letters and interview prep — powered by semantic retrieval and AWS Bedrock reasoning pipelines.",
    stack: ["React", "TypeScript", "AWS Bedrock", "LangGraph", "RAG", "Vector Search", "FastAPI"],
    features: [
      "Resume + job-description analysis with skill-gap identification",
      "ATS-optimized resume and cover letter generation",
      "RAG pipeline with vector search over professional history",
      "Personalized interview preparation and conversational guidance",
    ],
    challenges: [
      "Producing genuinely ATS-friendly output rather than generic text",
      "Grounding recommendations in the user's real history via retrieval",
      "Structuring reasoning pipelines for consistent, personalized results",
    ],
    architecture: [
      "Document ingestion → parsing → chunking → embeddings",
      "Vector store ← semantic retrieval → AWS Bedrock reasoning",
      "Structured generation → ATS resume / cover letter / interview plan",
    ],
    lessons: [
      "Retrieval grounding is what separates personalized advice from generic output.",
      "Structured reasoning pipelines make LLM output reliable enough to ship.",
    ],
    diagram: "rag",
    github: "https://github.com/vaibhavmahawar",
    flagship: false,
  },
];

export const research = {
  kicker: "// RESEARCH_LOG",
  heading: "Authentic Research Directions",
  areas: [
    {
      icon: "Radar",
      title: "Drone Detection & Classification",
      body: "Real-time YOLOv8 framework on RGB + infrared data achieving 91%+ detection accuracy, with ANFIS post-processing that cut bird–drone misclassification by 52%.",
      tags: ["YOLOv8", "OpenCV", "ANFIS", "Fuzzy Logic"],
    },
    {
      icon: "ScanEye",
      title: "Computer Vision",
      body: "Detection, tracking and spatial perception using CNNs and Vision Transformers, evaluated across thousands of surveillance frames and benchmark sequences.",
      tags: ["CNNs", "ViT", "Transfer Learning"],
    },
    {
      icon: "Sparkles",
      title: "Generative AI",
      body: "Large Language Models, Retrieval-Augmented Generation, prompt engineering and long-context reasoning for enterprise-scale applications.",
      tags: ["LLMs", "RAG", "Embeddings"],
    },
    {
      icon: "Bot",
      title: "Agentic AI",
      body: "Multi-agent collaboration, Model Context Protocol (MCP), tool calling and autonomous workflow orchestration with LangGraph and CrewAI.",
      tags: ["MCP", "LangGraph", "Multi-Agent"],
    },
    {
      icon: "Lightbulb",
      title: "Explainable AI",
      body: "Combining computer vision, fuzzy inference and LLMs to make model decisions interpretable and trustworthy for decision support.",
      tags: ["XAI", "Fuzzy Inference"],
    },
  ],
  // Publications exist per resume (international journals & conferences) but specific
  // titles/venues are not yet available, so no fabricated entries are shown.
  publicationsNote:
    "Peer-reviewed research published in international journals and conferences across Computer Vision, Intelligent Surveillance, Optimization and Renewable Energy. Full citations available on request.",
} as const;

export type SkillCategory = {
  title: string;
  icon: string;
  accent: "cyan" | "emerald" | "blue";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    accent: "cyan",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    accent: "cyan",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "CNNs", "Transformers", "Vision Transformers", "Transfer Learning"],
  },
  {
    title: "Computer Vision",
    icon: "ScanEye",
    accent: "emerald",
    skills: ["OpenCV", "YOLOv8", "ANFIS", "Fuzzy Logic", "Object Detection", "Image Processing"],
  },
  {
    title: "Generative & Agentic AI",
    icon: "Bot",
    accent: "blue",
    skills: ["OpenAI GPT", "Gemini", "LangChain", "LangGraph", "CrewAI", "LlamaIndex", "MCP", "RAG", "Multi-Agent Systems", "Tool Calling"],
  },
  {
    title: "Backend",
    icon: "Server",
    accent: "emerald",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Microservices", "Authentication"],
  },
  {
    title: "Databases",
    icon: "Database",
    accent: "cyan",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Neo4j", "Redis", "FAISS", "Weaviate"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    accent: "blue",
    skills: ["AWS", "Azure AI", "GCP", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "MLflow"],
  },
  {
    title: "Data Engineering",
    icon: "Workflow",
    accent: "emerald",
    skills: ["Pandas", "NumPy", "PySpark", "ETL Pipelines", "Feature Engineering"],
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    detail: "Azure AI services, ML fundamentals, Responsible AI and AI solution development.",
  },
  {
    title: "GATE Qualified",
    detail: "GATE Computer Science (2024 & 2026) and GATE Data Science & AI (DA 2026).",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
