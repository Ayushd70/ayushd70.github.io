export interface ProjectSection {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  category: string;
  tags: string[];
  role?: string;
  period?: string;
  featured?: boolean;
  highlights: string[];
  sections: ProjectSection[];
  stack: string[];
  url?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  pubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "manthan",
    title: "Manthan",
    category: "Mobile App",
    description:
      "Privacy-first on-device AI assistant with local LLM inference, multimodal image input, voice, and RAG over local files — no cloud, no leaks.",
    overview:
      "Manthan (Sanskrit: मंथन, “churning”) is a private, on-device AI assistant. Chat with local LLMs, reason over images, talk to your own documents, and dictate with your voice — 100% on-device. Switch on airplane mode and everything still works.",
    tags: ["Flutter", "On-device LLMs", "RAG", "ObjectBox", "Privacy"],
    stack: [
      "Flutter",
      "Dart",
      "LiteRT / MediaPipe Gemma",
      "llama.cpp / GGUF",
      "ObjectBox HNSW",
      "Dart FFI",
    ],
    role: "Creator",
    period: "2026",
    featured: true,
    githubUrl: "https://github.com/Ayushd70/manthan",
    url: "https://github.com/Ayushd70/manthan",
    highlights: [
      "No network during inference — no API keys, accounts, or telemetry",
      "Pluggable engines: LiteRT-LM/MediaPipe and llama.cpp behind one interface",
      "On-device RAG with chunking, embeddings, ObjectBox HNSW, and citations",
      "Multimodal image input and on-device speech-to-text",
      "Model manager with resumable downloads and checksum verification",
    ],
    sections: [
      {
        title: "Why Manthan",
        body: "Most AI apps are thin clients that stream your data to someone else’s servers. Manthan is the opposite — every token is generated on the device in your hand. The architecture prioritizes offline-first persistence, model switching, conversational UX, and device-friendly performance.",
      },
      {
        title: "Inference & RAG",
        body: "Inference is pluggable via LiteRT/MediaPipe Gemma models and llama.cpp/GGUF through Dart FFI. Documents are chunked and embedded locally, indexed with ObjectBox HNSW vector search, and answered with grounded responses and citations — all without leaving the device.",
      },
    ],
  },
  {
    slug: "twin-shop",
    title: "Twin.shop",
    category: "Mobile App",
    description:
      "AI-powered virtual try-on and shopping app. Lead mobile architecture, generative AI UX, and production Flutter standards.",
    overview:
      "Twin.shop is an AI-powered virtual try-on and shopping platform. As Lead Engineer – Flutter, I own mobile architecture, feature delivery, release planning, performance, and production-quality standards for image-heavy shopping journeys.",
    tags: ["Flutter", "AI/ML", "Mobile", "Architecture"],
    stack: ["Flutter", "Dart", "Riverpod", "Firebase", "CI/CD", "Store releases"],
    role: "Lead Engineer – Flutter",
    period: "Jul 2025 – Present",
    url: "https://www.twin.shop/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=shop.twin.fashionapp&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/twin-try-anything-on-you/id6747106546",
    highlights: [
      "Lead Flutter architecture and release workflows for a consumer AI shopping app",
      "Ship generative AI try-on experiences with latency handling and fallbacks",
      "Design reusable components for product discovery and personalized flows",
      "Collaborate with design, backend, and AI teams on API contracts and UX",
    ],
    sections: [
      {
        title: "Role",
        body: "I drive modular code structure, maintainable state management, analytics readiness, debugging practices, and scalable release workflows — while shipping AI-backed shopping and virtual try-on flows in production.",
      },
      {
        title: "Product focus",
        body: "The mobile client is image-heavy and latency-sensitive. Work spans loading states, offline-friendly caching patterns, push notifications, and production integration of generative AI experiences that feel responsive even when models or APIs are slow.",
      },
    ],
  },
  {
    slug: "rentok-manager",
    title: "RentOk Manager App",
    category: "Mobile App",
    description:
      "Flagship B2B property management app serving 30K+ owners. Led iOS development and feature delivery across SaaS workflows.",
    overview:
      "RentOk’s Manager App is the flagship B2B property management product for PG, hostel, and flat operators. I led iOS development, shipped major feature modules, and helped scale Flutter delivery across a large multi-app portfolio.",
    tags: ["Flutter", "iOS", "B2B", "SaaS"],
    stack: ["Flutter", "Dart", "iOS", "Firebase", "REST APIs", "CI/CD"],
    role: "SDE-2 – Flutter",
    period: "Dec 2023 – Jul 2025",
    url: "https://rentok.com/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=net.eazypg.eazypgmanager&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/rentok-pg-hostel-flat-manager/id6553993616",
    highlights: [
      "Products serving 30,000+ property owners and 250,000+ tenants",
      "Led iOS development and multi-release delivery for Manager App",
      "Promoted from SDE-1 to SDE-2 for ownership and impact",
      "Shipped attendance, cafeteria, and complaint workflows at scale",
    ],
    sections: [
      {
        title: "Impact",
        body: "Work spanned property operations, tenant workflows, AI-assisted modules, and partner delivery. The Manager App became a core surface for owners to run day-to-day operations across iOS and Android.",
      },
      {
        title: "Engineering",
        body: "Focus areas included Flutter architecture, iOS release quality, modular feature delivery, and collaboration with backend/product/design to ship reliable SaaS mobile experiences.",
      },
    ],
  },
  {
    slug: "tenant-app-sdk",
    title: "Tenant App SDK",
    category: "SDK",
    description:
      "White-label SDK for partner-branded tenant apps that contributed to ~80% enterprise revenue growth.",
    overview:
      "A Flutter white-label SDK that let enterprise partners ship branded tenant apps with shared product modules and partner-specific configuration — a major driver of RentOk’s enterprise revenue growth.",
    tags: ["Flutter", "SDK", "B2B", "White-label"],
    stack: ["Flutter", "Dart", "SDK design", "Multi-tenant config", "Android / iOS"],
    role: "SDE-2 – Flutter",
    period: "2024 – 2025",
    highlights: [
      "White-label Tenant App SDK for partner-branded apps",
      "Contributed to ~80% enterprise revenue growth",
      "Configuration-driven flows and reusable mobile modules",
      "Enabled rapid partner onboarding without full rewrites",
    ],
    sections: [
      {
        title: "Problem",
        body: "Enterprise partners needed their own branded tenant apps without forking the entire codebase. The SDK packaged shared product capabilities behind partner identity, theming, and configuration.",
      },
      {
        title: "Approach",
        body: "Built reusable modules and configuration-driven flows so partner apps could share core features while presenting distinct branding and operational settings.",
      },
    ],
  },
  {
    slug: "ai-attendance",
    title: "AI Attendance System",
    category: "Feature Module",
    description:
      "Face recognition, geolocation, and QR check-in flows that reduced manual attendance effort by up to ~70%.",
    overview:
      "An AI-backed attendance and cafeteria module for RentOk properties, combining face recognition, geolocation, and QR workflows to replace slow manual check-ins.",
    tags: ["AI", "Face Recognition", "Geolocation", "QR"],
    stack: ["Flutter", "Face recognition", "Geolocation", "QR", "Mobile UX"],
    role: "SDE-2 – Flutter",
    period: "2024 – 2025",
    highlights: [
      "Face recognition + geolocation + QR check-in",
      "Reduced manual attendance effort by up to ~70%",
      "Production workflows for property operators and residents",
    ],
    sections: [
      {
        title: "Outcome",
        body: "Operators gained faster, more accurate attendance capture with fewer manual interventions, while residents got a simpler check-in experience across supported flows.",
      },
    ],
  },
  {
    slug: "dynamic-branding",
    title: "Dynamic Branding Library",
    category: "Library",
    description:
      "Flutter module with runtime logo/icon switching and Android-specific app identity handling for multi-tenant delivery.",
    overview:
      "A Flutter branding module that supports runtime logo/icon switching and Android-specific app identity handling — critical for multi-tenant and white-label delivery.",
    tags: ["Flutter", "Android", "Branding", "Module"],
    stack: ["Flutter", "Android", "Platform channels", "App identity"],
    role: "SDE-2 – Flutter",
    period: "2024 – 2025",
    highlights: [
      "Runtime logo and icon switching",
      "Android-specific app identity handling",
      "Supports partner-branded multi-tenant apps",
    ],
    sections: [
      {
        title: "Why it mattered",
        body: "White-label partners needed distinct visual identity without rebuilding binaries for every customer. The library made branding a runtime and platform concern instead of a fork tax.",
      },
    ],
  },
  {
    slug: "swipe-reveal-card",
    title: "swipe_reveal_card",
    category: "Package",
    description:
      "Lightweight Flutter card with horizontal swipe-to-reveal actions — published on pub.dev.",
    overview:
      "A lightweight Flutter package that adds horizontal swipe-to-reveal actions to cards — useful for mail-style and list-action UIs.",
    tags: ["Flutter", "pub.dev", "UI", "Package"],
    stack: ["Flutter", "Dart"],
    period: "2025",
    url: "https://pub.dev/packages/swipe_reveal_card",
    pubUrl: "https://pub.dev/packages/swipe_reveal_card",
    githubUrl: "https://github.com/Ayushd70/swipe_reveal_card",
    highlights: [
      "Horizontal swipe-to-reveal actions",
      "Published on pub.dev",
      "Designed for lightweight list and card UIs",
    ],
    sections: [
      {
        title: "Usage",
        body: "Drop in a swipeable card wrapper to reveal contextual actions without building custom gesture stacks from scratch.",
      },
    ],
  },
  {
    slug: "scroll-dismissible-page",
    title: "scroll_dismissible_page",
    category: "Package",
    description:
      "Scroll-aware swipe-down-to-dismiss page wrapper. Nested scrollables keep working; dismiss engages only at the top edge.",
    overview:
      "A Flutter page wrapper with scroll-aware swipe-down-to-dismiss. Nested scrollables keep working; dismiss only engages at the top edge.",
    tags: ["Flutter", "pub.dev", "UI", "Package"],
    stack: ["Flutter", "Dart", "Gestures", "Scroll coordination"],
    period: "2025",
    url: "https://pub.dev/packages/scroll_dismissible_page",
    pubUrl: "https://pub.dev/packages/scroll_dismissible_page",
    githubUrl: "https://github.com/Ayushd70/scroll_dismissible_page",
    highlights: [
      "Swipe-down-to-dismiss that respects nested scrolling",
      "Dismiss engages only when the scrollable is at the top",
      "Published on pub.dev",
    ],
    sections: [
      {
        title: "Problem",
        body: "Naive dismissible pages fight nested ListViews and scrollables. This package coordinates gestures so content scrolling stays natural while still allowing a clean dismiss interaction at the edge.",
      },
    ],
  },
  {
    slug: "segmented-progress-indicator",
    title: "segmented_progress_indicator",
    category: "Package",
    description:
      "Segmented arc progress and fading spinner widgets for Flutter.",
    overview:
      "Flutter widgets for segmented arc progress and fading spinner indicators — handy for loaders and status visuals.",
    tags: ["Flutter", "UI", "Package"],
    stack: ["Flutter", "Dart", "CustomPainter"],
    period: "2025",
    githubUrl: "https://github.com/Ayushd70/segmented_progress_indicator",
    url: "https://github.com/Ayushd70/segmented_progress_indicator",
    highlights: [
      "Segmented arc progress indicator",
      "Fading spinner variant",
      "Reusable Flutter UI package",
    ],
    sections: [
      {
        title: "Details",
        body: "Provides composable progress visuals that go beyond CircularProgressIndicator for branded loading and status states.",
      },
    ],
  },
  {
    slug: "infinite-paging-widget",
    title: "infinite_paging_widget",
    category: "Package",
    description:
      "Generic infinite-scroll list and grid with load-more for Flutter.",
    overview:
      "A generic Flutter infinite-scroll list/grid helper with load-more support for paginated APIs.",
    tags: ["Flutter", "UI", "Package"],
    stack: ["Flutter", "Dart", "Pagination"],
    period: "2025",
    githubUrl: "https://github.com/Ayushd70/infinite_paging_widget",
    url: "https://github.com/Ayushd70/infinite_paging_widget",
    highlights: [
      "Infinite scroll for lists and grids",
      "Load-more pagination helpers",
      "Reusable across Flutter apps",
    ],
    sections: [
      {
        title: "Details",
        body: "Encapsulates common pagination boilerplate so product screens can focus on item UI and data sources.",
      },
    ],
  },
  {
    slug: "contoured-shadow",
    title: "contoured_shadow",
    category: "Package",
    description:
      "Shape-following soft shadow via a Flutter RenderObject widget.",
    overview:
      "A Flutter RenderObject widget that draws soft shadows that follow the child’s shape instead of a crude rectangle.",
    tags: ["Flutter", "RenderObject", "Package"],
    stack: ["Flutter", "Dart", "RenderObject"],
    period: "2025",
    githubUrl: "https://github.com/Ayushd70/contoured_shadow",
    url: "https://github.com/Ayushd70/contoured_shadow",
    highlights: [
      "Shape-following soft shadows",
      "Implemented as a RenderObject widget",
      "Useful for elevated, non-rectangular UI",
    ],
    sections: [
      {
        title: "Details",
        body: "Goes deeper than BoxShadow by contouring the shadow to the painted shape, which reads better on irregular cards and custom clipped widgets.",
      },
    ],
  },
  {
    slug: "sliding-window-indicator",
    title: "sliding_window_indicator",
    category: "Package",
    description:
      "PageView line indicator with a sliding visible window of lines.",
    overview:
      "A PageView indicator that shows a sliding window of lines — useful when there are more pages than you want to render as dots at once.",
    tags: ["Flutter", "UI", "Package"],
    stack: ["Flutter", "Dart", "PageView"],
    period: "2025",
    githubUrl: "https://github.com/Ayushd70/sliding_window_indicator",
    url: "https://github.com/Ayushd70/sliding_window_indicator",
    highlights: [
      "Sliding window of line indicators",
      "Works with PageView",
      "Keeps long page counts readable",
    ],
    sections: [
      {
        title: "Details",
        body: "Instead of an endless row of dots, the indicator keeps a fixed visible window and slides as the user pages through content.",
      },
    ],
  },
  {
    slug: "custom-android-roms",
    title: "Custom Android ROMs",
    category: "Open Source",
    description:
      "XDA Recognized Developer — maintained custom Android ROMs and device trees for Xiaomi devices, focusing on optimized builds, bring-up, and system-level debugging.",
    overview:
      "As an XDA Recognized Developer, I maintained custom Android ROMs and device-tree work for Xiaomi devices — optimized builds, compatibility, device bring-up, and system-level debugging.",
    tags: ["Android", "Kernel", "Open Source", "XDA"],
    stack: ["Android", "Linux", "Kernel", "Device trees", "Build systems"],
    role: "Recognized Developer",
    period: "XDA",
    url: "https://forum.xda-developers.com/m/ayushd70.5889244/",
    highlights: [
      "XDA Recognized Developer",
      "Custom ROM and device-tree maintenance",
      "Device bring-up and system-level debugging",
      "Deep Android internals experience that still informs mobile work today",
    ],
    sections: [
      {
        title: "Background",
        body: "Working close to the Android system stack — kernels, device trees, and custom images — built a lasting intuition for platform behavior, performance, and native debugging that carries into Flutter and production mobile engineering.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
