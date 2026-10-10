import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces and components.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS"],
  },
  {
    title: "Backend",
    description: "Services and business logic.",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Python", "Java", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Data models and queries.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "SQL"],
  },
  {
    title: "Cloud and tools",
    description: "Deployment and version control.",
    skills: ["AWS", "Docker", "Git", "GitHub", "GitHub Actions", "Vercel", "Supabase"],
  },
  {
    title: "Architecture",
    description: "How the pieces fit together.",
    skills: ["System design", "API design", "Role-based access control", "Multi-tenancy"],
  },
  {
    title: "Data and ML",
    description: "Notebooks, models, and LLM tooling.",
    skills: ["NumPy", "Pandas", "Scikit-learn", "LangChain", "LangGraph", "RAG"],
  },
];

export const coreSkillGroups = skillGroups.slice(0, 4);
