import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "driver-booking-platform",
    name: "D-Drive Platform",
    shortDescription: "Driver booking for your own vehicle. I contributed as a developer at Deepvibe.",
    description:
      "D-Drive is a driver-booking platform developed at Deepvibe IT Solutions. Customers book a driver for their own vehicle, while drivers and administrators use separate workflows for assignments, booking management, and operations. I contributed to it as an employee of Deepvibe. It is the company’s product, not mine, and this page does not describe its launch status or usage.",
    category: "Full-stack application",
    kind: "employment",
    role: "Software Developer, primary developer on the platform",
    organization: "Deepvibe IT Solutions Pvt. Ltd.",
    period: "August 2025–July 2026",
    problem:
      "The product needed a booking flow for customers who want a driver for their own vehicle, plus the operational tools drivers and administrators use to run that work.",
    users:
      "Customers making a booking, drivers handling assigned work, and administrators managing bookings and operations.",
    contribution: [
      "Worked as the primary developer across system design, frontend, backend, database, APIs, integrations, and deployment.",
      "Implemented customer, driver, and admin workflows, including booking management and dashboards.",
      "Implemented authentication, role-based access control, input validation, and business logic.",
      "Built REST APIs and MongoDB models with Node.js and Express.js.",
      "Worked on real-time functionality and PWA support, connecting frontend workflows to backend services.",
      "Worked on six or more core modules: customer, driver, admin, booking, authentication, and operations.",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Customer booking",
      "Driver workflow",
      "Admin operations",
      "Authentication and role-based access",
      "Real-time updates",
      "PWA support",
    ],
    decisions: [
      "Kept customer, driver, and admin workflows separate so each role only reaches the operations it is responsible for.",
      "Put authorization in role-based access control instead of a single shared account model.",
      "Modeled bookings and related operational records in MongoDB behind REST endpoints with input validation.",
    ],
    architecture:
      "A Node.js and Express application with MongoDB. The API covers authentication, booking management, and the main operational modules. Real-time updates support the live parts of the workflow, and the client can be installed as a PWA.",
    featured: true,
    visual: { type: "illustration", variant: "booking-roles" },
    note: "There is no public demo or source repository for this project, so neither is linked. The illustration is a schematic of the three roles, not a product screenshot.",
  },
  {
    slug: "deepvibe-website",
    name: "Deepvibe Website",
    shortDescription: "Corporate site presenting Deepvibe IT Solutions’ services.",
    description:
      "A public website for Deepvibe IT Solutions, developed while I worked there as a software developer. It explained the company’s services and gave visitors a way to make contact.",
    category: "Corporate website",
    kind: "employment",
    role: "Software Developer",
    organization: "Deepvibe IT Solutions Pvt. Ltd.",
    period: "August 2025–July 2026",
    problem:
      "The company needed a public site where visitors could understand its services and reach the team.",
    users: "Prospective clients and other visitors looking up Deepvibe IT Solutions.",
    contribution: [
      "Built the public website used to present Deepvibe’s services and company information.",
    ],
    technologies: [],
    features: ["Service information", "Company information", "Contact path for visitors"],
    decisions: [
      "Kept the site focused on services, company information, and contact, rather than turning it into a product application.",
    ],
    architecture:
      "A public marketing site for the company. The earlier domain no longer resolves and the repository is not public, so implementation details beyond that are not listed here.",
    featured: false,
    visual: { type: "illustration", variant: "corporate-site" },
    note: "The earlier public domain does not currently resolve, and the repository is not public. Those links are omitted.",
  },
  {
    slug: "techworth-website",
    name: "Techworth Website",
    shortDescription: "Public React site for Techworth’s technology services.",
    description:
      "The public website for Techworth Private Limited. The live site is a React application that introduces the company’s technology services, including web development, mobile apps, cloud solutions, and testing.",
    category: "Marketing website",
    kind: "company",
    role: "Developer of the public website",
    organization: "Techworth Private Limited",
    problem:
      "Techworth needed a public website that introduces the company and the technology services it offers.",
    users: "Visitors looking for Techworth Private Limited and its services.",
    contribution: ["Built the public marketing website that is currently deployed."],
    technologies: ["React"],
    features: ["Company introduction", "Service information", "Responsive public pages"],
    decisions: [
      "Shipped the public site as a React application, which is what the live deployment serves today.",
    ],
    architecture:
      "The live site is a client-rendered React application. The page shell loads a static JavaScript bundle and renders into a root element. No additional backend is claimed here because it is not visible from the public deployment.",
    featured: true,
    visual: {
      type: "screenshot",
      image: {
        src: "/projects/techworth-website.webp",
        alt: "Techworth website home page with the headline “Empower Your Business With Cutting-Edge Technology”",
        width: 1440,
        height: 900,
      },
      caption: "Captured from the live site at techworth.org.in.",
    },
    liveUrl: "https://www.techworth.org.in/",
    note: "A public source repository is not available, so only the live site is linked.",
  },
  {
    slug: "ai-assistant",
    name: "AI Assistant",
    shortDescription: "Flask and Gemini app for explanations, code help, and document Q&A.",
    description:
      "A personal project: a single-page assistant built with Flask and the Google Gemini API. One interface covers several study and coding tasks, including conversation, concept and code explanation, code generation, question and MCQ generation, a calculator mode, and questions about uploaded documents.",
    category: "Generative AI web app",
    kind: "personal",
    role: "Personal project",
    organization: "Personal project",
    period: "2025",
    problem:
      "Switching between separate tools for explanations, code help, practice questions, and document lookups is slow. This project puts those tasks behind one interface.",
    users: "Students and developers who want quick explanations, code help, and practice questions in one place.",
    contribution: [
      "Built the Flask backend with routes for the page, chat requests, and document uploads.",
      "Wrote a prompt builder that switches behavior across eight modes, from conversation and code generation to MCQs and calculation.",
      "Added document upload and retrieval using Hugging Face sentence embeddings and a vector store, with LangChain loaders for common file types.",
      "Built the frontend in HTML, Tailwind CSS, and JavaScript, including a dark mode toggle.",
    ],
    technologies: ["Python", "Flask", "Google Gemini", "LangChain", "Hugging Face", "JavaScript", "Tailwind CSS"],
    features: [
      "Conversation mode",
      "Concept and code explanation",
      "Code generation",
      "Question and MCQ generation",
      "Calculator mode",
      "Questions about uploaded documents",
      "Dark mode",
    ],
    decisions: [
      "Used one prompt builder with explicit modes, so each task gets its own instructions while the chat endpoint stays the same.",
      "Kept the Gemini API key in an environment variable loaded with python-dotenv.",
      "Indexed uploaded documents with all-MiniLM-L6-v2 embeddings so answers can draw on the user’s own files.",
    ],
    architecture:
      "A Flask application (app.py) serves one HTML template and exposes a chat endpoint and a document upload endpoint. The chat endpoint builds a mode-specific prompt and calls the Gemini 1.5 Flash model. Uploaded files are parsed with LangChain loaders, embedded with a Hugging Face sentence-transformer, and stored in a vector store for retrieval. The frontend is plain JavaScript that calls the backend.",
    featured: true,
    visual: {
      type: "screenshot",
      image: {
        src: "/projects/ai-assistant.webp",
        alt: "AI Assistant interface in dark mode, with a mode selector, a question field, and an answer explaining what AI is",
        width: 1300,
        height: 812,
      },
      caption: "Screenshot from the project repository.",
    },
    repositoryUrl: "https://github.com/RevanthKumar66/AI-Assistant",
  },
  {
    slug: "pneumonia-detection",
    name: "Pneumonia Detection",
    shortDescription: "Chest X-ray classification with classic ML, CNNs, and transfer learning.",
    description:
      "A personal machine learning project that classifies chest X-ray images as normal or pneumonia. The work is organized as eight Jupyter notebooks that move from data exploration to classic ML baselines, a custom CNN, transfer learning, evaluation, Grad-CAM explainability, and an ensemble of the trained models.",
    category: "Machine learning",
    kind: "personal",
    role: "Personal project",
    organization: "Personal project",
    period: "2025",
    problem:
      "Classify chest X-ray images into two classes, normal and pneumonia, and compare how different modeling approaches perform on the same data.",
    users: "A learning and research project rather than a clinical tool.",
    contribution: [
      "Explored the chest X-ray dataset and its class distribution across train, validation, and test splits.",
      "Built preprocessing and augmentation steps for the images.",
      "Trained classic ML baselines with scikit-learn, including logistic regression, SVM, and random forest.",
      "Built a custom CNN and fine-tuned ResNet50, DenseNet121, EfficientNetB0, and VGG16 with TensorFlow and Keras.",
      "Compared the models, visualized their decisions with Grad-CAM, and combined them in an ensemble.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Jupyter"],
    features: [
      "Data exploration",
      "Preprocessing and augmentation",
      "Classic ML baselines",
      "Custom CNN",
      "Transfer learning",
      "Model comparison",
      "Grad-CAM explainability",
      "Model ensemble",
    ],
    decisions: [
      "Started with classic ML baselines so the deep learning models had a clear point of comparison.",
      "Compared four pretrained architectures under the same preprocessing instead of committing to one early.",
      "Used Grad-CAM heatmaps to check which regions of an X-ray drove each prediction.",
    ],
    architecture:
      "Eight Jupyter notebooks, each covering one stage: data exploration, preprocessing and augmentation, classic ML models, a custom CNN, transfer learning, evaluation and comparison, explainability, and ensemble models.",
    featured: true,
    visual: { type: "illustration", variant: "ml-pipeline" },
    repositoryUrl: "https://github.com/RevanthKumar66/Pneumonia-Detection",
    note: "Model accuracy figures are not listed here. They live in the notebooks, and I have not restated them without the evaluation context.",
  },
];
