export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
    image: string;
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
    "Career / Learning Journey"
];
