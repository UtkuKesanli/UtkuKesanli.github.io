export type ProjectStatus = 'Released' | 'In development' | 'Prototype';

export type ProjectDetail = {
  title: string;
  text: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  role: string;
  team: string;
  platform: string;
  keyOutcome: string;
  status: ProjectStatus;
  year: string;
  technologies: string[];
  highlights: string[];
  details: ProjectDetail[];
  href?: string;
  linkLabel?: string;
  icon?: string;
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: 'talevd',
    title: 'TaleVD',
    subtitle: 'AI-Powered Illustrated Children’s Story App',
    shortDescription:
      'Independently released an iOS story app with AI illustrations, subscriptions and 10-language UI and story generation.',
    role: 'Product design & development',
    team: 'Solo',
    platform: 'iOS',
    keyOutcome: 'App Store release · UI and story generation in 10 languages',
    status: 'Released',
    year: '2026',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'OpenAI API', 'App Check', 'IAP'],
    highlights: [
      'Designed and developed independently end-to-end',
      'Secure Firebase backend and structured AI generation workflow',
      '10-language UI and story generation; production App Store release',
    ],
    details: [
      {
        title: 'Product ownership',
        text: 'Owned the complete mobile product from initial UX and interface design through implementation, testing, production configuration and App Store release. The application includes onboarding, authentication, story creation, generation progress, reading, editing, library management, settings, reporting and account deletion flows.',
      },
      {
        title: 'Backend & security',
        text: 'Built the backend around Firebase Authentication, Firestore, Storage and Cloud Functions, with App Check, Security Rules and server-side handling for sensitive operations. Added safeguards for credit abuse and account recreation while keeping the generation flow usable for legitimate users.',
      },
      {
        title: 'AI & story workflow',
        text: 'Integrated AI-assisted story and illustration generation behind structured validation and generation states, then translated the outputs into a reading-first mobile experience with editable stories, reusable library content and child-focused presentation.',
      },
      {
        title: 'Language support',
        text: 'Both the app interface and story generation support English, Turkish, German, Japanese, Korean, French, Spanish, Italian, Brazilian Portuguese and Traditional Chinese (Taiwan).',
      },
      {
        title: 'Commerce & release',
        text: 'Implemented subscriptions, story-credit balances, purchase restoration, moderation and verification flows, then handled the production App Store lifecycle and release preparation end-to-end.',
      },
    ],
    href: 'https://apps.apple.com/tr/app/talevd/id6788747924',
    linkLabel: 'View on App Store',
    icon: '/projects/talevd/talevd-app-icon.webp',
    images: [
      {
        src: '/projects/talevd/showcase-create-story.webp',
        alt: 'TaleVD story creation screen with character, theme and age controls',
        width: 720,
        height: 1558,
      },
      {
        src: '/projects/talevd/showcase-story-intro.webp',
        alt: 'TaleVD story library showing personalized illustrated stories',
        width: 720,
        height: 1558,
      },
      {
        src: '/projects/talevd/showcase-story-reading.webp',
        alt: 'TaleVD illustrated story reading screen',
        width: 720,
        height: 1558,
      },
      {
        src: '/projects/talevd/showcase-premium.webp',
        alt: 'TaleVD premium plan and story credit benefits screen',
        width: 720,
        height: 1558,
      },
      {
        src: '/projects/talevd/showcase-story-management.webp',
        alt: 'TaleVD story settings screen with archive and delete actions',
        width: 720,
        height: 1558,
      },
    ],
  },
  {
    slug: 'focial',
    title: 'Focial',
    subtitle: 'AI-Powered Food & Social Platform',
    shortDescription:
      'Owned the product design and Flutter frontend in a three-person team building a social food and recipe app.',
    role: 'Product design & Flutter frontend',
    team: '3 people',
    platform: 'Flutter mobile',
    keyOutcome: 'Sourced and used a catalogue of ~75,000 meals',
    status: 'Prototype',
    year: '2024 — 2025',
    technologies: ['Flutter', 'Dart', 'Figma', 'REST APIs', 'Google Play Billing'],
    highlights: [
      'Owned the complete Flutter frontend and mobile product design',
      'Sourced and used a recipe dataset of approximately 75,000 meals',
      'Built social, AI-assisted cooking and premium purchase experiences',
    ],
    details: [
      {
        title: 'Role in the product',
        text: 'Worked in a three-person team and owned the complete Flutter frontend together with the mobile product design in Figma, translating product ideas into reusable screens, navigation flows and responsive application states.',
      },
      {
        title: 'Social & discovery',
        text: 'Built profiles, follow relationships, feeds, posts, comments, bookmarks and search experiences. The team sourced and used a catalogue of roughly 75,000 meals for recipe discovery alongside REST API integrations.',
      },
      {
        title: 'AI cooking experiences',
        text: 'Designed and implemented interfaces for an AI cooking assistant, recipe generation and related voice/image-assisted experiences while handling loading, empty, success and failure states across asynchronous API workflows.',
      },
      {
        title: 'Premium & delivery',
        text: 'Implemented Google Play in-app purchase states and contributed to closed-testing preparation, store assets and Play Console workflows while coordinating frontend requirements with the rest of the team.',
      },
    ],
    href: 'https://www.figma.com/design/GBq1Lk2WUMl7pBrh3gwc6r/Focial?m=auto&t=FnJofA8SSdlfZAvF-1',
    linkLabel: 'Explore in Figma',
    icon: '/projects/focial/focial-logo.png',
    images: [
      {
        src: '/projects/focial/showcase-home.png',
        alt: 'Focial home feed combining recipes, social posts and food discovery',
        width: 166,
        height: 296,
      },
      {
        src: '/projects/focial/showcase-recipes.png',
        alt: 'Focial recipe discovery and catalogue screen',
        width: 166,
        height: 296,
      },
      {
        src: '/projects/focial/showcase-ai-assistant.png',
        alt: 'Focial AI cooking assistant interface',
        width: 166,
        height: 296,
      },
      {
        src: '/projects/focial/showcase-profile.png',
        alt: 'Focial user profile and saved food content screen',
        width: 166,
        height: 296,
      },
      {
        src: '/projects/focial/showcase-explore.png',
        alt: 'Focial explore screen for discovering food content',
        width: 166,
        height: 296,
      },
      {
        src: '/projects/focial/showcase-all-foods.png',
        alt: 'Focial all-foods catalogue and filtering screen',
        width: 166,
        height: 296,
      },
    ],
  },
  {
    slug: 'evender',
    title: 'Evender',
    subtitle: 'Calendar-First Culture & Release Tracker',
    shortDescription:
      'Exploring a calendar for entertainment releases, sports dates and personal planning through an early Flutter prototype.',
    role: 'Product design & development',
    team: 'Solo',
    platform: 'Flutter mobile prototype',
    keyOutcome: 'Early Flutter prototype available on GitHub',
    status: 'In development',
    year: '2026',
    technologies: ['Flutter', 'Firebase (planned)', 'Firestore (planned)', 'TypeScript backend (planned)'],
    highlights: [
      'Currently being designed and built as a solo project',
      'Planning calendar aggregation across multiple content categories',
      'Architecture planned for incremental category and data-source expansion',
    ],
    details: [
      {
        title: 'Product direction',
        text: 'Evender is designed around a single calendar surface that combines personal planning with upcoming entertainment, culture and sports dates so users can follow what matters without maintaining several separate tracking apps.',
      },
      {
        title: 'Expandable data model',
        text: 'The proposed architecture uses category and source abstractions so movies, series, games, anime, books and sports can be expanded independently without coupling the UI to one provider or one fixed content schema.',
      },
      {
        title: 'Backend approach',
        text: 'The planned stack combines Flutter, Firebase and TypeScript-based ingestion or synchronization jobs, with Firestore used as a normalized application layer between external sources and the mobile client.',
      },
      {
        title: 'Development priority',
        text: 'Because the project is being built solo, the architecture prioritizes low recurring cost, replaceable data sources and gradual rollout rather than expensive all-at-once integrations.',
      },
    ],
    href: 'https://github.com/UtkuKesanli/evender',
    linkLabel: 'View on GitHub',
  },
];
