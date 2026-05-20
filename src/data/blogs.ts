export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
    image: string;
    tags?: string[];
    content?: string;
    author: {
        name: string;
        role: string;
        initials: string;
        avatar?: string;
    };
}

export const blogs: BlogPost[] = [
    {
        id: "9",
        title: "Building Agentic AI Systems: LangChain, AutoGen & Tool-Calling in 2025",
        excerpt: "A practical breakdown of how agentic AI workflows differ from traditional LLM pipelines — covering multi-agent orchestration, tool-calling, memory management, and real production deployment patterns using LangChain and AutoGen.",
        date: "May 18, 2026",
        category: "AI & Machine Learning",
        readTime: "14 min read",
        slug: "agentic-ai-langchain-autogen-2025",
        image: "",
        tags: ["Agentic AI", "LangChain", "AutoGen", "LLM", "AI Agents", "GPT-4o"],
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "8",
        title: "RAG Pipeline Architecture: Build a Production-Grade Knowledge Base with LLMs",
        excerpt: "Step-by-step guide to building a Retrieval-Augmented Generation system from scratch — vector embeddings with FAISS/Pinecone, chunking strategies, hybrid search, reranking, and integrating with OpenAI and Gemini APIs.",
        date: "May 5, 2026",
        category: "AI & Machine Learning",
        readTime: "16 min read",
        slug: "rag-pipeline-production-llm",
        image: "",
        tags: ["RAG", "Vector Database", "Pinecone", "FAISS", "LLM", "Embeddings", "OpenAI"],
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "7",
        title: "React 19 & Next.js 15: Everything That Changed and How to Migrate",
        excerpt: "A complete technical walkthrough of React 19's new hooks (useOptimistic, useFormStatus, use()), Server Actions in Next.js 15, Turbopack stability, and the Partial Prerendering strategy — with real migration examples.",
        date: "Apr 20, 2026",
        category: "Full-Stack Development",
        readTime: "11 min read",
        slug: "react-19-nextjs-15-migration-guide",
        image: "",
        tags: ["React 19", "Next.js 15", "Server Actions", "Turbopack", "Partial Prerendering"],
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "1",
        title: "How I Built a Real-Time ICU Monitoring System Using CV",
        excerpt: "A deep dive into the architecture and challenges of building a computer vision system for critical healthcare monitoring.",
        date: "Jan 12, 2026",
        category: "Computer Vision",
        readTime: "12 min read",
        slug: "icu-monitoring-cv",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "2",
        title: "End-to-End Stock Price Prediction Using ML & LSTM",
        excerpt: "Explaining the implementation of Long Short-Term Memory networks for financial time-series forecasting.",
        date: "Dec 28, 2025",
        category: "AI & Machine Learning",
        readTime: "15 min read",
        slug: "stock-prediction-lstm",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "3",
        title: "Designing Scalable Full-Stack Applications in React & Node",
        excerpt: "Best practices for building robust, secure, and maintainable full-stack systems with modern frameworks.",
        date: "Dec 10, 2025",
        category: "Full-Stack Development",
        readTime: "10 min read",
        slug: "scalable-fullstack-react-node",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "4",
        title: "Lessons from Building AI Assistants with Gemini API",
        excerpt: "My journey of integrating Google's Gemini models into production-level AI assistants.",
        date: "Nov 22, 2025",
        category: "AI & Machine Learning",
        readTime: "8 min read",
        slug: "ai-assistants-gemini",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "5",
        title: "From Student to Engineer: My Learning Path",
        excerpt: "Sharing my personal journey, the books that shaped me, and the projects that defined my career.",
        date: "Oct 15, 2025",
        category: "Career / Learning Journey",
        readTime: "7 min read",
        slug: "student-to-engineer-journey",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    },
    {
        id: "6",
        title: "Understanding Microservices Architecture",
        excerpt: "How to decompose a monolith into scalable microservices using Docker and Kubernetes.",
        date: "Sep 30, 2025",
        category: "System Design",
        readTime: "14 min read",
        slug: "understanding-microservices",
        image: "",
        author: {
            name: "Revanth Kumar",
            role: "Software Developer & AI Engineer",
            initials: "RK"
        }
    }
];

export const categories = [
    "All",
    "AI & Machine Learning",
    "Full-Stack Development",
    "Computer Vision",
    "Data Science",
    "System Design",
    "DevOps & Cloud",
    "Career / Learning Journey"
];
