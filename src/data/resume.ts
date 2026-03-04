export const personalInfo = {
  name: "Ayush Dubey",
  title: "Software Engineer",
  email: "ayushdubey70@gmail.com",
  location: "Gurugram, India",
  avatarUrl: "https://avatars.githubusercontent.com/u/25736781?v=4",
  resumeUrl: "https://drive.google.com/file/d/1Gfhmi0NKrERDKePHSzApJEu1A3KgVEbt/view?usp=sharing",
  summary:
    "Software Engineer with 4+ years of experience building scalable cross-platform apps and SaaS products. Experienced in Flutter, iOS, Android, backend APIs, microservices, cloud architecture, and AI integrations.",
  bio: "I'm a passionate Software Engineer based in India with extensive expertise in mobile application development. Currently, I serve as the Lead Mobile Engineer at Twin.Shop, where I'm leading the mobile efforts for an innovative AI-powered virtual try-on and shopping platform. I also maintained several Android Custom ROMs at XDA Developers as a Recognized Developer, which gave me a deep understanding of Android internals and system architecture.",
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
  { label: "GitHub Repos", value: "127+" },
  { label: "Users Impacted", value: "280K+" },
];

export interface Experience {
  title: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Lead Engineer – Mobile",
    company: "Twin.Shop",
    url: "https://www.twin.shop/",
    location: "Gurugram, India",
    period: "Jul 2025 – Present",
    bullets: [
      "Leading mobile development for an AI-powered virtual try-on platform used by thousands of shoppers.",
      "Architected scalable mobile infrastructure — defined standards for performance, modularity, and test coverage.",
      "Integrated on-device AI, push notifications, and offline caching for high-traffic scenarios.",
      "Mentored 3 junior engineers; conducted architecture reviews and drove release management.",
    ],
  },
  {
    title: "Software Engineer – Mobile",
    company: "RentOk",
    url: "https://rentok.com/",
    location: "Gurugram, India",
    period: "Dec 2023 – Jul 2025",
    bullets: [
      "Built mobile apps serving 30K+ property owners and 250K+ tenants across iOS and Android.",
      "Led iOS development for Manager App — shipped 12+ releases with measurable adoption growth.",
      "Developed white-label Tenant App SDK that drove 80% enterprise revenue growth.",
      "Built AI-powered attendance system with face recognition and geolocation — improved check-in accuracy by 40%.",
      "Designed smart complaint module with AI categorization — reduced resolution time by 50%.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Rooftop",
    url: "https://rooftopapp.com/",
    location: "Remote",
    period: "Jul 2021 – Jun 2022",
    bullets: [
      "Built the company's first cross-platform mobile and web product using Flutter from scratch.",
      "Delivered MVP that secured early-stage clients and investor interest within 3 months.",
      "Set up CI/CD pipelines (GitHub Actions, Codemagic) and managed Play Store releases.",
      "Integrated payments (Razorpay), auth (Firebase), and analytics (Facebook Pixel, GA).",
    ],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "Dart",
      "Kotlin",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "GoLang",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "Flutter",
      "React.js",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
      "Jetpack Compose",
      "Redux",
    ],
  },
  {
    name: "Mobile & DevTools",
    skills: [
      "Git",
      "Linux",
      "Firebase",
      "GitHub Actions",
      "Codemagic",
      "Jenkins",
      "Docker",
      "Crashlytics",
      "Postman",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma ORM"],
  },
  {
    name: "Cloud & Backend",
    skills: [
      "AWS (Lambda, S3, RDS)",
      "GCP",
      "Microservices",
      "API Design",
      "Event-driven Architecture",
      "Caching",
    ],
  },
  {
    name: "Testing",
    skills: [
      "Unit Testing",
      "Widget Testing",
      "Integration Testing",
      "Espresso",
      "XCTest",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Twin.shop",
    description:
      "AI-powered virtual try-on and shopping app. Led mobile architecture and on-device AI integration.",
    tags: ["Flutter", "AI/ML", "Mobile", "Architecture"],
    url: "https://www.twin.shop/",
  },
  {
    title: "RentOk Manager App",
    description:
      "Flagship B2B property management app serving 30K+ owners. Led iOS development and feature delivery.",
    tags: ["Flutter", "iOS", "B2B", "SaaS"],
    url: "https://rentok.com/",
  },
  {
    title: "Tenant App SDK",
    description:
      "White-label SDK for B2B partner apps that contributed to 80% enterprise revenue growth.",
    tags: ["Flutter", "SDK", "B2B", "White-label"],
  },
  {
    title: "AI Attendance System",
    description:
      "Face recognition + geolocation check-in system that improved accuracy by 40%.",
    tags: ["AI", "Face Recognition", "Geolocation", "QR"],
  },
  {
    title: "Dynamic Branding Library",
    description:
      "Flutter module with runtime logo/icon switching and Android-specific platform logic.",
    tags: ["Flutter", "Android", "Branding", "Module"],
  },
  {
    title: "Custom Android ROMs",
    description:
      "Maintainer at XDA Developers — built optimized system images, kernel configs, and device trees for multiple devices.",
    tags: ["Android", "Linux", "Kernel", "Open Source"],
    url: "https://forum.xda-developers.com/m/ayushd70.5889244/",
  },
  {
    title: "LeetCode Solutions",
    description:
      "Comprehensive collection of LeetCode problem solutions in C++ and other languages.",
    tags: ["C++", "Algorithms", "Data Structures"],
    url: "https://github.com/Ayushd70/LeetCodeSolutions",
  },
  {
    title: "Pexflut",
    description:
      "Flutter app to display and play videos/images using the Pexels API.",
    tags: ["Flutter", "Dart", "API", "Media"],
    url: "https://github.com/Ayushd70/Pexflut",
  },
];

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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
