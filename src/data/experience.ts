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
    organization: 'İzmir Bakırçay University',
    period: 'Feb 2024 — Jun 2024',
    location: 'Izmir, Türkiye · On-site',
    summary:
      'Worked in a four-person team developing an AI-assisted stock market analysis and prediction product that combined historical market data with financial-news sentiment and was approved for KOSGEB support.',
    highlights: [
      'Supported Python and Google Cloud forecasting experiments, including data preparation, preprocessing, model-output review and evaluation of market-direction signals.',
      'Helped translate model-generated predictions and sentiment indicators into product concepts that could be communicated clearly inside a mobile application.',
      'Contributed to the initial Flutter UI structure, screen hierarchy, navigation flows and visual presentation of AI-generated insights.',
    ],
  },
  {
    role: 'Artificial Intelligence Research Assistant Intern',
    organization: 'UCG Teknoloji',
    period: 'Jul 2023 — Aug 2023',
    location: 'Muğla, Türkiye · On-site',
    summary:
      'Built a practical foundation in artificial intelligence and machine learning through structured study, Python experiments and an independently developed AI project.',
    highlights: [
      'Worked through the complete machine-learning experimentation cycle: data preparation, preprocessing, model selection, training, evaluation and interpretation of results.',
      'Researched unfamiliar technical topics independently, compared alternative approaches and documented implementation decisions and experimental findings.',
      'Strengthened Python, machine-learning evaluation, technical research and evidence-driven problem-solving skills that later supported larger AI-powered mobile projects.',
    ],
  },
];
