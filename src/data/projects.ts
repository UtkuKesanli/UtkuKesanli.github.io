export type ProjectStatus = 'Released' | 'In development' | 'Prototype';

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  status: ProjectStatus;
  year: string;
  technologies: string[];
  featured: boolean;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: 'talevd',
    title: 'TaleVD',
    shortDescription:
      'A production iOS application for creating personalized, AI-generated and illustrated children’s stories. Designed, built and released end-to-end.',
    status: 'Released',
    year: '2026',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'OpenAI API', 'IAP'],
    featured: true,
    href: 'https://apps.apple.com/tr/app/talevd/id6788747924',
  },
  {
    slug: 'focial',
    title: 'Focial',
    shortDescription:
      'A food-focused social platform combining recipe discovery, social features and AI-assisted cooking experiences, designed in Figma and implemented in Flutter.',
    status: 'Prototype',
    year: '2024 — 2025',
    technologies: ['Flutter', 'Dart', 'Figma', 'REST APIs', 'Google Play Billing'],
    featured: false,
    href: 'https://www.figma.com/design/GBq1Lk2WUMl7pBrh3gwc6r/Focial?m=auto&t=FnJofA8SSdlfZAvF-1',
  },
  {
    slug: 'evender',
    title: 'Evender',
    shortDescription:
      'A calendar-first mobile product that brings personal plans together with upcoming movies, series, games, books, events and sports dates.',
    status: 'In development',
    year: '2026',
    technologies: ['Flutter', 'Firebase', 'TypeScript', 'Firestore'],
    featured: true,
    href: 'https://github.com/UtkuKesanli/evender',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
