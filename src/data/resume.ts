export const personalInfo = {
  name: "Ayush Dubey",
  title: "Software Engineer",
  email: "ayushdubey70@gmail.com",
  location: "Gurugram, India",
  avatarUrl: "https://avatars.githubusercontent.com/u/25736781?v=4",
  resumeUrl: "/Ayush_Dubey_Resume.pdf",
  summary:
    "Software Engineer with 4+ years of experience building scalable cross-platform apps and SaaS products. Experienced in Flutter, iOS, Android, backend APIs, microservices, cloud architecture, and AI integrations.",
  bio: "I'm a Software Engineer based in India, currently leading mobile engineering at Twin.shop — an AI-powered virtual try-on and shopping platform. I previously built Flutter SaaS and white-label SDKs at RentOk serving hundreds of thousands of users, and maintained custom Android ROMs as an XDA Recognized Developer.",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Ayushd70", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayushd70/",
    icon: "linkedin",
  },
  { name: "X (Twitter)", url: "https://x.com/Ayushd70", icon: "twitter" },
  { name: "Telegram", url: "https://t.me/Ayushd70", icon: "send" },
  { name: "Email", url: "mailto:ayushdubey70@gmail.com", icon: "mail" },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Users Impacted", value: "380K+" },
  { label: "Apps on Play & App Store", value: "20+" },
];

export interface Experience {
  title: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  bullets: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export const experiences: Experience[] = [
  {
    title: "Lead Engineer – Flutter",
    company: "Twin.shop",
    url: "https://www.twin.shop/",
    location: "Gurugram, India",
    period: "Jul 2025 – Present",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=shop.twin.fashionapp&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/twin-try-anything-on-you/id6747106546",
    bullets: [
      "Lead mobile engineering for Twin.shop, an AI-powered virtual try-on and shopping platform.",
      "Own Flutter architecture, feature delivery, release planning, performance, and production-quality mobile standards.",
      "Build AI-backed shopping and virtual try-on flows with design, backend, and AI teams.",
      "Ship generative AI experiences on mobile — UX, API contracts, latency handling, loading states, and fallbacks.",
      "Design reusable Flutter components for image-heavy shopping, product discovery, and personalized flows.",
      "Drive modular structure, maintainable state management, analytics readiness, and scalable release workflows.",
    ],
  },
  {
    title: "SDE-2 – Flutter",
    company: "RentOk",
    url: "https://rentok.com/",
    location: "Gurugram, India",
    period: "Dec 2023 – Jul 2025",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=net.eazypg.eazypgmanager&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/rentok-pg-hostel-flat-manager/id6553993616",
    bullets: [
      "Promoted from SDE-1 to SDE-2 based on ownership of iOS delivery, white-label SDK work, and cross-platform feature leadership.",
      "Built Flutter SaaS products serving 30,000+ property owners and 250,000+ tenants.",
      "Led iOS development for the Manager App and migrated the Tenant App to a modern Flutter architecture.",
      "Developed a white-label Tenant App SDK for partner-branded apps, contributing to ~80% enterprise revenue growth.",
      "Built a dynamic branding library for runtime logo/icon switching with Android-specific app identity handling.",
      "Delivered AI attendance and cafeteria modules using face recognition, geolocation, and QR — reducing manual effort by up to ~70%.",
      "Designed an AI-assisted complaint-management module with categorization and priority routing, cutting resolution time by ~50%.",
    ],
  },
  {
    title: "Founding Engineer – Flutter",
    company: "Rooftop",
    url: "https://rooftopapp.com/",
    location: "Remote",
    period: "Jul 2021 – Jun 2022",
    bullets: [
      "Built the company's first Flutter mobile and web product from prototype to early production.",
      "Owned mobile architecture, reusable UI components, Firebase integration, and release-readiness for launch.",
      "Managed Play Store and Web releases, CI/CD with GitHub Actions and Codemagic, and repository workflows.",
      "Integrated Razorpay, Firebase Auth, analytics, event tracking, modular structure, SEO, and unit/widget tests.",
    ],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Riverpod",
      "Provider",
      "BLoC",
      "go_router",
      "Material 3",
      "Firebase",
      "App Store",
      "Play Store",
    ],
  },
  {
    name: "AI / ML",
    skills: [
      "On-device LLMs",
      "RAG",
      "Local inference",
      "Embeddings",
      "Vector search",
      "Multimodal AI",
      "Face recognition",
    ],
  },
  {
    name: "AI Tools",
    skills: [
      "Cursor",
      "Claude Code",
      "GitHub Copilot",
      "LLM-assisted debugging",
      "Refactoring",
      "Test generation",
    ],
  },
  {
    name: "Backend / Web",
    skills: [
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
    ],
  },
  {
    name: "Data / Cloud / DevOps",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "ObjectBox",
      "AWS",
      "GCP",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Postman",
    ],
  },
];

export { projects } from "./projects";
export type { Project } from "./projects";

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "St. Thomas' College of Engineering & Technology",
  url: "https://stcet.ac.in/",
  location: "Kolkata, India",
  period: "Aug 2019 – Jul 2023",
  gpa: "9.50",
  coursework: ["OOPS Concepts", "Database Fundamentals", "OS Fundamentals"],
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/work/" },
  { label: "Blog", href: "/blog/" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];
