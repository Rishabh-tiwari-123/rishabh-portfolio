// Single source of truth for portfolio content (Rishabh Tiwari)

export const PERSON = {
  name: "Rishabh Tiwari",
  shortName: "RT",
  title: "Full-Stack · AI / ML Developer",
  location: "Gorakhpur, India",
  email: "rishabh12345601@gmail.com",
  phone: "+91 9169844434",
  linkedin: "https://linkedin.com/in/rishabh-tiwari-343b10347",
  github: "https://github.com/Rishabh-tiwari-123",
  resumeUrl: "/Rishabh_Tiwari_Resume.pdf",
  tagline:
    "I build full-stack, AI-powered, and client-focused products — from agricultural marketplaces to ML diagnostic tools.",
};

export const STATS = [
  { label: "CGPA", value: "8.1", suffix: "/10" },
  { label: "Projects shipped", value: "7", suffix: "+" },
  { label: "Hackathons", value: "1", suffix: "st RU" },
  { label: "Class X", value: "96", suffix: "%" },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PHP", "FastAPI"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "Firebase", "InfinityFree"],
  },
  {
    category: "AI / ML",
    items: ["Pandas", "Streamlit", "Scikit-learn", "Jupyter"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export const PROJECTS = [
  {
    id: "farmconnect",
    name: "FarmConnect",
    tagline: "Agricultural marketplace connecting farmers to buyers.",
    description:
      "MERN-stack platform linking farmers with buyers and stakeholders. Won 1st Runner-Up at Hack With India.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://farmconnect-alpha.vercel.app/",
    github: null,
    badge: "Hackathon Winner",
    accent: true,
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
    size: "large",
  },
  {
    id: "heart-disease",
    name: "Heart Disease Detection",
    tagline: "ML web app predicting cardiovascular risk in real time.",
    description:
      "Python + Streamlit ML deployment with preprocessing, model serialization, and an interactive UI.",
    stack: ["Python", "Streamlit", "Pandas", "Pickle"],
    live: "#",
    github: null,
    image:
      "https://images.unsplash.com/photo-1682706841281-f723c5bfcd83?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
    size: "tall",
  },
  {
    id: "edugames",
    name: "EduGames",
    tagline: "Gamified learning platform built for SIH.",
    description:
      "Firebase-auth, interactive learning experiences and a gamified engagement loop for students.",
    stack: ["JavaScript", "Firebase", "HTML", "CSS"],
    live: "https://edugames-a2087.web.app/login",
    github: "https://github.com/Rishabh-tiwari-123/EduGames",
    size: "square",
  },
  {
    id: "ridivtalks",
    name: "RidivTalks",
    tagline: "Payment-enabled creator site for an Instagram influencer.",
    description:
      "Responsive marketing + payments site for a content creator. Live, client-facing build.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://ridivtalks.in/",
    github: null,
    size: "square",
  },
  {
    id: "rajatcv",
    name: "SAP Portfolio · Rajat",
    tagline: "Professional portfolio for an SAP expert.",
    description:
      "Performance-optimized, responsive portfolio showcasing expertise and services.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://rajatcv.free.nf/",
    github: null,
    size: "square",
  },
  {
    id: "sap-mastery",
    name: "SAP Mastery",
    tagline: "Online platform for SAP training & courses.",
    description:
      "Structured course navigation, lesson workflows, and learner-friendly UI in PHP/JS.",
    stack: ["PHP", "JavaScript", "CSS"],
    live: "https://myweb.nfy.fyi/",
    github: null,
    size: "square",
  },
  {
    id: "banarasi-kalakari",
    name: "Banarasi Kalakari",
    tagline: "E-commerce promoting Banarasi handicrafts globally.",
    description:
      "Built and managed an online storefront giving local artisans worldwide reach.",
    stack: ["Wix", "E-Commerce"],
        live: "https://www.banarasikalakari.com/",
    github: null,
    size: "square",
  },
];

export const EDUCATION = [
  {
    period: "2024 — 2028",
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    degree: "B.Tech, Computer Science & Engineering",
    detail: "CGPA 8.1 / 10",
  },
  {
    period: "Class XII",
    institution: "St. Mary's Convent School, Varanasi",
    degree: "Higher Secondary",
    detail: "80%",
  },
  {
    period: "Class X",
    institution: "St. Mary's Convent School, Varanasi",
    degree: "Secondary",
    detail: "96%",
  },
];

export const LEADERSHIP = [
  {
    role: "Designing Head",
    org: "Computer Engineering Society, MMMUT",
    period: "2025 — Present",
    bullets: [
      "Lead branding, design and promo for technical events and workshops.",
      "Coordinate cross-team to grow event outreach & engagement.",
    ],
  },
  {
    role: "Executive Member",
    org: "Computer Engineering Society, MMMUT",
    period: "2024 — 2025",
    bullets: [
      "Organized technical events, workshops and student initiatives.",
      "Supported execution & on-ground operations for society programs.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "1st Runner-Up — Hack With India Hackathon (FarmConnect)",
  "96% in Class X",
  "Maintaining CGPA 8.1 in B.Tech CSE",
  "Promoted from Executive Member → Designing Head, CE Society MMMUT",
  "Built & deployed multiple client-facing live web platforms",
];

export const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
];
