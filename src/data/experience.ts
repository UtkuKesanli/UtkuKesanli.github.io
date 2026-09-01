export type Experience = {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Mobile & AI Development Intern',
    organization: 'İzmir Bakırçay Üniversitesi',
    period: 'Feb 2024 — Jun 2024',
    location: 'Izmir, Türkiye',
    summary:
      'Worked in a four-person team on an AI-assisted stock market prediction product approved for KOSGEB support.',
    highlights: [
      'Contributed to forecasting experiments using historical stock data and financial news sentiment on Google Cloud.',
      'Designed the initial Flutter UI structure, screen flows and presentation of model-generated predictions.',
    ],
  },
];
