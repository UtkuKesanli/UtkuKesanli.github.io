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
    shortDescription: 'AI-assisted mobile storytelling product designed, built and shipped end-to-end.',
    status: 'Released',
    year: '2026',
    technologies: ['Flutter', 'Firebase', 'AI', 'IAP'],
    featured: true,
    href: 'https://apps.apple.com/tr/app/talevd/id6788747924',
  },
  {
    slug: 'evender',
    title: 'Evender',
    shortDescription: 'A calendar-first mobile product that brings personal plans and culture releases together.',
    status: 'In development',
    year: '2026',
    technologies: ['Flutter', 'Firebase', 'TypeScript'],
    featured: true,
    href: 'https://github.com/UtkuKesanli/evender',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
