export type ProjectStatus = 'Released' | 'In development' | 'Prototype';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  status: ProjectStatus;
  year: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  href?: string;
  linkLabel?: string;
  icon?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: 'talevd',
    title: 'TaleVD',
    subtitle: 'AI-Powered Illustrated Children’s Story App',
    shortDescription:
      'A production iOS application for creating personalized, AI-generated and illustrated children’s stories. I independently designed, developed, tested and released the complete product — from Flutter UI and Firebase architecture to AI workflows, subscriptions, security and App Store publication.',
    status: 'Released',
    year: '2026',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'OpenAI API', 'App Check', 'IAP'],
    highlights: [
      'Designed and developed independently end-to-end',
      'Secure Firebase backend and structured AI generation workflow',
      'Subscriptions, credits, localization and production App Store release',
    ],
    featured: true,
    href: 'https://apps.apple.com/tr/app/talevd/id6788747924',
    linkLabel: 'View on App Store',
    icon: '/projects/talevd/icon.webp',
    images: ['/projects/talevd/create.webp', '/projects/talevd/story.webp', '/projects/talevd/premium.webp'],
  },
  {
    slug: 'focial',
    title: 'Focial',
    subtitle: 'AI-Powered Food & Social Platform',
    shortDescription:
      'A food-focused mobile platform combining social networking, recipe discovery and AI-assisted cooking. In a three-person team, I owned the Figma product design and complete Flutter frontend, including social flows, a large recipe catalogue, AI interfaces and Google Play billing states.',
    status: 'Prototype',
    year: '2024 — 2025',
    technologies: ['Flutter', 'Dart', 'Figma', 'REST APIs', 'Google Play Billing'],
    highlights: [
      'Owned the complete Flutter frontend and mobile product design',
      'Integrated a recipe dataset of approximately 75,000 meals',
      'Built social, AI-assisted cooking and premium purchase experiences',
    ],
    featured: false,
    href: 'https://www.figma.com/design/GBq1Lk2WUMl7pBrh3gwc6r/Focial?m=auto&t=FnJofA8SSdlfZAvF-1',
    linkLabel: 'Explore in Figma',
    icon: '/projects/focial/icon.webp',
    images: ['/projects/focial/all-in-one.webp', '/projects/focial/forky.webp', '/projects/focial/share.webp'],
  },
  {
    slug: 'evender',
    title: 'Evender',
    subtitle: 'Calendar-First Culture & Release Tracker',
    shortDescription:
      'An in-development mobile product that brings personal planning together with upcoming movies, series, games, anime, books and sports dates. The project is being built as a scalable Flutter and Firebase product with a strong focus on low-cost data pipelines.',
    status: 'In development',
    year: '2026',
    technologies: ['Flutter', 'Firebase', 'TypeScript', 'Firestore'],
    highlights: [
      'Currently being designed and built as a solo project',
      'Data-driven calendar aggregation across multiple content categories',
      'Architecture planned for incremental category and data-source expansion',
    ],
    featured: true,
    href: 'https://github.com/UtkuKesanli/evender',
    linkLabel: 'View on GitHub',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
