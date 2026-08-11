export interface BlogSection {
  title?: string;
  body: string;
  code?: string;
  codeLang?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  featured?: boolean;
  relatedWorkSlug?: string;
  tags: string[];
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "introducing-manthan",
    title: "Introducing Manthan: On-device AI Without the Cloud",
    description:
      "Why I built a privacy-first Flutter assistant where every token stays on your device — local LLMs, multimodal input, and on-device RAG.",
    category: "Release",
    date: "2026-08-10",
    readingTime: "7 min",
    featured: true,
    relatedWorkSlug: "manthan",
    tags: ["Flutter", "On-device AI", "RAG", "Privacy"],
    sections: [
      {
        body: "Most AI apps are thin clients. You type a prompt, your data leaves the phone, and someone else’s GPU streams tokens back. That model is fine for many products — until you care about privacy, offline use, or owning the full stack.",
      },
      {
        body: "Manthan (Sanskrit: मंथन, “churning”) is the opposite idea. Every token is generated on the device in your hand. Chat with local LLMs, reason over images, talk to your own documents, and dictate with your voice. Switch on airplane mode and it still works.",
      },
      {
        title: "The name",
        body: "The name comes from Samudra Manthan — the churning of the ocean to extract amrita, the nectar of wisdom. That’s the product metaphor: churn through thoughts, notes, and questions to extract clarity, entirely on your own device.",
      },
      {
        title: "What ships today",
        body: "Manthan is a Flutter app with a feature-first clean architecture. The UI never depends on a vendor runtime. Controllers talk to an LlmEngine interface, so LiteRT/MediaPipe Gemma and llama.cpp/GGUF are drop-in backends behind one seam. A built-in demo engine means you can explore the whole app before downloading a model.",
      },
      {
        title: "On-device RAG",
        body: "Documents are imported, chunked, and embedded locally, then indexed with ObjectBox HNSW vector search. Answers come back grounded, with citations — no remote vector DB, no account, no telemetry during inference.",
      },
      {
        title: "Why Flutter",
        body: "I wanted one codebase across Android, iOS, and desktop, with enough room for FFI, isolates, and custom RenderObjects when the engine work demanded it. Flutter’s UI layer stays productive; Dart FFI and isolates carry the heavy inference path.",
      },
      {
        title: "What’s next",
        body: "The roadmap is still focused on real models, better RAG quality, and device-friendly performance. If you care about private assistants that don’t phone home, the repo is open: github.com/Ayushd70/manthan.",
      },
    ],
  },
  {
    slug: "building-twin-shop",
    title: "Building Twin.shop: Flutter for AI Virtual Try-On",
    description:
      "Notes from leading Flutter on an image-heavy, latency-sensitive AI shopping app — architecture, generative UX, and production standards.",
    category: "Mobile",
    date: "2026-07-20",
    readingTime: "6 min",
    featured: true,
    relatedWorkSlug: "twin-shop",
    tags: ["Flutter", "AI", "Product", "Architecture"],
    sections: [
      {
        body: "Twin.shop is an AI-powered virtual try-on and shopping platform. As Lead Engineer – Flutter, I own mobile architecture, feature delivery, release planning, and production-quality standards for journeys that are image-heavy and latency-sensitive.",
      },
      {
        title: "The hard part isn’t the button",
        body: "Generative try-on looks magical in a demo. In production it’s loading states, API contracts, fallbacks when a model is slow, offline-friendly caching, and UI that still feels responsive when the network isn’t. The mobile client has to absorb that complexity without making the shopper feel it.",
      },
      {
        title: "Architecture choices",
        body: "We keep the Flutter app modular: reusable components for product discovery, try-on interactions, and personalized flows; clear ownership for state management; analytics readiness; and release workflows that don’t rely on heroics. Standards for performance and test coverage matter more as the surface area grows.",
      },
      {
        title: "Cross-team seams",
        body: "Mobile sits between design, backend, and AI. Good contracts — request/response shapes, error modes, progressive disclosure — beat clever widgets. Most of the “AI UX” work is really product engineering: what do you show while waiting, what do you do when the result is wrong, how do you recover?",
      },
      {
        title: "Shipped where it counts",
        body: "Twin is live on the Play Store and App Store. That’s the bar for this kind of work: not a prototype, but a consumer app that has to keep releasing.",
      },
    ],
  },
  {
    slug: "white-label-flutter-sdks",
    title: "White-label Flutter SDKs That Actually Scale Partners",
    description:
      "How a Tenant App SDK and dynamic branding library helped RentOk grow enterprise revenue without forking the world.",
    category: "Engineering",
    date: "2026-06-15",
    readingTime: "6 min",
    featured: true,
    relatedWorkSlug: "tenant-app-sdk",
    tags: ["Flutter", "SDK", "B2B", "White-label"],
    sections: [
      {
        body: "At RentOk I worked on Flutter SaaS used by tens of thousands of property owners and hundreds of thousands of tenants. The enterprise twist was white-label: partners wanted branded tenant apps without waiting for a full custom build every time.",
      },
      {
        title: "The SDK bet",
        body: "We packaged shared product modules behind a Tenant App SDK — configuration-driven flows, reusable mobile modules, and partner-specific branding. That approach contributed to roughly 80% enterprise revenue growth because partners could ship faster without forking the entire codebase.",
      },
      {
        title: "Dynamic branding",
        body: "Branding isn’t just a color token. Partners needed runtime logo/icon switching and Android-specific app identity handling. The dynamic branding library made identity a platform concern instead of a permanent fork tax.",
      },
      {
        title: "What I learned",
        body: "White-label succeeds when the shared core is boring and reliable, and the extension points are explicit. If everything is configurable, nothing is. If nothing is configurable, every partner becomes a special case. The SDK lived in the middle — opinionated product, flexible identity.",
      },
      {
        title: "Promotion as a signal",
        body: "I joined as SDE-1 and was promoted to SDE-2 while owning iOS delivery, SDK work, and cross-platform feature leadership. The lesson for me: ownership of multi-app delivery compounds faster than isolated feature tickets.",
      },
    ],
  },
  {
    slug: "swipe-reveal-card",
    title: "swipe_reveal_card: Mail-style Actions Without Gesture Pain",
    description:
      "A tiny Flutter package for horizontal swipe-to-reveal actions — typed API, group behavior, zero extra dependencies.",
    category: "Package",
    date: "2026-07-31",
    readingTime: "4 min",
    featured: true,
    relatedWorkSlug: "swipe-reveal-card",
    tags: ["Flutter", "pub.dev", "UI"],
    sections: [
      {
        body: "Swipe-to-reveal actions show up in every mail and task UI. Building them from scratch means gesture arenas, programmatic open/close, and making sure only one row is open in a list. I packaged the pattern as swipe_reveal_card.",
      },
      {
        title: "What it gives you",
        body: "Swipe left to reveal Edit / Archive / Delete-style actions. There’s a SwipeRevealController for open/close/toggle, SwipeRevealGroup so only one card is open among peers, auto-close after action taps, and optional custom action widgets — with no third-party dependencies beyond Flutter.",
      },
      {
        title: "Minimal usage",
        codeLang: "dart",
        body: "Install from pub.dev, then wrap a list tile:",
        code: `SwipeRevealCard(
  group: group,
  closeOnAction: true,
  actions: [
    SwipeAction(label: 'Edit', icon: Icons.edit_outlined, onPressed: () {}),
    SwipeAction(label: 'Delete', icon: Icons.delete_outline, color: Colors.red, onPressed: () {}),
  ],
  child: const ListTile(
    title: Text('Ship checklist'),
    subtitle: Text('Docs, tests, and pub.dev dry-run'),
  ),
)`,
      },
      {
        title: "Why publish it",
        body: "I kept hitting the same gesture edge cases across apps. Small packages with a typed API beat copying a half-working StatefulWidget between repos. The package is on pub.dev and GitHub if you want the same shortcut.",
      },
    ],
  },
  {
    slug: "scroll-dismissible-page",
    title: "Dismissible Pages That Don’t Fight Nested Scroll",
    description:
      "How scroll_dismissible_page coordinates swipe-down-to-dismiss with ListViews and PageViews — dismiss only at the top edge.",
    category: "Package",
    date: "2026-08-03",
    readingTime: "4 min",
    featured: false,
    relatedWorkSlug: "scroll-dismissible-page",
    tags: ["Flutter", "Gestures", "pub.dev"],
    sections: [
      {
        body: "Gallery routes and media viewers love swipe-down-to-dismiss. Nested scrollables hate it. If you wire dismiss naively, ListViews steal the gesture or the page dismisses mid-scroll.",
      },
      {
        title: "The rule",
        body: "scroll_dismissible_page only engages dismiss when the child scroll position is at the top edge. Distance and velocity thresholds, a soft fade while dragging, and optional manual navigation keep the interaction predictable.",
      },
      {
        title: "Usage sketch",
        codeLang: "dart",
        body: "Wrap the route content:",
        code: `ScrollDismissiblePage(
  backgroundColor: Colors.black,
  onDismissed: () => debugPrint('dismissed'),
  child: Scaffold(
    backgroundColor: Colors.transparent,
    body: ListView(...),
  ),
)`,
      },
      {
        title: "Ship it once",
        body: "Gesture coordination is easy to get almost right and hard to get boringly correct. Packaging it meant the next gallery screen didn’t re-litigate nested scroll physics. Available on pub.dev.",
      },
    ],
  },
  {
    slug: "flutter-ui-micro-packages",
    title: "A Small Flutter UI Toolkit: Progress, Paging, Shadows, Indicators",
    description:
      "Four focused packages I extracted from product work — segmented progress, infinite paging, contoured shadows, and sliding window indicators.",
    category: "Tooling",
    date: "2026-08-05",
    readingTime: "5 min",
    featured: false,
    tags: ["Flutter", "Packages", "UI"],
    sections: [
      {
        body: "Not every UI idea needs a monorepo framework. Lately I’ve been extracting sharp, zero-dependency Flutter packages from patterns that kept reappearing in product code.",
      },
      {
        title: "segmented_progress_indicator",
        body: "Segmented arc progress and fading spinner widgets — useful when CircularProgressIndicator is too generic for branded loading states. Customize segment count, trail, head dot, and center values.",
      },
      {
        title: "infinite_paging_widget",
        body: "Generic infinite-scroll list/grid with load-more. Pass items and onLoadMore; get empty/loading/error/header/footer slots and guards against overlapping loads. Pagination boilerplate should not own your screen file.",
      },
      {
        title: "contoured_shadow",
        body: "BoxShadow assumes a rectangle. ContouredShadow paints from the child’s silhouette via a RenderProxyBox — opaque pixels cast shadow, transparent pixels don’t. Better for cutouts, badges, and irregular shapes.",
      },
      {
        title: "sliding_window_indicator",
        body: "PageViews with twelve pages don’t need twelve dots. A sliding window of lines keeps the indicator compact while the selection scrolls through a longer list, driven by a PageController.",
      },
      {
        title: "The theme",
        body: "Each package does one job, ships with an example app, and stays dependency-light. That’s the bar I use: if I can’t explain it in a README paragraph, it’s not ready to extract.",
      },
    ],
  },
  {
    slug: "ai-attendance-at-rentok",
    title: "Face, Geo, QR: Shipping AI Attendance in a Property App",
    description:
      "Building attendance and cafeteria flows that cut manual effort by ~70% — what mattered in production beyond the model demo.",
    category: "Product",
    date: "2026-05-20",
    readingTime: "5 min",
    featured: false,
    relatedWorkSlug: "ai-attendance",
    tags: ["Flutter", "AI", "SaaS"],
    sections: [
      {
        body: "Property operators don’t wake up wanting “AI.” They want fewer missed check-ins and less clipboard work. At RentOk we shipped attendance and cafeteria modules that combined face recognition, geolocation, and QR workflows.",
      },
      {
        title: "Production over demos",
        body: "The interesting problems were operational: what if face match fails, GPS is noisy, or a QR code is shared? Fallbacks and clear operator tooling mattered as much as the recognition step itself.",
      },
      {
        title: "Outcome",
        body: "Manual attendance effort dropped by up to ~70% on supported flows. The win wasn’t a flashy model card — it was a Flutter feature module that operators could run every day.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((post) => post.featured);
}

export function formatPostDate(date: string): string {
  return date.replaceAll("-", ".");
}
